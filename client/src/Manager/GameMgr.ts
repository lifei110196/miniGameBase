import { wx } from "../LayaAir";
import { GameLogin } from "../View/GameLogin";
import { GameOverBefor } from "../View/GameOverBefor";

export class GameMgr {
  private static _ins: GameMgr;
  public scoreNum: number = 0;
  public juli: number = 0;
  public reBornNum: number = 0;
  public fromWhere: string;
  public gameType:number;
  constructor() {
    wx.postMessage({
      type: "resizeShared",
      url: "",
      data: {
        width: Laya.stage.width,
        height: Laya.stage.height,
        matrix: Laya.stage._canvasTransform
      },
      isLoad: false
    });
  }

  static get I(): GameMgr {
    if (!this._ins) this._ins = new GameMgr();
    return this._ins;
  }

  initGame(): void {
    this.scoreNum = 0;
    this.juli = 0;
    this.reBornNum = 0;
    GameLogin.I.onShow();
  }
  /**
   * 续命
   */
  xuMing(): void {
    this.reBornNum++;
    GameOverBefor.I.removeSelf();
  }
}
