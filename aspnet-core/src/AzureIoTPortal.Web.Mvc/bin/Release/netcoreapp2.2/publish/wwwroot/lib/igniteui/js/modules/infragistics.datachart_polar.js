﻿/*!@license
* Infragistics.Web.ClientUI infragistics.datachart_polar.js 16.2.20162.2141
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*     infragistics.dv_geometry.JS
*     infragistics.datachart_extendedaxes.js
*     infragistics.datachart_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_geometry","./infragistics.datachart_extendedaxes","./infragistics.datachart_core","./infragistics.ext_ui"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$a0=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$r=$.ig.globalDefs.$$r;$$l=$.ig.globalDefs.$$l;$$j=$.ig.globalDefs.$$j;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["PolarAreaSeries:a","PolarBase:b","PolarLineSeries:e","PolarLineSeriesBase:f","PolarScatterSeries:g","PolarSplineAreaSeries:h","PolarSplineSeries:i","PolarAreaSeriesView:k","PolarBaseView:l","PolarLineSeriesBaseView:m","PolarLineSeriesView:n","PolarScatterSeriesView:o","PolarSplineAreaSeriesView:p","PolarSplineSeriesView:q"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compareSimple,$w=$.ig.util.tryParseNumber,$x=$.ig.util.tryParseNumber1,$y=$.ig.util.numberToString,$z=$.ig.util.numberToString1,$0=$.ig.util.parseNumber,$1=$.ig.util.compare,$2=$.ig.util.replace,$3=$.ig.util.stringFormat,$4=$.ig.util.stringFormat1,$5=$.ig.util.stringFormat2,$6=$.ig.util.stringCompare1,$7=$.ig.util.stringCompare2,$8=$.ig.util.stringCompare3;$c("PolarBase:b","MarkerSeries",{a8:function(){return new $$t.l(this)},h6:function(a){$.ig.MarkerSeries.prototype.h6.call(this,a);this._mg=a},_mg:null,mh:null,isPolar:function(){return true},init:function(){this.mk=new $$t.d;this.mm=new $$t.d;this.mj=new $$t.d;$.ig.MarkerSeries.prototype.init.call(this);this._ml=new $$t.d;this.mm._z=this.n4.runOn(this);this.mk._z=this.n4.runOn(this);this.mj._z=this.n4.runOn(this);this._mn=new $.ig.SeriesRenderer$2($$t.$d.$type,$$t.$l.$type,0,this.nh.runOn(this),this.nj.runOn(this),this.bz.runOn(this),this.ix.runOn(this),this.nf.runOn(this))},nf:function(){if(this._bj.needsFlush()){this._bj.flush()}},ng:function(){this.me.e(this.mh._y,this.mr(),this.ms(),this.n6,this.n5,function(a,b){return Math.cos(b)},function(a,b){return Math.sin(b)},true)},_ma:null,_mf:null,n6:null,n5:null,_mn:null,angleMemberPath:function(a){if(arguments.length===1){this.g($$t.$b.angleMemberPathProperty,a);return a}else{return this.c($$t.$b.angleMemberPathProperty)}},radiusMemberPath:function(a){if(arguments.length===1){this.g($$t.$b.radiusMemberPathProperty,a);return a}else{return this.c($$t.$b.radiusMemberPathProperty)}},mr:function(a){if(arguments.length===1){if(this.mp!=a){var b=this.mr();this.mp=a;this.raisePropertyChanged("AngleColumn",b,this.mr())}return a}else{return this.mp}},mp:null,ms:function(a){if(arguments.length===1){if(this.mq!=a){var b=this.ms();this.mq=a;this.raisePropertyChanged("RadiusColumn",b,this.ms())}return a}else{return this.mq}},mq:null,angleAxis:function(a){if(arguments.length===1){this.g($$t.$b.angleAxisProperty,a);return a}else{return this.c($$t.$b.angleAxisProperty)}},radiusAxis:function(a){if(arguments.length===1){this.g($$t.$b.radiusAxisProperty,a);return a}else{return this.c($$t.$b.radiusAxisProperty)}},useCartesianInterpolation:function(a){if(arguments.length===1){this.g($$t.$b.useCartesianInterpolationProperty,a);return a}else{return this.c($$t.$b.useCartesianInterpolationProperty)}},maximumMarkers:function(a){if(arguments.length===1){this.g($$t.$b.maximumMarkersProperty,a);return a}else{return $g(this.c($$t.$b.maximumMarkersProperty))}},trendLineType:function(a){if(arguments.length===1){this.g($$t.$b.trendLineTypeProperty,$.ig.TrendLineType.prototype.getBox(a));return a}else{return $f(this.c($$t.$b.trendLineTypeProperty))}},trendLineBrush:function(a){if(arguments.length===1){this.g($$t.$b.trendLineBrushProperty,a);return a}else{return this.c($$t.$b.trendLineBrushProperty)}},actualTrendLineBrush:function(a){if(arguments.length===1){this.g($$t.$b.actualTrendLineBrushProperty,a);return a}else{return this.c($$t.$b.actualTrendLineBrushProperty)}},trendLineThickness:function(a){if(arguments.length===1){this.g($$t.$b.trendLineThicknessProperty,a);return a}else{return this.c($$t.$b.trendLineThicknessProperty)}},trendLineDashCap:function(a){if(arguments.length===1){this.g($$t.$b.trendLineDashCapProperty,$$a.$be.getBox(a));return a}else{return $f(this.c($$t.$b.trendLineDashCapProperty))}},trendLineDashArray:function(a){if(arguments.length===1){this.g($$t.$b.trendLineDashArrayProperty,a);return a}else{return this.c($$t.$b.trendLineDashArrayProperty)}},trendLinePeriod:function(a){if(arguments.length===1){this.g($$t.$b.trendLinePeriodProperty,a);return a}else{return $g(this.c($$t.$b.trendLinePeriodProperty))}},trendLineZIndex:function(a){if(arguments.length===1){this.g($$t.$b.trendLineZIndexProperty,a);return a}else{return $g(this.c($$t.$b.trendLineZIndexProperty))}},clipSeriesToBounds:function(a){if(arguments.length===1){this.g($$t.$b.clipSeriesToBoundsProperty,a);return a}else{return this.c($$t.$b.clipSeriesToBoundsProperty)}},mk:null,mm:null,mj:null,me:null,hi:function(){$.ig.MarkerSeries.prototype.hi.call(this);if(this.radiusAxis()!=null){this.radiusAxis().f7(false)}if(this.angleAxis()!=null){this.angleAxis().f7(false)}},g6:function(a,b,c,d){var e=false;this._mg._c6.p(a,b,c,d);if(this.angleAxis()!=null&&!this.angleAxis().updateRange()){e=true}if(this.radiusAxis()!=null&&!this.radiusAxis().updateRange()){e=true}if(e){this.renderSeries(true)}},i3:function(a,b){this.renderSeries(false)},i4:function(a,b){this.renderSeries(false)},de:function(a,b,c){var d=true;if(!$.ig.MarkerSeries.prototype.de.call(this,a,b,c)||!c.n()||b.isEmpty()||a.isEmpty()||this.angleAxis()==null||this.radiusAxis()==null||this.mr()==null||this.ms()==null||this.mr().count()==0||this.ms().count()==0||this.bp()==null||this.bp().count()!=this.mr().count()||this.bp().count()!=this.ms().count()||this.me==null||this.angleAxis().seriesViewer()==null||this.radiusAxis().seriesViewer()==null||this.angleAxis().actualMinimumValue()==this.angleAxis().actualMaximumValue()||this.radiusAxis().actualMinimumValue()==this.radiusAxis().actualMaximumValue()){d=false}return d},ir:function(a){var b;var c;var d=this.getViewInfo(c,b);c=d.p0;b=d.p1;if(!this.de(c,b,this.view())){this.g4(true,this.view());return}this.n6=b;this.n5=c;this._mf=new $$t.c(this.angleAxis(),this.radiusAxis(),this.bp());var e=new $.ig.SeriesRenderingArguments(this,c,b,a,this._cy);var f=this._mn.g(e,this.mk,this.mj,this.mm,this._mg);this.mk=f.p1;this.mj=f.p2;this.mm=f.p3},n4:function(a){var b=this.me.h(a.__x,a.__y,this.n6,this.n5,this._mf._e,this._mf._d,this._mf._g,this._mf._f,this._mf._i,this._mf._h);return b},ak:function(a){if(a!=null&&a==this.angleAxis()&&this.mr()!=null){return new $.ig.AxisRange(this.mr().minimum(),this.mr().maximum())}if(a!=null&&a==this.radiusAxis()&&this.ms()!=null){return new $.ig.AxisRange(this.ms().minimum(),this.ms().maximum())}return null},scrollIntoView:function(a){var b=this.view().b7();var c=this.view().b6();var d=!b.isEmpty()&&!c.isEmpty()&&this.bp()!=null?this.bp().indexOf(a):-1;if(this.angleAxis()==null||this.mr()==null||this.radiusAxis()==null||this.ms()==null){return false}if(d<0||d>this.mr().count()-1||d>this.ms().count()-1){return false}var e=this.angleAxis().getScaledAngle(this.mr().item(d));var f=this.radiusAxis().getScaledValue3(this.ms().item(d));var g=.5+Math.cos(e)*f;var h=.5+Math.sin(e)*f;if(!$.ig.util.isNaN(g)){if(g<b.left()+.1*b.width()){g=g+.4*b.width();b.x(g-.5*b.width())}if(g>b.right()-.1*b.width()){g=g-.4*b.width();b.x(g-.5*b.width())}}if(!$.ig.util.isNaN(h)){if(h<b.top()+.1*b.height()){h=h+.4*b.height();b.y(h-.5*b.height())}if(h>b.bottom()-.1*b.height()){h=h-.4*b.height();b.y(h-.5*b.height())}}if(this.syncLink()!=null){this.syncLink().am(this.seriesViewer(),b)}return d>=0},getItem:function(a){return null},getItemIndex:function(a){return-1},ib:function(a,b,c,d){$.ig.MarkerSeries.prototype.ib.call(this,a,b,c,d);if(this._mg._c6.d(a,b,c,d)){this.renderSeries(false);this.hr()}switch(b){case"FastItemsSource":if($b($.ig.IFastItemsSource.prototype.$type,c)!=null){c.deregisterColumn(this.mr());c.deregisterColumn(this.ms());this.mr(null);this.ms(null)}if($b($.ig.IFastItemsSource.prototype.$type,d)!=null){this.mr(this.bm(this.angleMemberPath()));this.ms(this.bm(this.radiusMemberPath()))}if(this.radiusAxis()!=null&&!this.radiusAxis().updateRange()||this.angleAxis()!=null&&!this.angleAxis().updateRange()){this.renderSeries(false)}break;case"AngleAxis":if(this.angleAxis()!=null&&this.radiusAxis()!=null){this.me=new $.ig.PolarAxes(this.radiusAxis(),this.angleAxis())}if(c!=null){c.deregisterSeries(this)}if(d!=null){d.registerSeries(this)}if(this.angleAxis()!=null&&!this.angleAxis().updateRange()){this.renderSeries(false)}else if(c!=null&&d==null){this.g4(true,this.view())}break;case"RadiusAxis":if(this.angleAxis()!=null&&this.radiusAxis()!=null){this.me=new $.ig.PolarAxes(this.radiusAxis(),this.angleAxis())}if(c!=null){c.deregisterSeries(this)}if(d!=null){d.registerSeries(this)}if(this.radiusAxis()!=null&&!this.radiusAxis().updateRange()){this.renderSeries(false)}else if(c!=null&&d==null){this.g4(true,this.view())}if(this.angleAxis()!=null&&!this.angleAxis().updateRange()){this.angleAxis().f3()}break;case"AngleMemberPath":if(this.bp()!=null){this.bp().deregisterColumn(this.mr());this.mr(this.bm(this.angleMemberPath()))}break;case"AngleColumn":this._mg._c6.v();if(this.angleAxis()!=null&&!this.angleAxis().updateRange()){this.renderSeries(false)}break;case"RadiusMemberPath":if(this.bp()!=null){this.bp().deregisterColumn(this.ms());this.ms(this.bm(this.radiusMemberPath()))}break;case"RadiusColumn":this._mg._c6.v();if(this.radiusAxis()!=null&&!this.radiusAxis().updateRange()){this.renderSeries(false)}break;case"UseCartesianInterpolation":this.renderSeries(false);this.hr();break;case"MaximumMarkers":this.renderSeries(false);this.hr();break;case"TransitionProgress":this._mf=new $$t.c(this.angleAxis(),this.radiusAxis(),this.bp());this.n6=this.view().b7();this.n5=this.view().b6();this.mm._x=this.useCartesianInterpolation();this.mm.d(this.ej(),this.mk,this.mj);if(this.b1(this.view())){return}if(this.ej()==1){this.nj(this.mj,this._mg)}else{this.nj(this.mm,this._mg)}break;case"TrendLineBrush":this.i0();break;case"ClipSeriesToBounds":this.renderSeries(false);this.hr();break;case"TrendLineType":this.hr();break}},canUseAsRadiusAxis:function(a){if($b($.ig.NumericRadiusAxis.prototype.$type,a)!==null){return true}return false},canUseAsAngleAxis:function(a){if($b($.ig.NumericAngleAxis.prototype.$type,a)!==null){return true}return false},g4:function(a,b){$.ig.MarkerSeries.prototype.g4.call(this,a,b);var c=b;if(a){c._c7.clear()}c._c6.o()},mb:function(a,b){var c=a.top()-10;var d=a.bottom()+10;var e=a.left()-10;var f=a.right()+10;var g=function(){var $ret=new $.ig.Clipper(1,e,d,f,c,false);$ret.i(b);return $ret}();return g},ne:function(a,b,c,d){a._i=new $$4.f($.ig.$op.$type,$.ig.OwnedPoint.prototype.$type,1,b);var e=this.bp();for(var f=0;f<b;f++){var g=a._y.__inner[f];if(!Number.isInfinity(g.__x)&&!Number.isInfinity(g.__y)){var h={__x:this.mr().item(f),__y:this.ms().item(f),$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};var i={__x:g.__x,__y:g.__y,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};a._i.add(e.item(f),function(){var $ret=new $.ig.OwnedPoint;$ret._a=e.item(f);$ret._b=h;$ret._c=i;return $ret}())}}},nh:function(a,b){var $self=this;var c=b.b7();var d=b.b6();a._l.clear();a._p.clear();var e=Math.min(this.mr()!=null?this.mr().count():0,this.ms()!=null?this.ms().count():0);if(e<1){return}this._mf=new $$t.c(this.angleAxis(),this.radiusAxis(),this.bp());this.mh=a;this.n5=d;this.n6=c;b._c4.l(a._l,this.maximumMarkers(),c,d,this.resolution());if(e<=this.maximumMarkers()){this.ne(a,e,c,d)}var f=this.mb(d,a._p);var g=Math.min(this.angleAxis().actualMinimumValue(),this.angleAxis().actualMaximumValue());var h=Math.max(this.angleAxis().actualMaximumValue(),this.angleAxis().actualMinimumValue());b._c6._z=this.useCartesianInterpolation();b._c6._y=0;b._c6._ab=this.radiusAxis()._kh;b._c6._aa=this.radiusAxis()._kg;b._c6._ac=function(i,j){return $self.me.c(i,j,c,d,Math.cos)};b._c6._ad=function(i,j){return $self.me.d(i,j,c,d,Math.sin)};var i=new $$4.v(Number,0);for(var j=0;j<this.mr().count();j++){if(this.mr().item(j)>=g&&this.mr().item(j)<=h){i.add(this.mr().item(j))}}var k=this.ms();if(i.count()!=this.mr().count()){k=new $$4.v(Number,0);for(var l=0;l<this.mr().count();l++){if(this.mr().item(l)>=g&&this.mr().item(l)<=h){k.add(this.ms().item(l))}}}b._c6.ae(a._p,this.trendLineType(),i,k,this.trendLinePeriod(),this.angleAxis().getScaledAngle.runOn(this.angleAxis()),this.radiusAxis().getScaledValue3.runOn(this.radiusAxis()),function(){var $ret=new $.ig.TrendResolutionParams;$ret._b=$self.resolution();$ret._f=d;$ret._g=c;return $ret}(),f,g,h)},nj:function(a,b){var c=b.b7();var d=b.b6();var e=this.getEffectiveViewport1(b);var f=this.kz(b);this._mf=new $$t.c(this.angleAxis(),this.radiusAxis(),this.bp());b._c4.j(a._l,this.useLightweightMarkers());b.cy();var g=this.mb(d,b._c6.x()._ah);b._c6.u(a._p,g);this.nd(d,c,e,f,b)},nd:function(a,b,c,d,e){e.c9(a,b,c,d)},i0:function(){$.ig.MarkerSeries.prototype.i0.call(this);if(this.index()<0){return}this._mg.db()},_ml:null,is:function(a,b){$.ig.MarkerSeries.prototype.is.call(this,a,b);if(!this.c5()){this.view().a6(b);return}this.view().a6(b);if(this.b1(this._a9)){return}var c=this._a9;if(!this._cz){this._ml=new $$t.d;this.nh(this._ml,c)}this._cz=false;this.nj(this._ml,c);this.c5(false)},_mi:null,renderAlternateView:function(a,b,c,d,e){$.ig.MarkerSeries.prototype.renderAlternateView.call(this,a,b,c,d,e);var f=this.dg().item(d);var g=f;f.a5(c);if(this.b1(g)){return}if(this._mi==null){this._mi=new $$t.d}this.nh(this._mi,g);this.nj(this._mi,g)},ni:function(a,b){var c=new $$4.v($.ig.$op.$type,0);var e=b.c().getEnumerator();while(e.moveNext()){var d=e.current();if(!a.containsKey(d)){c.add1(d)}}var g=c.getEnumerator();while(g.moveNext()){var f=g.current();b.g(f)}},l9:function(a,b,c){this.ng();return this.mh._y.toArray()},mx:function(a){var b=new $$4.v($.ig.Number.prototype.$type,0);var c=this.bp();var e=this._mg._c7.c().getEnumerator();while(e.moveNext()){var d=e.current();b.add(c.indexOf(d))}return b},n3:function(a){return{__x:this.mr().item(a),__y:this.ms().item(a),$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName}},hc:function(a){$.ig.MarkerSeries.prototype.hc.call(this,a);var b=new $.ig.PolyLineVisualData(1,"trendLine",this._mg._c6.x());b.tags().add("Trend");a.shapes().add(b)},$type:new $.ig.Type("PolarBase",$.ig.MarkerSeries.prototype.$type)},true);$c("PolarLineSeriesBase:f","PolarBase",{a8:function(){return new $$t.m(this)},h6:function(a){$$t.$b.h6.call(this,a);this._oa=a},_oa:null,init:function(){$$t.$b.init.call(this);this._n7=new $.ig.PathRenderer(1,new $.ig.DefaultFlattener);this._n9=new $.ig.PathRenderer(0)},_n7:null,_n9:null,ob:function(){return 1},oe:function(){return false},og:function(){return false},nh:function(a,b){var $self=this;$$t.$b.nh.call(this,a,b);a._o.clear();var c=b.b7();var d=b.b6();var e=this.mr()!=null?this.mr().count():0;var f=this.ms()!=null?this.ms().count():0;var g=Math.min(e,f);var h=function(){var $ret=new $.ig.PolarLinePlanner;$ret._m=function(i){return $self._mf._a.getScaledAngle1($self.mr().item(i),$self._mf._e,$self._mf._d)};$ret._q=g;$ret._n=function(i){return $self.radiusAxis().ko($self.ms().item(i),$self._mf._g,$self._mf._f,$self._mf._i,$self._mf._h)};$ret._l=$self.resolution();$ret._f=$self.useCartesianInterpolation();$ret._b=$self.ob();$ret._o=function(i){return $self.oh(a,i)};$ret._p=function(i){return $self.oi(a,i)};$ret.ab(d);$ret.ac(c);$ret._d=$self.og();$ret._c=$self.oe();return $ret}();var i=new $$4.v($.ig.Number.prototype.$type,0);for(var j=0;j<g;j++){if(this.of(j)){i.add(j)}}if(this.og()&&i.count()>0){i.add(i.__inner[0])}h.x(a._o,i)},oh:function(a,b){return a._y.__inner[b].__x},oi:function(a,b){return a._y.__inner[b].__y},od:function(){return!this.oc()},oc:function(){var a=this.seriesViewer().actualWindowRect();return!a.containsPoint({__x:.5,__y:.5,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName})},of:function(a){return this.mr().item(a)>=this._mf._a.actualMinimumValue()&&this.mr().item(a)<=this._mf._a.actualMaximumValue()&&this.ms().item(a)>=this._mf._b.actualMinimumValue()&&this.ms().item(a)<=this._mf._b.actualMaximumValue()||$.ig.util.isNaN(this.mr().item(a))||$.ig.util.isNaN(this.ms().item(a))},oj:function(a){},ok:function(a,b){},g4:function(a,b){$$t.$b.g4.call(this,a,b);this.oj(b)},_n8:null,nj:function(a,b){$$t.$b.nj.call(this,a,b);if(this.useCartesianInterpolation()){this._n8=this._n7}else{this._n8=this._n9}this._n8._b=this.ob();this.oj(b);this.ok(a,b)},$type:new $.ig.Type("PolarLineSeriesBase",$$t.$b.$type)},true);$c("PolarAreaSeries:a","PolarLineSeriesBase",{a8:function(){return new $$t.k(this)},h6:function(a){$$t.$f.h6.call(this,a);this._ol=a},_ol:null,init:function(){$$t.$f.init.call(this);this._z=$$t.$a.$type},oj:function(a){var b=a;b.df()},ok:function(a,b){if(a._o.count()>0){var c=a._o.__inner[0];var d=a._o.__inner[a._o.count()-1];var e=c.__x==d.__x&&c.__y==d.__y;if(!e){a._o.add(a._o.__inner[0])}}var f=b;f.di().__opacity=this.actualAreaFillOpacity();f.dg(a._o,this.resolution())},og:function(){return true},unknownValuePlotting:function(a){if(arguments.length===1){this.g($$t.$a.unknownValuePlottingProperty,$.ig.UnknownValuePlotting.prototype.getBox(a));return a}else{return $f(this.c($$t.$a.unknownValuePlottingProperty))}},ob:function(){return this.unknownValuePlotting()},$type:new $.ig.Type("PolarAreaSeries",$$t.$f.$type)},true);$c("PolarAxisInfoCache:c","Object",{_a:null,_b:null,_e:false,_g:false,_d:false,_f:false,_c:null,_i:0,_h:0,init:function(a,b,c){$.ig.$op.init.call(this);this._a=a;this._b=b;this._e=this._a.it();this._d=this._a.isInverted();this._g=this._b.it();this._f=this._b.isInverted();this._i=this._b._kh;this._h=this._b._kg;this._c=c},$type:new $.ig.Type("PolarAxisInfoCache",$.ig.$ot)},true);$c("PolarFrame:d","ScatterFrameBase$1",{init:function(){$.ig.ScatterFrameBase$1.prototype.init.call(this,$$t.$d.$type);this._y=new $$4.v($$a.$u.$type,0);this._x=true},_y:null,_x:false,_z:null,t:function(a,b,c){var d=$b($$t.$d.$type,b);var e=$b($$t.$d.$type,c);if(d==null||e==null){return}$.ig.Frame.prototype.a(this._y,a,d._y,e._y)},s:function(a,b,c,d){if(this._x){$.ig.ScatterFrameBase$1.prototype.s.call(this,a,b,c,d)}else{$.ig.ScatterFrameBase$1.prototype.s.call(this,a,b,c,d);if(c!=null&&d!=null&&(c._b.__x!=d._b.__x||c._b.__y!=d._b.__y)){var e=1-b;a._b={__x:c._b.__x*e+d._b.__x*b,__y:c._b.__y*e+d._b.__y*b,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName}}}},w:function(a){return!$.ig.util.isNaN(a.__x)&&!$.ig.util.isNaN(a.__y)&&!Number.isInfinity(a.__x)&&!Number.isInfinity(a.__y)},v:function(a,b,c,d){if(this._x){$.ig.ScatterFrameBase$1.prototype.v.call(this,a,b,c,d)}else{if(c!=null&&d!=null&&(c._c.__x!=d._c.__x||c._c.__y!=d._c.__y)&&this.w(a._b)){a._c=this._z(a._b)}else{$.ig.ScatterFrameBase$1.prototype.v.call(this,a,b,c,d)}}},$type:new $.ig.Type("PolarFrame",$.ig.ScatterFrameBase$1.prototype.$type.specialize(-1))},true);$$t.$d.$type.initSelfReferences();$c("PolarLineSeries:e","PolarLineSeriesBase",{a8:function(){return new $$t.n(this)},h6:function(a){$$t.$f.h6.call(this,a);this._ol=a},_ol:null,init:function(){$$t.$f.init.call(this);this._z=$$t.$e.$type},oj:function(a){var b=a;b.df()},ok:function(a,b){var c=b;c.dg(a._o,this.resolution())},unknownValuePlotting:function(a){if(arguments.length===1){this.g($$t.$e.unknownValuePlottingProperty,$.ig.UnknownValuePlotting.prototype.getBox(a));return a}else{return $f(this.c($$t.$e.unknownValuePlottingProperty))}},ob:function(){return this.unknownValuePlotting()},ib:function(a,b,c,d){$$t.$f.ib.call(this,a,b,c,d);switch(b){case"UnknownValuePlotting":this.renderSeries(false);this.hr();break}},$type:new $.ig.Type("PolarLineSeries",$$t.$f.$type)},true);$c("PolarScatterSeries:g","PolarBase",{a8:function(){return new $$t.o(this)},h6:function(a){$$t.$b.h6.call(this,a);this._n7=a},_n7:null,init:function(){$$t.$b.init.call(this);this._z=$$t.$g.$type},$type:new $.ig.Type("PolarScatterSeries",$$t.$b.$type)},true);$c("PolarSplineAreaSeries:h","PolarLineSeriesBase",{a8:function(){return new $$t.p(this)},h6:function(a){$$t.$f.h6.call(this,a);this._ol=a},_ol:null,init:function(){$$t.$f.init.call(this);this._z=$$t.$h.$type},oj:function(a){var b=a;b.df()},ok:function(a,b){this.oj(b);if(a._o.count()<1){return}var c=b;c.di().__opacity=this.actualAreaFillOpacity();c.dg(a._o,this.stiffness())},og:function(){return true},stiffness:function(a){if(arguments.length===1){this.g($$t.$h.stiffnessProperty,a);return a}else{return this.c($$t.$h.stiffnessProperty)}},ib:function(a,b,c,d){$$t.$f.ib.call(this,a,b,c,d);switch(b){case"Stiffness":this.renderSeries(false);break}},$type:new $.ig.Type("PolarSplineAreaSeries",$$t.$f.$type)},true);$c("PolarSplineSeries:i","PolarLineSeriesBase",{a8:function(){return new $$t.q(this)},h6:function(a){$$t.$f.h6.call(this,a);this._ol=a},_ol:null,init:function(){$$t.$f.init.call(this);this._z=$$t.$i.$type},stiffness:function(a){if(arguments.length===1){this.g($$t.$i.stiffnessProperty,a);return a}else{return this.c($$t.$i.stiffnessProperty)}},ib:function(a,b,c,d){$$t.$f.ib.call(this,a,b,c,d);switch(b){case"Stiffness":this.renderSeries(false);break}},oj:function(a){var b=a;b.df()},ok:function(a,b){this.oj(b);var c=b;c.dg(a._o,this.stiffness())},$type:new $.ig.Type("PolarSplineSeries",$$t.$f.$type)},true);$c("PolarTrendLineManager:j","TrendLineManagerBase$1",{init:function(){$.ig.TrendLineManagerBase$1.prototype.init.call(this,$$a.$u.$type)},ae:function(a,b,c,d,e,f,g,h,i,j,k){var l=j;var m=k;var n=new $$4.v($$a.$u.$type,0);if(!h._g.isEmpty()&&!h._f.isEmpty()){var o=c;var p=d;var q=0;if(o!=null){q=o.count()}if(p!=null){q=Math.min(q,p.count())}if(b==0){this._a=null;this._e.clear();return}if(this.c(b)){this._e.clear();this._a=$.ig.TrendFitCalculator.prototype.a(n,b,h,this._a,q,function(r){return o.item(r)},function(r){return p.item(r)},f,g,l,m)}if(this.b(b)){this._a=null;$.ig.TrendAverageCalculator.prototype.c(b,this._e,c,d,e);var s=this._e.getEnumerator();while(s.moveNext()){var r=s.current();var t=f(r.__x);var u=g(r.__y);if(!$.ig.util.isNaN(t)&&!$.ig.util.isNaN(u)){n.add({__x:t,__y:u,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName})}}}if(n.count()>0){this.s(n,h,a,i)}}},_z:false,_y:0,_ab:0,_aa:0,_ac:null,_ad:null,s:function(a,b,c,d){var $self=this;if(d!=null){d.i(c)}var e=function(){var $ret=new $.ig.PolarLinePlanner;$ret._m=function(f){return a.item(f).__x};$ret._n=function(f){return a.item(f).__y};$ret._a=d;$ret._q=a.count();$ret._l=b._b;$ret._o=function(f){return $self._ac(a.item(f).__x,a.item(f).__y)};$ret._p=function(f){return $self._ad(a.item(f).__x,a.item(f).__y)};$ret._f=$self._z;$ret._b=$self._y;$ret.ab(b._f);$ret.ac(b._g);return $ret}();e.x(null,null)},$type:new $.ig.Type("PolarTrendLineManager",$.ig.TrendLineManagerBase$1.prototype.$type.specialize($$a.$u.$type))},true);$c("PolarBaseView:l","MarkerSeriesView",{_c5:null,_c4:null,init:function(a){$.ig.MarkerSeriesView.prototype.init.call(this,a);this._c5=a;this._c7=new $.ig.HashPool$2($.ig.$op.$type,$.ig.Marker.prototype.$type);this.ct(this._c7);this._c6=new $$t.j},_c6:null,aw:function(){$.ig.MarkerSeriesView.prototype.aw.call(this);this._c4=this.c3();if(!this.p()){this._c5.maximumMarkers(1e3);this._cd.markerType(2)}},c3:function(){var $self=this;var a=new $.ig.NumericMarkerManager(0,function(b){return $self._c7.item(b)},function(b){return $self._c5._mf._c.item(b)},this.da.runOn(this),this.c2.runOn(this),this.c8.runOn(this));a._n=true;a._p=this._c5.n3.runOn(this._c5);return a},da:function(a){this._c5.ni(a,this._c7)},c2:function(){return this._c5.l9(this._c7,this.b7(),this.b6())},c8:function(){return this._c5.mx(this._c7)},c9:function(a,b,c,d){if(this._c5.clipSeriesToBounds()){var e=new $$a.ay;this._c5.radiusAxis().kv(e,a,b,c,d)}else{}},db:function(){if(this._c5.trendLineBrush()!=null){this._c5.actualTrendLineBrush(this._c5.trendLineBrush())}else{this._c5.actualTrendLineBrush(this._c5.actualBrush())}},_c7:null,cr:function(a){this._c7.f(a)},a9:function(a,b){if(a.d()){if(this._c5.trendLineType()!=0&&!b){var c=this._c6.x();c._aa=this._c5.trendLineThickness();c.__stroke=this._c5.actualTrendLineBrush();c._ab=this._c5.trendLineDashCap();c._ag=this._c5.trendLineDashArray();a.u(c)}}$.ig.MarkerSeriesView.prototype.a9.call(this,a,b)},dc:function(){return $$a.$aa.empty()},getDefaultTooltipTemplate:function(){var a="<div class='ui-chart-default-tooltip-content'><span>"+"${item."+this._c5.angleMemberPath()+"}"+"</span><br/><span";var b=this.ai();if(!String.isNullOrEmpty(b)){a+=" style='color:"+b+"'"}a+=">"+this._c5.title()+": </span><span class='ui-priority-primary'>"+"${item."+this._c5.radiusMemberPath()+"}</span></div>";return a},$type:new $.ig.Type("PolarBaseView",$.ig.MarkerSeriesView.prototype.$type)},true);$c("PolarLineSeriesBaseView:m","PolarBaseView",{_dd:null,init:function(a){$$t.$l.init.call(this,a);this._dd=a},aj:function(){var a=new $$a.as;a.colorString("rgba(95,95,95,0.5)");this._e.shadowColor(a);this._e.shadowBlur(3);this._e.shadowOffsetX(1);this._e.shadowOffsetY(4);this._e.useSingleShadow(false)},$type:new $.ig.Type("PolarLineSeriesBaseView",$$t.$l.$type)},true);$c("PolarAreaSeriesView:k","PolarLineSeriesBaseView",{_de:null,init:function(a){this.dj=new $$a.bn;this.dh=new $$a.bn;$$t.$m.init.call(this,a);this._de=a},aw:function(){$$t.$m.aw.call(this);if(!this.p()){this._e.legendItemBadgeTemplate(function(){var $ret=new $$a.h;$ret.render($.ig.LegendTemplates.prototype.m);$ret.measure($.ig.LegendTemplates.prototype.g);return $ret}())}},dj:null,dh:null,di:function(){return this.dh},df:function(){this.dh._al=null;this.dj._al=null;this.au()},dg:function(a,b){var c=new $$4.v($$a.$u.$type,1,a);this._de._n8.d(this.dj,c,b);this._de._n8.d(this.dh,c,b);this.au()},bf:function(){$$t.$m.bf.call(this);this.dj.__stroke=this._e.actualOutline();this.dj._aa=this._e.thickness();this.dj._ag=this._e.dashArray();this.dj._ab=this._e.dashCap();this.dh.__fill=this._e.actualBrush();this.dh.__opacity=this._e.actualAreaFillOpacity()},bg:function(){$$t.$m.bg.call(this);var a=this.b0();this.dj.__stroke=a;this.dj._aa=this._e.thickness()+3;this.dh.__fill=a;this.dh.__opacity=1},ba:function(a,b){$$t.$m.ba.call(this,a,b);if(a.d()){a.s(this.dh);a.s(this.dj)}},ap:function(a){$$t.$m.ap.call(this,a);var b=new $.ig.PathVisualData(1,"polarShape",this.dj);b.tags().add("Main");var c=new $.ig.PathVisualData(1,"fillShape",this.dh);c.tags().add("Fill");a.shapes().add(b);a.shapes().add(c)},aj:function(){var a=new $$a.as;a.colorString("rgba(95,95,95,0.5)");this._e.shadowColor(a);this._e.shadowBlur(5);this._e.shadowOffsetX(5);this._e.shadowOffsetY(5)},$type:new $.ig.Type("PolarAreaSeriesView",$$t.$m.$type)},true);$c("PolarLineSeriesView:n","PolarLineSeriesBaseView",{_de:null,init:function(a){this.dh=new $$a.bn;$$t.$m.init.call(this,a);this._de=a},aw:function(){$$t.$m.aw.call(this)},dh:null,df:function(){this.dh._al=null;this.au()},dg:function(a,b){this._de._n8.d(this.dh,a,b);this.au()},bf:function(){$$t.$m.bf.call(this);this.dh.__stroke=this._e.actualBrush();this.dh._aa=this._e.thickness();this.dh._ag=this._e.dashArray();this.dh._ab=this._e.dashCap()},bg:function(){$$t.$m.bg.call(this);var a=this.b0();this.dh.__stroke=a;this.dh._aa=this._e.thickness()+3},ba:function(a,b){$$t.$m.ba.call(this,a,b);a.s(this.dh)},ap:function(a){$$t.$m.ap.call(this,a);var b=new $.ig.PathVisualData(1,"polarShape",this.dh);b.tags().add("Main");a.shapes().add(b)},$type:new $.ig.Type("PolarLineSeriesView",$$t.$m.$type)},true);$c("PolarScatterSeriesView:o","PolarBaseView",{_dd:null,init:function(a){$$t.$l.init.call(this,a);this._dd=a},aw:function(){$$t.$l.aw.call(this);if(!this.p()){this._e.legendItemBadgeTemplate(function(){var $ret=new $$a.h;$ret.render($.ig.LegendTemplates.prototype.k);$ret.measure($.ig.LegendTemplates.prototype.g);return $ret}())}},aj:function(){var a=new $$a.as;a.colorString("rgba(95,95,95,0.5)");this._e.shadowColor(a);this._e.shadowBlur(3);this._e.shadowOffsetX(2);this._e.shadowOffsetY(2);this._e.useSingleShadow(false)},$type:new $.ig.Type("PolarScatterSeriesView",$$t.$l.$type)},true);$c("PolarSplineAreaSeriesView:p","PolarLineSeriesBaseView",{_de:null,init:function(a){this.dj=function(){var $ret=new $$a.bn;$ret._al=new $$a.a2;return $ret}();this.dh=function(){var $ret=new $$a.bn;$ret._al=new $$a.a2;return $ret}();$$t.$m.init.call(this,a);this._de=a},aw:function(){$$t.$m.aw.call(this);if(!this.p()){this._e.legendItemBadgeTemplate(function(){var $ret=new $$a.h;$ret.render($.ig.LegendTemplates.prototype.m);$ret.measure($.ig.LegendTemplates.prototype.g);return $ret}())}},dj:null,dh:null,di:function(){return this.dh},df:function(){$.ig.Extensions.prototype.e(this.dh._al);$.ig.Extensions.prototype.e(this.dj._al);this.au()},dg:function(a,b){this.dj._al._b=$.ig.Numeric.prototype.h(a.count()+1,function(c){return c<a.count()?a.__inner[c].__x:a.__inner[c-a.count()].__x},function(c){return c<a.count()?a.__inner[c].__y:a.__inner[c-a.count()].__y},b);this.dh._al._b=$.ig.Numeric.prototype.h(a.count()+1,function(c){return c<a.count()?a.__inner[c].__x:a.__inner[c-a.count()].__x},function(c){return c<a.count()?a.__inner[c].__y:a.__inner[c-a.count()].__y},b);this.au()},bf:function(){$$t.$m.bf.call(this);this.dh.__fill=this._e.actualBrush();this.dh.__opacity=this._e.actualAreaFillOpacity();this.dj.__stroke=this._e.actualOutline();this.dj._aa=this._e.thickness();this.dj._ag=this._e.dashArray();this.dj._ab=this._e.dashCap()},bg:function(){$$t.$m.bg.call(this);var a=this.b0();this.dh.__fill=a;this.dh.__opacity=1;this.dj.__stroke=a;this.dj._aa=this._e.thickness()+3},ba:function(a,b){$$t.$m.ba.call(this,a,b);if(a.d()){a.s(this.dh);a.s(this.dj)}},ap:function(a){$$t.$m.ap.call(this,a);var b=new $.ig.PathVisualData(1,"polarShape",this.dj);b.tags().add("Main");var c=new $.ig.PathVisualData(1,"fillShape",this.dh);c.tags().add("Fill");a.shapes().add(b);a.shapes().add(c)},aj:function(){var a=new $$a.as;a.colorString("rgba(95,95,95,0.5)");this._e.shadowColor(a);this._e.shadowBlur(5);this._e.shadowOffsetX(5);this._e.shadowOffsetY(5)},$type:new $.ig.Type("PolarSplineAreaSeriesView",$$t.$m.$type)},true);$c("PolarSplineSeriesView:q","PolarLineSeriesBaseView",{_de:null,init:function(a){this.dh=function(){var $ret=new $$a.bn;$ret._al=new $$a.a2;return $ret}();$$t.$m.init.call(this,a);this._de=a},aw:function(){$$t.$m.aw.call(this);var a=new $$a.a2;a._b.add(function(){var $ret=new $$a.a3;return $ret}());this.dh._al=a},dh:null,df:function(){$.ig.Extensions.prototype.e(this.dh._al);this.au()},dg:function(a,b){this.dh._al._b=$.ig.Numeric.prototype.h(a.count(),function(c){return a.__inner[c].__x},function(c){return a.__inner[c].__y},b);this.au()},bf:function(){$$t.$m.bf.call(this);
this.dh.__stroke=this._e.actualBrush();this.dh._aa=this._e.thickness();this.dh._ag=this._e.dashArray();this.dh._ab=this._e.dashCap()},bg:function(){$$t.$m.bg.call(this);var a=this.b0();this.dh.__stroke=a;this.dh._aa=this._e.thickness()+3},ba:function(a,b){$$t.$m.ba.call(this,a,b);a.s(this.dh)},ap:function(a){$$t.$m.ap.call(this,a);var b=new $.ig.PathVisualData(1,"polarShape",this.dh);b.tags().add("Main");a.shapes().add(b)},aj:function(){var a=new $$a.as;a.colorString("rgba(95,95,95,0.5)");this._e.shadowColor(a);this._e.shadowBlur(3);this._e.shadowOffsetX(1);this._e.shadowOffsetY(4);this._e.useSingleShadow(false)},$type:new $.ig.Type("PolarSplineSeriesView",$$t.$m.$type)},true);$$t.$b.m5="AngleMemberPath";$$t.$b.nb="RadiusMemberPath";$$t.$b.m3="AngleColumn";$$t.$b.m9="RadiusColumn";$$t.$b.m2="AngleAxis";$$t.$b.m8="RadiusAxis";$$t.$b.nc="UseCartesianInterpolation";$$t.$b.m7="MaximumMarkers";$$t.$b.m6="ClipSeriesToBounds";$$t.$b.angleMemberPathProperty=$$a.$p.i("AngleMemberPath",String,$$t.$b.$type,new $$a.y(1,function(a,b){a.raisePropertyChanged("AngleMemberPath",b.d(),b.c())}));$$t.$b.radiusMemberPathProperty=$$a.$p.i("RadiusMemberPath",String,$$t.$b.$type,new $$a.y(1,function(a,b){a.raisePropertyChanged("RadiusMemberPath",b.d(),b.c())}));$$t.$b.angleAxisProperty=$$a.$p.i("AngleAxis",$.ig.NumericAngleAxis.prototype.$type,$$t.$b.$type,new $$a.y(2,null,function(a,b){a.raisePropertyChanged("AngleAxis",b.d(),b.c())}));$$t.$b.radiusAxisProperty=$$a.$p.i("RadiusAxis",$.ig.NumericRadiusAxis.prototype.$type,$$t.$b.$type,new $$a.y(2,null,function(a,b){a.raisePropertyChanged("RadiusAxis",b.d(),b.c())}));$$t.$b.useCartesianInterpolationProperty=$$a.$p.i("UseCartesianInterpolation",$$0.$aq.$type,$$t.$b.$type,new $$a.y(2,true,function(a,b){a.raisePropertyChanged("UseCartesianInterpolation",b.d(),b.c())}));$$t.$b.maximumMarkersProperty=$$a.$p.i("MaximumMarkers",$.ig.Number.prototype.$type,$$t.$b.$type,new $$a.y(2,400,function(a,b){a.raisePropertyChanged("MaximumMarkers",b.d(),b.c())}));$$t.$b.trendLineTypeProperty=$$a.$p.i("TrendLineType",$.ig.TrendLineType.prototype.$type,$$t.$b.$type,new $$a.y(2,$.ig.TrendLineType.prototype.getBox(0),function(a,b){a.raisePropertyChanged("TrendLineType",b.d(),b.c())}));$$t.$b.trendLineBrushProperty=$$a.$p.i("TrendLineBrush",$$a.$ap.$type,$$t.$b.$type,new $$a.y(2,null,function(a,b){a.raisePropertyChanged("TrendLineBrush",b.d(),b.c())}));$$t.$b.actualTrendLineBrushProperty=$$a.$p.i("ActualTrendLineBrush",$$a.$ap.$type,$$t.$b.$type,new $$a.y(2,null,function(a,b){a.raisePropertyChanged("ActualTrendLineBrush",b.d(),b.c())}));$$t.$b.trendLineThicknessProperty=$$a.$p.i("TrendLineThickness",Number,$$t.$b.$type,new $$a.y(2,1.5,function(a,b){a.raisePropertyChanged("TrendLineThickness",b.d(),b.c())}));$$t.$b.trendLineDashCapProperty=$$a.$p.i("TrendLineDashCap",$$a.$be.$type,$$t.$b.$type,new $$a.y(2,$$a.$be.getBox(0),function(a,b){a.raisePropertyChanged("TrendLineDashCap",b.d(),b.c())}));$$t.$b.trendLineDashArrayProperty=$$a.$p.i("TrendLineDashArray",$$a.$at.$type,$$t.$b.$type,new $$a.y(1,function(a,b){a.raisePropertyChanged("TrendLineDashArray",b.d(),b.c())}));$$t.$b.trendLinePeriodProperty=$$a.$p.i("TrendLinePeriod",$.ig.Number.prototype.$type,$$t.$b.$type,new $$a.y(2,7,function(a,b){a.raisePropertyChanged("TrendLinePeriod",b.d(),b.c())}));$$t.$b.trendLineZIndexProperty=$$a.$p.i("TrendLineZIndex",$.ig.Number.prototype.$type,$$t.$b.$type,new $$a.y(2,1,function(a,b){a.raisePropertyChanged("TrendLineZIndex",b.d(),b.c())}));$$t.$b.clipSeriesToBoundsProperty=$$a.$p.i("ClipSeriesToBounds",$$0.$aq.$type,$$t.$b.$type,new $$a.y(2,false,function(a,b){a.raisePropertyChanged("ClipSeriesToBounds",b.d(),b.c())}));$$t.$a.on="UnknownValuePlotting";$$t.$a.unknownValuePlottingProperty=$$a.$p.i("UnknownValuePlotting",$.ig.UnknownValuePlotting.prototype.$type,$$t.$a.$type,new $$a.y(2,$.ig.UnknownValuePlotting.prototype.getBox(1),function(a,b){a.raisePropertyChanged("UnknownValuePlotting",b.d(),b.c())}));$$t.$e.on="UnknownValuePlotting";$$t.$e.unknownValuePlottingProperty=$$a.$p.i("UnknownValuePlotting",$.ig.UnknownValuePlotting.prototype.$type,$$t.$e.$type,new $$a.y(2,$.ig.UnknownValuePlotting.prototype.getBox(1),function(a,b){a.raisePropertyChanged("UnknownValuePlotting",b.d(),b.c())}));$$t.$h.on="Stiffness";$$t.$h.stiffnessProperty=$$a.$p.i("Stiffness",Number,$$t.$h.$type,new $$a.y(2,.5,function(a,b){a.raisePropertyChanged("Stiffness",b.d(),b.c())}));$$t.$i.on="Stiffness";$$t.$i.stiffnessProperty=$$a.$p.i("Stiffness",Number,$$t.$i.$type,new $$a.y(2,.5,function(a,b){a.raisePropertyChanged("Stiffness",b.d(),b.c())}))});