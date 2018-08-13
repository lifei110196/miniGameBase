import { WebGL, Stage, MiniAdpter, Handler, wx, Box, SoundManager } from "./LayaAir";
import { MyUtils } from "./Utils/MyUtils";
import { GameMgr } from "./Manager/GameMgr";
async function main() {
  MiniAdpter.init(true, false);
  Laya.init(750, 1334, WebGL); //初始化引擎
  Laya.stage.scaleMode = Stage.SCALE_FIXED_AUTO;
  Laya.stage.alignH = Stage.ALIGN_CENTER;
  Laya.stage.alignV = Stage.ALIGN_MIDDLE;
  Laya.stage.bgColor = "#000000";
  var box: Box = new Box();
  box.left = box.right = box.top = box.bottom = 0;
  Laya.stage.addChild(box);
  wx.showShareMenu({
    withShareTicket: true
  });
  wx.onShareAppMessage(function () {
    return MyUtils.getShareCfg();
  });
  var query = await MyUtils.getPlace((t: Function, f: Function) => {
    wx.onShow((res: any) => {
      SoundManager.playMusic("comp/bgm.mp3");
      t(res.query);
    });
  });
  var isShare = query.isShare;
  Laya.loader.load(
    "res/atlas/comp.atlas",
    Handler.create(this, (res: any) => {
      var playerId: any = wx.getStorageSync("playerId");
      var openId: any = wx.getStorageSync("openid");
      if (playerId && openId) {
        Laya.timer.once(500, this, () => {
          Laya.stage.width = box.width;
          Laya.stage.height = box.height;
          box.removeSelf();
          GameMgr.I.initGame();
        });
      } else {
        wx.login({
          success: (res: any) => {
            MyUtils.request("/user/login", { code: res.code, type: GameMgr.I.gameType }, (res: any) => {
              if (!res.code) {
                wx.setStorageSync("playerId", res.id);
                wx.setStorageSync("openid", res.openid);
                if (isShare && res.firstLogin) {
                  MyUtils.request("/user/saveNewAdd", {
                    oldUserId: query.playerId,
                    newUserId: res.id,
                    type: GameMgr.I.gameType
                  });
                }
                Laya.timer.once(500, this, () => {
                  Laya.stage.width = box.width;
                  Laya.stage.height = box.height;
                  box.removeSelf();
                  GameMgr.I.initGame();
                });
              }
            });
          },
          fail: (res: any) => { },
          complete: (res: any) => { }
        });
      }
    })
  );
}
main();
