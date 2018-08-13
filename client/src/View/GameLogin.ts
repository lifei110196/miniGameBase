import { GameQiu } from "./GameQiu";
import { Box, Event, Texture, Image, wx, Sprite, Browser, SoundManager } from "../../LayaAir";
import { TestPageView } from "./TestPageView";
import { GameOver } from "./GameOver";
import { Ui } from "../../ui/layaUI.max.all";
import { MyUtils } from "../../Utils/MyUtils";
export class GameMain {
    public eatNum: number = 0;
    public nStr: string = '0';
    public reBornNum: number = 0;
    public initNum: number;
    public myChild: Array<GameQiu> = [];
    public player: GameQiu;
    public gameLayer: Box = new Box();
    public gameNew: Ui.newUserViewUI = new Ui.newUserViewUI();
    public gameOverBox: Ui.gameOverBeforUI = new Ui.gameOverBeforUI();
    public gameOverBoxAfter: GameOver = new GameOver();
    public uiLayer: TestPageView = new TestPageView();
    public login: Ui.loginViewUI = new Ui.loginViewUI();
    public rankListView: Ui.rankViewUI = new Ui.rankViewUI();
    public lastLevel: number = 15;
    public lastEatNum: number = 0;
    public SubView: Box;
    public sw: number = Laya.stage.width;
    public sh: number = Laya.stage.height;
    public gy: Image = new Image("comp/gy.png");
    public sx: number;
    public sy: number;
    public SharedCanvas: any;
    public SubTex: Texture;
    private static _ins: GameMain;
    public fromWhere: string;
    public loginButton: any;
    public skinArr: Array<string> = ["comp/skin1.png", "comp/skin2.png", "comp/skin3.png", "comp/skin4.png", "comp/skin5.png", "comp/skin6.png", "comp/skin7.png"];
    /**
    *
    * @param initNum 初始生成数量
    */
    constructor(initNum: number = 30) {
        SoundManager.playMusic('comp/bgm.mp3', 0)
        this.initNum = initNum;
        GameMain._ins = this;
        var img: Image = new Image("res/comp/bg.png");
        img.left = img.top = img.right = img.bottom = 0;
        Laya.stage.addChild(img);
        Laya.stage.addChild(this.gameLayer);
        Laya.stage.addChild(this.gameNew);
        this.gameOverBox.visible = false;
        this.gameOverBoxAfter.visible = false;
        this.uiLayer.visible = false;
        this.gameLayer.top = this.gameLayer.left = this.gameLayer.right = this.gameLayer.bottom = 0;
        this.gameOverBox.top = this.gameOverBox.left = this.gameOverBox.right = this.gameOverBox.bottom = 0;
        this.gameOverBoxAfter.top = this.gameOverBoxAfter.left = this.gameOverBoxAfter.right = this.gameOverBoxAfter.bottom = 0;
        Laya.timer.callLater(this, () => {

            this.gameOverBox.shareBtn.on(Event.CLICK, this, this.onShareClick);
            this.gameOverBox.nextBtn.on(Event.CLICK, this, this.toNext)
            this.login.share.on(Event.CLICK, this, this.onShareClick1);
            this.login.rank.on(Event.CLICK, this, this.onRankClick);
            this.gameOverBoxAfter.closeBtn.on(Event.CLICK, this, this.toLogin);
            this.gameOverBoxAfter.rankBtn.on(Event.CLICK, this, this.onRankClick);
            this.gameOverBoxAfter.reStartBtn.on(Event.CLICK, this, this.onReStart);
            this.gameOverBoxAfter.shareBtn.on(Event.CLICK, this, this.onShareClick1)
            this.gameNew.on(Event.CLICK, this, this.toGame);
            this.sw = this.gameLayer.width;
            this.sh = this.gameLayer.height;
            var ranArr: Array<string> = this.skinArr.concat();
            var pSkin: string = ranArr.splice((ranArr.length * Math.random()) | 0, 1)[0];
            GameQiu.ranArr = ranArr;
            this.player = new GameQiu(this.sw, this.sh, 30);
            this.player.skin = pSkin;
            this.login.btnStart.on(Event.CLICK, this, this.onReStart);
            this.gy.centerX = this.gy.centerY = 0;
            this.player.visible = false;
            this.gameNew.visible = false;
            this.player.addChild(this.gy);
            Laya.stage.addChild(this.player);
            Laya.stage.addChild(this.gameOverBox);
            Laya.stage.addChild(this.gameOverBoxAfter);
            Laya.stage.addChild(this.uiLayer);
            Laya.stage.addChild(this.login);
            Laya.stage.addChild(this.rankListView);
            this.loginBtn();
            this.SubView = this.rankListView.rankBox;
            this.SubView.pos(0, 0);
            this.rankListView.visible = false;
            this.rankListView.btnFriend.on(Event.CLICK, this, this.onShowFriend)
            this.rankListView.btnWord.on(Event.CLICK, this, this.onShowWord)
            this.rankListView.ranShare.on(Event.CLICK, this, this.onShareClick1);
            this.rankListView.closBtn.on(Event.CLICK, this, () => {
                this.rankListView.visible = false;
                this.SubTex.bitmap.alwaysChange = false;
                this.loginButton && this.loginButton.show();
                var openid: string = wx.getStorageSync('openid')
                wx.postMessage({ type: "showGameOver1", data: { openid: openid } });
                this.SubView = this.gameOverBoxAfter.rankBox;
                this.onSharedRender();
            })
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
        });
    }

