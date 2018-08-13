import { Ui } from "../ui/layaUI.max.all";
import { wx, Event, Handler } from "../LayaAir";
import { ShareCanvasMgr } from "../Manager/ShareCanvasMgr";
import { MyUtils } from "../Utils/MyUtils";
import { GameMgr } from "../Manager/GameMgr";

export class RankView extends Ui.rankViewUI {
  private static _ins: RankView;
  private _cbk: Handler;
  constructor() {
    super();
    this.btnFriend.on(Event.CLICK, this, this.onShowFriend);
    this.btnWord.on(Event.CLICK, this, this.onShowWord);
    this.closBtn.on(Event.CLICK, this, this.onHide);
    this.ranShare.on(Event.CLICK, this, this.onShare);
  }

  static get I(): RankView {
    if (!this._ins) this._ins = new RankView();
    return this._ins;
  }

  onShow(cbk: Handler = null): void {
    this._cbk = cbk;
    Laya.stage.addChild(this);
    wx.postMessage({ type: "openRankList" });
    ShareCanvasMgr.I.onShareRender(this.rankBox);
    this.btnSkin.skin = "comp/stat1.png";
  }

  onShare():void{
    wx.shareAppMessage(MyUtils.getShareCfg());
  }

  onHide(): void {
    this._cbk && this._cbk.run();
    this.removeSelf();
  }

  onShowFriend(): void {
    if (this.btnSkin.skin == "comp/stat1.png") {
      return;
    }
    this.btnSkin.skin = "comp/stat1.png";
    var openid: string = wx.getStorageSync("openid");
    wx.postMessage({ type: "openRankList", data: { openid: openid } });
  }

  async onShowWord() {
    if (this.btnSkin.skin == "comp/stat2.png") {
      return;
    }
    this.btnSkin.skin = "comp/stat2.png";
    var openid: string = wx.getStorageSync("openid");
    var openidList: Array<any> = await MyUtils.getWordList(50,GameMgr.I.gameType);
    wx.postMessage({
      type: "openRankList2",
      data: { openid: openid, openidList: openidList }
    });
  }
}
