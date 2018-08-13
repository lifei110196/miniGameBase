import { Ui } from "../ui/layaUI.max.all";
import { wx, Event, Handler } from "../LayaAir";
import { ShareCanvasMgr } from "../Manager/ShareCanvasMgr";
import { MyUtils } from "../Utils/MyUtils";
import { GameOverBefor } from "./GameOverBefor";
import { RankView } from "./RankView";

export class GameOver extends Ui.gameOverUI {
  private static _ins: GameOver;
  private _toLogin:Handler;
  constructor() {
    super();
    this.closeBtn.on(Event.CLICK, this, this.onHide);
    this.shareBtn.on(Event.CLICK, this, this.onShare);
    this.rankBtn.on(Event.CLICK,this,this.showRank)
  }

  static get I(): GameOver {
    if (!this._ins) this._ins = new GameOver();
    return this._ins;
  }

  onShow(toLogin:Handler = null): void {
    this._toLogin = toLogin;
    Laya.stage.addChild(this);
    this.initSelf();
    this.pMsg();
  }

  pMsg():void{
    var openid: string = wx.getStorageSync("openid");
    wx.postMessage({ type: "showGameOver1", data: { openid: openid } });
    ShareCanvasMgr.I.onShareRender(this.rankBox);
  }

  onHide(): void {
    this.removeSelf();
    this._toLogin && this._toLogin.run();
  }

  initSelf(): void {
    this.cy.text = "你超越了" + GameOverBefor.I.nStr + "%的玩家！";
  }

  onShare(): void {
    wx.shareAppMessage(MyUtils.getShareCfg());
  }

  showRank():void{
    RankView.I.onShow(Handler.create(this,this.pMsg));
  }
}
