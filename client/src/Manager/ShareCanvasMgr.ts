import { Sprite, Texture, Browser } from "../LayaAir";

export class ShareCanvasMgr {
  private static _ins: ShareCanvasMgr;
  public SubView: Sprite;
  public SubTex: Texture;
  public SharedCanvas: any;
  constructor() {}

  static get I(): ShareCanvasMgr {
    if (!this._ins) this._ins = new ShareCanvasMgr();
    return this._ins;
  }

  onShareRender(curCtn: Sprite): void {
    this.SubView = curCtn;
    this.SubView.graphics.clear();
    console.log(Laya.stage.width, Laya.stage.height);
    if (this.SharedCanvas == null) {
      this.SharedCanvas = Browser.window.sharedCanvas;
      this.SharedCanvas.width = Laya.stage.width;
      this.SharedCanvas.height = Laya.stage.height;
      this.SubTex = new Texture(this.SharedCanvas);
    }
    if (this.SharedCanvas != null) {
      this.SubTex.bitmap.alwaysChange = true; //小游戏使用，非常费，每帧刷新
      this.SubView.graphics.drawTexture(
        this.SubTex,
        0,
        0,
        this.SubTex.width,
        this.SubTex.height
      );
      this.SubView.size(this.SubTex.width, this.SubTex.height);
    }
  }
}
