// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/copy-features.html":'\x3cdiv class\x3d"esriCTSelectFeaturesContainer"\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListTitle"\x3e${nls.copyFeatures.title}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesHint" data-dojo-attach-point\x3d"warningMessage" tabindex\x3d"0" role\x3d"presentation" aria-label\x3d"${nls.copyFeatures.multipleFeatureSaveWarning}"\x3e${nls.copyFeatures.multipleFeatureSaveWarning}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListContent" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesBtnContainer"\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"createMultipleFeaturesBtn" aria-label\x3d"${nls.copyFeatures.createFeatures}" title\x3d"${nls.copyFeatures.createFeatures}"\x3e${nls.copyFeatures.createFeatures}\x3c/div\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"createSingleFeatureBtn" aria-label\x3d"${nls.copyFeatures.createSingleFeature}"  title\x3d"${nls.copyFeatures.createSingleFeature}"\x3e${nls.copyFeatures.createSingleFeature}\x3c/div\x3e\r\n      \x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"cancelBtn" aria-label\x3d"${nls.cancel}" title\x3d"${nls.cancel}"\x3e${nls.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/keys jimu/dijit/CheckBox dojo/dom-class dojo/dom-attr ./highlightSymbolUtils esri/layers/GraphicsLayer dojo/text!./copy-features.html jimu/dijit/Message esri/tasks/query esri/tasks/QueryTask dojo/Deferred dojo/promise/all".split(" "),function(q,r,t,u,c,e,m,g,h,v,l,n,w,x,y,p,z,A,B,C){return t([q,u,r],{templateString:y,layerLabel:null,featuresList:null,checkBoxNodes:{},
layerCheckBoxNodes:{},featuresByLayerId:{},featureTitlesByLayerId:{},highlightGraphicsLayer:null,startup:function(){this.inherited(arguments);this.highlightGraphicsLayer=this._createNewGraphicsLayer("highlightGraphicsLayer")},postCreate:function(){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this.highlightGraphicsLayer=null;this.own(g(this.cancelBtn,"click",c.hitch(this,function(){this.cancelBtnClicked()})));this.own(g(this.cancelBtn,"keydown",
c.hitch(this,function(a){a.keyCode!==h.ENTER&&a.keyCode!==h.SPACE||this.cancelBtnClicked()})));this.own(g(this.createMultipleFeaturesBtn,"click",c.hitch(this,this._createMultipleFeaturesBtnClicked)));this.own(g(this.createMultipleFeaturesBtn,"keydown",c.hitch(this,function(a){a.keyCode!==h.ENTER&&a.keyCode!==h.SPACE||this._createMultipleFeaturesBtnClicked()})));this.own(g(this.createSingleFeatureBtn,"click",c.hitch(this,this._createSingleFeatureBtnClicked)));this.own(g(this.createSingleFeatureBtn,
"keydown",c.hitch(this,function(a){a.keyCode!==h.ENTER&&a.keyCode!==h.SPACE||this._createSingleFeatureBtnClicked()})))},selectFeaturesToCopy:function(a){if(a&&0<a.length){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this._showHideSingleFeatureButton(a[0]._layer.geometryType);l.remove(this.mainNode,"esriCTHidden");var b=new B;this._processSelectedFeatures(a,b).then(c.hitch(this,function(){m.empty(this.layerListTable);for(var a in this.featureTitlesByLayerId){var b,
c;b=this.layerInfosObj.getLayerInfoById(a);b=b.title?b.title:b.name;c=m.create("div",{},this.layerListTable);this.layerCheckBoxNodes[a]=this._createListNode(b,c,!1,a);this.checkBoxNodes[a]||(this.checkBoxNodes[a]=[]);0<this.featureTitlesByLayerId[a].length&&this._createFeatureEntries(a,c)}this._highlightFeatures()}))}},_processSelectedFeatures:function(a,b){var d={},f,k;this.featuresByLayerId={};this.featureTitlesByLayerId={};e.forEach(a,c.hitch(this,function(a){this.featuresByLayerId[a._layer.id]||
(this.featuresByLayerId[a._layer.id]=[],this.featureTitlesByLayerId[a._layer.id]=[]);this.featuresByLayerId[a._layer.id].push(a);var b=this.layerInfosObj.getLayerInfoById(a._layer.id).layerObject.objectIdField,b=a.getTitle()?a.getTitle():a.attributes[b];this.featureTitlesByLayerId[a._layer.id].push(b)}));for(k in this.featuresByLayerId)k&&(a=this._getObjectIdFieldOfLayer(k),a=this._getSelectedFeatureObjectIds(this.featuresByLayerId[k],a),d[k]=this._getSelectedFeatureGeometry(k,a));C(d).then(c.hitch(this,
function(a){for(f in a)f&&this._updateGeometryForSelectedFeature(f,a)}),c.hitch(this,function(){p({message:this.nls.copyFeatures.copyFeatureUpdateGeometryError})}));return b.resolve(null)},_getObjectIdFieldOfLayer:function(a){return this.layerInfosObj.getLayerInfoById(a).layerObject.objectIdField},_updateGeometryForSelectedFeature:function(a,b){var d;d=this._getObjectIdFieldOfLayer(a);e.forEach(this.featuresByLayerId[a],c.hitch(this,function(f){e.forEach(b[a].features,c.hitch(this,function(a){a.attributes[d]===
f.attributes[d]&&(f.geometry=a.geometry)}))}))},_getSelectedFeatureObjectIds:function(a,b){var d=[];e.forEach(a,c.hitch(this,function(a){d.push(a.attributes[b])}));return d},_getSelectedFeatureGeometry:function(a,b){var d,c;c=this.layerInfosObj.getLayerInfoById(a);a=new A(c.getUrl());d=new z;d.outFields=[c.layerObject.objectIdField];d.objectIds=b;d.returnGeometry=!0;d.outSpatialReference=this.map.spatialReference;return(null===c.layerObject.url||""===c.layerObject.url?c.layerObject.queryFeatures(d):
a.execute(d)).promise},_createFeatureEntries:function(a,b){e.forEach(this.featureTitlesByLayerId[a],c.hitch(this,function(d){d=this._createListNode(d,b,!0,a);this.checkBoxNodes[a].push(d)}))},_createListNode:function(a,b,d,f){var e;b=m.create("div",{"class":"jimu-widget-row esriCTCopyFeaturesNode"},b);e=m.create("div",{"class":"jimu-float-leading checkBoxNode"},b);a=new v({label:a,checked:!0},e);d?(l.add(b,"esriCTCopyFeaturesChildNode"),n.set(a.domNode,"parentLayerId",f),g(a.domNode,"click",c.hitch(this,
this._childNodeStateChanged))):(n.set(a.domNode,"layerId",f),g(a.domNode,"click",c.hitch(this,this._parentNodeStateChanged)));return a},_parentNodeStateChanged:function(a){a=n.get(a.currentTarget,"layerId");var b=this.checkBoxNodes[a],d=this.layerCheckBoxNodes[a].getValue();e.forEach(b,c.hitch(this,function(a){d?a.setValue(!0):a.setValue(!1)}));this._highlightFeatures()},_childNodeStateChanged:function(a){var b=n.get(a.currentTarget,"parentLayerId");a=this.layerCheckBoxNodes[b];var b=this.checkBoxNodes[b],
d=!0;this._highlightFeatures();e.some(b,c.hitch(this,function(a){if(!a.getValue())return d=!1,!0}));a.setValue(d)},cancelBtnClicked:function(){l.add(this.mainNode,"esriCTHidden");this.highlightGraphicsLayer.clear();this.emit("cancelBtnClicked")},_createMultipleFeaturesBtnClicked:function(){var a=[],b;(b=this._getSelectedFeaturesForCopy())&&0<b.length&&(e.forEach(b,c.hitch(this,function(b){b&&b.geometry&&a.push(b)})),this.emit("createMultipleFeatures",a))},_createSingleFeatureBtnClicked:function(){var a;
(a=this._getSelectedFeaturesForCopy())&&0<a.length&&this.emit("createSingleFeature",a)},_validateSelectedFeature:function(a){(!a||0>=a.length)&&p({message:this.nls.copyFeatures.selectFeatureToCopyMessage})},_getSelectedFeaturesForCopy:function(){var a,b=[];for(a in this.featuresByLayerId){var d=this._getSelectedFeaturesByLayerId(a);0<d.length&&(b=b.concat(d))}this._validateSelectedFeature(b);return b},_getSelectedFeaturesByLayerId:function(a){var b=[];e.forEach(this.checkBoxNodes[a],c.hitch(this,
function(d,c){d.getValue()&&b.push(this.featuresByLayerId[a][c])}));return b},_showHideSingleFeatureButton:function(a){"esriGeometryPoint"===a?l.add(this.createSingleFeatureBtn,"esriCTHidden"):l.remove(this.createSingleFeatureBtn,"esriCTHidden")},_createNewGraphicsLayer:function(a){var b;b={};if(a+=this.widgetId)this.map._layers[a]&&this.map.removeLayer(this.map._layers[a]),b={id:a};a=new x(b);this.map.addLayer(a);return a},_highlightFeatures:function(){this.highlightGraphicsLayer.clear();for(var a in this.featureTitlesByLayerId)this._highlightSingleLayerFeatures(a)},
_highlightSingleLayerFeatures:function(a){var b;b=this.map.getLayer(a);a=this._getSelectedFeaturesByLayerId(a);e.forEach(a,c.hitch(this,function(a){a=w.getHighLightSymbol(a,b);this.highlightGraphicsLayer.add(a)}))}})});