(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-circle-join-circle"],{3396:function(t,e,i){"use strict";i.r(e);var c=i("611f"),a=i.n(c);for(var n in c)"default"!==n&&function(t){i.d(e,t,(function(){return c[t]}))}(n);e["default"]=a.a},"4d81":function(t,e,i){"use strict";i.r(e);var c=i("91e7"),a=i("3396");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("71af");var r,s=i("f0c5"),o=Object(s["a"])(a["default"],c["b"],c["c"],!1,null,"43420ad2",null,!1,c["a"],r);e["default"]=o.exports},"611f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{circleId:0,circleData:"",joinLocked:!1,join:{why:"",picked:""}}},onLoad:function(t){this.circleId=t.circleId,this.getCircleData()},onShareAppMessage:function(t){return{title:"加入"+this.circleData.circles[this.circleId].name,path:"/pages/circle/join-circle?circleId="+this.circleId}},computed:{token:function(){return this.$store.state.token},symbol:function(){return this.$store.state.opt.symbol},opt:function(){return this.$store.state.opt}},methods:{joinCircle:function(){var t=this;!0!==this.joinLocked&&(this.joinLocked=!0,uni.request({method:"post",url:this.$store.state.restUrlNormal+"joinCircle",header:this.$store.state.headerToken,data:{circle_id:this.circleId},success:function(e){"403"!=e.statusCode?(uni.showToast({title:"加入成功",icon:"success",duration:2e3}),uni.$emit("joinCircle",t.circleId),t.goback()):uni.showToast({title:e.data.message,icon:"error",duration:2e3}),t.joinLocked=!1}}))},joinPay:function(){t("log",1," at pages/circle/join-circle.vue:174")},getCircleData:function(){var t=this;uni.request({method:"post",url:this.$store.state.restUrlNormal+"getCurrentUserCircleData",header:this.$store.state.headerToken,data:{circle_id:this.circleId},success:function(e){"403"!=e.statusCode?(t.circleData=e.data,"money"===t.circleData.current_circle_role.type&&(t.join.picked=t.circleData.current_circle_role.data[0].type),uni.setNavigationBarTitle({title:"加入"+t.circleData.circles[t.circleId].name})):uni.showToast({title:e.data.message,icon:"error",duration:2e3})}})}}};e.default=i}).call(this,i("0de9")["log"])},"71af":function(t,e,i){"use strict";var c=i("fbe9"),a=i.n(c);a.a},"91e7":function(t,e,i){"use strict";var c;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return c}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bgw"},[t.circleData?i("v-uni-view",{staticClass:"b2mg"},[i("v-uni-view",{staticClass:"circle-info flex-center"},[i("v-uni-view",{staticClass:"circle-row"},[i("v-uni-image",{staticClass:"circle-icon",attrs:{mode:"aspectFit",src:t.circleData.circles[t.circleId].icon}})],1),i("v-uni-view",{staticClass:"circle-row mg-t"},[i("v-uni-view",{staticClass:"circle-name bold"},[t._v(t._s(t.circleData.circles[t.circleId].name))]),i("v-uni-view",{staticClass:"circle-meta mg-t fs13 gray"},[i("v-uni-text",{staticClass:"mg-r"},[t._v(t._s(t.opt.mNames.circle_member)+" "+t._s(t.circleData.circles[t.circleId].user_count))]),i("v-uni-text",[t._v("话题 "+t._s(t.circleData.circles[t.circleId].topic_count))])],1)],1)],1),i("v-uni-view",{staticClass:"circle-box mg-t fs14 b2pd flex-center"},[t.token?t.circleData.dark_room?i("v-uni-view",[i("v-uni-text",{staticClass:"ph2"},[t._v("您被关小黑屋了")]),i("v-uni-view",[t._v("被关小黑屋的用户无法发布话题，请汲取教训，出狱后再进行互动")])],1):t.circleData.allow_create_topic?t.circleData.in_circle?t.circleData.can_post?t._e():i("v-uni-view",[i("v-uni-text",{staticClass:"ph2"},[t._v("您有过多待审话题")]),i("v-uni-view",[t._v("您有"+t._s(t.circleData.allow_pendings)+"个待审话题未审核，请稍后再发表话题")])],1):i("v-uni-view",{staticClass:"join-circle-pay-money"},[i("v-uni-text",{staticClass:"ph2 fs15 bold"},[t._v("您还未加入该"+t._s(t.opt.mNames.circle_name))]),i("v-uni-view",{staticClass:"mg-t"},["free"===t.circleData.current_circle_role.type?i("v-uni-view",["check"===t.circleData.current_circle_role.data?i("v-uni-text",[t._v("提交申请，管理员审核之后方可加入"+t._s(t.opt.mNames.circle_name))]):i("v-uni-text",[t._v("免费加入"+t._s(t.opt.mNames.circle_name)+"，之后可阅读更多话题")])],1):t._e(),i("v-uni-view",{staticClass:"po-topic-box-tips-button mg-t"},["check"===t.circleData.current_circle_role.data?i("v-uni-button",{class:"pending"===t.circleData.current_circle_role.status?"pending":"",attrs:{size:"mini",disabled:"pending"===t.circleData.current_circle_role.status},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinCircle()}}},["none"===t.circleData.current_circle_role.status?[t._v("提交加入"+t._s(t.opt.mNames.circle_name)+"申请")]:[t._v("您已成功提交申请，等待审核中...")]],2):"free"===t.circleData.current_circle_role.data?i("v-uni-button",{class:t.joinLocked?"b2-loading":"",attrs:{disabled:t.joinLocked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinCircle()}}},[t._v("加入"+t._s(t.opt.mNames.circle_name))]):"lv"===t.circleData.current_circle_role.type?i("v-uni-view",[i("v-uni-text",{staticClass:"pp"},[t._v("专属"+t._s(t.opt.mNames.circle_name)+"，您需要成为以下会员组的成员，方可加入"+t._s(t.opt.mNames.circle_name))]),i("v-uni-view",{staticClass:"circle-lv-list mg-t"},t._l(t.circleData.current_circle_role.data._list,(function(e,c){return i("v-uni-view",{key:c,staticClass:"lv-list-item",style:"color:"+e.color},[i("v-uni-text",{staticClass:"t-author-name"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"t-lv fs10",style:"background-color:"+e.color},[t._v(t._s(e.lv))])],1)})),1),i("v-uni-view",{staticClass:"join-circle-button-pay mg-t"},[i("v-uni-button",{staticClass:"mini-btn",attrs:{disabled:!t.circleData.current_circle_role.data.allow_join,size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinCircle()}}},[t._v(t._s(t.circleData.current_circle_role.data.allow_join?"加入"+t.opt.mNames.circle_name:"无权加入"))])],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"money-pick mg-b"},t._l(t.circleData.current_circle_role.data,(function(e,c){return e.money?i("v-uni-view",{key:c,class:t.join.picked===e.type?"picked":""},[i("v-uni-button",{staticClass:"empty",attrs:{size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.join.picked=e.type}}},[t._v(t._s(t.symbol)),i("v-uni-text",{staticClass:"psp fs13",domProps:{textContent:t._s(e.money)}}),t._v("/"),i("v-uni-text",{staticClass:"psp",domProps:{textContent:t._s(e.name)}})],1)],1):t._e()})),1),i("v-uni-view",{staticClass:"join-circle-button-pay"},[i("v-uni-button",{staticClass:"mini-btn",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinPay()}}},[t._v("支付加入"+t._s(t.opt.mNames.circle_name))])],1)],1)],1)],1)],1):i("v-uni-view",[i("v-uni-text",{staticClass:"ph2"},[t._v("您没有权限在"+t._s(t.opt.mNames.circle_name)+"中发布话题")]),i("v-uni-view",[i("v-uni-text",{staticClass:"pp"},[t._v("您需要通过积分提升您的等级，或者成为我们的会员方可获得话题发布权限")])],1),i("v-uni-view",{staticClass:"po-topic-box-tips-button"},[i("v-uni-button",{staticClass:"button empty",attrs:{size:"mini"}},[t._v("积分升级")]),i("v-uni-button",{staticClass:"button empty",attrs:{size:"mini"}},[t._v("变更会员")])],1)],1):i("v-uni-view",[i("v-uni-text",{staticClass:"ph2"},[t._v("您还未登录")]),i("v-uni-text",{staticClass:"pp"},[t._v("登录后可阅读更多话题")]),i("v-uni-view",{staticClass:"po-topic-box-tips-button"},[i("v-uni-button",{staticClass:"empty",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/global/login")}}},[t._v("登录")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/global/login")}}},[t._v("快速注册")])],1)],1)],1)],1):t._e()],1)},n=[]},b7c7:function(t,e,i){var c=i("24fb");e=c(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.circle-icon[data-v-43420ad2]{width:%?120?%;height:%?120?%;-webkit-border-radius:100%;border-radius:100%;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0)}.circle-info[data-v-43420ad2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-webkit-box-pack:center;justify-content:center;text-align:center;margin-top:%?64?%}.circle-box[data-v-43420ad2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;background-color:#f5f6f7;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.circle-lv-list[data-v-43420ad2]{display:-webkit-box;display:flex;flex-flow:wrap;-webkit-box-pack:center;justify-content:center}.lv-list-item[data-v-43420ad2]{margin:%?16?%}.t-lv[data-v-43420ad2]{color:#fff;margin-left:%?10?%;height:%?30?%;line-height:%?30?%;display:inline-block;padding:0 %?10?%;-webkit-border-radius:%?8?%;border-radius:%?8?%}.money-pick[data-v-43420ad2]{display:-webkit-box;display:flex}.money-pick .empty[data-v-43420ad2]{padding:0 %?16?%;margin:%?16?%;color:#aaaeb3!important}.money-pick .picked .empty[data-v-43420ad2]::after{border-color:#1985ff}.money-pick .picked .empty[data-v-43420ad2]{color:#1985ff!important}.po-topic-box-tips-button[data-v-43420ad2]{margin-top:%?40?%;display:-webkit-box;display:flex}',""]),t.exports=e},fbe9:function(t,e,i){var c=i("b7c7");"string"===typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);var a=i("4f06").default;a("db1af362",c,!0,{sourceMap:!1,shadowMode:!1})}}]);