    public static get I(): GameMain {
        return GameMain._ins;
    }
    onShowFriend(): void {
        if (this.rankListView.btnSkin.skin == 'comp/stat1.png') {
            return;
        }
        this.rankListView.btnSkin.skin = "comp/stat1.png";
        var openid: string = wx.getStorageSync("openid");
        wx.postMessage({ type: "openRankList", data: { openid: openid } });
    }

    async onShowWord() {
        if (this.rankListView.btnSkin.skin == 'comp/stat2.png') {
            return;
        }
        this.rankListView.btnSkin.skin = "comp/stat2.png";
        var openid: string = wx.getStorageSync("openid");
        var openidList: Array<any> = await MyUtils.getWordList(50);
        wx.postMessage({ type: "openRankList2", data: { openid: openid, openidList: openidList } });
    }
    toGame(): void {
        Laya.timer.clear(this, this.newGameDjs);
        this.initGame();
    }

    toNext(): void {
        this.gameOverBox.visible = false;
        this.gameOverBoxAfter.visible = true;
        this.gameOverBoxAfter.eatNum.text = this.eatNum + "";
        this.gameOverBoxAfter.hz.text = "恭喜你击杀" + this.eatNum + ",吨位" + this.player.level.toFixed(2);
        this.gameOverBoxAfter.cy.text = "你超越了" + this.nStr + "%的玩家！";;
        var openid: string = wx.getStorageSync('openid')
        wx.postMessage({ type: "showGameOver1", data: { openid: openid } });
        this.SubView = this.gameOverBoxAfter.rankBox;
        this.onSharedRender();
    }

    toLogin(): void {
        if (this.gameOverBox.djsNum.text != "0") Laya.timer.clear(this, this.djs);
        this.gameOverBox.visible = false;
        this.gameOverBoxAfter.visible = false;
        this.login.visible = true;
        this.loginBtn();
        this.uiLayer.visible = false;
        this.gameLayer.removeChildren();
        this.player.visible = false;
    }

    loginBtn(): void {
        if (GameMain.I.fromWhere || GameMain.I.fromWhere == "") {
            this.login.btnStart.visible = true;
            this.loginButton && this.loginButton.destroy();
        } else {
            this.login.btnStart.visible = true;
            Laya.timer.callLater(this, () => {
                var info: any = wx.getSystemInfoSync();
                var scaleNum: number = (750 / info.screenWidth)
                var width: number = info.screenWidth * 0.528;
                var left = this.login.btnStart.x / scaleNum;
                var top = this.login.btnStart.y / scaleNum;
                this.loginButton = wx.createUserInfoButton({
                    type: "image",
                    image: "comp/btn_start.png",
                    style: {
                        left: left,
                        top: top,
                        width: width,
                        height: (width / 192) * 61
                    },
                    lang: "zh_CN"
                });
                this.loginButton.onTap((res: any) => {
                    if (res.userInfo) {
                        GameMain.I.fromWhere = res.userInfo.city;
                        this.onReStart();
                    }
                });
            });
        }
    }

