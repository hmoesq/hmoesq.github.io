(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-favorite"],{"0405":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af");var o={data:function(){return{paged:1,loadmore:"waiting",dataList:[],loadLocked:!1,pages:1}},onLoad:function(){this.getData(1)},onReachBottom:function(){this.getData()},methods:{getData:function(){var t=this;this.loadLocked||(this.paged>this.pages?this.loadmore=!1:uni.request({method:"post",url:this.$store.state.restUrl+"getUserFavorites",header:this.$store.state.headerToken,data:{paged:this.paged},success:function(a){t.pages=a.data.pages,1==t.paged?a.data.data.length>0?(t.dataList=a.data.data,t.loadLocked=!1):t.dataList="empty":a.data.data.length>0?(t.dataList=t.dataList.concat(a.data.data),t.loadLocked=!1):(t.loadmore=!1,t.loadLocked=!0),t.paged++,uni.stopPullDownRefresh()}}))}}};a.default=o},9760:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var o=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",["empty"==this.dataList?a("v-uni-view",{staticClass:"comment-empty page-empty"},[a("v-uni-view",[a("b2font",{attrs:{type:"b224gl-starEmpty",size:"100",color:"#efefef"}})],1),a("v-uni-view",{staticClass:"empty-text"},[this._v("没有收藏")])],1):[a("b2stream",{attrs:{posts:this.dataList,type:"favorite"}}),a("b2bottom",{attrs:{loadmore:this.loadmore}})]],2)},i=[]},da61:function(t,a,e){"use strict";e.r(a);var o=e("0405"),i=e.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(s);a["default"]=i.a},f2ef:function(t,a,e){"use strict";e.r(a);var o=e("9760"),i=e("da61");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var n=e("f0c5"),d=Object(n["a"])(i["default"],o["b"],o["c"],!1,null,"0a41b818",null,!1,o["a"],void 0);a["default"]=d.exports}}]);