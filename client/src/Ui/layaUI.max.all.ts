export  {Ui}
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module Ui {
    export class gameOverUI extends View {
		public reStartBtn:Laya.Button;
		public shareBtn:Laya.Button;
		public eatNum:Laya.Label;
		public cy:Laya.Label;
		public hz:Laya.Label;
		public closeBtn:Laya.Button;
		public rankBtn:Laya.Button;
		public rankBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"comp/blank.png","sizeGrid":"1,1,1,1","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"centerY":145,"centerX":0},"child":[{"type":"Button","props":{"y":115,"x":27,"var":"reStartBtn","stateNum":1,"skin":"comp/btn_reStart.png"}},{"type":"Button","props":{"y":-1,"x":0,"var":"shareBtn","stateNum":1,"skin":"comp/btn_fx.png"}}]},{"type":"Label","props":{"var":"eatNum","text":"0","right":0,"left":0,"fontSize":160,"font":"SimHei","color":"#ffffff","centerY":-215,"bold":true,"align":"center"}},{"type":"Label","props":{"var":"cy","text":"您已超越了{0}个好友","right":0,"left":0,"fontSize":24,"font":"SimHei","color":"#ffffff","centerY":-69,"bold":true,"align":"center"}},{"type":"Label","props":{"var":"hz","text":"恭喜你击杀246,吨位16.19","fontSize":32,"font":"SimHei","color":"#ffc322","centerY":-355,"centerX":0,"align":"center"}},{"type":"Button","props":{"var":"closeBtn","stateNum":1,"skin":"comp/btn_fh.png","centerX":-197,"bottom":160}},{"type":"Button","props":{"var":"rankBtn","stateNum":1,"skin":"comp/btn_ph.png","centerX":185,"bottom":160}},{"type":"Box","props":{"y":10,"x":10,"var":"rankBox","top":0,"right":0,"left":0,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(Ui.gameOverUI.uiView);

        }

    }
}

module Ui {
    export class gameOverBeforUI extends View {
		public shareBtn:Laya.Button;
		public nextBtn:Laya.Button;
		public cy:Laya.Label;
		public djsNum:Laya.Label;
		public eatNum:Laya.Label;
		public hz:Laya.Label;
		public rankBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"comp/blank.png","sizeGrid":"1,1,1,1","right":0,"left":0,"bottom":0}},{"type":"Button","props":{"var":"shareBtn","stateNum":1,"skin":"comp/btn_jl.png","centerY":330,"centerX":0}},{"type":"Button","props":{"var":"nextBtn","stateNum":1,"skin":"comp/btn_tg.png","centerY":420,"centerX":0}},{"type":"Label","props":{"var":"cy","text":"您已超越了{0}个好友","fontSize":24,"font":"SimHei","color":"#ffffff","centerY":168,"centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"var":"djsNum","text":"10","fontSize":120,"font":"SimHei","color":"#ffffff","centerY":48,"centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"text":"分享到群立即复活","fontSize":36,"font":"SimHei","color":"#ffffff","centerY":-67,"centerX":0,"align":"center"}},{"type":"Label","props":{"var":"eatNum","text":"350","fontSize":160,"font":"SimHei","color":"#ffffff","centerY":-226,"centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":10,"x":10,"text":"分享到群立即复活","fontSize":36,"font":"SimHei","color":"#ffffff","centerY":-67,"centerX":0,"align":"center"}},{"type":"Label","props":{"var":"hz","text":"恭喜你击杀246,吨位16.19","fontSize":32,"font":"SimHei","color":"#ffc322","centerY":-356,"centerX":0,"align":"center"}},{"type":"Box","props":{"y":20,"x":20,"var":"rankBox","top":0,"right":0,"left":0,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(Ui.gameOverBeforUI.uiView);

        }

    }
}

module Ui {
    export class loginViewUI extends View {
		public rank:Laya.Image;
		public share:Laya.Image;
		public btnStart:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Box","props":{"width":425,"height":160,"centerX":0,"bottom":150},"child":[{"type":"Image","props":{"y":1,"x":315,"var":"rank","skin":"comp/phb.png"}},{"type":"Image","props":{"y":1,"var":"share","skin":"comp/share@2x.png"}}]},{"type":"Button","props":{"var":"btnStart","stateNum":1,"skin":"comp/btn_start.png","centerY":192,"centerX":0}},{"type":"Image","props":{"skin":"comp/6@2x@2x.png","centerY":-271,"centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(Ui.loginViewUI.uiView);

        }

    }
}

module Ui {
    export class newUserViewUI extends View {
		public djsNum:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"comp/blank.png","sizeGrid":"1,1,1,1","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"skin":"comp/t1.png","centerX":0,"bottom":100}},{"type":"Image","props":{"skin":"comp/t2.png","centerY":-380,"centerX":0},"child":[{"type":"Label","props":{"y":108,"x":99,"var":"djsNum","text":"3","fontSize":130,"font":"SimHei","color":"#ffffff","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(Ui.newUserViewUI.uiView);

        }

    }
}

module Ui {
    export class rankViewUI extends View {
		public ranShare:Laya.Button;
		public closBtn:Laya.Button;
		public rankBox:Laya.Box;
		public btnSkin:Laya.Image;
		public btnFriend:Laya.Box;
		public btnWord:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"comp/blank.png","sizeGrid":"1,1,1,1","right":0,"left":0,"bottom":0}},{"type":"Button","props":{"var":"ranShare","stateNum":1,"skin":"comp/btn_fxRank.png","centerY":389,"centerX":72}},{"type":"Image","props":{"width":598,"skin":"comp/ranBg.png","sizeGrid":"31,36,37,30","height":619,"centerY":-9,"centerX":0}},{"type":"Button","props":{"width":79,"var":"closBtn","stateNum":1,"skin":"comp/btn_close.png","height":79,"centerY":390,"centerX":-234}},{"type":"Box","props":{"var":"rankBox","top":0,"right":0,"left":0,"bottom":0}},{"type":"Box","props":{"centerY":-380,"centerX":0},"child":[{"type":"Image","props":{"var":"btnSkin","skin":"comp/stat1.png"}},{"type":"Box","props":{"y":14,"x":17,"width":229,"var":"btnFriend","height":64}},{"type":"Box","props":{"y":14,"x":257,"width":229,"var":"btnWord","height":64}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(Ui.rankViewUI.uiView);

        }

    }
}

module Ui {
    export class testViewUI extends View {
		public killnum:Laya.FontClip;
		public banjing:Laya.FontClip;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Image","props":{"y":55,"x":25,"skin":"comp/wz1.png"}},{"type":"Image","props":{"y":111,"x":25,"skin":"comp/wz2.png"}},{"type":"FontClip","props":{"y":49,"x":123,"var":"killnum","value":"0123","spaceX":-8,"skin":"comp/fontclip_num.png","sheet":".0123456789"}},{"type":"FontClip","props":{"y":104,"x":123,"var":"banjing","value":"0123","spaceX":-8,"skin":"comp/fontclip_num.png","sheet":".0123456789"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(Ui.testViewUI.uiView);

        }

    }
}