    onRankClick(): void {
        this.SubView.graphics.clear();
        this.rankListView.btnSkin.skin = "comp/stat1.png";
        this.SubView = this.rankListView.rankBox;
        wx.postMessage({ type: "openRankList" });
        this.onSharedRender();
        this.rankListView.visible = true;
        this.loginButton && this.loginButton.hide();
    }

    onSharedRender(): void {
        this.SubView.graphics.clear();
        var width = this.sw;
        var height = this.sh;
        if (this.SharedCanvas == null) {
            this.SharedCanvas = Browser.window.sharedCanvas;
            this.SharedCanvas.width = width;
            this.SharedCanvas.height = height;
            this.SubTex = new Texture(this.SharedCanvas);
        }
        if (this.SharedCanvas != null) {
            this.SubTex.bitmap.alwaysChange = true;//小游戏使用，非常费，每帧刷新
            this.SubView.graphics.drawTexture(this.SubTex, 0, 0, this.SubTex.width, this.SubTex.height);
            this.SubView.size(this.SubTex.width, this.SubTex.height)
        }
    }

    onReStart(): void {
        if (this.gameOverBox.djsNum.text != "0") Laya.timer.clear(this, this.djs);
        this.loginButton && this.loginButton.destroy();
        this.gameNew.visible = true;
        this.login.visible = false;
        this.gameOverBoxAfter.visible = false;
        this.gameNew.djsNum.text = "3";
        Laya.timer.loop(1000, this, this.newGameDjs);
        this.lastLevel = 15;
        this.lastEatNum = 0;
        this.reBornNum = 0;
        this.gameLayer.removeChildren();
        this.player.visible = false;
    }

    newGameDjs(): void {
        var num: number = parseInt(this.gameNew.djsNum.text) - 1;
        if (num <= 0) {
            this.toGame();
        } else {
            this.gameNew.djsNum.text = num + "";
        }
    }

