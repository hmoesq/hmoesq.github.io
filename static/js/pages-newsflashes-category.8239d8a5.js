(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newsflashes-category"],{"294e":function(t,a,e){var s=e("24fb");a=s(!1),a.push([t.i,".n-top[data-v-7bf30073]{height:%?260?%;position:relative}.n-t-name[data-v-7bf30073]{font-weight:700;color:#fff}.n-t-info[data-v-7bf30073]{position:absolute;bottom:0;width:-webkit-fill-available;padding:10px %?32?%;display:flex;justify-content:space-between;align-items:center;background:linear-gradient(1turn,rgba(9,15,29,.4),transparent)}.n-t-button[data-v-7bf30073]{font-size:%?24?%;height:%?60?%;width:%?164?%}.cover[data-v-7bf30073]{position:absolute;top:0;left:0;width:100%;height:100%}.n-content[data-v-7bf30073]{padding:%?24?%;height:%?58?%}",""]),t.exports=a},"5f42":function(t,a,e){var s=e("294e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=e("4f06").default;i("659af10d",s,!0,{sourceMap:!1,shadowMode:!1})},8749:function(t,a,e){"use strict";e.r(a);var s=e("95b8"),i=e.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(n);a["default"]=i.a},"881f":function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[t.loadingStatus?e("b2Loading",{attrs:{status:t.loadingStatus}}):t._e(),t.loadingStatus?t._e():[e("v-uni-view",{staticClass:"n-top"},[e("v-uni-image",{staticClass:"cover b2img",attrs:{src:t.term.cover,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"n-t-info"},[e("v-uni-view",{staticClass:"n-t-name",domProps:{textContent:t._s(t.term.name)}})],1)],1),t.list.data.data.length>0?e("v-uni-view",{staticClass:"n-content"},[e("b2newsflashes",{attrs:{list:t.list},on:{update:function(a){arguments[0]=a=t.$handleEvent(a),t.updateAction.apply(void 0,arguments)}}}),e("b2bottom",{attrs:{loadmore:t.loadmore}})],1):e("v-uni-view",{staticClass:"comment-empty page-empty"},[e("v-uni-view",[e("b2font",{attrs:{type:"b224gl-starEmpty",size:"100",color:"#f0f0f0"}})],1),e("v-uni-view",{staticClass:"empty-text"},[t._v("空空如也...")])],1)]],2)},i=[]},"95b8":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af");var s={data:function(){return{term:[],list:{data:[]},loadingStatus:!0,id:0,paged:1,loadmore:"waiting"}},onShareAppMessage:function(t){return{title:this.term.name,path:"/pages/newsflashes/category?id="+this.id}},onReachBottom:function(){this.getNewsflashes()},onPullDownRefresh:function(){this.paged=1,this.getNewsflashes()},onLoad:function(t){this.id=t.id,this.loadingStatus&&this.getNewsflashes()},methods:{updateAction:function(t,a,e,s){var i=this;"vote"==a&&t&&t.then((function(t){i.$set(i.list.data.data[e][s].vote,"up",i.list.data.data[e][s].vote.up+t.up),i.$set(i.list.data.data[e][s].vote,"down",i.list.data.data[e][s].vote.down+t.down),t.up>0?i.$set(i.list.data.data[e][s].vote,"up_isset",!0):i.$set(i.list.data.data[e][s].vote,"up_isset",!1),t.down>0?i.$set(i.list.data.data[e][s].vote,"down_isset",!0):i.$set(i.list.data.data[e][s].vote,"down_isset",!1),i.$set(i.list.data.data[e][s].vote,"locked",!1)}))},getNewsflashes:function(){var t=this;this.paged>1&&(this.loadmore=!0),uni.request({method:"post",url:this.$store.state.restUrl+"getNewsflashesIndex",header:this.$store.state.headerToken,data:{paged:this.paged,term:this.id},success:function(a){403!=a.statusCode&&(1==t.paged?(t.term=a.data.term,t.list.data=a.data.data,t.list.hidden=!0,t.loadingStatus=!1,uni.setNavigationBarTitle({title:t.term.name})):a.data.data.data.length>0?t.list.data.data=t.list.data.data.concat(a.data.data.data):t.loadmore=!1,t.paged++,uni.stopPullDownRefresh())}})},poNewsflashes:function(){}}};a.default=s},a1db:function(t,a,e){"use strict";var s=e("5f42"),i=e.n(s);i.a},db94:function(t,a,e){"use strict";e.r(a);var s=e("881f"),i=e("8749");for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("a1db");var o=e("f0c5"),d=Object(o["a"])(i["default"],s["b"],s["c"],!1,null,"7bf30073",null,!1,s["a"],void 0);a["default"]=d.exports}}]);