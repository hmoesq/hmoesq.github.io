(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-index"],{"2d50":function(t,e,a){"use strict";(function(t){a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{userData:"",dataList:"",paged:1,loadingStatus:!0,type:"stream",lockedUserInfo:!1,loadmore:"waiting",loadLocked:!1}},computed:{token:function(){return this.$store.state.token},symbol:function(){return this.$store.state.opt.symbol}},onShow:function(){this.token?this.getCurrentUserInfo():(this.loadingStatus=!1,this.userData="")},onReachBottom:function(){this.getCurrentUserInfo(),this.getPost()},onPullDownRefresh:function(){this.paged=1,this.getPost()},methods:{getCurrentUserInfo:function(){var e=this;this.userData||this.lockedUserInfo||(this.lockedUserInfo=!0,uni.request({method:"post",url:this.$store.state.restUrlNormal+"getUserInfo",header:this.$store.state.headerToken,success:function(t){403==t.statusCode||t.data.error?(e.$store.commit("setToken",""),setTimeout((function(){uni.removeStorage({key:"token",success:function(t){e.gotab("/pages/my/index")}})}),2e3)):(e.userData=t.data,e.$store.commit("setUserData",t.data.user_data),e.$store.commit("setUserRole",{binding_login:t.data.binding_login,can_img:t.data.can_img,carts:t.data.carts,create_circle:t.data.create_circle,create_topic:t.data.create_topic,distribution:t.data.distribution,newsflashes:t.data.newsflashes,write:t.data.write}),e.getPost(1)),e.lockedUserInfo=!1,e.loadingStatus=!1},fail:function(e){t("log",e," at pages/my/index.vue:185")}}))},getPost:function(t){var e=this;this.loadLocked||(this.paged>1&&(this.loadmore=!0),t&&(this.paged=t),uni.request({method:"post",url:this.$store.state.restUrlNormal+"getStreamList",data:{paged:this.paged,pages:!0,post_types:["post","document","newsflashes","circle"],author:this.userData.user_data.id},success:function(t){1==e.paged?t.data.data.length>0?e.dataList=t.data.data:e.dataList="empty":t.data.data.length>0?e.dataList=e.dataList.concat(t.data.data):(e.loadmore=!1,e.loadLocked=!0),e.paged++,uni.stopPullDownRefresh()}}))}}};e.default=i}).call(this,a("0de9")["log"])},3398:function(t,e,a){"use strict";a.r(e);var i=a("2d50"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=s.a},"3b12":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"my-page"},[t.loadingStatus?a("b2Loading",{attrs:{status:t.loadingStatus}}):t.token?t.userData?a("v-uni-view",{staticClass:"page-content"},[a("v-uni-view",{staticClass:"cover"},[a("v-uni-image",{staticClass:"cover-image",attrs:{src:t.userData.user_data.cover,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"name-row flex-center"},[a("v-uni-view",{staticClass:"name-box flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/my/edit?id="+t.userData.user_data.id)}}},[a("v-uni-text",{staticClass:"name-text"},[t._v(t._s(t.userData.user_data.name))])],1),a("v-uni-view",{staticClass:"flex-center"},[t.userData.user_data.user_title?a("v-uni-view",{staticClass:"verify"},[a("b2font",{attrs:{type:"b2star-smile-line",size:"26"}}),t._v("已认证")],1):t._e(),t.userData.user_data.lv.lv.lv?a("v-uni-view",{staticClass:"verify lv"},[a("v-uni-text",{staticClass:"b2font"},[t._v(t._s(t.userData.user_data.lv.lv.lv))]),t._v(t._s(t.userData.user_data.lv.lv.name))],1):t._e(),t.userData.user_data.lv.vip.lv?a("v-uni-view",{staticClass:"verify"},[a("b2font",{attrs:{type:"b2shield-user-line",size:"26"}}),t._v(t._s(t.userData.user_data.lv.vip.name))],1):t._e()],1)],1)],1),a("v-uni-view",{staticClass:"user-info"},[a("v-uni-view",{staticClass:"top-s"}),a("v-uni-view",{staticClass:"user-info-top"},[a("v-uni-button",{staticClass:"edit-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/my/edit?id="+t.userData.user_data.id)}}},[a("b2font",{staticClass:"b2color",attrs:{type:"b2edit-box-line",size:"36"}})],1),a("v-uni-view",{staticClass:"avatar"},[a("v-uni-image",{staticClass:"avatar-image",attrs:{src:t.userData.user_data.avatar,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/my/edit?id="+t.userData.user_data.id)}}})],1),a("v-uni-view",{staticClass:"user-edit"},[a("v-uni-view",{staticClass:"orders user-edit-row"},[a("v-uni-view",{staticClass:"u-e-i gray fs12"},[t._v("订单")]),a("v-uni-view",{staticClass:"fs15 flex-center"},[t._v("0个")])],1),a("v-uni-view",{staticClass:"credit user-edit-row"},[a("v-uni-view",{staticClass:"u-e-i gray fs12"},[t._v("积分")]),a("v-uni-view",{staticClass:"fs15"},[a("b2font",{attrs:{type:"b2coin-line",size:"24"}}),t._v(t._s(t.userData.user_data.credit))],1)],1),a("v-uni-view",{staticClass:"money user-edit-row"},[a("v-uni-view",{staticClass:"u-e-i gray fs12"},[t._v("余额")]),a("v-uni-view",{staticClass:"fs15"},[a("v-uni-text",{staticClass:"m-icon fs12"},[t._v(t._s(t.symbol))]),t._v(t._s(t.userData.user_data.money))],1)],1)],1)],1),a("v-uni-view",{staticClass:"dh-box"},[a("v-uni-view",{staticClass:"dh-box-item"},[a("b2font",{attrs:{type:"b2quill-pen-line",size:"50"}}),a("v-uni-text",{staticClass:"fs13 bold-light"},[t._v("发布的")]),a("v-uni-text",{staticClass:"fs10 gray"},[t._v(t._s(t.userData.user_data.post_count)+"个")])],1),a("v-uni-view",{staticClass:"dh-box-item"},[a("b2font",{attrs:{type:"b2file-list-2-line",size:"50"}}),a("v-uni-text",{staticClass:"fs13 bold-light"},[t._v("我的订单")]),a("v-uni-text",{staticClass:"fs10 gray"},[t._v("订单记录")])],1),a("v-uni-view",{staticClass:"dh-box-item"},[a("b2font",{attrs:{type:"b2hand-heart-line",size:"50"}}),a("v-uni-text",{staticClass:"fs13 bold-light"},[t._v("邀请码")]),a("v-uni-text",{staticClass:"fs10 gray"},[t._v("注册邀请")])],1),a("v-uni-view",{staticClass:"dh-box-item"},[a("b2font",{attrs:{type:"b2heart-add-line",size:"50"}}),a("v-uni-text",{staticClass:"fs13 bold-light"},[t._v("关注")]),a("v-uni-text",{staticClass:"fs10 gray"},[t._v(t._s(t.userData.user_data.following)+"个")])],1),a("v-uni-view",{staticClass:"dh-box-item"},[a("b2font",{attrs:{type:"b2hearts-line1",size:"50"}}),a("v-uni-text",{staticClass:"fs13 bold-light"},[t._v("粉丝")]),a("v-uni-text",{staticClass:"fs10 gray"},[t._v(t._s(t.userData.user_data.followers)+"个")])],1),a("v-uni-view",{staticClass:"dh-box-item"},[a("b2font",{attrs:{type:"b2star-line",size:"50"}}),a("v-uni-text",{staticClass:"fs13 bold-light"},[t._v("收藏")]),a("v-uni-text",{staticClass:"fs10 gray"},[t._v("我的收藏")])],1)],1),a("v-uni-view",{staticClass:"user-post-list"},[a("v-uni-view",{staticClass:"box-title fs14 bold"},[t._v("我的动态")]),a("v-uni-view",{staticClass:"stream"},[""!=t.dataList?a("v-uni-view",{staticClass:"stream-box"},["empty"==t.dataList?a("v-uni-view",{staticClass:"comment-empty page-empty"},[a("v-uni-view",[a("b2font",{attrs:{type:"b224gl-starEmpty",size:"100",color:"#f0f0f0"}})],1),a("v-uni-view",{staticClass:"empty-text"},[t._v("没有动态")])],1):[a("b2stream",{attrs:{posts:t.dataList}}),a("b2bottom",{attrs:{loadmore:t.loadmore}})]],2):t._e()],1)],1)],1)],1):t._e():a("v-uni-view",{staticClass:"n-login"},[a("v-uni-view",[a("b2font",{staticClass:"b2color",attrs:{type:"b2hearts-line",size:"100"}})],1),a("v-uni-view",{staticClass:"n-text"},[t._v("您需要登录之后方可查看个人中心")]),a("v-uni-button",{staticClass:"b2color bold-light",attrs:{type:"primary",size:"md"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/global/login")}}},[t._v("注册 / 登陆")])],1)],1)},o=[]},"853c":function(t,e,a){"use strict";a.r(e);var i=a("3b12"),s=a("3398");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);a("d0e8");var n,r=a("f0c5"),d=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"829f371e",null,!1,i["a"],n);e["default"]=d.exports},cedc:function(t,e,a){var i=a("ff84");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("dce05e64",i,!0,{sourceMap:!1,shadowMode:!1})},d0e8:function(t,e,a){"use strict";var i=a("cedc"),s=a.n(i);s.a},ff84:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top-s[data-v-829f371e]{position:absolute;width:0;height:0;border-style:solid;border-width:0 0 %?120?% %?768?%;border-color:transparent transparent #fff transparent;top:%?-120?%;z-index:0}.dh-box[data-v-829f371e]{margin:%?16?% 0;background-color:#fff;padding:%?32?% 0;display:-webkit-box;display:flex;flex-flow:wrap}.page-content[data-v-829f371e]{overflow:hidden}.dh-box-item[data-v-829f371e]{width:33.33333%;text-align:center;padding:%?30?% 0}.dh-box-item .b2font[data-v-829f371e], .dh-box-item .fs10[data-v-829f371e]{display:block;position:relative}.dh-box-item .b2font[data-v-829f371e]::after{content:"";width:%?40?%;height:%?40?%;position:absolute;background:-webkit-radial-gradient(closest-side circle,rgba(25,133,255,.2),rgba(25,133,255,.2),rgba(25,133,255,.1),rgba(25,133,255,.01));background:radial-gradient(closest-side circle,rgba(25,133,255,.2),rgba(25,133,255,.2),rgba(25,133,255,.1),rgba(25,133,255,.01));left:0;right:0;margin:auto}.my-page[data-v-829f371e]{height:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.user-desc[data-v-829f371e]{font-size:%?26?%;color:#999;margin-top:%?16?%}.n-login[data-v-829f371e]{height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-webkit-box-pack:center;justify-content:center}.n-login uni-button[data-v-829f371e]{font-size:%?28?%;background:#f7f7f7!important;border-color:#f7f7f7!important;color:#1985ff!important}.n-login uni-button[data-v-829f371e]::after{border:0}.n-text[data-v-829f371e]{font-size:%?26?%;margin:%?40?% 0 %?60?%}.box-title[data-v-829f371e]{margin-left:%?32?%;margin-bottom:%?16?%}.cover[data-v-829f371e]{width:100%;height:%?352?%;position:relative}.cover[data-v-829f371e]::after{content:"";position:absolute;left:0;top:0;width:100%;background:-webkit-gradient(linear,left bottom,left top,from(rgba(25,133,255,.5)),to(rgba(25,133,255,.05)));background:-webkit-linear-gradient(bottom,rgba(25,133,255,.5),rgba(25,133,255,.05));background:linear-gradient(0turn,rgba(25,133,255,.5),rgba(25,133,255,.05));height:100%;z-index:0}.cover-image[data-v-829f371e]{width:100%;height:100%}.avatar-image[data-v-829f371e]{width:%?140?%;height:%?140?%;-webkit-border-radius:100%;border-radius:100%;margin-left:%?32?%;margin-top:%?-80?%;-webkit-box-shadow:rgba(0,0,0,.15) 0 2px 8px;box-shadow:rgba(0,0,0,.15) 0 2px 8px;position:absolute}.user-edit[data-v-829f371e]{display:-webkit-box;display:flex;padding-right:%?60?%;-webkit-box-align:center;align-items:center;width:100%;padding-left:%?222?%;margin-top:%?-16?%;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:%?20?%}.user-edit-row[data-v-829f371e]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}.edit-button[data-v-829f371e]{position:absolute;font-size:%?24?%;height:%?80?%;text-align:center;line-height:%?80?%;width:%?80?%;right:%?48?%;top:%?-144?%;-webkit-border-radius:100%;border-radius:100%;padding:0;background:#fff!important;-webkit-box-shadow:rgba(0,0,0,.15) 0 2px 8px;box-shadow:rgba(0,0,0,.15) 0 2px 8px}.edit-button[data-v-829f371e]::after{border:0}.vip-row1[data-v-829f371e]{-webkit-box-pack:justify;justify-content:space-between;border-bottom:%?2?% solid hsla(0,0%,100%,.4);padding-bottom:%?24?%}.user-gold[data-v-829f371e]{padding-top:%?24?%}.user-info[data-v-829f371e]{height:100%;position:relative}.user-info-top[data-v-829f371e]{position:relative;background-color:#fff;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.dmsg-button[data-v-829f371e]{color:#fff}.name-box[data-v-829f371e]{-webkit-box-align:baseline;align-items:baseline;margin-bottom:%?16?%;width:100%;-webkit-box-pack:justify;justify-content:space-between}.verify[data-v-829f371e]{color:#fff;font-size:%?20?%;font-weight:700;margin-right:%?16?%;background-color:hsla(0,0%,100%,.7);color:#1985ff;-webkit-border-radius:%?50?%;border-radius:%?50?%;padding-right:%?16?%;height:%?34?%;line-height:%?34?%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;overflow:hidden}.verify.lv .b2font[data-v-829f371e]{font-size:%?20?%;text-transform:capitalize;padding:%?10?%}.verify .b2font[data-v-829f371e]{width:%?40?%;height:%?32?%;line-height:%?32?%;text-align:center;border-right:%?2?% solid #1985ff;font-weight:400;margin-right:%?8?%}.user-name[data-v-829f371e]{margin:0 %?56?%;margin-top:%?16?%;line-height:1}.name-text[data-v-829f371e]{font-size:%?36?%;font-weight:700}.name-row[data-v-829f371e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;position:absolute;top:0;left:0;right:0;color:#fff;padding:%?100?% %?48?% 0 %?48?%;-webkit-box-align:start;align-items:flex-start;z-index:2}.user-count[data-v-829f371e]{margin:%?32?% 0;flex-flow:wrap;padding:%?16?%}.u-c-item[data-v-829f371e]{width:25%;text-align:center;position:relative}.u-c-item + .u-c-item[data-v-829f371e]::before{content:"";position:absolute;width:%?4?%;background-color:#ccc;height:50%;left:0;top:%?26?%}.u-c-item .number[data-v-829f371e]{font-size:%?34?%;font-weight:700}.vip-box[data-v-829f371e]{background-color:#f7e8d3;color:#5c3a0f;padding:%?16?% %?32?%;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-shadow:rgba(149,157,165,.2) 0 8px 24px;box-shadow:rgba(149,157,165,.2) 0 8px 24px}.v-right .fs14[data-v-829f371e]{display:block;padding:0 %?32?%;height:%?60?%;line-height:%?60?%;background-image:-webkit-linear-gradient(45deg,#f4dfc7,#ecc080);-webkit-border-radius:%?50?%;border-radius:%?50?%}.gold-itme[data-v-829f371e]{margin-top:%?16?%;flex-flow:wrap;-webkit-box-pack:justify;justify-content:space-between}.gold-itme .credit[data-v-829f371e], .gold-itme .money[data-v-829f371e]{width:48%;height:%?100?%;line-height:%?100?%;padding:0 %?32?%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:hsla(0,0%,100%,.4);font-weight:700}.gold-itme .credit .b2font[data-v-829f371e]{font-weight:400}.m-icon[data-v-829f371e]{font-size:%?28?%}.user-post-list[data-v-829f371e]{margin-top:%?32?%}.list-item[data-v-829f371e]{position:relative;padding:%?32?%}.list-item.picked[data-v-829f371e]{font-weight:700;color:#1985ff}.list-item.picked[data-v-829f371e]::after{position:absolute;content:"";height:%?4?%;background-color:#1985ff;width:100%;bottom:0;left:0}.post-title[data-v-829f371e]{background-color:#fff;border-bottom:%?2?% solid #f0f0f0}.stream[data-v-829f371e]{margin-right:%?-32?%;margin-left:%?-32?%}.stream-box[data-v-829f371e]{margin:0 %?32?% %?32?%}.login-out[data-v-829f371e]{text-align:center}',""]),t.exports=e}}]);