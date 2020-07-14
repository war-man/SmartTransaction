﻿/*!@license
* Infragistics.Web.ClientUI infragistics.datachart_verticalcategory.js 16.2.20162.2141
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
*     infragistics.datachart_category.js
*     infragistics.datachart_categorycore.js
*     infragistics.datachart_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_geometry","./infragistics.datachart_category","./infragistics.datachart_categorycore","./infragistics.datachart_core","./infragistics.ext_ui"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$i=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$r=$.ig.globalDefs.$$r;$$f=$.ig.globalDefs.$$f;$$g=$.ig.globalDefs.$$g;$$j=$.ig.globalDefs.$$j;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["CategoryYAxis:a","BarSeries:e","BarBucketCalculator:f","IBarSeries:g","CategoryYAxisView:i","BarSeriesView:j"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compareSimple,$w=$.ig.util.tryParseNumber,$x=$.ig.util.tryParseNumber1,$y=$.ig.util.numberToString,$z=$.ig.util.numberToString1,$0=$.ig.util.parseNumber;$c("CategoryYAxis:a","CategoryAxisBase",{av:function(){return new $$t.i(this)},fx:function(a){$.ig.CategoryAxisBase.prototype.fx.call(this,a);this._jw=a},_jw:null,isVertical:function(){return true},dc:function(){return this.h0().height()},getCategoryBoundingBox:function(a,b,c){return this.getCategoryBoundingBoxHelper(a,b,c,true)},jv:function(a){if($b($$4.$v.$type.specialize(Array),a)!==null){return a.asArray()}return null},getScaledBucketValueList:function(a,b,c,d,e){var f;var g=e.d;var h=e.c;var i=e.b;var j=e.a;var k=!i.isEmpty();var l=this.categoryMode()==0?this.iy-1:this.iy;if(l<0){l=0}var m=i.top();var n=i.height();var o=g.top();var p=g.height();var q=h.top();var r=h.height();var s=0;var t=1;var u=this.jv(a);var v=false;if(u!=null){v=true}var w;for(var x=0;x<b.count();x++){w=b.item(x);for(var y=c;y<d;y++){if(v){f=u[y]}else{f=a.item(y)}if(k){var z=l>=1?f[w]/l:l==0?.5:NaN;if(!j){z=1-z}z=m+n*(z-s)/t;var aa=(z-o*r)/p;f[w]=aa}else{var ab=l>=1?f[w]/l:l==0?.5:NaN;if(!j){ab=1-ab}ab=q+r*(ab-o)/p;f[w]=ab}}}},init:function(){this.j5=1;this.j4=1;$.ig.CategoryAxisBase.prototype.init.call(this);this._io=new $$4.v(Number,0);this._z=$$t.$a.$type},interval:function(a){if(arguments.length===1){this.g($$t.$a.intervalProperty,a);return a}else{return this.c($$t.$a.intervalProperty)}},jx:0,actualInterval:function(a){if(arguments.length===1){if(this.actualInterval()!=a){var b=this.jx;this.jx=a;this.f1("ActualInterval",b,this.actualInterval())}return a}else{return this.jx}},minorInterval:function(a){if(arguments.length===1){this.g($$t.$a.minorIntervalProperty,a);return a}else{return this.c($$t.$a.minorIntervalProperty)}},jz:0,actualMinorInterval:function(a){if(arguments.length===1){if(this.actualMinorInterval()!=a){var b=this.jz;this.jz=a;this.f1("ActualMinorInterval",b,this.actualMinorInterval())}return a}else{return this.jz}},j5:0,j7:function(a){if(arguments.length===1){this.j5=a;return a}else{return this.j5}},j4:0,j6:function(a){if(arguments.length===1){this.j4=a;return a}else{return this.j4}},getScaledValue:function(a,b){if(!b.b.isEmpty()){var c=this.j1(a,$.ig.NumericScaler.prototype.aa,b.b);c=(c-b.c.top())/b.c.height();c=b.c.top()+b.c.height()*(c-b.d.top())/b.d.height();return c}return this.j1(a,b.d,b.c)},j1:function(a,b,c){var d=this.categoryMode()==0?this.iy-1:this.iy;if(d<0){d=0}var e=d>=1?a/d:d==0?.5:NaN;if(!this._bv){e=1-e}return c.top()+c.height()*(e-b.top())/b.height()},getUnscaledValue:function(a,b){if(!b.b.isEmpty()){var c=b.d.top()+b.d.height()*(a-b.c.top())/b.c.height();c=c*b.c.height()+b.c.top();c=this.getUnscaledValue3(c,$.ig.NumericScaler.prototype.aa,b.b,this.categoryMode());return c}return this.getUnscaledValue3(a,b.d,b.c,this.categoryMode())},dh:function(a,b,c){if(!b.b.isEmpty()){var d=b.d.top()+b.d.height()*(a-b.c.top())/b.c.height();d=d*b.c.height()+b.c.top();d=this.getUnscaledValue3(d,$.ig.NumericScaler.prototype.aa,b.b,c);return d}return this.getUnscaledValue3(a,b.d,b.c,c)},getUnscaledValue3:function(a,b,c,d){var e=b.top()+(a-c.top())*b.height()/c.height();if(!this._bv){e=1-e}var f=d==0?this.iy-1:this.iy;if(f<0){f=0}return e*f},scrollRangeIntoView:function(a,b){if(a==NaN||b==NaN||this.ig()==null||this.ig().count()==0){return}var c=a/this.ig().count();var d=b/this.ig().count();this.seriesViewer().windowRect(new $$a.aa(0,this.seriesViewer().windowRect().x(),1-d,this.seriesViewer().windowRect().width(),d-c))},am:function(){return new $.ig.VerticalAxisLabelPanel},c1:function(){return this.interval()},getCategorySize:function(a,b,c){var d=this.hy(b,c);return d.height()/(this.iy*a.height())},it:function(a,b,c){var d=0;if(!$.ig.util.isNaN(this.gap())){d=$.ig.MathUtil.prototype.c(this.gap(),0,1)}var e=0;if(!$.ig.util.isNaN(this.overlap())){e=Math.min(this.overlap(),1)}var f=1-.5*d;var g=this.getCategorySize(a,b,c)*f/(this.i1()-(this.i1()-1)*e);return g},getGroupCenter:function(a,b,c,d){var e=.5;if(this.i1()>1){var f=0;if(!$.ig.util.isNaN(this.gap())){f=$.ig.MathUtil.prototype.c(this.gap(),0,1)}var g=0;if(!$.ig.util.isNaN(this.overlap())){g=Math.min(this.overlap(),1)}var h=1-.5*f;var i=h/(this.i1()-(this.i1()-1)*g);var j=(h-i)/(this.i1()-1);e=.25*f+.5*i+a*j}return this.getCategorySize(b,c,d)*e},scrollIntoView:function(a){var b=this.seriesViewer()!=null?this.seriesViewer().actualWindowRect():$$a.$aa.empty();var c=this.h0();var d=new $$a.aa(0,0,0,1,1);var e=this.hx();var f=new $.ig.ScalerParams(0,d,d,this.isInverted(),e);var g=!b.isEmpty()&&!c.isEmpty()&&this.ig()!=null?this.ig().indexOf(a):-1;var h=g>-1?this.getScaledValue(g,f):NaN;if(!$.ig.util.isNaN(h)&&this.seriesViewer().cr()){if(!$.ig.util.isNaN(h)){if(h<b.top()+.1*b.height()){h=h+.4*b.height();b.y(h-.5*b.height())}if(h>b.bottom()-.1*b.height()){h=h-.4*b.height();b.y(h-.5*b.height())}}this.seriesViewer().k1(b,false)}},b8:function(){if(this.b1()&&this.useEnhancedIntervalManagement()){this._az=this.ay()}if(this.ig()==null){return false}var a=this.ig().count();if(a!=this.j6()){var b=new $.ig.AxisRangeChangedEventArgs(1,1,this.j6(),a);this.j6(a);this.f2(b);return true}return false},ij:function(a){if(a==null){return false}var b=this.a1();if(b==null){return false}return b.synchronizeVertically()},f8:function(a){$.ig.CategoryAxisBase.prototype.f8.call(this,a);var b=this.seriesViewer()!=null?this.seriesViewer().actualWindowRect():$$a.$aa.empty();var c=this.h0();var d=this.hv();var e=this.hu();var f=new $.ig.ScalerParams(0,b,c,this.isInverted(),d);var g=this._aw.ar();var h=this._aw.au();var i=this._aw.as();var j=this._aw.at();var k=this._aw.e();var l=this._aw.f();var m=this._aw.g();this.gf();this.fn(g);this.fn(h);this.fn(i);this.fn(j);this._ce.clear();this._cf.clear();this._io.clear();this._aw.am(this,b,c);if(b.isEmpty()||c.isEmpty()){this._be.count(0)}if(this._be.count()==0){this._aw.s()}if(this.labelSettings()!=null){this.labelSettings().registerAxis(this)}if(this.itemsSource()==null||this.ig()==null||this.ig().count()==0){this._be.count(0);this._aw.s();return}if(!b.isEmpty()&&!c.isEmpty()){var n=this.getUnscaledValue(e.top(),f);var o=this.getUnscaledValue(e.bottom(),f);if(!this.isInverted()){n=Math.ceil(n);o=Math.floor(o)}else{n=Math.floor(n);o=Math.ceil(o)}var p=c.left();var q=0;if(this.crossingAxis()!=null){var r=$b($.ig.NumericXAxis.prototype.$type,this.crossingAxis());if(r!=null){var s=this.gb(p,q,b,c,d,c.left(),c.right());p=s.p0;q=s.p1}}this.gg(g,p,c,k,true);this._aw.ah(q);var t=Math.min(n,o);var u=Math.max(n,o);var v=new $.ig.LinearCategorySnapper(1,t,u,e.height(),this.interval(),this.categoryMode(),this.dp());var w=Math.floor((t-0)/v._h);var x=Math.ceil((u-0)/v._h);if(!$.ig.util.isNaN(w)&&!$.ig.util.isNaN(x)){var y=$.ig.truncate(w);var z=$.ig.truncate(x);var aa=this.getScaledValue(0+y*v._h,f);this._an._bj=this.getScaledValue(v._h,f);for(var ab=y;ab<=z;++ab){var ac=this.getScaledValue(0+(ab+1)*v._h,f);if(aa<=e.bottom()){if(ab%2==0){this.fw(h,aa,ac,c)}this.fv(i,aa,c,l,false);this._io.add(aa);if(this.categoryMode()!=0&&this.i1()!=0&&this._b4){if(this.minorInterval()>0&&this.minorInterval()<v._h){var ad=this.getScaledValue(v._h,f);var ae=ad*this.minorInterval();var af=this.getScaledValue(ab*v._h,f);var ag=af+ad;while(af+ae<ag){af+=ae;this.fv(j,af,c,m,false)}this.actualMinorInterval(this.minorInterval())}else{for(var ah=0;ah<$.ig.truncate(v._h);ah++){for(var ai=0;ai<this.i1();ai++){var aj=this.getGroupCenter(ai,b,c,d);if(!this.isInverted()){aj=-aj}var ak=this.getScaledValue(ah+ab*v._h,f)+aj;this.fv(j,ak,c,m,false)}}this.actualMinorInterval(.5)}}}var al=aa;if(this.categoryMode()!=0){var am=this.getScaledValue(ab*v._h+1,f);al=(aa+am)/2}if(al<=e.bottom()&&al>=e.top()){var an=0;if(v._h>=1){an=ab*$.ig.truncate(Math.floor(v._h))}else{if(ab*v._h*2%2==0){an=$.ig.truncate(Math.floor(ab*v._h))}else{an=-1}}if(this.ig()!=null&&an<this.ig().count()&&an>=0){var ao=this.ig().item(an);var ap=this.eh(ao);if(!$.ig.util.isNaN(al)&&!Number.isInfinity(al)&&ap!=null){if(typeof ap==="string"&&ap.equals("")){}else{this._ce.add1(ap);this._cf.add(new $.ig.LabelPosition(al))}}}}aa=ac}}this.actualInterval(v._h);if((this.labelSettings()==null||this.labelSettings().visibility()==0)&&this.crossingAxis()!=null){if(this.labelSettings()!=null&&(this.labelSettings().location()==6||this.labelSettings().location()==7)){this.seriesViewer().h6()}}this._aw.an(this._ce,this._cf);this.jl()}},at:function(){return 1},$type:new $.ig.Type("CategoryYAxis",$.ig.CategoryAxisBase.prototype.$type)},true);$c("BarFramePreparer:b","CategoryFramePreparer",{init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$b.init1.call(this,1,b,$b($.ig.ISupportsMarkers.prototype.$type,b),$b($.ig.IProvidesViewport.prototype.$type,b),$b($.ig.ISupportsErrorBars.prototype.$type,b),$b($.ig.IBucketizer.prototype.$type,b))},init1:function(a,b,c,d,e,f){$.ig.CategoryFramePreparer.prototype.init1.call(this,1,b,c,d,e,f);this._ab=new $.ig.DefaultCategoryTrendlineHost;if($b($.ig.IHasCategoryTrendline.prototype.$type,b)!==null){this._ab=$b($.ig.IHasCategoryTrendline.prototype.$type,b)}this._ac=new $.ig.DefaultSingleValueProvider;if($b($.ig.IHasSingleValueCategory.prototype.$type,b)!==null){this._ac=$b($.ig.IHasSingleValueCategory.prototype.$type,b)}},l:function(a,b,c,d,e,f){var g=b[1];var h=b[0];var i=new $$a.aa(0,g-5,h-5,11,11);if(!$.ig.util.isNaN(g)&&!$.ig.util.isNaN(h)&&!Number.isInfinity(g)&&!Number.isInfinity(h)&&c.tryAdd(i)){a.o.add({__x:g,__y:h,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName});this._c.updateMarkerTemplate(e,d,f);return true}return false},x:function(a,b,c){if(this._ab.trendLineType()==0||this._ab.trendlinePreparer()==null||this._ab.trendLinePeriod()<1){return}var d=a._k;var e=new $.ig.ScalerParams(0,a._m,a._l,a._b.isInverted(),d);var f=new $.ig.ScalerParams(0,a._m,a._l,a._c.isInverted(),d);var g=b._f;if(a._d!=null&&a._d.sortedIndices()!=null){g=new $.ig.SafeSortedReadOnlyDoubleCollection(0,g,a._d.sortedIndices())}var h=function(){var $ret=new $.ig.TrendResolutionParams;$ret._c=a._h;$ret._d=a._i;$ret._e=a._j;$ret._a=c;$ret._b=a._g;$ret._f=a._l;return $ret}();if(this._ab.trendLineType()!=0){this._ab.trendlinePreparer().prepareLine(a._a.r,this._ab.trendLineType(),g,this._ab.trendLinePeriod(),function(i){return a._c.getScaledValue(i,f)},function(i){return a._b.getScaledValue(i,e)},h)}},$type:new $.ig.Type("BarFramePreparer",$.ig.CategoryFramePreparer.prototype.$type)},true);$c("BarTrendFitCalculator:c","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a,b,c,d,e,f,g,h,i,j,k){if(d==null){switch(b){case 1:d=$.ig.LeastSquaresFit.prototype.k(e,g,f);break;case 2:d=$.ig.LeastSquaresFit.prototype.o(e,g,f);break;case 3:d=$.ig.LeastSquaresFit.prototype.i(e,g,f);break;case 4:d=$.ig.LeastSquaresFit.prototype.p(e,g,f);break;case 5:d=$.ig.LeastSquaresFit.prototype.q(e,g,f);break;case 7:d=$.ig.LeastSquaresFit.prototype.j(e,g,f);break;case 6:d=$.ig.LeastSquaresFit.prototype.l(e,g,f);break;case 8:d=$.ig.LeastSquaresFit.prototype.n(e,g,f);break;default:throw new $$6.p(0)}}if(d==null){return null}for(var l=0;l<c._f.height();l+=2){var m=l/(c._f.height()-1);var n=j+m*(k-j);var o=NaN;switch(b){case 1:o=$.ig.LeastSquaresFit.prototype.ad(d,n);break;case 2:o=$.ig.LeastSquaresFit.prototype.ah(d,n);break;case 3:o=$.ig.LeastSquaresFit.prototype.ab(d,n);break;case 4:o=$.ig.LeastSquaresFit.prototype.ai(d,n);break;case 5:o=$.ig.LeastSquaresFit.prototype.aj(d,n);break;case 7:o=$.ig.LeastSquaresFit.prototype.ac(d,n);break;case 6:o=$.ig.LeastSquaresFit.prototype.ae(d,n);break;case 8:o=$.ig.LeastSquaresFit.prototype.ag(d,n);break;default:throw new $$6.p(0)}o=h(o);n=i(n);if(!$.ig.util.isNaN(o)&&!Number.isInfinity(o)){a.add({__x:o,__y:n+c._a,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName})}}return d},$type:new $.ig.Type("BarTrendFitCalculator",$.ig.$ot)},true);$c("BarTrendLineManager:d","CategoryTrendLineManager",{init:function(){$.ig.CategoryTrendLineManager.prototype.init.call(this)},prepareLine:function(a,b,c,d,e,f,g){var h=g._d*g._c;var i=g._e*g._c;var j=new $$4.v($$a.$u.$type,0);if(b==0){this._a=null;this._e.clear();return}if(this.c(b)){this._e.clear();this._a=$$t.$c.a(j,b,g,this._a,c.count(),function(k){return c.item(k)},function(k){return k+1},e,function(k){return f(k-1)},h+1,i+1)}if(this.b(b)){this._a=null;$.ig.TrendAverageCalculator.prototype.b(b,this._e,c,d);for(var k=g._d;k<=g._e;k+=1){var l=k*g._c;if(l>=0&&l<this._e.count()){var m=e(this._e.__inner[l]);var n=f(l);j.add({__x:m,__y:n+g._a,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName})}}}this.r(j,g,a)},$type:new $.ig.Type("BarTrendLineManager",$.ig.CategoryTrendLineManager.prototype.$type)},true);$c("VerticalAnchoredCategorySeries:h","AnchoredCategorySeries",{init:function(){$.ig.AnchoredCategorySeries.prototype.init.call(this)},xAxis:function(a){if(arguments.length===1){this.g($$t.$h.xAxisProperty,a);return a}else{return this.c($$t.$h.xAxisProperty)}},yAxis:function(a){if(arguments.length===1){this.g($$t.$h.yAxisProperty,a);return a}else{return this.c($$t.$h.yAxisProperty)}},isVertical:function(){return true},mf:function(){return this.yAxis()},mx:function(){return this.xAxis()},getOffsetValue:function(){return this._mk.r(this.mf(),this.view().b7(),this.view().b6(),this.getEffectiveViewport1(this.view()))},getCategoryWidth:function(){return this.yAxis().getCategorySize(this.view().b7(),this.view().b6(),this.getEffectiveViewport1(this.view()))},getNextOrExactIndex:function(a,b){return this.ev(a,b,this.mf(),this.nc.runOn(this),this.valueColumn())},getPreviousOrExactIndex:function(a,b){return this.ex(a,b,this.mf(),this.nc.runOn(this),this.valueColumn())},dw:function(a,b,c,d,e){if(this.valueColumn()==null){return Number.POSITIVE_INFINITY}return this.dx(a,b,this.yAxis(),d,e,this.valueColumn().count(),this.nc.runOn(this))},a6:function(){if(this.hitTestMode()==0){return 1}else{return $.ig.AnchoredCategorySeries.prototype.a6.call(this)}},getSeriesValueMarkerBoundingBox:function(a){if(!this.hasMarkers()||!this.lc()){return $$a.$aa.empty()}var b=this.mg.o;var c=this.fromWorldPosition(a);var d=-1;var e=this.mf().isInverted();var f=this.k7().bottom()*2;if(e){d=$.ig.ArrayUtil.prototype.c($$a.$u.$type,b,function(g){return f-c.__y<f-g.__y?-1:f-c.__y>f-g.__y?1:0})}else{d=$.ig.ArrayUtil.prototype.c($$a.$u.$type,b,function(g){return c.__y<g.__y?-1:c.__y>g.__y?1:0})}if(d<0){d=~d}if(d<0){d=0}if(d>b.count()-1){d=b.count()-1}var g=d;var h=d;if(g>0){g--}if(h<b.count()-1){h++}var i=b.__inner[g].__y;var j=b.__inner[d].__y;var k=b.__inner[h].__y;var l=Math.abs(i-c.__y);var m=Math.abs(j-c.__y);var n=Math.abs(k-c.__y);var o=this.pg(g);var p=this.pg(d);var q=this.pg(h);var r=o.containsPoint(c);var s=p.containsPoint(c);var t=q.containsPoint(c);if(m<=l&&m<=n){if(!e&&t){return q}if(e&&r){return o}return p}if(l<=m&&l<=n){if(!e&&s){return p}return this.pg(g)}if(n<=m&&n<=l){if(e&&s){return p}return this.pg(h)}return $$a.$aa.empty()},pg:function(a){return this._n8.di(a)},testHit:function(a,b){if(this.c0(a,b)){return true}if(this.ld(a,b)){return true}return false},getSeriesValue:function(a,b,c){if(this.seriesViewer()==null){return NaN}var d=this.getEffectiveViewport1(this.view());var e=this.mf();var f=new $.ig.ScalerParams(0,this.seriesViewer().actualWindowRect(),this.view().b6(),e.isInverted(),d);var g=this._mk.r(e,this.seriesViewer().actualWindowRect(),this.view().b6(),d);return this.ea(this.valueColumn(),a,e,f,g,this.nc.runOn(this),b,c)},getSeriesValuePosition:function(a,b,c){var d=this.mf();return this.kw(a,b,c,this._mk.r(d,this.view().b7(),this.view().b6(),this.getEffectiveViewport1(this.view())),this.mx(),d,null,null,null)},md:function(){return this.xAxis()},me:function(){return this.yAxis()},oq:function(a){this.xAxis($b($.ig.NumericXAxis.prototype.$type,a))},or:function(a){this.yAxis($b($$t.$a.$type,a))},m8:function(){return this.xAxis()!=null&&this.xAxis().updateRange()},getCategoryItems:function(a,b){return this.n5(a,b,this.yAxis())},getExactItemIndex:function(a){var b=this.seriesViewer()!=null?this.seriesViewer().actualWindowRect():$$a.$aa.empty();var c=this.view().b6();var d=this.kz(this.view());var e=this.getEffectiveViewport1(this.view());var f=this.mf();var g=-1;if(f!=null&&!b.isEmpty()&&!c.isEmpty()){var h=new $.ig.ScalerParams(0,b,c,f.isInverted(),e);var i=f.getUnscaledValue(d.top(),h);var j=f.getUnscaledValue(d.bottom(),h);var k=(a.__y-b.top())/b.height();var l=i+k*(j-i);if(f.categoryMode()!=0){l-=.5}g=l}return g},nc:function(a){return this.d0(a,this.mf())},getItemIndex:function(a){return $.ig.truncate(Math.round(this.getExactItemIndex(a)))},getItem:function(a){var b=this.getItemIndex(a);return b>=0&&this.bp()!=null&&b<this.bp().count()?this.bp().item(b):null},ib:function(a,b,c,d){$.ig.AnchoredCategorySeries.prototype.ib.call(this,a,b,c,d);switch(b){case"XAxis":if(c!=d){this.g7($b($.ig.Axis.prototype.$type,c));this.ig($b($.ig.Axis.prototype.$type,d));this._mo._c2.g(this.resolution());this.renderSeries(false);this.hr()}break;case"YAxis":if(c!=d){this.g7($b($.ig.Axis.prototype.$type,c));this.ig($b($.ig.Axis.prototype.$type,d));this._mo._c2.g(this.resolution());this.m8();this.renderSeries(false);this.hr()}break}},canUseAsYAxis:function(a){if($b($$t.$a.$type,a)!==null){return true}return false},canUseAsXAxis:function(a){if($b($.ig.NumericXAxis.prototype.$type,a)!==null){return true}return false},$type:new $.ig.Type("VerticalAnchoredCategorySeries",$.ig.AnchoredCategorySeries.prototype.$type)},true);$c("IBarSeries:g","Object",{$type:new $.ig.Type("IBarSeries",null)},true);$c("BarSeries:e","VerticalAnchoredCategorySeries",{a8:function(){return new $$t.j(this)},mp:function(){return 1},h6:function(a){$$t.$h.h6.call(this,a);this._ph=a},_ph:null,m2:function(){return true},getSeriesValueBoundingBox:function(a){if(this.xAxis()==null||this.yAxis()==null||this.mg.h.count()==0){return $$a.$aa.empty()}var b=this.view().b7();var c=this.view().b6();var d=this.getEffectiveViewport1(this.view());var e=new $.ig.ScalerParams(0,b,c,this.xAxis().isInverted(),d);var f=this.fromWorldPosition(a);var g=this.getPreviousOrExactIndex(a,true);var h=this.getNextOrExactIndex(a,true);var i=$.ig.truncate(Math.floor(g/this.ne(this.view())));var j=$.ig.truncate(Math.floor(h/this.ne(this.view())));var k=i-this.nf(this.view());var l=j-this.nf(this.view());if(k<0){k=0}if(k>this.mg.h.count()-1){k=this.mg.h.count()-1}if(l<0){l=0}if(l>this.mg.h.count()-1){l=this.mg.h.count()-1}var m=this.mg.h.__inner[k];var n=this.mg.h.__inner[l];var o=Math.abs(f.__y-m[0]);var p=Math.abs(f.__y-n[0]);var q=this.og(this._mo);var r=this.yAxis().it(b,c,d);if(o<p){var s=m[0]-.5*r;var t=m[1];var u=q;return new $$a.aa(0,Math.min(u,t),s,Math.max(u,t)-Math.min(u,t),r)}else{var v=n[0]-.5*r;var w=n[1];var x=q;return new $$a.aa(0,Math.min(x,w),v,Math.max(x,w)-Math.min(x,w),r)}},testHit:function(a,b){if(this.c4(a,b)){return true}if(this.ld(a,b)){return true}return false},init:function(){$$t.$h.init.call(this);this._z=$$t.$e.$type;this._mk=new $$t.b(1,this,this._ph,this,this,this._ph._c2)},ml:function(a){var b=$b($.ig.CategorySeriesView.prototype.$type,a);if(b!=null&&b.p()){if(b._o){return new $$t.b(1,this,$b($.ig.ISupportsMarkers.prototype.$type,b),b,this,b._c2)}else{return new $$t.b(1,this,$b($.ig.ISupportsMarkers.prototype.$type,b),this.seriesViewer()._bi._p,this,b._c2)}}else{return this._mk}},aa:function(){$$t.$h.aa.call(this)},radiusX:function(a){if(arguments.length===1){this.g($$t.$e.radiusXProperty,a);return a}else{return this.c($$t.$e.radiusXProperty)}},radiusY:function(a){if(arguments.length===1){this.g($$t.$e.radiusYProperty,a);return a}else{return this.c($$t.$e.radiusYProperty)}},preferredCategoryMode:function(a){return 2},g4:function(a,b){$$t.$h.g4.call(this,a,b);var c=$b($$t.$j.$type,b);if(a&&c!=null&&c._dk!=null){c._dk.count(0)}},nh:function(){var a=0;var c=this.seriesViewer().series().getEnumerator();while(c.moveNext()){var b=c.current();if(b==this){return a}var d=$b($$t.$g.$type,b);if(d!=null&&d.yAxis()==this.yAxis()&&d.getPreferredCategoryMode()==2){a++}}return-1},og:function(a){var b=0;var c=a.b7();var d=a.b6();var e=this.getEffectiveViewport1(a);if(!c.isEmpty()&&!d.isEmpty()&&this.xAxis()!=null){var f=new $.ig.ScalerParams(0,c,d,this.xAxis().isInverted(),e);b=this.xAxis().getScaledValue(this.xAxis().referenceValue(),f)}return b},ak:function(a){if(this.valueColumn()==null||this.valueColumn().count()==0){return null}if(a==this.yAxis()){return new $.ig.AxisRange(0,this.valueColumn().count()-1)}if(a==this.xAxis()){return new $.ig.AxisRange(this.valueColumn().minimum(),this.valueColumn().maximum())}return null},scrollIntoView:function(a){var b=this.view().b7();var c=this.view().b6();var d=new $$a.aa(0,0,0,1,1);var e=!b.isEmpty()&&!c.isEmpty()&&this.bp()!=null?this.bp().indexOf(a):-1;var f=this.k1(this.view());var g=new $.ig.ScalerParams(0,d,d,this.xAxis().isInverted(),f);var h=new $.ig.ScalerParams(0,d,d,this.yAxis().isInverted(),f);var i=this.yAxis()!=null?this.yAxis().getScaledValue(e,h):NaN;var j=this.yAxis()!=null?this._mk.r(this.yAxis(),d,d,f):0;i+=j;var k=this.xAxis()!=null&&this.valueColumn()!=null&&e<this.valueColumn().count()?this.xAxis().getScaledValue(this.valueColumn().item(e),g):NaN;if(!$.ig.util.isNaN(k)){if(k<b.left()+.1*b.width()){k=k+.4*b.width();b.x(k-.5*b.width())}if(k>b.right()-.1*b.width()){k=k-.4*b.width();b.x(k-.5*b.width())}}if(!$.ig.util.isNaN(i)){if(i<b.top()+.1*b.height()){i=i+.4*b.height();b.y(i-.5*b.height())}if(i>b.bottom()-.1*b.height()){i=i-.4*b.height();b.y(i-.5*b.height())}}if(this.syncLink()!=null){this.syncLink().am(this.seriesViewer(),b)}return e>=0},getItemSpan:function(){return this.yAxis().it(this.view().b7(),this.view().b6(),this.getEffectiveViewport1(this.view()))},nw:function(a,b){$$t.$h.nw.call(this,a,b);var c=a.h;if(!b.n()){return}var d=b.b7();var e=b.b6();var f=this.getEffectiveViewport1(b);var g=new $.ig.ScalerParams(0,d,e,this.xAxis().isInverted(),f);var h=this.yAxis();var i=new $.ig.ScalerParams(0,d,e,this.yAxis().isInverted(),f);var j=this.xAxis();var k=j.getScaledValue(j.referenceValue(),g);var l=this.yAxis().it(d,e,f);var m=$b($$t.$j.$type,b);if($.ig.util.isNaN(l)||Number.isInfinity(l)||$.ig.util.isNaN(k)){m._dk.count(0);return}this.mn.x(this,this.m6(),this.yAxis(),this.getCategoryItems.runOn(this),this.ne(b),this.nf(b));this.mn.p=this.radiusX();this.mn.q=this.radiusY();this.mn.j=this.radiusX();this.mn.k=this.radiusY();var n=false;var o=this.mn._c;if(o!=null){n=true}var p=this.xAxis().isSorting();var q=this.valueColumn().count();for(var r=0;r<c.count();++r){var s=c.__inner[r][0]-.5*l;var t=c.__inner[r][1];var u=k;u=Math.max(u,-100);t=Math.min(t,e.right()+100);var v=m._dk.item(r);v.height(l);v.width(Math.abs(t-u));if(n){this.ns(c,r,q,h,i,b.p())}this.mn.ae(v,false,false,false,false);v.aj(this.mn.j);v.ak(this.mn.k);m.dq(v,Math.min(t,u),s)}m._dk.count(c.count());b.c9(a)},g6:function(a,b,c,d){switch(a){case 4:case 1:case 0:this._n8._c2.g(this.resolution());break}this._n8._dc.p(a,b,c,d);switch(a){case 4:if(this.xAxis()!=null&&!this.xAxis().updateRange()){this.renderSeries(true)}break;case 1:if(this.xAxis()!=null&&!this.xAxis().updateRange()){this.renderSeries(true)}break;case 0:if(this.xAxis()!=null&&!this.xAxis().updateRange()){this.renderSeries(true)}break;case 2:if(this.valueMemberPath()!=null&&this._n8._c2.d>0){this.renderSeries(true)}break;case 3:if(d==this.valueMemberPath()){if(this.xAxis()!=null&&!this.xAxis().updateRange()){this.renderSeries(true)}}break}},ib:function(a,b,c,d){$$t.$h.ib.call(this,a,b,c,d);switch(b){case"XAxis":if(c!=null){c.deregisterSeries(this)}if(d!=null){d.registerSeries(this)}this._n8._c2.g(this.resolution());if(this.xAxis()!=null&&this.xAxis().updateRange()){this.renderSeries(false)}break;case"YAxis":if(c!=null){c.deregisterSeries(this)}if(d!=null){d.registerSeries(this)}this._n8._dc=$.ig.CategoryTrendLineManagerBase.prototype.y(this._n8._dc,this.yAxis(),this.rootCanvas(),this);this._n8._c2.g(this.resolution());this.renderSeries(false);break;case"FastItemsSource":if(this.xAxis()!=null&&!this.xAxis().updateRange()){this._n8._c2.g(this.resolution());this.renderSeries(false)}break;case"ValueColumn":if(this.xAxis()!=null&&!this.xAxis().updateRange()){this._n8._c2.g(this.resolution());this.renderSeries(false)}break;case"SeriesViewer":if(c!=null&&d==null){this.g7(this.xAxis());this.g7(this.yAxis())}if(c==null&&d!=null){this.ig(this.xAxis());this.ig(this.yAxis())}this._n8._c2.g(this.resolution());this.renderSeries(false);break}},getPreferredCategoryMode:function(){return this.preferredCategoryMode(this.yAxis())},currentCategoryMode:function(){return this.preferredCategoryMode(this.yAxis())},scaler:function(){return this.yAxis()},yScaler:function(){return this.xAxis()},$type:new $.ig.Type("BarSeries",$$t.$h.$type,[$.ig.IIsCategoryBased.prototype.$type,$$t.$g.$type])},true);$c("BarBucketCalculator:f","CategoryBucketCalculator",{init:function(a){$.ig.CategoryBucketCalculator.prototype.init.call(this,a);this._i=a},_i:null,g:function(a){var b=this._c.b7();var c=this._c.b6();var d=this._c._c4.bp();if(b.isEmpty()||c.isEmpty()||this._i._dj.yAxis()==null||d==null||d.count()==0){this.d=0;return}var e=$b($$t.$e.$type,this._c._c4);var f=e.kz(this._c);var g=e.getEffectiveViewport1(this._c);var h=new $.ig.ScalerParams(0,b,c,e.yAxis().isInverted(),g);var i=Math.floor(e.yAxis().dh(f.top(),h,0));var j=Math.ceil(e.yAxis().dh(f.bottom(),h,0));if(!e.yAxis().isInverted()){j=Math.ceil(e.yAxis().dh(f.top(),h,0));i=Math.floor(e.yAxis().dh(f.bottom(),h,0))}var k=Math.floor((j-i+1)*a/f.height());this.d=$.ig.truncate(Math.max(1,k));this.e=$.ig.truncate(Math.max(0,Math.floor(i/this.d)-1));this.f=$.ig.truncate(Math.ceil(j/this.d))},getBucketWithoutUnknowns:function(a){var b=this.h;var c=this.j;var d=a*this.d;var e=d+this.d-1;var f=c-1;d=d<f?d:f;e=e<f?e:f;var g=1.7976931348623157e308;var h=-1.7976931348623157e308;var i=true;for(var j=d;j<=e;++j){var k=b[j];g=g<k?g:k;h=h>k?h:k;Math.max(h,k);i=false}if(!i){return[.5*(d+e),g,h]}return[.5*(d+e),NaN,NaN]},getBucket:function(a){var b=this.h;var c=this.j;var d=a*this.d;var e=d+this.d-1;var f=c-1;d=d<f?d:f;e=e<f?e:f;var g=NaN;var h=NaN;for(var i=d;i<=e;++i){var j=b[i];if(!$.ig.util.isNaN(g)){if(!$.ig.util.isNaN(j)){g=Math.min(g,j);h=Math.max(h,j)}}else{g=j;h=j}}if(!$.ig.util.isNaN(g)){return[.5*(d+e),g,h]}return[.5*(d+e),NaN,NaN]},h:null,j:0,cacheValues:function(){this.j=this._i._dj.valueColumn().count();this.h=this._i._dj.valueColumn().asArray()},unCacheValues:function(){this.h=null},$type:new $.ig.Type("BarBucketCalculator",$.ig.CategoryBucketCalculator.prototype.$type)},true);$c("CategoryYAxisView:i","CategoryAxisBaseView",{_a9:null,init:function(a){$.ig.CategoryAxisBaseView.prototype.init.call(this,a);this._a9=a},$type:new $.ig.Type("CategoryYAxisView",$.ig.CategoryAxisBaseView.prototype.$type)},true);$c("BarSeriesView:j","AnchoredCategorySeriesView",{_dj:null,init:function(a){var $self=this;this.dr=new $$a.bq;$.ig.AnchoredCategorySeriesView.prototype.init.call(this,a);this._dj=a;this._dk=function(){var $ret=new $.ig.Pool$1($$a.$bq.$type);$ret.create($self.ds.runOn($self));$ret.activate($self.dm.runOn($self));$ret.disactivate($self.dp.runOn($self));$ret.destroy($self.dn.runOn($self));return $ret}();this._dc=new $$t.d},_dk:null,aw:function(){$.ig.AnchoredCategorySeriesView.prototype.aw.call(this);this._dl=new $$4.v($$a.$bq.$type,0);if(!this.p()){this._e.resolution(4);this._e.legendItemBadgeTemplate(function(){var $ret=new $$a.h;$ret.render($.ig.LegendTemplates.prototype.m);$ret.measure($.ig.LegendTemplates.prototype.g);return $ret}())}},ds:function(){var a=new $$a.bq;this._dl.add(a);a.__visibility=1;return a},_dl:null,dm:function(a){a.__visibility=0},dp:function(a){a.__visibility=1},dn:function(a){this._dl.remove(a)},dq:function(a,b,c){if(!this.isDirty()){this.au()}a._m=c;a._l=b},c3:function(){return new $$t.f(this)},bj:function(a,b){$.ig.AnchoredCategorySeriesView.prototype.bj.call(this,a,b);var c=a;var d=this.b1(b);c.__fill=d;c.__stroke=d;c._aa=this._e.thickness()},ad:function(a){return this._dl.__inner[a]},dr:null,ac:function(a){var b=this._dl.__inner[a];this.dr._l=b._l;this.dr._m=b._m;this.dr.width(b.width());this.dr.height(b.height());var c=this.b1(a);this.dr.__fill=c;this.dr.__stroke=c;this.dr._aa=this._e.thickness()+3;return this.dr},ba:function(a,b){$.ig.AnchoredCategorySeriesView.prototype.ba.call(this,a,b);if(a.d()){for(var c=0;c<this._dl.count();c++){var d=this.ab(c,b);this.bh(d,c,b);a.v(d)}}},ap:function(a){$.ig.AnchoredCategorySeriesView.prototype.ap.call(this,a);var b=0;var c=new $$4.v($$a.$bq.$type,0);var e=this._dk._a.getEnumerator();while(e.moveNext()){var d=e.current();c.add(d)}c.sort2(function(f,g){if(f._m>g._m){return-1}else if(f._m<g._m){return 1}else{return 0}});var g=c.getEnumerator();while(g.moveNext()){var f=g.current();var h=new $.ig.RectangleVisualData(1,"column"+b,f);h.tags().add("Main");h.tags().add("Fill");a.shapes().add(h)}b++},aj:function(){var a=new $$a.as;a.colorString("rgba(95,95,95,0.5)");this._e.shadowColor(a);this._e.shadowBlur(5);this._e.shadowOffsetX(5);this._e.shadowOffsetY(-5)},$type:new $.ig.Type("BarSeriesView",$.ig.AnchoredCategorySeriesView.prototype.$type)},true);$$t.$a.ka="Interval";$$t.$a.j8="ActualInterval";$$t.$a.kb="MinorInterval";$$t.$a.j9="ActualMinorInterval";$$t.$a.intervalProperty=$$a.$p.i("Interval",Number,$$t.$a.$type,new $$a.y(2,NaN,function(a,b){a.f1("Interval",b.d(),b.c());a.f7(false)}));$$t.$a.minorIntervalProperty=$$a.$p.i("MinorInterval",Number,$$t.$a.$type,new $$a.y(2,NaN,function(a,b){$b($$t.$a.$type,a).f1("MinorInterval",b.d(),b.c());$b($$t.$a.$type,a).f7(false)}));$$t.$h.pc="XAxis";$$t.$h.pd="YAxis";$$t.$h.xAxisProperty=$$a.$p.i("XAxis",$.ig.NumericXAxis.prototype.$type,$$t.$h.$type,new $$a.y(2,null,function(a,b){a.raisePropertyChanged("XAxis",b.d(),b.c())}));$$t.$h.yAxisProperty=$$a.$p.i("YAxis",$$t.$a.$type,$$t.$h.$type,new $$a.y(2,null,function(a,b){a.raisePropertyChanged("YAxis",b.d(),b.c())}));$$t.$e.pk="RadiusX";$$t.$e.pl="RadiusY";$$t.$e.radiusXProperty=$$a.$p.i("RadiusX",Number,$$t.$e.$type,new $$a.y(2,2,function(a,b){a.raisePropertyChanged("RadiusX",b.d(),b.c())}));$$t.$e.radiusYProperty=$$a.$p.i("RadiusY",Number,$$t.$e.$type,new $$a.y(2,2,function(a,b){a.raisePropertyChanged("RadiusY",b.d(),b.c())}))});