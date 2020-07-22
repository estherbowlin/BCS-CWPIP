// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/ZoomSlider/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ZoomSlider/Widget.html":'\x3cdiv class\x3d"jimu-corner-all"\x3e\r\n  \x3cdiv class\x3d"zoom zoom-in firstFocusNode" role\x3d"button" data-dojo-attach-point\x3d"btnZoomIn" title\x3d"${jimuCommonNls.zoomIn}" aria-label\x3d"${jimuCommonNls.zoomIn}"\r\n  data-dojo-attach-event\x3d"onclick:_onBtnZoomInClicked, onkeydown:_onBtnZoomInKeyDown" tabindex\x3d"0"\x3e+\x3c/div\x3e\r\n  \x3cdiv class\x3d"zoom zoom-out lastFocusNode" role\x3d"button" data-dojo-attach-point\x3d"btnZoomOut" title\x3d"${jimuCommonNls.zoomOut}" aria-label\x3d"${jimuCommonNls.zoomOut}"\r\n   data-dojo-attach-event\x3d"onclick:_onBtnZoomOutClicked, onkeydown:_onBtnZoomOutKeyDown" tabindex\x3d"0"\x3e\u2013\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ZoomSlider/css/style.css":".jimu-widget-zoomslider{background-color: #555; border: 1px solid #999; cursor: pointer; font-size: 24px; line-height: 25px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; color: #fff; text-align: center; font-family: verdana,helvetica;}.jimu-widget-zoomslider .zoom{width: 30px; height: 30px;}.jimu-widget-zoomslider .zoom:hover{background-color: #333;}.jimu-widget-zoomslider .zoom.jimu-state-disabled{color: rgba(255,255,255,0.3);}.jimu-widget-zoomslider.vertical .zoom-in{border-bottom: 1px solid #57585A;}.jimu-widget-zoomslider.horizontal .zoom-in{border-right: 1px solid #57585A;}",
"*now":function(c){c(['dojo/i18n!*preload*widgets/ZoomSlider/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang jimu/BaseWidget dojo/_base/html jimu/utils dijit/Tooltip dojo/keys dojo/on".split(" "),function(c,g,h,a,e,f,b,k){return c([h],{name:"ZoomSlider",baseClass:"jimu-widget-zoomslider",_disabledClass:"jimu-state-disabled",_verticalClass:"vertical",_horizontalClass:"horizontal",_floatClass:"jimu-float-leading",_cornerTop:"jimu-corner-top",_cornerBottom:"jimu-corner-bottom",_cornerLeading:"jimu-corner-leading",_cornerTrailing:"jimu-corner-trailing",moveTopOnActive:!1,
postMixInProperties:function(){this.jimuCommonNls=window.jimuNls.common},postCreate:function(){this.inherited(arguments);this.own(k(this.map,"zoom-end",g.hitch(this,this._zoomHandler)));this._zoomHandler()},setPosition:function(a){this.inherited(arguments);"number"===typeof a.height&&30>=a.height?this._setOrientation(!1):this._setOrientation(!0)},_zoomHandler:function(){a.removeClass(this.btnZoomIn,this._disabledClass);a.removeClass(this.btnZoomOut,this._disabledClass);var d=this.map.getLevel(),b=
null;-1<d&&(d===this.map.getMaxZoom()?b=this.btnZoomIn:d===this.map.getMinZoom()&&(b=this.btnZoomOut));b&&a.addClass(b,this._disabledClass);e.addTooltipByDomNode(f,this.btnZoomIn,this.jimuCommonNls.zoomIn);e.addTooltipByDomNode(f,this.btnZoomOut,this.jimuCommonNls.zoomOut)},_onBtnZoomInClicked:function(){this.map._extentUtil({numLevels:1})},_onBtnZoomOutClicked:function(){this.map._extentUtil({numLevels:-1})},_onBtnZoomInKeyDown:function(a){a.keyCode!==b.ENTER&&a.keyCode!==b.SPACE||this._onBtnZoomInClicked()},
_onBtnZoomOutKeyDown:function(a){a.keyCode!==b.ENTER&&a.keyCode!==b.SPACE||this._onBtnZoomOutClicked()},_setOrientation:function(b){a.removeClass(this.domNode,this._horizontalClass);a.removeClass(this.domNode,this._verticalClass);a.removeClass(this.btnZoomIn,this._floatClass);a.removeClass(this.btnZoomIn,this._cornerTop);a.removeClass(this.btnZoomIn,this._cornerLeading);a.removeClass(this.btnZoomOut,this._floatClass);a.removeClass(this.btnZoomOut,this._cornerBottom);a.removeClass(this.btnZoomOut,
this._cornerTrailing);b?(a.addClass(this.domNode,this._verticalClass),a.addClass(this.btnZoomIn,this._cornerTop),a.addClass(this.btnZoomOut,this._cornerBottom)):(a.addClass(this.domNode,this._horizontalClass),a.addClass(this.btnZoomIn,this._floatClass),a.addClass(this.btnZoomOut,this._floatClass),a.addClass(this.btnZoomIn,this._cornerLeading),a.addClass(this.btnZoomOut,this._cornerTrailing))}})});