    onShareClick(): void {
        var cfg = MyUtils.getShareCfg((res: any) => {
            console.log(res);
            if (res.shareTickets) {
                wx.showToast({
                    title: "分享到群成功！",
                    icon: null,
                    image: null,
                    duration: 2000
                })
                this.lastLevel = this.player.level;
                this.lastEatNum = this.eatNum;
                this.reBornNum++;
                this.initGame();
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

    onShareClick1() {
        wx.shareAppMessage(MyUtils.getShareCfg());
    }

    initGame(): void {
        this.gameNew.visible = false;
        this.player.visible = true;
        this.gy.visible = true;
        this.gameOverBox.visible = false;
        this.gameOverBoxAfter.visible = false;
        this.uiLayer.visible = true;
        this.login.visible = false;
        this.gameLayer.removeChildren();
        this.myChild = [];
        this.eatNum = this.lastEatNum;
        this.player.level = this.lastLevel;
        this.player.drawSelf();
        this.gy.size((this.player.width * 234) / 150, (this.player.height * 234) / 150);
        for (let index: number = 0; index < this.initNum; index++) {
            var qiu: GameQiu = new GameQiu(this.sw, this.sh, this.getQiuLevel());
            this.myChild.push(qiu);
            this.gameLayer.addChild(qiu);
        }
        this.player.pos(this.sw / 2, this.sh / 2);
        Laya.timer.frameLoop(1, this, this.gameUpdate);
        Laya.stage.on(Event.MOUSE_DOWN, this, this.onPlayerDown);
        Laya.stage.on(Event.MOUSE_MOVE, this, this.onPlayerMove);
    }

    getQiuLevel(): number {
        var ran = Math.random();
        if (this.eatNum < 30 && ran < 0.8) {
            return this.player.level / 3 + this.player.level / 3 * 2 * Math.random();
        }
        return this.player.level / 3 + (Math.random() * this.player.level * 8) / 3;
    }

    onPlayerDown(): void {
        this.sx = Laya.stage.mouseX;
        this.sy = Laya.stage.mouseY;
    }

    onPlayerMove(): void {
        this.player.x -= this.sx - Laya.stage.mouseX;
        this.player.y -= this.sy - Laya.stage.mouseY;
        if (this.player.x < 0) {
            this.player.x = 0;
        } else if (this.player.x > this.sw) {
            this.player.x = this.sw;
        } else if (this.player.y < 0) {
            this.player.y = 0;
        } else if (this.player.y > this.sh) {
            this.player.y = this.sh;
        }
        this.sx = Laya.stage.mouseX;
        this.sy = Laya.stage.mouseY;
    }

    gameUpdate(): void {
        for (let index: number = 0; index < this.myChild.length; index++) {
            const element: GameQiu = this.myChild[index];
            var res: boolean = element.updateSelf(this.player);
            if (res) {
                this.gameOver();
                break;
            }
        }
        this.uiLayer.killnum.value = this.eatNum + "";
        this.uiLayer.banjing.value = this.player.level.toFixed(2);
    }

    async upDateScore() {
        var playerId = wx.getStorageSync("playerId");
        if (playerId) {
            return MyUtils.getPlace((t: any, f: any) => {
                MyUtils.request('/user/updateScore?', { playerId: playerId, score: this.eatNum }, (res: any) => {
                    if (!res.code) {
                        t(res.data);
                    } else {
                        t(null);
                        console.error(`code is ${res.code}`);
                    }
                }, (res: any) => {
                    console.error('request fail');
                    t(null);
                })
            })
        } else {
            return null
        }
    }

    async gameOver() {
        Laya.timer.clear(this, this.gameUpdate);
        Laya.stage.off(Event.MOUSE_DOWN, this, this.onPlayerDown);
        Laya.stage.off(Event.MOUSE_MOVE, this, this.onPlayerMove);
        wx.vibrateLong();
        var maxScore: number = wx.getStorageSync('maxScore');
        var data: any;
        /**最大分数不存在或者 有新的最大分数 上传数据 */
        if (!maxScore || (maxScore | 0) < this.eatNum) {
            wx.setStorageSync("maxScore", this.eatNum);
            MyUtils.setData('score', this.eatNum);
        }

        data = await this.upDateScore();

        var numStr: number;
        if (this.eatNum >= 80) {
            numStr = Math.random() * 1 + 99;
        } else if (this.eatNum >= 70) {
            numStr = Math.random() * 2.5 + 95;
        } else if (this.eatNum >= 60) {
            numStr = Math.random() * 5 + 90;
        } else if (this.eatNum >= 50) {
            numStr = Math.random() * 10 + 80;
        } else if (this.eatNum >= 40) {
            numStr = Math.random() * 10 + 70;
        } else if (this.eatNum >= 30) {
            numStr = Math.random() * 20 + 70;
        } else if (this.eatNum >= 20) {
            numStr = Math.random() * 20 + 50;
        } else if (this.eatNum >= 10) {
            numStr = Math.random() * 20 + 30;
        } else if (this.eatNum >= 0) {
            numStr = Math.random() * 20 + 10;
        }
        if (data && data.surpassNum) {
            numStr = data.surpassNum * 100;
        }
        var nStr: string;
        nStr = this.nStr = numStr.toFixed(2);
        var flag: number = await MyUtils.getFlag();
        if (flag == 3 && MyUtils.isChgTwo(GameMain.I.fromWhere)) {
            flag = 2;
        }
        if (flag == 1 || this.reBornNum >= 2) {
            this.toNext();
            return;
        } else if (flag == 2) {

        } else if (flag == 3) {
            this.gameOverBox.nextBtn.visible = false;
        }
        this.gameOverBox.visible = true;
        this.gameOverBox.eatNum.text = this.eatNum + "";
        this.gameOverBox.djsNum.text = "10";
        this.gameOverBox.nextBtn.visible = false;
        this.uiLayer.visible = false;
        this.gameOverBox.hz.text = "恭喜你击杀" + this.eatNum + ",吨位" + this.player.level.toFixed(2);
        this.gameOverBox.cy.text = "你超越了" + nStr + "%的玩家！";
        Laya.timer.loop(1000, this, this.djs, [flag]);
        var openid: string = wx.getStorageSync('openid')
        wx.postMessage({ type: "showGameOver", data: { openid: openid } });
        this.SubView = this.gameOverBox.rankBox;
        this.onSharedRender();
    }

    djs(flag: number): void {
        var num: number = parseInt(this.gameOverBox.djsNum.text) - 1;
        this.gameOverBox.djsNum.text = num + "";
        if (num == 7 && flag != 3) {
            this.gameOverBox.nextBtn.visible = true;
        }
        if (num == 0) {
            Laya.timer.clear(this, this.djs);
        }
    }
}
