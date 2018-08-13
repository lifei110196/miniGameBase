/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/libs/min/laya.core.min.js":
/*!***************************************!*\
  !*** ./bin/libs/min/laya.core.min.js ***!
  \***************************************/
/*! exports provided: Laya */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Laya", function() { return Laya; });
var Laya=window.Laya=function(t,e){var i={__internals:[],__packages:{},__classmap:{Object:Object,Function:Function,Array:Array,String:String},__sysClass:{object:"Object",array:"Array",string:"String",dictionary:"Dictionary"},__propun:{writable:!0,enumerable:!1,configurable:!0},__presubstr:String.prototype.substr,__substr:function(t,e){return 1==arguments.length?i.__presubstr.call(this,t):i.__presubstr.call(this,t,e>0?e:this.length+e)},__init:function(t){t.forEach(function(t){t.__init$&&t.__init$()})},__isClass:function(t){return t&&(t.__isclass||t==Object||t==String||t==Array)},__newvec:function(t,e){var i=[];i.length=t;for(var n=0;n<t;n++)i[n]=e;return i},__extend:function(t,e){function n(){i.un(this,"constructor",t)}for(var s in e)if(e.hasOwnProperty(s)){var r=Object.getOwnPropertyDescriptor(e,s),o=r.get,a=r.set;o||a?o&&a?Object.defineProperty(t,s,r):(o&&Object.defineProperty(t,s,o),a&&Object.defineProperty(t,s,a)):t[s]=e[s]}n.prototype=e.prototype,t.prototype=new n,i.un(t.prototype,"__imps",i.__copy({},e.prototype.__imps))},__copy:function(t,e){if(!e)return null;t=t||{};for(var i in e)t[i]=e[i];return t},__package:function(e,n){if(!i.__packages[e]){i.__packages[e]=!0;var s=t,r=e.split(".");if(r.length>1)for(var o=0,a=r.length-1;o<a;o++){var h=s[r[o]];s=h||(s[r[o]]={})}s[r[r.length-1]]||(s[r[r.length-1]]=n||{})}},__hasOwnProperty:function(t,e){function i(t,e){if(Object.hasOwnProperty.call(e.prototype,t))return!0;var n=e.prototype.__super;return null==n?null:i(t,n)}return e=e||this,Object.hasOwnProperty.call(e,t)||i(t,e.__class)},__typeof:function(t,e){if(!t||!e)return!1;if(e===String)return"string"==typeof t;if(e===Number)return"number"==typeof t;if(e.__interface__)e=e.__interface__;else if("string"!=typeof e)return t instanceof e;return t.__imps&&t.__imps[e]||t.__class==e},__as:function(t,e){return this.__typeof(t,e)?t:null},__int:function(t){return t?parseInt(t):0},interface:function(e,n){i.__package(e,{});var s=i.__internals,r=s[e]=s[e]||{self:e};if(n){var o=n.split(",");r.extend=[];for(u=0;u<o.length;u++){var a=o[u];s[a]=s[a]||{self:a},r.extend.push(s[a])}}for(var h=t,l=e.split("."),u=0;u<l.length-1;u++)h=h[l[u]];h[l[l.length-1]]={__interface__:e}},class:function(e,n,s,r){if(s&&i.__extend(e,s),n)if(i.__package(n,e),i.__classmap[n]=e,n.indexOf(".")>0){if(0==n.indexOf("laya.")){var o=n.split(".");r=r||o[o.length-1],i[r]&&console.log("Warning!,this class["+r+"] already exist:",i[r]),i[r]=e}}else"Main"==n?t.Main=e:(i[n]&&console.log("Error!,this class["+n+"] already exist:",i[n]),i[n]=e);var a=i.un,h=e.prototype;a(h,"hasOwnProperty",i.__hasOwnProperty),a(h,"__class",e),a(h,"__super",s),a(h,"__className",n),a(e,"__super",s),a(e,"__className",n),a(e,"__isclass",!0),a(e,"super",function(t){this.__super.call(t)})},imps:function(t,e){function n(t){var e,r;if((e=i.__internals[t])&&(s[t]=!0,r=e.extend))for(var o=0;o<r.length;o++)n(r[o].self)}if(!e)return null;var s=t.__imps||i.un(t,"__imps",{});for(var r in e)n(r)},superSet:function(t,e,i,n){var s=t.prototype["_$set_"+i];s&&s.call(e,n)},superGet:function(t,e,i){var n=t.prototype["_$get_"+i];return n?n.call(e):null},getset:function(t,e,n,s,r){t?(s&&(e["_$GET_"+n]=s),r&&(e["_$SET_"+n]=r)):(s&&i.un(e,"_$get_"+n,s),r&&i.un(e,"_$set_"+n,r)),s&&r?Object.defineProperty(e,n,{get:s,set:r,enumerable:!1,configurable:!0}):(s&&Object.defineProperty(e,n,{get:s,enumerable:!1,configurable:!0}),r&&Object.defineProperty(e,n,{set:r,enumerable:!1,configurable:!0}))},static:function(t,e){for(var i=0,n=e.length;i<n;i+=2)"length"==e[i]?t.length=e[i+1].call(t):function(){var n=e[i],s=e[i+1];Object.defineProperty(t,n,{get:function(){return delete this[n],this[n]=s.call(this)},set:function(t){delete this[n],this[n]=t},enumerable:!0,configurable:!0})}()},un:function(t,e,n){return n||(n=t[e]),i.__propun.value=n,Object.defineProperty(t,e,i.__propun),n},uns:function(t,e){e.forEach(function(e){i.un(t,e)})}};return t.console=t.console||{log:function(){}},t.trace=t.console.log,Error.prototype.throwError=function(){throw arguments},Object.defineProperty(Array.prototype,"fixed",{enumerable:!1}),i}(window,document);!function(t,e,i){i.un,i.uns,i.static,i.class,i.getset,i.__newvec}(window,document,Laya),function(t,e,i){i.un,i.uns;var n=i.static,s=i.class,r=i.getset;i.__newvec;i.interface("laya.runtime.IMarket"),i.interface("laya.filters.IFilter"),i.interface("laya.display.ILayout"),i.interface("laya.resource.IDispose"),i.interface("laya.runtime.IPlatform"),i.interface("laya.resource.IDestroy"),i.interface("laya.runtime.IConchNode"),i.interface("laya.filters.IFilterAction"),i.interface("laya.runtime.ICPlatformClass"),i.interface("laya.resource.ICreateResource"),i.interface("laya.runtime.IConchRenderObject"),i.interface("laya.runtime.IPlatformClass","laya.runtime.IPlatform");var o=function(){function e(){}return s(e,"laya.utils.RunDriver"),e.FILTER_ACTIONS=[],e.pixelRatio=-1,e._charSizeTestDiv=null,e.now=function(){return Date.now()},e.getWindow=function(){return t},e.getPixelRatio=function(){if(e.pixelRatio<0){var t=N.context,i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;(e.pixelRatio=(N.window.devicePixelRatio||1)/i)<1&&(e.pixelRatio=1)}return e.pixelRatio},e.getIncludeStr=function(t){return null},e.createShaderCondition=function(t){var e="(function() {return "+t+";})";return i._runScript(e)},e.fontMap=[],e.measureText=function(t,i){var n=e.hanzi.test(t);if(n&&e.fontMap[i])return e.fontMap[i];var s=N.context;s.font=i;var r=s.measureText(t);return n&&(e.fontMap[i]=r),r},e.getWebGLContext=function(t){},e.beginFlush=function(){},e.endFinish=function(){},e.addToAtlas=null,e.flashFlushImage=function(t){},e.drawToCanvas=function(t,e,i,n,s,r){var o=yt.create("2D"),a=new D(i,n,o);return F.renders[e]._fun(t,a,s,r),o},e.createParticleTemplate2D=null,e.createGLTextur=null,e.createWebGLContext2D=null,e.changeWebGLSize=function(t,e){},e.createRenderSprite=function(t,e){return new F(t,e)},e.createFilterAction=function(t){return new x},e.createGraphics=function(){return new f},e.clear=function(t){R._context.ctx.clear()},e.cancelLoadByUrl=function(t){},e.clearAtlas=function(t){},e.isAtlas=function(t){return!1},e.addTextureToAtlas=function(t){},e.getTexturePixels=function(t,e,i,n,s){return null},e.skinAniSprite=function(){return null},e.update3DLoop=function(){},n(e,["hanzi",function(){return this.hanzi=new RegExp("^[一-龥]$")}]),e}(),a=(r(1,i,"alertGlobalError",null,function(t){var e=0;N.window.onerror=t?function(t,i,n,s,r){e++<5&&r&&alert("出错啦，请把此信息截图给研发商\n"+t+"\n"+r.stack||r)}:null}),i.init=function(t,e,n){for(var s=[],r=2,o=arguments.length;r<o;r++)s.push(arguments[r]);if(!i._isinit){ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=i._arrayBufferSlice),i._isinit=!0,N.__init__(),k.__init__(),f.__init__(),i.timer=new V,i.scaleTimer=new V,i.loader=new at,Q.__init__();for(var r=0,a=s.length;r<a;r++)s[r].enable&&s[r].enable();return _.__init__(),c.__init__(),O.__init__(),W.beginCheck(),i._currentStage=i.stage=new mt,i.stage.conchModel&&i.stage.conchModel.setRootNode(),i.getUrlPath(),i.render=new R(0,0),i.stage.size(t,e),F.__init__(),m.__init__(),v.instance.__init__(i.stage,R.canvas),xt.__init__(),E.autoStopMusic=!0,I.__init__(),R.canvas}},i.getUrlPath=function(){var t=N.window.location,e=t.pathname;e=":"==e.charAt(2)?e.substring(1):e,L.rootPath=L.basePath=L.getPath("file:"==t.protocol?e:t.protocol+"//"+t.host+t.pathname)},i._arrayBufferSlice=function(t,e){var i=new Uint8Array(this,t,e-t),n=new Uint8Array(i.length);return n.set(i),n.buffer},i._runScript=function(t){return N.window["e"+String.fromCharCode(118)+"al"](t)},i.stage=null,i.timer=null,i.scaleTimer=null,i.loader=null,i.version="1.7.19.1beta",i.render=null,i._currentStage=null,i._isinit=!1,i.MiniAdpter={init:function(){t.navigator&&t.navigator.userAgent&&t.navigator.userAgent.indexOf("MiniGame")>-1&&console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")}},n(i,["conchMarket",function(){return this.conchMarket=t.conch?conchMarket:null},"PlatformClass",function(){return this.PlatformClass=t.PlatformClass}]),function(){function t(){}return s(t,"Config"),t.WebGLTextCacheCount=500,t.atlasEnable=!1,t.showCanvasMark=!1,t.animationInterval=50,t.isAntialias=!1,t.isAlpha=!1,t.premultipliedAlpha=!0,t.isStencil=!0,t.preserveDrawingBuffer=!1,t}()),h=function(){function t(){this._events=null}var e;s(t,"laya.events.EventDispatcher");var i=t.prototype;return i.hasListener=function(t){return!!(this._events&&this._events[t])},i.event=function(t,e){if(!this._events||!this._events[t])return!1;var i=this._events[t];if(i.run)i.once&&delete this._events[t],null!=e?i.runWith(e):i.run();else{for(var n=0,s=i.length;n<s;n++){var r=i[n];r&&(null!=e?r.runWith(e):r.run()),r&&!r.once||(i.splice(n,1),n--,s--)}0===i.length&&this._events&&delete this._events[t]}return!0},i.on=function(t,e,i,n){return this._createListener(t,e,i,n,!1)},i.once=function(t,e,i,n){return this._createListener(t,e,i,n,!0)},i._createListener=function(t,i,n,s,r,o){void 0===o&&(o=!0),o&&this.off(t,i,n,r);var a=e.create(i||this,n,s,r);this._events||(this._events={});var h=this._events;return h[t]?h[t].run?h[t]=[h[t],a]:h[t].push(a):h[t]=a,this},i.off=function(t,e,i,n){if(void 0===n&&(n=!1),!this._events||!this._events[t])return this;var s=this._events[t];if(null!=i)if(s.run)e&&s.caller!==e||s.method!==i||n&&!s.once||(delete this._events[t],s.recover());else{for(var r=0,o=0,a=s.length;o<a;o++){var h=s[o];h?!h||e&&h.caller!==e||h.method!==i||n&&!h.once||(r++,s[o]=null,h.recover()):r++}r===a&&delete this._events[t]}return this},i.offAll=function(t){var e=this._events;if(!e)return this;if(t)this._recoverHandlers(e[t]),delete e[t];else{for(var i in e)this._recoverHandlers(e[i]);this._events=null}return this},i._recoverHandlers=function(t){if(t)if(t.run)t.recover();else for(var e=t.length-1;e>-1;e--)t[e]&&(t[e].recover(),t[e]=null)},i.isMouseEvent=function(e){return t.MOUSE_EVENTS[e]},t.MOUSE_EVENTS={rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0},t.__init$=function(){Object.defineProperty(laya.events.EventDispatcher.prototype,"_events",{enumerable:!1,writable:!0}),e=function(t){function e(t,i,n,s){e.__super.call(this,t,i,n,s)}s(e,"",l);return e.prototype.recover=function(){this._id>0&&(this._id=0,e._pool.push(this.clear()))},e.create=function(t,i,n,s){return void 0===s&&(s=!0),e._pool.length?e._pool.pop().setTo(t,i,n,s):new e(t,i,n,s)},e._pool=[],e}()},t}(),l=function(){function t(t,e,i,n){this.once=!1,this._id=0,void 0===n&&(n=!1),this.setTo(t,e,i,n)}s(t,"laya.utils.Handler");var e=t.prototype;return e.setTo=function(e,i,n,s){return this._id=t._gid++,this.caller=e,this.method=i,this.args=n,this.once=s,this},e.run=function(){if(null==this.method)return null;var t=this._id,e=this.method.apply(this.caller,this.args);return this._id===t&&this.once&&this.recover(),e},e.runWith=function(t){if(null==this.method)return null;var e=this._id;if(null==t)var i=this.method.apply(this.caller,this.args);else i=this.args||t.unshift?this.args?this.method.apply(this.caller,this.args.concat(t)):this.method.apply(this.caller,t):this.method.call(this.caller,t);return this._id===e&&this.once&&this.recover(),i},e.clear=function(){return this.caller=null,this.method=null,this.args=null,this},e.recover=function(){this._id>0&&(this._id=0,t._pool.push(this.clear()))},t.create=function(e,i,n,s){return void 0===s&&(s=!0),t._pool.length?t._pool.pop().setTo(e,i,n,s):new t(e,i,n,s)},t._pool=[],t._gid=1,t}(),u=function(){function t(){this._texture=null,this._fontCharDic={},this._fontWidthMap={},this._complete=null,this._path=null,this._maxWidth=0,this._spaceWidth=10,this._padding=null,this.fontSize=12,this.autoScaleSize=!1,this.letterSpacing=0}s(t,"laya.display.BitmapFont");var e=t.prototype;return e.loadFont=function(t,e){this._path=t,this._complete=e,i.loader.load([{url:this._path,type:"xml"},{url:this._path.replace(".fnt",".png"),type:"image"}],l.create(this,this.onLoaded))},e.onLoaded=function(){this.parseFont(ot.getRes(this._path),ot.getRes(this._path.replace(".fnt",".png"))),this._complete&&this._complete.runWith(this._texture?this:null)},e.parseFont=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");if(!i[0].getAttributeNode)return this.parseFont2(t,e);this.fontSize=parseInt(i[0].getAttributeNode("size").nodeValue);var n=i[0].getAttributeNode("padding").nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s;s=t.getElementsByTagName("char");var r=0;for(r=0;r<s.length;r++){var o=s[r],a=parseInt(o.getAttributeNode("id").nodeValue),h=parseInt(o.getAttributeNode("xoffset").nodeValue)/1,l=parseInt(o.getAttributeNode("yoffset").nodeValue)/1,u=parseInt(o.getAttributeNode("xadvance").nodeValue)/1,c=new P;c.x=parseInt(o.getAttributeNode("x").nodeValue),c.y=parseInt(o.getAttributeNode("y").nodeValue),c.width=parseInt(o.getAttributeNode("width").nodeValue),c.height=parseInt(o.getAttributeNode("height").nodeValue);var _=lt.create(e,c.x,c.y,c.width,c.height,h,l);this._maxWidth=Math.max(this._maxWidth,u+this.letterSpacing),this._fontCharDic[a]=_,this._fontWidthMap[a]=u}}},e.parseFont2=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");this.fontSize=parseInt(i[0].attributes.size.nodeValue);var n=i[0].attributes.padding.nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s=t.getElementsByTagName("char"),r=0;for(r=0;r<s.length;r++){var o=s[r].attributes,a=parseInt(o.id.nodeValue),h=parseInt(o.xoffset.nodeValue)/1,l=parseInt(o.yoffset.nodeValue)/1,u=parseInt(o.xadvance.nodeValue)/1,c=new P;c.x=parseInt(o.x.nodeValue),c.y=parseInt(o.y.nodeValue),c.width=parseInt(o.width.nodeValue),c.height=parseInt(o.height.nodeValue);var _=lt.create(e,c.x,c.y,c.width,c.height,h,l);this._maxWidth=Math.max(this._maxWidth,u+this.letterSpacing),this._fontCharDic[a]=_,this._fontWidthMap[a]=u}}},e.getCharTexture=function(t){return this._fontCharDic[t.charCodeAt(0)]},e.destroy=function(){if(this._texture){for(var t in this._fontCharDic){var e=this._fontCharDic[t];e&&e.destroy()}this._texture.destroy(),this._fontCharDic=null,this._fontWidthMap=null,this._texture=null}},e.setSpaceWidth=function(t){this._spaceWidth=t},e.getCharWidth=function(t){var e=t.charCodeAt(0);return this._fontWidthMap[e]?this._fontWidthMap[e]+this.letterSpacing:" "==t?this._spaceWidth+this.letterSpacing:0},e.getTextWidth=function(t){for(var e=0,i=0,n=t.length;i<n;i++)e+=this.getCharWidth(t.charAt(i));return e},e.getMaxWidth=function(){return this._maxWidth},e.getMaxHeight=function(){return this.fontSize},e.drawText=function(t,e,i,n,s,r){var o,a=this.getTextWidth(t),h=0;"center"===s&&(h=(r-a)/2),"right"===s&&(h=r-a);for(var l=0,u=0,c=t.length;u<c;u++)(o=this.getCharTexture(t.charAt(u)))&&(e.graphics.drawTexture(o,i+l+h,n),l+=this.getCharWidth(t.charAt(u)))},t}(),c=function(){function t(){this.alpha=1,this.visible=!0,this.scrollRect=null,this.blendMode=null,this._type=0,this._tf=t._TF_EMPTY}s(t,"laya.display.css.Style");var e=t.prototype;return e.getTransform=function(){return this._tf},e.setTransform=function(e){this._tf="none"!==e&&e?e:t._TF_EMPTY},e.setTranslateX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.translateX=e},e.setTranslateY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.translateY=e},e.setScaleX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.scaleX=e},e.setScale=function(e,i){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.scaleX=e,this._tf.scaleY=i},e.setScaleY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.scaleY=e},e.setRotate=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.rotate=e},e.setSkewX=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.skewX=e},e.setSkewY=function(e){this._tf===t._TF_EMPTY&&(this._tf=new d),this._tf.skewY=e},e.destroy=function(){this.scrollRect=null},e.render=function(t,e,i,n){},e.getCSSStyle=function(){return tt.EMPTY},e._enableLayout=function(){return!1},r(0,e,"scaleX",function(){return this._tf.scaleX},function(t){this.setScaleX(t)}),r(0,e,"transform",function(){return this.getTransform()},function(t){this.setTransform(t)}),r(0,e,"translateX",function(){return this._tf.translateX},function(t){this.setTranslateX(t)}),r(0,e,"translateY",function(){return this._tf.translateY},function(t){this.setTranslateY(t)}),r(0,e,"scaleY",function(){return this._tf.scaleY},function(t){this.setScaleY(t)}),r(0,e,"block",function(){return 0!=(1&this._type)}),r(0,e,"skewY",function(){return this._tf.skewY},function(t){this.setSkewY(t)}),r(0,e,"rotate",function(){return this._tf.rotate},function(t){this.setRotate(t)}),r(0,e,"skewX",function(){return this._tf.skewX},function(t){this.setSkewX(t)}),r(0,e,"paddingLeft",function(){return 0}),r(0,e,"paddingTop",function(){return 0}),r(0,e,"absolute",function(){return!0}),t.__init__=function(){t._TF_EMPTY=new d,t.EMPTY=new t},t.EMPTY=null,t._TF_EMPTY=null,t}(),_=function(){function t(e){this._type=0,this._weight=0,this._decoration=null,this._text=null,this.indent=0,this._color=U.create(t.defaultColor),this.family=t.defaultFamily,this.stroke=t._STROKE,this.size=t.defaultSize,e&&e!==t.EMPTY&&e.copyTo(this)}s(t,"laya.display.css.Font");var e=t.prototype;return e.set=function(t){this._text=null;for(var e=t.split(" "),i=0,n=e.length;i<n;i++){var s=e[i];switch(s){case"italic":this.italic=!0;continue;case"bold":this.bold=!0;continue}s.indexOf("px")>0&&(this.size=parseInt(s),this.family=e[i+1],i++)}},e.toString=function(){return this._text="",this.italic&&(this._text+="italic "),this.bold&&(this._text+="bold "),this._text+=this.size+"px "+this.family},e.copyTo=function(e){e._type=this._type,e._text=this._text,e._weight=this._weight,e._color=this._color,e.family=this.family,e.stroke=this.stroke!=t._STROKE?this.stroke.slice():t._STROKE,e.indent=this.indent,e.size=this.size},r(0,e,"password",function(){return 0!=(1024&this._type)},function(t){t?this._type|=1024:this._type&=-1025}),r(0,e,"color",function(){return this._color.strColor},function(t){this._color=U.create(t)}),r(0,e,"italic",function(){return 0!=(512&this._type)},function(t){t?this._type|=512:this._type&=-513}),r(0,e,"bold",function(){return 0!=(2048&this._type)},function(t){t?this._type|=2048:this._type&=-2049}),r(0,e,"weight",function(){return""+this._weight},function(t){var e=0;switch(t){case"normal":break;case"bold":this.bold=!0,e=700;break;case"bolder":e=800;break;case"lighter":e=100;break;default:e=parseInt(t)}this._weight=e,this._text=null}),r(0,e,"decoration",function(){return this._decoration?this._decoration.value:"none"},function(t){var e=t.split(" ");switch(this._decoration||(this._decoration={}),e[0]){case"_":this._decoration.type="underline";break;case"-":this._decoration.type="line-through";break;case"overline":this._decoration.type="overline";break;default:this._decoration.type=e[0]}e[1]&&(this._decoration.color=U.create(e)),this._decoration.value=t}),t.__init__=function(){t.EMPTY=new t(null)},t.EMPTY=null,t.defaultColor="#000000",t.defaultSize=12,t.defaultFamily="Arial",t.defaultFont="12px Arial",t._STROKE=[0,"#000000"],t._ITALIC=512,t._PASSWORD=1024,t._BOLD=2048,t}(),d=function(){function t(){this.translateX=0,this.translateY=0,this.scaleX=1,this.scaleY=1,this.rotate=0,this.skewX=0,this.skewY=0}return s(t,"laya.display.css.TransformInfo"),t}(),f=function(){function e(){if(this._one=null,this._cmds=null,this._render=this._renderEmpty,R.isConchNode){this._nativeObj=new t._conchGraphics,this.id=this._nativeObj.conchID}}s(e,"laya.display.Graphics");var n=e.prototype;return n.destroy=function(){this.clear(),this._graphicBounds&&this._graphicBounds.destroy(),this._graphicBounds=null,this._vectorgraphArray=null,this._sp&&(this._sp._renderType=0),this._sp=null},n.clear=function(t){void 0===t&&(t=!1);var i=0,n=0;if(t){var s=this._one;if(this._cmds){for(n=this._cmds.length,i=0;i<n;i++)!(s=this._cmds[i])||s.callee!==R._context._drawTexture&&s.callee!==R._context._drawTextureWithTransform||(s[0]=null,e._cache.push(s));this._cmds.length=0}else s&&(!s||s.callee!==R._context._drawTexture&&s.callee!==R._context._drawTextureWithTransform||(s[0]=null,e._cache.push(s)))}else this._cmds=null;if(this._one=null,this._render=this._renderEmpty,this._sp&&(this._sp._renderType&=-514),this._repaint(),this._vectorgraphArray){for(i=0,n=this._vectorgraphArray.length;i<n;i++)q.getInstance().deleteShape(this._vectorgraphArray[i]);this._vectorgraphArray.length=0}},n._clearBoundsCache=function(){this._graphicBounds&&this._graphicBounds.reset()},n._initGraphicBounds=function(){this._graphicBounds||(this._graphicBounds=new p,this._graphicBounds._graphics=this)},n._repaint=function(){this._clearBoundsCache(),this._sp&&this._sp.repaint()},n._isOnlyOne=function(){return!this._cmds||0===this._cmds.length},n.getBounds=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBounds(t)},n.getBoundPoints=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBoundPoints(t)},n._addCmd=function(t){this._cmds=this._cmds||[],t.callee=t.shift(),this._cmds.push(t)},n.setFilters=function(t){this._saveToCmd(R._context._setFilters,t)},n.drawTexture=function(t,i,n,s,r,o,a){if(void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),void 0===a&&(a=1),!t||a<.01)return null;s||(s=t.sourceWidth),r||(r=t.sourceHeight),a=a<0?0:a>1?1:a;var h=!R.isWebGL&&(N.onFirefox||N.onEdge||N.onIE||N.onSafari)?.5:0,l=s/t.sourceWidth,u=r/t.sourceHeight;if(s=t.width*l,r=t.height*u,t.loaded&&(s<=0||r<=0))return null;i+=t.offsetX*l,n+=t.offsetY*u,this._sp&&(this._sp._renderType|=512);var c;return i-=h,n-=h,s+=2*h,r+=2*h,e._cache.length?((c=e._cache.pop())[0]=t,c[1]=i,c[2]=n,c[3]=s,c[4]=r,c[5]=o,c[6]=a):c=[t,i,n,s,r,o,a],c.callee=o||1!=a?R._context._drawTextureWithTransform:R._context._drawTexture,null!=this._one||o||1!=a?this._saveToCmd(c.callee,c):(this._one=c,this._render=this._renderOneImg),t.loaded||t.once("loaded",this,this._textureLoaded,[t,c]),this._repaint(),c},n.cleanByTexture=function(t,e,i,n,s){if(void 0===n&&(n=0),void 0===s&&(s=0),!t)return this.clear();if(this._one&&this._render===this._renderOneImg){n||(n=t.sourceWidth),s||(s=t.sourceHeight);var r=n/t.sourceWidth,o=s/t.sourceHeight;n=t.width*r,s=t.height*o,e+=t.offsetX*r,i+=t.offsetY*o,this._one[0]=t,this._one[1]=e,this._one[2]=i,this._one[3]=n,this._one[4]=s,this._repaint()}else this.clear(),t&&this.drawTexture(t,e,i,n,s)},n.drawTextures=function(t,e){t&&this._saveToCmd(R._context._drawTextures,[t,e])},n.fillTexture=function(t,e,i,n,s,r,o){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t){var a=[t,e,i,n,s,r,o||S.EMPTY,{}];t.loaded||t.once("loaded",this,this._textureLoaded,[t,a]),this._saveToCmd(R._context._fillTexture,a)}},n._textureLoaded=function(t,e){e[3]=e[3]||t.width,e[4]=e[4]||t.height,this._repaint()},n.fillCircle=function(t,e,i,n,s,r,o){i.bitmap.enableMerageInAtlas=!1;var a=new Float32Array(2*(o+1)),h=new Float32Array(2*(o+1)),l=new Uint16Array(3*o),u=2*Math.PI/o,c=0;a[0]=n,a[1]=s,h[0]=n/i.width,h[1]=s/i.height;for(var _=2,d=0;d<o;d++){var f=r*Math.cos(c)+n,p=r*Math.sin(c)+s;a[_]=f,a[_+1]=p,h[_]=f/i.width,h[_+1]=p/i.height,c+=u,_+=2}for(_=0,d=0;d<o;d++)l[_++]=0,l[_++]=d+1,l[_++]=d+2>=o+1?1:d+2;this.drawTriangles(i,t,e,a,h,l)},n.drawTriangles=function(t,e,i,n,s,r,o,a,h,l){void 0===a&&(a=1),this._saveToCmd(R._context.drawTriangles,[t,e,i,n,s,r,o,a,h,l])},n._saveToCmd=function(t,e){return this._sp&&(this._sp._renderType|=512),null==this._one?(this._one=e,this._render=this._renderOne):(this._sp&&(this._sp._renderType&=-2),this._render=this._renderAll,0===(this._cmds||(this._cmds=[])).length&&this._cmds.push(this._one),this._cmds.push(e)),e.callee=t,this._repaint(),e},n.clipRect=function(t,e,i,n){this._saveToCmd(R._context._clipRect,[t,e,i,n])},n.fillText=function(t,e,i,n,s,r,o){void 0===o&&(o=0),this._saveToCmd(R._context._fillText,[t,e,i,n||_.defaultFont,s,r])},n.fillBorderText=function(t,e,i,n,s,r,o,a){this._saveToCmd(R._context._fillBorderText,[t,e,i,n||_.defaultFont,s,r,o,a])},n.strokeText=function(t,e,i,n,s,r,o){this._saveToCmd(R._context._strokeText,[t,e,i,n||_.defaultFont,s,r,o])},n.alpha=function(t){t=t<0?0:t>1?1:t,this._saveToCmd(R._context._alpha,[t])},n.setAlpha=function(t){t=t<0?0:t>1?1:t,this._saveToCmd(R._context._setAlpha,[t])},n.transform=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(R._context._transform,[t,e,i])},n.rotate=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(R._context._rotate,[t,e,i])},n.scale=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=0),this._saveToCmd(R._context._scale,[t,e,i,n])},n.translate=function(t,e){this._saveToCmd(R._context._translate,[t,e])},n.save=function(){this._saveToCmd(R._context._save,[])},n.restore=function(){this._saveToCmd(R._context._restore,[])},n.replaceText=function(t){this._repaint();var e=this._cmds;if(e){for(var i=e.length-1;i>-1;i--)if(this._isTextCmd(e[i].callee))return e[i][0].toUpperCase?e[i][0]=t:e[i][0].setText(t),!0}else if(this._one&&this._isTextCmd(this._one.callee))return this._one[0].toUpperCase?this._one[0]=t:this._one[0].setText(t),!0;return!1},n._isTextCmd=function(t){return t===R._context._fillText||t===R._context._fillBorderText||t===R._context._strokeText},n.replaceTextColor=function(t){this._repaint();var e=this._cmds;if(e)for(var i=e.length-1;i>-1;i--)this._isTextCmd(e[i].callee)&&(e[i][4]=t,e[i][0].toUpperCase||(e[i][0].changed=!0));else this._one&&this._isTextCmd(this._one.callee)&&(this._one[4]=t,this._one[0].toUpperCase||(this._one[0].changed=!0))},n.loadImage=function(t,e,n,s,r,o){function a(t){t&&(h.drawTexture(t,e,n,s,r),null!=o&&o.call(h._sp,t))}var h=this;void 0===e&&(e=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0);var u=ot.getRes(t);u?a(u):i.loader.load(t,l.create(null,a),null,"image")},n._renderEmpty=function(t,e,i,n){},n._renderAll=function(t,e,i,n){for(var s,r=this._cmds,o=0,a=r.length;o<a;o++)(s=r[o]).callee.call(e,i,n,s)},n._renderOne=function(t,e,i,n){this._one.callee.call(e,i,n,this._one)},n._renderOneImg=function(t,e,i,n){this._one.callee.call(e,i,n,this._one),2305!==t._renderType&&(t._renderType|=1)},n.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=0;R.isWebGL&&(o=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o));var a=r%2==0?0:.5,h=[t+a,e+a,i+a,n+a,s,r,o];this._saveToCmd(R._context._drawLine,h)},n.drawLines=function(t,e,i,n,s){void 0===s&&(s=1);var r=0;if(i&&!(i.length<4)){R.isWebGL&&(r=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(r));var o=s%2==0?0:.5,a=[t+o,e+o,i,n,s,r];this._saveToCmd(R._context._drawLines,a)}},n.drawCurves=function(t,e,i,n,s){void 0===s&&(s=1);var r=[t,e,i,n,s];this._saveToCmd(R._context._drawCurves,r)},n.drawRect=function(t,e,i,n,s,r,o){void 0===o&&(o=1);var a=r?o/2:0,h=r?o:0,l=[t+a,e+a,i-h,n-h,s,r,o];this._saveToCmd(R._context._drawRect,l)},n.drawCircle=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=s?r/2:0,a=0;R.isWebGL&&(a=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(a));var h=[t,e,i-o,n,s,r,a];this._saveToCmd(R._context._drawCircle,h)},n.drawPie=function(t,e,i,n,s,r,o,a){void 0===a&&(a=1);var h=o?a/2:0,l=o?a:0,u=0;R.isWebGL&&(u=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(u));var c=[t+h,e+h,i-l,n,s,r,o,a,u];c[3]=K.toRadian(n),c[4]=K.toRadian(s),this._saveToCmd(R._context._drawPie,c)},n.drawPoly=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=0,a=!1;R.isWebGL&&(o=q.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o),a=!(i.length>6));var h=s?r%2==0?0:.5:0,l=[t+h,e+h,i,n,s,r,o,a];this._saveToCmd(R._context._drawPoly,l)},n.drawPath=function(t,e,i,n,s){var r=[t,e,i,n,s];this._saveToCmd(R._context._drawPath,r)},r(0,n,"cmds",function(){return this._cmds},function(t){this._sp&&(this._sp._renderType|=512),this._cmds=t,this._render=this._renderAll,this._repaint()}),e.__init__=function(){if(R.isConchNode){for(var t=laya.display.Graphics.prototype,e=N.window.ConchGraphics.prototype,i=["clear","destroy","alpha","rotate","transform","scale","translate","save","restore","clipRect","blendMode","fillText","fillBorderText","_fands","drawRect","drawCircle","drawPie","drawPoly","drawPath","drawImageM","drawLine","drawLines","_drawPs","drawCurves","replaceText","replaceTextColor","_fillImage","fillTexture","setSkinMesh","drawParticle","drawImageS"],n=0,s=i.length;n<=s;n++){var r=i[n];t[r]=e[r]}t._saveToCmd=null,e.drawImageS&&(t.drawTextures=function(t,e){if(t&&t.loaded&&t.bitmap&&t.source){var i=t.uv,n=t.bitmap.width,s=t.bitmap.height;this.drawImageS(t.bitmap.source,i[0]*n,i[1]*s,(i[2]-i[0])*n,(i[5]-i[3])*s,t.offsetX,t.offsetY,t.width,t.height,e)}}),t.drawTexture=function(t,e,i,n,s,r,o){if(void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===o&&(o=1),t)if(t.loaded){if(t.loaded&&t.bitmap&&t.source&&(n||(n=t.sourceWidth),s||(s=t.sourceHeight),o=o<0?0:o>1?1:o,n=n-t.sourceWidth+t.width,s=s-t.sourceHeight+t.height,!(n<=0||s<=0))){e+=t.offsetX,i+=t.offsetY;var a=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImageM(t.bitmap.source,a[0]*h,a[1]*l,(a[2]-a[0])*h,(a[5]-a[3])*l,e,i,n,s,r,o),this._repaint()}}else t.once("loaded",this,function(){this.drawTexture(t,e,i,n,s,r)})},t.fillTexture=function(t,e,i,n,s,r,o){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t&&t.loaded){var a,h=R._context.ctx,l=t.bitmap.width,u=t.bitmap.height,c=t.uv;a=t.uv!=lt.DEF_UV?h.createPattern(t.bitmap.source,r,c[0]*l,c[1]*u,(c[2]-c[0])*l,(c[5]-c[3])*u):h.createPattern(t.bitmap.source,r);var _=0,d=0;o&&(e+=o.x%t.width,i+=o.y%t.height,_-=o.x%t.width,d-=o.y%t.height),this._fillImage(a,e,i,_,d,n,s)}}}},e._cache=[],e}(),p=function(){function t(){this._cacheBoundsType=!1}s(t,"laya.display.GraphicsBounds");var e=t.prototype;return e.destroy=function(){this._graphics=null,this._temp=null,this._rstBoundPoints=null,this._bounds=null},e.reset=function(){this._temp&&(this._temp.length=0)},e.getBounds=function(t){return void 0===t&&(t=!1),(!this._bounds||!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._bounds=P._getWrapRec(this.getBoundPoints(t),this._bounds)),this._cacheBoundsType=t,this._bounds},e.getBoundPoints=function(t){return void 0===t&&(t=!1),(!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._temp=this._getCmdPoints(t)),this._cacheBoundsType=t,this._rstBoundPoints=K.copyArray(this._rstBoundPoints,this._temp)},e._getCmdPoints=function(e){void 0===e&&(e=!1);var i,n=R._context,s=this._graphics.cmds;if(i=this._temp||(this._temp=[]),i.length=0,s||null==this._graphics._one||(t._tempCmds.length=0,t._tempCmds.push(this._graphics._one),s=t._tempCmds),!s)return i;var r;(r=t._tempMatrixArrays).length=0;var o=t._initMatrix;o.identity();for(var a,h,l=t._tempMatrix,u=NaN,c=NaN,_=NaN,d=NaN,f=NaN,p=NaN,g=0,m=s.length;g<m;g++)if((a=s[g]).callee)switch(a.callee){case n._save:case 7:r.push(o),o=o.clone();break;case n._restore:case 8:o=r.pop();break;case n._scale:case 5:l.identity(),l.translate(-a[2],-a[3]),l.scale(a[0],a[1]),l.translate(a[2],a[3]),this._switchMatrix(o,l);break;case n._rotate:case 3:l.identity(),l.translate(-a[1],-a[2]),l.rotate(a[0]),l.translate(a[1],a[2]),this._switchMatrix(o,l);break;case n._translate:case 6:l.identity(),l.translate(a[0],a[1]),this._switchMatrix(o,l);break;case n._transform:case 4:l.identity(),l.translate(-a[1],-a[2]),l.concat(a[0]),l.translate(a[1],a[2]),this._switchMatrix(o,l);break;case 16:case 24:t._addPointArrToRst(i,P._getBoundPointS(a[0],a[1],a[2],a[3]),o);break;case 17:o.copyTo(l),l.concat(a[4]),t._addPointArrToRst(i,P._getBoundPointS(a[0],a[1],a[2],a[3]),l);break;case n._drawTexture:h=a[0],e?a[3]&&a[4]?t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],a[3],a[4]),o):(h=a[0],t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],h.width,h.height),o)):(u=(a[3]||h.sourceWidth)/h.width,c=(a[4]||h.sourceHeight)/h.height,_=u*h.sourceWidth,d=c*h.sourceHeight,f=h.offsetX>0?h.offsetX:0,p=h.offsetY>0?h.offsetY:0,f*=u,p*=c,t._addPointArrToRst(i,P._getBoundPointS(a[1]-f,a[2]-p,_,d),o));break;case n._fillTexture:a[3]&&a[4]?t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],a[3],a[4]),o):(h=a[0],t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],h.width,h.height),o));break;case n._drawTextureWithTransform:var v;a[5]?(o.copyTo(l),l.concat(a[5]),v=l):v=o,e?a[3]&&a[4]?t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],a[3],a[4]),v):(h=a[0],t._addPointArrToRst(i,P._getBoundPointS(a[1],a[2],h.width,h.height),v)):(h=a[0],u=(a[3]||h.sourceWidth)/h.width,c=(a[4]||h.sourceHeight)/h.height,_=u*h.sourceWidth,d=c*h.sourceHeight,f=h.offsetX>0?h.offsetX:0,p=h.offsetY>0?h.offsetY:0,f*=u,p*=c,t._addPointArrToRst(i,P._getBoundPointS(a[1]-f,a[2]-p,_,d),v));break;case n._drawRect:case 13:t._addPointArrToRst(i,P._getBoundPointS(a[0],a[1],a[2],a[3]),o);break;case n._drawCircle:case n._fillCircle:case 14:t._addPointArrToRst(i,P._getBoundPointS(a[0]-a[2],a[1]-a[2],a[2]+a[2],a[2]+a[2]),o);break;case n._drawLine:case 20:t._tempPoints.length=0;var y=NaN;y=.5*a[5],a[0]==a[2]?t._tempPoints.push(a[0]+y,a[1],a[2]+y,a[3],a[0]-y,a[1],a[2]-y,a[3]):a[1]==a[3]?t._tempPoints.push(a[0],a[1]+y,a[2],a[3]+y,a[0],a[1]-y,a[2],a[3]-y):t._tempPoints.push(a[0],a[1],a[2],a[3]),t._addPointArrToRst(i,t._tempPoints,o);break;case n._drawCurves:case 22:t._addPointArrToRst(i,T.I.getBezierPoints(a[2]),o,a[0],a[1]);break;case n._drawPoly:case n._drawLines:case 18:t._addPointArrToRst(i,a[2],o,a[0],a[1]);break;case n._drawPath:case 19:t._addPointArrToRst(i,this._getPathPoints(a[2]),o,a[0],a[1]);break;case n._drawPie:case 15:t._addPointArrToRst(i,this._getPiePoints(a[0],a[1],a[2],a[3],a[4]),o)}return i.length>200?i=K.copyArray(i,P._getWrapRec(i)._getBoundPoints()):i.length>8&&(i=b.scanPList(i)),i},e._switchMatrix=function(t,e){e.concat(t),e.copyTo(t)},e._getPiePoints=function(e,i,n,s,r){var o=t._tempPoints;t._tempPoints.length=0,o.push(e,i);var a=(r-s)%(2*Math.PI)/10,h=NaN,l=s;for(h=0;h<=10;h++)o.push(e+n*Math.cos(l),i+n*Math.sin(l)),l+=a;return o},e._getPathPoints=function(e){var i=0,n=0,s=t._tempPoints;s.length=0,n=e.length;var r;for(i=0;i<n;i++)(r=e[i]).length>1&&(s.push(r[1],r[2]),r.length>3&&s.push(r[3],r[4]));return s},t._addPointArrToRst=function(e,i,n,s,r){void 0===s&&(s=0),void 0===r&&(r=0);var o=0,a=0;for(a=i.length,o=0;o<a;o+=2)t._addPointToRst(e,i[o]+s,i[o+1]+r,n)},t._addPointToRst=function(t,e,i,n){var s=S.TEMP;s.setTo(e||0,i||0),n.transformPoint(s),t.push(s.x,s.y)},t._tempPoints=[],t._tempMatrixArrays=[],t._tempCmds=[],n(t,["_tempMatrix",function(){return this._tempMatrix=new M},"_initMatrix",function(){return this._initMatrix=new M}]),t}(),g=function(){function t(){}s(t,"laya.events.Event");var e=t.prototype;return e.setTo=function(t,e,i){return this.type=t,this.currentTarget=e,this.target=i,this},e.stopPropagation=function(){this._stoped=!0},r(0,e,"stageY",function(){return i.stage.mouseY}),r(0,e,"charCode",function(){return this.nativeEvent.charCode}),r(0,e,"touches",function(){var t=this.nativeEvent.touches;if(t)for(var e=i.stage,n=0,s=t.length;n<s;n++){var r=t[n],o=S.TEMP;o.setTo(r.clientX,r.clientY),e._canvasTransform.invertTransformPoint(o),e.transform.invertTransformPoint(o),r.stageX=o.x,r.stageY=o.y}return t}),r(0,e,"keyLocation",function(){return this.nativeEvent.keyLocation}),r(0,e,"ctrlKey",function(){return this.nativeEvent.ctrlKey}),r(0,e,"altKey",function(){return this.nativeEvent.altKey}),r(0,e,"shiftKey",function(){return this.nativeEvent.shiftKey}),r(0,e,"stageX",function(){return i.stage.mouseX}),t.EMPTY=new t,t.MOUSE_DOWN="mousedown",t.MOUSE_UP="mouseup",t.CLICK="click",t.RIGHT_MOUSE_DOWN="rightmousedown",t.RIGHT_MOUSE_UP="rightmouseup",t.RIGHT_CLICK="rightclick",t.MOUSE_MOVE="mousemove",t.MOUSE_OVER="mouseover",t.MOUSE_OUT="mouseout",t.MOUSE_WHEEL="mousewheel",t.ROLL_OVER="mouseover",t.ROLL_OUT="mouseout",t.DOUBLE_CLICK="doubleclick",t.CHANGE="change",t.CHANGED="changed",t.RESIZE="resize",t.ADDED="added",t.REMOVED="removed",t.DISPLAY="display",t.UNDISPLAY="undisplay",t.ERROR="error",t.COMPLETE="complete",t.LOADED="loaded",t.PROGRESS="progress",t.INPUT="input",t.RENDER="render",t.OPEN="open",t.MESSAGE="message",t.CLOSE="close",t.KEY_DOWN="keydown",t.KEY_PRESS="keypress",t.KEY_UP="keyup",t.FRAME="enterframe",t.DRAG_START="dragstart",t.DRAG_MOVE="dragmove",t.DRAG_END="dragend",t.ENTER="enter",t.SELECT="select",t.BLUR="blur",t.FOCUS="focus",t.VISIBILITY_CHANGE="visibilitychange",t.FOCUS_CHANGE="focuschange",t.PLAYED="played",t.PAUSED="paused",t.STOPPED="stopped",t.START="start",t.END="end",t.ENABLE_CHANGED="enablechanged",t.ACTIVE_IN_HIERARCHY_CHANGED="activeinhierarchychanged",t.COMPONENT_ADDED="componentadded",t.COMPONENT_REMOVED="componentremoved",t.LAYER_CHANGED="layerchanged",t.HIERARCHY_LOADED="hierarchyloaded",t.RECOVERED="recovered",t.RELEASED="released",t.LINK="link",t.LABEL="label",t.FULL_SCREEN_CHANGE="fullscreenchange",t.DEVICE_LOST="devicelost",t.MESH_CHANGED="meshchanged",t.MATERIAL_CHANGED="materialchanged",t.WORLDMATRIX_NEEDCHANGE="worldmatrixneedchanged",t.ANIMATION_CHANGED="animationchanged",t.TRIGGER_ENTER="triggerenter",t.TRIGGER_STAY="triggerstay",t.TRIGGER_EXIT="triggerexit",t.TRAIL_FILTER_CHANGE="trailfilterchange",t.DOMINO_FILTER_CHANGE="dominofilterchange",t}(),m=(function(){function t(){}s(t,"laya.events.Keyboard"),t.NUMBER_0=48,t.NUMBER_1=49,t.NUMBER_2=50,t.NUMBER_3=51,t.NUMBER_4=52,t.NUMBER_5=53,t.NUMBER_6=54,t.NUMBER_7=55,t.NUMBER_8=56,t.NUMBER_9=57,t.A=65,t.B=66,t.C=67,t.D=68,t.E=69,t.F=70,t.G=71,t.H=72,t.I=73,t.J=74,t.K=75,t.L=76,t.M=77,t.N=78,t.O=79,t.P=80,t.Q=81,t.R=82,t.S=83,t.T=84,t.U=85,t.V=86,t.W=87,t.X=88,t.Y=89,t.Z=90,t.F1=112,t.F2=113,t.F3=114,t.F4=115,t.F5=116,t.F6=117,t.F7=118,t.F8=119,t.F9=120,t.F10=121,t.F11=122,t.F12=123,t.F13=124,t.F14=125,t.F15=126,t.NUMPAD=21,t.NUMPAD_0=96,t.NUMPAD_1=97,t.NUMPAD_2=98,t.NUMPAD_3=99,t.NUMPAD_4=100,t.NUMPAD_5=101,t.NUMPAD_6=102,t.NUMPAD_7=103,t.NUMPAD_8=104,t.NUMPAD_9=105,t.NUMPAD_ADD=107,t.NUMPAD_DECIMAL=110,t.NUMPAD_DIVIDE=111,t.NUMPAD_ENTER=108,t.NUMPAD_MULTIPLY=106,t.NUMPAD_SUBTRACT=109,t.SEMICOLON=186,t.EQUAL=187,t.COMMA=188,t.MINUS=189,t.PERIOD=190,t.SLASH=191,t.BACKQUOTE=192,t.LEFTBRACKET=219,t.BACKSLASH=220,t.RIGHTBRACKET=221,t.QUOTE=222,t.ALTERNATE=18,t.BACKSPACE=8,t.CAPS_LOCK=20,t.COMMAND=15,t.CONTROL=17,t.DELETE=46,t.ENTER=13,t.ESCAPE=27,t.PAGE_UP=33,t.PAGE_DOWN=34,t.END=35,t.HOME=36,t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.SHIFT=16,t.SPACE=32,t.TAB=9,t.INSERT=45}(),function(){function t(){}return s(t,"laya.events.KeyBoardManager"),t.__init__=function(){t._addEvent("keydown"),t._addEvent("keypress"),t._addEvent("keyup")},t._addEvent=function(t){N.document.addEventListener(t,function(e){laya.events.KeyBoardManager._dispatch(e,t)},!0)},t._dispatch=function(e,n){if(t.enabled){t._event._stoped=!1,t._event.nativeEvent=e,t._event.keyCode=e.keyCode||e.which||e.charCode,"keydown"===n?t._pressKeys[t._event.keyCode]=!0:"keyup"===n&&(t._pressKeys[t._event.keyCode]=null);for(var s=i.stage.focus&&null!=i.stage.focus.event&&i.stage.focus.displayedInStage?i.stage.focus:i.stage,r=s;r;)r.event(n,t._event.setTo(n,r,s)),r=r.parent}},t.hasKeyDown=function(e){return t._pressKeys[e]},t._pressKeys={},t.enabled=!0,n(t,["_event",function(){return this._event=new g}]),t}()),v=(function(){function t(){}s(t,"laya.events.KeyLocation"),t.STANDARD=0,t.LEFT=1,t.RIGHT=2,t.NUM_PAD=3}(),function(){function t(){this.mouseX=0,this.mouseY=0,this.disableMouseEvent=!1,this.mouseDownTime=0,this.mouseMoveAccuracy=2,this._stage=null,this._target=null,this._lastMoveTimer=0,this._isLeftMouse=!1,this._eventList=[],this._touchIDs={},this._id=1,this._tTouchID=0,this._event=new g,this._matrix=new M,this._point=new S,this._rect=new P,this._prePoint=new S,this._curTouchID=NaN}s(t,"laya.events.MouseManager");var e=t.prototype;return e.__init__=function(e,i){var n=this;this._stage=e;var s=this,r=this._eventList;i.oncontextmenu=function(e){if(t.enabled)return!1},i.addEventListener("mousedown",function(e){t.enabled&&(N.onIE||e.preventDefault(),r.push(e),s.mouseDownTime=N.now())}),i.addEventListener("mouseup",function(e){t.enabled&&(e.preventDefault(),r.push(e),s.mouseDownTime=-N.now())},!0),i.addEventListener("mousemove",function(e){if(t.enabled){e.preventDefault();var i=N.now();if(i-s._lastMoveTimer<10)return;s._lastMoveTimer=i,r.push(e)}},!0),i.addEventListener("mouseout",function(e){t.enabled&&r.push(e)}),i.addEventListener("mouseover",function(e){t.enabled&&r.push(e)}),i.addEventListener("touchstart",function(e){t.enabled&&(r.push(e),t._isFirstTouch||xt.isInputting||e.preventDefault(),s.mouseDownTime=N.now())}),i.addEventListener("touchend",function(e){t.enabled?(t._isFirstTouch||xt.isInputting||e.preventDefault(),t._isFirstTouch=!1,r.push(e),s.mouseDownTime=-N.now()):n._curTouchID=NaN},!0),i.addEventListener("touchmove",function(e){t.enabled&&(e.preventDefault(),r.push(e))},!0),i.addEventListener("touchcancel",function(e){t.enabled?(e.preventDefault(),r.push(e)):n._curTouchID=NaN},!0),i.addEventListener("mousewheel",function(e){t.enabled&&r.push(e)}),i.addEventListener("DOMMouseScroll",function(e){t.enabled&&r.push(e)})},e.initEvent=function(t,e){this._event._stoped=!1,this._event.nativeEvent=e||t,this._target=null,this._point.setTo(t.pageX||t.clientX,t.pageY||t.clientY),this._stage._canvasTransform.invertTransformPoint(this._point),this.mouseX=this._point.x,this.mouseY=this._point.y,this._event.touchId=t.identifier||0,this._tTouchID=this._event.touchId;var i;(i=y.I._event)._stoped=!1,i.nativeEvent=this._event.nativeEvent,i.touchId=this._event.touchId},e.checkMouseWheel=function(t){this._event.delta=t.wheelDelta?.025*t.wheelDelta:-t.detail;for(var e=y.I.getLastOvers(),i=0,n=e.length;i<n;i++){var s=e[i];s.event("mousewheel",this._event.setTo("mousewheel",s,this._target))}},e.onMouseMove=function(t){y.I.onMouseMove(t,this._tTouchID)},e.onMouseDown=function(t){if(xt.isInputting&&i.stage.focus&&i.stage.focus.focus&&!i.stage.focus.contains(this._target)){var e=i.stage.focus._tf||i.stage.focus,n=t._tf||t;n instanceof laya.display.Input&&n.multiline==e.multiline?e._focusOut():e.focus=!1}y.I.onMouseDown(t,this._tTouchID,this._isLeftMouse)},e.onMouseUp=function(t){y.I.onMouseUp(t,this._tTouchID,this._isLeftMouse)},e.check=function(t,e,i,n){this._point.setTo(e,i),t.fromParentPoint(this._point),e=this._point.x,i=this._point.y;var s=t.scrollRect;if(s&&(this._rect.setTo(s.x,s.y,s.width,s.height),!this._rect.contains(e,i)))return!1;if(!this.disableMouseEvent){if(t.hitTestPrior&&!t.mouseThrough&&!this.hitTest(t,e,i))return!1;for(var r=t._childs.length-1;r>-1;r--){var o=t._childs[r];if(!o.destroyed&&o.mouseEnabled&&o.visible&&this.check(o,e,i,n))return!0}}var a=!(!t.hitTestPrior||t.mouseThrough||this.disableMouseEvent)||this.hitTest(t,e,i);return a?(this._target=t,n.call(this,t)):n===this.onMouseUp&&t===this._stage&&(this._target=this._stage,n.call(this,this._target)),a},e.hitTest=function(t,e,i){var n=!1;if(t.scrollRect&&(e-=t.scrollRect.x,i-=t.scrollRect.y),t.hitArea instanceof laya.utils.HitArea)return t.hitArea.isHit(e,i);if(t.width>0&&t.height>0||t.mouseThrough||t.hitArea)if(t.mouseThrough)n=t.getGraphicBounds().contains(e,i);else{var s=this._rect;t.hitArea?s=t.hitArea:s.setTo(0,0,t.width,t.height),n=s.contains(e,i)}return n},e.runEvent=function(){var e=this._eventList.length;if(e){for(var i,n=0,s=0,r=0;n<e;){var o=this._eventList[n];switch("mousemove"!==o.type&&(this._prePoint.x=this._prePoint.y=-1e6),o.type){case"mousedown":this._touchIDs[0]=this._id++,t._isTouchRespond?t._isTouchRespond=!1:(this._isLeftMouse=0===o.button,this.initEvent(o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseDown));break;case"mouseup":this._isLeftMouse=0===o.button,this.initEvent(o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseUp);break;case"mousemove":Math.abs(this._prePoint.x-o.clientX)+Math.abs(this._prePoint.y-o.clientY)>=this.mouseMoveAccuracy&&(this._prePoint.x=o.clientX,this._prePoint.y=o.clientY,this.initEvent(o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseMove));break;case"touchstart":t._isTouchRespond=!0,this._isLeftMouse=!0;var a=o.changedTouches;for(s=0,r=a.length;s<r;s++)i=a[s],(t.multiTouchEnabled||isNaN(this._curTouchID))&&(this._curTouchID=i.identifier,this._id%200==0&&(this._touchIDs={}),this._touchIDs[i.identifier]=this._id++,this.initEvent(i,o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseDown));break;case"touchend":case"touchcancel":t._isTouchRespond=!0,this._isLeftMouse=!0;var h=o.changedTouches;for(s=0,r=h.length;s<r;s++)if(i=h[s],t.multiTouchEnabled||i.identifier==this._curTouchID){this._curTouchID=NaN,this.initEvent(i,o);this.check(this._stage,this.mouseX,this.mouseY,this.onMouseUp)||this.onMouseUp(null)}break;case"touchmove":var l=o.changedTouches;for(s=0,r=l.length;s<r;s++)i=l[s],(t.multiTouchEnabled||i.identifier==this._curTouchID)&&(this.initEvent(i,o),this.check(this._stage,this.mouseX,this.mouseY,this.onMouseMove));break;case"wheel":case"mousewheel":case"DOMMouseScroll":this.checkMouseWheel(o);break;case"mouseout":y.I.stageMouseOut();break;case"mouseover":this._stage.event("mouseover",this._event.setTo("mouseover",this._stage,this._stage))}n++}this._eventList.length=0}},t.enabled=!0,t.multiTouchEnabled=!0,t._isTouchRespond=!1,t._isFirstTouch=!0,n(t,["instance",function(){return this.instance=new t}]),t}()),y=function(){function t(){this.preOvers=[],this.preDowns=[],this.preRightDowns=[],this.enable=!0,this._lastClickTime=0,this._event=new g}s(t,"laya.events.TouchManager");var e=t.prototype;return e._clearTempArrs=function(){t._oldArr.length=0,t._newArr.length=0,t._tEleArr.length=0},e.getTouchFromArr=function(t,e){var i=0,n=0;n=e.length;var s;for(i=0;i<n;i++)if((s=e[i]).id==t)return s;return null},e.removeTouchFromArr=function(t,e){var i=0;for(i=e.length-1;i>=0;i--)e[i].id==t&&e.splice(i,1)},e.createTouchO=function(t,e){var i;return i=X.getItem("TouchData")||{},i.id=e,i.tar=t,i},e.onMouseDown=function(e,i,n){if(void 0===n&&(n=!1),this.enable){var s,r,o;s=this.getTouchFromArr(i,this.preOvers),o=this.getEles(e,null,t._tEleArr),s?s.tar=e:(r=this.createTouchO(e,i),this.preOvers.push(r)),N.onMobile&&this.sendEvents(o,"mouseover",i);var a;a=n?this.preDowns:this.preRightDowns,(s=this.getTouchFromArr(i,a))?s.tar=e:(r=this.createTouchO(e,i),a.push(r)),this.sendEvents(o,n?"mousedown":"rightmousedown",i),this._clearTempArrs()}},e.sendEvents=function(t,e,i){void 0===i&&(i=0);var n=0,s=0;s=t.length,this._event._stoped=!1;var r;r=t[0];var o;for(n=0;n<s;n++){if((o=t[n]).destroyed)return;if(o.event(e,this._event.setTo(e,o,r)),this._event._stoped)break}},e.getEles=function(t,e,i){for(i?i.length=0:i=[];t&&t!=e;)i.push(t),t=t.parent;return i},e.checkMouseOutAndOverOfMove=function(e,i,n){if(void 0===n&&(n=0),i!=e){var s,r,o=0,a=0;if(i.contains(e))r=this.getEles(e,i,t._tEleArr),this.sendEvents(r,"mouseover",n);else if(e.contains(i))r=this.getEles(i,e,t._tEleArr),this.sendEvents(r,"mouseout",n);else{(r=t._tEleArr).length=0;var h;h=this.getEles(i,null,t._oldArr);var l;l=this.getEles(e,null,t._newArr),a=h.length;var u=0;for(o=0;o<a;o++){if(s=h[o],(u=l.indexOf(s))>=0){l.splice(u,l.length-u);break}r.push(s)}r.length>0&&this.sendEvents(r,"mouseout",n),l.length>0&&this.sendEvents(l,"mouseover",n)}}},e.onMouseMove=function(e,i){if(this.enable){var n,s;(n=this.getTouchFromArr(i,this.preOvers))?(this.checkMouseOutAndOverOfMove(e,n.tar),n.tar=e,s=this.getEles(e,null,t._tEleArr)):(s=this.getEles(e,null,t._tEleArr),this.sendEvents(s,"mouseover",i),this.preOvers.push(this.createTouchO(e,i))),this.sendEvents(s,"mousemove",i),this._clearTempArrs()}},e.getLastOvers=function(){return t._tEleArr.length=0,this.preOvers.length>0&&this.preOvers[0].tar?this.getEles(this.preOvers[0].tar,null,t._tEleArr):(t._tEleArr.push(i.stage),t._tEleArr)},e.stageMouseOut=function(){var t;t=this.getLastOvers(),this.preOvers.length=0,this.sendEvents(t,"mouseout",0)},e.onMouseUp=function(e,i,n){if(void 0===n&&(n=!1),this.enable){var s,r,o,a,h,l=0,u=0,c=N.onMobile;r=this.getEles(e,null,t._tEleArr),this.sendEvents(r,n?"mouseup":"rightmouseup",i);var _;if(_=n?this.preDowns:this.preRightDowns,s=this.getTouchFromArr(i,_)){var d=!1,f=N.now();if(d=f-this._lastClickTime<300,this._lastClickTime=f,e==s.tar)h=r;else for(o=this.getEles(s.tar,null,t._oldArr),(h=t._newArr).length=0,u=o.length,l=0;l<u;l++)a=o[l],r.indexOf(a)>=0&&h.push(a);h.length>0&&this.sendEvents(h,n?"click":"rightclick",i),n&&d&&this.sendEvents(h,"doubleclick",i),this.removeTouchFromArr(i,_),s.tar=null,X.recover("TouchData",s)}else;(s=this.getTouchFromArr(i,this.preOvers))&&c&&((h=this.getEles(s.tar,null,h))&&h.length>0&&this.sendEvents(h,"mouseout",i),this.removeTouchFromArr(i,this.preOvers),s.tar=null,X.recover("TouchData",s)),this._clearTempArrs()}},t._oldArr=[],t._newArr=[],t._tEleArr=[],n(t,["I",function(){return this.I=new t}]),t}(),w=function(){function t(){this._action=null}s(t,"laya.filters.Filter");var e=t.prototype;return i.imps(e,{"laya.filters.IFilter":!0}),e.callNative=function(t){},r(0,e,"type",function(){return-1}),r(0,e,"action",function(){return this._action}),t.BLUR=16,t.COLOR=32,t.GLOW=8,t._filterStart=null,t._filterEnd=null,t._EndTarget=null,t._recycleScope=null,t._filter=null,t._useSrc=null,t._endSrc=null,t._useOut=null,t._endOut=null,t}(),x=function(){function t(){this.data=null}s(t,"laya.filters.ColorFilterAction");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){var e=t.ctx.ctx,i=t.ctx.ctx.canvas;if(0==i.width||0==i.height)return i;for(var n,s=e.getImageData(0,0,i.width,i.height),r=s.data,o=0,a=r.length;o<a;o+=4)n=this.getColor(r[o],r[o+1],r[o+2],r[o+3]),0!=r[o+3]&&(r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3]);return e.putImageData(s,0,0),t},e.getColor=function(t,e,i,n){var s=[];if(this.data._mat&&this.data._alpha){var r=this.data._mat,o=this.data._alpha;s[0]=r[0]*t+r[1]*e+r[2]*i+r[3]*n+o[0],s[1]=r[4]*t+r[5]*e+r[6]*i+r[7]*n+o[1],s[2]=r[8]*t+r[9]*e+r[10]*i+r[11]*n+o[2],s[3]=r[12]*t+r[13]*e+r[14]*i+r[15]*n+o[3]}return s},t}(),T=(function(){function t(){}s(t,"laya.maths.Arith"),t.formatR=function(t){return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},t.isPOT=function(t,e){return t>0&&0==(t&t-1)&&e>0&&0==(e&e-1)},t.setMatToArray=function(t,e){t.a,t.b,t.c,t.d,t.tx,t.ty,e[0]=t.a,e[1]=t.b,e[4]=t.c,e[5]=t.d,e[12]=t.tx,e[13]=t.ty}}(),function(){function t(){this._controlPoints=[new S,new S,new S],this._calFun=this.getPoint2}s(t,"laya.maths.Bezier");var e=t.prototype;return e._switchPoint=function(t,e){var i=this._controlPoints.shift();i.setTo(t,e),this._controlPoints.push(i)},e.getPoint2=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=Math.pow(1-t,2)*i.x+2*t*(1-t)*n.x+Math.pow(t,2)*s.x,o=Math.pow(1-t,2)*i.y+2*t*(1-t)*n.y+Math.pow(t,2)*s.y;e.push(r,o)},e.getPoint3=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=this._controlPoints[3],o=Math.pow(1-t,3)*i.x+3*n.x*t*(1-t)*(1-t)+3*s.x*t*t*(1-t)+r.x*Math.pow(t,3),a=Math.pow(1-t,3)*i.y+3*n.y*t*(1-t)*(1-t)+3*s.y*t*t*(1-t)+r.y*Math.pow(t,3);e.push(o,a)},e.insertPoints=function(t,e){var i=NaN,n=NaN;for(n=1/(t=t>0?t:5),i=0;i<=1;i+=n)this._calFun(i,e)},e.getBezierPoints=function(t,e,i){void 0===e&&(e=5),void 0===i&&(i=2);var n=0,s=0;if((s=t.length)<2*(i+1))return[];var r;switch(r=[],i){case 2:this._calFun=this.getPoint2;break;case 3:this._calFun=this.getPoint3;break;default:return[]}for(;this._controlPoints.length<=i;)this._controlPoints.push(new S);for(n=0;n<2*i;n+=2)this._switchPoint(t[n],t[n+1]);for(n=2*i;n<s;n+=2)this._switchPoint(t[n],t[n+1]),n/2%i==0&&this.insertPoints(e,r);return r},n(t,["I",function(){return this.I=new t}]),t}()),b=function(){function t(){}return s(t,"laya.maths.GrahamScan"),t.multiply=function(t,e,i){return(t.x-i.x)*(e.y-i.y)-(e.x-i.x)*(t.y-i.y)},t.dis=function(t,e){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)},t._getPoints=function(e,i,n){for(void 0===i&&(i=!1),t._mPointList||(t._mPointList=[]);t._mPointList.length<e;)t._mPointList.push(new S);return n||(n=[]),n.length=0,i?t.getFrom(n,t._mPointList,e):t.getFromR(n,t._mPointList,e),n},t.getFrom=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e[n]);return t},t.getFromR=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e.pop());return t},t.pListToPointList=function(e,i){void 0===i&&(i=!1);var n=0,s=e.length/2,r=t._getPoints(s,i,t._tempPointList);for(n=0;n<s;n++)r[n].setTo(e[n+n],e[n+n+1]);return r},t.pointListToPlist=function(e){var i,n=0,s=e.length,r=t._temPList;for(r.length=0,n=0;n<s;n++)i=e[n],r.push(i.x,i.y);return r},t.scanPList=function(e){return K.copyArray(e,t.pointListToPlist(t.scan(t.pListToPointList(e,!0))))},t.scan=function(e){var i,n,s,r=0,o=0,a=0,h=e.length,l={};for((n=t._temArr).length=0,r=(h=e.length)-1;r>=0;r--)s=(i=e[r]).x+"_"+i.y,l.hasOwnProperty(s)||(l[s]=!0,n.push(i));for(h=n.length,K.copyArray(e,n),r=1;r<h;r++)(e[r].y<e[a].y||e[r].y==e[a].y&&e[r].x<e[a].x)&&(a=r);for(i=e[0],e[0]=e[a],e[a]=i,r=1;r<h-1;r++){for(a=r,o=r+1;o<h;o++)(t.multiply(e[o],e[a],e[0])>0||0==t.multiply(e[o],e[a],e[0])&&t.dis(e[0],e[o])<t.dis(e[0],e[a]))&&(a=o);i=e[r],e[r]=e[a],e[a]=i}if(n=t._temArr,n.length=0,e.length<3)return K.copyArray(n,e);for(n.push(e[0],e[1],e[2]),r=3;r<h;r++){for(;n.length>=2&&t.multiply(e[r],n[n.length-1],n[n.length-2])>=0;)n.pop();e[r]&&n.push(e[r])}return n},t._mPointList=null,t._tempPointList=[],t._temPList=[],t._temArr=[],t}(),C=function(){function t(){}return s(t,"laya.maths.MathUtil"),t.subtractVector3=function(t,e,i){i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2]},t.lerp=function(t,e,i){return t*(1-i)+e*i},t.scaleVector3=function(t,e,i){i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e},t.lerpVector3=function(t,e,i,n){var s=t[0],r=t[1],o=t[2];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=o+i*(e[2]-o)},t.lerpVector4=function(t,e,i,n){var s=t[0],r=t[1],o=t[2],a=t[3];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=o+i*(e[2]-o),n[3]=a+i*(e[3]-a)},t.slerpQuaternionArray=function(t,e,i,n,s,r,o){var a,h,l,u,c,_=t[e+0],d=t[e+1],f=t[e+2],p=t[e+3],g=i[n+0],m=i[n+1],v=i[n+2],y=i[n+3];return(h=_*g+d*m+f*v+p*y)<0&&(h=-h,g=-g,m=-m,v=-v,y=-y),1-h>1e-6?(a=Math.acos(h),l=Math.sin(a),u=Math.sin((1-s)*a)/l,c=Math.sin(s*a)/l):(u=1-s,c=s),r[o+0]=u*_+c*g,r[o+1]=u*d+c*m,r[o+2]=u*f+c*v,r[o+3]=u*p+c*y,r},t.getRotation=function(t,e,i,n){return Math.atan2(n-e,i-t)/Math.PI*180},t.sortBigFirst=function(t,e){return t==e?0:e>t?1:-1},t.sortSmallFirst=function(t,e){return t==e?0:e>t?-1:1},t.sortNumBigFirst=function(t,e){return parseFloat(e)-parseFloat(t)},t.sortNumSmallFirst=function(t,e){return parseFloat(t)-parseFloat(e)},t.sortByKey=function(e,i,n){void 0===i&&(i=!1),void 0===n&&(n=!0);var s;return s=i?n?t.sortNumBigFirst:t.sortBigFirst:n?t.sortNumSmallFirst:t.sortSmallFirst,function(t,i){return s(t[e],i[e])}},t}(),M=function(){function t(t,e,i,n,s,r){this.inPool=!1,this.bTransform=!1,void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===s&&(s=0),void 0===r&&(r=0),this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this._checkTransform()}s(t,"laya.maths.Matrix");var e=t.prototype;return e.identity=function(){return this.a=this.d=1,this.b=this.tx=this.ty=this.c=0,this.bTransform=!1,this},e._checkTransform=function(){return this.bTransform=1!==this.a||0!==this.b||0!==this.c||1!==this.d},e.setTranslate=function(t,e){return this.tx=t,this.ty=e,this},e.translate=function(t,e){return this.tx+=t,this.ty+=e,this},e.scale=function(t,e){this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this.bTransform=!0},e.rotate=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.c,r=this.tx;this.a=n*e-this.b*i,this.b=n*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=r*e-this.ty*i,this.ty=r*i+this.ty*e,this.bTransform=!0},e.skew=function(t,e){var i=Math.tan(t),n=Math.tan(e),s=this.a,r=this.b;return this.a+=n*this.c,this.b+=n*this.d,this.c+=i*s,this.d+=i*r,this},e.invertTransformPoint=function(t){var e=this.a,i=this.b,n=this.c,s=this.d,r=this.tx,o=e*s-i*n,a=s/o,h=-i/o,l=-n/o,u=e/o,c=(n*this.ty-s*r)/o,_=-(e*this.ty-i*r)/o;return t.setTo(a*t.x+l*t.y+c,h*t.x+u*t.y+_)},e.transformPoint=function(t){return t.setTo(this.a*t.x+this.c*t.y+this.tx,this.b*t.x+this.d*t.y+this.ty)},e.transformPointN=function(t){return t.setTo(this.a*t.x+this.c*t.y,this.b*t.x+this.d*t.y)},e.transformPointArray=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r+this.tx,e[n+1]=this.b*s+this.d*r+this.ty}return e},e.transformPointArrayScale=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r,e[n+1]=this.b*s+this.d*r}return e},e.getScaleX=function(){return 0===this.b?this.a:Math.sqrt(this.a*this.a+this.b*this.b)},e.getScaleY=function(){return 0===this.c?this.d:Math.sqrt(this.c*this.c+this.d*this.d)},e.invert=function(){var t=this.a,e=this.b,i=this.c,n=this.d,s=this.tx,r=t*n-e*i;return this.a=n/r,this.b=-e/r,this.c=-i/r,this.d=t/r,this.tx=(i*this.ty-n*s)/r,this.ty=-(t*this.ty-e*s)/r,this},e.setTo=function(t,e,i,n,s,r){return this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this},e.concat=function(t){var e=this.a,i=this.c,n=this.tx;return this.a=e*t.a+this.b*t.c,this.b=e*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d,this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this},e.scaleEx=function(t,e){var i=this.a,n=this.b,s=this.c,r=this.d;0!==n||0!==s?(this.a=t*i,this.b=t*n,this.c=e*s,this.d=e*r):(this.a=t*i,this.b=0*r,this.c=0*i,this.d=e*r),this.bTransform=!0},e.rotateEx=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.b,r=this.c,o=this.d;0!==s||0!==r?(this.a=e*n+i*r,this.b=e*s+i*o,this.c=-i*n+e*r,this.d=-i*s+e*o):(this.a=e*n,this.b=i*o,this.c=-i*n,this.d=e*o),this.bTransform=!0},e.clone=function(){var e=t.create();return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e.bTransform=this.bTransform,e},e.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t.bTransform=this.bTransform,t},e.toString=function(){return this.a+","+this.b+","+this.c+","+this.d+","+this.tx+","+this.ty},e.destroy=function(){if(!this.inPool){var e=t._cache;this.inPool=!0,e._length||(e._length=0),e[e._length++]=this,this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this.bTransform=!1}},t.mul=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,h=t.ty,l=e.a,u=e.b,c=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==u||0!==c?(i.a=n*l+s*c,i.b=n*u+s*_,i.c=r*l+o*c,i.d=r*u+o*_,i.tx=l*a+c*h+d,i.ty=u*a+_*h+f):(i.a=n*l,i.b=s*_,i.c=r*l,i.d=o*_,i.tx=l*a+d,i.ty=_*h+f),i},t.mul16=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,h=t.ty,l=e.a,u=e.b,c=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==u||0!==c?(i[0]=n*l+s*c,i[1]=n*u+s*_,i[4]=r*l+o*c,i[5]=r*u+o*_,i[12]=l*a+c*h+d,i[13]=u*a+_*h+f):(i[0]=n*l,i[1]=s*_,i[4]=r*l,i[5]=o*_,i[12]=l*a+d,i[13]=_*h+f),i},t.mulPre=function(t,e,i,n,s,r,o,a){var h=t.a,l=t.b,u=t.c,c=t.d,_=t.tx,d=t.ty;return 0!==i||0!==n?(a.a=h*e+l*n,a.b=h*i+l*s,a.c=u*e+c*n,a.d=u*i+c*s,a.tx=e*_+n*d+r,a.ty=i*_+s*d+o):(a.a=h*e,a.b=l*s,a.c=u*e,a.d=c*s,a.tx=e*_+r,a.ty=s*d+o),a},t.mulPos=function(t,e,i,n,s,r,o,a){var h=t.a,l=t.b,u=t.c,c=t.d,_=t.tx,d=t.ty;return 0!==l||0!==u?(a.a=e*h+i*u,a.b=e*l+i*c,a.c=n*h+s*u,a.d=n*l+s*c,a.tx=h*r+u*o+_,a.ty=l*r+c*o+d):(a.a=e*h,a.b=i*c,a.c=n*h,a.d=s*c,a.tx=h*r+_,a.ty=c*o+d),a},t.preMul=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=e.a,h=e.b,l=e.c,u=e.d,c=e.tx,_=e.ty;return i.a=a*n,i.b=i.c=0,i.d=u*o,i.tx=c*n+t.tx,i.ty=_*o+t.ty,0===h&&0===l&&0===s&&0===r||(i.a+=h*r,i.d+=l*s,i.b+=a*s+h*o,i.c+=l*n+u*r,i.tx+=_*r,i.ty+=c*s),i},t.preMulXY=function(t,e,i,n){var s=t.a,r=t.b,o=t.c,a=t.d;return n.a=s,n.b=r,n.c=o,n.d=a,n.tx=e*s+t.tx+i*o,n.ty=i*a+t.ty+e*r,n},t.create=function(){var e=t._cache,i=e._length?e[--e._length]:new t;return i.inPool=!1,i},t.EMPTY=new t,t.TEMP=new t,t._cache=[],t}(),S=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}s(t,"laya.maths.Point");var e=t.prototype;return e.setTo=function(t,e){return this.x=t,this.y=e,this},e.distance=function(t,e){return Math.sqrt((this.x-t)*(this.x-t)+(this.y-e)*(this.y-e))},e.toString=function(){return this.x+","+this.y},e.normalize=function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);if(t>0){var e=1/t;this.x*=e,this.y*=e}},t.TEMP=new t,t.EMPTY=new t,t}(),P=function(){function t(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n}s(t,"laya.maths.Rectangle");var e=t.prototype;return e.setTo=function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},e.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},e.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.right&&e>=this.y&&e<this.bottom)},e.intersects=function(t){return!(t.x>this.x+this.width||t.x+t.width<this.x||t.y>this.y+this.height||t.y+t.height<this.y)},e.intersection=function(e,i){return this.intersects(e)?(i||(i=new t),i.x=Math.max(this.x,e.x),i.y=Math.max(this.y,e.y),i.width=Math.min(this.right,e.right)-i.x,i.height=Math.min(this.bottom,e.bottom)-i.y,i):null},e.union=function(e,i){return i||(i=new t),this.clone(i),e.width<=0||e.height<=0?i:(i.addPoint(e.x,e.y),i.addPoint(e.right,e.bottom),this)},e.clone=function(e){return e||(e=new t),e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},e.toString=function(){return this.x+","+this.y+","+this.width+","+this.height},e.equals=function(t){return!(!t||t.x!==this.x||t.y!==this.y||t.width!==this.width||t.height!==this.height)},e.addPoint=function(t,e){return this.x>t&&(this.width+=this.x-t,this.x=t),this.y>e&&(this.height+=this.y-e,this.y=e),this.width<t-this.x&&(this.width=t-this.x),this.height<e-this.y&&(this.height=e-this.y),this},e._getBoundPoints=function(){var e=t._temB;return e.length=0,0==this.width||0==this.height?e:(e.push(this.x,this.y,this.x+this.width,this.y,this.x,this.y+this.height,this.x+this.width,this.y+this.height),e)},e.isEmpty=function(){return this.width<=0||this.height<=0},r(0,e,"right",function(){return this.x+this.width}),r(0,e,"bottom",function(){return this.y+this.height}),t._getBoundPointS=function(e,i,n,s){var r=t._temA;return r.length=0,0==n||0==s?r:(r.push(e,i,e+n,i,e,i+s,e+n,i+s),r)},t._getWrapRec=function(e,i){if(!e||e.length<1)return i?i.setTo(0,0,0,0):t.TEMP.setTo(0,0,0,0);i=i||new t;var n,s,r,o,a,h=e.length,l=S.TEMP;for(r=a=-(s=o=99999),n=0;n<h;n+=2)l.x=e[n],l.y=e[n+1],s=s<l.x?s:l.x,o=o<l.y?o:l.y,r=r>l.x?r:l.x,a=a>l.y?a:l.y;return i.setTo(s,o,r-s,a-o)},t.EMPTY=new t,t.TEMP=new t,t._temB=[],t._temA=[],t}(),E=function(){function t(){}return s(t,"laya.media.SoundManager"),r(1,t,"useAudioMusic",function(){return t._useAudioMusic},function(e){t._useAudioMusic=e,t._musicClass=e?et:null}),r(1,t,"autoStopMusic",function(){return t._autoStopMusic},function(e){i.stage.off("blur",null,t._stageOnBlur),i.stage.off("focus",null,t._stageOnFocus),i.stage.off("visibilitychange",null,t._visibilityChange),t._autoStopMusic=e,e&&(i.stage.on("blur",null,t._stageOnBlur),i.stage.on("focus",null,t._stageOnFocus),i.stage.on("visibilitychange",null,t._visibilityChange))}),r(1,t,"muted",function(){return t._muted},function(e){e!=t._muted&&(e&&t.stopAllSound(),t.musicMuted=e,t._muted=e)}),r(1,t,"musicMuted",function(){return t._musicMuted},function(e){e!=t._musicMuted&&(e?(t._tMusic&&t._musicChannel&&!t._musicChannel.isStopped?t._musicChannel.pause():t._musicChannel=null,t._musicMuted=e):(t._musicMuted=e,t._tMusic&&t._musicChannel&&t._musicChannel.resume()))}),r(1,t,"soundMuted",function(){return t._soundMuted},function(e){t._soundMuted=e}),t.addChannel=function(e){t._channels.indexOf(e)>=0||t._channels.push(e)},t.removeChannel=function(e){var i=0;for(i=t._channels.length-1;i>=0;i--)t._channels[i]==e&&t._channels.splice(i,1)},t.disposeSoundIfNotUsed=function(e){var i=0;for(i=t._channels.length-1;i>=0;i--)if(t._channels[i].url==e)return;t.destroySound(e)},t._visibilityChange=function(){i.stage.isVisibility?t._stageOnFocus():t._stageOnBlur()},t._stageOnBlur=function(){t._isActive=!1,t._musicChannel&&(t._musicChannel.isStopped||(t._blurPaused=!0,t._musicChannel.pause())),t.stopAllSound(),i.stage.once("mousedown",null,t._stageOnFocus)},t._recoverWebAudio=function(){st.ctx&&"running"!=st.ctx.state&&st.ctx.resume&&st.ctx.resume()},t._stageOnFocus=function(){t._isActive=!0,t._recoverWebAudio(),i.stage.off("mousedown",null,t._stageOnFocus),t._blurPaused&&t._musicChannel&&t._musicChannel.isStopped&&(t._blurPaused=!1,t._musicChannel.resume())},t.playSound=function(e,n,s,r,o){if(void 0===n&&(n=1),void 0===o&&(o=0),!t._isActive||!e)return null;if(t._muted)return null;if(t._recoverWebAudio(),(e=L.formatURL(e))==t._tMusic){if(t._musicMuted)return null}else{if(R.isConchApp){var a=K.getFileExtension(e);if("wav"!=a&&"ogg"!=a)return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."),null}if(t._soundMuted)return null}var h;N.onMiniGame||(h=i.loader.getRes(e)),r||(r=t._soundClass),h||((h=new r).load(e),ot.cacheRes(e,h));var l;return(l=h.play(o,n))?(l.url=e,l.volume=e==t._tMusic?t.musicVolume:t.soundVolume,l.completeHandler=s,l):null},t.destroySound=function(t){var e=i.loader.getRes(t);e&&(ot.clearRes(t),e.dispose())},t.playMusic=function(e,i,n,s){return void 0===i&&(i=0),void 0===s&&(s=0),e=L.formatURL(e),t._tMusic=e,t._musicChannel&&t._musicChannel.stop(),t._musicChannel=t.playSound(e,i,n,t._musicClass,s)},t.stopSound=function(e){e=L.formatURL(e);var i,n=0;for(n=t._channels.length-1;n>=0;n--)(i=t._channels[n]).url==e&&i.stop()},t.stopAll=function(){t._tMusic=null;var e=0;for(e=t._channels.length-1;e>=0;e--)t._channels[e].stop()},t.stopAllSound=function(){var e,i=0;for(i=t._channels.length-1;i>=0;i--)(e=t._channels[i]).url!=t._tMusic&&e.stop()},t.stopMusic=function(){t._musicChannel&&t._musicChannel.stop(),t._tMusic=null},t.setSoundVolume=function(e,i){if(i)i=L.formatURL(i),t._setVolume(i,e);else{t.soundVolume=e;var n,s=0;for(s=t._channels.length-1;s>=0;s--)(n=t._channels[s]).url!=t._tMusic&&(n.volume=e)}},t.setMusicVolume=function(e){t.musicVolume=e,t._setVolume(t._tMusic,e)},t._setVolume=function(e,i){e=L.formatURL(e);var n,s=0;for(s=t._channels.length-1;s>=0;s--)(n=t._channels[s]).url==e&&(n.volume=i)},t.musicVolume=1,t.soundVolume=1,t.playbackRate=1,t._useAudioMusic=!0,t._muted=!1,t._soundMuted=!1,t._musicMuted=!1,t._tMusic=null,t._musicChannel=null,t._channels=[],t._autoStopMusic=!1,t._blurPaused=!1,t._isActive=!0,t._soundClass=null,t._musicClass=null,t.autoReleaseSound=!0,t}(),I=function(){function e(){}var i;return s(e,"laya.net.LocalStorage"),e.__init__=function(){e._baseClass||(e._baseClass=i,i.init()),e.items=e._baseClass.items,e.support=e._baseClass.support},e.setItem=function(t,i){e._baseClass.setItem(t,i)},e.getItem=function(t){return e._baseClass.getItem(t)},e.setJSON=function(t,i){e._baseClass.setJSON(t,i)},e.getJSON=function(t){return e._baseClass.getJSON(t)},e.removeItem=function(t){e._baseClass.removeItem(t)},e.clear=function(){e._baseClass.clear()},e._baseClass=null,e.items=null,e.support=!1,e.__init$=function(){i=function(){function e(){}return s(e,""),e.init=function(){try{e.items=t.localStorage,e.setItem("laya","1"),e.removeItem("laya"),e.support=!0}catch(t){}e.support||console.log("LocalStorage is not supprot or browser is private mode.")},e.setItem=function(t,i){try{e.support&&e.items.setItem(t,i)}catch(t){console.warn("set localStorage failed",t)}},e.getItem=function(t){return e.support?e.items.getItem(t):null},e.setJSON=function(t,i){try{e.support&&e.items.setItem(t,JSON.stringify(i))}catch(t){console.warn("set localStorage failed",t)}},e.getJSON=function(t){return JSON.parse(e.support?e.items.getItem(t):null)},e.removeItem=function(t){e.support&&e.items.removeItem(t)},e.clear=function(){e.support&&e.items.clear()},e.items=null,e.support=!1,e}()},e}(),A=(function(){function t(){}s(t,"laya.net.ResourceVersion"),t.enable=function(e,n,s){void 0===s&&(s=2),laya.net.ResourceVersion.type=s,i.loader.load(e,l.create(null,t.onManifestLoaded,[n]),null,"json"),L.customFormat=t.addVersionPrefix},t.onManifestLoaded=function(e,i){t.manifest=i,e.run(),i||console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")},t.addVersionPrefix=function(e){return t.manifest&&t.manifest[e]?2==t.type?t.manifest[e]:t.manifest[e]+"/"+e:e},t.FOLDER_VERSION=1,t.FILENAME_VERSION=2,t.manifest=null,t.type=1}(),function(){function t(){this.fontName=null,this.complete=null,this.err=null,this._fontTxt=null,this._url=null,this._div=null,this._txtWidth=NaN,this._http=null}s(t,"laya.net.TTFLoader");var e=t.prototype;return e.load=function(t){this._url=t;var e=t.split(".ttf")[0].split("/");this.fontName=e[e.length-1],N.window.conch?this._loadConch():N.window.FontFace?this._loadWithFontFace():this._loadWithCSS()},e._loadConch=function(){this._http=new rt,this._http.on("error",this,this._onErr),this._http.on("complete",this,this._onHttpLoaded),this._http.send(this._url,null,"get","arraybuffer")},e._onHttpLoaded=function(t){N.window.conch.setFontFaceFromBuffer(this.fontName,t),this._clearHttp(),this._complete()},e._clearHttp=function(){this._http&&(this._http.off("error",this,this._onErr),this._http.off("complete",this,this._onHttpLoaded),this._http=null)},e._onErr=function(){this._clearHttp(),this.err&&(this.err.runWith("fail:"+this._url),this.err=null)},e._complete=function(){i.timer.clear(this,this._complete),i.timer.clear(this,this._checkComplete),this._div&&this._div.parentNode&&(this._div.parentNode.removeChild(this._div),this._div=null),this.complete&&(this.complete.runWith(this),this.complete=null)},e._checkComplete=function(){o.measureText("LayaTTFFont",this._fontTxt).width!=this._txtWidth&&this._complete()},e._loadWithFontFace=function(){var t=new N.window.FontFace(this.fontName,"url('"+this._url+"')");N.window.document.fonts.add(t);var e=this;t.loaded.then(function(){e._complete()}),t.load()},e._createDiv=function(){this._div=N.createElement("div"),this._div.innerHTML="laya";var t=this._div.style;t.fontFamily=this.fontName,t.position="absolute",t.left="-100px",t.top="-100px",N.document.body.appendChild(this._div)},e._loadWithCSS=function(){var t=this,e=N.createElement("style");e.type="text/css",N.document.body.appendChild(e),e.textContent="@font-face { font-family:'"+this.fontName+"'; src:url('"+this._url+"');}",this._fontTxt="40px "+this.fontName,this._txtWidth=o.measureText("LayaTTFFont",this._fontTxt).width;var n=this;e.onload=function(){i.timer.once(1e4,n,t._complete)},i.timer.loop(20,this,this._checkComplete),this._createDiv()},t._testString="LayaTTFFont",t}()),L=function(){function t(e){this._url=null,this._path=null,this._url=t.formatURL(e),this._path=t.getPath(e)}s(t,"laya.net.URL");var e=t.prototype;return r(0,e,"path",function(){return this._path}),r(0,e,"url",function(){return this._url}),t.formatURL=function(e,i){if(!e)return"null path";if(e.indexOf(":")>0)return e;null!=t.customFormat&&(e=t.customFormat(e,i));var n=e.charAt(0);if("."===n)return t.formatRelativePath((i||t.basePath)+e);if("~"===n)return t.rootPath+e.substring(1);if("d"===n){if(0===e.indexOf("data:image"))return e}else if("/"===n)return e;return(i||t.basePath)+e},t.formatRelativePath=function(t){for(var e=t.split("/"),i=0,n=e.length;i<n;i++)".."==e[i]&&(e.splice(i-1,2),i-=2);return e.join("/")},t.isAbsolute=function(t){return t.indexOf(":")>0||"/"==t.charAt(0)},t.getPath=function(t){var e=t.lastIndexOf("/");return e>0?t.substr(0,e+1):""},t.getFileName=function(t){var e=t.lastIndexOf("/");return e>0?t.substr(e+1):t},t.version={},t.basePath="",t.rootPath="",t.customFormat=function(e){var i=t.version[e];return!R.isConchApp&&i&&(e+="?v="+i),e},t}(),R=function(){function e(t,n){function s(){i.stage._loop(),N.window.requestAnimationFrame(s)}this._timeId=0;var r=e._mainCanvas.source.style;r.position="absolute",r.top=r.left="0px",r.background="#000000",e._mainCanvas.source.id="layaCanvas";var o=laya.renders.Render.isWebGL;e._mainCanvas.source.width=t,e._mainCanvas.source.height=n,o&&e.WebGL.init(e._mainCanvas,t,n),N.container.appendChild(e._mainCanvas.source),(e._context=new D(t,n,o?null:e._mainCanvas)).ctx.setIsMainContext(),N.window.requestAnimationFrame(s),i.stage.on("visibilitychange",this,this._onVisibilitychange)}s(e,"laya.renders.Render");var n=e.prototype;return n._onVisibilitychange=function(){i.stage.isVisibility?0!=this._timeId&&N.window.clearInterval(this._timeId):this._timeId=N.window.setInterval(this._enterFrame,1e3)},n._enterFrame=function(t){i.stage._loop()},r(1,e,"context",function(){return e._context}),r(1,e,"canvas",function(){return e._mainCanvas.source}),e._context=null,e._mainCanvas=null,e.WebGL=null,e.isConchNode=!1,e.isConchApp=!1,e.isConchWebGL=!1,e.isWebGL=!1,e.is3DMode=!1,e.optimizeTextureMemory=function(t,e){return!0},e.__init$=function(){t.ConchRenderType=t.ConchRenderType||1,t.ConchRenderType|=t.conch?4:0,e.isConchNode=5==(5&t.ConchRenderType),e.isConchApp=4==(4&t.ConchRenderType),e.isConchWebGL=6==t.ConchRenderType},e}(),D=function(){function t(e,i,n){this.x=0,this.y=0,this._drawTexture=function(t,e,i){i[0].loaded&&this.ctx.drawTexture(i[0],i[1],i[2],i[3],i[4],t,e)},this._fillTexture=function(t,e,i){i[0].loaded&&this.ctx.fillTexture(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._drawTextureWithTransform=function(t,e,i){i[0].loaded&&this.ctx.drawTextureWithTransform(i[0],i[1],i[2],i[3],i[4],i[5],t,e,i[6])},this._fillQuadrangle=function(t,e,i){this.ctx.fillQuadrangle(i[0],i[1],i[2],i[3],i[4])},this._drawRect=function(t,e,i){var n=this.ctx;null!=i[4]&&(n.fillStyle=i[4],n.fillRect(t+i[0],e+i[1],i[2],i[3],null)),null!=i[5]&&(n.strokeStyle=i[5],n.lineWidth=i[6],n.strokeRect(t+i[0],e+i[1],i[2],i[3],i[6]))},this._drawPie=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(i[8]),n.beginPath(),R.isWebGL?(n.movePath(i[0]+t,i[1]+e),n.moveTo(0,0)):n.moveTo(t+i[0],e+i[1]),n.arc(t+i[0],e+i[1],i[2],i[3],i[4]),n.closePath(),this._fillAndStroke(i[5],i[6],i[7],!0)},this._clipRect=function(t,e,i){this.ctx.clipRect(t+i[0],e+i[1],i[2],i[3])},this._fillRect=function(t,e,i){this.ctx.fillRect(t+i[0],e+i[1],i[2],i[3],i[4])},this._drawCircle=function(e,i,n){var s=this.ctx;R.isWebGL&&s.setPathId(n[6]),$.drawCall++,s.beginPath(),R.isWebGL&&s.movePath(n[0]+e,n[1]+i),s.arc(n[0]+e,n[1]+i,n[2],0,t.PI2),s.closePath(),this._fillAndStroke(n[3],n[4],n[5],!0)},this._fillCircle=function(e,i,n){$.drawCall++;var s=this.ctx;s.beginPath(),s.fillStyle=n[3],s.arc(n[0]+e,n[1]+i,n[2],0,t.PI2),s.fill()},this._setShader=function(t,e,i){this.ctx.setShader(i[0])},this._drawLine=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(i[6]),n.beginPath(),n.strokeStyle=i[4],n.lineWidth=i[5],R.isWebGL?(n.movePath(t,e),n.moveTo(i[0],i[1]),n.lineTo(i[2],i[3])):(n.moveTo(t+i[0],e+i[1]),n.lineTo(t+i[2],e+i[3])),n.stroke()},this._drawLines=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(i[5]),n.beginPath(),t+=i[0],e+=i[1],R.isWebGL&&n.movePath(t,e),n.strokeStyle=i[3],n.lineWidth=i[4];var s=i[2],r=2,o=s.length;if(R.isWebGL)for(n.moveTo(s[0],s[1]);r<o;)n.lineTo(s[r++],s[r++]);else for(n.moveTo(t+s[0],e+s[1]);r<o;)n.lineTo(t+s[r++],e+s[r++]);n.stroke()},this._drawLinesWebGL=function(t,e,i){this.ctx.drawLines(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4])},this._drawCurves=function(t,e,i){this.ctx.drawCurves(t,e,i)},this._draw=function(t,e,i){i[0].call(null,this,t,e)},this._transformByMatrix=function(t,e,i){this.ctx.transformByMatrix(i[0])},this._setTransform=function(t,e,i){this.ctx.setTransform(i[0],i[1],i[2],i[3],i[4],i[5])},this._setTransformByMatrix=function(t,e,i){this.ctx.setTransformByMatrix(i[0])},this._save=function(t,e,i){this.ctx.save()},this._restore=function(t,e,i){this.ctx.restore()},this._translate=function(t,e,i){this.ctx.translate(i[0],i[1])},this._transform=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e);var n=i[0];this.ctx.transform(n.a,n.b,n.c,n.d,n.tx,n.ty),this.ctx.translate(-t-i[1],-e-i[2])},this._rotate=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e),this.ctx.rotate(i[0]),this.ctx.translate(-t-i[1],-e-i[2])},this._scale=function(t,e,i){this.ctx.translate(i[2]+t,i[3]+e),this.ctx.scale(i[0],i[1]),this.ctx.translate(-t-i[2],-e-i[3])},this._alpha=function(t,e,i){this.ctx.globalAlpha*=i[0]},this._setAlpha=function(t,e,i){this.ctx.globalAlpha=i[0]},this._fillText=function(t,e,i){this.ctx.fillText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5])},this._strokeText=function(t,e,i){this.ctx.strokeText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6])},this._fillBorderText=function(t,e,i){this.ctx.fillBorderText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._blendMode=function(t,e,i){this.ctx.globalCompositeOperation=i[0]},this._beginClip=function(t,e,i){this.ctx.beginClip&&this.ctx.beginClip(t+i[0],e+i[1],i[2],i[3])},this._setIBVB=function(t,e,i){this.ctx.setIBVB(i[0]+t,i[1]+e,i[2],i[3],i[4],i[5],i[6],i[7])},this._fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1]+t,i[2]+e,i[3],i[4])},this._drawPath=function(t,e,i){var n=this.ctx;R.isWebGL&&n.setPathId(-1),n.beginPath(),t+=i[0],e+=i[1],R.isWebGL&&n.movePath(t,e);for(var s=i[2],r=0,o=s.length;r<o;r++){var a=s[r];switch(a[0]){case"moveTo":R.isWebGL?n.moveTo(a[1],a[2]):n.moveTo(t+a[1],e+a[2]);break;case"lineTo":R.isWebGL?n.lineTo(a[1],a[2]):n.lineTo(t+a[1],e+a[2]);break;case"arcTo":R.isWebGL?n.arcTo(a[1],a[2],a[3],a[4],a[5]):n.arcTo(t+a[1],e+a[2],t+a[3],e+a[4],a[5]);break;case"closePath":n.closePath()}}var h=i[3];null!=h&&(n.fillStyle=h.fillStyle,n.fill());var l=i[4];null!=l&&(n.strokeStyle=l.strokeStyle,n.lineWidth=l.lineWidth||1,n.lineJoin=l.lineJoin,n.lineCap=l.lineCap,n.miterLimit=l.miterLimit,n.stroke())},this.drawPoly=function(t,e,i){this.ctx.drawPoly(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4],i[5],i[6])},this._drawPoly=function(t,e,i){var n=this.ctx,s=i[2],r=2,o=s.length;if(R.isWebGL)for(n.setPathId(i[6]),n.beginPath(),t+=i[0],e+=i[1],n.movePath(t,e),n.moveTo(s[0],s[1]);r<o;)n.lineTo(s[r++],s[r++]);else for(n.beginPath(),t+=i[0],e+=i[1],n.moveTo(t+s[0],e+s[1]);r<o;)n.lineTo(t+s[r++],e+s[r++]);n.closePath(),this._fillAndStroke(i[3],i[4],i[5],i[7])},this._drawSkin=function(t,e,i){var n=i[0];if(n){var s=this.ctx;n.render(s,t,e)}},this._drawParticle=function(t,e,i){this.ctx.drawParticle(t+this.x,e+this.y,i[0])},this._setFilters=function(t,e,i){this.ctx.setFilters(i)},n?this.ctx=n.getContext("2d"):(n=yt.create("3D"),this.ctx=o.createWebGLContext2D(n),n._setContext(this.ctx)),n.size(e,i),this.canvas=n}s(t,"laya.renders.RenderContext");var e=t.prototype;return e.destroy=function(){this.canvas&&(this.canvas.destroy(),this.canvas=null,this.ctx=null),this.ctx&&(this.ctx.destroy(),this.ctx=null)},e.drawTexture=function(t,e,i,n,s){t.loaded&&this.ctx.drawTexture(t,e,i,n,s,this.x,this.y)},e._drawTextures=function(t,e,i){i[0].loaded&&this.ctx.drawTextures(i[0],i[1],t+this.x,e+this.y)},e.drawTextureWithTransform=function(t,e,i,n,s,r,o){t.loaded&&this.ctx.drawTextureWithTransform(t,e,i,n,s,r,this.x,this.y,o)},e.fillQuadrangle=function(t,e,i,n,s){this.ctx.fillQuadrangle(t,e,i,n,s)},e.drawCanvas=function(t,e,i,n,s){this.ctx.drawCanvas(t,e+this.x,i+this.y,n,s)},e.drawRect=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=this.ctx;o.strokeStyle=s,o.lineWidth=r,o.strokeRect(t+this.x,e+this.y,i,n,r)},e._fillAndStroke=function(t,e,i,n){void 0===n&&(n=!1);var s=this.ctx;null!=t&&(s.fillStyle=t,R.isWebGL?s.fill(n):s.fill()),null!=e&&i>0&&(s.strokeStyle=e,s.lineWidth=i,s.stroke())},e.clipRect=function(t,e,i,n){this.ctx.clipRect(t+this.x,e+this.y,i,n)},e.fillRect=function(t,e,i,n,s){this.ctx.fillRect(t+this.x,e+this.y,i,n,s)},e.drawCircle=function(e,i,n,s,r){void 0===r&&(r=1),$.drawCall++;var o=this.ctx;o.beginPath(),o.strokeStyle=s,o.lineWidth=r,o.arc(e+this.x,i+this.y,n,0,t.PI2),o.stroke()},e.drawTriangles=function(t,e,i){if(R.isWebGL)this.ctx.drawTriangles(i[0],t+i[1],e+i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);else{var n=i[5],s=0,r=n.length,o=this.ctx;for(s=0;s<r;s+=3){var a=2*n[s],h=2*n[s+1],l=2*n[s+2];o.drawTriangle(i[0],i[3],i[4],a,h,l,i[6],!0)}}},e.fillCircle=function(e,i,n,s){$.drawCall++;var r=this.ctx;r.beginPath(),r.fillStyle=s,r.arc(e+this.x,i+this.y,n,0,t.PI2),r.fill()},e.setShader=function(t){this.ctx.setShader(t)},e.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=this.ctx;o.beginPath(),o.strokeStyle=s,o.lineWidth=r,o.moveTo(this.x+t,this.y+e),o.lineTo(this.x+i,this.y+n),o.stroke()},e.clear=function(){this.ctx.clear()},e.transformByMatrix=function(t){this.ctx.transformByMatrix(t)},e.setTransform=function(t,e,i,n,s,r){this.ctx.setTransform(t,e,i,n,s,r)},e.setTransformByMatrix=function(t){this.ctx.setTransformByMatrix(t)},e.save=function(){this.ctx.save()},e.restore=function(){this.ctx.restore()},e.translate=function(t,e){this.ctx.translate(t,e)},e.transform=function(t,e,i,n,s,r){this.ctx.transform(t,e,i,n,s,r)},e.rotate=function(t){this.ctx.rotate(t)},e.scale=function(t,e){this.ctx.scale(t,e)},e.alpha=function(t){this.ctx.globalAlpha*=t},e.setAlpha=function(t){this.ctx.globalAlpha=t},e.fillWords=function(t,e,i,n,s,r){void 0===r&&(r=0),this.ctx.fillWords(t,e,i,n,s,r)},e.fillBorderWords=function(t,e,i,n,s,r,o){this.ctx.fillBorderWords(t,e,i,n,s,r,o)},e.fillText=function(t,e,i,n,s,r){this.ctx.fillText(t,e+this.x,i+this.y,n,s,r)},e.strokeText=function(t,e,i,n,s,r,o){this.ctx.strokeText(t,e+this.x,i+this.y,n,s,r,o)},e.blendMode=function(t){this.ctx.globalCompositeOperation=t},e.flush=function(){this.ctx.flush&&this.ctx.flush()},e.addRenderObject=function(t){this.ctx.addRenderObject(t)},e.beginClip=function(t,e,i,n){this.ctx.beginClip&&this.ctx.beginClip(t,e,i,n)},e.endClip=function(){this.ctx.endClip&&this.ctx.endClip()},e.fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1],i[2],i[3],i.length>4?i[4]:null)},t.PI2=2*Math.PI,t}(),F=function(){function t(e,i){switch(this._next=i||t.NORENDER,e){case 0:return void(this._fun=this._no);case 1:return void(this._fun=this._image);case 2:return void(this._fun=this._alpha);case 4:return void(this._fun=this._transform);case 8:return void(this._fun=this._blend);case 16:return void(this._fun=this._canvas);case 64:return void(this._fun=this._mask);case 128:return void(this._fun=this._clip);case 256:return void(this._fun=this._style);case 512:return void(this._fun=this._graphics);case 2048:return void(this._fun=this._childs);case 1024:return void(this._fun=this._custom);case 513:case 517:return void(this._fun=this._image2);case 32:return void(this._fun=w._filter);case 69905:return void(this._fun=t._initRenderFun)}this.onCreate(e)}s(t,"laya.renders.RenderSprite");var e=t.prototype;return e.onCreate=function(t){},e._style=function(t,e,i,n){t._style.render(t,e,i,n);var s=this._next;s._fun.call(s,t,e,i,n)},e._no=function(t,e,i,n){},e._custom=function(t,e,i,n){t.customRender(e,i,n);var s=t._style._tf;this._next._fun.call(this._next,t,e,i-s.translateX,n-s.translateY)},e._clip=function(e,i,n,s){var r=this._next;if(r!=t.NORENDER){var o=e._style.scrollRect;i.ctx.save(),i.ctx.clipRect(n,s,o.width,o.height),r._fun.call(r,e,i,n-o.x,s-o.y),i.ctx.restore()}},e._blend=function(t,e,i,n){var s=t._style;s.blendMode&&(e.ctx.globalCompositeOperation=s.blendMode);var r=this._next;r._fun.call(r,t,e,i,n),e.ctx.globalCompositeOperation="source-over"},e._mask=function(t,e,i,n){var s=this._next;s._fun.call(s,t,e,i,n);var r=t.mask;r&&(e.ctx.globalCompositeOperation="destination-in",(r.numChildren>0||!r.graphics._isOnlyOne())&&(r.cacheAsBitmap=!0),r.render(e,i-t.pivotX,n-t.pivotY)),e.ctx.globalCompositeOperation="source-over"},e._graphics=function(t,e,i,n){var s=t._style._tf;t._graphics&&t._graphics._render(t,e,i-s.translateX,n-s.translateY);var r=this._next;r._fun.call(r,t,e,i,n)},e._image=function(t,e,i,n){var s=t._style;e.ctx.drawTexture2(i,n,s._tf.translateX,s._tf.translateY,t.transform,s.alpha,s.blendMode,t._graphics._one)},e._image2=function(t,e,i,n){var s=t._style._tf;e.ctx.drawTexture2(i,n,s.translateX,s.translateY,t.transform,1,null,t._graphics._one)},e._alpha=function(t,e,i,n){var s;if((s=t._style.alpha)>.01||t._needRepaint()){var r=e.ctx.globalAlpha;e.ctx.globalAlpha*=s;var o=this._next;o._fun.call(o,t,e,i,n),e.ctx.globalAlpha=r}},e._transform=function(e,i,n,s){var r=e.transform,o=this._next;r&&o!=t.NORENDER?(i.save(),i.transform(r.a,r.b,r.c,r.d,r.tx+n,r.ty+s),o._fun.call(o,e,i,0,0),i.restore()):o._fun.call(o,e,i,n,s)},e._childs=function(t,e,i,n){var s=t._style,r=s._tf;if(i=i-r.translateX+s.paddingLeft,n=n-r.translateY+s.paddingTop,s._calculation){var o=t._getWords();if(o){var a=s;a&&(a.stroke?e.fillBorderWords(o,i,n,a.font,a.color,a.strokeColor,a.stroke):e.fillWords(o,i,n,a.font,a.color,"none"!=a.textDecoration&&a.underLine?1:0))}}var h,l=t._childs,u=l.length;if(t.viewport||t.optimizeScrollRect&&t._style.scrollRect){var c=t.viewport||t._style.scrollRect,_=c.x,d=c.y,f=c.right,p=c.bottom,g=NaN,m=NaN;for(v=0;v<u;++v)(h=l[v]).visible&&(g=h._x)<f&&g+h.width>_&&(m=h._y)<p&&m+h.height>d&&h.render(e,i,n)}else for(var v=0;v<u;++v)(h=l[v])._style.visible&&h.render(e,i,n)},e._canvas=function(t,e,i,n){var s=t._$P.cacheCanvas;if(s){"bitmap"===s.type?$.canvasBitmap++:$.canvasNormal++;var r=s.ctx;if(t._needRepaint()||!r)this._canvas_repaint(t,e,i,n);else{var o=s._cacheRec;e.drawCanvas(r.canvas,i+o.x,n+o.y,o.width,o.height)}}else this._next._fun.call(this._next,t,e,i,n)},e._canvas_repaint=function(t,e,n,s){var r=t._$P.cacheCanvas,o=this._next;if(r){var a,h,l,u,c=r.ctx,_=t._needRepaint()||!c,d=r.type;if("bitmap"===d?$.canvasBitmap++:$.canvasNormal++,_){r._cacheRec||(r._cacheRec=new P);var f,p;R.isWebGL&&"bitmap"!==d?r._cacheRec.setTo(-t.pivotX,-t.pivotY,1,1):((u=t.getSelfBounds()).x=u.x-t.pivotX,u.y=u.y-t.pivotY,u.x=u.x-16,u.y=u.y-16,u.width=u.width+32,u.height=u.height+32,u.x=Math.floor(u.x+n)-n,u.y=Math.floor(u.y+s)-s,u.width=Math.floor(u.width),u.height=Math.floor(u.height),r._cacheRec.copyFrom(u)),u=r._cacheRec;var g=R.isWebGL?1:N.pixelRatio*i.stage.clientScaleX,m=R.isWebGL?1:N.pixelRatio*i.stage.clientScaleY;if(!R.isWebGL){var v,y=1,w=1;for(v=t;v&&v!=i.stage;)y*=v.scaleX,w*=v.scaleY,v=v.parent;R.isWebGL?(y<1&&(g*=y),w<1&&(m*=w)):(y>1&&(g*=y),w>1&&(m*=w))}if(t.scrollRect){var x=t.scrollRect;u.x-=x.x,u.y-=x.y}if(f=u.width*g,p=u.height*m,h=u.x,l=u.y,R.isWebGL&&"bitmap"===d&&(f>2048||p>2048))return console.warn("cache bitmap size larger than 2048,cache ignored"),r.ctx&&(X.recover("RenderContext",r.ctx),r.ctx.canvas.size(0,0),r.ctx=null),void o._fun.call(o,t,e,n,s);c||(c=r.ctx=X.getItem("RenderContext")||new D(f,p,yt.create("AUTO"))),c.ctx.sprite=t,(a=c.canvas).clear(),(a.width!=f||a.height!=p)&&a.size(f,p),"bitmap"===d?a.context.asBitmap=!0:"normal"===d&&(a.context.asBitmap=!1);var T;if(1!=g||1!=m){var b=c.ctx;b.save(),b.scale(g,m),!R.isConchWebGL&&R.isConchApp&&(T=t._$P.cf)&&b.setFilterMatrix&&b.setFilterMatrix(T._mat,T._alpha),o._fun.call(o,t,c,-h,-l),b.restore(),R.isConchApp&&!R.isConchWebGL||t._applyFilters()}else b=c.ctx,!R.isConchWebGL&&R.isConchApp&&(T=t._$P.cf)&&b.setFilterMatrix&&b.setFilterMatrix(T._mat,T._alpha),o._fun.call(o,t,c,-h,-l),R.isConchApp&&!R.isConchWebGL||t._applyFilters();t._$P.staticCache&&(r.reCache=!1),$.canvasReCache++}else h=(u=r._cacheRec).x,l=u.y,a=c.canvas;e.drawCanvas(a,n+h,s+l,u.width,u.height)}else o._fun.call(o,t,c,n,s)},t.__init__=function(){var e,i=0,n=0;for(e=o.createRenderSprite(69905,null),n=t.renders.length=4096,i=0;i<n;i++)t.renders[i]=e;t.renders[0]=o.createRenderSprite(0,null),function(e,i){for(var n=0,s=0;s<e.length;s++)n|=e[s],t.renders[n]=i}([1,512,4,2],new t(1,null)),t.renders[513]=o.createRenderSprite(513,null),t.renders[517]=new t(517,null)},t._initRenderFun=function(e,i,n,s){var r=e._renderType;(t.renders[r]=t._getTypeRender(r))._fun(e,i,n,s)},t._getTypeRender=function(t){for(var e=null,i=2048;i>1;)i&t&&(e=o.createRenderSprite(i,e)),i>>=1;return e},t.IMAGE=1,t.ALPHA=2,t.TRANSFORM=4,t.BLEND=8,t.CANVAS=16,t.FILTERS=32,t.MASK=64,t.CLIP=128,t.STYLE=256,t.GRAPHICS=512,t.CUSTOM=1024,t.CHILDS=2048,t.INIT=69905,t.renders=[],t.NORENDER=new t(0,null),t}(),k=function(){function t(){this._repaint=!1}s(t,"laya.resource.Context");var e=t.prototype;return e.replaceReset=function(){var e=0,i=0;i=t.replaceKeys.length;var n;for(e=0;e<i;e++)n=t.replaceKeys[e],this[t.newKeys[e]]=this[n]},e.replaceResotre=function(){this.__restore(),this.__reset()},e.setIsMainContext=function(){},e.drawTextures=function(t,e,i,n){$.drawCall+=e.length/2;for(var s=t.width,r=t.height,o=0,a=e.length;o<a;o+=2)this.drawTexture(t,e[o],e[o+1],s,r,i,n)},e.drawCanvas=function(t,e,i,n,s){$.drawCall++,this.drawImage(t.source,e,i,n,s)},e.fillRect=function(t,e,i,n,s){$.drawCall++,s&&(this.fillStyle=s),this.__fillRect(t,e,i,n)},e.fillText=function(t,e,i,n,s,r){$.drawCall++,arguments.length>3&&null!=n&&(this.font=n,this.fillStyle=s,this.textAlign=r,this.textBaseline="top"),this.__fillText(t,e,i)},e.fillBorderText=function(t,e,i,n,s,r,o,a){$.drawCall++,this.font=n,this.fillStyle=s,this.textBaseline="top",this.strokeStyle=r,this.lineWidth=o,this.textAlign=a,this.__strokeText(t,e,i),this.__fillText(t,e,i)},e.strokeText=function(t,e,i,n,s,r,o){$.drawCall++,arguments.length>3&&null!=n&&(this.font=n,this.strokeStyle=s,this.lineWidth=r,this.textAlign=o,this.textBaseline="top"),this.__strokeText(t,e,i)},e.transformByMatrix=function(t){this.transform(t.a,t.b,t.c,t.d,t.tx,t.ty)},e.setTransformByMatrix=function(t){this.setTransform(t.a,t.b,t.c,t.d,t.tx,t.ty)},e.clipRect=function(t,e,i,n){$.drawCall++,this.beginPath(),this.rect(t,e,i,n),this.clip()},e.drawTexture=function(t,e,i,n,s,r,o){$.drawCall++;var a=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImage(t.source,a[0]*h,a[1]*l,(a[2]-a[0])*h,(a[5]-a[3])*l,e+r,i+o,n,s)},e.drawTextureWithTransform=function(t,e,i,n,s,r,o,a,h){$.drawCall++;var l=t.uv,u=t.bitmap.width,c=t.bitmap.height;this.save(),1!=h&&(this.globalAlpha*=h),r?(this.transform(r.a,r.b,r.c,r.d,r.tx+o,r.ty+a),this.drawImage(t.source,l[0]*u,l[1]*c,(l[2]-l[0])*u,(l[5]-l[3])*c,e,i,n,s)):this.drawImage(t.source,l[0]*u,l[1]*c,(l[2]-l[0])*u,(l[5]-l[3])*c,e+o,i+a,n,s),this.restore()},e.drawTexture2=function(t,e,i,n,s,r,o,a){var h=a[0];if(h.loaded&&h.bitmap&&h.source){$.drawCall++;var l=1!==r;if(l){var u=this.globalAlpha;this.globalAlpha*=r}var c=h.uv,_=h.bitmap.width,d=h.bitmap.height;s?(this.save(),this.transform(s.a,s.b,s.c,s.d,s.tx+t,s.ty+e),this.drawImage(h.source,c[0]*_,c[1]*d,(c[2]-c[0])*_,(c[5]-c[3])*d,a[1]-i,a[2]-n,a[3],a[4]),this.restore()):this.drawImage(h.source,c[0]*_,c[1]*d,(c[2]-c[0])*_,(c[5]-c[3])*d,a[1]-i+t,a[2]-n+e,a[3],a[4]),l&&(this.globalAlpha=u)}},e.fillTexture=function(t,e,i,n,s,r,o,a){if(!a.pat){if(t.uv!=lt.DEF_UV){var h=new yt("2D");h.getContext("2d"),h.size(t.width,t.height),h.context.drawTexture(t,0,0,t.width,t.height,0,0),t=new lt(h)}a.pat=this.createPattern(t.bitmap.source,r)}var l=e,u=i,c=0,_=0;o&&(l+=o.x%t.width,u+=o.y%t.height,c-=o.x%t.width,_-=o.y%t.height),this.translate(l,u),this.fillRect(c,_,n,s,a.pat),this.translate(-l,-u)},e.drawTriangle=function(t,e,i,n,s,r,o,a){var h=t.bitmap,l=h.source,u=t.width,c=t.height,_=h.width,d=h.height,f=i[n]*_,p=i[s]*_,g=i[r]*_,m=i[n+1]*d,v=i[s+1]*d,y=i[r+1]*d,w=e[n],x=e[s],T=e[r],b=e[n+1],C=e[s+1],M=e[r+1];if(a){var S=(w+x+T)/3,P=(b+C+M)/3,E=w-S,I=b-P,A=Math.sqrt(E*E+I*I);w=S+E/A*(A+1),b=P+I/A*(A+1),I=C-P,x=S+(E=x-S)/(A=Math.sqrt(E*E+I*I))*(A+1),C=P+I/A*(A+1),I=M-P,T=S+(E=T-S)/(A=Math.sqrt(E*E+I*I))*(A+1),M=P+I/A*(A+1)}this.save(),o&&this.transform(o.a,o.b,o.c,o.d,o.tx,o.ty),this.beginPath(),this.moveTo(w,b),this.lineTo(x,C),this.lineTo(T,M),this.closePath(),this.clip();var L=1/(f*v+m*g+p*y-v*g-m*p-f*y),R=w*v+m*T+x*y-v*T-m*x-w*y,D=f*x+w*g+p*T-x*g-w*p-f*T,F=f*v*T+m*x*g+w*p*y-w*v*g-m*p*T-f*x*y,k=b*v+m*M+C*y-v*M-m*C-b*y,O=f*C+b*g+p*M-C*g-b*p-f*M,N=f*v*M+m*C*g+b*p*y-b*v*g-m*p*M-f*C*y;this.transform(R*L,k*L,D*L,O*L,F*L,N*L),this.drawImage(l,t.uv[0]*_,t.uv[1]*d,u,c,t.uv[0]*_,t.uv[1]*d,u,c),this.restore()},e.flush=function(){return 0},e.fillWords=function(t,e,i,n,s,r){n&&(this.font=n),s&&(this.fillStyle=s);this.textBaseline="top",this.textAlign="left";for(var o=0,a=t.length;o<a;o++){var h=t[o];if(this.__fillText(h.char,h.x+e,h.y+i),1===r){var l=h.height,u=.5*h.style.letterSpacing;u||(u=0),this.beginPath(),this.strokeStyle=s,this.lineWidth=1,this.moveTo(e+h.x-u+.5,i+h.y+l+.5),this.lineTo(e+h.x+h.width+u+.5,i+h.y+l+.5),this.stroke()}}},e.fillBorderWords=function(t,e,i,n,s,r,o){n&&(this.font=n),s&&(this.fillStyle=s),this.textBaseline="top",this.lineWidth=o,this.textAlign="left",this.strokeStyle=r;for(var a=0,h=t.length;a<h;a++){var l=t[a];this.__strokeText(l.char,l.x+e,l.y+i),this.__fillText(l.char,l.x+e,l.y+i)}},e.destroy=function(){this.canvas.width=this.canvas.height=0},e.clear=function(){this.clearRect(0,0,this._canvas.width,this._canvas.height),this._repaint=!1},e.drawCurves=function(t,e,i){this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var n=i[2];t+=i[0],e+=i[1],this.moveTo(t+n[0],e+n[1]);for(var s=2,r=n.length;s<r;)this.quadraticCurveTo(t+n[s++],e+n[s++],t+n[s++],e+n[s++]);this.stroke()},t.__init__=function(t){var e=laya.resource.Context.prototype;if(!(t=t||CanvasRenderingContext2D.prototype).inited){t.inited=!0,t.__fillText=t.fillText,t.__fillRect=t.fillRect,t.__strokeText=t.strokeText;["drawTextures","drawTriangle","fillWords","fillBorderWords","setIsMainContext","fillRect","strokeText","fillTexture","fillText","transformByMatrix","setTransformByMatrix","clipRect","drawTexture","drawTexture2","drawTextureWithTransform","flush","clear","destroy","drawCanvas","fillBorderText","drawCurves"].forEach(function(i){t[i]=e[i]})}},t.replaceCanvasGetSet=function(t,e){var i=Object.getOwnPropertyDescriptor(t,e);if(!i||!i.configurable)return!1;var n,s={};for(n in i)"set"!=n&&(s[n]=i[n]);var r=i.set;return s.set=function(t){r.call(this,t);var e=this.getContext("2d");e&&"__reset"in e&&e.__reset()},Object.defineProperty(t,e,s),!0},t.replaceGetSet=function(e,i){var n=Object.getOwnPropertyDescriptor(e,i);if(!n||!n.configurable)return!1;var s,r={};for(s in n)"set"!=s&&(r[s]=n[s]);var o=n.set,a="___"+i+"__";return t.newKeys.push(a),r.set=function(t){t!=this[a]&&(this[a]=t,o.call(this,t))},Object.defineProperty(e,i,r),!0},t._default=new t,t.newKeys=[],n(t,["replaceKeys",function(){return this.replaceKeys=["font","fillStyle","textBaseline"]}]),t}(),O=function(){function t(e){this._id=0,this._name=null,this._resources=null,this._memorySize=0,this._garbageCollectionRate=NaN,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=0,this._id=++t._uniqueIDCounter,this._name=e||"Content Manager",t._isResourceManagersSorted=!1,this._memorySize=0,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=536870912,this._garbageCollectionRate=.2,t._resourceManagers.push(this),this._resources=[]}s(t,"laya.resource.ResourceManager");var e=t.prototype;return i.imps(e,{"laya.resource.IDispose":!0}),e.getResourceByIndex=function(t){return this._resources[t]},e.getResourcesLength=function(){return this._resources.length},e.addResource=function(t){t.resourceManager&&t.resourceManager.removeResource(t);return-1===this._resources.indexOf(t)&&(t._resourceManager=this,this._resources.push(t),this.addSize(t.memorySize),!0)},e.removeResource=function(t){var e=this._resources.indexOf(t);return-1!==e&&(this._resources.splice(e,1),t._resourceManager=null,this._memorySize-=t.memorySize,!0)},e.unload=function(){for(var t=this._resources.slice(0,this._resources.length),e=0;e<t.length;e++){t[e].destroy()}t.length=0},e.dispose=function(){if(this===t._systemResourceManager)throw new Error("systemResourceManager不能被释放！");t._resourceManagers.splice(t._resourceManagers.indexOf(this),1),t._isResourceManagersSorted=!1;for(var e=this._resources.slice(0,this._resources.length),i=0;i<e.length;i++){var n=e[i];n.resourceManager.removeResource(n),n.destroy()}e.length=0},e.addSize=function(t){t&&(this.autoRelease&&t>0&&this._memorySize+t>this.autoReleaseMaxSize&&this.garbageCollection((1-this._garbageCollectionRate)*this.autoReleaseMaxSize),this._memorySize+=t)},e.garbageCollection=function(t){var e=this._resources;(e=e.slice()).sort(function(t,e){if(!t||!e)throw new Error("a或b不能为空！");return t.released&&e.released?0:t.released?1:e.released?-1:t._lastUseFrameCount-e._lastUseFrameCount});for(var i=$.loopCount,n=0,s=e.length;n<s;n++){var r=e[n];if(!(i-r._lastUseFrameCount>1))return void(this._memorySize>=t&&(this._isOverflow=!0));if(r.releaseResource(),this._memorySize<t)return void(this._isOverflow=!1)}},r(0,e,"id",function(){return this._id}),r(0,e,"name",function(){return this._name},function(e){!e&&""===e||this._name===e||(this._name=e,t._isResourceManagersSorted=!1)}),r(0,e,"memorySize",function(){return this._memorySize}),r(1,t,"systemResourceManager",function(){return t._systemResourceManager}),t.__init__=function(){t.currentResourceManager=t.systemResourceManager},t.getLoadedResourceManagerByIndex=function(e){return t._resourceManagers[e]},t.getLoadedResourceManagersCount=function(){return t._resourceManagers.length},t.recreateContentManagers=function(e){void 0===e&&(e=!1);for(var i=t.currentResourceManager,n=0;n<t._resourceManagers.length;n++){t.currentResourceManager=t._resourceManagers[n];for(var s=0;s<t.currentResourceManager._resources.length;s++)t.currentResourceManager._resources[s].releaseResource(e),t.currentResourceManager._resources[s].activeResource(e)}t.currentResourceManager=i},t.releaseContentManagers=function(e){void 0===e&&(e=!1);for(var i=t.currentResourceManager,n=0;n<t._resourceManagers.length;n++){t.currentResourceManager=t._resourceManagers[n];for(var s=0;s<t.currentResourceManager._resources.length;s++){var r=t.currentResourceManager._resources[s];!r.released&&r.releaseResource(e)}}t.currentResourceManager=i},t._uniqueIDCounter=0,t._isResourceManagersSorted=!1,t._resourceManagers=[],n(t,["_systemResourceManager",function(){return this._systemResourceManager=new t("System Resource Manager")},"currentResourceManager",function(){return this.currentResourceManager=t._systemResourceManager}]),t}(),N=(function(){function t(){}s(t,"laya.system.System"),t.changeDefinition=function(t,e){i[t]=e;var n=t+"=classObj";i._runScript(n)},t.__init__=function(){R.isConchApp&&(conch.disableConchResManager(),conch.disableConchAutoRestoreLostedDevice())}}(),function(){function n(){}return s(n,"laya.utils.Browser"),r(1,n,"pixelRatio",function(){return n.__init__(),n.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)")>-1?2:o.getPixelRatio()}),r(1,n,"height",function(){return n.__init__(),(i.stage&&i.stage.canvasRotation?n.clientWidth:n.clientHeight)*n.pixelRatio}),r(1,n,"clientWidth",function(){return n.__init__(),n.window.innerWidth||n.document.body.clientWidth}),r(1,n,"window",function(){return n.__init__(),n._window}),r(1,n,"clientHeight",function(){return n.__init__(),n.window.innerHeight||n.document.body.clientHeight||n.document.documentElement.clientHeight}),r(1,n,"width",function(){return n.__init__(),(i.stage&&i.stage.canvasRotation?n.clientHeight:n.clientWidth)*n.pixelRatio}),r(1,n,"container",function(){return n.__init__(),n._container||((n._container=n.createElement("div")).id="layaContainer",n.document.body.appendChild(n._container)),n._container},function(t){n._container=t}),r(1,n,"document",function(){return n.__init__(),n._document}),n.__init__=function(){if(!n._window){n._window=o.getWindow(),n._document=n.window.document,n._window.addEventListener("message",function(t){laya.utils.Browser._onMessage(t)},!1),n.document.__createElement=n.document.createElement,t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)};var i=t.document.body.style;i["-webkit-user-select"]="none",i["-webkit-tap-highlight-color"]="rgba(200,200,200,0)",n.userAgent=n.window.navigator.userAgent,n.onIOS=!!(n.u=n.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/),n.onMobile=n.u.indexOf("Mobile")>-1,n.onIPhone=n.u.indexOf("iPhone")>-1,n.onMac=n.u.indexOf("Mac OS X")>-1,n.onIPad=n.u.indexOf("iPad")>-1,n.onAndroid=n.u.indexOf("Android")>-1||n.u.indexOf("Adr")>-1,n.onWP=n.u.indexOf("Windows Phone")>-1,n.onQQBrowser=n.u.indexOf("QQBrowser")>-1,n.onMQQBrowser=n.u.indexOf("MQQBrowser")>-1||n.u.indexOf("Mobile")>-1&&n.u.indexOf("QQ")>-1,n.onIE=!!n.window.ActiveXObject||"ActiveXObject"in n.window,n.onWeiXin=n.u.indexOf("MicroMessenger")>-1,n.onPC=!n.onMobile,n.onSafari=n.u.indexOf("Safari")>-1,n.onFirefox=n.u.indexOf("Firefox")>-1,n.onEdge=n.u.indexOf("Edge")>-1,n.onMiniGame=n.u.indexOf("MiniGame")>-1,n.onLimixiu=n.u.indexOf("limixiu")>-1,n.httpProtocol="http:"==n.window.location.protocol,n.onMiniGame&&null==n.window.focus&&console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"),n.webAudioEnabled=!!(n.window.AudioContext||n.window.webkitAudioContext||n.window.mozAudioContext),n.soundType=n.webAudioEnabled?"WEBAUDIOSOUND":"AUDIOSOUND",nt=n.webAudioEnabled?st:et,n.webAudioEnabled&&st.initWebAudio(),et._initMusicAudio(),n.enableTouch="ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch,t.focus(),E._soundClass=nt,E._musicClass=et,R._mainCanvas=R._mainCanvas||yt.create("2D"),n.canvas||(n.canvas=yt.create("2D"),n.context=n.canvas.getContext("2d"))}},n._onMessage=function(t){if(t.data&&"size"==t.data.name){if(n.window.innerWidth=t.data.width,n.window.innerHeight=t.data.height,n.window.__innerHeight=t.data.clientHeight,!n.document.createEvent)return void console.warn("no document.createEvent");var e=n.document.createEvent("HTMLEvents");return e.initEvent("resize",!1,!1),void n.window.dispatchEvent(e)}},n.createElement=function(t){return n.__init__(),n.document.__createElement(t)},n.getElementById=function(t){return n.__init__(),n.document.getElementById(t)},n.removeElement=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},n.now=function(){return o.now()},n._window=null,n._document=null,n._container=null,n.userAgent=null,n.u=null,n.onIOS=!1,n.onMac=!1,n.onMobile=!1,n.onIPhone=!1,n.onIPad=!1,n.onAndroid=!1,n.onWP=!1,n.onQQBrowser=!1,n.onMQQBrowser=!1,n.onSafari=!1,n.onFirefox=!1,n.onEdge=!1,n.onIE=!1,n.onWeiXin=!1,n.onMiniGame=!1,n.onLimixiu=!1,n.onPC=!1,n.httpProtocol=!1,n.webAudioEnabled=!1,n.soundType=null,n.enableTouch=!1,n.canvas=null,n.context=null,n.__init$=function(){},n}()),B=function(){function t(t){this._xd_=!0,this._allocated_=8,this._pos_=0,this._length=0,t?(this._u8d_=new Uint8Array(t),this._d_=new DataView(this._u8d_.buffer),this._length=this._d_.byteLength):this.___resizeBuffer(this._allocated_)}s(t,"laya.utils.Byte");var e=t.prototype;return e.___resizeBuffer=function(t){try{var e=new Uint8Array(t);null!=this._u8d_&&(this._u8d_.length<=t?e.set(this._u8d_):e.set(this._u8d_.subarray(0,t))),this._u8d_=e,this._d_=new DataView(e.buffer)}catch(e){throw"___resizeBuffer err:"+t}},e.getString=function(){return this.rUTF(this.getUint16())},e.getFloat32Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Float32Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getUint8Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Uint8Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getInt16Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Int16Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},e.getFloat32=function(){if(this._pos_+4>this._length)throw"getFloat32 error - Out of bounds";var t=this._d_.getFloat32(this._pos_,this._xd_);return this._pos_+=4,t},e.getFloat64=function(){if(this._pos_+8>this._length)throw"getFloat64 error - Out of bounds";var t=this._d_.getFloat64(this._pos_,this._xd_);return this._pos_+=8,t},e.writeFloat32=function(t){this.ensureWrite(this._pos_+4),this._d_.setFloat32(this._pos_,t,this._xd_),this._pos_+=4},e.writeFloat64=function(t){this.ensureWrite(this._pos_+8),this._d_.setFloat64(this._pos_,t,this._xd_),this._pos_+=8},e.getInt32=function(){if(this._pos_+4>this._length)throw"getInt32 error - Out of bounds";var t=this._d_.getInt32(this._pos_,this._xd_);return this._pos_+=4,t},e.getUint32=function(){if(this._pos_+4>this._length)throw"getUint32 error - Out of bounds";var t=this._d_.getUint32(this._pos_,this._xd_);return this._pos_+=4,t},e.writeInt32=function(t){this.ensureWrite(this._pos_+4),this._d_.setInt32(this._pos_,t,this._xd_),this._pos_+=4},e.writeUint32=function(t){this.ensureWrite(this._pos_+4),this._d_.setUint32(this._pos_,t,this._xd_),this._pos_+=4},e.getInt16=function(){if(this._pos_+2>this._length)throw"getInt16 error - Out of bounds";var t=this._d_.getInt16(this._pos_,this._xd_);return this._pos_+=2,t},e.getUint16=function(){if(this._pos_+2>this._length)throw"getUint16 error - Out of bounds";var t=this._d_.getUint16(this._pos_,this._xd_);return this._pos_+=2,t},e.writeUint16=function(t){this.ensureWrite(this._pos_+2),this._d_.setUint16(this._pos_,t,this._xd_),this._pos_+=2},e.writeInt16=function(t){this.ensureWrite(this._pos_+2),this._d_.setInt16(this._pos_,t,this._xd_),this._pos_+=2},e.getUint8=function(){if(this._pos_+1>this._length)throw"getUint8 error - Out of bounds";return this._d_.getUint8(this._pos_++)},e.writeUint8=function(t){this.ensureWrite(this._pos_+1),this._d_.setUint8(this._pos_,t),this._pos_++},e._getUInt8=function(t){return this._d_.getUint8(t)},e._getUint16=function(t){return this._d_.getUint16(t,this._xd_)},e._getMatrix=function(){return new M(this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32())},e.rUTF=function(t){for(var e="",i=this._pos_+t,n=0,s=String.fromCharCode,r=this._u8d_;this._pos_<i;)(n=r[this._pos_++])<128?0!=n&&(e+=s(n)):e+=s(n<224?(63&n)<<6|127&r[this._pos_++]:n<240?(31&n)<<12|(127&r[this._pos_++])<<6|127&r[this._pos_++]:(15&n)<<18|(127&r[this._pos_++])<<12|r[this._pos_++]<<6&127|127&r[this._pos_++]),0;return e},e.getCustomString=function(t){for(var e="",i=0,n=0,s=String.fromCharCode,r=this._u8d_;t>0;)if((n=r[this._pos_])<128)e+=s(n),this._pos_++,t--;else for(i=n-128,this._pos_++,t-=i;i>0;)n=r[this._pos_++],e+=s(r[this._pos_++]<<8|n),i--;return e},e.clear=function(){this._pos_=0,this.length=0},e.__getBuffer=function(){return this._d_.buffer},e.writeUTFBytes=function(t){for(var e=0,i=(t+="").length;e<i;e++){var n=t.charCodeAt(e);n<=127?this.writeByte(n):n<=2047?(this.ensureWrite(this._pos_+2),this._u8d_.set([192|n>>6,128|63&n],this._pos_),this._pos_+=2):n<=65535?(this.ensureWrite(this._pos_+3),this._u8d_.set([224|n>>12,128|n>>6&63,128|63&n],this._pos_),this._pos_+=3):(this.ensureWrite(this._pos_+4),this._u8d_.set([240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n],this._pos_),this._pos_+=4)}},e.writeUTFString=function(t){var e=this.pos;this.writeUint16(1),this.writeUTFBytes(t);var i=this.pos-e-2;if(i>=65536)throw"writeUTFString byte len more than 65536";this._d_.setUint16(e,i,this._xd_)},e.readUTFString=function(){return this.readUTFBytes(this.getUint16())},e.getUTFString=function(){return this.readUTFString()},e.readUTFBytes=function(t){if(void 0===t&&(t=-1),0==t)return"";var e=this.bytesAvailable;if(t>e)throw"readUTFBytes error - Out of bounds";return t=t>0?t:e,this.rUTF(t)},e.getUTFBytes=function(t){return void 0===t&&(t=-1),this.readUTFBytes(t)},e.writeByte=function(t){this.ensureWrite(this._pos_+1),this._d_.setInt8(this._pos_,t),this._pos_+=1},e.readByte=function(){if(this._pos_+1>this._length)throw"readByte error - Out of bounds";return this._d_.getInt8(this._pos_++)},e.getByte=function(){return this.readByte()},e.ensureWrite=function(t){this._length<t&&(this._length=t),this._allocated_<t&&(this.length=t)},e.writeArrayBuffer=function(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),e<0||i<0)throw"writeArrayBuffer error - Out of bounds";0==i&&(i=t.byteLength-e),this.ensureWrite(this._pos_+i);var n=new Uint8Array(t);this._u8d_.set(n.subarray(e,e+i),this._pos_),this._pos_+=i},r(0,e,"buffer",function(){var t=this._d_.buffer;return t.byteLength==this.length?t:t.slice(0,this.length)}),r(0,e,"endian",function(){return this._xd_?"littleEndian":"bigEndian"},function(t){this._xd_="littleEndian"==t}),r(0,e,"length",function(){return this._length},function(t){this._allocated_<t?this.___resizeBuffer(this._allocated_=Math.floor(Math.max(t,2*this._allocated_))):this._allocated_>t&&this.___resizeBuffer(this._allocated_=t),this._length=t}),r(0,e,"pos",function(){return this._pos_},function(t){this._pos_=t}),r(0,e,"bytesAvailable",function(){return this._length-this._pos_}),t.getSystemEndian=function(){if(!t._sysEndian){var e=new ArrayBuffer(2);new DataView(e).setInt16(0,256,!0),t._sysEndian=256===new Int16Array(e)[0]?"littleEndian":"bigEndian"}return t._sysEndian},t.BIG_ENDIAN="bigEndian",t.LITTLE_ENDIAN="littleEndian",t._sysEndian=null,t}(),W=function(){function t(){}return s(t,"laya.utils.CacheManager"),t.regCacheByFunction=function(e,i){t.unRegCacheByFunction(e,i);var n;n={tryDispose:e,getCacheList:i},t._cacheList.push(n)},t.unRegCacheByFunction=function(e,i){var n=0,s=0;for(s=t._cacheList.length,n=0;n<s;n++)if(t._cacheList[n].tryDispose==e&&t._cacheList[n].getCacheList==i)return void t._cacheList.splice(n,1)},t.forceDispose=function(){var e=0,i=t._cacheList.length;for(e=0;e<i;e++)t._cacheList[e].tryDispose(!0)},t.beginCheck=function(e){void 0===e&&(e=15e3),i.timer.loop(e,null,t._checkLoop)},t.stopCheck=function(){i.timer.clear(null,t._checkLoop)},t._checkLoop=function(){var e=t._cacheList;if(!(e.length<1)){var i=N.now(),n=0,s=0;for(s=n=e.length;n>0&&(t._index++,t._index=t._index%s,e[t._index].tryDispose(!1),!(N.now()-i>t.loopTimeLimit));)n--}},t.loopTimeLimit=2,t._cacheList=[],t._index=0,t}(),G=function(){function t(){}return s(t,"laya.utils.ClassUtils"),t.regClass=function(e,i){t._classMap[e]=i},t.getRegClass=function(e){return t._classMap[e]},t.getInstance=function(e){var i=t.getClass(e);return i?new i:(console.warn("[error] Undefined class:",e),null)},t.createByJson=function(e,i,n,s,r){"string"==typeof e&&(e=JSON.parse(e));var o=e.props;if(!i&&!(i=r?r.runWith(e):t.getInstance(o.runtime||e.type)))return null;var a=e.child;if(a)for(var h=0,l=a.length;h<l;h++){var u=a[h];if("render"!==u.props.name&&"render"!==u.props.renderType||!i._$set_itemRender)if("Graphic"==u.type)t.addGraphicsToSprite(u,i);else if(t.isDrawType(u.type))t.addGraphicToSprite(u,i,!0);else{var c=t.createByJson(u,null,n,s,r);"Script"==u.type?c.hasOwnProperty("owner")?c.owner=i:c.hasOwnProperty("target")&&(c.target=i):"mask"==u.props.renderType?i.mask=c:i.addChild(c)}else i.itemRender=u}if(o)for(var _ in o){var d=o[_];"var"===_&&n?n[d]=i:d instanceof Array&&"function"==typeof i[_]?i[_].apply(i,d):i[_]=d}return s&&e.customProps&&s.runWith([i,e]),i.created&&i.created(),i},t.addGraphicsToSprite=function(e,i){var n;if((n=e.child)&&!(n.length<1)){var s;s=t._getGraphicsFromSprite(e,i);var r=0,o=0;e.props&&(r=t._getObjVar(e.props,"x",0),o=t._getObjVar(e.props,"y",0)),0!=r&&0!=o&&s.translate(r,o);var a=0,h=0;for(h=n.length,a=0;a<h;a++)t._addGraphicToGraphics(n[a],s);0!=r&&0!=o&&s.translate(-r,-o)}},t.addGraphicToSprite=function(e,i,n){void 0===n&&(n=!1);var s;s=n?t._getGraphicsFromSprite(e,i):i.graphics,t._addGraphicToGraphics(e,s)},t._getGraphicsFromSprite=function(t,e){var i;if(!t||!t.props)return e.graphics;var n;switch(n=t.props.renderType){case"hit":case"unHit":var s;e.hitArea||(e.hitArea=new H),(s=e.hitArea)[n]||(s[n]=new f),i=s[n]}return i||(i=e.graphics),i},t._getTransformData=function(e){var i;(e.hasOwnProperty("pivotX")||e.hasOwnProperty("pivotY"))&&(i=i||new M).translate(-t._getObjVar(e,"pivotX",0),-t._getObjVar(e,"pivotY",0));var n=t._getObjVar(e,"scaleX",1),s=t._getObjVar(e,"scaleY",1),r=t._getObjVar(e,"rotation",0);t._getObjVar(e,"skewX",0),t._getObjVar(e,"skewY",0);return 1==n&&1==s&&0==r||((i=i||new M).scale(n,s),i.rotate(.0174532922222222*r)),i},t._addGraphicToGraphics=function(e,i){var n;if(n=e.props){var s;if(s=t.DrawTypeDic[e.type]){var r;r=i;var o,a=t._getParams(n,s[1],s[2],s[3]);((o=t._tM)||1!=t._alpha)&&(r.save(),o&&r.transform(o),1!=t._alpha&&r.alpha(t._alpha)),r[s[0]].apply(r,a),(o||1!=t._alpha)&&r.restore()}}},t._adptLineData=function(t){return t[2]=parseFloat(t[0])+parseFloat(t[2]),t[3]=parseFloat(t[1])+parseFloat(t[3]),t},t._adptTextureData=function(t){return t[0]=ot.getRes(t[0]),t},t._adptLinesData=function(e){return e[2]=t._getPointListByStr(e[2]),e},t.isDrawType=function(e){return"Image"!=e&&t.DrawTypeDic.hasOwnProperty(e)},t._getParams=function(e,i,n,s){void 0===n&&(n=0);var r;(r=t._temParam).length=i.length;var o=0,a=0;for(a=i.length,o=0;o<a;o++)r[o]=t._getObjVar(e,i[o][0],i[o][1]);t._alpha=t._getObjVar(e,"alpha",1);var h;return(h=t._getTransformData(e))?(n||(n=0),h.translate(r[n],r[n+1]),r[n]=r[n+1]=0,t._tM=h):t._tM=null,s&&t[s]&&(r=t[s](r)),r},t._getPointListByStr=function(t){var e,i=0,n=0;for(n=(e=t.split(",")).length,i=0;i<n;i++)e[i]=parseFloat(e[i]);return e},t._getObjVar=function(t,e,i){return t.hasOwnProperty(e)?t[e]:i},t._temParam=[],t._classMap={Sprite:"laya.display.Sprite",Text:"laya.display.Text",Animation:"laya.display.Animation",Skeleton:"laya.ani.bone.Skeleton",Particle2D:"laya.particle.Particle2D",div:"laya.html.dom.HTMLDivElement",p:"laya.html.dom.HTMLElement",img:"laya.html.dom.HTMLImageElement",span:"laya.html.dom.HTMLElement",br:"laya.html.dom.HTMLBrElement",style:"laya.html.dom.HTMLStyleElement",font:"laya.html.dom.HTMLElement",a:"laya.html.dom.HTMLElement","#text":"laya.html.dom.HTMLElement"},t.getClass=function(e){var n=t._classMap[e]||e;return"string"==typeof n?i.__classmap[n]:n},t._tM=null,t._alpha=NaN,n(t,["DrawTypeDic",function(){return this.DrawTypeDic={Rect:["drawRect",[["x",0],["y",0],["width",0],["height",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Circle:["drawCircle",[["x",0],["y",0],["radius",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Pie:["drawPie",[["x",0],["y",0],["radius",0],["startAngle",0],["endAngle",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Image:["drawTexture",[["x",0],["y",0],["width",0],["height",0]]],Texture:["drawTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0]],1,"_adptTextureData"],FillTexture:["fillTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0],["repeat",null]],1,"_adptTextureData"],FillText:["fillText",[["text",""],["x",0],["y",0],["font",null],["color",null],["textAlign",null]],1],Line:["drawLine",[["x",0],["y",0],["toX",0],["toY",0],["lineColor",null],["lineWidth",0]],0,"_adptLineData"],Lines:["drawLines",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Curves:["drawCurves",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Poly:["drawPoly",[["x",0],["y",0],["points",""],["fillColor",null],["lineColor",null],["lineWidth",1]],0,"_adptLinesData"]}}]),t}(),U=function(){function t(e){if(this._color=[],"string"==typeof e){this.strColor=e,null===e&&(e="#000000"),"#"==e.charAt(0)&&(e=e.substr(1));var i=e.length;if(3==i||4==i){for(var n="",s=0;s<i;s++)n+=e[s]+e[s];e=n}var r=this.numColor=parseInt(e,16);if(8==e.length)return void(this._color=[parseInt(e.substr(0,2),16)/255,((16711680&r)>>16)/255,((65280&r)>>8)/255,(255&r)/255])}else r=this.numColor=e,this.strColor=K.toHexColor(r);this._color=[((16711680&r)>>16)/255,((65280&r)>>8)/255,(255&r)/255,1],this._color.__id=++t._COLODID}return s(t,"laya.utils.Color"),t._initDefault=function(){t._DEFAULT={};for(var e in t._COLOR_MAP)t._SAVE[e]=t._DEFAULT[e]=new t(t._COLOR_MAP[e]);return t._DEFAULT},t._initSaveMap=function(){t._SAVE_SIZE=0,t._SAVE={};for(var e in t._DEFAULT)t._SAVE[e]=t._DEFAULT[e]},t.create=function(e){var i=t._SAVE[e+""];return null!=i?i:(t._SAVE_SIZE<1e3||t._initSaveMap(),t._SAVE[e+""]=new t(e))},t._SAVE={},t._SAVE_SIZE=0,t._COLOR_MAP={white:"#FFFFFF",red:"#FF0000",green:"#00FF00",blue:"#0000FF",black:"#000000",yellow:"#FFFF00",gray:"#AAAAAA"},t._DEFAULT=t._initDefault(),t._COLODID=1,t}(),z=(function(){function t(){this._values=[],this._keys=[]}s(t,"laya.utils.Dictionary");var e=t.prototype;e.set=function(t,e){var i=this.indexOf(t);i>=0?this._values[i]=e:(this._keys.push(t),this._values.push(e))},e.indexOf=function(t){var e=this._keys.indexOf(t);return e>=0?e:(t="string"==typeof t?Number(t):"number"==typeof t?t.toString():t,this._keys.indexOf(t))},e.get=function(t){var e=this.indexOf(t);return e<0?null:this._values[e]},e.remove=function(t){var e=this.indexOf(t);return e>=0&&(this._keys.splice(e,1),this._values.splice(e,1),!0)},e.clear=function(){this._values.length=0,this._keys.length=0},r(0,e,"values",function(){return this._values}),r(0,e,"keys",function(){return this._keys})}(),function(){function t(){this.ratio=.92,this.maxOffset=60,this._dragging=!1,this._clickOnly=!0}s(t,"laya.utils.Dragging");var e=t.prototype;return e.start=function(t,e,n,s,r,o,a,h){void 0===h&&(h=.92),this.clearTimer(),this.target=t,this.area=e,this.hasInertia=n,this.elasticDistance=e?s:0,this.elasticBackTime=r,this.data=o,this._disableMouseEvent=a,this.ratio=h,1!=t.globalScaleX||1!=t.globalScaleY?this._parent=t.parent:this._parent=i.stage,this._clickOnly=!0,this._dragging=!0,this._elasticRateX=this._elasticRateY=1,this._lastX=this._parent.mouseX,this._lastY=this._parent.mouseY,i.stage.on("mouseup",this,this.onStageMouseUp),i.stage.on("mouseout",this,this.onStageMouseUp),i.timer.frameLoop(1,this,this.loop)},e.clearTimer=function(){i.timer.clear(this,this.loop),i.timer.clear(this,this.tweenMove),this._tween&&(this._tween.recover(),this._tween=null)},e.stop=function(){this._dragging&&(v.instance.disableMouseEvent=!1,i.stage.off("mouseup",this,this.onStageMouseUp),i.stage.off("mouseout",this,this.onStageMouseUp),this._dragging=!1,this.target&&this.area&&this.backToArea(),this.clear())},e.loop=function(){var t=this._parent.getMousePoint(),e=t.x,n=t.y,s=e-this._lastX,r=n-this._lastY;if(this._clickOnly){if(!(Math.abs(s*i.stage._canvasTransform.getScaleX())>1||Math.abs(r*i.stage._canvasTransform.getScaleY())>1))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this.target.event("dragstart",this.data),v.instance.disableMouseEvent=this._disableMouseEvent,this.target._set$P("$_MOUSEDOWN",!1)}else this._offsets.push(s,r);0===s&&0===r||(this._lastX=e,this._lastY=n,this.target.x+=s*this._elasticRateX,this.target.y+=r*this._elasticRateY,this.area&&this.checkArea(),this.target.event("dragmove",this.data))},e.checkArea=function(){if(this.elasticDistance<=0)this.backToArea();else{if(this.target.x<this.area.x)var t=this.area.x-this.target.x;else t=this.target.x>this.area.x+this.area.width?this.target.x-this.area.x-this.area.width:0;if(this._elasticRateX=Math.max(0,1-t/this.elasticDistance),this.target.y<this.area.y)var e=this.area.y-this.target.y;else e=this.target.y>this.area.y+this.area.height?this.target.y-this.area.y-this.area.height:0;this._elasticRateY=Math.max(0,1-e/this.elasticDistance)}},e.backToArea=function(){this.target.x=Math.min(Math.max(this.target.x,this.area.x),this.area.x+this.area.width),this.target.y=Math.min(Math.max(this.target.y,this.area.y),this.area.y+this.area.height)},e.onStageMouseUp=function(t){if(v.instance.disableMouseEvent=!1,i.stage.off("mouseup",this,this.onStageMouseUp),i.stage.off("mouseout",this,this.onStageMouseUp),i.timer.clear(this,this.loop),!this._clickOnly&&this.target)if(this.hasInertia){this._offsets.length<1&&this._offsets.push(this._parent.mouseX-this._lastX,this._parent.mouseY-this._lastY),this._offsetX=this._offsetY=0;for(var e=this._offsets.length,n=Math.min(e,6),s=this._offsets.length-n,r=e-1;r>s;r--)this._offsetY+=this._offsets[r--],this._offsetX+=this._offsets[r];this._offsetX=this._offsetX/n*2,this._offsetY=this._offsetY/n*2,Math.abs(this._offsetX)>this.maxOffset&&(this._offsetX=this._offsetX>0?this.maxOffset:-this.maxOffset),Math.abs(this._offsetY)>this.maxOffset&&(this._offsetY=this._offsetY>0?this.maxOffset:-this.maxOffset),i.timer.frameLoop(1,this,this.tweenMove)}else this.elasticDistance>0?this.checkElastic():this.clear()},e.checkElastic=function(){var t=NaN,e=NaN;if(this.target.x<this.area.x?t=this.area.x:this.target.x>this.area.x+this.area.width&&(t=this.area.x+this.area.width),this.target.y<this.area.y?e=this.area.y:this.target.y>this.area.y+this.area.height&&(e=this.area.y+this.area.height),isNaN(t)&&isNaN(e))this.clear();else{var i={};isNaN(t)||(i.x=t),isNaN(e)||(i.y=e),this._tween=j.to(this.target,i,this.elasticBackTime,Y.sineOut,l.create(this,this.clear),0,!1,!1)}},e.tweenMove=function(){this._offsetX*=this.ratio*this._elasticRateX,this._offsetY*=this.ratio*this._elasticRateY,this.target.x+=this._offsetX,this.target.y+=this._offsetY,this.area&&this.checkArea(),this.target.event("dragmove",this.data),(Math.abs(this._offsetX)<1&&Math.abs(this._offsetY)<1||this._elasticRateX<.5||this._elasticRateY<.5)&&(i.timer.clear(this,this.tweenMove),this.elasticDistance>0?this.checkElastic():this.clear())},e.clear=function(){if(this.target){this.clearTimer();var t=this.target;this.target=null,this._parent=null,t.event("dragend",this.data)}},t}()),Y=function(){function t(){}return s(t,"laya.utils.Ease"),t.linearNone=function(t,e,i,n){return i*t/n+e},t.linearIn=function(t,e,i,n){return i*t/n+e},t.linearInOut=function(t,e,i,n){return i*t/n+e},t.linearOut=function(t,e,i,n){return i*t/n+e},t.bounceIn=function(e,i,n,s){return n-t.bounceOut(s-e,0,n,s)+i},t.bounceInOut=function(e,i,n,s){return e<.5*s?.5*t.bounceIn(2*e,0,n,s)+i:.5*t.bounceOut(2*e-s,0,n,s)+.5*n+i},t.bounceOut=function(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},t.backIn=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+e},t.backInOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),(t/=.5*n)<1?.5*i*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},t.backOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+e},t.elasticIn=function(e,i,n,s,r,o){void 0===r&&(r=0),void 0===o&&(o=0);var a;return 0==e?i:1==(e/=s)?i+n:(o||(o=.3*s),!r||n>0&&r<n||n<0&&r<-n?(r=n,a=o/4):a=o/t.PI2*Math.asin(n/r),-r*Math.pow(2,10*(e-=1))*Math.sin((e*s-a)*t.PI2/o)+i)},t.elasticInOut=function(e,i,n,s,r,o){void 0===r&&(r=0),void 0===o&&(o=0);var a;return 0==e?i:2==(e/=.5*s)?i+n:(o||(o=s*(.3*1.5)),!r||n>0&&r<n||n<0&&r<-n?(r=n,a=o/4):a=o/t.PI2*Math.asin(n/r),e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*s-a)*t.PI2/o)*-.5+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*s-a)*t.PI2/o)*.5+n+i)},t.elasticOut=function(e,i,n,s,r,o){void 0===r&&(r=0),void 0===o&&(o=0);var a;return 0==e?i:1==(e/=s)?i+n:(o||(o=.3*s),!r||n>0&&r<n||n<0&&r<-n?(r=n,a=o/4):a=o/t.PI2*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*s-a)*t.PI2/o)+n+i)},t.strongIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},t.strongInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},t.strongOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},t.sineInOut=function(t,e,i,n){return.5*-i*(Math.cos(Math.PI*t/n)-1)+e},t.sineIn=function(e,i,n,s){return-n*Math.cos(e/s*t.HALF_PI)+n+i},t.sineOut=function(e,i,n,s){return n*Math.sin(e/s*t.HALF_PI)+i},t.quintIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},t.quintInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},t.quintOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},t.quartIn=function(t,e,i,n){return i*(t/=n)*t*t*t+e},t.quartInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t+e:.5*-i*((t-=2)*t*t*t-2)+e},t.quartOut=function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},t.cubicIn=function(t,e,i,n){return i*(t/=n)*t*t+e},t.cubicInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t+e:.5*i*((t-=2)*t*t+2)+e},t.cubicOut=function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},t.quadIn=function(t,e,i,n){return i*(t/=n)*t+e},t.quadInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t+e:.5*-i*(--t*(t-2)-1)+e},t.quadOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},t.expoIn=function(t,e,i,n){return 0==t?e:i*Math.pow(2,10*(t/n-1))+e-.001*i},t.expoInOut=function(t,e,i,n){return 0==t?e:t==n?e+i:(t/=.5*n)<1?.5*i*Math.pow(2,10*(t-1))+e:.5*i*(2-Math.pow(2,-10*--t))+e},t.expoOut=function(t,e,i,n){return t==n?e+i:i*(1-Math.pow(2,-10*t/n))+e},t.circIn=function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e},t.circInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*-i*(Math.sqrt(1-t*t)-1)+e:.5*i*(Math.sqrt(1-(t-=2)*t)+1)+e},t.circOut=function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e},t.HALF_PI=.5*Math.PI,t.PI2=2*Math.PI,t}(),H=function(){function t(){this._hit=null,this._unHit=null}s(t,"laya.utils.HitArea");var e=t.prototype;return e.isHit=function(e,i){return!!t.isHitGraphic(e,i,this.hit)&&!t.isHitGraphic(e,i,this.unHit)},e.contains=function(t,e){return this.isHit(t,e)},r(0,e,"hit",function(){return this._hit||(this._hit=new f),this._hit},function(t){this._hit=t}),r(0,e,"unHit",function(){return this._unHit||(this._unHit=new f),this._unHit},function(t){this._unHit=t}),t.isHitGraphic=function(e,i,n){if(!n)return!1;var s;if(!(s=n.cmds)&&n._one&&((s=t._cmds).length=1,s[0]=n._one),!s)return!1;var r=0,o=0;o=s.length;var a;for(r=0;r<o;r++)if(a=s[r]){var h=R._context;switch(a.callee){case h._translate:case 6:e-=a[0],i-=a[1]}if(t.isHitCmd(e,i,a))return!0}return!1},t.isHitCmd=function(e,i,n){if(!n)return!1;var s=R._context,r=!1;switch(n.callee){case s._drawRect:case 13:t._rec.setTo(n[0],n[1],n[2],n[3]),r=t._rec.contains(e,i);break;case s._drawCircle:case s._fillCircle:case 14:r=(e-=n[0])*e+(i-=n[1])*i<n[2]*n[2];break;case s._drawPoly:case 18:e-=n[0],i-=n[1],r=t.ptInPolygon(e,i,n[2])}return r},t.ptInPolygon=function(e,i,n){var s;(s=t._ptPoint).setTo(e,i);var r=0,o=NaN,a=NaN,h=NaN,l=NaN,u=0;u=n.length;for(var c=0;c<u;c+=2)if(o=n[c],a=n[c+1],h=n[(c+2)%u],l=n[(c+3)%u],a!=l&&!(s.y<Math.min(a,l)||s.y>=Math.max(a,l))){(s.y-a)*(h-o)/(l-a)+o>s.x&&r++}return r%2==1},t._cmds=[],n(t,["_rec",function(){return this._rec=new P},"_ptPoint",function(){return this._ptPoint=new S}]),t}(),X=(function(){function t(e,i,n,s){this.char=e,this.charNum=e.charCodeAt(0),this._x=this._y=0,this.width=i,this.height=n,this.style=s,this.isWord=!t._isWordRegExp.test(e)}s(t,"laya.utils.HTMLChar");var e=t.prototype;i.imps(e,{"laya.display.ILayout":!0}),e.setSprite=function(t){this._sprite=t},e.getSprite=function(){return this._sprite},e._isChar=function(){return!0},e._getCSSStyle=function(){return this.style},r(0,e,"width",function(){return this._w},function(t){this._w=t}),r(0,e,"x",function(){return this._x},function(t){this._sprite&&(this._sprite.x=t),this._x=t}),r(0,e,"y",function(){return this._y},function(t){this._sprite&&(this._sprite.y=t),this._y=t}),r(0,e,"height",function(){return this._h},function(t){this._h=t}),t._isWordRegExp=new RegExp("[\\w.]","")}(),function(){function t(){}s(t,"laya.utils.Log"),t.enable=function(){t._logdiv||(t._logdiv=N.window.document.createElement("div"),N.window.document.body.appendChild(t._logdiv),t._logdiv.style.cssText="pointer-events:none;border:white;overflow:hidden;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;")},t.toggle=function(){var e=t._logdiv.style;"1px"==e.width?e.width=e.height="50%":e.width=e.height="1px"},t.print=function(e){t._logdiv&&(t._count>=t.maxCount&&t.clear(),t._count++,t._logdiv.innerText+=e+"\n",t._logdiv.scrollTop=t._logdiv.scrollHeight)},t.clear=function(){t._logdiv.innerText="",t._count=0},t._logdiv=null,t._count=0,t.maxCount=20}(),function(){function t(){}s(t,"laya.utils.Mouse"),r(1,t,"cursor",function(){return t._style.cursor},function(e){t._style.cursor=e}),t.hide=function(){"none"!=t.cursor&&(t._preCursor=t.cursor,t.cursor="none")},t.show=function(){"none"==t.cursor&&(t.cursor=t._preCursor?t._preCursor:"auto")},t._preCursor=null,n(t,["_style",function(){return this._style=N.document.body.style}])}(),function(){function t(){}return s(t,"laya.utils.Pool"),t.getPoolBySign=function(e){return t._poolDic[e]||(t._poolDic[e]=[])},t.clearBySign=function(e){t._poolDic[e]&&(t._poolDic[e].length=0)},t.recover=function(e,i){i.__InPool||(i.__InPool=!0,t.getPoolBySign(e).push(i))},t.getItemByClass=function(e,i){var n=t.getPoolBySign(e),s=n.length?n.pop():new i;return s.__InPool=!1,s},t.getItemByCreateFun=function(e,i){var n=t.getPoolBySign(e),s=n.length?n.pop():i();return s.__InPool=!1,s},t.getItem=function(e){var i=t.getPoolBySign(e),n=i.length?i.pop():null;return n&&(n.__InPool=!1),n},t._poolDic={},t.InPoolSign="__InPool",t}()),$=(function(){function t(){this.sign=null,this.maxCount=1e3}s(t,"laya.utils.PoolCache");var e=t.prototype;e.getCacheList=function(){return X.getPoolBySign(this.sign)},e.tryDispose=function(t){var e;(e=X.getPoolBySign(this.sign)).length>this.maxCount&&e.splice(this.maxCount,e.length-this.maxCount)},t.addPoolCacheManager=function(e,i){void 0===i&&(i=100);var n;(n=new t).sign=e,n.maxCount=i,W.regCacheByFunction(K.bind(n.tryDispose,n),K.bind(n.getCacheList,n))}}(),function(){function t(){}return s(t,"laya.utils.Stat"),r(1,t,"onclick",null,function(e){t._sp&&t._sp.on("click",t._sp,e),t._canvas&&(t._canvas.source.onclick=e,t._canvas.source.style.pointerEvents="")}),t.show=function(e,i){void 0===e&&(e=0),void 0===i&&(i=0),!R.isConchApp||R.isConchWebGL?(R.isConchWebGL||N.onMiniGame||N.onLimixiu||(t._useCanvas=!0),t._show=!0,t._fpsData.length=60,t._view[0]={title:"FPS(Canvas)",value:"_fpsStr",color:"yellow",units:"int"},t._view[1]={title:"Sprite",value:"_spriteStr",color:"white",units:"int"},t._view[2]={title:"DrawCall",value:"drawCall",color:"white",units:"int"},t._view[3]={title:"CurMem",value:"currentMemorySize",color:"yellow",units:"M"},R.isWebGL?(t._view[4]={title:"Shader",value:"shaderCall",color:"white",units:"int"},R.is3DMode?(t._view[0].title="FPS(3D)",t._view[5]={title:"TriFaces",value:"trianglesFaces",color:"white",units:"int"},t._view[6]={title:"treeNodeColl",value:"treeNodeCollision",color:"white",units:"int"},t._view[7]={title:"treeSpriteColl",value:"treeSpriteCollision",color:"white",units:"int"}):(t._view[0].title="FPS(WebGL)",t._view[5]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"})):t._view[4]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"},t._useCanvas?t.createUIPre(e,i):t.createUI(e,i),t.enable()):N.window.conch.showFPS&&N.window.conch.showFPS(e,i)},t.createUIPre=function(e,i){var n=N.pixelRatio;t._width=130*n,t._vx=75*n,t._height=n*(12*t._view.length+3*n)+4,t._fontSize=12*n;for(var s=0;s<t._view.length;s++)t._view[s].x=4,t._view[s].y=s*t._fontSize+2*n;t._canvas||((t._canvas=new yt("2D")).size(t._width,t._height),(t._ctx=t._canvas.getContext("2d")).textBaseline="top",t._ctx.font=t._fontSize+"px Sans-serif",t._canvas.source.style.cssText="pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:"+e+"px;top:"+i+"px;width:"+t._width/n+"px;height:"+t._height/n+"px;"),t._first=!0,t.loop(),t._first=!1,N.container.appendChild(t._canvas.source)},t.createUI=function(e,i){var n=t._sp,s=N.pixelRatio;n||(n=new ct,(t._leftText=new gt).pos(5,5),t._leftText.color="#ffffff",n.addChild(t._leftText),(t._txt=new gt).pos(80*s,5),t._txt.color="#ffffff",n.addChild(t._txt),t._sp=n),n.pos(e,i);for(var r="",o=0;o<t._view.length;o++){r+=t._view[o].title+"\n"}t._leftText.text=r;var a=138*s,h=s*(12*t._view.length+3*s)+4;t._txt.fontSize=t._fontSize*s,t._leftText.fontSize=t._fontSize*s,n.size(a,h),n.graphics.clear(),n.graphics.setAlpha(.5),n.graphics.drawRect(0,0,a,h,"#999999"),n.graphics.setAlpha(1),t.loop()},t.enable=function(){i.timer.frameLoop(1,t,t.loop)},t.hide=function(){t._show=!1,i.timer.clear(t,t.loop),t._canvas&&N.removeElement(t._canvas.source)},t.clear=function(){t.trianglesFaces=t.drawCall=t.shaderCall=t.spriteCount=t.spriteRenderUseCacheCount=t.treeNodeCollision=t.treeSpriteCollision=t.canvasNormal=t.canvasBitmap=t.canvasReCache=0},t.loop=function(){t._count++;var e=N.now();if(!(e-t._timer<1e3)){var i=t._count;if(t.FPS=Math.round(1e3*i/(e-t._timer)),t._show){t.trianglesFaces=Math.round(t.trianglesFaces/i),t._useCanvas?(t.drawCall=Math.round(t.drawCall/i)-2,t.shaderCall=Math.round(t.shaderCall/i),t.spriteCount=Math.round(t.spriteCount/i)-1):(t.drawCall=Math.round(t.drawCall/i)-2,t.shaderCall=Math.round(t.shaderCall/i)-4,t.spriteCount=Math.round(t.spriteCount/i)-4),t.spriteRenderUseCacheCount=Math.round(t.spriteRenderUseCacheCount/i),t.canvasNormal=Math.round(t.canvasNormal/i),t.canvasBitmap=Math.round(t.canvasBitmap/i),t.canvasReCache=Math.ceil(t.canvasReCache/i),t.treeNodeCollision=Math.round(t.treeNodeCollision/i),t.treeSpriteCollision=Math.round(t.treeSpriteCollision/i);var n=t.FPS>0?Math.floor(1e3/t.FPS).toString():" ";t._fpsStr=t.FPS+(t.renderSlow?" slow":"")+" "+n,t._spriteStr=t.spriteCount+(t.spriteRenderUseCacheCount?"/"+t.spriteRenderUseCacheCount:""),t._canvasStr=t.canvasReCache+"/"+t.canvasNormal+"/"+t.canvasBitmap,t.currentMemorySize=O.systemResourceManager.memorySize,t._useCanvas?t.renderInfoPre():t.renderInfo(),t.clear()}t._count=0,t._timer=e}},t.renderInfoPre=function(){if(t._canvas){var e=t._ctx;e.clearRect(t._first?0:t._vx,0,t._width,t._height);for(var i=0;i<t._view.length;i++){var n=t._view[i];t._first&&(e.fillStyle="white",e.fillText(n.title,n.x,n.y,null,null,null)),e.fillStyle=n.color;var s=t[n.value];"M"==n.units&&(s=Math.floor(s/1048576*100)/100+" M"),e.fillText(s+"",n.x+t._vx,n.y,null,null,null)}}},t.renderInfo=function(){for(var e="",i=0;i<t._view.length;i++){var n=t._view[i],s=t[n.value];"M"==n.units&&(s=Math.floor(s/1048576*100)/100+" M"),"K"==n.units&&(s=Math.floor(s/1024*100)/100+" K"),e+=s+"\n"}t._txt.text=e},t.FPS=0,t.loopCount=0,t.shaderCall=0,t.drawCall=0,t.trianglesFaces=0,t.spriteCount=0,t.spriteRenderUseCacheCount=0,t.treeNodeCollision=0,t.treeSpriteCollision=0,t.canvasNormal=0,t.canvasBitmap=0,t.canvasReCache=0,t.renderSlow=!1,t.currentMemorySize=0,t._fpsStr=null,t._canvasStr=null,t._spriteStr=null,t._fpsData=[],t._timer=0,t._count=0,t._view=[],t._fontSize=12,t._txt=null,t._leftText=null,t._sp=null,t._show=!1,t._useCanvas=!1,t._canvas=null,t._ctx=null,t._first=!1,t._vx=NaN,t._width=0,t._height=100,t}()),V=(function(){function t(){this._strsToID={},this._idToStrs=[],this._length=0}s(t,"laya.utils.StringKey");var e=t.prototype;e.add=function(t){var e=this._strsToID[t];return null!=e?e:(this._idToStrs[this._length]=t,this._strsToID[t]=this._length++)},e.getID=function(t){var e=this._strsToID[t];return null==e?-1:e},e.getName=function(t){var e=this._idToStrs[t];return null==e?void 0:e}}(),function(){function t(){this._delta=0,this.scale=1,this.currFrame=0,this._mid=1,this._map=[],this._laters=[],this._handlers=[],this._temp=[],this._count=0,this.currTimer=this._now(),this._lastTimer=this._now(),this._init()}var e;s(t,"laya.utils.Timer");var n=t.prototype;return n._init=function(){i.timer&&i.timer.frameLoop(1,this,this._update)},n._now=function(){return Date.now()},n._update=function(){if(this.scale<=0)this._lastTimer=this._now();else{var t=this.currFrame=this.currFrame+this.scale,e=this._now();this._delta=(e-this._lastTimer)*this.scale;var i=this.currTimer=this.currTimer+this._delta;this._lastTimer=e;var n=this._handlers;for(this._count=0,o=0,a=n.length;o<a;o++)if(null!==(h=n[o]).method){var s=h.userFrame?t:i;if(s>=h.exeTime)if(h.repeat)if(h.jumpFrame)for(;s>=h.exeTime;)h.exeTime+=h.delay,h.run(!1);else h.exeTime+=h.delay,h.run(!1),s>h.exeTime&&(h.exeTime+=Math.ceil((s-h.exeTime)/h.delay)*h.delay);else h.run(!0)}else this._count++;(this._count>30||t%200==0)&&this._clearHandlers();for(var r=this._laters,o=0,a=r.length-1;o<=a;o++){var h=r[o];null!==h.method&&(this._map[h.key]=null,h.run(!1)),this._recoverHandler(h),o===a&&(a=r.length-1)}r.length=0}},n._clearHandlers=function(){for(var t=this._handlers,e=0,i=t.length;e<i;e++){var n=t[e];null!==n.method?this._temp.push(n):this._recoverHandler(n)}this._handlers=this._temp,this._temp=t,this._temp.length=0},n._recoverHandler=function(e){this._map[e.key]==e&&(this._map[e.key]=null),e.clear(),t._pool.push(e)},n._create=function(i,n,s,r,o,a,h){if(!s)return o.apply(r,a),null;if(h){var l=this._getHandler(r,o);if(l)return l.repeat=n,l.userFrame=i,l.delay=s,l.caller=r,l.method=o,l.args=a,l.exeTime=s+(i?this.currFrame:this.currTimer+this._now()-this._lastTimer),l}return l=t._pool.length>0?t._pool.pop():new e,l.repeat=n,l.userFrame=i,l.delay=s,l.caller=r,l.method=o,l.args=a,l.exeTime=s+(i?this.currFrame:this.currTimer+this._now()-this._lastTimer)+1,this._indexHandler(l),this._handlers.push(l),l},n._indexHandler=function(t){var e=t.caller,i=t.method,n=e?e.$_GID||(e.$_GID=K.getGID()):0,s=i.$_TID||(i.$_TID=1e5*this._mid++);t.key=n+s,this._map[t.key]=t},n.once=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!1,!1,t,e,i,n,s)},n.loop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1);var o=this._create(!1,!0,t,e,i,n,s);o&&(o.jumpFrame=r)},n.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!1,t,e,i,n,s)},n.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!0,t,e,i,n,s)},n.toString=function(){return"callLater:"+this._laters.length+" handlers:"+this._handlers.length+" pool:"+t._pool.length},n.clear=function(t,e){var i=this._getHandler(t,e);i&&(this._map[i.key]=null,i.key=0,i.clear())},n.clearAll=function(t){if(t)for(var e=0,i=this._handlers.length;e<i;e++){var n=this._handlers[e];n.caller===t&&(this._map[n.key]=null,n.key=0,n.clear())}},n._getHandler=function(t,e){var i=t?t.$_GID||(t.$_GID=K.getGID()):0,n=e.$_TID||(e.$_TID=1e5*this._mid++);return this._map[i+n]},n.callLater=function(i,n,s){if(null==this._getHandler(i,n)){if(t._pool.length)var r=t._pool.pop();else r=new e;r.caller=i,r.method=n,r.args=s,this._indexHandler(r),this._laters.push(r)}},n.runCallLater=function(t,e){var i=this._getHandler(t,e);i&&null!=i.method&&(this._map[i.key]=null,i.run(!0))},n.runTimer=function(t,e){this.runCallLater(t,e)},r(0,n,"delta",function(){return this._delta}),t._pool=[],t.__init$=function(){e=function(){function t(){this.key=0,this.repeat=!1,this.delay=0,this.userFrame=!1,this.exeTime=0,this.caller=null,this.method=null,this.args=null,this.jumpFrame=!1}s(t,"");var e=t.prototype;return e.clear=function(){this.caller=null,this.method=null,this.args=null},e.run=function(t){var e=this.caller;if(e&&e.destroyed)return this.clear();var i=this.method,n=this.args;t&&this.clear(),null!=i&&(n?i.apply(e,n):i.call(e))},t}()},t}()),j=function(){function t(){this.gid=0}s(t,"laya.utils.Tween");var e=t.prototype;return e.to=function(t,e,i,n,s,r,o){return void 0===r&&(r=0),void 0===o&&(o=!1),this._create(t,e,i,n,s,r,o,!0,!1,!0)},e.from=function(t,e,i,n,s,r,o){return void 0===r&&(r=0),void 0===o&&(o=!1),this._create(t,e,i,n,s,r,o,!1,!1,!0)},e._create=function(e,n,s,r,o,a,h,l,u,c){if(!e)throw new Error("Tween:target is null");this._target=e,this._duration=s,this._ease=r||n.ease||t.easeNone,this._complete=o||n.complete,this._delay=a,this._props=[],this._usedTimer=0,this._startTimer=N.now(),this._usedPool=u,this._delayParam=null,this.update=n.update;var _=e.$_GID||(e.$_GID=K.getGID());return t.tweenMap[_]?(h&&t.clearTween(e),t.tweenMap[_].push(this)):t.tweenMap[_]=[this],c?a<=0?this.firstStart(e,n,l):(this._delayParam=[e,n,l],i.scaleTimer.once(a,this,this.firstStart,this._delayParam)):this._initProps(e,n,l),this},e.firstStart=function(t,e,i){this._delayParam=null,t.destroyed?this.clear():(this._initProps(t,e,i),this._beginLoop())},e._initProps=function(t,e,i){for(var n in e)if("number"==typeof t[n]){var s=i?t[n]:e[n],r=i?e[n]:t[n];this._props.push([n,s,r-s]),i||(t[n]=s)}},e._beginLoop=function(){i.scaleTimer.frameLoop(1,this,this._doEase)},e._doEase=function(){this._updateEase(N.now())},e._updateEase=function(e){var i=this._target;if(i){if(i.destroyed)return t.clearTween(i);var n=this._usedTimer=e-this._startTimer-this._delay;if(!(n<0)){if(n>=this._duration)return this.complete();for(var s=n>0?this._ease(n,0,1,this._duration):0,r=this._props,o=0,a=r.length;o<a;o++){var h=r[o];i[h[0]]=h[1]+s*h[2]}this.update&&this.update.run()}}},e.complete=function(){if(this._target){i.scaleTimer.runTimer(this,this.firstStart);for(var t=this._target,e=this._props,n=this._complete,s=0,r=e.length;s<r;s++){var o=e[s];t[o[0]]=o[1]+o[2]}this.update&&this.update.run(),this.clear(),n&&n.run()}},e.pause=function(){i.scaleTimer.clear(this,this._beginLoop),i.scaleTimer.clear(this,this._doEase),i.scaleTimer.clear(this,this.firstStart);var t=NaN;(t=N.now()-this._startTimer-this._delay)<0&&(this._usedTimer=t)},e.setStartTime=function(t){this._startTimer=t},e.clear=function(){this._target&&(this._remove(),this._clear())},e._clear=function(){this.pause(),i.scaleTimer.clear(this,this.firstStart),this._complete=null,this._target=null,this._ease=null,this._props=null,this._delayParam=null,this._usedPool&&(this.update=null,X.recover("tween",this))},e.recover=function(){this._usedPool=!0,this._clear()},e._remove=function(){var e=t.tweenMap[this._target.$_GID];if(e)for(var i=0,n=e.length;i<n;i++)if(e[i]===this){e.splice(i,1);break}},e.restart=function(){if(this.pause(),this._usedTimer=0,this._startTimer=N.now(),this._delayParam)i.scaleTimer.once(this._delay,this,this.firstStart,this._delayParam);else{for(var t=this._props,e=0,n=t.length;e<n;e++){var s=t[e];this._target[s[0]]=s[1]}i.scaleTimer.once(this._delay,this,this._beginLoop)}},e.resume=function(){this._usedTimer>=this._duration||(this._startTimer=N.now()-this._usedTimer-this._delay,this._delayParam?this._usedTimer<0?i.scaleTimer.once(-this._usedTimer,this,this.firstStart,this._delayParam):this.firstStart.apply(this,this._delayParam):this._beginLoop())},r(0,e,"progress",null,function(t){var e=t*this._duration;this._startTimer=N.now()-this._delay-e}),t.to=function(e,i,n,s,r,o,a,h){return void 0===o&&(o=0),void 0===a&&(a=!1),void 0===h&&(h=!0),X.getItemByClass("tween",t)._create(e,i,n,s,r,o,a,!0,h,!0)},t.from=function(e,i,n,s,r,o,a,h){return void 0===o&&(o=0),void 0===a&&(a=!1),void 0===h&&(h=!0),X.getItemByClass("tween",t)._create(e,i,n,s,r,o,a,!1,h,!0)},t.clearAll=function(e){if(e&&e.$_GID){var i=t.tweenMap[e.$_GID];if(i){for(var n=0,s=i.length;n<s;n++)i[n]._clear();i.length=0}}},t.clear=function(t){t.clear()},t.clearTween=function(e){t.clearAll(e)},t.easeNone=function(t,e,i,n){return i*t/n+e},t.tweenMap={},t}(),K=function(){function t(){}return s(t,"laya.utils.Utils"),t.toRadian=function(e){return e*t._pi2},t.toAngle=function(e){return e*t._pi},t.toHexColor=function(t){if(t<0||isNaN(t))return null;for(var e=t.toString(16);e.length<6;)e="0"+e;return"#"+e},t.getGID=function(){return t._gid++},t.concatArray=function(t,e){if(!e)return t;if(!t)return e;var i=0,n=e.length;for(i=0;i<n;i++)t.push(e[i]);return t},t.clearArray=function(t){return t?(t.length=0,t):t},t.copyArray=function(t,e){if(t||(t=[]),!e)return t;t.length=e.length;var i=0,n=e.length;for(i=0;i<n;i++)t[i]=e[i];return t},t.getGlobalRecByPoints=function(t,e,i,n,s){var r;r=new S(e,i),r=t.localToGlobal(r);var o;return o=new S(n,s),o=t.localToGlobal(o),P._getWrapRec([r.x,r.y,o.x,o.y])},t.getGlobalPosAndScale=function(e){return t.getGlobalRecByPoints(e,0,0,1,1)},t.bind=function(t,e){return t.bind(e)},t.measureText=function(t,e){return o.measureText(t,e)},t.updateOrder=function(t){if(!t||t.length<2)return!1;for(var e,i=1,n=0,s=t.length,r=NaN;i<s;){for(e=t[n=i],r=t[n]._zOrder;--n>-1&&t[n]._zOrder>r;)t[n+1]=t[n];t[n+1]=e,i++}var o=e.parent.conchModel;if(o)if(null!=o.updateZOrder)o.updateZOrder();else{for(i=0;i<s;i++)o.removeChild(t[i].conchModel);for(i=0;i<s;i++)o.addChildAt(t[i].conchModel,i)}return!0},t.transPointList=function(t,e,i){var n=0,s=t.length;for(n=0;n<s;n+=2)t[n]+=e,t[n+1]+=i},t.parseInt=function(t,e){void 0===e&&(e=0);var i=N.window.parseInt(t,e);return isNaN(i)?0:i},t.getFileExtension=function(e){t._extReg.lastIndex=e.lastIndexOf(".");var i=t._extReg.exec(e);return i&&i.length>1?i[1].toLowerCase():null},t.getTransformRelativeToWindow=function(t,e,n){var s=i.stage,r=laya.utils.Utils.getGlobalPosAndScale(t),o=s._canvasTransform.clone(),a=o.tx,h=o.ty;o.rotate(-Math.PI/180*i.stage.canvasDegree),o.scale(i.stage.clientScaleX,i.stage.clientScaleY);var l=i.stage.canvasDegree%180!=0,u=NaN,c=NaN;l?(u=n+r.y,c=e+r.x,u*=o.d,c*=o.a,90==i.stage.canvasDegree?(u=a-u,c+=h):(u+=a,c=h-c)):(u=e+r.x,c=n+r.y,u*=o.a,c*=o.d,u+=a,c+=h);var _=NaN,d=NaN;return l?(_=o.d*r.height,d=o.a*r.width):(_=o.a*r.width,d=o.d*r.height),{x:u,y:c,scaleX:_,scaleY:d}},t.fitDOMElementInArea=function(e,n,s,r,o,a){e._fitLayaAirInitialized||(e._fitLayaAirInitialized=!0,e.style.transformOrigin=e.style.webKittransformOrigin="left top",e.style.position="absolute");var h=t.getTransformRelativeToWindow(n,s,r);e.style.transform=e.style.webkitTransform="scale("+h.scaleX+","+h.scaleY+") rotate("+i.stage.canvasDegree+"deg)",e.style.width=o+"px",e.style.height=a+"px",e.style.left=h.x+"px",e.style.top=h.y+"px"},t.isOkTextureList=function(t){if(!t)return!1;var e,i=0,n=t.length;for(i=0;i<n;i++)if(!(e=t[i])||!e.source)return!1;return!0},t.isOKCmdList=function(t){if(!t)return!1;var e,i,n=0,s=t.length,r=R._context;for(n=0;n<s;n++)switch((e=t[n]).callee){case r._drawTexture:case r._fillTexture:case r._drawTextureWithTransform:if(!(i=e[0])||!i.source)return!1}return!0},t._gid=1,t._pi=180/Math.PI,t._pi2=Math.PI/180,t._extReg=/\.(\w+)\??/g,t.parseXMLFromString=function(t){var e;if(t=t.replace(/>\s+</g,"><"),(e=(new DOMParser).parseFromString(t,"text/xml")).firstChild.textContent.indexOf("This page contains the following errors")>-1)throw new Error(e.firstChild.firstChild.textContent);return e},t}(),q=function(){function t(){this.useDic={},this.shapeDic={},this.shapeLineDic={},this._id=0,this._checkKey=!1,this._freeIdArray=[],R.isWebGL&&W.regCacheByFunction(K.bind(this.startDispose,this),K.bind(this.getCacheList,this))}s(t,"laya.utils.VectorGraphManager");var e=t.prototype;return e.getId=function(){return this._id++},e.addShape=function(t,e){this.shapeDic[t]=e,this.useDic[t]||(this.useDic[t]=!0)},e.addLine=function(t,e){this.shapeLineDic[t]=e,this.shapeLineDic[t]||(this.shapeLineDic[t]=!0)},e.getShape=function(t){this._checkKey&&null!=this.useDic[t]&&(this.useDic[t]=!0)},e.deleteShape=function(t){this.shapeDic[t]&&(this.shapeDic[t]=null,delete this.shapeDic[t]),this.shapeLineDic[t]&&(this.shapeLineDic[t]=null,delete this.shapeLineDic[t]),null!=this.useDic[t]&&delete this.useDic[t]},e.getCacheList=function(){var t,e=[];for(t in this.shapeDic)e.push(this.shapeDic[t]);for(t in this.shapeLineDic)e.push(this.shapeLineDic[t]);return e},e.startDispose=function(t){var e;for(e in this.useDic)this.useDic[e]=!1;this._checkKey=!0},e.endDispose=function(){if(this._checkKey){var t;for(t in this.useDic)this.useDic[t]||this.deleteShape(t);this._checkKey=!1}},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),Q=function(){function t(){this._obj=null,this._obj=t.supportWeakMap?new N.window.WeakMap:{},t.supportWeakMap||t._maps.push(this)}s(t,"laya.utils.WeakObject");var e=t.prototype;return e.set=function(e,i){if(null!=e)if(t.supportWeakMap){var n=e;"string"!=typeof e&&"number"!=typeof e||(n=t._keys[e])||(n=t._keys[e]={k:e}),this._obj.set(n,i)}else"string"==typeof e||"number"==typeof e?this._obj[e]=i:(e.$_GID||(e.$_GID=K.getGID()),this._obj[e.$_GID]=i)},e.get=function(e){if(null==e)return null;if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;return i?this._obj.get(i):null}return"string"==typeof e||"number"==typeof e?this._obj[e]:this._obj[e.$_GID]},e.del=function(e){if(null!=e)if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;if(!i)return;this._obj.delete(i)}else"string"==typeof e||"number"==typeof e?delete this._obj[e]:delete this._obj[this._obj.$_GID]},e.has=function(e){if(null==e)return!1;if(t.supportWeakMap){var i="string"==typeof e||"number"==typeof e?t._keys[e]:e;return this._obj.has(i)}return"string"==typeof e||"number"==typeof e?null!=this._obj[e]:null!=this._obj[this._obj.$_GID]},t.__init__=function(){(t.supportWeakMap=null!=N.window.WeakMap)||i.timer.loop(t.delInterval,null,t.clearCache)},t.clearCache=function(){for(var e=0,i=t._maps.length;e<i;e++){t._maps[e]._obj={}}},t.supportWeakMap=!1,t.delInterval=3e5,t._keys={},t._maps=[],n(t,["I",function(){return this.I=new t}]),t}(),J=function(){function t(){this.id=NaN,this.save=[],this.toUpperCase=null,this.changed=!1,this._text=null}s(t,"laya.utils.WordText");var e=t.prototype;return e.setText=function(t){this.changed=!0,this._text=t},e.toString=function(){return this._text},e.charCodeAt=function(t){return this._text?this._text.charCodeAt(t):NaN},e.charAt=function(t){return this._text?this._text.charAt(t):null},r(0,e,"length",function(){return this._text?this._text.length:0}),t}(),Z=function(t){function e(){this._bits=0,this._displayedInStage=!1,this._parent=null,this.conchModel=null,this.name="",this._destroyed=!1,e.__super.call(this),this._childs=e.ARRAY_EMPTY,this._$P=e.PROP_EMPTY,this.timer=i.scaleTimer,this.conchModel=R.isConchNode?this.createConchModel():null}s(e,"laya.display.Node",h);var n=e.prototype;return n._setBit=function(t,e){if(1==t){this._getBit(t)!=e&&this._updateDisplayedInstage()}e?this._bits|=t:this._bits&=~t},n._getBit=function(t){return 0!=(this._bits&t)},n._setUpNoticeChain=function(){this._getBit(1)&&this._setUpNoticeType(1)},n._setUpNoticeType=function(t){var e=this;for(e._setBit(t,!0),e=e.parent;e;){if(e._getBit(t))return;e._setBit(t,!0),e=e.parent}},n.on=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!1)},n.once=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!0)},n.createConchModel=function(){return null},n.destroy=function(t){void 0===t&&(t=!0),this._destroyed=!0,this._parent&&this._parent.removeChild(this),this._childs&&(t?this.destroyChildren():this.removeChildren()),this._childs=null,this._$P=null,this.offAll(),this.timer.clearAll(this)},n.destroyChildren=function(){if(this._childs)for(var t=this._childs.length-1;t>-1;t--)this._childs[t].destroy(!0)},n.addChild=function(t){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),t._parent===this){var i=this.getChildIndex(t);i!==this._childs.length-1&&(this._childs.splice(i,1),this._childs.push(t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,this._childs.length-1)),this._childChanged())}else t.parent&&t.parent.removeChild(t),this._childs===e.ARRAY_EMPTY&&(this._childs=[]),this._childs.push(t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,this._childs.length-1),t.parent=this,this._childChanged();return t},n.addChildren=function(t){for(var e=arguments,i=0,n=e.length;i<n;)this.addChild(e[i++])},n.addChildAt=function(t,i){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),i>=0&&i<=this._childs.length){if(t._parent===this){var n=this.getChildIndex(t);this._childs.splice(n,1),this._childs.splice(i,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,i)),this._childChanged()}else t.parent&&t.parent.removeChild(t),this._childs===e.ARRAY_EMPTY&&(this._childs=[]),this._childs.splice(i,0,t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,i),t.parent=this;return t}throw new Error("appendChildAt:The index is out of bounds")},n.getChildIndex=function(t){return this._childs.indexOf(t)},n.getChildByName=function(t){var e=this._childs;if(e)for(var i=0,n=e.length;i<n;i++){var s=e[i];if(s.name===t)return s}return null},n._get$P=function(t){return this._$P[t]},n._set$P=function(t,i){return this.destroyed||(this._$P===e.PROP_EMPTY&&(this._$P={}),this._$P[t]=i),i},n.getChildAt=function(t){return this._childs[t]},n.setChildIndex=function(t,e){var i=this._childs;if(e<0||e>=i.length)throw new Error("setChildIndex:The index is out of bounds.");var n=this.getChildIndex(t);if(n<0)throw new Error("setChildIndex:node is must child of this object.");return i.splice(n,1),i.splice(e,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,e)),this._childChanged(),t},n._childChanged=function(t){},n.removeChild=function(t){if(!this._childs)return t;var e=this._childs.indexOf(t);return this.removeChildAt(e)},n.removeSelf=function(){return this._parent&&this._parent.removeChild(this),this},n.removeChildByName=function(t){var e=this.getChildByName(t);return e&&this.removeChild(e),e},n.removeChildAt=function(t){var e=this.getChildAt(t);return e&&(this._childs.splice(t,1),this.conchModel&&this.conchModel.removeChild(e.conchModel),e.parent=null),e},n.removeChildren=function(t,i){if(void 0===t&&(t=0),void 0===i&&(i=2147483647),this._childs&&this._childs.length>0){var n=this._childs;if(0===t&&i>=o){var s=n;this._childs=e.ARRAY_EMPTY}else s=n.splice(t,i-t);for(var r=0,o=s.length;r<o;r++)s[r].parent=null,this.conchModel&&this.conchModel.removeChild(s[r].conchModel)}return this},n.replaceChild=function(t,e){var i=this._childs.indexOf(e);return i>-1?(this._childs.splice(i,1,t),this.conchModel&&(this.conchModel.removeChild(e.conchModel),this.conchModel.addChildAt(t.conchModel,i)),e.parent=null,t.parent=this,t):null},n._updateDisplayedInstage=function(){var t;t=this;var e=i.stage;for(this._displayedInStage=!1;t;){if(t._getBit(1)){this._displayedInStage=t._displayedInStage;break}if(t==e||t._displayedInStage){this._displayedInStage=!0;break}t=t.parent}},n._setDisplay=function(t){this._displayedInStage!==t&&(this._displayedInStage=t,t?this.event("display"):this.event("undisplay"))},n._displayChild=function(t,e){var i=t._childs;if(i)for(var n=0,s=i.length;n<s;n++){var r=i[n];r._getBit(1)&&(r._childs.length>0?this._displayChild(r,e):r._setDisplay(e))}t._setDisplay(e)},n.contains=function(t){if(t===this)return!0;for(;t;){if(t.parent===this)return!0;t=t.parent}return!1},n.timerLoop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1),this.timer.loop(t,e,i,n,s,r)},n.timerOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!1,!1,t,e,i,n,s)},n.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!0,t,e,i,n,s)},n.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!1,t,e,i,n,s)},n.clearTimer=function(t,e){this.timer.clear(t,e)},r(0,n,"numChildren",function(){return this._childs.length}),r(0,n,"destroyed",function(){return this._destroyed}),r(0,n,"parent",function(){return this._parent},function(t){this._parent!==t&&(t?(this._parent=t,this.event("added"),this._getBit(1)&&(this._setUpNoticeChain(),t.displayedInStage&&this._displayChild(this,!0)),t._childChanged(this)):(this.event("removed"),this._parent._childChanged(),this._getBit(1)&&this._displayChild(this,!1),this._parent=t))}),r(0,n,"displayedInStage",function(){return this._getBit(1)?this._displayedInStage:(this._setUpNoticeType(1),this._displayedInStage)}),e.ARRAY_EMPTY=[],e.PROP_EMPTY={},e.NOTICE_DISPLAY=1,e.MOUSEENABLE=2,e}(),tt=function(t){function e(t){this._bgground=null,this._border=null,this._rect=null,this.underLine=0,this.lineHeight=0,e.__super.call(this),this._padding=e._PADDING,this._spacing=e._SPACING,this._aligns=e._ALIGNS,this._font=_.EMPTY,this._ower=t}s(e,"laya.display.css.CSSStyle",t);var i=e.prototype;return i.destroy=function(){this._ower=null,this._font=null,this._rect=null},i.inherit=function(t){this._font=t._font,this._spacing=t._spacing===e._SPACING?e._SPACING:t._spacing.slice(),this.lineHeight=t.lineHeight},i._widthAuto=function(){return 0!=(262144&this._type)},i.widthed=function(t){return 0!=(8&this._type)},i._calculation=function(t,e){function i(t,e,i){return t*i[0]+e*i[1]+i[2]}function n(t){var e=r.width,n=s.width;o.width&&(s.width=i(e,n,o.width)),o.height&&(s.height=i(e,n,o.height)),o.left&&(s.x=i(e,n,o.left)),o.top&&(s.y=i(e,n,o.top))}if(e.indexOf("%")<0)return!1;var s=this._ower,r=s.parent,o=this._rect;null===o&&(r._getCSSStyle()._type|=524288,r.on("resize",this,n),this._rect=o={input:{}});var a=e.split(" ");return a[0]=parseFloat(a[0])/100,1==a.length?a[1]=a[2]=0:(a[1]=parseFloat(a[1])/100,a[2]=parseFloat(a[2])),o[t]=a,o.input[t]=e,n(),!0},i.heighted=function(t){return 0!=(8192&this._type)},i.size=function(t,e){var i=this._ower,n=!1;-1!==t&&t!=this._ower.width&&(this._type|=8,this._ower.width=t,n=!0),-1!==e&&e!=this._ower.height&&(this._type|=8192,this._ower.height=e,n=!0),n&&(i._layoutLater(),524288&this._type&&i.event("resize",this))},i._getAlign=function(){return this._aligns[0]},i._getValign=function(){return this._aligns[1]},i._getCssFloat=function(){return 0!=(32768&this._type)?32768:0},i._createFont=function(){return 4096&this._type?this._font:(this._type|=4096,this._font=new _(this._font))},i.render=function(t,e,i,n){var s=t.width,r=t.height;i-=t.pivotX,n-=t.pivotY,this._bgground&&null!=this._bgground.color&&e.ctx.fillRect(i,n,s,r,this._bgground.color),this._border&&this._border.color&&e.drawRect(i,n,s,r,this._border.color.strColor,this._border.size)},i.getCSSStyle=function(){return this},i.cssText=function(t){this.attrs(e.parseOneCSS(t,";"))},i.attrs=function(t){if(t)for(var e=0,i=t.length;e<i;e++){var n=t[e];this[n[0]]=n[1]}},i.setTransform=function(t){"none"===t?this._tf=c._TF_EMPTY:this.attrs(e.parseOneCSS(t,","))},i.translate=function(t,e){this._tf===c._TF_EMPTY&&(this._tf=new d),this._tf.translateX=t,this._tf.translateY=e},i.scale=function(t,e){this._tf===c._TF_EMPTY&&(this._tf=new d),this._tf.scaleX=t,this._tf.scaleY=e},i._enableLayout=function(){return 0==(2&this._type)&&0==(4&this._type)},r(0,i,"block",t.prototype._$get_block,function(t){t?this._type|=1:this._type&=-2}),r(0,i,"valign",function(){return e._valigndef[this._aligns[1]]},function(t){this._aligns===e._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[1]=e._valigndef[t]}),r(0,i,"height",null,function(t){if(this._type|=8192,"string"==typeof t){if(this._calculation("height",t))return;t=parseInt(t)}this.size(-1,t)}),r(0,i,"width",null,function(t){if(this._type|=8,"string"==typeof t){var e=t.indexOf("auto");if(e>=0&&(this._type|=262144,t=t.substr(0,e)),this._calculation("width",t))return;t=parseInt(t)}this.size(t,-1)}),r(0,i,"fontWeight",function(){return this._font.weight},function(t){this._createFont().weight=t}),r(0,i,"left",null,function(t){var e=this._ower;if("string"==typeof t){if("center"===t?t="50% -50% 0":"right"===t&&(t="100% -100% 0"),this._calculation("left",t))return;t=parseInt(t)}e.x=t}),r(0,i,"_translate",null,function(t){this.translate(t[0],t[1])}),r(0,i,"absolute",function(){return 0!=(4&this._type)}),r(0,i,"top",null,function(t){var e=this._ower;if("string"==typeof t){if("middle"===t?t="50% -50% 0":"bottom"===t&&(t="100% -100% 0"),this._calculation("top",t))return;t=parseInt(t)}e.y=t}),r(0,i,"align",function(){return e._aligndef[this._aligns[0]]},function(t){this._aligns===e._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[0]=e._aligndef[t]}),r(0,i,"bold",function(){return this._font.bold},function(t){this._createFont().bold=t}),r(0,i,"padding",function(){return this._padding},function(t){this._padding=t}),r(0,i,"leading",function(){return this._spacing[1]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===e._SPACING&&(this._spacing=[0,0]),this._spacing[1]=t}),r(0,i,"lineElement",function(){return 0!=(65536&this._type)},function(t){t?this._type|=65536:this._type&=-65537}),r(0,i,"cssFloat",function(){return 0!=(32768&this._type)?"right":"left"},function(t){this.lineElement=!1,"right"===t?this._type|=32768:this._type&=-32769}),r(0,i,"textDecoration",function(){return this._font.decoration},function(t){this._createFont().decoration=t}),r(0,i,"whiteSpace",function(){return 131072&this._type?"nowrap":""},function(t){"nowrap"===t&&(this._type|=131072),"none"===t&&(this._type&=-131073)}),r(0,i,"background",null,function(t){t?(this._bgground||(this._bgground={}),this._bgground.color=t,this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._type|=16384,this._ower._renderType|=256):this._bgground=null}),r(0,i,"wordWrap",function(){return 0==(131072&this._type)},function(t){t?this._type&=-131073:this._type|=131072}),r(0,i,"color",function(){return this._font.color},function(t){this._createFont().color=t}),r(0,i,"password",function(){return this._font.password},function(t){this._createFont().password=t}),r(0,i,"backgroundColor",function(){return this._bgground?this._bgground.color:null},function(t){"none"===t?this._bgground=null:(this._bgground||(this._bgground={}),this._bgground.color=t),this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._ower._renderType|=256}),r(0,i,"font",function(){return this._font.toString()},function(t){this._createFont().set(t)}),r(0,i,"weight",null,function(t){this._createFont().weight=t}),r(0,i,"letterSpacing",function(){return this._spacing[0]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===e._SPACING&&(this._spacing=[0,0]),this._spacing[0]=t}),r(0,i,"fontSize",function(){return this._font.size},function(t){this._createFont().size=t}),r(0,i,"italic",function(){return this._font.italic},function(t){this._createFont().italic=t}),r(0,i,"fontFamily",function(){return this._font.family},function(t){this._createFont().family=t}),r(0,i,"stroke",function(){return this._font.stroke[0]},function(t){this._createFont().stroke===_._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[0]=t}),r(0,i,"strokeColor",function(){return this._font.stroke[1]},function(t){this._createFont().stroke===_._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[1]=t}),r(0,i,"border",function(){return this._border?this._border.value:""},function(t){if("none"!=t){this._border||(this._border={}),this._border.value=t;var e=t.split(" ");if(this._border.color=U.create(e[e.length-1]),1==e.length)return this._border.size=1,void(this._border.type="solid");var i=0;e[0].indexOf("px")>0?(this._border.size=parseInt(e[0]),i++):this._border.size=1,this._border.type=e[i],this._ower._renderType|=256}else this._border=null}),r(0,i,"borderColor",function(){return this._border&&this._border.color?this._border.color.strColor:null},function(t){t?(this._border||(this._border={size:1,type:"solid"}),this._border.color=null==t?null:U.create(t),this._ower.conchModel&&this._ower.conchModel.border(this._border.color.strColor),this._ower._renderType|=256):this._border=null}),r(0,i,"position",function(){return 4&this._type?"absolute":""},function(t){"absolute"==t?this._type|=4:this._type&=-5}),r(0,i,"display",null,function(t){switch(t){case"":this._type&=-3,this.visible=!0;break;case"none":this._type|=2,this.visible=!1,this._ower._layoutLater()}}),r(0,i,"paddingLeft",function(){return this.padding[3]}),r(0,i,"paddingTop",function(){return this.padding[0]}),r(0,i,"_scale",null,function(t){this._ower.scale(t[0],t[1])}),r(0,i,"_rotate",null,function(t){this._ower.rotation=t}),e.parseOneCSS=function(t,i){for(var n,s=[],r=t.split(i),o=0,a=r.length;o<a;o++){var h=r[o],l=h.indexOf(":"),u=h.substr(0,l).replace(/^\s+|\s+$/g,"");if(0!=u.length){var c=h.substr(l+1).replace(/^\s+|\s+$/g,""),_=[u,c];switch(u){case"italic":case"bold":_[1]="true"==c;break;case"line-height":_[0]="lineHeight",_[1]=parseInt(c);break;case"font-size":_[0]="fontSize",_[1]=parseInt(c);break;case"padding":(n=c.split(" ")).length>1||(n[1]=n[2]=n[3]=n[0]),_[1]=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];break;case"rotate":_[0]="_rotate",_[1]=parseFloat(c);break;case"scale":n=c.split(" "),_[0]="_scale",_[1]=[parseFloat(n[0]),parseFloat(n[1])];break;case"translate":n=c.split(" "),_[0]="_translate",_[1]=[parseInt(n[0]),parseInt(n[1])];break;default:(_[0]=e._CSSTOVALUE[u])||(_[0]=u)}s.push(_)}}return s},e.parseCSS=function(t,i){for(var n;null!=(n=e._parseCSSRegExp.exec(t));)e.styleSheets[n[1]]=e.parseOneCSS(n[2],";")},e.EMPTY=new e(null),e._CSSTOVALUE={"letter-spacing":"letterSpacing","line-spacing":"lineSpacing","white-space":"whiteSpace","line-height":"lineHeight","scale-x":"scaleX","scale-y":"scaleY","translate-x":"translateX","translate-y":"translateY","font-family":"fontFamily","font-weight":"fontWeight","vertical-align":"valign","text-decoration":"textDecoration","background-color":"backgroundColor","border-color":"borderColor",float:"cssFloat"},e._parseCSSRegExp=new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}","g"),e._aligndef={left:0,center:1,right:2,0:"left",1:"center",2:"right"},e._valigndef={top:0,middle:1,bottom:2,0:"top",1:"middle",2:"bottom"},e.styleSheets={},e.ALIGN_CENTER=1,e.ALIGN_RIGHT=2,e.VALIGN_MIDDLE=1,e.VALIGN_BOTTOM=2,e._CSS_BLOCK=1,e._DISPLAY_NONE=2,e._ABSOLUTE=4,e._WIDTH_SET=8,e._PADDING=[0,0,0,0],e._RECT=[-1,-1,-1,-1],e._SPACING=[0,0],e._ALIGNS=[0,0,0],e.ADDLAYOUTED=512,e._NEWFONT=4096,e._HEIGHT_SET=8192,e._BACKGROUND_SET=16384,e._FLOAT_RIGHT=32768,e._LINE_ELEMENT=65536,e._NOWARP=131072,e._WIDTHAUTO=262144,e._LISTERRESZIE=524288,e}(c),et=function(t){function e(){this.url=null,this.audio=null,this.loaded=!1,e.__super.call(this)}s(e,"laya.media.h5audio.AudioSound",h);var i=e.prototype;return i.dispose=function(){var t=e._audioCache[this.url];t&&(t.src="",delete e._audioCache[this.url])},i.load=function(t){function i(){s(),o.loaded=!0,o.event("complete")}function n(){r.load=null,s(),o.event("error")}function s(){r.removeEventListener("canplaythrough",i),r.removeEventListener("error",n)}t=L.formatURL(t),this.url=t;var r;if(t==E._tMusic?(e._initMusicAudio(),(r=e._musicAudio).src!=t&&(e._audioCache[r.src]=null,r=null)):r=e._audioCache[t],r&&r.readyState>=2)this.event("complete");else{r||(t==E._tMusic?(e._initMusicAudio(),r=e._musicAudio):r=N.createElement("audio"),e._audioCache[t]=r,r.src=t),r.addEventListener("canplaythrough",i),r.addEventListener("error",n);var o=this;this.audio=r,r.load?r.load():n()}},i.play=function(t,i){if(void 0===t&&(t=0),void 0===i&&(i=0),!this.url)return null;var n;if(!(n=this.url==E._tMusic?e._musicAudio:e._audioCache[this.url]))return null;var s;s=X.getItem("audio:"+this.url),R.isConchApp?s||((s=N.createElement("audio")).src=this.url):this.url==E._tMusic?(e._initMusicAudio(),(s=e._musicAudio).src=this.url):s=s||n.cloneNode(!0);var r=new _t(s);return r.url=this.url,r.loops=i,r.startTime=t,r.play(),E.addChannel(r),r},r(0,i,"duration",function(){var t;return(t=e._audioCache[this.url])?t.duration:0}),e._initMusicAudio=function(){e._musicAudio||(e._musicAudio||(e._musicAudio=N.createElement("audio")),R.isConchApp||N.document.addEventListener("mousedown",e._makeMusicOK))},e._makeMusicOK=function(){N.document.removeEventListener("mousedown",e._makeMusicOK),e._musicAudio.src?e._musicAudio.play():(e._musicAudio.src="",e._musicAudio.load())},e._audioCache={},e._musicAudio=null,e}(),it=function(t){function e(){this.url=null,this.loops=0,this.startTime=NaN,this.isStopped=!1,this.completeHandler=null,e.__super.call(this)}s(e,"laya.media.SoundChannel",h);var i=e.prototype;return i.play=function(){},i.stop=function(){},i.pause=function(){},i.resume=function(){},i.__runComplete=function(t){t&&t.run()},r(0,i,"volume",function(){return 1},function(t){}),r(0,i,"position",function(){return 0}),r(0,i,"duration",function(){return 0}),e}(),nt=function(t){function e(){e.__super.call(this)}s(e,"laya.media.Sound",h);var i=e.prototype;return i.load=function(t){},i.play=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),null},i.dispose=function(){},r(0,i,"duration",function(){return 0}),e}(),st=function(t){function e(){this.url=null,this.loaded=!1,this.data=null,this.audioBuffer=null,this.__toPlays=null,this._disposed=!1,e.__super.call(this)}s(e,"laya.media.webaudio.WebAudioSound",h);var i=e.prototype;return i.load=function(t){var i=this;if(t=L.formatURL(t),this.url=t,this.audioBuffer=e._dataCache[t],this.audioBuffer)this._loaded(this.audioBuffer);else if(e.e.on("loaded:"+t,this,this._loaded),e.e.on("err:"+t,this,this._err),!e.__loadingSound[t]){e.__loadingSound[t]=!0;var n=new N.window.XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){i._disposed?i._removeLoadEvents():(i.data=n.response,e.buffs.push({buffer:i.data,url:i.url}),e.decode())},n.onerror=function(t){i._err()},n.send()}},i._err=function(){this._removeLoadEvents(),e.__loadingSound[this.url]=!1,this.event("error")},i._loaded=function(t){this._removeLoadEvents(),this._disposed||(this.audioBuffer=t,e._dataCache[this.url]=this.audioBuffer,this.loaded=!0,this.event("complete"))},i._removeLoadEvents=function(){e.e.off("loaded:"+this.url,this,this._loaded),e.e.off("err:"+this.url,this,this._err)},i.__playAfterLoaded=function(){if(this.__toPlays){var t,e=0,i=0;i=(t=this.__toPlays).length;var n;for(e=0;e<i;e++)(n=t[e])[2]&&!n[2].isStopped&&this.play(n[0],n[1],n[2]);this.__toPlays.length=0}},i.play=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),i=i||new dt,this.audioBuffer||this.url&&(this.__toPlays||(this.__toPlays=[]),this.__toPlays.push([t,e,i]),this.once("complete",this,this.__playAfterLoaded),this.load(this.url)),i.url=this.url,i.loops=e,i.audioBuffer=this.audioBuffer,i.startTime=t,i.play(),E.addChannel(i),i},i.dispose=function(){this._disposed=!0,delete e._dataCache[this.url],delete e.__loadingSound[this.url],this.audioBuffer=null,this.data=null,this.__toPlays=[]},r(0,i,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),e.decode=function(){e.buffs.length<=0||e.isDecoding||(e.isDecoding=!0,e.tInfo=e.buffs.shift(),e.ctx.decodeAudioData(e.tInfo.buffer,e._done,e._fail))},e._done=function(t){e.e.event("loaded:"+e.tInfo.url,t),e.isDecoding=!1,e.decode()},e._fail=function(){e.e.event("err:"+e.tInfo.url,null),e.isDecoding=!1,e.decode()},e._playEmptySound=function(){if(null!=e.ctx){var t=e.ctx.createBufferSource();t.buffer=e._miniBuffer,t.connect(e.ctx.destination),t.start(0,0,0)}},e._unlock=function(){e._unlocked||(e._playEmptySound(),"running"==e.ctx.state&&(N.document.removeEventListener("mousedown",e._unlock,!0),N.document.removeEventListener("touchend",e._unlock,!0),e._unlocked=!0))},e.initWebAudio=function(){"running"!=e.ctx.state&&(e._unlock(),N.document.addEventListener("mousedown",e._unlock,!0),N.document.addEventListener("touchend",e._unlock,!0))},e._dataCache={},e.buffs=[],e.isDecoding=!1,e._unlocked=!1,e.tInfo=null,e.__loadingSound={},n(e,["window",function(){return this.window=N.window},"webAudioEnabled",function(){return this.webAudioEnabled=e.window.AudioContext||e.window.webkitAudioContext||e.window.mozAudioContext},"ctx",function(){return this.ctx=e.webAudioEnabled?new(e.window.AudioContext||e.window.webkitAudioContext||e.window.mozAudioContext):void 0},"_miniBuffer",function(){return this._miniBuffer=e.ctx.createBuffer(1,1,22050)},"e",function(){return this.e=new h}]),e}(),rt=function(t){function e(){this._responseType=null,this._data=null,e.__super.call(this),this._http=new N.window.XMLHttpRequest}s(e,"laya.net.HttpRequest",h);var i=e.prototype;return i.send=function(t,e,i,n,s){void 0===i&&(i="get"),void 0===n&&(n="text"),this._responseType=n,this._data=null;var r=this,o=this._http;if(o.open(i,t,!0),s)for(var a=0;a<s.length;a++)o.setRequestHeader(s[a++],s[a]);else R.isConchApp||(e&&"string"!=typeof e?o.setRequestHeader("Content-Type","application/json"):o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"));o.responseType="arraybuffer"!==n?"text":"arraybuffer",o.onerror=function(t){r._onError(t)},o.onabort=function(t){r._onAbort(t)},o.onprogress=function(t){r._onProgress(t)},o.onload=function(t){r._onLoad(t)},o.send(e)},i._onProgress=function(t){t&&t.lengthComputable&&this.event("progress",t.loaded/t.total)},i._onAbort=function(t){this.error("Request was aborted by user")},i._onError=function(t){this.error("Request failed Status:"+this._http.status+" text:"+this._http.statusText)},i._onLoad=function(t){var e=this._http,i=void 0!==e.status?e.status:200;200===i||204===i||0===i?this.complete():this.error("["+e.status+"]"+e.statusText+":"+e.responseURL)},i.error=function(t){this.clear(),this.event("error",t)},i.complete=function(){this.clear();var t=!0;try{"json"===this._responseType?this._data=JSON.parse(this._http.responseText):"xml"===this._responseType?this._data=K.parseXMLFromString(this._http.responseText):this._data=this._http.response||this._http.responseText}catch(e){t=!1,this.error(e.message)}t&&this.event("complete",this._data instanceof Array?[this._data]:this._data)},i.clear=function(){var t=this._http;t.onerror=t.onabort=t.onprogress=t.onload=null},r(0,i,"url",function(){return this._http.responseURL}),r(0,i,"http",function(){return this._http}),r(0,i,"data",function(){return this._data}),e}(),ot=function(t){function e(){this._data=null,this._class=null,this._url=null,this._type=null,this._cache=!1,this._http=null,this._customParse=!1,e.__super.call(this)}s(e,"laya.net.Loader",h);var n=e.prototype;return n.load=function(t,i,n,s,r){if(void 0===n&&(n=!0),void 0===r&&(r=!1),this._url=t,0===t.indexOf("data:image")?this._type=i="image":(this._type=i||(i=this.getTypeFromUrl(t)),t=L.formatURL(t)),this._cache=n,this._data=null,!r&&e.loadedMap[t])return this._data=e.loadedMap[t],this.event("progress",1),void this.event("complete",this._data);if(s&&e.setGroup(t,s),null!=e.parserMap[i])return this._customParse=!0,void(e.parserMap[i]instanceof laya.utils.Handler?e.parserMap[i].runWith(this):e.parserMap[i].call(null,this));if("image"===i||"htmlimage"===i||"nativeimage"===i)return this._loadImage(t);if("sound"===i)return this._loadSound(t);if("ttf"===i)return this._loadTTF(t);var o;switch(i){case"atlas":case"plf":o="json";break;case"font":o="xml";break;case"pkm":o="arraybuffer";break;default:o=i}e.preLoadedMap[t]?this.onLoaded(e.preLoadedMap[t]):(this._http||(this._http=new rt,this._http.on("progress",this,this.onProgress),this._http.on("error",this,this.onError),this._http.on("complete",this,this.onLoaded)),this._http.send(t,null,"get",o))},n.getTypeFromUrl=function(t){var i=K.getFileExtension(t);return i?e.typeMap[i]:(console.warn("Not recognize the resources suffix",t),"text")},n._loadTTF=function(t){t=L.formatURL(t);var e=new A;e.complete=l.create(this,this.onLoaded),e.load(t)},n._loadImage=function(t){function i(){n.onload=null,n.onerror=null,delete e.imgCache[t]}t=L.formatURL(t);var n,s=this,r=function(){i(),s.onLoaded(n)},o=function(){i(),s.event("error","Load image failed")};"nativeimage"===this._type?((n=new N.window.Image).crossOrigin="",n.onload=r,n.onerror=o,n.src=t,e.imgCache[t]=n):new Tt.create(t,{onload:r,onerror:o,onCreate:function(i){n=i,e.imgCache[t]=i}})},n._loadSound=function(t){function e(){i.offAll()}var i=new E._soundClass,n=this;i.on("complete",this,function(){e(),n.onLoaded(i)}),i.on("error",this,function(){e(),i.dispose(),n.event("error","Load sound failed")}),i.load(t)},n.onProgress=function(t){"atlas"===this._type?this.event("progress",.3*t):this.event("progress",t)},n.onError=function(t){this.event("error",t)},n.onLoaded=function(t){var i=this._type;if("plf"==i)this.parsePLFData(t),this.complete(t);else if("image"===i){var n=new lt(t);n.url=this._url,this.complete(n)}else if("sound"===i||"htmlimage"===i||"nativeimage"===i)this.complete(t);else if("atlas"===i){if(!t.src&&!t._setContext){if(!this._data){if(this._data=t,t.meta&&t.meta.image)for(var s=t.meta.image.split(","),r=this._url.indexOf("/")>=0?"/":"\\",o=this._url.lastIndexOf(r),a=o>=0?this._url.substr(0,o+1):"",h=0,l=s.length;h<l;h++)s[h]=a+s[h];else s=[this._url.replace(".json",".png")];s.reverse(),t.toLoads=s,t.pics=[]}return this.event("progress",.3+1/s.length*.6),this._loadImage(s.pop())}if(this._data.pics.push(t),this._data.toLoads.length>0)return this.event("progress",.3+1/this._data.toLoads.length*.6),this._loadImage(this._data.toLoads.pop());var c=this._data.frames,_=this._url.split("?")[0],d=this._data.meta&&this._data.meta.prefix?this._data.meta.prefix:_.substring(0,_.lastIndexOf("."))+"/",f=this._data.pics,p=L.formatURL(this._url),g=e.atlasMap[p]||(e.atlasMap[p]=[]);g.dir=d;var m=1;if(this._data.meta&&this._data.meta.scale&&1!=this._data.meta.scale){m=parseFloat(this._data.meta.scale);for(var v in c){var y=c[v],w=f[y.frame.idx?y.frame.idx:0],x=L.formatURL(d+v);w.scaleRate=m,e.cacheRes(x,lt.create(w,y.frame.x,y.frame.y,y.frame.w,y.frame.h,y.spriteSourceSize.x,y.spriteSourceSize.y,y.sourceSize.w,y.sourceSize.h)),e.loadedMap[x].url=x,g.push(x)}}else for(v in c)w=f[(y=c[v]).frame.idx?y.frame.idx:0],x=L.formatURL(d+v),e.cacheRes(x,lt.create(w,y.frame.x,y.frame.y,y.frame.w,y.frame.h,y.spriteSourceSize.x,y.spriteSourceSize.y,y.sourceSize.w,y.sourceSize.h)),e.loadedMap[x].url=x,g.push(x);delete this._data.pics,this.complete(this._data)}else if("font"==i){if(!t.src)return this._data=t,this.event("progress",.5),this._loadImage(this._url.replace(".fnt",".png"));var T=new u;T.parseFont(this._data,t);var b=this._url.split(".fnt")[0].split("/"),C=b[b.length-1];gt.registerBitmapFont(C,T),this._data=T,this.complete(this._data)}else if("pkm"==i){var M=Tt.create(t,this._url),S=new lt(M);S.url=this._url,this.complete(S)}else this.complete(t)},n.parsePLFData=function(t){var i,n,s;for(i in t)switch(s=t[i],i){case"json":case"text":for(n in s)e.preLoadedMap[L.formatURL(n)]=s[n];break;default:for(n in s)e.preLoadedMap[L.formatURL(n)]=s[n]}},n.complete=function(t){this._data=t,this._customParse?this.event("loaded",t instanceof Array?[t]:t):(e._loaders.push(this),e._isWorking||e.checkNext())},n.endLoad=function(t){t&&(this._data=t),this._cache&&e.cacheRes(this._url,this._data),this.event("progress",1),this.event("complete",this.data instanceof Array?[this.data]:this.data)},r(0,n,"url",function(){return this._url}),r(0,n,"data",function(){return this._data}),r(0,n,"cache",function(){return this._cache}),r(0,n,"type",function(){return this._type}),e.checkNext=function(){e._isWorking=!0;for(var t=N.now();e._startIndex<e._loaders.length;)if(N.now(),e._loaders[e._startIndex].endLoad(),e._startIndex++,N.now()-t>e.maxTimeOut)return console.warn("loader callback cost a long time:"+(N.now()-t)+" url="+e._loaders[e._startIndex-1].url),void i.timer.frameOnce(1,null,e.checkNext);e._loaders.length=0,e._startIndex=0,e._isWorking=!1},e.clearRes=function(t,i){void 0===i&&(i=!1),t=L.formatURL(t);var n=e.getAtlas(t);if(n){for(var s=0,r=n.length;s<r;s++){var o=n[s],a=e.getRes(o);delete e.loadedMap[o],a&&a.destroy(i)}n.length=0,delete e.atlasMap[t],delete e.loadedMap[t]}else{var h=e.loadedMap[t];h&&(delete e.loadedMap[t],h instanceof laya.resource.Texture&&h.bitmap&&h.destroy(i))}},e.clearTextureRes=function(t){t=L.formatURL(t);var e=laya.net.Loader.getAtlas(t),i=e&&e.length>0?laya.net.Loader.getRes(e[0]):laya.net.Loader.getRes(t);i&&i.bitmap&&(R.isConchApp?i.bitmap.source.releaseTexture&&i.bitmap.source.releaseTexture():null==i.bitmap._atlaser&&i.bitmap.releaseResource(!0))},e.getRes=function(t){return e.loadedMap[L.formatURL(t)]},e.getAtlas=function(t){return e.atlasMap[L.formatURL(t)]},e.cacheRes=function(t,i){t=L.formatURL(t),null!=e.loadedMap[t]?console.warn("Resources already exist,is repeated loading:",t):e.loadedMap[t]=i},e.setGroup=function(t,i){e.groupMap[i]||(e.groupMap[i]=[]),e.groupMap[i].push(t)},e.clearResByGroup=function(t){if(e.groupMap[t]){var i=e.groupMap[t],n=0,s=i.length;for(n=0;n<s;n++)e.clearRes(i[n]);i.length=0}},e.TEXT="text",e.JSON="json",e.XML="xml",e.BUFFER="arraybuffer",e.IMAGE="image",e.SOUND="sound",e.ATLAS="atlas",e.FONT="font",e.TTF="ttf",e.PLF="plf",e.PKM="pkm",e.typeMap={png:"image",jpg:"image",jpeg:"image",txt:"text",json:"json",xml:"xml",als:"atlas",atlas:"atlas",mp3:"sound",ogg:"sound",wav:"sound",part:"json",fnt:"font",pkm:"pkm",ttf:"ttf",plf:"plf"},e.parserMap={},e.groupMap={},e.maxTimeOut=100,e.loadedMap={},e.preLoadedMap={},e.atlasMap={},e._loaders=[],e._isWorking=!1,e._startIndex=0,e.imgCache={},e}(),at=function(t){function e(){this.retryNum=1,this.retryDelay=0,this.maxLoader=5,this._loaders=[],this._loaderCount=0,this._resInfos=[],this._infoPool=[],this._maxPriority=5,this._failRes={},e.__super.call(this);for(var t=0;t<this._maxPriority;t++)this._resInfos[t]=[]}var r;s(e,"laya.net.LoaderManager",h);var o=e.prototype;return o.create=function(t,e,i,n,s,r,o,a){if(void 0===r&&(r=1),void 0===o&&(o=!0),t instanceof Array){var h=t,u=h.length,c=0;if(i)var _=l.create(i.caller,i.method,i.args,!1);for(var d=0;d<u;d++){var f=h[d];"string"==typeof f&&(f=h[d]={url:f}),f.progress=0}for(d=0;d<u;d++){f=h[d];var p=i?l.create(null,function(t,e){t.progress=e;for(var i=0,n=0;n<u;n++)i+=h[n].progress;var s=i/u;_.runWith(s)},[f],!1):null,g=i||e?l.create(null,function(t,i){c++,t.progress=1,c===u&&e&&e.run()},[f]):null;this._create(f.url,g,p,f.clas||n,f.params||s,f.priority||r,o,f.group||a)}return!0}return this._create(t,e,i,n,s,r,o,a)},o._create=function(t,n,s,r,o,a,h,u){void 0===a&&(a=1),void 0===h&&(h=!0);var c=L.formatURL(t),_=this.getRes(c);if(_)!_.hasOwnProperty("loaded")||_.loaded?(s&&s.runWith(1),n&&n.run()):n&&i.loader._createListener(t,n.caller,n.method,n.args,!0,!1);else{var d=K.getFileExtension(t),f=e.createMap[d];if(!f)throw new Error("LoaderManager:unknown file("+t+") extension with: "+d+".");r||(r=f[0]);var p=f[1];"atlas"==d?this.load(t,n,s,p,a,h):(r===lt&&(p="htmlimage"),(_=r?new r:null).hasOwnProperty("_loaded")&&(_._loaded=!1),_._setUrl(t),u&&_._setGroup(u),this._createLoad(_,t,l.create(null,function(e){_&&!_.destroyed&&e&&_.onAsynLoaded.call(_,t,e,o),n&&n.run(),i.loader.event(t)}),s,p,a,!1,u,!0),h&&this.cacheRes(c,_))}return _},o.load=function(t,n,s,o,a,h,l,u){var c=this;if(void 0===a&&(a=1),void 0===h&&(h=!0),void 0===u&&(u=!1),t instanceof Array)return this._loadAssets(t,n,s,o,a,h,l);var _=ot.getRes(t);if(null!=_)i.timer.frameOnce(1,null,function(){s&&s.runWith(1),n&&n.runWith(_),c._loaderCount||c.event("complete")});else{var d=e._resMap[t];d?(n&&d._createListener("complete",n.caller,n.method,n.args,!1,!1),s&&d._createListener("progress",s.caller,s.method,s.args,!1,!1)):((d=this._infoPool.length?this._infoPool.pop():new r).url=t,d.type=o,d.cache=h,d.group=l,d.ignoreCache=u,n&&d.on("complete",n.caller,n.method,n.args),s&&d.on("progress",s.caller,s.method,s.args),e._resMap[t]=d,a=a<this._maxPriority?a:this._maxPriority-1,this._resInfos[a].push(d),this._next())}return this},o._createLoad=function(t,n,s,o,a,h,l,u,c){var _=this;if(void 0===h&&(h=1),void 0===l&&(l=!0),void 0===c&&(c=!1),n instanceof Array)return this._loadAssets(n,s,o,a,h,l,u);var d=ot.getRes(n);if(null!=d)i.timer.frameOnce(1,null,function(){o&&o.runWith(1),s&&s.runWith(d),_._loaderCount||_.event("complete")});else{var f=e._resMap[n];f?(s&&f._createListener("complete",s.caller,s.method,s.args,!1,!1),o&&f._createListener("progress",o.caller,o.method,o.args,!1,!1)):((f=this._infoPool.length?this._infoPool.pop():new r).url=n,f.clas=t,f.type=a,f.cache=l,f.group=u,f.ignoreCache=c,s&&f.on("complete",s.caller,s.method,s.args),o&&f.on("progress",o.caller,o.method,o.args),e._resMap[n]=f,h=h<this._maxPriority?h:this._maxPriority-1,this._resInfos[h].push(f),this._next())}return this},o._next=function(){if(!(this._loaderCount>=this.maxLoader)){for(var t=0;t<this._maxPriority;t++)for(var e=this._resInfos[t];e.length>0;){var i=e.shift();if(i)return this._doLoad(i)}this._loaderCount||this.event("complete")}},o._doLoad=function(t){function e(e){i.offAll(),i._data=null,i._customParse=!1,n._loaders.push(i),n._endLoad(t,e instanceof Array?[e]:e),n._loaderCount--,n._next()}this._loaderCount++;var i=this._loaders.length?this._loaders.pop():new ot;i.on("complete",null,e),i.on("progress",null,function(e){t.event("progress",e)}),i.on("error",null,function(t){e(null)});var n=this;i._class=t.clas,i.load(t.url,t.type,t.cache,t.group,t.ignoreCache)},o._endLoad=function(t,n){var s=t.url;if(null==n){var r=this._failRes[s]||0;if(r<this.retryNum)return console.warn("[warn]Retry to load:",s),this._failRes[s]=r+1,void i.timer.once(this.retryDelay,this,this._addReTry,[t],!1);console.warn("[error]Failed to load:",s),this.event("error",s)}this._failRes[s]&&(this._failRes[s]=0),delete e._resMap[s],t.event("complete",n),t.offAll(),this._infoPool.push(t)},o._addReTry=function(t){this._resInfos[this._maxPriority-1].push(t),this._next()},o.clearRes=function(t,e){void 0===e&&(e=!1),ot.clearRes(t,e)},o.getRes=function(t){return ot.getRes(t)},o.cacheRes=function(t,e){ot.cacheRes(t,e)},o.clearTextureRes=function(t){ot.clearTextureRes(t)},o.setGroup=function(t,e){ot.setGroup(t,e)},o.clearResByGroup=function(t){ot.clearResByGroup(t)},o.clearUnLoaded=function(){for(var t=0;t<this._maxPriority;t++){for(var i=this._resInfos[t],n=i.length-1;n>-1;n--){var s=i[n];s&&(s.offAll(),this._infoPool.push(s))}i.length=0}this._loaderCount=0,e._resMap={}},o.cancelLoadByUrls=function(t){if(t)for(var e=0,i=t.length;e<i;e++)this.cancelLoadByUrl(t[e])},o.cancelLoadByUrl=function(t){for(var i=0;i<this._maxPriority;i++)for(var n=this._resInfos[i],s=n.length-1;s>-1;s--){var r=n[s];r&&r.url===t&&(n[s]=null,r.offAll(),this._infoPool.push(r))}e._resMap[t]&&delete e._resMap[t]},o._loadAssets=function(t,e,i,n,s,r,o){void 0===s&&(s=1),void 0===r&&(r=!0);for(var a=t.length,h=0,u=0,c=[],_=!0,d=0;d<a;d++){var f=t[d];"string"==typeof f&&(f={url:f,type:n,size:1,priority:s}),f.size||(f.size=1),f.progress=0,u+=f.size,c.push(f);var p=i?l.create(null,function(t,e){if(null!=i){t.progress=e;for(var n=0,s=0;s<c.length;s++){var r=c[s];n+=r.size*r.progress}var o=n/u;i.runWith(o)}},[f],!1):null,g=e||i?l.create(null,function(t,i){h++,t.progress=1,i||(_=!1),h===a&&e&&e.runWith(_)},[f]):null;this.load(f.url,g,p,f.type,f.priority||1,r,f.group||o)}return this},e.cacheRes=function(t,e){ot.cacheRes(t,e)},e._resMap={},n(e,["createMap",function(){return this.createMap={atlas:[null,"atlas"]}}]),e.__init$=function(){r=function(t){function e(){this.url=null,this.type=null,this.cache=!1,this.group=null,this.ignoreCache=!1,this.clas=null,e.__super.call(this)}return s(e,"",h),e}()},e}(),ht=(function(t){function e(t){e.__super.call(this),t||(t=[.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0]),this._mat=new Float32Array(16),this._alpha=new Float32Array(4);for(var i=0,n=0,s=0;s<20;s++)s%5!=4?this._mat[i++]=t[s]:this._alpha[n++]=t[s];this._action=o.createFilterAction(32),this._action.data=this}s(e,"laya.filters.ColorFilter",w);var n=e.prototype;i.imps(n,{"laya.filters.IFilter":!0}),n.callNative=function(t){t._$P.cf=this;t.conchModel&&t.conchModel.setFilterMatrix&&t.conchModel.setFilterMatrix(this._mat,this._alpha)},r(0,n,"type",function(){return 32}),r(0,n,"action",function(){return this._action})}(),function(t){function e(t,i,n){this._endian=null,this._stamp=NaN,this._socket=null,this._connected=!1,this._addInputPosition=0,this._input=null,this._output=null,this.timeout=0,this.objectEncoding=0,this.disableInput=!1,this._byteClass=null,this.protocols=[],void 0===i&&(i=0),e.__super.call(this),this._byteClass=n||B,this.endian="bigEndian",this.timeout=2e4,this._addInputPosition=0,t&&i>0&&i<65535&&this.connect(t,i)}s(e,"laya.net.Socket",h);var i=e.prototype;i.connect=function(t,e){var i="ws://"+t+":"+e;i="https:"==N.window.location.protocol?"wss://"+t+":"+e:"ws://"+t+":"+e,this.connectByUrl(i)},i.connectByUrl=function(t){var e=this;null!=this._socket&&this.close(),this._socket&&this.cleanSocket(),this.protocols&&0!=this.protocols.length?this._socket=new N.window.WebSocket(t,this.protocols):this._socket=new N.window.WebSocket(t),this._socket.binaryType="arraybuffer",this._output=new this._byteClass,this._output.endian=this.endian,this._input=new this._byteClass,this._input.endian=this.endian,this._addInputPosition=0,this._socket.onopen=function(t){e._onOpen(t)},this._socket.onmessage=function(t){e._onMessage(t)},this._socket.onclose=function(t){e._onClose(t)},this._socket.onerror=function(t){e._onError(t)}},i.cleanSocket=function(){try{this._socket.close()}catch(t){}this._connected=!1,this._socket.onopen=null,this._socket.onmessage=null,this._socket.onclose=null,this._socket.onerror=null,this._socket=null},i.close=function(){if(null!=this._socket)try{this._socket.close()}catch(t){}},i._onOpen=function(t){this._connected=!0,this.event("open",t)},i._onMessage=function(t){if(t&&t.data){var e=t.data;if(this.disableInput&&e)this.event("message",e);else{this._input.length>0&&this._input.bytesAvailable<1&&(this._input.clear(),this._addInputPosition=0);var i=this._input.pos;!this._addInputPosition&&(this._addInputPosition=0),this._input.pos=this._addInputPosition,e&&("string"==typeof e?this._input.writeUTFBytes(e):this._input.writeArrayBuffer(e),this._addInputPosition=this._input.pos,this._input.pos=i),this.event("message",e)}}},i._onClose=function(t){this._connected=!1,this.event("close",t)},i._onError=function(t){this.event("error",t)},i.send=function(t){this._socket.send(t)},i.flush=function(){if(this._output&&this._output.length>0){var t;try{this._socket&&this._socket.send(this._output.__getBuffer().slice(0,this._output.length))}catch(e){t=e}this._output.endian=this.endian,this._output.clear(),t&&this.event("error",t)}},r(0,i,"input",function(){return this._input}),r(0,i,"output",function(){return this._output}),r(0,i,"connected",function(){return this._connected}),r(0,i,"endian",function(){return this._endian},function(t){this._endian=t,null!=this._input&&(this._input.endian=t),null!=this._output&&(this._output.endian=t)}),e.LITTLE_ENDIAN="littleEndian",e.BIG_ENDIAN="bigEndian"}(),function(t){function e(){this.worker=null,e.__super.call(this);var t=this;this.worker=new N.window.Worker(e.workerPath),this.worker.onmessage=function(e){t.workerMessage(e.data)}}s(e,"laya.net.WorkerLoader",h);var i=e.prototype;i.workerMessage=function(t){if(t)switch(t.type){case"Image":this.imageLoaded(t);break;case"Msg":this.event("image_msg",t.msg)}},i.imageLoaded=function(t){if(t&&t.buffer&&t.buffer.length<10)return e._enable=!1,this._myTrace("buffer lost when postmessage ,disable workerloader"),this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);if(!t.dataType)return this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);var i,n,s;switch(t.dataType){case"buffer":(s=(n=(i=new yt("2D")).source.getContext("2d")).createImageData(t.width,t.height)).data.set(t.buffer),i.size(s.width,s.height),n.putImageData(s,0,0),i.memorySize=0;break;case"imagedata":n=(i=new yt("2D")).source.getContext("2d"),s=t.imagedata,i.size(s.width,s.height),n.putImageData(s,0,0),s=t.imagedata,i.memorySize=0;break;case"imageBitmap":s=t.imageBitmap,R.isWebGL?i=s:(n=(i=new yt("2D")).source.getContext("2d"),i.size(s.width,s.height),n.drawImage(s,0,0),i.src=t.url)}R.isWebGL&&(i=new laya.webgl.resource.WebGLImage(i,t.url)),this.event(t.url,i)},i._myTrace=function(t){var e=arguments,i=[],n=0,s=e.length;for(n=0;n<s;n++)i.push(e[n]);this.event("image_msg",i.join(" "))},i.loadImage=function(t){var e;(e={}).type="load",e.url=t,this.worker.postMessage(e)},i._loadImage=function(t){var i=this;if(!e._enable||t.toLowerCase().indexOf(".png")<0)e._preLoadFun.call(i,t);else{t=L.formatURL(t);var n=function(s){laya.net.WorkerLoader.I.off(t,i,n),s?i.onLoaded(s):e._preLoadFun.call(i,t)};laya.net.WorkerLoader.I.on(t,i,n),laya.net.WorkerLoader.I.loadImage(t)}},r(1,e,"enable",function(){return e._enable},function(t){e.disableJSDecode&&!N.window.createImageBitmap||(e._enable=t)&&null==e._preLoadFun&&(e._enable=e.__init__())}),e.__init__=function(){return null==e._preLoadFun&&(!!N.window.Worker&&(e._preLoadFun=ot.prototype._loadImage,ot.prototype._loadImage=e.prototype._loadImage,e.I||(e.I=new e),!0))},e.workerSupported=function(){return!!N.window.Worker},e.IMAGE_LOADED="image_loaded",e.IMAGE_ERR="image_err",e.IMAGE_MSG="image_msg",e.I=null,e._preLoadFun=null,e._enable=!1,e.workerPath="libs/worker.js",e.disableJSDecode=!0}(),function(t){function e(){e.__super.call(this),this._$1__id=++e._uniqueIDCounter,this.__loaded=!0,this._destroyed=!1,this._referenceCount=0,e._idResourcesMap[this.id]=this,this._released=!0,this.lock=!1,this._memorySize=0,this._lastUseFrameCount=-1,O.currentResourceManager&&O.currentResourceManager.addResource(this)}s(e,"laya.resource.Resource",h);var n=e.prototype;return i.imps(n,{"laya.resource.ICreateResource":!0,"laya.resource.IDispose":!0}),n._setUrl=function(t){if(this._url!==t){var i;this._url&&((i=e._urlResourcesMap[this._url]).splice(i.indexOf(this),1),0===i.length&&delete e._urlResourcesMap[this._url]),t&&((i=e._urlResourcesMap[t])||(e._urlResourcesMap[t]=i=[]),i.push(this)),this._url=t}},n._getGroup=function(){return this._group},n._setGroup=function(t){if(this._group!==t){var i;this._group&&((i=e._groupResourcesMap[this._group]).splice(i.indexOf(this),1),0===i.length&&delete e._groupResourcesMap[this._group]),t&&((i=e._groupResourcesMap[t])||(e._groupResourcesMap[t]=i=[]),i.push(this)),this._group=t}},n._addReference=function(){this._referenceCount++},n._removeReference=function(){this._referenceCount--},n._clearReference=function(){this._referenceCount=0},n._endLoaded=function(){this.__loaded=!0,this.event("loaded",this)},n.recreateResource=function(){this.completeCreate()},n.disposeResource=function(){},n.activeResource=function(t){void 0===t&&(t=!1),this._lastUseFrameCount=$.loopCount,!this._destroyed&&this.__loaded&&(this._released||t)&&this.recreateResource()},n.releaseResource=function(t){return void 0===t&&(t=!1),!(!t&&this.lock)&&(!(this._released&&!t)&&(this.disposeResource(),this._released=!0,this._lastUseFrameCount=-1,this.event("released",this),!0))},n.onAsynLoaded=function(t,e,i){throw new Error("Resource: must override this function!")},n.destroy=function(){if(!this._destroyed){null!==this._resourceManager&&this._resourceManager.removeResource(this),this._destroyed=!0,this.lock=!1,this.releaseResource(),delete e._idResourcesMap[this.id];var t;this._url&&((t=e._urlResourcesMap[this._url])&&(t.splice(t.indexOf(this),1),0===t.length&&delete e._urlResourcesMap[this.url]),ot.clearRes(this._url),this.__loaded||o.cancelLoadByUrl(this._url)),this._group&&((t=e._groupResourcesMap[this._group]).splice(t.indexOf(this),1),0===t.length&&delete e._groupResourcesMap[this.url])}},n.completeCreate=function(){this._released=!1,this.event("recovered",this)},n.dispose=function(){this.destroy()},r(0,n,"memorySize",function(){return this._memorySize},function(t){var e=t-this._memorySize;this._memorySize=t,this.resourceManager&&this.resourceManager.addSize(e)}),r(0,n,"_loaded",null,function(t){this.__loaded=t}),r(0,n,"loaded",function(){return this.__loaded}),r(0,n,"id",function(){return this._$1__id}),r(0,n,"destroyed",function(){return this._destroyed}),r(0,n,"group",function(){return this._getGroup()},function(t){this._setGroup(t)}),r(0,n,"resourceManager",function(){return this._resourceManager}),r(0,n,"url",function(){return this._url}),r(0,n,"released",function(){return this._released}),r(0,n,"referenceCount",function(){return this._referenceCount}),e.getResourceByID=function(t){return e._idResourcesMap[t]},e.getResourceByURL=function(t,i){return void 0===i&&(i=0),e._urlResourcesMap[t][i]},e.getResourceCountByURL=function(t){return e._urlResourcesMap[t].length},e.destroyUnusedResources=function(t){var i;if(t){var n=e._groupResourcesMap[t];if(n)for(var s=n.slice(),r=0,o=s.length;r<o;r++)(i=s[r]).lock||0!==i._referenceCount||i.destroy()}else for(var a in e._idResourcesMap)(i=e._idResourcesMap[a]).lock||0!==i._referenceCount||i.destroy()},e._uniqueIDCounter=0,e._idResourcesMap={},e._urlResourcesMap={},e._groupResourcesMap={},e}()),lt=function(e){function n(t,e){this.offsetX=0,this.offsetY=0,this.sourceWidth=0,this.sourceHeight=0,this._w=0,this._h=0,this._uvID=0,this._atlasID=-1,this.scaleRate=1,n.__super.call(this),t&&null!=t._addReference&&t._addReference(),this.setTo(t,e)}s(n,"laya.resource.Texture",h);var a=n.prototype;return a._setUrl=function(t){this.url=t},a.setTo=function(e,i){if(e instanceof t.HTMLElement){var s=yt.create("2D",e);this.bitmap=s}else this.bitmap=e;if(this.uv=i||n.DEF_UV,e){this._w=e.width,this._h=e.height,this.sourceWidth=this.sourceWidth||this._w,this.sourceHeight=this.sourceHeight||this._h,this._loaded=this._w>0;var r=this;if(this._loaded)o.addToAtlas&&o.addToAtlas(r);else{var a=e;a instanceof laya.resource.HTMLImage&&a.image&&a.image.addEventListener("load",function(t){o.addToAtlas&&o.addToAtlas(r)},!1)}}},a.active=function(){this.bitmap&&this.bitmap.activeResource()},a.destroy=function(t){if(void 0===t&&(t=!1),this.bitmap&&this.bitmap.referenceCount>0){var e=this.bitmap;t?(R.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose(),e._clearReference()):(e._removeReference(),0==e.referenceCount&&(R.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose())),this.url&&this===i.loader.getRes(this.url)&&i.loader.clearRes(this.url,t),this._loaded=!1}},a.load=function(t){var e=this;this._loaded=!1,t=L.customFormat(t);var i=this.bitmap||(this.bitmap=Tt.create(t));i&&i._addReference();var n=this;i.onload=function(){i.onload=null,n._loaded=!0,e.sourceWidth=e._w=i.width,e.sourceHeight=e._h=i.height,n.event("loaded",this),o.addToAtlas&&o.addToAtlas(n)}},a.addTextureToAtlas=function(t){o.addTextureToAtlas(this)},a.getPixels=function(t,e,i,n){if(R.isConchApp){var s=this.bitmap;if(s.source&&s.source.getImageData){var r=s.source.getImageData(t,e,i,n),a=new Uint8Array(r);return Array.from(a)}return null}if(R.isWebGL)return o.getTexturePixels(this,t,e,i,n);N.canvas.size(i,n),N.canvas.clear(),N.context.drawTexture(this,-t,-e,this.width,this.height,0,0);return N.context.getImageData(0,0,i,n).data},a.onAsynLoaded=function(t,e){e&&e._addReference(),this.setTo(e,this.uv)},r(0,a,"source",function(){return this.bitmap?(this.bitmap.activeResource(),this.bitmap.source):null}),r(0,a,"loaded",function(){return this._loaded}),r(0,a,"released",function(){return!this.bitmap||this.bitmap.released}),r(0,a,"width",function(){return this._w?this._w:this.uv&&this.uv!==n.DEF_UV?(this.uv[2]-this.uv[0])*this.bitmap.width:this.bitmap.width},function(t){this._w=t,this.sourceWidth||(this.sourceWidth=t)}),r(0,a,"repeat",function(){return!R.isWebGL||!this.bitmap||this.bitmap.repeat},function(t){t&&R.isWebGL&&this.bitmap&&(this.bitmap.repeat=t,t&&(this.bitmap.enableMerageInAtlas=!1))}),r(0,a,"height",function(){return this._h?this._h:this.uv&&this.uv!==n.DEF_UV?(this.uv[5]-this.uv[1])*this.bitmap.height:this.bitmap.height},function(t){this._h=t,this.sourceHeight||(this.sourceHeight=t)}),r(0,a,"isLinearSampling",function(){return!R.isWebGL||9728!=this.bitmap.minFifter},function(t){!t&&R.isWebGL&&(t||-1!=this.bitmap.minFifter||-1!=this.bitmap.magFifter||(this.bitmap.minFifter=9728,this.bitmap.magFifter=9728,this.bitmap.enableMerageInAtlas=!1))}),n.moveUV=function(t,e,i){for(var n=0;n<8;n+=2)i[n]+=t,i[n+1]+=e;return i},n.create=function(t,e,i,s,r,a,h,l,u){void 0===a&&(a=0),void 0===h&&(h=0),void 0===l&&(l=0),void 0===u&&(u=0);var c=t instanceof laya.resource.Texture,_=c?t.uv:n.DEF_UV,d=c?t.bitmap:t,f=o.isAtlas(d);if(f){var p=d._atlaser,g=t._atlasID;if(-1==g)throw new Error("create texture error");d=p._inAtlasTextureBitmapValue[g],_=p._inAtlasTextureOriUVValue[g]}var m=new n(d,null);d.width&&e+s>d.width&&(s=d.width-e),d.height&&i+r>d.height&&(r=d.height-i),m.width=s,m.height=r,m.offsetX=a,m.offsetY=h,m.sourceWidth=l||s,m.sourceHeight=u||r;var v=1/d.width,y=1/d.height;e*=v,i*=y,s*=v,r*=y;var w=m.uv[0],x=m.uv[1],T=m.uv[4],b=m.uv[5],C=T-w,M=b-x,S=n.moveUV(_[0],_[1],[e,i,e+s,i,e+s,i+r,e,i+r]);m.uv=[w+S[0]*C,x+S[1]*M,T-(1-S[2])*C,x+S[3]*M,T-(1-S[4])*C,b-(1-S[5])*M,w+S[6]*C,b-(1-S[7])*M],f&&m.addTextureToAtlas();var P=d.scaleRate;return P&&1!=P?(m.sourceWidth/=P,m.sourceHeight/=P,m.width/=P,m.height/=P,m.scaleRate=P,m.offsetX/=P,m.offsetY/=P):m.scaleRate=1,m},n.createFromTexture=function(t,e,i,s,r){var o=t.scaleRate;1!=o&&(e*=o,i*=o,s*=o,r*=o);var a=P.TEMP.setTo(e-t.offsetX,i-t.offsetY,s,r),h=a.intersection(n._rect1.setTo(0,0,t.width,t.height),n._rect2);if(!h)return null;var l=n.create(t,h.x,h.y,h.width,h.height,h.x-a.x,h.y-a.y,s,r);return l.bitmap._removeReference(),l},n.DEF_UV=[0,0,1,0,1,1,0,1],n.INV_UV=[0,1,1,1,1,0,0,0],n._rect1=new P,n._rect2=new P,n}(),ut=function(t){function e(){this._labelDic=null,this._tweenDic={},this._tweenDataList=[],this._endTweenDataList=null,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this._firstTweenDic={},this._startTimeSort=!1,this._endTimeSort=!1,this._loopKey=!1,this.scale=1,this._frameRate=60,this._frameIndex=0,this._total=0,e.__super.call(this)}var n;s(e,"laya.utils.TimeLine",h);var o=e.prototype;return o.to=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!0)},o.from=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!1)},o._create=function(t,e,i,s,r,o){var a=X.getItemByClass("tweenData",n);return a.isTo=o,a.type=0,a.target=t,a.duration=i,a.data=e,a.startTime=this._startTime+r,a.endTime=a.startTime+a.duration,a.ease=s,this._startTime=Math.max(a.endTime,this._startTime),this._tweenDataList.push(a),this._startTimeSort=!0,this._endTimeSort=!0,this},o.addLabel=function(t,e){var i=X.getItemByClass("tweenData",n);return i.type=1,i.data=t,i.endTime=i.startTime=this._startTime+e,this._labelDic||(this._labelDic={}),this._labelDic[t]=i,this._tweenDataList.push(i),this},o.removeLabel=function(t){if(this._labelDic&&this._labelDic[t]){var e=this._labelDic[t];if(e){var i=this._tweenDataList.indexOf(e);i>-1&&this._tweenDataList.splice(i,1)}delete this._labelDic[t]}},o.gotoTime=function(t){if(null!=this._tweenDataList&&0!=this._tweenDataList.length){var e,i;for(var n in this._firstTweenDic)if(i=this._firstTweenDic[n])for(var s in i)i.diyTarget.hasOwnProperty(s)&&(i.diyTarget[s]=i[s]);for(n in this._tweenDic)(e=this._tweenDic[n]).clear(),delete this._tweenDic[n];this._index=0,this._gidIndex=0,this._currTime=t,this._lastTime=N.now();var r;null==this._endTweenDataList||this._endTimeSort?(this._endTimeSort=!1,this._endTweenDataList=r=this._tweenDataList.concat(),r.sort(function(t,e){return t.endTime>e.endTime?1:t.endTime<e.endTime?-1:0})):r=this._endTweenDataList;for(var o,a=0,h=r.length;a<h;a++)if(0==(o=r[a]).type){if(!(t>=o.endTime))break;this._index=Math.max(this._index,a+1);var u=o.data;if(o.isTo)for(var c in u)o.target[c]=u[c]}for(a=0,h=this._tweenDataList.length;a<h;a++)0==(o=this._tweenDataList[a]).type&&t>=o.startTime&&t<o.endTime&&(this._index=Math.max(this._index,a+1),this._gidIndex++,(e=X.getItemByClass("tween",j))._create(o.target,o.data,o.duration,o.ease,l.create(this,this._animComplete,[this._gidIndex]),0,!1,o.isTo,!0,!1),e.setStartTime(this._currTime-(t-o.startTime)),e._updateEase(this._currTime),e.gid=this._gidIndex,this._tweenDic[this._gidIndex]=e)}},o.gotoLabel=function(t){if(null!=this._labelDic){var e=this._labelDic[t];e&&this.gotoTime(e.startTime)}},o.pause=function(){i.timer.clear(this,this._update)},o.resume=function(){this.play(this._currTime,this._loopKey)},o.play=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=!1),this._tweenDataList){if(this._startTimeSort){this._startTimeSort=!1,this._tweenDataList.sort(function(t,e){return t.startTime>e.startTime?1:t.startTime<e.startTime?-1:0});for(var n=0,s=this._tweenDataList.length;n<s;n++){var r=this._tweenDataList[n];if(null!=r&&0==r.type){var o=r.target,a=o.$_GID||(o.$_GID=K.getGID()),h=null;null==this._firstTweenDic[a]?((h={}).diyTarget=o,this._firstTweenDic[a]=h):h=this._firstTweenDic[a];for(var l in r.data)null==h[l]&&(h[l]=o[l])}}}"string"==typeof t?this.gotoLabel(t):this.gotoTime(t),this._loopKey=e,this._lastTime=N.now(),i.timer.frameLoop(1,this,this._update)}},o._update=function(){if(this._currTime>=this._startTime){if(!this._loopKey){for(var t in this._tweenDic)(s=this._tweenDic[t]).complete();return this._complete(),void this.pause()}if(this._complete(),!this._tweenDataList)return;this.gotoTime(0)}var e=N.now(),i=e-this._lastTime,n=this._currTime+=i*this.scale;this._lastTime=e;for(t in this._tweenDic)(s=this._tweenDic[t])._updateEase(n);var s;if(0!=this._tweenDataList.length&&this._index<this._tweenDataList.length){var r=this._tweenDataList[this._index];n>=r.startTime&&(this._index++,0==r.type?(this._gidIndex++,(s=X.getItemByClass("tween",j))._create(r.target,r.data,r.duration,r.ease,l.create(this,this._animComplete,[this._gidIndex]),0,!1,r.isTo,!0,!1),s.setStartTime(n),s.gid=this._gidIndex,this._tweenDic[this._gidIndex]=s,s._updateEase(n)):this.event("label",r.data))}},o._animComplete=function(t){this._tweenDic[t]&&delete this._tweenDic[t]},o._complete=function(){this.event("complete")},o.reset=function(){var t;if(this._labelDic)for(t in this._labelDic)delete this._labelDic[t];for(t in this._tweenDic)this._tweenDic[t].clear(),delete this._tweenDic[t];for(t in this._firstTweenDic)delete this._firstTweenDic[t];if(this._endTweenDataList=null,this._tweenDataList&&this._tweenDataList.length){var e=0,n=0;for(n=this._tweenDataList.length,e=0;e<n;e++)this._tweenDataList[e]&&this._tweenDataList[e].destroy()}this._tweenDataList.length=0,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this.scale=1,i.timer.clear(this,this._update)},o.destroy=function(){this.reset(),this._labelDic=null,this._tweenDic=null,this._tweenDataList=null,this._firstTweenDic=null},r(0,o,"index",function(){return this._frameIndex},function(t){this._frameIndex=t,this.gotoTime(this._frameIndex/this._frameRate*1e3)}),r(0,o,"total",function(){return this._total=Math.floor(this._startTime/1e3*this._frameRate),this._total}),e.to=function(t,i,n,s,r){return void 0===r&&(r=0),(new e).to(t,i,n,s,r)},e.from=function(t,i,n,s,r){return void 0===r&&(r=0),(new e).from(t,i,n,s,r)},e.__init$=function(){n=function(){function t(){this.type=0,this.isTo=!0,this.startTime=NaN,this.endTime=NaN,this.target=null,this.duration=NaN,this.ease=null,this.data=null}s(t,"");return t.prototype.destroy=function(){this.target=null,this.ease=null,this.data=null,this.isTo=!0,this.type=0,X.recover("tweenData",this)},t}()},e}(),ct=function(e){function a(){this._transform=null,this._tfChanged=!1,this._x=0,this._y=0,this._width=0,this._height=0,this._repaint=1,this._mouseEnableState=0,this._zOrder=0,this._graphics=null,this._renderType=0,this._optimizeScrollRect=!1,this._texture=null,this.mouseThrough=!1,this.autoSize=!1,this.hitTestPrior=!1,this.viewport=null,a.__super.call(this),this._style=c.EMPTY}s(a,"laya.display.Sprite",e);var h=a.prototype;return i.imps(h,{"laya.display.ILayout":!0}),h.createConchModel=function(){return new ConchNode},h.destroy=function(t){void 0===t&&(t=!0),this._releaseMem(),e.prototype.destroy.call(this,t),this._style&&this._style.destroy(),this._transform&&this._transform.destroy(),this._transform=null,this._style=null,this._graphics=null},h.updateZOrder=function(){K.updateOrder(this._childs)&&this.repaint()},h.reCache=function(){this._$P.cacheCanvas&&(this._$P.cacheCanvas.reCache=!0),this._repaint=1},h.setBounds=function(t){this._set$P("uBounds",t)},h.getBounds=function(){return this._$P.mBounds||this._set$P("mBounds",new P),P._getWrapRec(this._boundPointsToParent(),this._$P.mBounds)},h.getSelfBounds=function(){return this._$P.uBounds?this._$P.uBounds:(this._$P.mBounds||this._set$P("mBounds",new P),P._getWrapRec(this._getBoundPointsM(!1),this._$P.mBounds))},h._boundPointsToParent=function(t){void 0===t&&(t=!1);var e=0,i=0;this._style&&(e=this._style._tf.translateX,i=this._style._tf.translateY,t=t||0!==this._style._tf.rotate,this._style.scrollRect&&(e+=this._style.scrollRect.x,i+=this._style.scrollRect.y));var n=this._getBoundPointsM(t);if(!n||n.length<1)return n;if(8!=n.length&&(n=t?b.scanPList(n):P._getWrapRec(n,P.TEMP)._getBoundPoints()),!this.transform)return K.transPointList(n,this._x-e,this._y-i),n;var s=S.TEMP,r=0,o=n.length;for(r=0;r<o;r+=2)s.x=n[r],s.y=n[r+1],this.toParentPoint(s),n[r]=s.x,n[r+1]=s.y;return n},h.getGraphicBounds=function(t){return void 0===t&&(t=!1),this._graphics?this._graphics.getBounds(t):P.TEMP.setTo(0,0,0,0)},h._getBoundPointsM=function(t){if(void 0===t&&(t=!1),this._$P.uBounds)return this._$P.uBounds._getBoundPoints();if(this._$P.temBM||this._set$P("temBM",[]),this.scrollRect){var e=K.clearArray(this._$P.temBM),i=P.TEMP;return i.copyFrom(this.scrollRect),K.concatArray(e,i._getBoundPoints()),e}for(var n,s,r,o=this._graphics?this._graphics.getBoundPoints():K.clearArray(this._$P.temBM),a=0,h=(r=this._childs).length;a<h;a++)(n=r[a])instanceof laya.display.Sprite&&1==n.visible&&(s=n._boundPointsToParent(t))&&(o=o?K.concatArray(o,s):s);return o},h.getStyle=function(){return this._style===c.EMPTY&&(this._style=new c),this._style},h.setStyle=function(t){this._style=t},h._adjustTransform=function(){this._tfChanged=!1;var t,e=this._style._tf,i=e.scaleX,n=e.scaleY;if(e.rotate||1!==i||1!==n||e.skewX||e.skewY){(t=this._transform||(this._transform=M.create())).bTransform=!0;var s=.0174532922222222*(e.rotate-e.skewX),r=.0174532922222222*(e.rotate+e.skewY),o=Math.cos(r),a=Math.sin(r),h=Math.sin(s),l=Math.cos(s);return t.a=i*o,t.b=i*a,t.c=-n*h,t.d=n*l,t.tx=t.ty=0,t}return this._transform&&this._transform.destroy(),this._transform=null,this._renderType&=-5,t},h.pos=function(t,e,i){if(void 0===i&&(i=!1),this._x!==t||this._y!==e){if(this.destroyed)return this;if(i){this._x=t,this._y=e,this.conchModel&&this.conchModel.pos(this._x,this._y);var n=this._parent;n&&0===n._repaint&&(n._repaint=1,n.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}else this.x=t,this.y=e}return this},h.pivot=function(t,e){return this.pivotX=t,this.pivotY=e,this},h.size=function(t,e){return this.width=t,this.height=e,this},h.scale=function(t,e,i){void 0===i&&(i=!1);var n=this.getStyle(),s=n._tf;if(s.scaleX!=t||s.scaleY!=e){if(this.destroyed)return this;if(i){n.setScale(t,e),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e),this._renderType|=4;var r=this._parent;r&&0===r._repaint&&(r._repaint=1,r.parentRepaint())}else this.scaleX=t,this.scaleY=e}return this},h.skew=function(t,e){return this.skewX=t,this.skewY=e,this},h.render=function(t,e,i){$.spriteCount++,F.renders[this._renderType]._fun(this,t,e+this._x,i+this._y),this._repaint=0},h.drawToCanvas=function(t,e,i,n){if(R.isConchNode){var s=yt.create("2D");return new D(t,e,s).ctx.setCanvasType(1),this.conchModel.drawToCanvas(s.source,i,n),s}return o.drawToCanvas(this,this._renderType,t,e,i,n)},h.customRender=function(t,e,i){this._renderType|=1024},h._applyFilters=function(){if(!R.isWebGL){var t;if((t=this._$P.filters)&&!(t.length<1))for(var e=0,i=t.length;e<i;e++)t[e].action.apply(this._$P.cacheCanvas)}},h._isHaveGlowFilter=function(){var t=0,e=0;if(this.filters)for(t=0;t<this.filters.length;t++)if(8==this.filters[t].type)return!0;for(t=0,e=this._childs.length;t<e;t++)if(this._childs[t]._isHaveGlowFilter())return!0;return!1},h.localToGlobal=function(t,e){void 0===e&&(e=!1),!0===e&&(t=new S(t.x,t.y));for(var n=this;n&&n!=i.stage;)t=n.toParentPoint(t),n=n.parent;return t},h.globalToLocal=function(t,e){void 0===e&&(e=!1),e&&(t=new S(t.x,t.y));for(var n=this,s=[];n&&n!=i.stage;)s.push(n),n=n.parent;for(var r=s.length-1;r>=0;)t=(n=s[r]).fromParentPoint(t),r--;return t},h.toParentPoint=function(t){if(!t)return t;t.x-=this.pivotX,t.y-=this.pivotY,this.transform&&this._transform.transformPoint(t),t.x+=this._x,t.y+=this._y;var e=this._style.scrollRect;return e&&(t.x-=e.x,t.y-=e.y),t},h.fromParentPoint=function(t){if(!t)return t;t.x-=this._x,t.y-=this._y;var e=this._style.scrollRect;return e&&(t.x+=e.x,t.y+=e.y),this.transform&&this._transform.invertTransformPoint(t),t.x+=this.pivotX,t.y+=this.pivotY,t},h.on=function(t,i,n,s){return 1!==this._mouseEnableState&&this.isMouseEvent(t)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(t,i,n,s,!1)):e.prototype.on.call(this,t,i,n,s)},h.once=function(t,i,n,s){return 1!==this._mouseEnableState&&this.isMouseEvent(t)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(t,i,n,s,!0)):e.prototype.once.call(this,t,i,n,s)},h._$2__onDisplay=function(){if(1!==this._mouseEnableState){var t=this;for(t=t.parent;t&&1!==t._mouseEnableState&&!t._getBit(2);)t.mouseEnabled=!0,t._setBit(2,!0),t=t.parent}},h.loadImage=function(t,e,i,n,s,r){var o=this;return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),this.graphics.loadImage(t,e,i,n,s,function(t){o.destroyed||(o.size(e+(n||t.width),i+(s||t.height)),o.repaint(),r&&r.runWith(t))}),this},h.repaint=function(){this.conchModel&&this.conchModel.repaint&&this.conchModel.repaint(),0===this._repaint&&(this._repaint=1,this.parentRepaint()),this._$P&&this._$P.maskParent&&this._$P.maskParent.repaint()},h._needRepaint=function(){return 0!==this._repaint&&this._$P.cacheCanvas&&this._$P.cacheCanvas.reCache},h._childChanged=function(t){this._childs.length?this._renderType|=2048:this._renderType&=-2049,t&&this._get$P("hasZorder")&&i.timer.callLater(this,this.updateZOrder),this.repaint()},h.parentRepaint=function(){var t=this._parent;t&&0===t._repaint&&(t._repaint=1,t.parentRepaint())},h.startDrag=function(t,e,i,n,s,r,o){void 0===e&&(e=!1),void 0===i&&(i=0),void 0===n&&(n=300),void 0===r&&(r=!1),void 0===o&&(o=.92),this._$P.dragging||this._set$P("dragging",new z),this._$P.dragging.start(this,t,e,i,n,s,r,o)},h.stopDrag=function(){this._$P.dragging&&this._$P.dragging.stop()},h._releaseMem=function(){if(this._$P){var t=this._$P.cacheCanvas;t&&t.ctx&&(X.recover("RenderContext",t.ctx),t.ctx.canvas.size(0,0),t.ctx=null);var e=this._$P._filterCache;e&&(e.destroy(),e.recycle(),this._set$P("_filterCache",null)),this._$P._isHaveGlowFilter&&this._set$P("_isHaveGlowFilter",!1),this._$P._isHaveGlowFilter=null}},h._setDisplay=function(t){t||this._releaseMem(),e.prototype._setDisplay.call(this,t)},h.hitTestPoint=function(t,e){var i=this.globalToLocal(S.TEMP.setTo(t,e));t=i.x,e=i.y;return(this._$P.hitArea?this._$P.hitArea:this._width>0&&this._height>0?P.TEMP.setTo(0,0,this._width,this._height):this.getSelfBounds()).contains(t,e)},h.getMousePoint=function(){return this.globalToLocal(S.TEMP.setTo(i.stage.mouseX,i.stage.mouseY))},h._getWords=function(){return null},h._addChildsToLayout=function(t){var e=this._getWords();if(null==e&&0==this._childs.length)return!1;if(e)for(var i=0,n=e.length;i<n;i++)t.push(e[i]);return this._childs.forEach(function(e,i,n){e._style._enableLayout()&&e._addToLayout(t)}),!0},h._addToLayout=function(t){this._style.absolute||(this._style.block?t.push(this):this._addChildsToLayout(t)&&(this.x=this.y=0))},h._isChar=function(){return!1},h._getCSSStyle=function(){return this._style.getCSSStyle()},h._setAttributes=function(t,e){switch(t){case"x":this.x=parseFloat(e);break;case"y":this.y=parseFloat(e);break;case"width":this.width=parseFloat(e);break;case"height":this.height=parseFloat(e);break;default:this[t]=e}},h._layoutLater=function(){this.parent&&this.parent._layoutLater()},r(0,h,"optimizeScrollRect",function(){return this._optimizeScrollRect},function(t){this._optimizeScrollRect!=t&&(this._optimizeScrollRect=t,this.conchModel&&this.conchModel.optimizeScrollRect(t))}),r(0,h,"customRenderEnable",null,function(t){if(t&&(this._renderType|=1024,R.isConchNode)){a.CustomList.push(this);var e=new yt("2d");e._setContext(new CanvasRenderingContext2D),this.customContext=new D(0,0,e),e.context.setCanvasType&&e.context.setCanvasType(2),this.conchModel.custom(e.context)}}),r(0,h,"cacheAsBitmap",function(){return"none"!==this.cacheAs},function(t){this.cacheAs=t?this._$P.hasFilter?"none":"normal":"none"}),r(0,h,"cacheAs",function(){return null==this._$P.cacheCanvas?"none":this._$P.cacheCanvas.type},function(t){var e=this._$P.cacheCanvas;if(t!==(e?e.type:"none")){if("none"!==t)this._getBit(1)||this._setUpNoticeType(1),e||(e=this._set$P("cacheCanvas",X.getItemByClass("cacheCanvas",Object))),e.type=t,e.reCache=!0,this._renderType|=16,"bitmap"==t&&this.conchModel&&this.conchModel.cacheAs(1),this._set$P("cacheForFilters",!1);else if(this._$P._mask);else if(this._$P.hasFilter)this._set$P("cacheForFilters",!0);else{if(e){var i=e;i&&i.ctx&&(X.recover("RenderContext",i.ctx),i.ctx.canvas.size(0,0),i.ctx=null),X.recover("cacheCanvas",e)}this._$P.cacheCanvas=null,this._renderType&=-17,this.conchModel&&this.conchModel.cacheAs(0)}this.repaint()}}),r(0,h,"zOrder",function(){return this._zOrder},function(t){this._zOrder!=t&&(this._zOrder=t,this.conchModel&&this.conchModel.setZOrder&&this.conchModel.setZOrder(t),this._parent&&(t&&this._parent._set$P("hasZorder",!0),i.timer.callLater(this._parent,this.updateZOrder)))}),r(0,h,"rotation",function(){return this._style._tf.rotate},function(t){var e=this.getStyle();if(e._tf.rotate!==t){e.setRotate(t),this._tfChanged=!0,this.conchModel&&this.conchModel.rotate(t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"width",function(){return this.autoSize?this.getSelfBounds().width:this._width},function(t){this._width!==t&&(this._width=t,this.conchModel&&this.conchModel.size(t,this._height),this.repaint())}),r(0,h,"x",function(){return this._x},function(t){if(this._x!==t){if(this.destroyed)return;this._x=t,this.conchModel&&this.conchModel.pos(t,this._y);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),r(0,h,"globalScaleY",function(){for(var t=1,e=this;e&&e!==i.stage;)t*=e.scaleY,e=e.parent;return t}),r(0,h,"hitArea",function(){return this._$P.hitArea},function(t){this._set$P("hitArea",t)}),r(0,h,"staticCache",function(){return this._$P.staticCache},function(t){this._set$P("staticCache",t),t||this.reCache()}),r(0,h,"texture",function(){return this._texture},function(t){this._texture!=t&&(this._texture=t,this.graphics.cleanByTexture(t,0,0))}),r(0,h,"y",function(){return this._y},function(t){if(this._y!==t){if(this.destroyed)return;this._y=t,this.conchModel&&this.conchModel.pos(this._x,t);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),r(0,h,"height",function(){return this.autoSize?this.getSelfBounds().height:this._height},function(t){this._height!==t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,t),this.repaint())}),r(0,h,"blendMode",function(){return this._style.blendMode},function(t){this.getStyle().blendMode=t,this.conchModel&&this.conchModel.blendMode(t),t&&"source-over"!=t?this._renderType|=8:this._renderType&=-9,this.parentRepaint()}),r(0,h,"scaleX",function(){return this._style._tf.scaleX},function(t){var e=this.getStyle();if(e._tf.scaleX!==t){e.setScaleX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e._tf.scaleY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"scaleY",function(){return this._style._tf.scaleY},function(t){var e=this.getStyle();if(e._tf.scaleY!==t){e.setScaleY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(e._tf.scaleX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"stage",function(){return i.stage}),r(0,h,"skewX",function(){return this._style._tf.skewX},function(t){var e=this.getStyle();if(e._tf.skewX!==t){e.setSkewX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(t,e._tf.skewY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"scrollRect",function(){return this._style.scrollRect},function(t){this.getStyle().scrollRect=t,this.repaint(),t?(this._renderType|=128,this.conchModel&&this.conchModel.scrollRect(t.x,t.y,t.width,t.height)):(this._renderType&=-129,this.conchModel&&(a.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(64):this.conchModel.removeType(128)))}),r(0,h,"skewY",function(){return this._style._tf.skewY},function(t){var e=this.getStyle();if(e._tf.skewY!==t){e.setSkewY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(e._tf.skewX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),r(0,h,"transform",function(){return this._tfChanged?this._adjustTransform():this._transform},function(t){this._tfChanged=!1,this._transform=t,t&&(this._x=t.tx,this._y=t.ty,t.tx=t.ty=0,this.conchModel&&this.conchModel.transform(t.a,t.b,t.c,t.d,this._x,this._y)),t?this._renderType|=4:(this._renderType&=-5,this.conchModel&&this.conchModel.removeType(4)),this.parentRepaint()}),r(0,h,"pivotX",function(){return this._style._tf.translateX},function(t){this.getStyle().setTranslateX(t),this.conchModel&&this.conchModel.pivot(t,this._style._tf.translateY),this.repaint()}),r(0,h,"pivotY",function(){return this._style._tf.translateY},function(t){this.getStyle().setTranslateY(t),this.conchModel&&this.conchModel.pivot(this._style._tf.translateX,t),this.repaint()}),r(0,h,"alpha",function(){return this._style.alpha},function(t){this._style&&this._style.alpha!==t&&(t=t<0?0:t>1?1:t,this.getStyle().alpha=t,this.conchModel&&this.conchModel.alpha(t),1!==t?this._renderType|=2:this._renderType&=-3,this.parentRepaint())}),r(0,h,"visible",function(){return this._style.visible},function(t){this._style&&this._style.visible!==t&&(this.getStyle().visible=t,this.conchModel&&this.conchModel.visible(t),this.parentRepaint())}),r(0,h,"graphics",function(){return this._graphics||(this.graphics=o.createGraphics())},function(t){this._graphics&&(this._graphics._sp=null),this._graphics=t,t?(this._renderType&=-2,this._renderType|=512,t._sp=this,this.conchModel&&this.conchModel.graphics(this._graphics)):(this._renderType&=-513,this._renderType&=-2,this.conchModel&&(a.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(256):this.conchModel.removeType(512))),this.repaint()}),r(0,h,"filters",function(){return this._$P.filters},function(t){t&&0===t.length&&(t=null),this._$P.filters!=t&&(this._set$P("filters",t?t.slice():null),R.isConchApp&&(this.conchModel&&(a.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(16):this.conchModel.removeType(32)),this._$P.filters&&1==this._$P.filters.length&&this._$P.filters[0].callNative(this)),R.isWebGL&&(t&&t.length?this._renderType|=32:this._renderType&=-33),t&&t.length>0?(this._getBit(1)||this._setUpNoticeType(1),R.isWebGL&&1==t.length&&t[0]instanceof laya.filters.ColorFilter||("bitmap"!=this.cacheAs&&(R.isConchNode||(this.cacheAs="bitmap"),this._set$P("cacheForFilters",!0)),this._set$P("hasFilter",!0))):(this._set$P("hasFilter",!1),this._$P.cacheForFilters&&"bitmap"==this.cacheAs&&(this.cacheAs="none")),this.repaint())}),r(0,h,"parent",e.prototype._$get_parent,function(t){i.superSet(Z,this,"parent",t),t&&this._getBit(2)&&this._$2__onDisplay()}),r(0,h,"mask",function(){return this._$P._mask},function(t){t&&this.mask&&this.mask._$P.maskParent||(t?(this.cacheAs="bitmap",this._set$P("_mask",t),t._set$P("maskParent",this)):(this.mask&&this.mask._set$P("maskParent",null),this._set$P("_mask",t),this.cacheAs="none"),this.conchModel&&this.conchModel.mask(t?t.conchModel:null),this._renderType|=64,this.parentRepaint())}),r(0,h,"mouseEnabled",function(){return this._mouseEnableState>1},function(t){this._mouseEnableState=t?2:1}),r(0,h,"globalScaleX",function(){for(var t=1,e=this;e&&e!==i.stage;)t*=e.scaleX,e=e.parent;return t}),r(0,h,"mouseX",function(){return this.getMousePoint().x}),r(0,h,"mouseY",function(){return this.getMousePoint().y}),a.fromImage=function(t){return(new a).loadImage(t)},a.CustomList=[],n(a,["RUNTIMEVERION",function(){return this.RUNTIMEVERION=t.conch?conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-")+1):""}]),a}(Z),_t=function(t){function e(t){this._audio=null,this._onEnd=null,this._resumePlay=null,e.__super.call(this),this._onEnd=K.bind(this.__onEnd,this),this._resumePlay=K.bind(this.__resumePlay,this),t.addEventListener("ended",this._onEnd),this._audio=t}s(e,"laya.media.h5audio.AudioSoundChannel",it);var n=e.prototype;return n.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(i.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},n.__resumePlay=function(){this._audio&&this._audio.removeEventListener("canplay",this._resumePlay);try{this._audio.currentTime=this.startTime,N.container.appendChild(this._audio),this._audio.play()}catch(t){this.event("error")}},n.play=function(){this.isStopped=!1;try{this._audio.playbackRate=E.playbackRate,this._audio.currentTime=this.startTime}catch(t){return void this._audio.addEventListener("canplay",this._resumePlay)}E.addChannel(this),N.container.appendChild(this._audio),"play"in this._audio&&this._audio.play()},n.stop=function(){this.isStopped=!0,E.removeChannel(this),this.completeHandler=null,this._audio&&("pause"in this._audio&&R.isConchApp&&this._audio.stop(),this._audio.pause(),this._audio.removeEventListener("ended",this._onEnd),this._audio.removeEventListener("canplay",this._resumePlay),N.onIE||this._audio!=et._musicAudio&&X.recover("audio:"+this.url,this._audio),N.removeElement(this._audio),this._audio=null)},n.pause=function(){this.isStopped=!0,E.removeChannel(this),"pause"in this._audio&&this._audio.pause()},n.resume=function(){this._audio&&(this.isStopped=!1,E.addChannel(this),"play"in this._audio&&this._audio.play())},r(0,n,"position",function(){return this._audio?this._audio.currentTime:0}),r(0,n,"duration",function(){return this._audio?this._audio.duration:0}),r(0,n,"volume",function(){return this._audio?this._audio.volume:1},function(t){this._audio&&(this._audio.volume=t)}),e}(),dt=function(t){function e(){this.audioBuffer=null,this.gain=null,this.bufferSource=null,this._currentTime=0,this._volume=1,this._startTime=0,this._pauseTime=0,this._onPlayEnd=null,this.context=st.ctx,e.__super.call(this),this._onPlayEnd=K.bind(this.__onPlayEnd,this),this.context.createGain?this.gain=this.context.createGain():this.gain=this.context.createGainNode()}s(e,"laya.media.webaudio.WebAudioSoundChannel",it);var n=e.prototype;return n.play=function(){if(E.addChannel(this),this.isStopped=!1,this._clearBufferSource(),this.audioBuffer){var t=this.context,e=this.gain,i=t.createBufferSource();this.bufferSource=i,i.buffer=this.audioBuffer,i.connect(e),e&&e.disconnect(),e.connect(t.destination),i.onended=this._onPlayEnd,this.startTime>=this.duration&&(this.startTime=0),this._startTime=N.now(),this.gain.gain.setTargetAtTime?this.gain.gain.setTargetAtTime(this._volume,this.context.currentTime,.1):this.gain.gain.value=this._volume,0==this.loops&&(i.loop=!0),i.playbackRate.setTargetAtTime?i.playbackRate.setTargetAtTime(E.playbackRate,this.context.currentTime,.1):i.playbackRate.value=E.playbackRate,i.start(0,this.startTime),this._currentTime=0}},n.__onPlayEnd=function(){if(1==this.loops)return this.completeHandler&&(i.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},n._clearBufferSource=function(){if(this.bufferSource){var t=this.bufferSource;t.stop?t.stop(0):t.noteOff(0),t.disconnect(0),t.onended=null,e._tryCleanFailed||this._tryClearBuffer(t),this.bufferSource=null}},n._tryClearBuffer=function(t){if(N.onMac)try{t.buffer=st._miniBuffer}catch(t){e._tryCleanFailed=!0}else try{t.buffer=null}catch(t){e._tryCleanFailed=!0}},n.stop=function(){this._clearBufferSource(),this.audioBuffer=null,this.gain&&this.gain.disconnect(),this.isStopped=!0,E.removeChannel(this),this.completeHandler=null,E.autoReleaseSound&&i.timer.once(5e3,null,E.disposeSoundIfNotUsed,[this.url],!1)},n.pause=function(){this.isStopped||(this._pauseTime=this.position),this._clearBufferSource(),this.gain&&this.gain.disconnect(),this.isStopped=!0,E.removeChannel(this),E.autoReleaseSound&&i.timer.once(5e3,null,E.disposeSoundIfNotUsed,[this.url],!1)},n.resume=function(){this.startTime=this._pauseTime,this.play()},r(0,n,"position",function(){return this.bufferSource?(N.now()-this._startTime)/1e3+this.startTime:0}),r(0,n,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),r(0,n,"volume",function(){return this._volume},function(t){this.isStopped||(this._volume=t,this.gain.gain.setTargetAtTime?this.gain.gain.setTargetAtTime(t,this.context.currentTime,.1):this.gain.gain.value=t)}),e._tryCleanFailed=!1,e}(),ft=function(t){function e(){e.__super.call(this),this._w=0,this._h=0}s(e,"laya.resource.Bitmap",ht);var i=e.prototype;return r(0,i,"width",function(){return this._w}),r(0,i,"height",function(){return this._h}),r(0,i,"source",function(){return this._source}),e}(),pt=function(t){function e(){this.loop=!1,this.wrapMode=0,this._index=0,this._count=0,this._isPlaying=!1,this._labels=null,this._isReverse=!1,this._frameRateChanged=!1,this._controlNode=null,this._actionName=null,e.__super.call(this),this._interval=a.animationInterval,this._setUpNoticeType(1)}s(e,"laya.display.AnimationPlayerBase",t);var i=e.prototype;return i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this.interval>0&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},i._getFrameByLabel=function(t){var e=0;for(e=0;e<this._count;e++)if(this._labels[e]&&this._labels[e].indexOf(t)>=0)return e;return 0},i._frameLoop=function(){if(this._isReverse){if(this._index--,this._index<0){if(!this.loop)return this._index=0,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=this._count>0?1:0,this._isReverse=!1):this._index=this._count-1,this.event("complete")}}else if(this._index++,this._index>=this._count){if(!this.loop)return this._index--,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=this._count-2>=0?this._count-2:0,this._isReverse=!0):this._index=0,this.event("complete")}this.index=this._index},i._setControlNode=function(t){this._controlNode&&(this._controlNode.off("display",this,this._checkResumePlaying),this._controlNode.off("undisplay",this,this._checkResumePlaying)),this._controlNode=t,t&&t!=this&&(t.on("display",this,this._checkResumePlaying),t.on("undisplay",this,this._checkResumePlaying))},i._setDisplay=function(e){t.prototype._setDisplay.call(this,e),this._checkResumePlaying()},i._checkResumePlaying=function(){this._isPlaying&&(this._controlNode.displayedInStage?this.play(this._index,this.loop,this._actionName):this.clearTimer(this,this._frameLoop))},i.stop=function(){this._isPlaying=!1,this.clearTimer(this,this._frameLoop)},i.addLabel=function(t,e){this._labels||(this._labels={}),this._labels[e]||(this._labels[e]=[]),this._labels[e].push(t)},i.removeLabel=function(t){if(t){if(this._labels)for(var e in this._labels)this._removeLabelFromLabelList(this._labels[e],t)}else this._labels=null},i._removeLabelFromLabelList=function(t,e){if(t)for(var i=t.length-1;i>=0;i--)t[i]==e&&t.splice(i,1)},i.gotoAndStop=function(t){this.index="string"==typeof t?this._getFrameByLabel(t):t,this.stop()},i._displayToIndex=function(t){},i.clear=function(){this.stop(),this._labels=null},r(0,i,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._frameRateChanged=!0,this._interval=t,this._isPlaying&&t>0&&this.timerLoop(t,this,this._frameLoop,null,!0,!0))}),r(0,i,"isPlaying",function(){return this._isPlaying}),r(0,i,"index",function(){return this._index},function(t){if(this._index=t,this._displayToIndex(t),this._labels&&this._labels[t])for(var e=this._labels[t],i=0,n=e.length;i<n;i++)this.event("label",e[i])}),r(0,i,"count",function(){return this._count}),e.WRAP_POSITIVE=0,e.WRAP_REVERSE=1,e.WRAP_PINGPONG=2,e}(ct),gt=function(t){function e(){this._clipPoint=null,this._currBitmapFont=null,this._text=null,this._isChanged=!1,this._textWidth=0,this._textHeight=0,this._lines=[],this._lineWidths=[],this._startX=NaN,this._startY=NaN,this._lastVisibleLineIndex=-1,this._words=null,this._charSize={},this.underline=!1,this._underlineColor=null,e.__super.call(this),this.overflow=e.VISIBLE,this._style=new tt(this),this._style.wordWrap=!1}s(e,"laya.display.Text",t);var o=e.prototype;return o.destroy=function(e){void 0===e&&(e=!0),t.prototype.destroy.call(this,e),this._lines=null,this._words&&(this._words.length=0,this._words=null)},o._getBoundPointsM=function(t){void 0===t&&(t=!1);var e=P.TEMP;return e.setTo(0,0,this.width,this.height),e._getBoundPoints()},o.getGraphicBounds=function(t){void 0===t&&(t=!1);var e=P.TEMP;return e.setTo(0,0,this.width,this.height),e},o._getCSSStyle=function(){return this._style},o.lang=function(t,i,n,s,r,o,a,h,l,u,c){if(t=e.langPacks&&e.langPacks[t]?e.langPacks[t]:t,arguments.length<2)this._text=t;else{for(var _=0,d=arguments.length;_<d;_++)t=t.replace("{"+_+"}",arguments[_+1]);this._text=t}},o._isPassWordMode=function(){var t=this._style.password;return"prompt"in this&&this.prompt==this._text&&(t=!1),t},o._getPassWordTxt=function(t){var e;e="";for(var i=t.length;i>0;i--)e+="●";return e},o.renderText=function(t,e){var i=this.graphics;i.clear(!0);var n=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+(N.onIPhone?laya.display.Text._fontFamilyMap[this.font]||this.font:this.font);N.context.font=n;var s=this.padding,r=s[3],o="left",a=this._lines,h=this.leading+this._charSize.height,l=this._currBitmapFont;l&&(h=this.leading+l.getMaxHeight());var u=s[0];if(!l&&this._width>0&&this._textWidth<=this._width&&("right"==this.align?(o="right",r=this._width-s[1]):"center"==this.align&&(o="center",r=.5*this._width+s[3]-s[1])),this._height>0){var c=this._textHeight>this._height?"top":this.valign;"middle"===c?u=.5*(this._height-e*h)+s[0]-s[2]:"bottom"===c&&(u=this._height-e*h-s[2])}var _=this._style;if(l&&l.autoScaleSize)var d=l.fontSize/this.fontSize;if(this._clipPoint)if(i.save(),l&&l.autoScaleSize){var f=0,p=0;f=this._width?this._width-s[3]-s[1]:this._textWidth,p=this._height?this._height-s[0]-s[2]:this._textHeight,f*=d,p*=d,i.clipRect(s[3],s[0],f,p)}else i.clipRect(s[3],s[0],this._width?this._width-s[3]-s[1]:this._textWidth,this._height?this._height-s[0]-s[2]:this._textHeight);var g=_.password;"prompt"in this&&this.prompt==this._text&&(g=!1);for(var m=0,v=0,y=Math.min(this._lines.length,e+t)||1,w=t;w<y;w++){var x,T=a[w];if(g){var b=T.length;T="";for(var C=b;C>0;C--)T+="●"}if(m=r-(this._clipPoint?this._clipPoint.x:0),v=u+h*w-(this._clipPoint?this._clipPoint.y:0),this.underline&&this.drawUnderline(o,m,v,w),l){var M=this.width;l.autoScaleSize&&(M=this.width*d),l.drawText(T,this,m,v,this.align,M)}else R.isWebGL?(this._words||(this._words=[]),(x=this._words.length>w-t?this._words[w-t]:new J).setText(T)):x=T,_.stroke?i.fillBorderText(x,m,v,n,this.color,_.strokeColor,_.stroke,o):i.fillText(x,m,v,n,this.color,o)}if(l&&l.autoScaleSize){var S=1/d;this.scale(S,S)}this._clipPoint&&i.restore(),this._startX=r,this._startY=u},o.drawUnderline=function(t,e,i,n){var s=this._lineWidths[n];switch(t){case"center":e-=s/2;break;case"right":e-=s}i+=this._charSize.height,this._graphics.drawLine(e,i,e+s,i,this.underlineColor||this.color,1)},o.typeset=function(){if(this._isChanged=!1,!this._text)return this._clipPoint=null,this._textWidth=this._textHeight=0,void this.graphics.clear(!0);N.context.font=this._getCSSStyle().font,this._lines.length=0,this._lineWidths.length=0,this._isPassWordMode()?this.parseLines(this._getPassWordTxt(this._text)):this.parseLines(this._text),this.evalTextSize(),this.checkEnabledViewportOrNot()?this._clipPoint||(this._clipPoint=new S(0,0)):this._clipPoint=null;var t=this._lines.length;if(this.overflow!=e.VISIBLE){var i=this.overflow==e.HIDDEN?Math.floor:Math.ceil;t=Math.min(t,i((this.height-this.padding[0]-this.padding[2])/(this.leading+this._charSize.height)))}var n=this.scrollY/(this._charSize.height+this.leading)|0;this.renderText(n,t),this.repaint()},o.evalTextSize=function(){var t=NaN,e=NaN;t=Math.max.apply(this,this._lineWidths),e=this._currBitmapFont?this._lines.length*(this._currBitmapFont.getMaxHeight()+this.leading)+this.padding[0]+this.padding[2]:this._lines.length*(this._charSize.height+this.leading)+this.padding[0]+this.padding[2],t==this._textWidth&&e==this._textHeight||(this._textWidth=t,this._textHeight=e,this._width&&this._height||this.conchModel&&this.conchModel.size(this._width||this._textWidth,this._height||this._textHeight))},o.checkEnabledViewportOrNot=function(){return this.overflow==e.SCROLL&&(this._width>0&&this._textWidth>this._width||this._height>0&&this._textHeight>this._height)},o.changeText=function(t){this._text!==t&&(this.lang(t+""),this._graphics&&this._graphics.replaceText(this._text)||this.typeset())},o.parseLines=function(t){var i=this.wordWrap||this.overflow==e.HIDDEN;if(i)var n=this.getWordWrapWidth();if(this._currBitmapFont)this._charSize.width=this._currBitmapFont.getMaxWidth(),this._charSize.height=this._currBitmapFont.getMaxHeight();else{var s=N.context.measureText(e._testWord);this._charSize.width=s.width,this._charSize.height=s.height||this.fontSize}for(var r=t.replace(/\r\n/g,"\n").split("\n"),o=0,a=r.length;o<a;o++){var h=r[o];i?this.parseLine(h,n):(this._lineWidths.push(this.getTextWidth(h)),this._lines.push(h))}},o.parseLine=function(t,i){N.context;var n,s=this._lines,r=0,o=NaN,a=NaN,h=0;if((o=this.getTextWidth(t))<=i)return s.push(t),void this._lineWidths.push(o);o=this._charSize.width,0==(r=Math.floor(i/o))&&(r=1),a=o=this.getTextWidth(t.substring(0,r));for(var l=r,u=t.length;l<u;l++)if(o=this.getTextWidth(t.charAt(l)),(a+=o)>i)if(this.wordWrap){var c=t.substring(h,l);if(c.charCodeAt(c.length-1)<255?(n=/(?:\w|-)+$/.exec(c))&&(l=n.index+h,0==n.index?l+=c.length:c=t.substring(h,l)):e.RightToLeft&&(n=/([\u0600-\u06FF])+$/.exec(c))&&(l=n.index+h,0==n.index?l+=c.length:c=t.substring(h,l)),s.push(c),this._lineWidths.push(a-o),h=l,!(l+r<u)){s.push(t.substring(h,u)),this._lineWidths.push(this.getTextWidth(s[s.length-1])),h=-1;break}l+=r,a=o=this.getTextWidth(t.substring(h,l)),l--}else if(this.overflow==e.HIDDEN)return s.push(t.substring(0,l)),void this._lineWidths.push(this.getTextWidth(s[s.length-1]));this.wordWrap&&-1!=h&&(s.push(t.substring(h,u)),this._lineWidths.push(this.getTextWidth(s[s.length-1])))},o.getTextWidth=function(t){return this._currBitmapFont?this._currBitmapFont.getTextWidth(t):N.context.measureText(t).width},o.getWordWrapWidth=function(){var t=this.padding,e=NaN;return(e=this._currBitmapFont&&this._currBitmapFont.autoScaleSize?this._width*(this._currBitmapFont.fontSize/this.fontSize):this._width)<=0&&(e=this.wordWrap?100:N.width),e<=0&&(e=100),e-t[3]-t[1]},o.getCharPoint=function(t,e){this._isChanged&&i.timer.runCallLater(this,this.typeset);for(var n=0,s=this._lines,r=0,o=0,a=s.length;o<a;o++){if(n+=s[o].length,t<n){var h=o;break}r=n}var l=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+this.font;N.context.font=l;var u=this.getTextWidth(this._text.substring(r,t));return(e||new S).setTo(this._startX+u-(this._clipPoint?this._clipPoint.x:0),this._startY+h*(this._charSize.height+this.leading)-(this._clipPoint?this._clipPoint.y:0))},r(0,o,"width",function(){return this._width?this._width:this.textWidth+this.padding[1]+this.padding[3]},function(t){t!=this._width&&(i.superSet(ct,this,"width",t),this.isChanged=!0)}),r(0,o,"textWidth",function(){return this._isChanged&&i.timer.runCallLater(this,this.typeset),this._textWidth}),r(0,o,"height",function(){return this._height?this._height:this.textHeight+this.padding[0]+this.padding[2]},function(t){t!=this._height&&(i.superSet(ct,this,"height",t),this.isChanged=!0)}),r(0,o,"textHeight",function(){return this._isChanged&&i.timer.runCallLater(this,this.typeset),this._textHeight}),r(0,o,"padding",function(){return this._getCSSStyle().padding},function(t){this._getCSSStyle().padding=t,this.isChanged=!0}),r(0,o,"bold",function(){return this._getCSSStyle().bold},function(t){this._getCSSStyle().bold=t,this.isChanged=!0}),r(0,o,"text",function(){return this._text||""},function(t){this._text!==t&&(this.lang(t+""),this.isChanged=!0,this.event("change"))}),r(0,o,"color",function(){return this._getCSSStyle().color},function(t){this._getCSSStyle().color!=t&&(this._getCSSStyle().color=t,!this._isChanged&&this._graphics?this._graphics.replaceTextColor(this.color):this.isChanged=!0)}),r(0,o,"font",function(){return this._getCSSStyle().fontFamily},function(t){this._currBitmapFont&&(this._currBitmapFont=null,this.scale(1,1)),e._bitmapFonts&&e._bitmapFonts[t]&&(this._currBitmapFont=e._bitmapFonts[t]),this._getCSSStyle().fontFamily=t,this.isChanged=!0}),r(0,o,"fontSize",function(){return this._getCSSStyle().fontSize},function(t){this._getCSSStyle().fontSize=t,this.isChanged=!0}),r(0,o,"italic",function(){return this._getCSSStyle().italic},function(t){this._getCSSStyle().italic=t,this.isChanged=!0}),r(0,o,"align",function(){return this._getCSSStyle().align},function(t){this._getCSSStyle().align=t,this.isChanged=!0}),r(0,o,"valign",function(){return this._getCSSStyle().valign},function(t){this._getCSSStyle().valign=t,this.isChanged=!0}),r(0,o,"wordWrap",function(){return this._getCSSStyle().wordWrap},function(t){this._getCSSStyle().wordWrap=t,this.isChanged=!0}),r(0,o,"leading",function(){return this._getCSSStyle().leading},function(t){this._getCSSStyle().leading=t,this.isChanged=!0}),r(0,o,"bgColor",function(){return this._getCSSStyle().backgroundColor},function(t){this._getCSSStyle().backgroundColor=t,this.isChanged=!0}),r(0,o,"borderColor",function(){return this._getCSSStyle().borderColor},function(t){this._getCSSStyle().borderColor=t,this.isChanged=!0}),r(0,o,"stroke",function(){return this._getCSSStyle().stroke},function(t){this._getCSSStyle().stroke=t,this.isChanged=!0}),r(0,o,"strokeColor",function(){return this._getCSSStyle().strokeColor},function(t){this._getCSSStyle().strokeColor=t,this.isChanged=!0}),r(0,o,"isChanged",null,function(t){this._isChanged!==t&&(this._isChanged=t,t&&i.timer.callLater(this,this.typeset))}),r(0,o,"scrollX",function(){return this._clipPoint?this._clipPoint.x:0},function(t){if(!(this.overflow!=e.SCROLL||this.textWidth<this._width)&&this._clipPoint){t=t<this.padding[3]?this.padding[3]:t;var i=this._textWidth-this._width;t=t>i?i:t;var n=this._height/(this._charSize.height+this.leading)|1;this._clipPoint.x=t,this.renderText(this._lastVisibleLineIndex,n)}}),r(0,o,"scrollY",function(){return this._clipPoint?this._clipPoint.y:0},function(t){if(!(this.overflow!=e.SCROLL||this.textHeight<this._height)&&this._clipPoint){t=t<this.padding[0]?this.padding[0]:t;var i=this._textHeight-this._height,n=(t=t>i?i:t)/(this._charSize.height+this.leading)|0;this._lastVisibleLineIndex=n;var s=1+(this._height/(this._charSize.height+this.leading)|0);this._clipPoint.y=t,this.renderText(n,s)}}),r(0,o,"maxScrollX",function(){return this.textWidth<this._width?0:this._textWidth-this._width}),r(0,o,"maxScrollY",function(){return this.textHeight<this._height?0:this._textHeight-this._height}),r(0,o,"lines",function(){return this._isChanged&&this.typeset(),this._lines}),r(0,o,"underlineColor",function(){return this._underlineColor},function(t){this._underlineColor=t,this._isChanged=!0,this.typeset()}),e.registerBitmapFont=function(t,i){e._bitmapFonts||(e._bitmapFonts={}),e._bitmapFonts[t]=i},e.unregisterBitmapFont=function(t,i){if(void 0===i&&(i=!0),e._bitmapFonts&&e._bitmapFonts[t]){var n=e._bitmapFonts[t];i&&n.destroy(),delete e._bitmapFonts[t]}},e.setTextRightToLeft=function(){var t;(t=N.canvas.source.style).display="none",t.position="absolute",t.direction="rtl",R._mainCanvas.source.style.direction="rtl",laya.display.Text.RightToLeft=!0,N.document.body.appendChild(N.canvas.source)},e.supportFont=function(t){N.context.font="10px sans-serif";var e=N.context.measureText("abcji").width;N.context.font="10px "+t;var i=N.context.measureText("abcji").width;return console.log(e,i),e!==i},e._testWord="游",e.langPacks=null,e.VISIBLE="visible",e.SCROLL="scroll",e.HIDDEN="hidden",e.CharacterCache=!0,e.RightToLeft=!1,e._bitmapFonts=null,n(e,["_fontFamilyMap",function(){return this._fontFamilyMap={"报隶":"报隶-简","黑体":"黑体-简","楷体":"楷体-简","兰亭黑":"兰亭黑-简","隶变":"隶变-简","凌慧体":"凌慧体-简","翩翩体":"翩翩体-简","苹方":"苹方-简","手札体":"手札体-简","宋体":"宋体-简","娃娃体":"娃娃体-简","魏碑":"魏碑-简","行楷":"行楷-简","雅痞":"雅痞-简","圆体":"圆体-简"}}]),e}(ct),mt=function(t){function e(){this.focus=null,this.designWidth=0,this.designHeight=0,this.canvasRotation=!1,this.canvasDegree=0,this.renderingEnabled=!0,this.screenAdaptationEnabled=!0,this._screenMode="none",this._scaleMode="noscale",this._alignV="top",this._alignH="left",this._bgColor="black",this._mouseMoveTime=0,this._renderCount=0,this._frameStartTime=NaN,this._isFocused=!1,this._isVisibility=!1,this._scenes=null,this._frameRate="fast",e.__super.call(this),this.offset=new S,this._canvasTransform=new M,this._previousOrientation=N.window.orientation;var t=this;this.transform=M.create(),this._scenes=[],this.mouseEnabled=!0,this.hitTestPrior=!0,this.autoSize=!1,this._displayedInStage=!0,this._isFocused=!0,this._isVisibility=!0;var i=N.window,n=this;i.addEventListener("focus",function(){t._isFocused=!0,n.event("focus"),n.event("focuschange")}),i.addEventListener("blur",function(){t._isFocused=!1,n.event("blur"),n.event("focuschange"),n._isInputting()&&(xt.inputElement.target.focus=!1)});var s="visibilityState",r="visibilitychange",o=i.document;void 0!==o.hidden?(r="visibilitychange",s="visibilityState"):void 0!==o.mozHidden?(r="mozvisibilitychange",s="mozVisibilityState"):void 0!==o.msHidden?(r="msvisibilitychange",s="msVisibilityState"):void 0!==o.webkitHidden&&(r="webkitvisibilitychange",s="webkitVisibilityState"),i.document.addEventListener(r,function(){"hidden"==N.document[s]?n._setStageVisible(!1):n._setStageVisible(!0)}),i.document.addEventListener("qbrowserVisibilityChange",function(t){n._setStageVisible(!t.hidden)}),i.addEventListener("resize",function(){var e=N.window.orientation;null!=e&&e!=t._previousOrientation&&n._isInputting()&&(xt.inputElement.target.focus=!1),t._previousOrientation=e,n._isInputting()||n._resetCanvas()}),i.addEventListener("orientationchange",function(t){n._resetCanvas()}),this.on("mousemove",this,this._onmouseMove),N.onMobile&&this.on("mousedown",this,this._onmouseMove)}s(e,"laya.display.Stage",t);var a=e.prototype;return a._setStageVisible=function(t){this._isVisibility!=t&&(this._isVisibility=t,this._isVisibility||this._isInputting()&&(xt.inputElement.target.focus=!1),this.event("visibilitychange"))},a._isInputting=function(){return N.onMobile&&xt.isInputting},a._changeCanvasSize=function(){this.setScreenSize(N.clientWidth*N.pixelRatio,N.clientHeight*N.pixelRatio)},a._resetCanvas=function(){if(this.screenAdaptationEnabled){var t=R._mainCanvas;t.source.style;t.size(1,1),i.timer.once(100,this,this._changeCanvasSize)}},a.setScreenSize=function(t,e){var i=!1;if("none"!==this._screenMode){if(i=(t/e<1?"vertical":"horizontal")!==this._screenMode){var n=e;e=t,t=n}}this.canvasRotation=i;var s=R._mainCanvas,r=s.source.style,a=this._canvasTransform.identity(),h=this._scaleMode,l=t/this.designWidth,u=e/this.designHeight,c=this.designWidth,_=this.designHeight,d=t,f=e,p=N.pixelRatio;switch(this._width=this.designWidth,this._height=this.designHeight,h){case"noscale":l=u=1,d=this.designWidth,f=this.designHeight;break;case"showall":l=u=Math.min(l,u),c=d=Math.round(this.designWidth*l),_=f=Math.round(this.designHeight*u);break;case"noborder":l=u=Math.max(l,u),d=Math.round(this.designWidth*l),f=Math.round(this.designHeight*u);break;case"full":l=u=1,this._width=c=t,this._height=_=e;break;case"fixedwidth":u=l,this._height=_=Math.round(e/l);break;case"fixedheight":l=u,this._width=c=Math.round(t/u);break;case"fixedauto":t/e<this.designWidth/this.designHeight?(u=l,this._height=_=Math.round(e/l)):(l=u,this._width=c=Math.round(t/u))}this.conchModel&&this.conchModel.size(this._width,this._height),l*=this.scaleX,u*=this.scaleY,1===l&&1===u?this.transform.identity():(this.transform.a=this._formatData(l/(d/c)),this.transform.d=this._formatData(u/(f/_)),this.conchModel&&this.conchModel.scale(this.transform.a,this.transform.d)),s.size(c,_),o.changeWebGLSize(c,_),a.scale(d/c/p,f/_/p),"left"===this._alignH?this.offset.x=0:"right"===this._alignH?this.offset.x=(t-d)/p:this.offset.x=.5*(t-d)/p,"top"===this._alignV?this.offset.y=0:"bottom"===this._alignV?this.offset.y=(e-f)/p:this.offset.y=.5*(e-f)/p,this.offset.x=Math.round(this.offset.x),this.offset.y=Math.round(this.offset.y),a.translate(this.offset.x,this.offset.y),this.canvasDegree=0,i&&("horizontal"===this._screenMode?(a.rotate(Math.PI/2),a.translate(e/p,0),this.canvasDegree=90):(a.rotate(-Math.PI/2),a.translate(0,t/p),this.canvasDegree=-90)),a.a=this._formatData(a.a),a.d=this._formatData(a.d),a.tx=this._formatData(a.tx),a.ty=this._formatData(a.ty),r.transformOrigin=r.webkitTransformOrigin=r.msTransformOrigin=r.mozTransformOrigin=r.oTransformOrigin="0px 0px 0px",r.transform=r.webkitTransform=r.msTransform=r.mozTransform=r.oTransform="matrix("+a.toString()+")",a.translate(parseInt(r.left)||0,parseInt(r.top)||0),this.visible=!0,this._repaint=1,this.event("resize")},a._formatData=function(t){return Math.abs(t)<1e-6?0:Math.abs(1-t)<.001?t>0?1:-1:t},a.getMousePoint=function(){return S.TEMP.setTo(this.mouseX,this.mouseY)},a.repaint=function(){this._repaint=1},a.parentRepaint=function(){},a._loop=function(){return this.render(R.context,0,0),!0},a._onmouseMove=function(t){this._mouseMoveTime=N.now()},a.getTimeFromFrameStart=function(){return N.now()-this._frameStartTime},a.render=function(e,n,s){if("sleep"===this._frameRate&&!R.isConchApp){var r=N.now();if(!(r-this._frameStartTime>=1e3))return;this._frameStartTime=r}if(this._renderCount++,R.isFlash&&this.repaint(),this._style.visible){this._frameStartTime=N.now();var a="slow"!==("mouse"===this._frameRate?this._frameStartTime-this._mouseMoveTime<2e3?"fast":"slow":this._frameRate),h=this._renderCount%2==0;if($.renderSlow=!a,a||h||R.isConchApp){$.loopCount++,v.instance.runEvent(),i.timer._update(),o.update3DLoop();var l,u=0,c=0;if(R.isConchNode)for(u=0,c=this._scenes.length;u<c;u++)(l=this._scenes[u])&&l._updateSceneConch();else for(u=0,c=this._scenes.length;u<c;u++)(l=this._scenes[u])&&l._updateScene();if(R.isConchNode){var _=ct.CustomList;for(u=0,c=_.length;u<c;u++){var d=_[u];d.customRender(d.customContext,0,0)}return}}R.isConchNode||!this.renderingEnabled||!a&&h||(R.isWebGL?(e.clear(),t.prototype.render.call(this,e,n,s),$._show&&$._sp&&$._sp.render(e,n,s),o.clear(this._bgColor),o.beginFlush(),e.flush(),o.endFinish(),q.instance&&q.getInstance().endDispose()):(o.clear(this._bgColor),t.prototype.render.call(this,e,n,s),$._show&&$._sp&&$._sp.render(e,n,s)))}else this._renderCount%5==0&&($.loopCount++,v.instance.runEvent(),i.timer._update())},a._requestFullscreen=function(){var t=N.document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},a._fullScreenChanged=function(){i.stage.event("fullscreenchange")},a.exitFullscreen=function(){var t=N.document;t.exitFullscreen?t.exitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()},r(0,a,"clientScaleX",function(){return this._transform?this._transform.getScaleX():1}),r(0,a,"desginHeight",function(){return console.debug("desginHeight已经弃用，请使用designHeight代替"),this.designHeight}),r(0,a,"frameRate",function(){return this._frameRate},function(t){if(this._frameRate=t,R.isConchApp)switch(this._frameRate){case"slow":N.window.conch&&N.window.conchConfig.setSlowFrame&&N.window.conchConfig.setSlowFrame(!0);break;case"fast":N.window.conch&&N.window.conchConfig.setSlowFrame&&N.window.conchConfig.setSlowFrame(!1);break;case"mouse":N.window.conch&&N.window.conchConfig.setMouseFrame&&N.window.conchConfig.setMouseFrame(2e3);break;case"sleep":N.window.conch&&N.window.conchConfig.setLimitFPS&&N.window.conchConfig.setLimitFPS(1);break;default:throw new Error("Stage:frameRate invalid.")}}),r(0,a,"clientScaleY",function(){return this._transform?this._transform.getScaleY():1}),r(0,a,"width",t.prototype._$get_width,function(t){this.designWidth=t,i.superSet(ct,this,"width",t),i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"alignH",function(){return this._alignH},function(t){this._alignH=t,i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"isFocused",function(){return this._isFocused}),r(0,a,"height",t.prototype._$get_height,function(t){this.designHeight=t,i.superSet(ct,this,"height",t),i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"transform",function(){return this._tfChanged&&this._adjustTransform(),this._transform=this._transform||M.create()},t.prototype._$set_transform),r(0,a,"isVisibility",function(){return this._isVisibility}),r(0,a,"desginWidth",function(){return console.debug("desginWidth已经弃用，请使用designWidth代替"),this.designWidth}),r(0,a,"scaleMode",function(){return this._scaleMode},function(t){this._scaleMode=t,i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"alignV",function(){return this._alignV},function(t){this._alignV=t,i.timer.callLater(this,this._changeCanvasSize)}),r(0,a,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this.conchModel&&this.conchModel.bgColor(t),R.isWebGL&&(t?e._wgColor=U.create(t)._color:N.onMiniGame||(e._wgColor=null)),N.onLimixiu?e._wgColor=U.create(t)._color:R.canvas.style.background=t||"none"}),r(0,a,"mouseX",function(){return Math.round(v.instance.mouseX/this.clientScaleX)}),r(0,a,"mouseY",function(){return Math.round(v.instance.mouseY/this.clientScaleY)}),r(0,a,"screenMode",function(){return this._screenMode},function(t){this._screenMode=t}),r(0,a,"visible",t.prototype._$get_visible,function(t){if(this.visible!==t){i.superSet(ct,this,"visible",t);R._mainCanvas.source.style.visibility=t?"visible":"hidden"}}),r(0,a,"fullScreenEnabled",null,function(t){var e=N.document,i=R.canvas;t?(i.addEventListener("mousedown",this._requestFullscreen),i.addEventListener("touchstart",this._requestFullscreen),e.addEventListener("fullscreenchange",this._fullScreenChanged),e.addEventListener("mozfullscreenchange",this._fullScreenChanged),e.addEventListener("webkitfullscreenchange",this._fullScreenChanged),e.addEventListener("msfullscreenchange",this._fullScreenChanged)):(i.removeEventListener("mousedown",this._requestFullscreen),i.removeEventListener("touchstart",this._requestFullscreen),e.removeEventListener("fullscreenchange",this._fullScreenChanged),e.removeEventListener("mozfullscreenchange",this._fullScreenChanged),e.removeEventListener("webkitfullscreenchange",this._fullScreenChanged),e.removeEventListener("msfullscreenchange",this._fullScreenChanged))}),e.SCALE_NOSCALE="noscale",e.SCALE_EXACTFIT="exactfit",e.SCALE_SHOWALL="showall",e.SCALE_NOBORDER="noborder",e.SCALE_FULL="full",e.SCALE_FIXED_WIDTH="fixedwidth",e.SCALE_FIXED_HEIGHT="fixedheight",e.SCALE_FIXED_AUTO="fixedauto",e.ALIGN_LEFT="left",e.ALIGN_RIGHT="right",e.ALIGN_CENTER="center",e.ALIGN_TOP="top",e.ALIGN_MIDDLE="middle",e.ALIGN_BOTTOM="bottom",e.SCREEN_NONE="none",e.SCREEN_HORIZONTAL="horizontal",e.SCREEN_VERTICAL="vertical",e.FRAME_FAST="fast",e.FRAME_SLOW="slow",e.FRAME_MOUSE="mouse",e.FRAME_SLEEP="sleep",e.FRAME_MOUSE_THREDHOLD=2e3,n(e,["_wgColor",function(){return this._wgColor=[0,0,0,1]}]),e}(ct),vt=(function(t){function e(){this.url=null,this._channel=null,this._tar=null,this._playEvents=null,this._stopEvents=null,e.__super.call(this),this.visible=!1,this.on("added",this,this._onParentChange),this.on("removed",this,this._onParentChange)}s(e,"laya.media.SoundNode",ct);var i=e.prototype;i._onParentChange=function(){this.target=this.parent},i.play=function(t,e){void 0===t&&(t=1),isNaN(t)&&(t=1),this.url&&(this.stop(),this._channel=E.playSound(this.url,t,e))},i.stop=function(){this._channel&&!this._channel.isStopped&&this._channel.stop(),this._channel=null},i._setPlayAction=function(t,e,i,n){void 0===n&&(n=!0),this[i]&&t&&(n?t.on(e,this,this[i]):t.off(e,this,this[i]))},i._setPlayActions=function(t,e,i,n){if(void 0===n&&(n=!0),t&&e){var s=e.split(","),r=0,o=0;for(o=s.length,r=0;r<o;r++)this._setPlayAction(t,s[r],i,n)}},r(0,i,"playEvent",null,function(t){this._playEvents=t,t&&this._tar&&this._setPlayActions(this._tar,t,"play")}),r(0,i,"target",null,function(t){this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!1),this._setPlayActions(this._tar,this._stopEvents,"stop",!1)),this._tar=t,this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!0),this._setPlayActions(this._tar,this._stopEvents,"stop",!0))}),r(0,i,"stopEvent",null,function(t){this._stopEvents=t,t&&this._tar&&this._setPlayActions(this._tar,t,"stop")})}(),function(t){function e(){this._src=null,this._onload=null,this._onerror=null,e.__super.call(this)}s(e,"laya.resource.FileBitmap",ft);var i=e.prototype;return r(0,i,"src",function(){return this._src},function(t){this._src=t}),r(0,i,"onload",null,function(t){}),r(0,i,"onerror",null,function(t){}),e}()),yt=function(t){function e(t,i){this._is2D=!1,e.__super.call(this);var n=this;if(this._source=this,"2D"===t||"AUTO"===t&&!R.isWebGL){this._is2D=!0,this._source=i||N.createElement("canvas"),this._w=this._source.width,this._h=this._source.height;var s=this;s.getContext=function(t,e){if(n._ctx)return n._ctx;var i=n._ctx=n._source.getContext(t,e);return i&&(i._canvas=s,R.isFlash||N.onLimixiu||(i.size=function(t,e){})),i}}this.lock=!0}s(e,"laya.resource.HTMLCanvas",ft);var i=e.prototype;return i.clear=function(){this._ctx&&this._ctx.clear()},i.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null,laya.resource.Resource.prototype.destroy.call(this)},i.release=function(){},i._setContext=function(t){this._ctx=t},i.getContext=function(t,i){return this._ctx?this._ctx:this._ctx=e._createContext(this)},i.getMemSize=function(){return 0},i.size=function(t,e){(this._w!=t||this._h!=e||this._source&&(this._source.width!=t||this._source.height!=e))&&(this._w=t,this._h=e,this.memorySize=this._w*this._h*4,this._ctx&&this._ctx.size(t,e),this._source&&(this._source.height=e,this._source.width=t))},i.getCanvas=function(){return this._source},i.toBase64=function(t,e,i){if(this._source)if(R.isConchApp&&this._source.toBase64)this._source.toBase64(t,e,i);else{var n=this._source.toDataURL(t,e);i.call(this,n)}},r(0,i,"context",function(){return this._ctx}),r(0,i,"asBitmap",null,function(t){}),e.create=function(t,i){return new e(t,i)},e.TYPE2D="2D",e.TYPE3D="3D",e.TYPEAUTO="AUTO",e._createContext=null,e}(),wt=(function(t){function e(t,i,n,s,r,o,a,h){throw e.__super.call(this),new Error("不允许new！")}s(e,"laya.resource.HTMLSubImage",ft),e.create=function(t,i,n,s,r,o,a,h){return void 0===h&&(h=!1),new e(t,i,n,s,r,o,a,h)}}(),function(t){function e(){this._frames=null,this._url=null,e.__super.call(this),this._setControlNode(this)}s(e,"laya.display.Animation",t);var n=e.prototype;n.destroy=function(t){void 0===t&&(t=!0),this.stop(),laya.display.Sprite.prototype.destroy.call(this,t),this._frames=null,this._labels=null},n.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),i&&this._setFramesFromCache(i,n),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this._frames&&this.interval>0&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},n._setFramesFromCache=function(t,i){if(void 0===i&&(i=!1),this._url&&(t=this._url+"#"+t),t&&e.framesMap[t]){var n;return(n=e.framesMap[t])instanceof Array?(this._frames=e.framesMap[t],this._count=this._frames.length):(n.nodeRoot&&(e.framesMap[t]=this._parseGraphicAnimationByData(n),n=e.framesMap[t]),this._frames=n.frames,this._count=this._frames.length,this._frameRateChanged||(this._interval=n.interval),this._labels=this._copyLabels(n.labels)),!0}return i&&console.log("ani not found:",t),!1},n._copyLabels=function(t){if(!t)return null;var e;e={};var i;for(i in t)e[i]=K.copyArray([],t[i]);return e},n._frameLoop=function(){this._style.visible&&this._style.alpha>.01&&t.prototype._frameLoop.call(this)},n._displayToIndex=function(t){this._frames&&(this.graphics=this._frames[t])},n.clear=function(){this.stop(),this.graphics=null,this._frames=null,this._labels=null},n.loadImages=function(t,i){return void 0===i&&(i=""),this._url="",this._setFramesFromCache(i)||(this.frames=e.framesMap[i]?e.framesMap[i]:e.createFrames(t,i)),this},n.loadAtlas=function(t,n,s){function r(i){t===i&&(o.frames=e.framesMap[s]?e.framesMap[s]:e.createFrames(t,s),n&&n.run())}void 0===s&&(s=""),this._url="";var o=this;return o._setFramesFromCache(s)||(ot.getAtlas(t)?r(t):i.loader.load(t,l.create(null,r,[t]),null,"atlas")),this},n.loadAnimation=function(t,e,n){this._url=t;return this._actionName||(this._actionName=""),this._setFramesFromCache("")?(this._setFramesFromCache(this._actionName,!0),this.index=0,e&&e.run()):!n||ot.getAtlas(n)?this._loadAnimationData(t,e,n):i.loader.load(n,l.create(this,this._loadAnimationData,[t,e,n]),null,"atlas"),this},n._loadAnimationData=function(t,n,s){function r(i){if(ot.getRes(i)&&t===i){var s;if(e.framesMap[t+"#"])a._setFramesFromCache(o._actionName,!0),o.index=0,o._checkResumePlaying();else{var r=a._parseGraphicAnimation(ot.getRes(t));if(!r)return;var h,l=r.animationList,u=0,c=l.length;for(u=0;u<c;u++)s=l[u],e.framesMap[t+"#"+s.name]=s,h||(h=s);h&&(e.framesMap[t+"#"]=h,a._setFramesFromCache(o._actionName,!0),o.index=0),o._checkResumePlaying()}n&&n.run()}}var o=this;if(!s||ot.getAtlas(s)){var a=this;ot.getRes(t)?r(t):i.loader.load(t,l.create(null,r,[t]),null,"json"),ot.clearRes(t)}else console.warn("atlas load fail:"+s)},n._parseGraphicAnimation=function(t){return bt.parseAnimationData(t)},n._parseGraphicAnimationByData=function(t){return bt.parseAnimationByData(t)},r(0,n,"frames",function(){return this._frames},function(t){this._frames=t,t&&(this._count=t.length,this._isPlaying?this.play(this._index,this.loop,this._actionName):this.index=this._index)}),r(0,n,"autoPlay",null,function(t){t?this.play():this.stop()}),r(0,n,"source",null,function(t){t.indexOf(".ani")>-1?this.loadAnimation(t):t.indexOf(".json")>-1||t.indexOf("als")>-1||t.indexOf("atlas")>-1?this.loadAtlas(t):this.loadImages(t.split(","))}),r(0,n,"autoAnimation",null,function(t){this.play(0,!0,t,!1)}),e.createFrames=function(t,i){var n,s,r=0,a=0;if("string"==typeof t){var h=ot.getAtlas(t);if(h&&h.length)for(n=[],r=0,a=h.length;r<a;r++)(s=new o.createGraphics).drawTexture(ot.getRes(h[r]),0,0),n.push(s)}else if(t instanceof Array)for(n=[],r=0,a=t.length;r<a;r++)(s=new o.createGraphics).loadImage(t[r],0,0),n.push(s);return i&&(e.framesMap[i]=n),n},e.clearCache=function(t){var i,n=e.framesMap,s=t+"#";for(i in n)i!==t&&0!=i.indexOf(s)||delete e.framesMap[i]},e.framesMap={}}(pt),function(t){function e(){this._targetDic=null,this._animationData=null,this._animationNewFrames=null,e.__super.call(this),null==e._sortIndexFun&&(e._sortIndexFun=C.sortByKey("index",!1,!0))}s(e,"laya.display.FrameAnimation",t);var i=e.prototype;return i._setUp=function(t,e){this._labels=null,this._animationNewFrames=null,this._targetDic=t,this._animationData=e,this.interval=1e3/e.frameRate,e.parsed?(this._count=e.count,this._labels=e.labels,this._animationNewFrames=e.animationNewFrames):(this._animationNewFrames=[],this._calculateDatas()),e.parsed=!0,e.labels=this._labels,e.count=this._count,e.animationNewFrames=this._animationNewFrames},i.clear=function(){t.prototype.clear.call(this),this._targetDic=null,this._animationData=null},i._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},i._displayNodeToFrame=function(t,e,i){i||(i=this._targetDic);var n=i[t.target];if(n){var s,r,o,a=t.frames,h=t.keys,l=0,u=h.length;for(l=0;l<u;l++)o=(r=a[s=h[l]]).length>e?r[e]:r[r.length-1],n[s]=o}},i._calculateDatas=function(){if(this._animationData){var t,e=this._animationData.nodes,i=0,n=e.length;for(this._count=0,i=0;i<n;i++)t=e[i],this._calculateNodeKeyFrames(t);this._count+=1}},i._calculateNodeKeyFrames=function(t){var i,n,s=t.keyframes,r=t.target;t.frames||(t.frames={}),t.keys?t.keys.length=0:t.keys=[],t.initValues||(t.initValues={});for(i in s)n=s[i],t.frames[i]||(t.frames[i]=[]),this._targetDic&&this._targetDic[r]&&(t.initValues[i]=this._targetDic[r][i]),n.sort(e._sortIndexFun),t.keys.push(i),this._calculateNodePropFrames(n,t.frames[i],i,r)},i.resetToInitState=function(){if(this._targetDic&&this._animationData){var t,e,i=this._animationData.nodes,n=0,s=i.length;for(n=0;n<s;n++)if(t=i[n],e=t.initValues){var r=this._targetDic[t.target];if(r){var o;for(o in e)r[o]=e[o]}}}},i._calculateNodePropFrames=function(t,e,i,n){var s=0,r=t.length-1;for(e.length=t[r].index+1,s=0;s<r;s++)this._dealKeyFrame(t[s]),this._calculateFrameValues(t[s],t[s+1],e);0==r&&(e[0]=t[0].value,this._animationNewFrames&&(this._animationNewFrames[t[0].index]=!0)),this._dealKeyFrame(t[s])},i._dealKeyFrame=function(t){t.label&&""!=t.label&&this.addLabel(t.label,t.index)},i._calculateFrameValues=function(t,e,i){var n,s=0,r=t.index,o=e.index,a=t.value,h=e.value-t.value,l=o-r;if(o>this._count&&(this._count=o),t.tween)for(null==(n=Y[t.tweenMethod])&&(n=Y.linearNone),s=r;s<o;s++)i[s]=n(s-r,a,h,l),this._animationNewFrames&&(this._animationNewFrames[s]=!0);else for(s=r;s<o;s++)i[s]=a;this._animationNewFrames&&(this._animationNewFrames[t.index]=!0,this._animationNewFrames[e.index]=!0),i[e.index]=e.value},e._sortIndexFun=null,e}(pt)),xt=function(t){function e(){this._focus=!1,this._multiline=!1,this._editable=!0,this._restrictPattern=null,this._type="text",this._prompt="",this._promptColor="#A9A9A9",this._originColor="#000000",this._content="",e.__super.call(this),this._maxChars=1e5,this._width=100,this._height=20,this.multiline=!1,this.overflow=gt.SCROLL,this.on("mousedown",this,this._onMouseDown),this.on("undisplay",this,this._onUnDisplay)}s(e,"laya.display.Input",t);var o=e.prototype;return o.setSelection=function(t,e){this.focus=!0,laya.display.Input.inputElement.selectionStart=t,laya.display.Input.inputElement.selectionEnd=e},o._onUnDisplay=function(t){this.focus=!1},o._onMouseDown=function(t){this.focus=!0},o._syncInputTransform=function(){var t=this.nativeInput,n=K.getTransformRelativeToWindow(this,this.padding[3],this.padding[0]),s=this._width-this.padding[1]-this.padding[3],r=this._height-this.padding[0]-this.padding[2];R.isConchApp?(t.setScale(n.scaleX,n.scaleY),t.setSize(s,r),t.setPos(n.x,n.y)):(e.inputContainer.style.transform=e.inputContainer.style.webkitTransform="scale("+n.scaleX+","+n.scaleY+") rotate("+i.stage.canvasDegree+"deg)",t.style.width=s+"px",t.style.height=r+"px",e.inputContainer.style.left=n.x+"px",e.inputContainer.style.top=n.y+"px")},o.select=function(){this.nativeInput.select()},o._setInputMethod=function(){e.input.parentElement&&e.inputContainer.removeChild(e.input),e.area.parentElement&&e.inputContainer.removeChild(e.area),e.inputElement=this._multiline?e.area:e.input,e.inputContainer.appendChild(e.inputElement),gt.RightToLeft&&(e.inputElement.style.direction="rtl")},o._focusIn=function(){laya.display.Input.isInputting=!0;var t=this.nativeInput;this._focus=!0;var e=t.style;e.whiteSpace=this.wordWrap?"pre-wrap":"nowrap",this._setPromptColor(),t.readOnly=!this._editable,R.isConchApp&&(t.setType(this._type),t.setForbidEdit(!this._editable)),t.maxLength=this._maxChars;this.padding;if(t.type=this._type,t.value=this._content,t.placeholder=this._prompt,i.stage.off("keydown",this,this._onKeyDown),i.stage.on("keydown",this,this._onKeyDown),i.stage.focus=this,this.event("focus"),N.onPC&&t.focus(),!N.onMiniGame){this._text;this._text=null}this.typeset(),t.setColor(this._originColor),t.setFontSize(this.fontSize),t.setFontFace(N.onIPhone?gt._fontFamilyMap[this.font]||this.font:this.font),R.isConchApp&&t.setMultiAble&&t.setMultiAble(this._multiline),e.lineHeight=this.leading+this.fontSize+"px",e.fontStyle=this.italic?"italic":"normal",e.fontWeight=this.bold?"bold":"normal",e.textAlign=this.align,e.padding="0 0",this._syncInputTransform(),!R.isConchApp&&N.onPC&&i.timer.frameLoop(1,this,this._syncInputTransform)},o._setPromptColor=function(){(e.promptStyleDOM=N.getElementById("promptStyle"))||((e.promptStyleDOM=N.createElement("style")).setAttribute("id","promptStyle"),N.document.head.appendChild(e.promptStyleDOM)),e.promptStyleDOM.innerText="input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:"+this._promptColor+"}input:-moz-placeholder, textarea:-moz-placeholder {color:"+this._promptColor+"}input::-moz-placeholder, textarea::-moz-placeholder {color:"+this._promptColor+"}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:"+this._promptColor+"}"},o._focusOut=function(){laya.display.Input.isInputting=!1,this._focus=!1,this._text=null,this._content=this.nativeInput.value,this._content?(i.superSet(gt,this,"text",this._content),i.superSet(gt,this,"color",this._originColor)):(i.superSet(gt,this,"text",this._prompt),i.superSet(gt,this,"color",this._promptColor)),i.stage.off("keydown",this,this._onKeyDown),i.stage.focus=null,this.event("blur"),R.isConchApp&&this.nativeInput.blur(),N.onPC&&i.timer.clear(this,this._syncInputTransform)},o._onKeyDown=function(t){13===t.keyCode&&(N.onMobile&&!this._multiline&&(this.focus=!1),this.event("enter"))},o.changeText=function(e){this._content=e,this._focus?(this.nativeInput.value=e||"",this.event("change")):t.prototype.changeText.call(this,e)},r(0,o,"color",t.prototype._$get_color,function(t){this._focus&&this.nativeInput.setColor(t),i.superSet(gt,this,"color",this._content?t:this._promptColor),this._originColor=t}),r(0,o,"inputElementYAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。")}),r(0,o,"multiline",function(){return this._multiline},function(t){this._multiline=t,this.valign=t?"top":"middle"}),r(0,o,"maxChars",function(){return this._maxChars},function(t){t<=0&&(t=1e5),this._maxChars=t}),r(0,o,"text",function(){return this._focus?this.nativeInput.value:this._content||""},function(t){i.superSet(gt,this,"color",this._originColor),t+="",this._focus?(this.nativeInput.value=t||"",this.event("change")):(this._multiline||(t=t.replace(/\r?\n/g,"")),this._content=t,t?i.superSet(gt,this,"text",t):(i.superSet(gt,this,"text",this._prompt),i.superSet(gt,this,"color",this.promptColor)))}),r(0,o,"nativeInput",function(){return this._multiline?e.area:e.input}),r(0,o,"prompt",function(){return this._prompt},function(t){!this._text&&t&&i.superSet(gt,this,"color",this._promptColor),this.promptColor=this._promptColor,this._text?i.superSet(gt,this,"text",this._text==this._prompt?t:this._text):i.superSet(gt,this,"text",t),this._prompt=gt.langPacks&&gt.langPacks[t]?gt.langPacks[t]:t}),r(0,o,"focus",function(){return this._focus},function(t){var i=this.nativeInput;this._focus!==t&&(t?(i.target?i.target._focusOut():this._setInputMethod(),i.target=this,this._focusIn()):(i.target=null,this._focusOut(),N.document.body.scrollTop=0,i.blur(),R.isConchApp?i.setPos(-1e4,-1e4):e.inputContainer.contains(i)&&e.inputContainer.removeChild(i)))}),r(0,o,"restrict",function(){return this._restrictPattern?this._restrictPattern.source:""},function(t){t?((t="[^"+t+"]").indexOf("^^")>-1&&(t=t.replace("^^","")),this._restrictPattern=new RegExp(t,"g")):this._restrictPattern=null}),r(0,o,"editable",function(){return this._editable},function(t){this._editable=t,R.isConchApp&&e.input.setForbidEdit(!t)}),r(0,o,"promptColor",function(){return this._promptColor},function(t){this._promptColor=t,this._content||i.superSet(gt,this,"color",t)}),r(0,o,"type",function(){return this._type},function(t){this._getCSSStyle().password="password"==t,this._type=t,R.isConchApp&&this.nativeInput.setType(t)}),r(0,o,"inputElementXAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。")}),r(0,o,"asPassword",function(){return this._getCSSStyle().password},function(t){this._getCSSStyle().password=t,this._type="password",console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'),this.isChanged=!0}),e.__init__=function(){e._createInputElement(),N.onMobile&&R.canvas.addEventListener(e.IOS_IFRAME?N.onMiniGame?"touchend":"click":"touchend",e._popupInputMethod)},e._popupInputMethod=function(t){if(laya.display.Input.isInputting){laya.display.Input.inputElement.focus()}},e._createInputElement=function(){e._initInput(e.area=N.createElement("textarea")),e._initInput(e.input=N.createElement("input")),(e.inputContainer=N.createElement("div")).style.position="absolute",e.inputContainer.style.zIndex=1e5,N.container.appendChild(e.inputContainer),e.inputContainer.setPos=function(t,i){e.inputContainer.style.left=t+"px",e.inputContainer.style.top=i+"px"}},e._initInput=function(t){var i=t.style;i.cssText="position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;",i.resize="none",i.backgroundColor="transparent",i.border="none",i.outline="none",i.zIndex=1,t.addEventListener("input",e._processInputting),t.addEventListener("mousemove",e._stopEvent),t.addEventListener("mousedown",e._stopEvent),t.addEventListener("touchmove",e._stopEvent),t.setFontFace=function(e){t.style.fontFamily=e},R.isConchApp||(t.setColor=function(e){t.style.color=e},t.setFontSize=function(e){t.style.fontSize=e+"px"})},e._processInputting=function(t){var e=laya.display.Input.inputElement.target;if(e){var i=laya.display.Input.inputElement.value;e._restrictPattern&&(i=i.replace(/\u2006|\x27/g,""),e._restrictPattern.test(i)&&(i=i.replace(e._restrictPattern,""),laya.display.Input.inputElement.value=i)),e._text=i,e.event("input")}},e._stopEvent=function(t){"touchmove"==t.type&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},e.TYPE_TEXT="text",e.TYPE_PASSWORD="password",e.TYPE_EMAIL="email",e.TYPE_URL="url",e.TYPE_NUMBER="number",e.TYPE_RANGE="range",e.TYPE_DATE="date",e.TYPE_MONTH="month",e.TYPE_WEEK="week",e.TYPE_TIME="time",e.TYPE_DATE_TIME="datetime",e.TYPE_DATE_TIME_LOCAL="datetime-local",e.TYPE_SEARCH="search",e.input=null,e.area=null,e.inputElement=null,e.inputContainer=null,e.confirmButton=null,e.promptStyleDOM=null,e.inputHeight=45,e.isInputting=!1,e.stageMatrix=null,n(e,["IOS_IFRAME",function(){return this.IOS_IFRAME=N.onIOS&&N.window.top!=N.window.self}]),e}(gt),Tt=function(t){function e(t,i){this._recreateLock=!1,this._needReleaseAgain=!1,this._enableMerageInAtlas=!0,e.__super.call(this),this._init_(t,i)}s(e,"laya.resource.HTMLImage",vt);var i=e.prototype;return i._init_=function(t,e){this._src=t,this._source=new N.window.Image,e&&(e.onload&&(this.onload=e.onload),e.onerror&&(this.onerror=e.onerror),e.onCreate&&e.onCreate(this)),0!=t.indexOf("data:image")&&(this._source.crossOrigin=""),t&&(this._source.src=t)},i.recreateResource=function(){var t=this;if(""===this._src)throw new Error("src no null！");if(this._needReleaseAgain=!1,this._source){if(this._recreateLock)return;this.memorySize=this._w*this._h*4,this._recreateLock=!1,this.completeCreate()}else{this._recreateLock=!0;var e=this;this._source=new N.window.Image,this._source.crossOrigin="",this._source.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._source.onload=null,void(e._source=null);e._source.onload=null,e.memorySize=t._w*t._h*4,e._recreateLock=!1,e.completeCreate()},this._source.src=this._src}},i.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(this._source=null,this.memorySize=0)},i.onresize=function(){this._w=this._source.width,this._h=this._source.height},r(0,i,"onload",null,function(t){var e=this;this._onload=t,this._source&&(this._source.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),r(0,i,"onerror",null,function(t){var e=this;this._onerror=t,this._source&&(this._source.onerror=null!=this._onerror?function(){e._onerror()}:null)}),r(0,i,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t,R.isConchApp&&this._source&&(this._source.enableMerageInAtlas=t)}),e.create=function(t,i){return new e(t,i)},e}(),bt=(function(t){function e(){this._target=null,this._playEvents=null,this._initData={},this._aniKeys=null,this._effectClass=null,e.__super.call(this)}s(e,"laya.display.EffectAnimation",t);var i=e.prototype;i._onOtherBegin=function(t){t!=this&&this.stop()},i.addEvent=function(){this._target&&this._playEvents&&(this._setControlNode(this._target),this._target.on(this._playEvents,this,this._onPlayAction))},i._onPlayAction=function(){this.play(0,!1)},i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._target&&(this._target.event("effectanimationbegin",[this]),this._recordInitData(),laya.display.AnimationPlayerBase.prototype.play.call(this,t,e,i,n))},i._recordInitData=function(){if(this._aniKeys){var t=0,e=0;e=this._aniKeys.length;var i;for(t=0;t<e;t++)i=this._aniKeys[t],this._initData[i]=this._target[i]}},i._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(n=n>1?1:n,i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},i._displayNodeToFrame=function(t,e,i){if(this._target){var n;n=this._target;var s,r,o,a,h=t.frames,l=t.keys,u=0,c=l.length;a=t.secondFrames;var _,d,f,p,g=0;for(u=0;u<c;u++)r=h[s=l[u]],-1==(g=a[s])?o=this._initData[s]:e<g?(f=(d=t.keyframes[s])[0]).tween?(null==(_=Y[f.tweenMethod])&&(_=Y.linearNone),p=d[1],o=_(e,this._initData[s],p.value-this._initData[s],p.index)):o=this._initData[s]:o=r.length>e?r[e]:r[r.length-1],n[s]=o}},i._calculateNodeKeyFrames=function(e){t.prototype._calculateNodeKeyFrames.call(this,e);var i,n,s,r=e.keyframes;e.target;s={},e.secondFrames=s;for(i in r)(n=r[i]).length<=1?s[i]=-1:s[i]=n[1].index},r(0,i,"target",function(){return this._target},function(t){this._target&&this._target.off("effectanimationbegin",this,this._onOtherBegin),this._target=t,this._target&&this._target.on("effectanimationbegin",this,this._onOtherBegin),this.addEvent()}),r(0,i,"playEvent",null,function(t){this._playEvents=t,t&&this.addEvent()}),r(0,i,"effectData",null,function(t){if(t){var e;(e=t.animations)&&e[0]&&(this._setUp({},e[0]),e[0].nodes&&e[0].nodes[0]&&(this._aniKeys=e[0].nodes[0].keys))}}),r(0,i,"effectClass",null,function(t){if(this._effectClass=G.getClass(t),this._effectClass){var e;if(e=this._effectClass.uiView){var i;(i=e.animations)&&i[0]&&(this._setUp({},i[0]),i[0].nodes&&i[0].nodes[0]&&(this._aniKeys=i[0].nodes[0].keys))}}}),e.EffectAnimationBegin="effectanimationbegin"}(wt),function(t){function e(){this.animationList=null,this.animationDic=null,this._nodeList=null,this._nodeDefaultProps=null,this._gList=null,this._nodeIDAniDic={},this._rootNode=null,this._nodeGDic=null,e.__super.call(this)}var i;s(e,"laya.utils.GraphicAnimation",t);var r=e.prototype;return r._parseNodeList=function(t){this._nodeList||(this._nodeList=[]),this._nodeDefaultProps[t.compId]=t.props,t.compId&&this._nodeList.push(t.compId);var e=t.child;if(e){var i=0,n=e.length;for(i=0;i<n;i++)this._parseNodeList(e[i])}},r._calGraphicData=function(t){if(this._setUp(null,t),this._createGraphicData(),this._nodeIDAniDic){var e;for(e in this._nodeIDAniDic)this._nodeIDAniDic[e]=null}},r._createGraphicData=function(){var t=[],e=0,i=this.count,n=this._animationNewFrames;n||(n=[]);var s;for(e=0;e<i;e++)!n[e]&&s||(s=this._createFrameGraphic(e)),t.push(s);this._gList=t},r._createFrameGraphic=function(t){var i=o.createGraphics();return e._rootMatrix||(e._rootMatrix=new M),this._updateNodeGraphic(this._rootNode,t,e._rootMatrix,i),i},r._updateNodeGraphic=function(t,e,i,n,s){void 0===s&&(s=1);var r,o=(r=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId])).alpha*s;if(!(o<.01)){r.resultTransform||(r.resultTransform=M.create());var a;a=r.resultTransform,M.mul(r.transform,i,a);var h;r.skin&&(h=this._getTextureByUrl(r.skin))&&(a._checkTransform()?(n.drawTexture(h,0,0,r.width,r.height,a,o),r.resultTransform=null):n.drawTexture(h,a.tx,a.ty,r.width,r.height,null,o));var l;if(l=t.child){var u=0,c=0;for(c=l.length,u=0;u<c;u++)this._updateNodeGraphic(l[u],e,a,n,o)}}},r._updateNoChilds=function(t,e){if(t.skin){var i=this._getTextureByUrl(t.skin);if(i){var n=t.transform;n._checkTransform();!n.bTransform?e.drawTexture(i,n.tx,n.ty,t.width,t.height,null,t.alpha):e.drawTexture(i,0,0,t.width,t.height,n.clone(),t.alpha)}}},r._updateNodeGraphic2=function(t,e,i){var n;if(n=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId]),t.child){var s=n.transform;s._checkTransform();var r=!1,o=!1;o=(r=!s.bTransform)&&(0!=s.tx||0!=s.ty);var a=!1;(a=s.bTransform||1!=n.alpha)&&i.save(),1!=n.alpha&&i.alpha(n.alpha),r?o&&i.translate(s.tx,s.ty):i.transform(s.clone());var h;h=t.child;var l;if(n.skin&&(l=this._getTextureByUrl(n.skin))&&i.drawTexture(l,0,0,n.width,n.height),h){var u=0,c=0;for(c=h.length,u=0;u<c;u++)this._updateNodeGraphic2(h[u],e,i)}a?i.restore():r?o&&i.translate(-s.tx,-s.ty):i.transform(s.clone().invert())}else this._updateNoChilds(n,i)},r._calculateNodeKeyFrames=function(e){t.prototype._calculateNodeKeyFrames.call(this,e),this._nodeIDAniDic[e.target]=e},r.getNodeDataByID=function(t){return this._nodeIDAniDic[t]},r._getParams=function(t,i,n,s){var r=e._temParam;r.length=i.length;var o=0,a=i.length;for(o=0;o<a;o++)r[o]=this._getObjVar(t,i[o][0],n,i[o][1],s);return r},r._getObjVar=function(t,e,i,n,s){if(t.hasOwnProperty(e)){var r=t[e];return i>=r.length&&(i=r.length-1),t[e][i]}return s.hasOwnProperty(e)?s[e]:n},r._getNodeGraphicData=function(t,n,s){s||(s=i.create()),s.transform?s.transform.identity():s.transform=M.create();var r=this.getNodeDataByID(t);if(!r)return s;var o=r.frames,a=this._getParams(o,e._drawTextureCmd,n,this._nodeDefaultProps[t]),h=a[0],l=NaN,u=NaN,c=a[5],_=a[6],d=a[13],f=a[14],p=a[7],g=a[8],m=a[9],v=a[11],y=a[12];l=a[3],u=a[4],0!=l&&0!=u||(h=null),-1==l&&(l=0),-1==u&&(u=0);var w;s.skin=h,s.width=l,s.height=u,h&&((w=this._getTextureByUrl(h))?(l||(l=w.sourceWidth),u||(u=w.sourceHeight)):console.warn("lost skin:",h,",you may load pics first")),s.alpha=a[10];var x;x=s.transform,0!=d&&(c=d*l),0!=f&&(_=f*u),0==c&&0==_||x.translate(-c,-_);var T=null;if(m||1!==p||1!==g||v||y){(T=e._tempMt).identity(),T.bTransform=!0;var b=.0174532922222222*(m-v),C=.0174532922222222*(m+y),S=Math.cos(C),P=Math.sin(C),E=Math.sin(b),I=Math.cos(b);T.a=p*S,T.b=p*P,T.c=-g*E,T.d=g*I,T.tx=T.ty=0}return T&&(x=M.mul(x,T,x)),x.translate(a[1],a[2]),s},r._getTextureByUrl=function(t){return ot.getRes(t)},r.setAniData=function(t,i){if(t.animations){this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=t,this._parseNodeList(t);var n,s={},r=[],o=t.animations,a=0,h=o.length;for(a=0;a<h;a++)if(n=o[a],this._labels=null,(!i||i==n.name)&&n){try{this._calGraphicData(n)}catch(t){console.warn("parse animation fail:"+n.name+",empty animation created"),this._gList=[]}var l={};l.interval=1e3/n.frameRate,l.frames=this._gList,l.labels=this._labels,l.name=n.name,r.push(l),s[n.name]=l}this.animationList=r,this.animationDic=s}e._temParam.length=0},r.parseByData=function(t){var e,i;e=t.nodeRoot,i=t.aniO,delete t.nodeRoot,delete t.aniO,this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=e,this._parseNodeList(e),this._labels=null;try{this._calGraphicData(i)}catch(t){console.warn("parse animation fail:"+i.name+",empty animation created"),this._gList=[]}var n=t;return n.interval=1e3/i.frameRate,n.frames=this._gList,n.labels=this._labels,n.name=i.name,n},r.setUpAniData=function(t){if(t.animations){var e,i={},n=[],s=t.animations,r=0,o=s.length;for(r=0;r<o;r++)if(e=s[r]){var a={};a.name=e.name,a.aniO=e,a.nodeRoot=t,n.push(a),i[e.name]=a}this.animationList=n,this.animationDic=i}},r._clear=function(){if(this.animationList=null,this.animationDic=null,this._gList=null,this._nodeGDic){var t,e;for(t in this._nodeGDic)(e=this._nodeGDic[t])&&e.recover()}this._nodeGDic=null},e.parseAnimationByData=function(t){e._I||(e._I=new e);var i;return i=e._I.parseByData(t),e._I._clear(),i},e.parseAnimationData=function(t){e._I||(e._I=new e),e._I.setUpAniData(t);var i;return i={},i.animationList=e._I.animationList,i.animationDic=e._I.animationDic,e._I._clear(),i},e._drawTextureCmd=[["skin",null],["x",0],["y",0],["width",-1],["height",-1],["pivotX",0],["pivotY",0],["scaleX",1],["scaleY",1],["rotation",0],["alpha",1],["skewX",0],["skewY",0],["anchorX",0],["anchorY",0]],e._temParam=[],e._I=null,e._rootMatrix=null,n(e,["_tempMt",function(){return this._tempMt=new M}]),e.__init$=function(){i=function(){function t(){this.skin=null,this.transform=null,this.resultTransform=null,this.width=NaN,this.height=NaN,this.alpha=1}s(t,"");return t.prototype.recover=function(){this.skin=null,this.width=0,this.height=0,this.alpha=1,this.transform&&(this.transform.destroy(),this.transform=null),this.resultTransform&&(this.resultTransform.destroy(),this.resultTransform=null),X.recover("GraphicNode",this)},t.create=function(){return X.getItemByClass("GraphicNode",t)},t}()},e}(wt));i.__init([h,at,R,N,V,I,ut,bt])}(window,document,Laya),function(t,e,i){i.un,i.uns,i.static;var n=i.class;i.getset,i.__newvec;new(function(){function t(){}return n(t,"LayaMain"),t}())}(window,document,Laya),"function"==typeof define&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});

/***/ }),

/***/ "./bin/libs/min/laya.ui.min.js":
/*!*************************************!*\
  !*** ./bin/libs/min/laya.ui.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,i,e){e.un,e.uns;var s=e.static,h=e.class,n=e.getset,o=(e.__newvec,laya.display.Animation),r=(laya.utils.Browser,laya.utils.ClassUtils),l=laya.filters.ColorFilter,a=laya.utils.Ease,c=laya.events.Event,u=(laya.events.EventDispatcher,laya.display.css.Font),_=laya.display.FrameAnimation,d=laya.display.Graphics,f=laya.utils.Handler,p=laya.display.Input,g=laya.net.Loader,m=(laya.display.Node,laya.maths.Point),y=laya.maths.Rectangle,v=laya.renders.Render,C=laya.display.Sprite,b=laya.display.Text,S=laya.resource.Texture,w=laya.utils.Tween,x=laya.utils.Utils,B=laya.utils.WeakObject;e.interface("laya.ui.IItem"),e.interface("laya.ui.ISelect"),e.interface("laya.ui.IRender"),e.interface("laya.ui.IComponent"),e.interface("laya.ui.IBox","IComponent");var k=function(){function t(){this.enable=!1,this.top=NaN,this.bottom=NaN,this.left=NaN,this.right=NaN,this.centerX=NaN,this.centerY=NaN,this.anchorX=NaN,this.anchorY=NaN}return h(t,"laya.ui.LayoutStyle"),s(t,["EMPTY",function(){return this.EMPTY=new t}]),t}(),I=function(){function t(){}return h(t,"laya.ui.Styles"),t.labelColor="#000000",t.buttonStateNum=3,t.scrollBarMinNum=15,t.scrollBarDelayTime=500,s(t,["defaultSizeGrid",function(){return this.defaultSizeGrid=[4,4,4,4,0]},"labelPadding",function(){return this.labelPadding=[2,2,2,2]},"inputLabelPadding",function(){return this.inputLabelPadding=[1,1,1,3]},"buttonLabelColors",function(){return this.buttonLabelColors=["#32556b","#32cc6b","#ff0000","#C0C0C0"]},"comboBoxItemColors",function(){return this.comboBoxItemColors=["#5e95b6","#ffffff","#000000","#8fa4b1","#ffffff"]}]),t}(),L=function(){function t(){}return h(t,"laya.ui.UIUtils"),t.fillArray=function(t,i,e){var s=t.concat();if(i)for(var h=i.split(","),n=0,o=Math.min(s.length,h.length);n<o;n++){var r=h[n];s[n]="true"==r||"false"!=r&&r,null!=e&&(s[n]=e(r))}return s},t.toColor=function(t){return x.toHexColor(t)},t.gray=function(i,e){void 0===e&&(e=!0),e?t.addFilter(i,t.grayFilter):t.clearFilter(i,l)},t.addFilter=function(t,i){var e=t.filters||[];e.push(i),t.filters=e},t.clearFilter=function(t,i){var s=t.filters;if(null!=s&&s.length>0){for(var h=s.length-1;h>-1;h--){var n=s[h];e.__typeof(n,i)&&s.splice(h,1)}t.filters=s}},t._getReplaceStr=function(i){return t.escapeSequence[i]},t.adptString=function(i){return i.replace(/\\(\w)/g,t._getReplaceStr)},t.getBindFun=function(i){var s=t._funMap.get(i);if(null==s){var h='"'+i+'"',n="(function(data){if(data==null)return;with(data){try{\nreturn "+(h=h.replace(/^"\${|}"$/g,"").replace(/\${/g,'"+').replace(/}/g,'+"'))+"\n}catch(e){}}})";s=e._runScript(n),t._funMap.set(i,s)}return s},s(t,["grayFilter",function(){return this.grayFilter=new l([.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,0,0,0,1,0])},"escapeSequence",function(){return this.escapeSequence={"\\n":"\n","\\t":"\t"}},"_funMap",function(){return this._funMap=new B}]),t}(),M=function(){function t(){}return h(t,"UIConfig"),t.touchScrollEnable=!0,t.mouseWheelEnable=!0,t.showButtons=!0,t.popupBgColor="#000000",t.popupBgAlpha=.5,t.closeDialogOnSide=!0,t}(),z=function(t){function i(){this.autoCacheCmd=!0,this._width=0,this._height=0,this._source=null,this._sizeGrid=null,this._isChanged=!1,this._offset=null,i.__super.call(this)}h(i,"laya.ui.AutoBitmap",t);var s=i.prototype;return s.destroy=function(){t.prototype.destroy.call(this),this._source=null,this._sizeGrid=null,this._offset=null},s._setChanged=function(){this._isChanged||(this._isChanged=!0,e.timer.callLater(this,this.changeSource))},s.changeSource=function(){this._isChanged=!1;var t=this._source;if(t&&t.bitmap){var e=this.width,s=this.height,h=this._sizeGrid,n=t.sourceWidth,o=t.sourceHeight;if(!h||n===e&&o===s)this.cleanByTexture(t,this._offset?this._offset[0]:0,this._offset?this._offset[1]:0,e,s);else{t.$_GID||(t.$_GID=x.getGID());var r=t.$_GID+"."+e+"."+s+"."+h.join(".");if(x.isOKCmdList(B.I.get(r)))return void(this.cmds=B.I.get(r));this.clear();var l=h[0],a=h[1],c=h[2],u=h[3],_=h[4],d=!1;if(e==n&&(u=a=0),s==o&&(l=c=0),u+a>e){var f=e;d=!0,e=u+a,this.save(),this.clipRect(0,0,f,s)}u&&l&&this.drawTexture(i.getTexture(t,0,0,u,l),0,0,u,l),a&&l&&this.drawTexture(i.getTexture(t,n-a,0,a,l),e-a,0,a,l),u&&c&&this.drawTexture(i.getTexture(t,0,o-c,u,c),0,s-c,u,c),a&&c&&this.drawTexture(i.getTexture(t,n-a,o-c,a,c),e-a,s-c,a,c),l&&this.drawBitmap(_,i.getTexture(t,u,0,n-u-a,l),u,0,e-u-a,l),c&&this.drawBitmap(_,i.getTexture(t,u,o-c,n-u-a,c),u,s-c,e-u-a,c),u&&this.drawBitmap(_,i.getTexture(t,0,l,u,o-l-c),0,l,u,s-l-c),a&&this.drawBitmap(_,i.getTexture(t,n-a,l,a,o-l-c),e-a,l,a,s-l-c),this.drawBitmap(_,i.getTexture(t,u,l,n-u-a,o-l-c),u,l,e-u-a,s-l-c),d&&this.restore(),this.autoCacheCmd&&!v.isConchApp&&B.I.set(r,this.cmds)}this._repaint()}},s.drawBitmap=function(t,i,e,s,h,n){void 0===h&&(h=0),void 0===n&&(n=0),h<.1||n<.1||(!t||i.width==h&&i.height==n?this.drawTexture(i,e,s,h,n):this.fillTexture(i,e,s,h,n))},s.clear=function(i){void 0===i&&(i=!0),t.prototype.clear.call(this,!1)},n(0,s,"sizeGrid",function(){return this._sizeGrid},function(t){this._sizeGrid=t,this._setChanged()}),n(0,s,"width",function(){return this._width?this._width:this._source?this._source.sourceWidth:0},function(t){this._width!=t&&(this._width=t,this._setChanged())}),n(0,s,"height",function(){return this._height?this._height:this._source?this._source.sourceHeight:0},function(t){this._height!=t&&(this._height=t,this._setChanged())}),n(0,s,"source",function(){return this._source},function(t){t?(this._source=t,this._setChanged()):(this._source=null,this.clear())}),i.getTexture=function(t,i,e,s,h){s<=0&&(s=1),h<=0&&(h=1),t.$_GID||(t.$_GID=x.getGID());var n=t.$_GID+"."+i+"."+e+"."+s+"."+h,o=B.I.get(n);return o&&o.source||(o=S.createFromTexture(t,i,e,s,h),B.I.set(n,o)),o},i}(d),T=(function(t){function i(){i.__super.call(this)}h(i,"laya.ui.UIEvent",c),i.SHOW_TIP="showtip",i.HIDE_TIP="hidetip"}(),function(t){function i(){this._comXml=null,this._dataSource=null,this._toolTip=null,this._tag=null,this._disabled=!1,this._gray=!1,this.layoutEnabled=!0,i.__super.call(this),this._layout=k.EMPTY,this.preinitialize(),this.createChildren(),this.initialize()}h(i,"laya.ui.Component",t);var s=i.prototype;return e.imps(s,{"laya.ui.IComponent":!0}),s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._dataSource=this._layout=null,this._tag=null,this._toolTip=null},s.preinitialize=function(){},s.createChildren=function(){},s.initialize=function(){},s.callLater=function(t,i){e.timer.callLater(this,t,i)},s.runCallLater=function(t){e.timer.runCallLater(this,t)},s.commitMeasure=function(){},s.changeSize=function(){this.event("resize")},s.getLayout=function(){return this._layout===k.EMPTY&&(this._layout=new k),this._layout},s._setLayoutEnabled=function(t){this._layout&&this._layout.enable!=t&&(this._layout.enable=t,this.on("added",this,this.onAdded),this.on("removed",this,this.onRemoved),this.parent&&this.onAdded())},s.onRemoved=function(){this.parent.off("resize",this,this.onCompResize)},s.onAdded=function(){this.parent.on("resize",this,this.onCompResize),this.resetLayoutX(),this.resetLayoutY()},s.onCompResize=function(){this._layout&&this._layout.enable&&(this.resetLayoutX(),this.resetLayoutY())},s.resetLayoutX=function(){var t=this._layout;if(isNaN(t.anchorX)||(this.pivotX=t.anchorX*this.width),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerX)?isNaN(t.left)?isNaN(t.right)||(this.x=Math.round(i.width-this.displayWidth-t.right+this.pivotX*this.scaleX)):(this.x=Math.round(t.left+this.pivotX*this.scaleX),isNaN(t.right)||(this.width=(i._width-t.left-t.right)/(this.scaleX||.01))):this.x=Math.round(.5*(i.width-this.displayWidth)+t.centerX+this.pivotX*this.scaleX))}},s.resetLayoutY=function(){var t=this._layout;if(isNaN(t.anchorY)||(this.pivotY=t.anchorY*this.height),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerY)?isNaN(t.top)?isNaN(t.bottom)||(this.y=Math.round(i.height-this.displayHeight-t.bottom+this.pivotY*this.scaleY)):(this.y=Math.round(t.top+this.pivotY*this.scaleY),isNaN(t.bottom)||(this.height=(i._height-t.top-t.bottom)/(this.scaleY||.01))):this.y=Math.round(.5*(i.height-this.displayHeight)+t.centerY+this.pivotY*this.scaleY))}},s.onMouseOver=function(t){e.stage.event("showtip",this._toolTip)},s.onMouseOut=function(t){e.stage.event("hidetip",this._toolTip)},n(0,s,"displayWidth",function(){return this.width*this.scaleX}),n(0,s,"width",function(){return this._width?this._width:this.measureWidth},function(t){this._width!=t&&(this._width=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerX)&&isNaN(this._layout.right)&&isNaN(this._layout.anchorX)||this.resetLayoutX())}),n(0,s,"measureWidth",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;i>-1;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.x+e.width*e.scaleX,t))}return t}),n(0,s,"displayHeight",function(){return this.height*this.scaleY}),n(0,s,"height",function(){return this._height?this._height:this.measureHeight},function(t){this._height!=t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerY)&&isNaN(this._layout.bottom)&&isNaN(this._layout.anchorY)||this.resetLayoutY())}),n(0,s,"dataSource",function(){return this._dataSource},function(t){this._dataSource=t;for(var i in this._dataSource)this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=this._dataSource[i])}),n(0,s,"scaleY",t.prototype._$get_scaleY,function(t){e.superGet(C,this,"scaleY")!=t&&(e.superSet(C,this,"scaleY",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutY())}),n(0,s,"measureHeight",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;i>-1;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.y+e.height*e.scaleY,t))}return t}),n(0,s,"scaleX",t.prototype._$get_scaleX,function(t){e.superGet(C,this,"scaleX")!=t&&(e.superSet(C,this,"scaleX",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutX())}),n(0,s,"top",function(){return this._layout.top},function(t){t!=this._layout.top&&(this.getLayout().top=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"bottom",function(){return this._layout.bottom},function(t){t!=this._layout.bottom&&(this.getLayout().bottom=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"left",function(){return this._layout.left},function(t){t!=this._layout.left&&(this.getLayout().left=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"right",function(){return this._layout.right},function(t){t!=this._layout.right&&(this.getLayout().right=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"centerX",function(){return this._layout.centerX},function(t){t!=this._layout.centerX&&(this.getLayout().centerX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"centerY",function(){return this._layout.centerY},function(t){t!=this._layout.centerY&&(this.getLayout().centerY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"anchorX",function(){return this._layout.anchorX},function(t){t!=this._layout.anchorX&&(this.getLayout().anchorX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"anchorY",function(){return this._layout.anchorY},function(t){t!=this._layout.anchorY&&(this.getLayout().anchorY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"tag",function(){return this._tag},function(t){this._tag=t}),n(0,s,"toolTip",function(){return this._toolTip},function(t){this._toolTip!=t&&(this._toolTip=t,null!=t?(this.on("mouseover",this,this.onMouseOver),this.on("mouseout",this,this.onMouseOut)):(this.off("mouseover",this,this.onMouseOver),this.off("mouseout",this,this.onMouseOut)))}),n(0,s,"comXml",function(){return this._comXml},function(t){this._comXml=t}),n(0,s,"gray",function(){return this._gray},function(t){t!==this._gray&&(this._gray=t,L.gray(this,t))}),n(0,s,"disabled",function(){return this._disabled},function(t){t!==this._disabled&&(this.gray=this._disabled=t,this.mouseEnabled=!t)}),i}(C)),P=function(t){function i(){this.lockLayer=null,this.popupEffect=function(t){t.scale(1,1),w.from(t,{x:e.stage.width/2,y:e.stage.height/2,scaleX:0,scaleY:0},300,a.backOut,f.create(this,this.doOpen,[t]))},this.closeEffect=function(t,i){w.to(t,{x:e.stage.width/2,y:e.stage.height/2,scaleX:0,scaleY:0},300,a.strongOut,f.create(this,this.doClose,[t,i]))},i.__super.call(this),this.maskLayer=new C,this.popupEffectHandler=new f(this,this.popupEffect),this.closeEffectHandler=new f(this,this.closeEffect),this.mouseEnabled=this.maskLayer.mouseEnabled=!0,this.zOrder=1e3,e.stage.addChild(this),e.stage.on("resize",this,this._onResize),M.closeDialogOnSide&&this.maskLayer.on("click",this,this._closeOnSide),this._onResize(null)}h(i,"laya.ui.DialogManager",C);var s=i.prototype;return s._closeOnSide=function(){var t=this.getChildAt(this.numChildren-1);t instanceof laya.ui.Dialog&&t.close("side")},s.setLockView=function(t){this.lockLayer||(this.lockLayer=new H,this.lockLayer.mouseEnabled=!0,this.lockLayer.size(e.stage.width,e.stage.height)),this.lockLayer.removeChildren(),t&&(t.centerX=t.centerY=0,this.lockLayer.addChild(t))},s._onResize=function(t){var i=this.maskLayer.width=e.stage.width,s=this.maskLayer.height=e.stage.height;this.lockLayer&&this.lockLayer.size(i,s),this.maskLayer.graphics.clear(),this.maskLayer.graphics.drawRect(0,0,i,s,M.popupBgColor),this.maskLayer.alpha=M.popupBgAlpha;for(var h=this.numChildren-1;h>-1;h--){var n=this.getChildAt(h);n.popupCenter&&this._centerDialog(n)}},s._centerDialog=function(t){t.x=Math.round((e.stage.width-t.width>>1)+t.pivotX),t.y=Math.round((e.stage.height-t.height>>1)+t.pivotY)},s.open=function(t,i,e){void 0===i&&(i=!1),void 0===e&&(e=!1),i&&this._closeAll(),t.popupCenter&&this._centerDialog(t),this.addChild(t),(t.isModal||this._$P.hasZorder)&&this.timer.callLater(this,this._checkMask),e&&null!=t.popupEffect?t.popupEffect.runWith(t):this.doOpen(t),this.event("open")},s.doOpen=function(t){t.onOpened()},s.lock=function(t){this.lockLayer&&(t?this.addChild(this.lockLayer):this.lockLayer.removeSelf())},s.close=function(t,i,e){void 0===e&&(e=!1),e&&null!=t.closeEffect?t.closeEffect.runWith([t,i]):this.doClose(t,i),this.event("close")},s.doClose=function(t,i){t.removeSelf(),t.isModal&&this._checkMask(),t.closeHandler&&t.closeHandler.runWith(i),t.onClosed(i)},s.closeAll=function(){this._closeAll(),this.event("close")},s._closeAll=function(){for(var t=this.numChildren-1;t>-1;t--){var i=this.getChildAt(t);i&&null!=i.close&&this.doClose(i)}},s.getDialogsByGroup=function(t){for(var i=[],e=this.numChildren-1;e>-1;e--){var s=this.getChildAt(e);s&&s.group===t&&i.push(s)}return i},s.closeByGroup=function(t){for(var i=[],e=this.numChildren-1;e>-1;e--){var s=this.getChildAt(e);s&&s.group===t&&(s.close(),i.push(s))}return i},s._checkMask=function(){this.maskLayer.removeSelf();for(var t=this.numChildren-1;t>-1;t--){var i=this.getChildAt(t);if(i&&i.isModal)return void this.addChildAt(this.maskLayer,t)}},i}(),H=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.Box",t);var s=i.prototype;return e.imps(s,{"laya.ui.IBox":!0}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t;for(var i in t){var e=this.getChildByName(i);e?e.dataSource=t[i]:this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=t[i])}}),i}(T),N=function(t){function i(t,e){this.toggle=!1,this._bitmap=null,this._text=null,this._strokeColors=null,this._state=0,this._selected=!1,this._skin=null,this._autoSize=!0,this._sources=null,this._clickHandler=null,this._stateChanged=!1,i.__super.call(this),this._labelColors=I.buttonLabelColors,this._stateNum=I.buttonStateNum,void 0===e&&(e=""),this.skin=t,this.label=e}h(i,"laya.ui.Button",t);var o=i.prototype;return e.imps(o,{"laya.ui.ISelect":!0}),o.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bitmap&&this._bitmap.destroy(),this._text&&this._text.destroy(i),this._bitmap=null,this._text=null,this._clickHandler=null,this._labelColors=this._sources=this._strokeColors=null},o.createChildren=function(){this.graphics=this._bitmap=new z},o.createText=function(){this._text||(this._text=new b,this._text.overflow=b.HIDDEN,this._text.align="center",this._text.valign="middle",this._text.width=this._width,this._text.height=this._height)},o.initialize=function(){1!==this._mouseEnableState&&(this.mouseEnabled=!0,this._setBit(2,!0)),this._createListener("mouseover",this,this.onMouse,null,!1,!1),this._createListener("mouseout",this,this.onMouse,null,!1,!1),this._createListener("mousedown",this,this.onMouse,null,!1,!1),this._createListener("mouseup",this,this.onMouse,null,!1,!1),this._createListener("click",this,this.onMouse,null,!1,!1)},o.onMouse=function(t){if(!1!==this.toggle||!this._selected)return"click"===t.type?(this.toggle&&(this.selected=!this._selected),void(this._clickHandler&&this._clickHandler.run())):void(!this._selected&&(this.state=i.stateMap[t.type]))},o.changeClips=function(){var t=g.getRes(this._skin);if(t){var i=t.sourceWidth,e=t.sourceHeight/this._stateNum;t.$_GID||(t.$_GID=x.getGID());var s=t.$_GID+"-"+this._stateNum,h=B.I.get(s);if(x.isOkTextureList(h)||(h=null),h)this._sources=h;else{if(this._sources=[],1===this._stateNum)this._sources.push(t);else for(var n=0;n<this._stateNum;n++)this._sources.push(S.createFromTexture(t,0,e*n,i,e));B.I.set(s,this._sources)}this._autoSize?(this._bitmap.width=this._width||i,this._bitmap.height=this._height||e,this._text&&(this._text.width=this._bitmap.width,this._text.height=this._bitmap.height)):this._text&&(this._text.x=i)}else console.log("lose skin",this._skin)},o.changeState=function(){this._stateChanged=!1,this.runCallLater(this.changeClips);var t=this._state<this._stateNum?this._state:this._stateNum-1;this._sources&&(this._bitmap.source=this._sources[t]),this.label&&(this._text.color=this._labelColors[t],this._strokeColors&&(this._text.strokeColor=this._strokeColors[t]))},o._setStateChanged=function(){this._stateChanged||(this._stateChanged=!0,this.callLater(this.changeState))},n(0,o,"labelStrokeColor",function(){return this.createText(),this._text.strokeColor},function(t){this.createText(),this._text.strokeColor=t}),n(0,o,"measureHeight",function(){return this.runCallLater(this.changeClips),this._text?Math.max(this._bitmap.height,this._text.height):this._bitmap.height}),n(0,o,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.callLater(this.changeClips),this._setStateChanged())}),n(0,o,"state",function(){return this._state},function(t){this._state!=t&&(this._state=t,this._setStateChanged())}),n(0,o,"text",function(){return this.createText(),this._text}),n(0,o,"stateNum",function(){return this._stateNum},function(t){"string"==typeof t&&(t=parseInt(t)),this._stateNum!=t&&(this._stateNum=t<1?1:t>3?3:t,this.callLater(this.changeClips))}),n(0,o,"strokeColors",function(){return this._strokeColors?this._strokeColors.join(","):""},function(t){this._strokeColors=L.fillArray(I.buttonLabelColors,t,String),this._setStateChanged()}),n(0,o,"labelColors",function(){return this._labelColors.join(",")},function(t){this._labelColors=L.fillArray(I.buttonLabelColors,t,String),this._setStateChanged()}),n(0,o,"measureWidth",function(){return this.runCallLater(this.changeClips),this._autoSize?this._bitmap.width:(this.runCallLater(this.changeState),this._bitmap.width+(this._text?this._text.width:0))}),n(0,o,"label",function(){return this._text?this._text.text:null},function(t){(this._text||t)&&(this.createText(),this._text.text!=t&&(t&&!this._text.parent&&this.addChild(this._text),this._text.text=(t+"").replace(/\\n/g,"\n"),this._setStateChanged()))}),n(0,o,"selected",function(){return this._selected},function(t){this._selected!=t&&(this._selected=t,this.state=this._selected?2:0,this.event("change"))}),n(0,o,"labelPadding",function(){return this.createText(),this._text.padding.join(",")},function(t){this.createText(),this._text.padding=L.fillArray(I.labelPadding,t,Number)}),n(0,o,"labelSize",function(){return this.createText(),this._text.fontSize},function(t){this.createText(),this._text.fontSize=t}),n(0,o,"labelStroke",function(){return this.createText(),this._text.stroke},function(t){this.createText(),this._text.stroke=t}),n(0,o,"labelBold",function(){return this.createText(),this._text.bold},function(t){this.createText(),this._text.bold=t}),n(0,o,"labelFont",function(){return this.createText(),this._text.font},function(t){this.createText(),this._text.font=t}),n(0,o,"labelAlign",function(){return this.createText(),this._text.align},function(t){this.createText(),this._text.align=t}),n(0,o,"clickHandler",function(){return this._clickHandler},function(t){this._clickHandler=t}),n(0,o,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,o,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._autoSize&&(this._bitmap.width=t,this._text&&(this._text.width=t))}),n(0,o,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._autoSize&&(this._bitmap.height=t,this._text&&(this._text.height=t))}),n(0,o,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.label=t+"":e.superSet(T,this,"dataSource",t)}),n(0,o,"iconOffset",function(){return this._bitmap._offset?this._bitmap._offset.join(","):null},function(t){this._bitmap._offset=t?L.fillArray([1,1],t,Number):[]}),s(i,["stateMap",function(){return this.stateMap={mouseup:0,mouseover:1,mousedown:2,mouseout:0}}]),i}(T),O=function(t){function i(t,e,s){this._sources=null,this._bitmap=null,this._skin=null,this._clipX=1,this._clipY=1,this._clipWidth=0,this._clipHeight=0,this._autoPlay=!1,this._interval=50,this._complete=null,this._isPlaying=!1,this._index=0,this._clipChanged=!1,this._group=null,this._toIndex=-1,i.__super.call(this),void 0===e&&(e=1),void 0===s&&(s=1),this._clipX=e,this._clipY=s,this.skin=t}h(i,"laya.ui.Clip",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null,this._sources=null},s.dispose=function(){this.destroy(!0),e.loader.clearRes(this._skin)},s.createChildren=function(){this.graphics=this._bitmap=new z},s._onDisplay=function(t){this._isPlaying?this._displayedInStage?this.play():this.stop():this._autoPlay&&this.play()},s.changeClip=function(){if(this._clipChanged=!1,this._skin){var t=g.getRes(this._skin);t?this.loadComplete(this._skin,t):e.loader.load(this._skin,f.create(this,this.loadComplete,[this._skin]))}},s.loadComplete=function(t,i){if(t===this._skin&&i){var e=this._clipWidth||Math.ceil(i.sourceWidth/this._clipX),s=this._clipHeight||Math.ceil(i.sourceHeight/this._clipY),h=this._skin+e+s,n=B.I.get(h);if(x.isOkTextureList(n)||(n=null),n)this._sources=n;else{this._sources=[];for(var o=0;o<this._clipY;o++)for(var r=0;r<this._clipX;r++)this._sources.push(S.createFromTexture(i,e*r,s*o,e,s));B.I.set(h,this._sources)}this.index=this._index,this.event("loaded"),this.onCompResize()}},s.play=function(t,i){void 0===t&&(t=0),void 0===i&&(i=-1),this._isPlaying=!0,this.index=t,this._toIndex=i,this._index++,e.timer.loop(this.interval,this,this._loop),this.on("display",this,this._onDisplay),this.on("undisplay",this,this._onDisplay)},s._loop=function(){this._style.visible&&this._sources&&(this._index++,this._toIndex>-1&&this._index>=this._toIndex?this.stop():this._index>=this._sources.length&&(this._index=0),this.index=this._index)},s.stop=function(){this._isPlaying=!1,e.timer.clear(this,this._loop),this.event("complete")},s._setClipChanged=function(){this._clipChanged||(this._clipChanged=!0,this.callLater(this.changeClip))},n(0,s,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._interval=t,this._isPlaying&&this.play())}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,t?this._setClipChanged():this._bitmap.source=null)}),n(0,s,"sources",function(){return this._sources},function(t){this._sources=t,this.index=this._index,this.event("loaded")}),n(0,s,"clipX",function(){return this._clipX},function(t){this._clipX=t||1,this._setClipChanged()}),n(0,s,"clipY",function(){return this._clipY},function(t){this._clipY=t||1,this._setClipChanged()}),n(0,s,"total",function(){return this.runCallLater(this.changeClip),this._sources?this._sources.length:0}),n(0,s,"clipWidth",function(){return this._clipWidth},function(t){this._clipWidth=t,this._setClipChanged()}),n(0,s,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,s,"group",function(){return this._group},function(t){t&&this._skin&&g.setGroup(this._skin,t),this._group=t}),n(0,s,"clipHeight",function(){return this._clipHeight},function(t){this._clipHeight=t,this._setClipChanged()}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._bitmap.width=t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._bitmap.height=t}),n(0,s,"measureWidth",function(){return this.runCallLater(this.changeClip),this._bitmap.width}),n(0,s,"measureHeight",function(){return this.runCallLater(this.changeClip),this._bitmap.height}),n(0,s,"index",function(){return this._index},function(t){this._index=t,this._bitmap&&this._sources&&(this._bitmap.source=this._sources[t]),this.event("change")}),n(0,s,"autoPlay",function(){return this._autoPlay},function(t){this._autoPlay!=t&&(this._autoPlay=t,t?this.play():this.stop())}),n(0,s,"isPlaying",function(){return this._isPlaying},function(t){this._isPlaying=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.index=parseInt(t):e.superSet(T,this,"dataSource",t)}),n(0,s,"bitmap",function(){return this._bitmap}),i}(T),A=function(t){function i(){this.changeHandler=null,this._gridSize=11,this._bgColor="#ffffff",this._borderColor="#000000",this._inputColor="#000000",this._inputBgColor="#efefef",this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=[],this._selectedColor="#000000",this._panelChanged=!1,i.__super.call(this)}h(i,"laya.ui.ColorPicker",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._colorPanel&&this._colorPanel.destroy(i),this._colorButton&&this._colorButton.destroy(i),this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=null,this.changeHandler=null},s.createChildren=function(){this.addChild(this._colorButton=new N),this._colorPanel=new H,this._colorPanel.size(230,166),this._colorPanel.addChild(this._colorTiles=new C),this._colorPanel.addChild(this._colorBlock=new C),this._colorPanel.addChild(this._colorInput=new p)},s.initialize=function(){this._colorButton.on("click",this,this.onColorButtonClick),this._colorBlock.pos(5,5),this._colorInput.pos(60,5),this._colorInput.size(60,20),this._colorInput.on("change",this,this.onColorInputChange),this._colorInput.on("keydown",this,this.onColorFieldKeyDown),this._colorTiles.pos(5,30),this._colorTiles.on("mousemove",this,this.onColorTilesMouseMove),this._colorTiles.on("click",this,this.onColorTilesClick),this._colorTiles.size(20*this._gridSize,12*this._gridSize),this._colorPanel.on("mousedown",this,this.onPanelMouseDown),this.bgColor=this._bgColor},s.onPanelMouseDown=function(t){t.stopPropagation()},s.changePanel=function(){this._panelChanged=!1;var t=this._colorPanel.graphics;t.clear(),t.drawRect(0,0,230,166,this._bgColor,this._borderColor),this.drawBlock(this._selectedColor),this._colorInput.borderColor=this._borderColor,this._colorInput.bgColor=this._inputBgColor,this._colorInput.color=this._inputColor,(t=this._colorTiles.graphics).clear();for(var i=[0,3355443,6710886,10066329,13421772,16777215,16711680,65280,255,16776960,65535,16711935],e=0;e<12;e++)for(var s=0;s<20;s++){var h=0;h=0===s?i[e]:1===s?0:51*(((3*e+s/6)%3<<0)+3*(e/6<<0))<<16|s%6*51<<8|(e<<0)%6*51;var n=L.toColor(h);this._colors.push(n);var o=s*this._gridSize,r=e*this._gridSize;t.drawRect(o,r,this._gridSize,this._gridSize,n,"#000000")}},s.onColorButtonClick=function(t){this._colorPanel.parent?this.close():this.open()},s.open=function(){var t=this.localToGlobal(new m),i=t.x+this._colorPanel.width<=e.stage.width?t.x:e.stage.width-this._colorPanel.width,s=t.y+this._colorButton.height;s=s+this._colorPanel.height<=e.stage.height?s:t.y-this._colorPanel.height,this._colorPanel.pos(i,s),this._colorPanel.zOrder=1001,e._currentStage.addChild(this._colorPanel),e.stage.on("mousedown",this,this.removeColorBox)},s.close=function(){e.stage.off("mousedown",this,this.removeColorBox),this._colorPanel.removeSelf()},s.removeColorBox=function(t){this.close()},s.onColorFieldKeyDown=function(t){13==t.keyCode&&(this._colorInput.text?this.selectedColor=this._colorInput.text:this.selectedColor=null,this.close(),t.stopPropagation())},s.onColorInputChange=function(t){this._colorInput.text?this.drawBlock(this._colorInput.text):this.drawBlock("#FFFFFF")},s.onColorTilesClick=function(t){this.selectedColor=this.getColorByMouse(),this.close()},s.onColorTilesMouseMove=function(t){this._colorInput.focus=!1;var i=this.getColorByMouse();this._colorInput.text=i,this.drawBlock(i)},s.getColorByMouse=function(){var t=this._colorTiles.getMousePoint(),i=Math.floor(t.x/this._gridSize),e=Math.floor(t.y/this._gridSize);return this._colors[20*e+i]},s.drawBlock=function(t){var i=this._colorBlock.graphics;i.clear();var e=t||"#ffffff";i.drawRect(0,0,50,20,e,this._borderColor),t||i.drawLine(0,0,50,20,"#ff0000")},s.changeColor=function(){var t=this.graphics;t.clear();var i=this._selectedColor||"#000000";t.drawRect(0,0,this._colorButton.width,this._colorButton.height,i)},s._setPanelChanged=function(){this._panelChanged||(this._panelChanged=!0,this.callLater(this.changePanel))},n(0,s,"inputBgColor",function(){return this._inputBgColor},function(t){this._inputBgColor=t,this._setPanelChanged()}),n(0,s,"selectedColor",function(){return this._selectedColor},function(t){this._selectedColor!=t&&(this._selectedColor=this._colorInput.text=t,this.drawBlock(t),this.changeColor(),this.changeHandler&&this.changeHandler.runWith(this._selectedColor),this.event("change",c.EMPTY.setTo("change",this,this)))}),n(0,s,"skin",function(){return this._colorButton.skin},function(t){this._colorButton.skin=t,this.changeColor()}),n(0,s,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this._setPanelChanged()}),n(0,s,"borderColor",function(){return this._borderColor},function(t){this._borderColor=t,this._setPanelChanged()}),n(0,s,"inputColor",function(){return this._inputColor},function(t){this._inputColor=t,this._setPanelChanged()}),i}(T),Y=function(t){function i(t,e){this._visibleNum=6,this._button=null,this._list=null,this._isOpen=!1,this._itemSize=12,this._labels=[],this._selectedIndex=-1,this._selectHandler=null,this._itemHeight=NaN,this._listHeight=NaN,this._listChanged=!1,this._itemChanged=!1,this._scrollBarSkin=null,this._isCustomList=!1,this.itemRender=null,i.__super.call(this),this._itemColors=I.comboBoxItemColors,this.skin=t,this.labels=e}h(i,"laya.ui.ComboBox",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._button&&this._button.destroy(i),this._list&&this._list.destroy(i),this._button=null,this._list=null,this._itemColors=null,this._labels=null,this._selectHandler=null},s.createChildren=function(){this.addChild(this._button=new N),this._button.text.align="left",this._button.labelPadding="0,0,0,5",this._button.on("mousedown",this,this.onButtonMouseDown)},s._createList=function(){this._list=new U,this._scrollBarSkin&&(this._list.vScrollBarSkin=this._scrollBarSkin),this._setListEvent(this._list)},s._setListEvent=function(t){this._list.selectEnable=!0,this._list.on("mousedown",this,this.onListDown),this._list.mouseHandler=f.create(this,this.onlistItemMouse,null,!1),this._list.scrollBar&&this._list.scrollBar.on("mousedown",this,this.onScrollBarDown)},s.onListDown=function(t){t.stopPropagation()},s.onScrollBarDown=function(t){t.stopPropagation()},s.onButtonMouseDown=function(t){this.callLater(this.switchTo,[!this._isOpen])},s.changeList=function(){this._listChanged=!1;var t=this.width-2,i=this._itemColors[2];this._itemHeight=this._itemSize+6,this._list.itemRender=this.itemRender||{type:"Box",child:[{type:"Label",props:{name:"label",x:1,padding:"3,3,3,3",width:t,height:this._itemHeight,fontSize:this._itemSize,color:i}}]},this._list.repeatY=this._visibleNum,this._list.refresh()},s.onlistItemMouse=function(t,i){var e=t.type;if("mouseover"===e||"mouseout"===e){if(this._isCustomList)return;var s=this._list.getCell(i);if(!s)return;var h=s.getChildByName("label");h&&("mouseover"===e?(h.bgColor=this._itemColors[0],h.color=this._itemColors[1]):(h.bgColor=null,h.color=this._itemColors[2]))}else"click"===e&&(this.selectedIndex=i,this.isOpen=!1)},s.switchTo=function(t){this.isOpen=t},s.changeOpen=function(){this.isOpen=!this._isOpen},s.changeItem=function(){if(this._itemChanged=!1,this._listHeight=this._labels.length>0?Math.min(this._visibleNum,this._labels.length)*this._itemHeight:this._itemHeight,!this._isCustomList){var t=this._list.graphics;t.clear(),t.drawRect(0,0,this.width-1,this._listHeight,this._itemColors[4],this._itemColors[3])}var i=this._list.array||[];i.length=0;for(var e=0,s=this._labels.length;e<s;e++)i.push({label:this._labels[e]});this._list.height=this._listHeight,this._list.array=i},s.changeSelected=function(){this._button.label=this.selectedLabel},s._onStageMouseWheel=function(t){this._list&&!this._list.contains(t.target)&&this.removeList(null)},s.removeList=function(t){e.stage.off("mousedown",this,this.removeList),e.stage.off("mousewheel",this,this._onStageMouseWheel),this.isOpen=!1},n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this._labels.length>0?this.changeSelected():this.callLater(this.changeSelected),this.event("change",[c.EMPTY.setTo("change",this,this)]),this._selectHandler&&this._selectHandler.runWith(this._selectedIndex))}),n(0,s,"measureHeight",function(){return this._button.height}),n(0,s,"skin",function(){return this._button.skin},function(t){this._button.skin!=t&&(this._button.skin=t,this._listChanged=!0)}),n(0,s,"measureWidth",function(){return this._button.width}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._button.width=this._width,this._itemChanged=!0,this._listChanged=!0}),n(0,s,"selectedLabel",function(){return this._selectedIndex>-1&&this._selectedIndex<this._labels.length?this._labels[this._selectedIndex]:null},function(t){this.selectedIndex=this._labels.indexOf(t)}),n(0,s,"labels",function(){return this._labels.join(",")},function(t){this._labels.length>0&&(this.selectedIndex=-1),t?this._labels=t.split(","):this._labels.length=0,this._itemChanged=!0}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._button.height=this._height}),n(0,s,"selectHandler",function(){return this._selectHandler},function(t){this._selectHandler=t}),n(0,s,"visibleNum",function(){return this._visibleNum},function(t){this._visibleNum=t,this._listChanged=!0}),n(0,s,"labelBold",function(){return this._button.text.bold},function(t){this._button.text.bold=t}),n(0,s,"itemColors",function(){return String(this._itemColors)},function(t){this._itemColors=L.fillArray(this._itemColors,t,String),this._listChanged=!0}),n(0,s,"itemSize",function(){return this._itemSize},function(t){this._itemSize=t,this._listChanged=!0}),n(0,s,"scrollBar",function(){return this.list.scrollBar}),n(0,s,"isOpen",function(){return this._isOpen},function(t){if(this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var i=this.localToGlobal(m.TEMP.setTo(0,0)),s=i.y+this._button.height;s=s+this._listHeight<=e.stage.height?s:i.y-this._listHeight,this._list.pos(i.x,s),this._list.zOrder=1001,e._currentStage.addChild(this._list),e.stage.once("mousedown",this,this.removeList),e.stage.on("mousewheel",this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf()}),n(0,s,"scrollBarSkin",function(){return this._scrollBarSkin},function(t){this._scrollBarSkin=t}),n(0,s,"sizeGrid",function(){return this._button.sizeGrid},function(t){this._button.sizeGrid=t}),n(0,s,"button",function(){return this._button}),n(0,s,"list",function(){return this._list||this._createList(),this._list},function(t){t&&(t.removeSelf(),this._isCustomList=!0,this._list=t,this._setListEvent(t),this._itemHeight=t.getCell(0).height+t.spaceY)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):e.superSet(T,this,"dataSource",t)}),n(0,s,"labelColors",function(){return this._button.labelColors},function(t){this._button.labelColors!=t&&(this._button.labelColors=t)}),n(0,s,"labelPadding",function(){return this._button.text.padding.join(",")},function(t){this._button.text.padding=L.fillArray(I.labelPadding,t,Number)}),n(0,s,"labelSize",function(){return this._button.text.fontSize},function(t){this._button.text.fontSize=t}),n(0,s,"labelFont",function(){return this._button.text.font},function(t){this._button.text.font=t}),n(0,s,"stateNum",function(){return this._button.stateNum},function(t){this._button.stateNum=t}),i}(T),X=function(t){function i(t){this.rollRatio=.95,this.changeHandler=null,this.scaleBar=!0,this.autoHide=!1,this.elasticDistance=0,this.elasticBackTime=500,this.upButton=null,this.downButton=null,this.slider=null,this._scrollSize=1,this._skin=null,this._thumbPercent=1,this._target=null,this._lastPoint=null,this._lastOffset=0,this._checkElastic=!1,this._isElastic=!1,this._value=NaN,this._hide=!1,this._clickOnly=!0,this._offsets=null,i.__super.call(this),this._showButtons=M.showButtons,this._touchScrollEnable=M.touchScrollEnable,this._mouseWheelEnable=M.mouseWheelEnable,this.skin=t,this.max=1}h(i,"laya.ui.ScrollBar",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),this.stopScroll(),this.target=null,t.prototype.destroy.call(this,i),this.upButton&&this.upButton.destroy(i),this.downButton&&this.downButton.destroy(i),this.slider&&this.slider.destroy(i),this.upButton=this.downButton=null,this.slider=null,this.changeHandler=null,this._offsets=null},s.createChildren=function(){this.addChild(this.slider=new E),this.addChild(this.upButton=new N),this.addChild(this.downButton=new N)},s.initialize=function(){this.slider.showLabel=!1,this.slider.on("change",this,this.onSliderChange),this.slider.setSlider(0,0,0),this.upButton.on("mousedown",this,this.onButtonMouseDown),this.downButton.on("mousedown",this,this.onButtonMouseDown)},s.onSliderChange=function(){this._value!=this.slider.value&&(this.value=this.slider.value)},s.onButtonMouseDown=function(t){var i=t.currentTarget===this.upButton;this.slide(i),e.timer.once(I.scrollBarDelayTime,this,this.startLoop,[i]),e.stage.once("mouseup",this,this.onStageMouseUp)},s.startLoop=function(t){e.timer.frameLoop(1,this,this.slide,[t])},s.slide=function(t){t?this.value-=this._scrollSize:this.value+=this._scrollSize},s.onStageMouseUp=function(t){e.timer.clear(this,this.startLoop),e.timer.clear(this,this.slide)},s.changeScrollBar=function(){this.upButton.visible=this._showButtons,this.downButton.visible=this._showButtons,this._showButtons&&(this.upButton.skin=this._skin.replace(".png","$up.png"),this.downButton.skin=this._skin.replace(".png","$down.png")),this.slider.isVertical?this.slider.y=this._showButtons?this.upButton.height:0:this.slider.x=this._showButtons?this.upButton.width:0,this.resetPositions(),this.repaint()},s.changeSize=function(){t.prototype.changeSize.call(this),this.repaint(),this.resetPositions(),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this.value)},s.resetPositions=function(){this.slider.isVertical?this.slider.height=this.height-(this._showButtons?this.upButton.height+this.downButton.height:0):this.slider.width=this.width-(this._showButtons?this.upButton.width+this.downButton.width:0),this.resetButtonPosition()},s.resetButtonPosition=function(){this.slider.isVertical?this.downButton.y=this.slider.y+this.slider.height:this.downButton.x=this.slider.x+this.slider.width},s.setScroll=function(t,i,e){this.runCallLater(this.changeSize),this.slider.setSlider(t,i,e),this.slider.bar.visible=i>0,!this._hide&&this.autoHide&&(this.visible=!1)},s.onTargetMouseWheel=function(t){this.value-=t.delta*this._scrollSize,this.target=this._target},s.onTargetMouseDown=function(t){this._clickOnly=!0,this._lastOffset=0,this._checkElastic=!1,this._lastPoint||(this._lastPoint=new m),this._lastPoint.setTo(e.stage.mouseX,e.stage.mouseY),e.timer.clear(this,this.tweenMove),w.clearTween(this),e.stage.once("mouseup",this,this.onStageMouseUp2),e.stage.once("mouseout",this,this.onStageMouseUp2),e.timer.frameLoop(1,this,this.loop)},s.loop=function(){var t=e.stage.mouseY,i=e.stage.mouseX;if(this._lastOffset=this.isVertical?t-this._lastPoint.y:i-this._lastPoint.x,this._clickOnly){if(!(Math.abs(this._lastOffset*(this.isVertical?e.stage._canvasTransform.getScaleY():e.stage._canvasTransform.getScaleX()))>1))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this._target.mouseEnabled=!1,!this.hide&&this.autoHide&&(this.alpha=1,this.visible=!0),this.event("start")}this._offsets.push(this._lastOffset),this._lastPoint.x=i,this._lastPoint.y=t,0!==this._lastOffset&&(this._checkElastic||(this.elasticDistance>0?this._checkElastic||0==this._lastOffset||(this._lastOffset>0&&this._value<=this.min||this._lastOffset<0&&this._value>=this.max?(this._isElastic=!0,this._checkElastic=!0):this._isElastic=!1):this._checkElastic=!0),this._isElastic?this._value<=this.min?this.value-=this._lastOffset*Math.max(0,1-(this.min-this._value)/this.elasticDistance):this._value>=this.max&&(this.value-=this._lastOffset*Math.max(0,1-(this._value-this.max)/this.elasticDistance)):this.value-=this._lastOffset)},s.onStageMouseUp2=function(t){if(e.stage.off("mouseup",this,this.onStageMouseUp2),e.stage.off("mouseout",this,this.onStageMouseUp2),e.timer.clear(this,this.loop),!(this._clickOnly&&this._value>=this.min&&this._value<=this.max))if(this._target.mouseEnabled=!0,this._isElastic)this._value<this.min?w.to(this,{value:this.min},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver)):this._value>this.max&&w.to(this,{value:this.max},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver));else{if(!this._offsets)return;this._offsets.length<1&&(this._offsets[0]=this.isVertical?e.stage.mouseY-this._lastPoint.y:e.stage.mouseX-this._lastPoint.x);for(var i=0,s=Math.min(this._offsets.length,3),h=0;h<s;h++)i+=this._offsets[this._offsets.length-1-h];if(this._lastOffset=i/s,(i=Math.abs(this._lastOffset))<2)return void this.event("end");i>60&&(this._lastOffset=this._lastOffset>0?60:-60);var n=Math.round(Math.abs(this.elasticDistance*(this._lastOffset/240)));e.timer.frameLoop(1,this,this.tweenMove,[n])}},s.elasticOver=function(){this._isElastic=!1,!this.hide&&this.autoHide&&w.to(this,{alpha:0},500),this.event("end")},s.tweenMove=function(t){this._lastOffset*=this.rollRatio;var i=NaN;if(t>0&&(this._lastOffset>0&&this.value<=this.min?(this._isElastic=!0,i=.5*-(this.min-t-this.value),this._lastOffset>i&&(this._lastOffset=i)):this._lastOffset<0&&this.value>=this.max&&(this._isElastic=!0,i=.5*-(this.max+t-this.value),this._lastOffset<i&&(this._lastOffset=i))),this.value-=this._lastOffset,Math.abs(this._lastOffset)<1){if(e.timer.clear(this,this.tweenMove),this._isElastic)return void(this._value<this.min?w.to(this,{value:this.min},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver)):this._value>this.max?w.to(this,{value:this.max},this.elasticBackTime,a.sineOut,f.create(this,this.elasticOver)):this.elasticOver());this.event("end"),!this.hide&&this.autoHide&&w.to(this,{alpha:0},500)}},s.stopScroll=function(){this.onStageMouseUp2(null),e.timer.clear(this,this.tweenMove),w.clearTween(this)},n(0,s,"measureHeight",function(){return this.slider.isVertical?100:this.slider.height}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.slider.skin=this._skin,this.callLater(this.changeScrollBar))}),n(0,s,"max",function(){return this.slider.max},function(t){this.slider.max=t}),n(0,s,"showButtons",function(){return this._showButtons},function(t){this._showButtons=t,this.callLater(this.changeScrollBar)}),n(0,s,"measureWidth",function(){return this.slider.isVertical?this.slider.width:100}),n(0,s,"min",function(){return this.slider.min},function(t){this.slider.min=t}),n(0,s,"value",function(){return this._value},function(t){t!==this._value&&(this._value=t,this._isElastic||(this.slider._value!=t&&(this.slider._value=t,this.slider.changeValue()),this._value=this.slider._value),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this._value))}),n(0,s,"isVertical",function(){return this.slider.isVertical},function(t){this.slider.isVertical=t}),n(0,s,"sizeGrid",function(){return this.slider.sizeGrid},function(t){this.slider.sizeGrid=t}),n(0,s,"scrollSize",function(){return this._scrollSize},function(t){this._scrollSize=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(T,this,"dataSource",t)}),n(0,s,"thumbPercent",function(){return this._thumbPercent},function(t){this.runCallLater(this.changeScrollBar),this.runCallLater(this.changeSize),t=t>=1?.99:t,this._thumbPercent=t,this.scaleBar&&(this.slider.isVertical?this.slider.bar.height=Math.max(this.slider.height*t,I.scrollBarMinNum):this.slider.bar.width=Math.max(this.slider.width*t,I.scrollBarMinNum))}),n(0,s,"target",function(){return this._target},function(t){this._target&&(this._target.off("mousewheel",this,this.onTargetMouseWheel),this._target.off("mousedown",this,this.onTargetMouseDown)),this._target=t,t&&(this._mouseWheelEnable&&this._target.on("mousewheel",this,this.onTargetMouseWheel),this._touchScrollEnable&&this._target.on("mousedown",this,this.onTargetMouseDown))}),n(0,s,"hide",function(){return this._hide},function(t){this._hide=t,this.visible=!t}),n(0,s,"touchScrollEnable",function(){return this._touchScrollEnable},function(t){this._touchScrollEnable=t,this.target=this._target}),n(0,s,"mouseWheelEnable",function(){return this._mouseWheelEnable},function(t){this._mouseWheelEnable=t}),n(0,s,"tick",function(){return this.slider.tick},function(t){this.slider.tick=t}),i}(T),E=function(t){function i(t){this.changeHandler=null,this.isVertical=!0,this.showLabel=!0,this._allowClickBack=!1,this._max=100,this._min=0,this._tick=1,this._value=0,this._skin=null,this._bg=null,this._progress=null,this._bar=null,this._tx=NaN,this._ty=NaN,this._maxMove=NaN,this._globalSacle=null,i.__super.call(this),this.skin=t}h(i,"laya.ui.Slider",t);var o=i.prototype;return o.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(i),this._bar&&this._bar.destroy(i),this._progress&&this._progress.destroy(i),this._bg=null,this._bar=null,this._progress=null,this.changeHandler=null},o.createChildren=function(){this.addChild(this._bg=new V),this.addChild(this._bar=new N)},o.initialize=function(){this._bar.on("mousedown",this,this.onBarMouseDown),this._bg.sizeGrid=this._bar.sizeGrid="4,4,4,4,0",this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid),this.allowClickBack=!0},o.onBarMouseDown=function(t){this._globalSacle||(this._globalSacle=new m),this._globalSacle.setTo(this.globalScaleX||.01,this.globalScaleY||.01),this._maxMove=this.isVertical?this.height-this._bar.height:this.width-this._bar.width,this._tx=e.stage.mouseX,this._ty=e.stage.mouseY,e.stage.on("mousemove",this,this.mouseMove),e.stage.once("mouseup",this,this.mouseUp),e.stage.once("mouseout",this,this.mouseUp),this.showValueText()},o.showValueText=function(){if(this.showLabel){var t=laya.ui.Slider.label;this.addChild(t),t.textField.changeText(this._value+""),this.isVertical?(t.x=this._bar.x+20,t.y=.5*(this._bar.height-t.height)+this._bar.y):(t.y=this._bar.y-20,t.x=.5*(this._bar.width-t.width)+this._bar.x)}},o.hideValueText=function(){laya.ui.Slider.label&&laya.ui.Slider.label.removeSelf()},o.mouseUp=function(t){e.stage.off("mousemove",this,this.mouseMove),e.stage.off("mouseup",this,this.mouseUp),e.stage.off("mouseout",this,this.mouseUp),this.sendChangeEvent("changed"),this.hideValueText()},o.mouseMove=function(t){var i=this._value;this.isVertical?(this._bar.y+=(e.stage.mouseY-this._ty)/this._globalSacle.y,this._bar.y>this._maxMove?this._bar.y=this._maxMove:this._bar.y<0&&(this._bar.y=0),this._value=this._bar.y/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x+=(e.stage.mouseX-this._tx)/this._globalSacle.x,this._bar.x>this._maxMove?this._bar.x=this._maxMove:this._bar.x<0&&(this._bar.x=0),this._value=this._bar.x/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width)),this._tx=e.stage.mouseX,this._ty=e.stage.mouseY;var s=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*s)/s,this._value!=i&&this.sendChangeEvent(),this.showValueText()},o.sendChangeEvent=function(t){void 0===t&&(t="change"),this.event(t),this.changeHandler&&this.changeHandler.runWith(this._value)},o.setBarPoint=function(){this.isVertical?this._bar.x=Math.round(.5*(this._bg.width-this._bar.width)):this._bar.y=Math.round(.5*(this._bg.height-this._bar.height))},o.changeSize=function(){t.prototype.changeSize.call(this),this.isVertical?this._bg.height=this.height:this._bg.width=this.width,this.setBarPoint(),this.changeValue()},o.setSlider=function(t,i,e){this._value=-1,this._min=t,this._max=i>t?i:t,this.value=e<t?t:e>i?i:e},o.changeValue=function(){var t=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*t)/t,this._value=this._value>this._max?this._max:this._value<this._min?this._min:this._value;var i=this._max-this._min;0===i&&(i=1),this.isVertical?(this._bar.y=(this._value-this._min)/i*(this.height-this._bar.height),this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x=(this._value-this._min)/i*(this.width-this._bar.width),this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width))},o.onBgMouseDown=function(t){var i=this._bg.getMousePoint();this.isVertical?this.value=i.y/(this.height-this._bar.height)*(this._max-this._min)+this._min:this.value=i.x/(this.width-this._bar.width)*(this._max-this._min)+this._min},n(0,o,"measureHeight",function(){return Math.max(this._bg.height,this._bar.height)}),n(0,o,"skin",function(){return this._skin},function(t){if(this._skin!=t){this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png");var i=this._skin.replace(".png","$progress.png");g.getRes(i)&&(this._progress||(this.addChild(this._progress=new V),this._progress.sizeGrid=this._bar.sizeGrid,this.setChildIndex(this._progress,1)),this._progress.skin=i),this.setBarPoint(),this.callLater(this.changeValue)}}),n(0,o,"allowClickBack",function(){return this._allowClickBack},function(t){this._allowClickBack!=t&&(this._allowClickBack=t,t?this._bg.on("mousedown",this,this.onBgMouseDown):this._bg.off("mousedown",this,this.onBgMouseDown))}),n(0,o,"max",function(){return this._max},function(t){this._max!=t&&(this._max=t,this.callLater(this.changeValue))}),n(0,o,"measureWidth",function(){return Math.max(this._bg.width,this._bar.width)}),n(0,o,"tick",function(){return this._tick},function(t){this._tick!=t&&(this._tick=t,this.callLater(this.changeValue))}),n(0,o,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=t,this._bar.sizeGrid=t,this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid)}),n(0,o,"min",function(){return this._min},function(t){this._min!=t&&(this._min=t,this.callLater(this.changeValue))}),n(0,o,"value",function(){return this._value},function(t){if(this._value!=t){var i=this._value;this._value=t,this.changeValue(),this._value!=i&&this.sendChangeEvent()}}),n(0,o,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(T,this,"dataSource",t)}),n(0,o,"bar",function(){return this._bar}),s(i,["label",function(){return this.label=new D}]),i}(T),V=function(t){function i(t){this._bitmap=null,this._skin=null,this._group=null,i.__super.call(this),this.skin=t}h(i,"laya.ui.Image",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null},s.dispose=function(){this.destroy(!0),e.loader.clearRes(this._skin)},s.createChildren=function(){this.graphics=this._bitmap=new z,this._bitmap.autoCacheCmd=!1},s.setSource=function(t,i){t===this._skin&&i&&(this.source=i,this.onCompResize())},n(0,s,"source",function(){return this._bitmap.source},function(t){this._bitmap&&(this._bitmap.source=t,this.event("loaded"),this.repaint())}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"string"==typeof t?this.skin=t:e.superSet(T,this,"dataSource",t)}),n(0,s,"measureHeight",function(){return this._bitmap.height}),n(0,s,"skin",function(){return this._skin},function(t){if(this._skin!=t)if(this._skin=t,t){var i=g.getRes(t);i?(this.source=i,this.onCompResize()):e.loader.load(this._skin,f.create(this,this.setSource,[this._skin]),null,"image",1,!0,this._group)}else this.source=null}),n(0,s,"group",function(){return this._group},function(t){t&&this._skin&&g.setGroup(this._skin,t),this._group=t}),n(0,s,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,s,"measureWidth",function(){return this._bitmap.width}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._bitmap.width=0==t?1e-7:t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._bitmap.height=0==t?1e-7:t}),i}(T),D=function(t){function i(t){this._tf=null,i.__super.call(this),void 0===t&&(t=""),u.defaultColor=I.labelColor,this.text=t}h(i,"laya.ui.Label",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._tf=null},s.createChildren=function(){this.addChild(this._tf=new b)},s.changeText=function(t){this._tf.changeText(t)},n(0,s,"padding",function(){return this._tf.padding.join(",")},function(t){this._tf.padding=L.fillArray(I.labelPadding,t,Number)}),n(0,s,"bold",function(){return this._tf.bold},function(t){this._tf.bold=t}),n(0,s,"align",function(){return this._tf.align},function(t){this._tf.align=t}),n(0,s,"text",function(){return this._tf.text},function(t){this._tf.text!=t&&(t&&(t=L.adptString(t+"")),this._tf.text=t,this.event("change"),this._width&&this._height||this.onCompResize())}),n(0,s,"italic",function(){return this._tf.italic},function(t){this._tf.italic=t}),n(0,s,"wordWrap",function(){return this._tf.wordWrap},function(t){this._tf.wordWrap=t}),n(0,s,"font",function(){return this._tf.font},function(t){this._tf.font=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.text=t+"":e.superSet(T,this,"dataSource",t)}),n(0,s,"color",function(){return this._tf.color},function(t){this._tf.color=t}),n(0,s,"valign",function(){return this._tf.valign},function(t){this._tf.valign=t}),n(0,s,"leading",function(){return this._tf.leading},function(t){this._tf.leading=t}),n(0,s,"fontSize",function(){return this._tf.fontSize},function(t){this._tf.fontSize=t}),n(0,s,"bgColor",function(){return this._tf.bgColor},function(t){this._tf.bgColor=t}),n(0,s,"borderColor",function(){return this._tf.borderColor},function(t){this._tf.borderColor=t}),n(0,s,"stroke",function(){return this._tf.stroke},function(t){this._tf.stroke=t}),n(0,s,"strokeColor",function(){return this._tf.strokeColor},function(t){this._tf.strokeColor=t}),n(0,s,"textField",function(){return this._tf}),n(0,s,"measureWidth",function(){return this._tf.width}),n(0,s,"measureHeight",function(){return this._tf.height}),n(0,s,"width",function(){return this._width||this._tf.text?e.superGet(T,this,"width"):0},function(t){e.superSet(T,this,"width",t),this._tf.width=t}),n(0,s,"height",function(){return this._height||this._tf.text?e.superGet(T,this,"height"):0},function(t){e.superSet(T,this,"height",t),this._tf.height=t}),n(0,s,"overflow",function(){return this._tf.overflow},function(t){this._tf.overflow=t}),n(0,s,"underline",function(){return this._tf.underline},function(t){this._tf.underline=t}),n(0,s,"underlineColor",function(){return this._tf.underlineColor},function(t){this._tf.underlineColor=t}),i}(T),G=function(t){function i(t){this.changeHandler=null,this._bg=null,this._bar=null,this._skin=null,this._value=.5,i.__super.call(this),this.skin=t}h(i,"laya.ui.ProgressBar",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(i),this._bar&&this._bar.destroy(i),this._bg=this._bar=null,this.changeHandler=null},s.createChildren=function(){this.addChild(this._bg=new V),this.addChild(this._bar=new V),this._bar._bitmap.autoCacheCmd=!1},s.changeValue=function(){if(this.sizeGrid){var t=this.sizeGrid.split(","),i=Number(t[3]),e=Number(t[1]),s=(this.width-i-e)*this._value;this._bar.width=i+e+s,this._bar.visible=this._bar.width>i+e}else this._bar.width=this.width*this._value},n(0,s,"measureHeight",function(){return this._bg.height}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png"),this.callLater(this.changeValue))}),n(0,s,"measureWidth",function(){return this._bg.width}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(T,this,"height",t),this._bg.height=this._height,this._bar.height=this._height}),n(0,s,"bar",function(){return this._bar}),n(0,s,"value",function(){return this._value},function(t){this._value!=t&&(t=t>1?1:t<0?0:t,this._value=t,this.callLater(this.changeValue),this.event("change"),this.changeHandler&&this.changeHandler.runWith(t))}),n(0,s,"bg",function(){return this._bg}),n(0,s,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=this._bar.sizeGrid=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(T,this,"width",t),this._bg.width=this._width,this.callLater(this.changeValue)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(T,this,"dataSource",t)}),i}(T),R=(function(t){function i(){this._tipBox=null,this._tipText=null,this._defaultTipHandler=null,i.__super.call(this),this._tipBox=new T,this._tipBox.addChild(this._tipText=new b),this._tipText.x=this._tipText.y=5,this._tipText.color=i.tipTextColor,this._defaultTipHandler=this._showDefaultTip,e.stage.on("showtip",this,this._onStageShowTip),e.stage.on("hidetip",this,this._onStageHideTip),this.zOrder=1100}h(i,"laya.ui.TipManager",T);var s=i.prototype;s._onStageHideTip=function(t){e.timer.clear(this,this._showTip),this.closeAll(),this.removeSelf()},s._onStageShowTip=function(t){e.timer.once(i.tipDelay,this,this._showTip,[t],!0)},s._showTip=function(t){if("string"==typeof t){var i=String(t);Boolean(i)&&this._defaultTipHandler(i)}else t instanceof laya.utils.Handler?t.run():"function"==typeof t&&t.apply();e.stage.on("mousemove",this,this._onStageMouseMove),e.stage.on("mousedown",this,this._onStageMouseDown),this._onStageMouseMove(null)},s._onStageMouseDown=function(t){this.closeAll()},s._onStageMouseMove=function(t){this._showToStage(this,i.offsetX,i.offsetY)},s._showToStage=function(t,i,s){void 0===i&&(i=0),void 0===s&&(s=0);var h=t.getBounds();t.x=e.stage.mouseX+i,t.y=e.stage.mouseY+s,t.x+h.width>e.stage.width&&(t.x-=h.width+i),t.y+h.height>e.stage.height&&(t.y-=h.height+s)},s.closeAll=function(){e.timer.clear(this,this._showTip),e.stage.off("mousemove",this,this._onStageMouseMove),e.stage.off("mousedown",this,this._onStageMouseDown),this.removeChildren()},s.showDislayTip=function(t){this.addChild(t),this._showToStage(this),e._currentStage.addChild(this)},s._showDefaultTip=function(t){this._tipText.text=t;var s=this._tipBox.graphics;s.clear(),s.drawRect(0,0,this._tipText.width+10,this._tipText.height+10,i.tipBackColor),this.addChild(this._tipBox),this._showToStage(this),e._currentStage.addChild(this)},n(0,s,"defaultTipHandler",function(){return this._defaultTipHandler},function(t){this._defaultTipHandler=t}),i.offsetX=10,i.offsetY=15,i.tipTextColor="#ffffff",i.tipBackColor="#111111",i.tipDelay=200}(),function(t){function i(){this._idMap=null,this._aniList=null,this._watchMap={},i.__super.call(this)}var n;h(i,"laya.ui.View",H);var l=i.prototype;return l.createView=function(t){if(t.animations&&!this._idMap&&(this._idMap={}),i.createComp(t,this,this),t.animations){var e,s,h=[],n=t.animations,o=0,r=n.length;for(o=0;o<r;o++){switch(e=new _,s=n[o],e._setUp(this._idMap,s),this[s.name]=e,e._setControlNode(this),s.action){case 1:e.play(0,!1);break;case 2:e.play(0,!0)}h.push(e)}this._aniList=h}this._width>0&&null==t.props.hitTestPrior&&!this.mouseThrough&&(this.hitTestPrior=!0)},l.onEvent=function(t,i){},l.loadUI=function(t){var e=i.uiMap[t];e&&this.createView(e)},l.destroy=function(t){void 0===t&&(t=!0),this._aniList&&(this._aniList.length=0),this._idMap=null,this._aniList=null,this._watchMap=null,laya.ui.Component.prototype.destroy.call(this,t)},l.changeData=function(t){var i=this._watchMap[t];if(i){console.log("change",t);for(var e=0,s=i.length;e<s;e++){i[e].exe(this)}}},i._regs=function(){for(var t in i.uiClassMap)r.regClass(t,i.uiClassMap[t])},i.createComp=function(t,s,h,n){if(!(s=s||i.getCompInstance(t)))return console.warn("can not create:"+t.type),null;var o=t.child;if(o)for(var l=s instanceof laya.ui.List,a=0,c=o.length;a<c;a++){var u=o[a];if(!s.hasOwnProperty("itemRender")||"render"!=u.props.name&&"render"!==u.props.renderType)if("Graphic"==u.type)r.addGraphicsToSprite(u,s);else if(r.isDrawType(u.type))r.addGraphicToSprite(u,s,!0);else{if(l){var _=[],d=i.createComp(u,null,h,_);_.length&&(d._$bindData=_)}else d=i.createComp(u,null,h,n);"Script"==u.type?"owner"in d?d.owner=s:"target"in d&&(d.target=s):"mask"==u.props.renderType||"mask"==u.props.name?s.mask=d:d instanceof laya.display.Sprite&&s.addChild(d)}else s.itemRender=u}var f=t.props;for(var p in f){var g=f[p];i.eventDic[p]?g&&h&&s.on(p,h,h.onEvent,[g]):i.setCompValue(s,p,g,h,n)}return e.__typeof(s,"laya.ui.IItem")&&s.initItems(),t.compId&&h&&h._idMap&&(h._idMap[t.compId]=s),s},i.setCompValue=function(t,s,h,o,l){if("string"==typeof h&&h.indexOf("${")>-1){if(i._sheet||(i._sheet=r.getClass("laya.data.Table")),!i._sheet)return void console.warn("Can not find class Sheet");if(l)l.push(t,s,h);else if(o){-1==h.indexOf("].")&&(h=h.replace(".","[0]."));var a=new n(t,s,h);a.exe(o);for(var c,u,_=h.replace(/\[.*?\]\./g,".");null!=(c=i._parseWatchData.exec(_));){for(var d=c[1];null!=(u=i._parseKeyWord.exec(d));){var f=u[0],p=o._watchMap[f]||(o._watchMap[f]=[]);p.push(a),i._sheet.I.notifer.on(f,o,o.changeData,[f])}(p=o._watchMap[d]||(o._watchMap[d]=[])).push(a),i._sheet.I.notifer.on(d,o,o.changeData,[d])}}}else if("var"===s&&o)o[h]=t;else if("onClick"==s){var g=e._runScript("(function(){"+h+"})");t.on("click",o,g)}else t[s]="true"===h||"false"!==h&&h},i.getCompInstance=function(t){var s,h=t.props?t.props.runtime:null;return s=h?i.viewClassMap[h]||i.uiClassMap[h]||e.__classmap[h]:i.uiClassMap[t.type],t.props&&t.props.hasOwnProperty("renderType")&&"instance"==t.props.renderType?s.instance:s?new s:null},i.regComponent=function(t,e){i.uiClassMap[t]=e,r.regClass(t,e)},i.regViewRuntime=function(t,e){i.viewClassMap[t]=e},i.uiMap={},i.viewClassMap={},i._sheet=null,s(i,["uiClassMap",function(){return this.uiClassMap={ViewStack:tt,LinkButton:N,TextArea:at,ColorPicker:A,Box:H,Button:N,CheckBox:W,Clip:O,ComboBox:Y,Component:T,HScrollBar:j,HSlider:Z,Image:V,Label:D,List:U,Panel:K,ProgressBar:G,Radio:J,RadioGroup:rt,ScrollBar:X,Slider:E,Tab:lt,TextInput:et,View:i,VScrollBar:it,VSlider:st,Tree:Q,HBox:nt,VBox:ot,Sprite:C,Animation:o,Text:b,FontClip:F}},"eventDic",function(){return this.eventDic={mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0,rightmousedown:!0,rightmouseup:!0,rightclick:!0}},"_parseWatchData",function(){return this._parseWatchData=/\${(.*?)}/g},"_parseKeyWord",function(){return this._parseKeyWord=/[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g}]),i.__init$=function(){i._regs(),n=function(){function t(t,i,e){this.comp=null,this.prop=null,this.value=null,this.comp=t,this.prop=i,this.value=e}h(t,"");return t.prototype.exe=function(t){var i=L.getBindFun(this.value);this.comp[this.prop]=i.call(this,t)},t}()},i}()),W=function(t){function i(t,e){void 0===e&&(e=""),i.__super.call(this,t,e)}h(i,"laya.ui.CheckBox",t);var s=i.prototype;return s.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!0,this._autoSize=!1},s.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0},n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"boolean"==typeof t?this.selected=t:"string"==typeof t?this.selected="true"===t:e.superSet(N,this,"dataSource",t)}),i}(N),$=function(t){function i(){this._space=0,this._align="none",this._itemChanged=!1,i.__super.call(this)}h(i,"laya.ui.LayoutBox",H);var e=i.prototype;return e.addChild=function(t){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChild.call(this,t)},e.onResize=function(t){this._setItemChanged()},e.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChildAt.call(this,t,i)},e.removeChild=function(t){return t.off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChild.call(this,t)},e.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChildAt.call(this,t)},e.refresh=function(){this._setItemChanged()},e.changeItems=function(){this._itemChanged=!1},e.sortItem=function(t){t&&t.sort(function(t,i){return t.y-i.y})},e._setItemChanged=function(){this._itemChanged||(this._itemChanged=!0,this.callLater(this.changeItems))},n(0,e,"space",function(){return this._space},function(t){this._space=t,this._setItemChanged()}),n(0,e,"align",function(){return this._align},function(t){this._align=t,this._setItemChanged()}),i}(),F=function(t){function i(t,e){this._valueArr=null,this._indexMap=null,this._sheet=null,this._direction="horizontal",this._spaceX=0,this._spaceY=0,this._align="left",this._wordsW=0,this._wordsH=0,i.__super.call(this),t&&(this.skin=t),e&&(this.sheet=e)}h(i,"laya.ui.FontClip",t);var s=i.prototype;return s.createChildren=function(){this._bitmap=new z,this.on("loaded",this,this._onClipLoaded)},s._onClipLoaded=function(){this.callLater(this.changeValue)},s.changeValue=function(){if(this._sources&&this._valueArr){this.graphics.clear(!0);var t;if(t=this._sources[0]){var i="horizontal"===this._direction;i?(this._wordsW=this._valueArr.length*(t.sourceWidth+this.spaceX),this._wordsH=t.sourceHeight):(this._wordsW=t.sourceWidth,this._wordsH=(t.sourceHeight+this.spaceY)*this._valueArr.length);var e=0;if(this._width)switch(this._align){case"center":e=.5*(this._width-this._wordsW);break;case"right":e=this._width-this._wordsW;break;default:e=0}for(var s=0,h=this._valueArr.length;s<h;s++){var n=this._indexMap[this._valueArr.charAt(s)];this.sources[n]&&(t=this.sources[n],i?this.graphics.drawTexture(t,e+s*(t.sourceWidth+this.spaceX),0,t.sourceWidth,t.sourceHeight):this.graphics.drawTexture(t,0+e,s*(t.sourceHeight+this.spaceY),t.sourceWidth,t.sourceHeight))}this._width||(this.resetLayoutX(),this.callLater(this.changeSize)),this._height||(this.resetLayoutY(),this.callLater(this.changeSize))}}},s.destroy=function(i){void 0===i&&(i=!0),this._valueArr=null,this._indexMap=null,this.graphics.clear(!0),this.removeSelf(),this.off("loaded",this,this._onClipLoaded),t.prototype.destroy.call(this,i)},n(0,s,"sheet",function(){return this._sheet},function(t){t+="",this._sheet=t;var i=t.split(" ");this._clipX=String(i[0]).length,this.clipY=i.length,this._indexMap={};for(var e=0;e<this._clipY;e++)for(var s=i[e].split(""),h=0,n=s.length;h<n;h++)this._indexMap[s[h]]=e*this._clipX+h}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(O,this,"height",t),this.callLater(this.changeValue)}),n(0,s,"direction",function(){return this._direction},function(t){this._direction=t,this.callLater(this.changeValue)}),n(0,s,"value",function(){return this._valueArr?this._valueArr:""},function(t){t+="",this._valueArr=t,this.callLater(this.changeValue)}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(O,this,"width",t),this.callLater(this.changeValue)}),n(0,s,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,"horizontal"===this._direction&&this.callLater(this.changeValue)}),n(0,s,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,"horizontal"!==this._direction&&this.callLater(this.changeValue)}),n(0,s,"align",function(){return this._align},function(t){this._align=t,this.callLater(this.changeValue)}),n(0,s,"measureWidth",function(){return this._wordsW}),n(0,s,"measureHeight",function(){return this._wordsH}),i}(O),U=function(t){function i(){this.selectHandler=null,this.renderHandler=null,this.mouseHandler=null,this.selectEnable=!1,this.totalPage=0,this._content=null,this._scrollBar=null,this._itemRender=null,this._repeatX=0,this._repeatY=0,this._repeatX2=0,this._repeatY2=0,this._spaceX=0,this._spaceY=0,this._array=null,this._startIndex=0,this._selectedIndex=-1,this._page=0,this._isVertical=!0,this._cellSize=20,this._cellOffset=0,this._isMoved=!1,this.cacheContent=!1,this._createdLine=0,this._cellChanged=!1,i.__super.call(this),this._cells=[],this._offset=new m}h(i,"laya.ui.List",t);var s=i.prototype;return e.imps(s,{"laya.ui.IRender":!0,"laya.ui.IItem":!0}),s.destroy=function(t){void 0===t&&(t=!0),this._content&&this._content.destroy(t),this._scrollBar&&this._scrollBar.destroy(t),laya.ui.Component.prototype.destroy.call(this,t),this._content=null,this._scrollBar=null,this._itemRender=null,this._cells=null,this._array=null,this.selectHandler=this.renderHandler=this.mouseHandler=null},s.createChildren=function(){this.addChild(this._content=new H)},s.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=e.superGet(H,this,"cacheAs")),e.superSet(H,this,"cacheAs","none"),this._scrollBar.once("end",this,this.onScrollEnd)},s.onScrollEnd=function(){e.superSet(H,this,"cacheAs",this._$P.cacheAs)},s._removePreScrollBar=function(){var t=this.removeChildByName("scrollBar");t&&t.destroy(!0)},s.changeCells=function(){if(this._cellChanged=!1,this._itemRender){this.scrollBar=this.getChildByName("scrollBar");var t=this._getOneCell(),i=t.width+this._spaceX||1,e=t.height+this._spaceY||1;this._width>0&&(this._repeatX2=this._isVertical?Math.round(this._width/i):Math.ceil(this._width/i)),this._height>0&&(this._repeatY2=this._isVertical?Math.ceil(this._height/e):Math.round(this._height/e));var s=this._width?this._width:i*this.repeatX-this._spaceX,h=this._height?this._height:e*this.repeatY-this._spaceY;this._cellSize=this._isVertical?e:i,this._cellOffset=this._isVertical?e*Math.max(this._repeatY2,this._repeatY)-h-this._spaceY:i*Math.max(this._repeatX2,this._repeatX)-s-this._spaceX,this._isVertical&&this._scrollBar?this._scrollBar.height=h:!this._isVertical&&this._scrollBar&&(this._scrollBar.width=s),this.setContentSize(s,h);var n=this._isVertical?this.repeatX:this.repeatY,o=(this._isVertical?this.repeatY:this.repeatX)+(this._scrollBar?1:0);this._createItems(0,n,o),this._createdLine=o,this._array&&(this.array=this._array,this.runCallLater(this.renderItems))}},s._getOneCell=function(){if(0===this._cells.length){var t=this.createItem();if(this._offset.setTo(t.x,t.y),this.cacheContent)return t;this._cells.push(t)}return this._cells[0]},s._createItems=function(t,i,e){var s=this._content,h=this._getOneCell(),n=h.width+this._spaceX,o=h.height+this._spaceY;if(this.cacheContent){var r=new H;r.cacheAsBitmap=!0,r.pos((this._isVertical?0:t)*n,(this._isVertical?t:0)*o),this._content.addChild(r),this._content.optimizeScrollRect=!0,s=r}else{for(var l=[],a=this._cells.length-1;a>-1;a--){var c=this._cells[a];c.removeSelf(),l.push(c)}this._cells.length=0}for(var u=t;u<e;u++)for(var _=0;_<i;_++)(h=l&&l.length?l.pop():this.createItem()).x=(this._isVertical?_:u)*n-s.x,h.y=(this._isVertical?u:_)*o-s.y,h.name="item"+(u*i+_),s.addChild(h),this.addCell(h)},s.createItem=function(){var t=[];if("function"==typeof this._itemRender)var i=new this._itemRender;else i=R.createComp(this._itemRender,null,null,t);if(0==t.length&&i._watchMap){var e=i._watchMap;for(var s in e)for(var h=e[s],n=0;n<h.length;n++){var o=h[n];t.push(o.comp,o.prop,o.value)}}return t.length&&(i._$bindData=t),i},s.addCell=function(t){t.on("click",this,this.onCellMouse),t.on("rightclick",this,this.onCellMouse),t.on("mouseover",this,this.onCellMouse),t.on("mouseout",this,this.onCellMouse),t.on("mousedown",this,this.onCellMouse),t.on("mouseup",this,this.onCellMouse),this._cells.push(t)},s.initItems=function(){if(!this._itemRender&&null!=this.getChildByName("item0")){this.repeatX=1;var t=0;t=0;for(var i=0;i<1e4;i++){var e=this.getChildByName("item"+i);{if(!e)break;this.addCell(e),t++}}this.repeatY=t}},s.setContentSize=function(t,i){this._content.width=t,this._content.height=i,(this._scrollBar||0!=this._offset.x||0!=this._offset.y)&&(this._content.scrollRect||(this._content.scrollRect=new y),this._content.scrollRect.setTo(-this._offset.x,-this._offset.y,t,i),this._content.scrollRect=this._content.scrollRect),this.event("resize")},s.onCellMouse=function(t){"mousedown"===t.type&&(this._isMoved=!1);var i=t.currentTarget,e=this._startIndex+this._cells.indexOf(i);e<0||("click"===t.type||"rightclick"===t.type?this.selectEnable&&!this._isMoved?this.selectedIndex=e:this.changeCellState(i,!0,0):"mouseover"!==t.type&&"mouseout"!==t.type||this._selectedIndex===e||this.changeCellState(i,"mouseover"===t.type,0),this.mouseHandler&&this.mouseHandler.runWith([t,e]))},s.changeCellState=function(t,i,e){var s=t.getChildByName("selectBox");s&&(this.selectEnable=!0,s.visible=i,s.index=e)},s.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this.width,this.height),this._scrollBar&&this.callLater(this.onScrollBarChange)},s.onScrollBarChange=function(t){this.runCallLater(this.changeCells);var i=this._scrollBar.value,e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,h=Math.floor(i/this._cellSize);if(this.cacheContent)o=s+1,this._createdLine-h<o&&(this._createItems(this._createdLine,e,this._createdLine+o),this.renderItems(this._createdLine*e,0),this._createdLine+=o);else{var n=h*e,o=0;if(n>this._startIndex){o=n-this._startIndex;var r=!0,l=this._startIndex+e*(s+1);this._isMoved=!0}else n<this._startIndex&&(o=this._startIndex-n,r=!1,l=this._startIndex-1,this._isMoved=!0);for(var a=0;a<o;a++){if(r){var c=this._cells.shift();this._cells[this._cells.length]=c;var u=l+a}else c=this._cells.pop(),this._cells.unshift(c),u=l-a;var _=Math.floor(u/e)*this._cellSize;this._isVertical?c.y=_:c.x=_,this.renderItem(c,u)}this._startIndex=n,this.changeSelectStatus()}var d=this._content.scrollRect;this._isVertical?(d.y=i-this._offset.y,d.x=-this._offset.x):(d.y=-this._offset.y,d.x=i-this._offset.x),this._content.scrollRect=d},s.posCell=function(t,i){if(this._scrollBar){var e=this._isVertical?this.repeatX:this.repeatY,s=(this._isVertical?this.repeatY:this.repeatX,Math.floor(i/e)*this._cellSize);this._isVertical?t.y=s:t.x=s}},s.changeSelectStatus=function(){for(var t=0,i=this._cells.length;t<i;t++)this.changeCellState(this._cells[t],this._selectedIndex===this._startIndex+t,1)},s.renderItems=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0);for(var e=t,s=i||this._cells.length;e<s;e++)this.renderItem(this._cells[e],this._startIndex+e);this.changeSelectStatus()},s.renderItem=function(t,i){this._array&&i>=0&&i<this._array.length?(t.visible=!0,t._$bindData?(t._dataSource=this._array[i],this._bindData(t,this._array[i])):t.dataSource=this._array[i],this.cacheContent||this.posCell(t,i),this.hasListener("render")&&this.event("render",[t,i]),this.renderHandler&&this.renderHandler.runWith([t,i])):(t.visible=!1,t.dataSource=null)},s._bindData=function(t,i){for(var e=t._$bindData,s=0,h=e.length;s<h;s++){var n=e[s++],o=e[s++],r=e[s],l=L.getBindFun(r);n[o]=l.call(this,i)}},s.refresh=function(){this.array=this._array},s.getItem=function(t){return t>-1&&t<this._array.length?this._array[t]:null},s.changeItem=function(t,i){t>-1&&t<this._array.length&&(this._array[t]=i,t>=this._startIndex&&t<this._startIndex+this._cells.length&&this.renderItem(this.getCell(t),t))},s.setItem=function(t,i){this.changeItem(t,i)},s.addItem=function(t){this._array.push(t),this.array=this._array},s.addItemAt=function(t,i){this._array.splice(i,0,t),this.array=this._array},s.deleteItem=function(t){this._array.splice(t,1),this.array=this._array},s.getCell=function(t){return this.runCallLater(this.changeCells),t>-1&&this._cells?this._cells[(t-this._startIndex)%this._cells.length]:null},s.scrollTo=function(t){if(this._scrollBar){var i=this._isVertical?this.repeatX:this.repeatY;this._scrollBar.value=Math.floor(t/i)*this._cellSize}else this.startIndex=t},s.tweenTo=function(t,i,e){if(void 0===i&&(i=200),this._scrollBar){var s=this._isVertical?this.repeatX:this.repeatY;w.to(this._scrollBar,{value:Math.floor(t/s)*this._cellSize},i,null,e,0,!0)}else this.startIndex=t,e&&e.run()},s._setCellChanged=function(){this._cellChanged||(this._cellChanged=!0,this.callLater(this.changeCells))},s.commitMeasure=function(){this.runCallLater(this.changeCells)},n(0,s,"cacheAs",t.prototype._$get_cacheAs,function(t){e.superSet(H,this,"cacheAs",t),this._scrollBar&&(this._$P.cacheAs=null,"none"!==t?this._scrollBar.on("start",this,this.onScrollStart):this._scrollBar.off("start",this,this.onScrollStart))}),n(0,s,"content",function(){return this._content}),n(0,s,"height",t.prototype._$get_height,function(t){t!=this._height&&(e.superSet(H,this,"height",t),this._setCellChanged())}),n(0,s,"itemRender",function(){return this._itemRender},function(t){if(this._itemRender!=t){this._itemRender=t;for(var i=this._cells.length-1;i>-1;i--)this._cells[i].destroy();this._cells.length=0,this._setCellChanged()}}),n(0,s,"vScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new it;i.name="scrollBar",i.right=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),n(0,s,"page",function(){return this._page},function(t){this._page=t,this._array&&(this._page=t>0?t:0,this._page=this._page<this.totalPage?this._page:this.totalPage-1,this.startIndex=this._page*this.repeatX*this.repeatY)}),n(0,s,"hScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new j;i.name="scrollBar",i.bottom=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),n(0,s,"repeatX",function(){return this._repeatX>0?this._repeatX:this._repeatX2>0?this._repeatX2:1},function(t){this._repeatX=t,this._setCellChanged()}),n(0,s,"scrollBar",function(){return this._scrollBar},function(t){this._scrollBar!=t&&(this._scrollBar=t,t&&(this._isVertical=this._scrollBar.isVertical,this.addChild(this._scrollBar),this._scrollBar.on("change",this,this.onScrollBarChange)))}),n(0,s,"width",t.prototype._$get_width,function(t){t!=this._width&&(e.superSet(H,this,"width",t),this._setCellChanged())}),n(0,s,"repeatY",function(){return this._repeatY>0?this._repeatY:this._repeatY2>0?this._repeatY2:1},function(t){this._repeatY=t,this._setCellChanged()}),n(0,s,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,this._setCellChanged()}),n(0,s,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,this._setCellChanged()}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this.changeSelectStatus(),this.event("change"),this.selectHandler&&this.selectHandler.runWith(t),this.startIndex=this._startIndex)}),n(0,s,"selectedItem",function(){return-1!=this._selectedIndex?this._array[this._selectedIndex]:null},function(t){this.selectedIndex=this._array.indexOf(t)}),n(0,s,"length",function(){return this._array?this._array.length:0}),n(0,s,"selection",function(){return this.getCell(this._selectedIndex)},function(t){this.selectedIndex=this._startIndex+this._cells.indexOf(t)}),n(0,s,"startIndex",function(){return this._startIndex},function(t){this._startIndex=t>0?t:0,this.callLater(this.renderItems)}),n(0,s,"array",function(){return this._array},function(t){this.runCallLater(this.changeCells),this._array=t||[];var i=this._array.length;if(this.totalPage=Math.ceil(i/(this.repeatX*this.repeatY)),this._selectedIndex=this._selectedIndex<i?this._selectedIndex:i-1,this.startIndex=this._startIndex,this._scrollBar){this._scrollBar.stopScroll();var e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,h=Math.ceil(i/e);(this._cellOffset>0?this.totalPage+1:this.totalPage)>1?(this._scrollBar.scrollSize=this._cellSize,this._scrollBar.thumbPercent=s/h,this._scrollBar.setScroll(0,(h-s)*this._cellSize+this._cellOffset,this._scrollBar.value),this._scrollBar.target=this._content):(this._scrollBar.setScroll(0,0,0),this._scrollBar.target=this._content)}}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.array=t:e.superSet(H,this,"dataSource",t)}),n(0,s,"cells",function(){return this.runCallLater(this.changeCells),this._cells}),i}(H),j=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.HScrollBar",t);return i.prototype.initialize=function(){t.prototype.initialize.call(this),this.slider.isVertical=!1},i}(X),K=function(t){function i(){this._content=null,this._vScrollBar=null,this._hScrollBar=null,this._scrollChanged=!1,i.__super.call(this),this.width=this.height=100}h(i,"laya.ui.Panel",t);var s=i.prototype;return s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._content&&this._content.destroy(t),this._vScrollBar&&this._vScrollBar.destroy(t),this._hScrollBar&&this._hScrollBar.destroy(t),this._vScrollBar=null,this._hScrollBar=null,this._content=null},s.destroyChildren=function(){this._content.destroyChildren()},s.createChildren=function(){laya.display.Node.prototype.addChild.call(this,this._content=new H)},s.addChild=function(t){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChild(t)},s.onResize=function(){this._setScrollChanged()},s.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChildAt(t,i)},s.removeChild=function(t){return t.off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChild(t)},s.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChildAt(t)},s.removeChildren=function(t,i){void 0===t&&(t=0),void 0===i&&(i=2147483647);for(var e=this._content.numChildren-1;e>-1;e--)this._content.removeChildAt(e);return this._setScrollChanged(),this},s.getChildAt=function(t){return this._content.getChildAt(t)},s.getChildByName=function(t){return this._content.getChildByName(t)},s.getChildIndex=function(t){return this._content.getChildIndex(t)},s.changeScroll=function(){this._scrollChanged=!1;var t=this.contentWidth||1,i=this.contentHeight||1,e=this._vScrollBar,s=this._hScrollBar,h=e&&i>this._height,n=s&&t>this._width,o=h?this._width-e.width:this._width,r=n?this._height-s.height:this._height;e&&(e.x=this._width-e.width,e.y=0,e.height=this._height-(n?s.height:0),e.scrollSize=Math.max(.033*this._height,1),e.thumbPercent=r/i,e.setScroll(0,i-r,e.value)),s&&(s.x=0,s.y=this._height-s.height,s.width=this._width-(h?e.width:0),s.scrollSize=Math.max(.033*this._width,1),s.thumbPercent=o/t,s.setScroll(0,t-o,s.value))},s.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this._width,this._height)},s.setContentSize=function(t,i){var e=this._content;e.width=t,e.height=i,e.scrollRect||(e.scrollRect=new y),e.scrollRect.setTo(0,0,t,i),e.scrollRect=e.scrollRect},s.onScrollBarChange=function(t){var i=this._content.scrollRect;if(i){var e=Math.round(t.value);t.isVertical?i.y=e:i.x=e,this._content.scrollRect=i}},s.scrollTo=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.vScrollBar&&(this.vScrollBar.value=i),this.hScrollBar&&(this.hScrollBar.value=t)},s.refresh=function(){this.changeScroll()},s.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=e.superGet(H,this,"cacheAs")),e.superSet(H,this,"cacheAs","none"),this._hScrollBar&&this._hScrollBar.once("end",this,this.onScrollEnd),this._vScrollBar&&this._vScrollBar.once("end",this,this.onScrollEnd)},s.onScrollEnd=function(){e.superSet(H,this,"cacheAs",this._$P.cacheAs)},s._setScrollChanged=function(){this._scrollChanged||(this._scrollChanged=!0,this.callLater(this.changeScroll))},n(0,s,"numChildren",function(){return this._content.numChildren}),n(0,s,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._hScrollBar=new j),this._hScrollBar.on("change",this,this.onScrollBarChange,[this._hScrollBar]),this._hScrollBar.target=this._content,this._setScrollChanged()),this._hScrollBar.skin=t}),n(0,s,"contentWidth",function(){for(var t=0,i=this._content.numChildren-1;i>-1;i--){var e=this._content.getChildAt(i);t=Math.max(e.x+e.width*e.scaleX,t)}return t}),n(0,s,"contentHeight",function(){for(var t=0,i=this._content.numChildren-1;i>-1;i--){var e=this._content.getChildAt(i);t=Math.max(e.y+e.height*e.scaleY,t)}return t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(H,this,"width",t),this._setScrollChanged()}),n(0,s,"hScrollBar",function(){return this._hScrollBar}),n(0,s,"content",function(){return this._content}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(H,this,"height",t),this._setScrollChanged()}),n(0,s,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._vScrollBar=new it),this._vScrollBar.on("change",this,this.onScrollBarChange,[this._vScrollBar]),this._vScrollBar.target=this._content,this._setScrollChanged()),this._vScrollBar.skin=t}),n(0,s,"vScrollBar",function(){return this._vScrollBar}),n(0,s,"cacheAs",t.prototype._$get_cacheAs,function(t){e.superSet(H,this,"cacheAs",t),this._$P.cacheAs=null,"none"!==t?(this._hScrollBar&&this._hScrollBar.on("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.on("start",this,this.onScrollStart)):(this._hScrollBar&&this._hScrollBar.off("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.off("start",this,this.onScrollStart))}),i}(H),Z=function(t){function i(t){i.__super.call(this,t),this.isVertical=!1}return h(i,"laya.ui.HSlider",E),i}(),q=function(t){function i(t,e){this.selectHandler=null,this._items=null,this._selectedIndex=-1,this._skin=null,this._direction="horizontal",this._space=0,this._labels=null,this._labelColors=null,this._labelFont=null,this._labelStrokeColor=null,this._strokeColors=null,this._labelStroke=NaN,this._labelSize=0,this._labelBold=!1,this._labelPadding=null,this._labelAlign=null,this._stateNum=0,this._labelChanged=!1,i.__super.call(this),this.skin=e,this.labels=t}h(i,"laya.ui.UIGroup",t);var s=i.prototype;return e.imps(s,{"laya.ui.IItem":!0}),s.preinitialize=function(){this.mouseEnabled=!0},s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._items&&(this._items.length=0),this._items=null,this.selectHandler=null},s.addItem=function(t,i){void 0===i&&(i=!0);var e=t,s=this._items.length;if(e.name="item"+s,this.addChild(e),this.initItems(),i&&s>0){var h=this._items[s-1];"horizontal"==this._direction?e.x=h.x+h.width+this._space:e.y=h.y+h.height+this._space}else i&&(e.x=0,e.y=0);return s},s.delItem=function(t,i){void 0===i&&(i=!0);var e=this._items.indexOf(t);if(-1!=e){var s=t;this.removeChild(s);for(var h=e+1,n=this._items.length;h<n;h++){var o=this._items[h];o.name="item"+(h-1),i&&("horizontal"==this._direction?o.x-=s.width+this._space:o.y-=s.height+this._space)}if(this.initItems(),this._selectedIndex>-1){var r=0;r=this._selectedIndex<this._items.length?this._selectedIndex:this._selectedIndex-1,this._selectedIndex=-1,this.selectedIndex=r}}},s.initItems=function(){this._items||(this._items=[]),this._items.length=0;for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.selected=t===this._selectedIndex,i.clickHandler=f.create(this,this.itemClick,[t],!1)}},s.itemClick=function(t){this.selectedIndex=t},s.setSelect=function(t,i){this._items&&t>-1&&t<this._items.length&&(this._items[t].selected=i)},s.createItem=function(t,i){return null},s.changeLabels=function(){if(this._labelChanged=!1,this._items)for(var t=0,i=0,e=this._items.length;i<e;i++){var s=this._items[i];this._skin&&(s.skin=this._skin),this._labelColors&&(s.labelColors=this._labelColors),this._labelSize&&(s.labelSize=this._labelSize),this._labelStroke&&(s.labelStroke=this._labelStroke),this._labelStrokeColor&&(s.labelStrokeColor=this._labelStrokeColor),this._strokeColors&&(s.strokeColors=this._strokeColors),this._labelBold&&(s.labelBold=this._labelBold),this._labelPadding&&(s.labelPadding=this._labelPadding),this._labelAlign&&(s.labelAlign=this._labelAlign),this._stateNum&&(s.stateNum=this._stateNum),this._labelFont&&(s.labelFont=this._labelFont),"horizontal"===this._direction?(s.y=0,s.x=t,t+=s.width+this._space):(s.x=0,s.y=t,t+=s.height+this._space)}this.changeSize()},s.commitMeasure=function(){this.runCallLater(this.changeLabels)},s._setLabelChanged=function(){this._labelChanged||(this._labelChanged=!0,this.callLater(this.changeLabels))},n(0,s,"labelStrokeColor",function(){return this._labelStrokeColor},function(t){this._labelStrokeColor!=t&&(this._labelStrokeColor=t,this._setLabelChanged())}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._setLabelChanged())}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(t,!0),this.event("change"),this.selectHandler&&this.selectHandler.runWith(this._selectedIndex))}),n(0,s,"labels",function(){return this._labels},function(t){if(this._labels!=t){if(this._labels=t,this.removeChildren(),this._setLabelChanged(),this._labels)for(var i=this._labels.split(","),e=0,s=i.length;e<s;e++){var h=this.createItem(this._skin,i[e]);h.name="item"+e,this.addChild(h)}this.initItems()}}),n(0,s,"strokeColors",function(){return this._strokeColors},function(t){this._strokeColors!=t&&(this._strokeColors=t,this._setLabelChanged())}),n(0,s,"labelColors",function(){return this._labelColors},function(t){this._labelColors!=t&&(this._labelColors=t,this._setLabelChanged())}),n(0,s,"labelStroke",function(){return this._labelStroke},function(t){this._labelStroke!=t&&(this._labelStroke=t,this._setLabelChanged())}),n(0,s,"labelSize",function(){return this._labelSize},function(t){this._labelSize!=t&&(this._labelSize=t,this._setLabelChanged())}),n(0,s,"stateNum",function(){return this._stateNum},function(t){this._stateNum!=t&&(this._stateNum=t,this._setLabelChanged())}),n(0,s,"labelBold",function(){return this._labelBold},function(t){this._labelBold!=t&&(this._labelBold=t,this._setLabelChanged())}),n(0,s,"labelFont",function(){return this._labelFont},function(t){this._labelFont!=t&&(this._labelFont=t,this._setLabelChanged())}),n(0,s,"labelPadding",function(){return this._labelPadding},function(t){this._labelPadding!=t&&(this._labelPadding=t,this._setLabelChanged())}),n(0,s,"direction",function(){return this._direction},function(t){this._direction=t,this._setLabelChanged()}),n(0,s,"space",function(){return this._space},function(t){this._space=t,this._setLabelChanged()}),n(0,s,"items",function(){return this._items}),n(0,s,"selection",function(){return this._selectedIndex>-1&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):e.superSet(H,this,"dataSource",t)}),i}(H),J=function(t){function i(t,e){this._value=null,void 0===e&&(e=""),i.__super.call(this,t,e)}h(i,"laya.ui.Radio",t);var e=i.prototype;return e.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._value=null},e.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!1,this._autoSize=!1},e.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0,this.on("click",this,this.onClick)},e.onClick=function(t){this.selected=!0},n(0,e,"value",function(){return null!=this._value?this._value:this.label},function(t){this._value=t}),i}(N),Q=function(t){function i(){this._list=null,this._source=null,this._renderHandler=null,this._spaceLeft=10,this._spaceBottom=0,this._keepStatus=!0,i.__super.call(this),this.width=this.height=200}h(i,"laya.ui.Tree",t);var s=i.prototype;return e.imps(s,{"laya.ui.IRender":!0}),s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._list&&this._list.destroy(t),this._list=null,this._source=null,this._renderHandler=null},s.createChildren=function(){this.addChild(this._list=new U),this._list.renderHandler=f.create(this,this.renderItem,null,!1),this._list.repeatX=1,this._list.on("change",this,this.onListChange)},s.onListChange=function(t){this.event("change")},s.getArray=function(){var t,i=[];for(var e in this._source)t=this._source[e],this.getParentOpenStatus(t)&&(t.x=this._spaceLeft*this.getDepth(t),i.push(t));return i},s.getDepth=function(t,i){return void 0===i&&(i=0),null==t.nodeParent?i:this.getDepth(t.nodeParent,i+1)},s.getParentOpenStatus=function(t){var i=t.nodeParent;return null==i||!!i.isOpen&&(null==i.nodeParent||this.getParentOpenStatus(i))},s.renderItem=function(t,i){var e=t.dataSource;if(e){t.left=e.x;var s=t.getChildByName("arrow");s&&(e.hasChild?(s.visible=!0,s.index=e.isOpen?1:0,s.tag=i,s.off("click",this,this.onArrowClick),s.on("click",this,this.onArrowClick)):s.visible=!1);var h=t.getChildByName("folder");h&&(2==h.clipY?h.index=e.isDirectory?0:1:h.index=e.isDirectory?e.isOpen?1:0:2),this._renderHandler&&this._renderHandler.runWith([t,i])}},s.onArrowClick=function(t){var i=t.currentTarget.tag;this._list.array[i].isOpen=!this._list.array[i].isOpen,this.event("open"),this._list.array=this.getArray()},s.setItemState=function(t,i){this._list.array[t]&&(this._list.array[t].isOpen=i,this._list.array=this.getArray())},s.fresh=function(){this._list.array=this.getArray(),this.repaint()},s.parseXml=function(t,i,e,s){var h,n=t.childNodes,o=n.length;if(!s){h={};var r,l=t.attributes;for(var a in l){var c=(r=l[a]).nodeName,u=r.nodeValue;h[c]="true"==u||"false"!=u&&u}h.nodeParent=e,o>0&&(h.isDirectory=!0),h.hasChild=o>0,i.push(h)}for(var _=0;_<o;_++){var d=n[_];this.parseXml(d,i,h,!1)}},s.parseOpenStatus=function(t,i){for(var e=0,s=i.length;e<s;e++){var h=i[e];if(h.isDirectory)for(var n=0,o=t.length;n<o;n++){var r=t[n];if(r.isDirectory&&this.isSameParent(r,h)&&h.label==r.label){h.isOpen=r.isOpen;break}}}},s.isSameParent=function(t,i){return null==t.nodeParent&&null==i.nodeParent||null!=t.nodeParent&&null!=i.nodeParent&&(t.nodeParent.label==i.nodeParent.label&&this.isSameParent(t.nodeParent,i.nodeParent))},s.filter=function(t){if(Boolean(t)){var i=[];this.getFilterSource(this._source,i,t),this._list.array=i}else this._list.array=this.getArray()},s.getFilterSource=function(t,i,e){e=e.toLocaleLowerCase();var s;for(var h in t)!(s=t[h]).isDirectory&&String(s.label).toLowerCase().indexOf(e)>-1&&(s.x=0,i.push(s)),s.child&&s.child.length>0&&this.getFilterSource(s.child,i,e)},n(0,s,"spaceBottom",function(){return this._list.spaceY},function(t){this._list.spaceY=t}),n(0,s,"keepStatus",function(){return this._keepStatus},function(t){this._keepStatus=t}),n(0,s,"itemRender",function(){return this._list.itemRender},function(t){this._list.itemRender=t}),n(0,s,"array",function(){return this._list.array},function(t){this._keepStatus&&this._list.array&&t&&this.parseOpenStatus(this._list.array,t),this._source=t,this._list.array=this.getArray()}),n(0,s,"mouseHandler",function(){return this._list.mouseHandler},function(t){this._list.mouseHandler=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,e.superSet(H,this,"dataSource",t)}),n(0,s,"source",function(){return this._source}),n(0,s,"scrollBar",function(){return this._list.scrollBar}),n(0,s,"list",function(){return this._list}),n(0,s,"scrollBarSkin",function(){return this._list.vScrollBarSkin},function(t){this._list.vScrollBarSkin=t}),n(0,s,"renderHandler",function(){return this._renderHandler},function(t){this._renderHandler=t}),n(0,s,"selectedIndex",function(){return this._list.selectedIndex},function(t){this._list.selectedIndex=t}),n(0,s,"spaceLeft",function(){return this._spaceLeft},function(t){this._spaceLeft=t}),n(0,s,"selectedItem",function(){return this._list.selectedItem},function(t){this._list.selectedItem=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(H,this,"width",t),this._list.width=t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(H,this,"height",t),this._list.height=t}),n(0,s,"xml",null,function(t){var i=[];this.parseXml(t.childNodes[0],i,null,!0),this.array=i}),n(0,s,"selectedPath",function(){return this._list.selectedItem?this._list.selectedItem.path:null}),i}(H),tt=function(t){function i(){this._items=null,this._selectedIndex=0,i.__super.call(this),this._setIndexHandler=f.create(this,this.setIndex,null,!1)}h(i,"laya.ui.ViewStack",t);var s=i.prototype;return e.imps(s,{"laya.ui.IItem":!0}),s.setItems=function(t){this.removeChildren();for(var i=0,e=0,s=t.length;e<s;e++){var h=t[e];h&&(h.name="item"+i,this.addChild(h),i++)}this.initItems()},s.addItem=function(t){t.name="item"+this._items.length,this.addChild(t),this.initItems()},s.initItems=function(){this._items=[];for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.visible=t==this._selectedIndex}},s.setSelect=function(t,i){this._items&&t>-1&&t<this._items.length&&(this._items[t].visible=i)},s.setIndex=function(t){this.selectedIndex=t},n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){if(this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t)this.selectedIndex=parseInt(t);else for(var i in this._dataSource)this.hasOwnProperty(i)&&(this[i]=this._dataSource[i])}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(this._selectedIndex,!0))}),n(0,s,"selection",function(){return this._selectedIndex>-1&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),n(0,s,"items",function(){return this._items}),n(0,s,"setIndexHandler",function(){return this._setIndexHandler},function(t){this._setIndexHandler=t}),i}(H),it=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.VScrollBar",X),i}(),et=function(t){function i(t){this._bg=null,this._skin=null,i.__super.call(this),void 0===t&&(t=""),this.text=t,this.skin=this.skin}h(i,"laya.ui.TextInput",t);var s=i.prototype;return s.preinitialize=function(){this.mouseEnabled=!0},s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(),this._bg=null},s.createChildren=function(){this.addChild(this._tf=new p),this._tf.padding=I.inputLabelPadding,this._tf.on("input",this,this._onInput),this._tf.on("enter",this,this._onEnter),this._tf.on("blur",this,this._onBlur),this._tf.on("focus",this,this._onFocus)},s._onFocus=function(){this.event("focus",this)},s._onBlur=function(){this.event("blur",this)},s._onInput=function(){this.event("input",this)},s._onEnter=function(){this.event("enter",this)},s.initialize=function(){this.width=128,this.height=22},s.select=function(){this._tf.select()},s.setSelection=function(t,i){this._tf.setSelection(t,i)},n(0,s,"text",t.prototype._$get_text,function(t){this._tf.text!=t&&(t+="",this._tf.text=t,this.event("change"))}),n(0,s,"bg",function(){return this._bg},function(t){this.graphics=this._bg=t}),n(0,s,"inputElementYAdjuster",function(){return this._tf.inputElementYAdjuster},function(t){this._tf.inputElementYAdjuster=t}),n(0,s,"multiline",function(){return this._tf.multiline},function(t){this._tf.multiline=t}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg||(this.graphics=this._bg=new z),this._bg.source=g.getRes(this._skin),this._width&&(this._bg.width=this._width),this._height&&(this._bg.height=this._height))}),n(0,s,"sizeGrid",function(){return this._bg&&this._bg.sizeGrid?this._bg.sizeGrid.join(","):null},function(t){this._bg||(this.graphics=this._bg=new z),this._bg.sizeGrid=L.fillArray(I.defaultSizeGrid,t,Number)}),n(0,s,"inputElementXAdjuster",function(){return this._tf.inputElementXAdjuster},function(t){this._tf.inputElementXAdjuster=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(D,this,"width",t),this._bg&&(this._bg.width=t)}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(D,this,"height",t),this._bg&&(this._bg.height=t)}),n(0,s,"editable",function(){return this._tf.editable},function(t){this._tf.editable=t}),n(0,s,"restrict",function(){return this._tf.restrict},function(t){this._tf.restrict=t}),n(0,s,"prompt",function(){return this._tf.prompt},function(t){this._tf.prompt=t}),n(0,s,"promptColor",function(){return this._tf.promptColor},function(t){this._tf.promptColor=t}),n(0,s,"maxChars",function(){return this._tf.maxChars},function(t){this._tf.maxChars=t}),n(0,s,"focus",function(){return this._tf.focus},function(t){this._tf.focus=t}),n(0,s,"type",function(){return this._tf.type},function(t){this._tf.type=t}),n(0,s,"asPassword",function(){return this._tf.asPassword},function(t){this._tf.asPassword=t}),i}(D),st=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.VSlider",E),i}(),ht=function(t){function i(){this.popupCenter=!0,this.closeHandler=null,this.popupEffect=null,this.closeEffect=null,this.group=null,this.isModal=!1,this._dragArea=null,i.__super.call(this)}h(i,"laya.ui.Dialog",t);var s=i.prototype;return s.initialize=function(){this.popupEffect=i.manager.popupEffectHandler,this.closeEffect=i.manager.closeEffectHandler,this._dealDragArea(),this.on("click",this,this._onClick)},s._dealDragArea=function(){var t=this.getChildByName("drag");t&&(this.dragArea=t.x+","+t.y+","+t.width+","+t.height,t.removeSelf())},s._onClick=function(t){var i=t.target;if(i)switch(i.name){case"close":case"cancel":case"sure":case"no":case"ok":case"yes":this.close(i.name)}},s.show=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!1,t,i)},s.popup=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!0,t,i)},s._open=function(t,e,s){i.manager.lock(!1),this.isModal=t,i.manager.open(this,e,s)},s.onOpened=function(){},s.close=function(t,e){void 0===e&&(e=!0),i.manager.close(this,t,e)},s.onClosed=function(t){},s._onMouseDown=function(t){var i=this.getMousePoint();this._dragArea.contains(i.x,i.y)?this.startDrag():this.stopDrag()},n(0,s,"dragArea",function(){return this._dragArea?this._dragArea.toString():null},function(t){if(t){var i=L.fillArray([0,0,0,0],t,Number);this._dragArea=new y(i[0],i[1],i[2],i[3]),this.on("mousedown",this,this._onMouseDown)}else this._dragArea=null,this.off("mousedown",this,this._onMouseDown)}),n(0,s,"isPopup",function(){return null!=this.parent}),n(0,s,"zOrder",t.prototype._$get_zOrder,function(t){e.superSet(R,this,"zOrder",t),i.manager._checkMask()}),n(1,i,"manager",function(){return i._manager=i._manager||new P},function(t){i._manager=t}),i.setLockView=function(t){i.manager.setLockView(t)},i.lock=function(t){i.manager.lock(t)},i.closeAll=function(){i.manager.closeAll()},i.getDialogsByGroup=function(t){return i.manager.getDialogsByGroup(t)},i.closeByGroup=function(t){return i.manager.closeByGroup(t)},i.CLOSE="close",i.CANCEL="cancel",i.SURE="sure",i.NO="no",i.OK="ok",i.YES="yes",i._manager=null,i}(R),nt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.HBox",t);var s=i.prototype;return s.sortItem=function(t){t&&t.sort(function(t,i){return t.x-i.x})},s.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var h=this.getChildAt(e);h&&h.layoutEnabled&&(t.push(h),i=this._height?this._height:Math.max(i,h.height*h.scaleY))}this.sortItem(t);var n=0;for(e=0,s=t.length;e<s;e++)(h=t[e]).x=n,n+=h.width*h.scaleX+this._space,"top"==this._align?h.y=0:"middle"==this._align?h.y=.5*(i-h.height*h.scaleY):"bottom"==this._align&&(h.y=i-h.height*h.scaleY);this.changeSize()},n(0,s,"height",t.prototype._$get_height,function(t){this._height!=t&&(e.superSet($,this,"height",t),this.callLater(this.changeItems))}),i.NONE="none",i.TOP="top",i.MIDDLE="middle",i.BOTTOM="bottom",i}($),ot=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.VBox",t);var s=i.prototype;return s.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var h=this.getChildAt(e);h&&h.layoutEnabled&&(t.push(h),i=this._width?this._width:Math.max(i,h.width*h.scaleX))}this.sortItem(t);var n=0;for(e=0,s=t.length;e<s;e++)(h=t[e]).y=n,n+=h.height*h.scaleY+this._space,"left"==this._align?h.x=0:"center"==this._align?h.x=.5*(i-h.width*h.scaleX):"right"==this._align&&(h.x=i-h.width*h.scaleX);this.changeSize()},n(0,s,"width",t.prototype._$get_width,function(t){this._width!=t&&(e.superSet($,this,"width",t),this.callLater(this.changeItems))}),i.NONE="none",i.LEFT="left",i.CENTER="center",i.RIGHT="right",i}($),rt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.RadioGroup",q);return i.prototype.createItem=function(t,i){return new J(t,i)},i}(),lt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.Tab",q);return i.prototype.createItem=function(t,i){return new N(t,i)},i}(),at=function(t){function i(t){this._vScrollBar=null,this._hScrollBar=null,void 0===t&&(t=""),i.__super.call(this,t)}h(i,"laya.ui.TextArea",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._vScrollBar&&this._vScrollBar.destroy(),this._hScrollBar&&this._hScrollBar.destroy(),this._vScrollBar=null,this._hScrollBar=null},s.initialize=function(){this.width=180,this.height=150,this._tf.wordWrap=!0,this.multiline=!0},s.onVBarChanged=function(t){this._tf.scrollY!=this._vScrollBar.value&&(this._tf.scrollY=this._vScrollBar.value)},s.onHBarChanged=function(t){this._tf.scrollX!=this._hScrollBar.value&&(this._tf.scrollX=this._hScrollBar.value)},s.changeScroll=function(){var t=this._vScrollBar&&this._tf.maxScrollY>0,i=this._hScrollBar&&this._tf.maxScrollX>0,e=t?this._width-this._vScrollBar.width:this._width,s=i?this._height-this._hScrollBar.height:this._height,h=this._tf.padding||I.labelPadding;this._tf.width=e,this._tf.height=s,this._vScrollBar&&(this._vScrollBar.x=this._width-this._vScrollBar.width-h[2],this._vScrollBar.y=h[1],this._vScrollBar.height=this._height-(i?this._hScrollBar.height:0)-h[1]-h[3],this._vScrollBar.scrollSize=1,this._vScrollBar.thumbPercent=s/Math.max(this._tf.textHeight,s),this._vScrollBar.setScroll(1,this._tf.maxScrollY,this._tf.scrollY),this._vScrollBar.visible=t),this._hScrollBar&&(this._hScrollBar.x=h[0],this._hScrollBar.y=this._height-this._hScrollBar.height-h[3],this._hScrollBar.width=this._width-(t?this._vScrollBar.width:0)-h[0]-h[2],this._hScrollBar.scrollSize=Math.max(.033*e,1),this._hScrollBar.thumbPercent=e/Math.max(this._tf.textWidth,e),this._hScrollBar.setScroll(0,this.maxScrollX,this.scrollX),this._hScrollBar.visible=i)},s.scrollTo=function(t){this.commitMeasure(),this._tf.scrollY=t},n(0,s,"scrollY",function(){return this._tf.scrollY}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(et,this,"width",t),this.callLater(this.changeScroll)}),n(0,s,"hScrollBar",function(){return this._hScrollBar}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(et,this,"height",t),this.callLater(this.changeScroll)}),n(0,s,"maxScrollX",function(){return this._tf.maxScrollX}),n(0,s,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(this.addChild(this._vScrollBar=new it),this._vScrollBar.on("change",this,this.onVBarChanged),this._vScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._vScrollBar.skin=t}),n(0,s,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(this.addChild(this._hScrollBar=new j),this._hScrollBar.on("change",this,this.onHBarChanged),this._hScrollBar.mouseWheelEnable=!1,this._hScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._hScrollBar.skin=t}),n(0,s,"vScrollBar",function(){return this._vScrollBar}),n(0,s,"maxScrollY",function(){return this._tf.maxScrollY}),n(0,s,"scrollX",function(){return this._tf.scrollX}),i}(et);!function(t){function i(){this._uiView=null,this.isCloseOther=!1,i.__super.call(this)}h(i,"laya.ui.AsynDialog",ht);var e=i.prototype;e.createView=function(t){this._uiView=t},e._open=function(t,i,e){this.isModal=t,this.isCloseOther=i,ht.manager.lock(!0),this._uiView?this.onCreated():this.onOpen()},e.onCreated=function(){this.createUI(),this.onOpen()},e.createUI=function(){laya.ui.View.prototype.createView.call(this,this._uiView),this._uiView=null,this._dealDragArea()},e.onOpen=function(){ht.manager.open(this,this.isCloseOther),ht.manager.lock(!1)},e.close=function(t,i){void 0===i&&(i=!0),ht.manager.close(this),this.onClose()},e.onClose=function(){},e.destroy=function(t){void 0===t&&(t=!0),laya.ui.View.prototype.destroy.call(this,t),this._uiView=null,this.onDestroy()},e.onDestroy=function(){}}();e.__init([R])}(window,document,Laya),"function"=="function"&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__,exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});for(var e in Laya){var s=Laya[e];s&&s.__isclass&&(i[e]=s)}}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./bin/libs/min/laya.wxmini.min.js":
/*!*****************************************!*\
  !*** ./bin/libs/min/laya.wxmini.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(i,e,n){n.un,n.uns;var t=n.static,o=n.class,a=n.getset,r=(n.__newvec,laya.utils.Browser),l=(laya.events.Event,laya.events.EventDispatcher),s=laya.resource.HTMLImage,u=laya.utils.Handler,c=laya.display.Input,d=laya.net.Loader,f=laya.net.LocalStorage,h=(laya.maths.Matrix,laya.renders.Render),p=laya.utils.RunDriver,v=laya.media.SoundChannel,m=laya.media.SoundManager,g=laya.net.URL,_=laya.utils.Utils,y=function(){function e(){}return o(e,"laya.wx.mini.MiniAdpter"),e.getJson=function(i){return JSON.parse(i)},e.init=function(t,o){if(void 0===t&&(t=!1),void 0===o&&(o=!1),!(e._inited||(e._inited=!0,(e.window=i).navigator.userAgent.indexOf("MiniGame")<0))){e.isZiYu=o,e.isPosMsgYu=t,e.EnvConfig={};try{laya.webgl.resource.WebGLCanvas.premulAlpha=!0}catch(i){}e.isZiYu||(w.setNativeFileDir("/layaairGame"),w.existDir(w.fileNativeDir,u.create(e,e.onMkdirCallBack))),e.systemInfo=wx.getSystemInfoSync(),e.window.focus=function(){},n.getUrlPath=function(){},e.window.logtime=function(i){},e.window.alertTimeLog=function(i){},e.window.resetShareInfo=function(){},e.window.CanvasRenderingContext2D=function(){},e.window.CanvasRenderingContext2D.prototype=e.window.wx.createCanvas().getContext("2d").__proto__,e.window.document.body.appendChild=function(){},e.EnvConfig.pixelRatioInt=0,p.getPixelRatio=e.pixelRatio,e._preCreateElement=r.createElement,r.createElement=e.createElement,p.createShaderCondition=e.createShaderCondition,_.parseXMLFromString=e.parseXMLFromString,c._createInputElement=x._createInputElement,e.EnvConfig.load=d.prototype.load,d.prototype.load=L.prototype.load,d.prototype._loadImage=C.prototype._loadImage,F.__init__(),f._baseClass=F}},e.getUrlEncode=function(i,e){return-1!=i.indexOf(".fnt")?"utf8":"arraybuffer"==e?"":"ascii"},e.downLoadFile=function(i,e,n,t){void 0===e&&(e=""),void 0===t&&(t="ascii");w.getFileInfo(i)?null!=n&&n.runWith([0]):w.downLoadFile(i,e,n,t)},e.remove=function(i,e){w.deleteFile("",i,e,"",0)},e.removeAll=function(){w.deleteAll()},e.hasNativeFile=function(i){return w.isLocalNativeFile(i)},e.getFileInfo=function(i){return w.getFileInfo(i)},e.getFileList=function(){return w.filesListObj},e.exitMiniProgram=function(){e.window.wx.exitMiniProgram()},e.onMkdirCallBack=function(i,e){i||(w.filesListObj=JSON.parse(e.data))},e.pixelRatio=function(){if(!e.EnvConfig.pixelRatioInt)try{return e.EnvConfig.pixelRatioInt=e.systemInfo.pixelRatio,e.systemInfo.pixelRatio}catch(i){}return e.EnvConfig.pixelRatioInt},e.createElement=function(n){if("canvas"==n){var t;return 1==e.idx?e.isZiYu?(t=sharedCanvas).style={}:t=i.canvas:t=i.wx.createCanvas(),e.idx++,t}if("textarea"==n||"input"==n)return e.onCreateInput(n);if("div"==n){var o=e._preCreateElement(n);return o.contains=function(i){return null},o.removeChild=function(i){},o}return e._preCreateElement(n)},e.onCreateInput=function(i){var n=e._preCreateElement(i);return n.focus=x.wxinputFocus,n.blur=x.wxinputblur,n.style={},n.value=0,n.parentElement={},n.placeholder={},n.type={},n.setColor=function(i){},n.setType=function(i){},n.setFontFace=function(i){},n.addEventListener=function(i){},n.contains=function(i){return null},n.removeChild=function(i){},n},e.createShaderCondition=function(i){var e=this;return function(){return e[i.replace("this.","")]}},e.EnvConfig=null,e.window=null,e._preCreateElement=null,e._inited=!1,e.systemInfo=null,e.isZiYu=!1,e.isPosMsgYu=!1,e.autoCacheFile=!0,e.minClearSize=5242880,e.parseXMLFromString=function(e){var n;e=e.replace(/>\s+</g,"><");try{n=(new i.Parser.DOMParser).parseFromString(e,"text/xml")}catch(i){throw"需要引入xml解析库文件"}return n},e.idx=1,t(e,["nativefiles",function(){return this.nativefiles=["layaNativeDir","wxlocal"]}]),e}(),w=function(){function i(){}return o(i,"laya.wx.mini.MiniFileMgr"),i.isLocalNativeFile=function(i){for(var e=0,n=y.nativefiles.length;e<n;e++)if(-1!=i.indexOf(y.nativefiles[e]))return!0;return!1},i.getFileInfo=function(e){var n=e.split("?")[0],t=i.filesListObj[n];return null==t?null:t},i.read=function(e,n,t,o,a,r){void 0===n&&(n="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===r&&(r="");var l;l=""==o||-1==o.indexOf("http://")&&-1==o.indexOf("https://")?e:i.getFileNativePath(e),i.fs.readFile({filePath:l,encoding:n,success:function(i){null!=t&&t.runWith([0,i])},fail:function(e){e&&""!=o?i.downFiles(o,n,t,o,a,r):null!=t&&t.runWith([1])}})},i.downFiles=function(e,n,t,o,a,r){void 0===n&&(n="ascii"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===r&&(r="");i.wxdown({url:e,success:function(e){200===e.statusCode&&i.readFile(e.tempFilePath,n,t,o,a,r)},fail:function(i){null!=t&&t.runWith([1,i])}}).onProgressUpdate(function(i){null!=t&&t.runWith([2,i.progress])})},i.readFile=function(e,n,t,o,a,r){void 0===n&&(n="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===r&&(r=""),i.fs.readFile({filePath:e,encoding:n,success:function(r){-1!=e.indexOf("http://")||-1!=e.indexOf("https://")?(y.autoCacheFile||a)&&i.copyFile(e,o,t,n):null!=t&&t.runWith([0,r])},fail:function(i){i&&null!=t&&t.runWith([1,i])}})},i.downOtherFiles=function(e,n,t,o){void 0===t&&(t=""),void 0===o&&(o=!1),i.wxdown({url:e,success:function(e){200===e.statusCode&&((y.autoCacheFile||o)&&-1==t.indexOf("wx.qlogo.cn")?i.copyFile(e.tempFilePath,t,n):null!=n&&n.runWith([0,e.tempFilePath]))},fail:function(i){null!=n&&n.runWith([1,i])}})},i.downLoadFile=function(e,n,t,o){void 0===n&&(n=""),void 0===o&&(o="ascii"),"image"==n||"sound"==n?i.downOtherFiles(e,t,e,!0):i.downFiles(e,o,t,e,!0,n)},i.copyFile=function(e,n,t,o){void 0===o&&(o="");var a=e.split("/"),r=a[a.length-1],l=(n.split("?")[0],i.getFileInfo(n)),s=i.getFileNativePath(r),u=i.getCacheUseSize();l?l.readyUrl!=n?i.fs.getFileInfo({filePath:e,success:function(e){u+4194304+e.size>=52428800&&(e.size>y.minClearSize&&(y.minClearSize=e.size),i.onClearCacheRes()),i.deleteFile(r,n,t,o,e.size)},fail:function(i){null!=t&&t.runWith([1,i])}}):null!=t&&t.runWith([0]):i.fs.getFileInfo({filePath:e,success:function(a){u+4194304+a.size>=52428800&&(a.size>y.minClearSize&&(y.minClearSize=a.size),i.onClearCacheRes()),i.fs.copyFile({srcPath:e,destPath:s,success:function(e){i.onSaveFile(n,r,!0,o,t,a.size)},fail:function(i){null!=t&&t.runWith([1,i])}})},fail:function(i){null!=t&&t.runWith([1,i])}})},i.onClearCacheRes=function(){var e=y.minClearSize,n=[];for(var t in i.filesListObj)n.push(i.filesListObj[t]);i.sortOn(n,"time",16);for(var o=0,a=1,r=n.length;a<r;a++){var l=n[a];if(o>=e)break;o+=l.size,i.deleteFile("",l.readyUrl)}},i.sortOn=function(i,e,n){return void 0===n&&(n=0),16==n?i.sort(function(i,n){return i[e]-n[e]}):18==n?i.sort(function(i,n){return n[e]-i[e]}):i.sort(function(i,n){return i[e]-n[e]})},i.getFileNativePath=function(i){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+i},i.deleteFile=function(e,n,t,o,a){void 0===n&&(n=""),void 0===o&&(o=""),void 0===a&&(a=0);var r=i.getFileInfo(n),l=i.getFileNativePath(r.md5);i.fs.unlink({filePath:l,success:function(r){var l=""!=e;if(""!=e){var s=i.getFileNativePath(e);i.fs.copyFile({srcPath:e,destPath:s,success:function(a){i.onSaveFile(n,e,l,o,t,a.size)},fail:function(i){null!=t&&t.runWith([1,i])}})}else i.onSaveFile(n,e,l,o,t,a)},fail:function(i){}})},i.deleteAll=function(){var e=[];for(var n in i.filesListObj)e.push(i.filesListObj[n]);for(var t=1,o=e.length;t<o;t++){var a=e[t];i.deleteFile("",a.readyUrl)}},i.onSaveFile=function(e,n,t,o,a,l){void 0===t&&(t=!0),void 0===o&&(o=""),void 0===l&&(l=0);var s=e.split("?")[0];if(null==i.filesListObj.fileUsedSize&&(i.filesListObj.fileUsedSize=0),t){i.getFileNativePath(n);i.filesListObj[s]={md5:n,readyUrl:e,size:l,times:r.now(),encoding:o},i.filesListObj.fileUsedSize=parseInt(i.filesListObj.fileUsedSize)+l,i.writeFilesList(s,JSON.stringify(i.filesListObj),!0),null!=a&&a.runWith([0])}else if(i.filesListObj[s]){var u=parseInt(i.filesListObj[s].size);i.filesListObj.fileUsedSize=parseInt(i.filesListObj.fileUsedSize)-u,delete i.filesListObj[s],i.writeFilesList(s,JSON.stringify(i.filesListObj),!1),null!=a&&a.runWith([0])}},i.writeFilesList=function(e,n,t){var o=i.fileNativeDir+"/"+i.fileListName;i.fs.writeFile({filePath:o,encoding:"utf8",data:n,success:function(i){},fail:function(i){}}),!y.isZiYu&&y.isPosMsgYu&&wx.postMessage({url:e,data:i.filesListObj[e],isLoad:"filenative",isAdd:t})},i.getCacheUseSize=function(){return i.filesListObj&&i.filesListObj.fileUsedSize?i.filesListObj.fileUsedSize:0},i.existDir=function(e,n){i.fs.mkdir({dirPath:e,success:function(i){null!=n&&n.runWith([0,{data:JSON.stringify({})}])},fail:function(e){-1!=e.errMsg.indexOf("file already exists")?i.readSync(i.fileListName,"utf8",n):null!=n&&n.runWith([1,e])}})},i.readSync=function(e,n,t,o){void 0===n&&(n="ascill"),void 0===o&&(o="");var a,r=i.getFileNativePath(e);try{a=i.fs.readFileSync(r,n),null!=t&&t.runWith([0,{data:a}])}catch(i){null!=t&&t.runWith([1])}},i.setNativeFileDir=function(e){i.fileNativeDir=wx.env.USER_DATA_PATH+e},i.filesListObj={},i.fileNativeDir=null,i.fileListName="layaairfiles.txt",i.ziyuFileData={},i.loadPath="",i.DESCENDING=2,i.NUMERIC=16,t(i,["fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),i}(),C=function(){function i(){}o(i,"laya.wx.mini.MiniImage");return i.prototype._loadImage=function(e){if(y.isZiYu)i.onCreateImage(e,this,!0);else{var n=!1;if(w.isLocalNativeFile(e)){if(-1!=e.indexOf("http://")||-1!=e.indexOf("https://"))if(""!=w.loadPath)e=e.split(w.loadPath)[1];else{var t=""!=g.rootPath?g.rootPath:g.basePath;""!=t&&(e=e.split(t)[1])}}else n=!0,e=g.formatURL(e);w.getFileInfo(e)?i.onCreateImage(e,this,!n):-1!=e.indexOf("http://")||-1!=e.indexOf("https://")?y.isZiYu?i.onCreateImage(e,this,!0):w.downOtherFiles(e,new u(i,i.onDownImgCallBack,[e,this]),e):i.onCreateImage(e,this,!0)}},i.onDownImgCallBack=function(e,n,t,o){void 0===o&&(o=""),t?n.onError(null):i.onCreateImage(e,n,!1,o)},i.onCreateImage=function(i,e,n,t){function o(){u.onload=null,u.onerror=null,delete e.imgCache[i]}void 0===n&&(n=!1),void 0===t&&(t="");var a;if(y.autoCacheFile)if(n)a=i;else if(""!=t)a=t;else{var l=w.getFileInfo(i).md5;a=w.getFileNativePath(l)}else a=n?i:t;null==e.imgCache&&(e.imgCache={});var u,c=function(){o(),e._url=g.formatURL(e._url),e.onLoaded(u)},d=function(){o(),e.event("error","Load image failed")};"nativeimage"==e._type?((u=new r.window.Image).crossOrigin="",u.onload=c,u.onerror=d,u.src=a,e.imgCache[i]=u):new s.create(a,{onload:c,onerror:d,onCreate:function(n){u=n,e.imgCache[i]=n}})},i}(),x=function(){function e(){}return o(e,"laya.wx.mini.MiniInput"),e._createInputElement=function(){c._initInput(c.area=r.createElement("textarea")),c._initInput(c.input=r.createElement("input")),c.inputContainer=r.createElement("div"),c.inputContainer.style.position="absolute",c.inputContainer.style.zIndex=1e5,r.container.appendChild(c.inputContainer),c.inputContainer.setPos=function(i,e){c.inputContainer.style.left=i+"px",c.inputContainer.style.top=e+"px"},n.stage.on("resize",null,e._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(e){i.dispatchEvent&&i.dispatchEvent("resize")}),m._soundClass=S,m._musicClass=S;var t=y.systemInfo.model,o=y.systemInfo.system;-1!=t.indexOf("iPhone")&&(r.onIPhone=!0,r.onIOS=!0,r.onIPad=!0,r.onAndroid=!1),-1==o.indexOf("Android")&&-1==o.indexOf("Adr")||(r.onAndroid=!0,r.onIPhone=!1,r.onIOS=!1,r.onIPad=!1)},e._onStageResize=function(){n.stage._canvasTransform.identity().scale(r.width/h.canvas.width/p.getPixelRatio(),r.height/h.canvas.height/p.getPixelRatio())},e.wxinputFocus=function(i){var e=c.inputElement.target;e&&!e.editable||(y.window.wx.offKeyboardConfirm(),y.window.wx.offKeyboardInput(),y.window.wx.showKeyboard({defaultValue:e.text,maxLength:e.maxChars,multiple:e.multiline,confirmHold:!0,confirmType:"done",success:function(i){},fail:function(i){}}),y.window.wx.onKeyboardConfirm(function(i){var n=i?i.value:"";e.text=n,e.event("input"),laya.wx.mini.MiniInput.inputEnter()}),y.window.wx.onKeyboardInput(function(i){var n=i?i.value:"";e.multiline||-1==n.indexOf("\n")?(e.text=n,e.event("input")):laya.wx.mini.MiniInput.inputEnter()}))},e.inputEnter=function(){c.inputElement.target.focus=!1},e.wxinputblur=function(){e.hideKeyboard()},e.hideKeyboard=function(){y.window.wx.offKeyboardConfirm(),y.window.wx.offKeyboardInput(),y.window.wx.hideKeyboard({success:function(i){console.log("隐藏键盘")},fail:function(i){console.log("隐藏键盘出错:"+(i?i.errMsg:""))}})},e}(),F=function(){function i(){}return o(i,"laya.wx.mini.MiniLocalStorage"),i.__init__=function(){i.items=i},i.setItem=function(i,e){wx.setStorageSync(i,e)},i.getItem=function(i){return wx.getStorageSync(i)},i.setJSON=function(e,n){i.setItem(e,n)},i.getJSON=function(e){return i.getItem(e)},i.removeItem=function(i){wx.removeStorageSync(i)},i.clear=function(){wx.clearStorageSync()},i.getStorageInfoSync=function(){try{var i=wx.getStorageInfoSync();return console.log(i.keys),console.log(i.currentSize),console.log(i.limitSize),i}catch(i){}return null},i.support=!0,i.items=null,i}(),L=(function(){function i(){}o(i,"laya.wx.mini.MiniLocation"),i.__init__=function(){y.window.navigator.geolocation.getCurrentPosition=i.getCurrentPosition,y.window.navigator.geolocation.watchPosition=i.watchPosition,y.window.navigator.geolocation.clearWatch=i.clearWatch},i.getCurrentPosition=function(i,e,n){var t;(t={}).success=function(e){null!=i&&i(e)},t.fail=e,y.window.wx.getLocation(t)},i.watchPosition=function(e,t,o){i._curID++;var a;return a={},a.success=e,a.error=t,i._watchDic[i._curID]=a,n.timer.loop(1e3,null,i._myLoop),i._curID},i.clearWatch=function(e){delete i._watchDic[e],i._hasWatch()||n.timer.clear(null,i._myLoop)},i._hasWatch=function(){var e;for(e in i._watchDic)if(i._watchDic[e])return!0;return!1},i._myLoop=function(){i.getCurrentPosition(i._mySuccess,i._myError)},i._mySuccess=function(e){var n={};n.coords=e,n.timestamp=r.now();var t;for(t in i._watchDic)i._watchDic[t].success&&i._watchDic[t].success(n)},i._myError=function(e){var n;for(n in i._watchDic)i._watchDic[n].error&&i._watchDic[n].error(e)},i._watchDic={},i._curID=0}(),function(i){function e(){e.__super.call(this)}o(e,"laya.wx.mini.MiniAccelerator",i);var n=e.prototype;n.on=function(n,t,o,a){return i.prototype.on.call(this,n,t,o,a),e.startListen(this.onDeviceOrientationChange),this},n.off=function(n,t,o,a){return void 0===a&&(a=!1),this.hasListener(n)||e.stopListen(),i.prototype.off.call(this,n,t,o,a)},e.__init__=function(){try{var i;if(!(i=laya.device.motion.Accelerator))return;i.prototype.on=e.prototype.on,i.prototype.off=e.prototype.off}catch(i){}},e.startListen=function(i){if(e._callBack=i,!e._isListening){e._isListening=!0;try{wx.onAccelerometerChange(e.onAccelerometerChange)}catch(i){}}},e.stopListen=function(){e._isListening=!1;try{wx.stopAccelerometer({})}catch(i){}},e.onAccelerometerChange=function(i){var n;(n={}).acceleration=i,n.accelerationIncludingGravity=i,n.rotationRate={},null!=e._callBack&&e._callBack(n)},e._isListening=!1,e._callBack=null}(l),function(i){function e(){e.__super.call(this)}o(e,"laya.wx.mini.MiniLoader",l);return e.prototype.load=function(i,n,t,o,a){void 0===t&&(t=!0),void 0===a&&(a=!1);if(this._url=i,0===i.indexOf("data:image")?this._type=n="image":this._type=n||(n=this.getTypeFromUrl(i)),this._cache=t,this._data=null,!a&&d.loadedMap[g.formatURL(i)])return this._data=d.loadedMap[g.formatURL(i)],this.event("progress",1),void this.event("complete",this._data);if(null!=d.parserMap[n])return this._customParse=!0,void(d.parserMap[n]instanceof laya.utils.Handler?d.parserMap[n].runWith(this):d.parserMap[n].call(null,this));var r=y.getUrlEncode(i,n),l=_.getFileExtension(i);if(-1!=e._fileTypeArr.indexOf(l))y.EnvConfig.load.call(this,i,n,t,o,a);else{if(y.isZiYu&&w.ziyuFileData[i]){var s=w.ziyuFileData[i];return void this.onLoaded(s)}if(w.getFileInfo(i)){var c=w.getFileInfo(i);c.encoding=null==c.encoding?"ascii":c.encoding,w.readFile(i,c.encoding,new u(e,e.onReadNativeCallBack,[r,i,n,t,o,a,this]),i)}else{if(w.isLocalNativeFile(i))return void w.read(i,r,new u(e,e.onReadNativeCallBack,[r,i,n,t,o,a,this]));var f=i;-1!=(i=g.formatURL(i)).indexOf("http://")||-1!=i.indexOf("https://")?y.EnvConfig.load.call(this,f,n,t,o,a):w.readFile(i,r,new u(e,e.onReadNativeCallBack,[r,i,n,t,o,a,this]),i)}}},e.onReadNativeCallBack=function(i,e,n,t,o,a,r,l,s){if(void 0===t&&(t=!0),void 0===a&&(a=!1),void 0===l&&(l=0),l)1==l&&y.EnvConfig.load.call(r,e,n,t,o,a);else{var u;u="json"==n||"atlas"==n?y.getJson(s.data):"xml"==n?_.parseXMLFromString(s.data):s.data,!y.isZiYu&&y.isPosMsgYu&&"arraybuffer"!=n&&wx.postMessage({url:e,data:u,isLoad:"filedata"}),r.onLoaded(u)}},t(e,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),e}()),S=function(i){function e(){this._sound=null,this.url=null,this.loaded=!1,this.readyUrl=null,e.__super.call(this)}o(e,"laya.wx.mini.MiniSound",l);var n=e.prototype;return n.load=function(i){i=g.formatURL(i),this.url=i,this.readyUrl=i,e._audioCache[this.readyUrl]?this.event("complete"):y.autoCacheFile&&w.getFileInfo(i)?this.onDownLoadCallBack(i,0):y.autoCacheFile?w.downOtherFiles(i,u.create(this,this.onDownLoadCallBack,[i]),i):this.onDownLoadCallBack(i,0)},n.onDownLoadCallBack=function(i,n){if(n)this.event("error");else{var t;if(y.autoCacheFile){var o=w.getFileInfo(i).md5;t=w.getFileNativePath(o),this._sound=e._createSound(),this._sound.src=this.url=t}else this._sound=e._createSound(),this._sound.src=i;this._sound.onCanplay(e.bindToThis(this.onCanPlay,this)),this._sound.onError(e.bindToThis(this.onError,this))}},n.onError=function(i){try{console.log("-----1---------------minisound-----id:"+e._id),console.log(i)}catch(i){console.log("-----2---------------minisound-----id:"+e._id),console.log(i)}this.event("error"),this._sound.offError(null)},n.onCanPlay=function(){this.loaded=!0,this.event("complete"),e._audioCache[this.readyUrl]=this,this._sound.offCanplay(null)},n.play=function(i,n){void 0===i&&(i=0),void 0===n&&(n=0);var t;if(this.url==m._tMusic?(e._musicAudio||(e._musicAudio=e._createSound()),t=e._musicAudio):t=e._audioCache[this.readyUrl]?e._audioCache[this.readyUrl]._sound:e._createSound(),y.autoCacheFile&&w.getFileInfo(this.url)){var o=w.getFileInfo(this.url).md5;t.src=this.url=w.getFileNativePath(o)}else t.src=this.url;var a=new I(t,this);return a.url=this.url,a.loops=n,a.loop=0===n,a.startTime=i,a.play(),m.addChannel(a),a},n.dispose=function(){var i=e._audioCache[this.readyUrl];i&&(i.src="",i._sound&&(i._sound.destroy(),i._sound=null,i=null),delete e._audioCache[this.readyUrl])},a(0,n,"duration",function(){return this._sound.duration}),e._createSound=function(){return e._id++,y.window.wx.createInnerAudioContext()},e.bindToThis=function(i,e){return i.bind(e)},e._musicAudio=null,e._id=0,e._audioCache={},e}(),I=function(i){function e(i,n){this._audio=null,this._onEnd=null,this._miniSound=null,e.__super.call(this),this._audio=i,this._miniSound=n,this._onEnd=e.bindToThis(this.__onEnd,this),i.onEnded(this._onEnd)}o(e,"laya.wx.mini.MiniSoundChannel",v);var t=e.prototype;return t.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(n.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");this.loops>0&&this.loops--,this.startTime=0,this.play()},t.play=function(){this.isStopped=!1,m.addChannel(this),this._audio.play()},t.stop=function(){this.isStopped=!0,m.removeChannel(this),this.completeHandler=null,this._audio&&(this._audio.pause(),this._audio.offEnded(null),this._audio=null,this._miniSound=null,this._onEnd=null)},t.pause=function(){this.isStopped=!0,this._audio.pause()},t.resume=function(){this._audio&&(this.isStopped=!1,m.addChannel(this),this._audio.play())},a(0,t,"autoplay",function(){return this._audio.autoplay},function(i){this._audio.autoplay=i}),a(0,t,"position",function(){return this._audio?this._audio.currentTime:0}),a(0,t,"duration",function(){return this._audio?this._audio.duration:0}),a(0,t,"loop",function(){return this._audio.loop},function(i){this._audio.loop=i}),a(0,t,"volume",function(){return this._audio?this._audio.volume:1},function(i){this._audio&&(this._audio.volume=i)}),e.bindToThis=function(i,e){return i.bind(e)},e}()}(window,document,Laya),"function"=="function"&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__,exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var n in Laya){var t=Laya[n];t&&t.__isclass&&(e[n]=t)}}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Game/qiuchiqiu/rankItem.ts":
/*!****************************************!*\
  !*** ./src/Game/qiuchiqiu/rankItem.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var layaUI_max_all_1 = __webpack_require__(/*! ../../Ui/layaUI.max.all */ "./src/Ui/layaUI.max.all.ts");

var rankItem = function (_layaUI_max_all_1$Ui$) {
    _inherits(rankItem, _layaUI_max_all_1$Ui$);

    function rankItem() {
        _classCallCheck(this, rankItem);

        return _possibleConstructorReturn(this, (rankItem.__proto__ || Object.getPrototypeOf(rankItem)).call(this));
    }

    _createClass(rankItem, [{
        key: "dataSource",
        set: function set(val) {
            this._dataSource = val;
            if (!val) return;
            this.mcLabel.text = val.index + '';
            this.x1.visible = false;
            this.x2.visible = true;
            if (val.index == 1) {
                this.x1.visible = false;
                this.x2.visible = false;
            }
            this.uHead.skin = "";
            this.uHead.skin = val.avatarUrl;
            this.uScore.text = val.scoreVal + '';
            this.uName.text = val.nickname || val.nickName;
            if (val.index <= 3) {
                this.mingci.skin = "comp/" + val.index + ".png";
                this.mingci.visible = true;
                this.mcLabel.visible = false;
            } else {
                this.mingci.visible = false;
                this.mcLabel.visible = true;
            }
        }
    }]);

    return rankItem;
}(layaUI_max_all_1.Ui.rankItemUI);

exports.rankItem = rankItem;

/***/ }),

/***/ "./src/LayaAir.ts":
/*!************************!*\
  !*** ./src/LayaAir.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../bin/libs/min/laya.core.min */ "./bin/libs/min/laya.core.min.js");
__webpack_require__(/*! ../bin/libs/min/laya.ui.min */ "./bin/libs/min/laya.ui.min.js");
__webpack_require__(/*! ../bin/libs/min/laya.wxmini.min */ "./bin/libs/min/laya.wxmini.min.js");
var Sprite = Laya.Sprite;
exports.Sprite = Sprite;
var Box = Laya.Box;
exports.Box = Box;
var Image = Laya.Image;
exports.Image = Image;
var Event = Laya.Event;
exports.Event = Event;
var WebGL = Laya.WebGL;
exports.WebGL = WebGL;
var Handler = Laya.Handler;
exports.Handler = Handler;
var Stage = Laya.Stage;
exports.Stage = Stage;
var Text = Laya.Text;
exports.Text = Text;
var Tween = Laya.Tween;
exports.Tween = Tween;
var Stat = Laya.Stat;
exports.Stat = Stat;
var Utils = Laya.Utils;
exports.Utils = Utils;
var List = Laya.List;
exports.List = List;
var wx = window["wx"];
exports.wx = wx;
var sharedCanvas = window["sharedCanvas"];
exports.sharedCanvas = sharedCanvas;
var MiniAdpter = Laya.MiniAdpter;
exports.MiniAdpter = MiniAdpter;
var Matrix = Laya.Matrix;
exports.Matrix = Matrix;

/***/ }),

/***/ "./src/Ui/layaUI.max.all.ts":
/*!**********************************!*\
  !*** ./src/Ui/layaUI.max.all.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var View = laya.ui.View;
var Ui;
(function (Ui) {
    var rankItemUI = function (_View) {
        _inherits(rankItemUI, _View);

        function rankItemUI() {
            _classCallCheck(this, rankItemUI);

            return _possibleConstructorReturn(this, (rankItemUI.__proto__ || Object.getPrototypeOf(rankItemUI)).call(this));
        }

        _createClass(rankItemUI, [{
            key: "createChildren",
            value: function createChildren() {
                _get(rankItemUI.prototype.__proto__ || Object.getPrototypeOf(rankItemUI.prototype), "createChildren", this).call(this);
                this.createView(Ui.rankItemUI.uiView);
            }
        }]);

        return rankItemUI;
    }(View);

    rankItemUI.uiView = { "type": "View", "props": { "width": 536, "height": 83 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "x1", "skin": "comp/x1.png" } }, { "type": "Box", "props": { "y": 7, "x": 8, "width": 520, "height": 76 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 51, "width": 66, "var": "uHead", "height": 66 } }, { "type": "Label", "props": { "y": 26, "x": 137, "var": "uName", "valign": "middle", "text": "label", "fontSize": 24, "font": "SimHei", "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 26, "x": 463, "width": 60, "var": "uScore", "valign": "middle", "text": "label", "height": 24, "fontSize": 24, "font": "SimHei", "color": "#ffffff", "align": "right" } }, { "type": "Label", "props": { "x": 0, "width": 36, "var": "mcLabel", "valign": "middle", "top": 0, "text": "1", "fontSize": 26, "font": "SimHei", "color": "#ffffff", "bottom": 0, "align": "center" } }, { "type": "Image", "props": { "y": 23, "x": 7, "var": "mingci", "skin": "comp/1.png" } }] }, { "type": "Image", "props": { "y": 6, "x": 4, "var": "x2", "skin": "comp/x2.png" } }] };
    Ui.rankItemUI = rankItemUI;
})(Ui || (Ui = {}));
exports.Ui = Ui;
(function (Ui) {
    var rankListUI = function (_View2) {
        _inherits(rankListUI, _View2);

        function rankListUI() {
            _classCallCheck(this, rankListUI);

            return _possibleConstructorReturn(this, (rankListUI.__proto__ || Object.getPrototypeOf(rankListUI)).call(this));
        }

        _createClass(rankListUI, [{
            key: "createChildren",
            value: function createChildren() {
                View.regComponent("Ui.rankItemUI", Ui.rankItemUI);
                _get(rankListUI.prototype.__proto__ || Object.getPrototypeOf(rankListUI.prototype), "createChildren", this).call(this);
                this.createView(Ui.rankListUI.uiView);
            }
        }]);

        return rankListUI;
    }(View);

    rankListUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "mouseEnabled": true, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "List", "props": { "width": 536, "var": "myList", "spaceY": 3, "repeatX": 1, "height": 598, "centerY": -10, "centerX": -2 }, "child": [{ "type": "rankItem", "props": { "renderType": "render", "runtime": "Ui.rankItemUI" } }] }] };
    Ui.rankListUI = rankListUI;
})(Ui || (Ui = {}));
exports.Ui = Ui;
(function (Ui) {
    var rankViewUI = function (_View3) {
        _inherits(rankViewUI, _View3);

        function rankViewUI() {
            _classCallCheck(this, rankViewUI);

            return _possibleConstructorReturn(this, (rankViewUI.__proto__ || Object.getPrototypeOf(rankViewUI)).call(this));
        }

        _createClass(rankViewUI, [{
            key: "createChildren",
            value: function createChildren() {
                _get(rankViewUI.prototype.__proto__ || Object.getPrototypeOf(rankViewUI.prototype), "createChildren", this).call(this);
                this.createView(Ui.rankViewUI.uiView);
            }
        }]);

        return rankViewUI;
    }(View);

    rankViewUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "List", "props": { "width": 391, "var": "myList", "spaceX": 21, "repeatY": 1, "repeatX": 4, "height": 82, "centerY": 236, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 82, "renderType": "render", "height": 82 } }] }] };
    Ui.rankViewUI = rankViewUI;
})(Ui || (Ui = {}));
exports.Ui = Ui;
(function (Ui) {
    var rankView2UI = function (_View4) {
        _inherits(rankView2UI, _View4);

        function rankView2UI() {
            _classCallCheck(this, rankView2UI);

            return _possibleConstructorReturn(this, (rankView2UI.__proto__ || Object.getPrototypeOf(rankView2UI)).call(this));
        }

        _createClass(rankView2UI, [{
            key: "createChildren",
            value: function createChildren() {
                _get(rankView2UI.prototype.__proto__ || Object.getPrototypeOf(rankView2UI.prototype), "createChildren", this).call(this);
                this.createView(Ui.rankView2UI.uiView);
            }
        }]);

        return rankView2UI;
    }(View);

    rankView2UI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "List", "props": { "width": 391, "var": "myList", "spaceX": 21, "repeatY": 1, "repeatX": 4, "height": 82, "centerY": -2, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 82, "renderType": "render", "height": 82 } }] }] };
    Ui.rankView2UI = rankView2UI;
})(Ui || (Ui = {}));
exports.Ui = Ui;

/***/ }),

/***/ "./src/Utils/MyUtils.ts":
/*!******************************!*\
  !*** ./src/Utils/MyUtils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var wx = window["wx"];

var MyUtils = function () {
    function MyUtils() {
        _classCallCheck(this, MyUtils);
    }
    /**
     *
     * @param fuc 要执行的步骤 至少接收两个参数 成功(t) 失败(f)
     */


    _createClass(MyUtils, null, [{
        key: "getPlace",
        value: function getPlace(fuc) {
            return new es6_promise_1.Promise(function (t, f) {
                fuc(t, f);
            });
        }
        /**
         * 5 6 7
         * 4   0
         * 3 2 1
         * @param deltaX 当前位置与目标点差值x
         * @param deltaY 当前位置与目标点差值y
         * @param dNum   默认八方向
         * return 方向index
         */

    }, {
        key: "calcDirByDelta",
        value: function calcDirByDelta(deltaX, deltaY) {
            var dNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;

            var angle = MyUtils.calcAngleByDelta(deltaX, deltaY);
            return 0 | angle / (360 / dNum);
        }
    }, {
        key: "calcAngleByDelta",
        value: function calcAngleByDelta(deltaX, deltaY) {
            var radians = Math.atan2(deltaY, deltaX);
            var angle = radians * MyUtils.RadianToAngle;
            return Math.round((angle + 360) % 360);
        }
    }, {
        key: "getRandomColor",
        value: function getRandomColor() {
            return "#" + ("00000" + (Math.random() * 16777215 + 0.5 >> 0).toString(16)).slice(-6);
        }
        /**
         *
         * @param data 要排序的数据 通过 wx.getFriendCloudStorage接口取到
         * @param key 根据哪个属性排序 需要与wx.getFriendCloudStorage填写的一样
         * @param orderType 排序类型 1降序  -1升序   默认降序 高的在前
         */

    }, {
        key: "sortDataByKey",
        value: function sortDataByKey(data, key) {
            var orderType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            data = data.sort(function (a, b) {
                var dt1 = a.KVDataList[0];
                var obj1 = JSON.parse(dt1.value).wxgame;
                var dt2 = b.KVDataList[0];
                var obj2 = JSON.parse(dt2.value).wxgame;
                if (obj1['score'] < obj2['score']) return orderType;else return -orderType;
            });
            var nData = data.map(function (obj, index) {
                obj.index = index + 1;
                var wDt = JSON.parse(obj.KVDataList[0].value).wxgame;
                obj.scoreVal = wDt.score;
                return obj;
            });
            return nData;
        }
    }, {
        key: "getFriendCloudStorageSync",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", MyUtils.getPlace(function (t, f) {
                                    wx.getFriendCloudStorage({
                                        keyList: [key],
                                        success: function success(res) {
                                            t(MyUtils.sortDataByKey(res.data, key));
                                        },
                                        fail: function fail(res) {
                                            t([]);
                                        },
                                        complete: function complete(res) {}
                                    });
                                }));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getFriendCloudStorageSync(_x3) {
                return _ref.apply(this, arguments);
            }

            return getFriendCloudStorageSync;
        }()
    }, {
        key: "getUserInfoByOpenIds",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(arr) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", MyUtils.getPlace(function (t, f) {
                                    wx.getUserInfo({
                                        openIdList: arr,
                                        lang: 'zh_CN',
                                        success: function success(res) {
                                            t(res.data);
                                        },
                                        fail: function fail(res) {
                                            t([]);
                                        }
                                    });
                                }));

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUserInfoByOpenIds(_x4) {
                return _ref2.apply(this, arguments);
            }

            return getUserInfoByOpenIds;
        }()
    }]);

    return MyUtils;
}();
//180 / Math.PI


MyUtils.RadianToAngle = 57.29577951308232;
//Math.PI / 180
MyUtils.AngleToRadian = 0.017453292519943295;
exports.MyUtils = MyUtils;
window["MyUtils"] = MyUtils;

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var main = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _this = this;

        var listView, rank1, rank2;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        LayaAir_1.MiniAdpter.init(true, true);
                        Laya.init(750, 1334); //初始化引擎
                        Laya.stage.scaleMode = LayaAir_1.Stage.SCALE_FIXED_AUTO;
                        Laya.stage.alignH = LayaAir_1.Stage.ALIGN_CENTER;
                        Laya.stage.alignV = LayaAir_1.Stage.ALIGN_MIDDLE;
                        Laya.stage.bgColor = "";
                        listView = new layaUI_max_all_1.Ui.rankListUI();

                        listView.myList.itemRender = rankItem_1.rankItem;
                        listView.myList.vScrollBarSkin = "";
                        listView.myList.array = [];
                        rank1 = new layaUI_max_all_1.Ui.rankViewUI();
                        rank2 = new layaUI_max_all_1.Ui.rankView2UI();

                        rank1.myList.renderHandler = new LayaAir_1.Handler(this, listRender);
                        rank2.myList.renderHandler = new LayaAir_1.Handler(this, listRender);
                        LayaAir_1.wx.onMessage(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(message) {
                                var tempMatrix, matrix, data, keys, uData;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                if (!(message["type"] == "resizeShared")) {
                                                    _context.next = 12;
                                                    break;
                                                }

                                                LayaAir_1.sharedCanvas.width = message.data.width;
                                                LayaAir_1.sharedCanvas.height = message.data.height;
                                                tempMatrix = message.data.matrix;
                                                matrix = new LayaAir_1.Matrix();

                                                matrix.a = tempMatrix.a;
                                                matrix.b = tempMatrix.b;
                                                matrix.c = tempMatrix.c;
                                                matrix.d = tempMatrix.d;
                                                Laya.stage._canvasTransform = matrix; //重新设置矩阵
                                                _context.next = 37;
                                                break;

                                            case 12:
                                                if (!(message["type"] == "openRankList")) {
                                                    _context.next = 20;
                                                    break;
                                                }

                                                Laya.stage.removeChildren();
                                                Laya.stage.addChild(listView);
                                                _context.next = 17;
                                                return MyUtils_1.MyUtils.getFriendCloudStorageSync("score");

                                            case 17:
                                                listView.myList.array = _context.sent;
                                                _context.next = 37;
                                                break;

                                            case 20:
                                                if (!(message["type"] == "showGameOver")) {
                                                    _context.next = 24;
                                                    break;
                                                }

                                                onShowGameOver(rank1, message.data.openid);
                                                _context.next = 37;
                                                break;

                                            case 24:
                                                if (!(message["type"] == "showGameOver1")) {
                                                    _context.next = 28;
                                                    break;
                                                }

                                                onShowGameOver(rank2, message.data.openid);
                                                _context.next = 37;
                                                break;

                                            case 28:
                                                if (!(message["type"] == "openRankList2")) {
                                                    _context.next = 37;
                                                    break;
                                                }

                                                data = message["data"]["openidList"];
                                                keys = Object.keys(data);
                                                _context.next = 33;
                                                return MyUtils_1.MyUtils.getUserInfoByOpenIds(keys);

                                            case 33:
                                                uData = _context.sent;

                                                uData.sort(function (a, b) {
                                                    a.scoreVal = data[a.openId];
                                                    b.scoreVal = data[b.openId];
                                                    if (a.scoreVal < b.scoreVal) {
                                                        return 1;
                                                    } else {
                                                        return -1;
                                                    }
                                                });
                                                uData.forEach(function (a, index) {
                                                    a.index = index + 1;
                                                });
                                                listView.myList.array = uData;

                                            case 37:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            }));

                            return function (_x) {
                                return _ref2.apply(this, arguments);
                            };
                        }());

                    case 15:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function main() {
        return _ref.apply(this, arguments);
    };
}();

var onShowGameOver = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(rank, openid) {
        var data, myIndex, dtArr, dtNew, dtArr1;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        Laya.stage.removeChildren();
                        _context3.next = 3;
                        return MyUtils_1.MyUtils.getFriendCloudStorageSync("score");

                    case 3:
                        data = _context3.sent;
                        openid = openid;

                        data.forEach(function (el, index) {
                            if (el.openid == openid) {
                                myIndex = index;
                            }
                        });
                        dtArr = [];
                        dtNew = [];

                        if (myIndex - 1 >= 0) {
                            dtNew.push(data[myIndex - 1]);
                        }

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

                    case 12:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function onShowGameOver(_x2, _x3) {
        return _ref3.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });
var LayaAir_1 = __webpack_require__(/*! ./LayaAir */ "./src/LayaAir.ts");
var layaUI_max_all_1 = __webpack_require__(/*! ./Ui/layaUI.max.all */ "./src/Ui/layaUI.max.all.ts");
var rankItem_1 = __webpack_require__(/*! ./Game/qiuchiqiu/rankItem */ "./src/Game/qiuchiqiu/rankItem.ts");
var MyUtils_1 = __webpack_require__(/*! ./Utils/MyUtils */ "./src/Utils/MyUtils.ts");

function listRender(item, index) {
    if (!item || !item.dataSource) return;
    item.skin = item.dataSource.avatarUrl;
}
main();

/***/ })

/******/ });