(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-orders"],{"071d":function(t,e,a){"use strict";a.r(e);var r=a("b2ae"),i=a("4c10");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("1ead1");var n=a("f0c5"),o=Object(n["a"])(i["default"],r["b"],r["c"],!1,null,"f153c644",null,!1,r["a"],void 0);e["default"]=o.exports},"1ead1":function(t,e,a){"use strict";var r=a("2883"),i=a.n(r);i.a},2883:function(t,e,a){var r=a("d5cb");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("3a1b38b2",r,!0,{sourceMap:!1,shadowMode:!1})},"4c10":function(t,e,a){"use strict";a.r(e);var r=a("e497"),i=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},b2ae:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"single-page"},[a("v-uni-view",{staticClass:"order-fliter flex fs14"},[a("v-uni-view",{class:["f-all",{picked:"all"==t.fliter}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFliter("all")}}},[t._v("全部")]),a("v-uni-view",{class:["f-send",{picked:"f"==t.fliter}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFliter("f")}}},[t._v("待发货")]),a("v-uni-view",{class:["f-get",{picked:"c"==t.fliter}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFliter("c")}}},[t._v("待收货")])],1),a("v-uni-view",{style:{paddingTop:"130rpx"}},["waiting"==t.status?a("v-uni-view",[a("b2Loading",{attrs:{status:!0}})],1):t.data&&0==t.data.length?a("v-uni-view",{staticClass:"empty-tip comment-empty page-empty"},[a("v-uni-view",[a("b2font",{attrs:{type:"b224gl-starEmpty",size:"100",color:"#f0f0f0"}})],1),a("v-uni-view",{staticClass:"empty-text"},[t._v("暂无订单记录")])],1):a("v-uni-view",[t._l(t.data,(function(e,r){return a("v-uni-view",{key:r,staticClass:"order-box mg-b"},[a("v-uni-view",{staticClass:"order-title flex fs13 gray"},[a("v-uni-view",{staticClass:"order-date"},[t._v(t._s(e.order_date))]),a("v-uni-view",{staticClass:"order-status"},[t._v(t._s(e.order_state))])],1),a("v-uni-view",{staticClass:"order-box-info flex"},[a("v-uni-view",{staticClass:"order-thumb"},[a("v-uni-image",{staticClass:"order-thumb-img",attrs:{src:e.thumb,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"order-info"},[a("v-uni-view",{staticClass:"order-name line-2 fs14 bold"},["cq"==e.order_key?a("v-uni-text",{staticClass:"green"},[t._v("[中签商品]")]):t._e(),t._v(t._s(e.order_name.name))],1),"cq"==e.order_key&&e.attr?a("v-uni-view",{staticClass:"gray fs12 order-desc"},[a("v-uni-text",{staticClass:"order-desc-item"},[t._v(t._s(e.attr))])],1):e.desc.length>0?a("v-uni-view",{staticClass:"gray fs12 order-desc"},t._l(e.desc,(function(e,r){return a("v-uni-text",{key:r,staticClass:"order-desc-item"},[t._v(t._s(e.name+": "+e.value))])})),1):t._e(),a("v-uni-view",{staticClass:"order-meta flex fs12"},[a("v-uni-view",[t._v("x"+t._s(e.order_count))]),a("v-uni-view",{staticClass:"order-price red fs16"},[1==e.money_type?[a("b2font",{attrs:{type:"b2coin-line"}}),t._v(t._s(e.order_price))]:[t._v(t._s(t.opt.symbol+e.order_price))]],2)],1)],1)],1),a("v-uni-view",{staticClass:"order-footer flex"},[a("v-uni-view",{staticClass:"order-type fs12 gray"},[t._v(t._s(e.order_type))]),a("v-uni-view",{staticClass:"order-action"},["w"==e._order_state?a("v-uni-view",{staticClass:"fs12 flex green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPay(r)}}},[a("v-uni-text",[t._v("去付款")]),a("b2font",{attrs:{type:"b2coin-line",size:"26"}})],1):t._e(),"f"==e._order_state||"c"==e._order_state||"q"==e._order_state?a("v-uni-view",[a("v-uni-view",{staticClass:"fs12 flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToInfo(r)}}},[a("v-uni-text",[t._v("订单详情")]),a("b2font",{attrs:{type:"b2arrow-right-s-line",size:"28"}})],1)],1):t._e()],1)],1)],1)})),a("loadingBottom",{attrs:{type:t.state}})],2)],1)],1)},i=[]},d5cb:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.single-page[data-v-f153c644]{min-height:100%;background:#f5f6f7}.single-page .skeleton[data-v-f153c644]::before{border-radius:0}.single-page .order-desc[data-v-f153c644]{margin-top:%?10?%}.single-page .order-desc .order-desc-item + .order-desc-item[data-v-f153c644]{margin-left:%?50?%}.single-page .order-box[data-v-f153c644]{background:#fff;padding:%?32?%}.single-page .order-box .order-thumb[data-v-f153c644],\r\n.single-page .order-box .order-thumb-img[data-v-f153c644]{width:%?120?%;height:%?120?%;border-radius:%?10?%}.single-page .order-box .order-title[data-v-f153c644]{padding:0 0 %?20?% 0;border-bottom:%?2?% solid #efefef;margin-bottom:%?20?%}.single-page .order-box .order-footer[data-v-f153c644],\r\n.single-page .order-box .order-title[data-v-f153c644],\r\n.single-page .order-box .order-meta[data-v-f153c644]{justify-content:space-between}.single-page .order-box .order-footer[data-v-f153c644]{margin-top:%?20?%}.single-page .order-box .order-info[data-v-f153c644]{width:100%;padding-left:%?20?%;margin:%?20?% 0}.single-page .order-box .order-meta[data-v-f153c644]{margin-top:%?16?%}.single-page .order-type[data-v-f153c644]{height:%?46?%;padding:0 %?20?%;line-height:%?46?%;background:#f5f6f7;border-radius:%?10?%}.order-fliter[data-v-f153c644]{background:#fff;width:100%;position:fixed;justify-content:space-around;left:0;height:%?100?%;z-index:4}.order-fliter .picked[data-v-f153c644]{color:red}',""]),t.exports=e},e497:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var r={data:function(){return{fliter:"all",paged:1,data:"",status:"waiting",emptyData:{title:"暂无订单",desc:"您暂时没有订单"},state:"waiting"}},onReachBottom:function(){this.getData()},computed:{login:function(){return this.$store.state.login},opt:function(){return this.$store.state.opt},bar:function(){return this.$store.state.bar},userData:function(){return this.$store.state.userData}},onLoad:function(){this.getData()},methods:{goPay:function(t){this.$store.state.orderInfo=this.data[t],this.go("/pages/global/pay?lazypay="+this.data[t].id)},goToInfo:function(t){this.$store.state.orderInfo=this.data[t],this.go("/my/order-info")},changeFliter:function(t){this.paged=1,this.fliter=t,this.state="waiting",this.status="waiting",this.data="",this.getData()},getData:function(){var t=this;"nomore"!=this.state&&"loadmore"!=this.state&&("waiting"!=this.state&&(this.state="loadmore"),uni.request({method:"post",url:this.$store.state.restUrlNormal+"getMyOrders",header:this.$store.state.headerToken,data:{paged:this.paged,user_id:this.userData.id,state:this.fliter},success:function(e){if(0==e.data.data.length)return t.data.length>0?void(t.state="nomore"):(t.data=[],void(t.status="empty"));1!=t.paged?t.data=t.data.concat(e.data.data):t.data=e.data.data,t.paged++,t.state="finish",t.$nextTick((function(){t.status="finish"}))}}))}}};e.default=r}}]);