
import { MyUtils } from "../Utils/MyUtils";
import { wx, Event } from "../LayaAir";
import { GameMgr } from "../Manager/GameMgr";
import { ShareCanvasMgr } from "../Manager/ShareCanvasMgr";
import { GameOver } from "./GameOver";
import { Ui } from "../ui/layaUI.max.all";

export class GameOverBefor extends Ui.gameOverBeforUI {
  private static _ins: GameOverBefor;
  public nStr: string;
  constructor() {
    super();
    this.nextBtn.on(Event.CLICK, this, this.toNext);
    this.shareBtn.on(Event.CLICK, this, this.onShare);
  }

  static get I(): GameOverBefor {
    if (!this._ins) this._ins = new GameOverBefor();
    return this._ins;
  }

  async onShow() {
    await this.initSelf();
    var flag: number = await MyUtils.getFlag(GameMgr.I.gameType);
    if (flag == 3 && MyUtils.isChgTwo(GameMgr.I.fromWhere)) {
      flag = 2;
    }
    if (flag == 1 || GameMgr.I.reBornNum >= 2) {
      this.toNext();
      return;
    } else if (flag == 2) {
      this.nextBtn.visible = false;
    } else if (flag == 3) {
      this.nextBtn.visible = false;
    }
    Laya.timer.loop(1000, this, this.djs, [flag]);
    Laya.stage.addChild(this);
    var openid: string = wx.getStorageSync("openid");
    wx.postMessage({
      type: "showGameOver",
      data: { openid: openid }
    });
    ShareCanvasMgr.I.onShareRender(this.rankBox);
    this.djsNum.text = "10";
  }

  async upDateScore() {
    var playerId = wx.getStorageSync("playerId");
    if (playerId) {
      return MyUtils.getPlace((t: any, f: any) => {
        MyUtils.request(
          "/user/updateScore?",
          { playerId: playerId, score: GameMgr.I.scoreNum, type: GameMgr.I.gameType },
          (res: any) => {
            if (!res.code) {
              t(res.data);
            } else {
              t(null);
              console.error(`code is ${res.code}`);
            }
          },
          (res: any) => {
            console.error("request fail");
            t(null);
          }
        );
      });
    } else {
      return null;
    }
  }

  onShare(): void {
    var cfg = MyUtils.getShareCfg((res: any) => {
      console.log(res);
      if (res.shareTickets) {
        wx.showToast({
          title: "分享到群成功！",
          icon: null,
          image: null,
          duration: 2000
        })
        GameMgr.I.xuMing();
      } else {
        wx.showToast({
          title: "请分享到群！",
          icon: null,
          image: null,
          duration: 2000
        })
      }
    }, (res: any) => {
      console.log(res);
      wx.showToast({
        title: "分享取消！",
        icon: null,
        image: null,
        duration: 2000
      })
    });
    wx.shareAppMessage(cfg);
  }

  toNext(): void {
    GameOver.I.onShow();
    this.removeSelf();
  }

  async initSelf() {
    var maxScore: number = wx.getStorageSync("maxScore");
    var data: any;
    /**最大分数不存在或者 有新的最大分数 上传数据 */
    if (!maxScore || (maxScore | 0) < GameMgr.I.scoreNum) {
      wx.setStorageSync("maxScore", GameMgr.I.scoreNum);
      MyUtils.setData("score", GameMgr.I.scoreNum);
    }
    data = await this.upDateScore();
    var numVal: number = 0;
    if (data && data.surpassNum) {
      numVal = data.surpassNum * 100;
    }
    this.nStr = numVal.toFixed(2);
    this.hz.text = "恭喜你得分" + GameMgr.I.scoreNum + "奔跑了" + GameMgr.I.juli.toFixed(1) + "米";
    this.cy.text = "你超越了" + this.nStr + "%的玩家！";
    this.eatNum.text = GameMgr.I.scoreNum + "";
  }

  djs(flag: number): void {
    var num: number = parseInt(this.djsNum.text) - 1;
    this.djsNum.text = num + "";
    if (num == 7 && flag != 3) {
      this.nextBtn.visible = true;
    }
    if (num == 0) {
      Laya.timer.clear(this, this.djs);
    }

  }
}
