import { Stage, MiniAdpter, wx, Matrix, sharedCanvas, Handler, Image } from './LayaAir';
import { Ui } from './Ui/layaUI.max.all';
import { rankItem } from './Game/qiuchiqiu/rankItem';
import { FriendCloudData } from './Game/qiuchiqiu/KVData';
import { MyUtils } from './Utils/MyUtils';
async function main() {
  MiniAdpter.init(true, true);
  Laya.init(750, 1334); //初始化引擎
  Laya.stage.scaleMode = Stage.SCALE_FIXED_AUTO;
  Laya.stage.alignH = Stage.ALIGN_CENTER;
  Laya.stage.alignV = Stage.ALIGN_MIDDLE;
  Laya.stage.bgColor = "";
  var listView: Ui.rankListUI = new Ui.rankListUI();
  listView.myList.itemRender = rankItem;
  listView.myList.vScrollBarSkin = "";
  listView.myList.array = [];
  var rank1: Ui.rankViewUI = new Ui.rankViewUI();
  var rank2: Ui.rankView2UI = new Ui.rankView2UI();
  rank1.myList.renderHandler = new Handler(this, listRender)
  rank2.myList.renderHandler = new Handler(this, listRender)
  wx.onMessage(async (message: any) => {
    if (message["type"] == "resizeShared") {
      sharedCanvas.width = message.data.width;
      sharedCanvas.height = message.data.height;
      var tempMatrix: any = message.data.matrix;
      var matrix: Matrix = new Matrix();
      matrix.a = tempMatrix.a;
      matrix.b = tempMatrix.b;
      matrix.c = tempMatrix.c;
      matrix.d = tempMatrix.d;
      Laya.stage._canvasTransform = matrix; //重新设置矩阵
    } else if (message["type"] == "openRankList") {
      Laya.stage.removeChildren();
      Laya.stage.addChild(listView);
      listView.myList.array = await MyUtils.getFriendCloudStorageSync("score");
    } else if (message["type"] == "showGameOver") {
      onShowGameOver(rank1, message.data.openid)
    } else if (message["type"] == "showGameOver1") {
      onShowGameOver(rank2, message.data.openid)
    } else if (message["type"] == "openRankList2") {
      var data = message["data"]["openidList"];
      var keys = Object.keys(data);
      var uData: Array<FriendCloudData> = await MyUtils.getUserInfoByOpenIds(keys);
      uData.sort((a: FriendCloudData, b: FriendCloudData) => {
        a.scoreVal = data[a.openId];
        b.scoreVal = data[b.openId];
        if (a.scoreVal < b.scoreVal) {
          return 1;
        } else {
          return -1;
        }
      })
      uData.forEach((a: FriendCloudData, index: number) => {
        a.scoreVal = data[a.openId];
        a.index = index + 1;
      })
      listView.myList.array = uData;
    }
  });
}

async function onShowGameOver(rank: any, openid: string) {
  Laya.stage.removeChildren();
  var data = await MyUtils.getFriendCloudStorageSync("score");
  var myIndex: number;
  var openid: string = openid;
  data.forEach((el: FriendCloudData, index: number) => {
    if (el.openid == openid) {
      myIndex = index;
    }
  });
  var dtArr: Array<any> = [];
  var dtNew: Array<any> = [];
  if (myIndex - 1 >= 0) {
    dtNew.push(data[myIndex - 1]);
  }
  var dtArr1: Array<any>;
  if (data.length < 4) {
    dtArr1 = data.concat();
  } else {
    if (myIndex > data.length - 4) {
      dtArr1 = data.splice(data.length - 4, 4);
    } else {
      dtArr1 = dtNew.concat(data.splice(myIndex, 4));
    }
  }

  rank.myList.array = dtArr.concat(dtArr1);
  Laya.stage.addChild(rank);
}

function listRender(item: Image, index: number) {
  if (!item || !item.dataSource) return;
  item.skin = item.dataSource.avatarUrl;
}
main();
