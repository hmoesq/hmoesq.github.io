(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-mission"],{1146:function(t,i,s){"use strict";s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return a})),s.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"b2mg"},[""!=t.mission?s("v-uni-view",{staticClass:"mission-row mission-top b2radius"},[s("v-uni-view",{staticClass:"mission-in-row flex-center fs13"},[s("v-uni-view",[t.mission.data.mission.credit?s("v-uni-view",{staticClass:"green"},[t._v("今日已签到："),s("b2font",{attrs:{type:"b2coin-line",size:"24"}}),t._v(t._s(t.mission.data.mission.credit))],1):s("v-uni-text",{staticClass:"red"},[t._v("今日未签到")])],1),s("v-uni-view",{staticClass:"lin-0"},[s("v-uni-button",{staticClass:"fs12 button",attrs:{size:"mini",disabled:0!=t.mission.data.mission.credit},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.missionAction.apply(void 0,arguments)}}},[t._v(t._s(0==t.mission.data.mission.credit?"立刻签到":"已签到"))])],1)],1),s("v-uni-view",{staticClass:"mission-in-row flex-center fs13"},[s("v-uni-view",[t._v("连续签到"+t._s(t.mission.data.mission.always)+"天")]),s("v-uni-view",[s("v-uni-button",{staticClass:"fs12 button",attrs:{size:"mini",disabled:!(t.mission.data.mission.tk.days>0)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tk.apply(void 0,arguments)}}},[t._v("填坑")])],1)],1),s("v-uni-view",{staticClass:"mission-in-row fs13"},[s("v-uni-view",{staticClass:"bold"},[t._v("填坑说明")]),s("v-uni-view",{staticClass:"mission-info-list"},[s("v-uni-view",{staticClass:"m-l-i"},[s("v-uni-text",{staticClass:"l-number"},[t._v("一、")]),s("v-uni-text",[t._v("如果签到某一天中断，后面的所有签到不会计算在连续签到中")])],1),s("v-uni-view",{staticClass:"m-l-i"},[s("v-uni-text",{staticClass:"l-number"},[t._v("二、")]),s("v-uni-text",[t._v("如果连续签到有中断，您可以使用填坑功能将没有签到的天数补充完整。")])],1),s("v-uni-view",{staticClass:"m-l-i"},[s("v-uni-text",{staticClass:"l-number"},[t._v("三、")]),s("v-uni-text",[t._v("填坑需要消耗积分，计算方法是：每日签到最高限x未签到的天数x倍数，比如每天签到可随机获得50至100积分，有2天没有签到，当前倍数为3,则最终需要支付积分100x2x3=600积分。")])],1),t.mission.data.mission.current_user?s("v-uni-view",{staticClass:"m-l-i"},[s("v-uni-text",{staticClass:"l-number"},[t._v("四、")]),s("v-uni-view",[0===t.mission.data.mission.tk.days||1===t.mission.data.mission.tk.days?s("v-uni-text",[t._v("您目前不需要填坑。")]):s("v-uni-text",[t._v("您目前已经有"+t._s(t.mission.data.mission.tk.days)+"天未签到，填坑倍数为"+t._s(t.mission.data.mission.tk.bs)+"，填坑需要支付"+t._s(t.mission.data.mission.tk.credit)+"积分，您当前的积分为"+t._s(t.mission.data.mission.my_credit)+"。")])],1)],1):t._e()],1)],1)],1):t._e(),""!=t.list?s("v-uni-view",{staticClass:"mission-row mission-list"},[s("v-uni-view",{staticClass:"gold-page-table flex-center fs15"},[s("v-uni-view",{class:["gold-credit gold-table",{b2color:"today"===t.opt.type}],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change("today")}}},[t._v("每日签到")]),s("v-uni-view",{class:["gold-money gold-table",{b2color:"always"===t.opt.type}],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change("always")}}},[t._v("连续签到排行")])],1),t.list==[]?s("v-uni-view",{staticClass:"comment-empty"},[s("v-uni-view",[s("b2font",{attrs:{type:"b224gl-starEmpty",size:"100",color:"#f0f0f0"}})],1),s("v-uni-view",{staticClass:"empty-text"},[t._v("暂无签到数据")])],1):s("v-uni-view",{staticClass:"mission-page-list b2radius"},t._l(t.list,(function(i,e){return s("v-uni-view",{key:e,staticClass:"missino-list-item flex-center"},[s("v-uni-view",{staticClass:"mission-page-user-left flex-center"},[s("v-uni-image",{staticClass:"avatar b2radius",attrs:{src:i.user.avatar,mode:"aspectFill"}}),s("v-uni-view",{staticClass:"mission-page-user-info"},[s("v-uni-text",{staticClass:"bold",domProps:{textContent:t._s(i.user.name)}}),s("v-uni-text",{staticClass:"gray"},[t._v(t._s(t.timeAgo(i._date)))])],1)],1),s("v-uni-view",{staticClass:"mission-page-user-right fs13"},["today"==t.opt.type?s("v-uni-view",[s("b2font",{attrs:{type:"b2coin-line",size:"24"}}),t._v(t._s(i.credit))],1):s("v-uni-text",[t._v(t._s("连续"+i.count+"天"))])],1)],1)})),1)],1):t._e(),s("b2creditPay",{ref:"creditpay",staticClass:"creditBox",attrs:{data:t.creditData},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)}}})],1)},a=[]},"54f9":function(t,i,s){"use strict";s("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{mission:"",list:"",opt:{count:30,paged:1,type:"today",post_paged:1},creditData:{}}},onLoad:function(){this.getData()},methods:{change:function(t){this.opt.type=t,this.opt.paged=1,this.getList()},getData:function(){var t=this;uni.request({method:"POST",header:this.$store.state.headerToken,data:{count:10,paged:1},url:this.$store.state.restUrlNormal+"getUserMission",success:function(i){t.mission=i}}),this.getList()},getList:function(){var t=this;uni.request({method:"POST",header:this.$store.state.headerToken,data:{count:this.opt.count,paged:this.opt.paged,type:this.opt.type,post_paged:this.opt.post_paged},url:this.$store.state.restUrlNormal+"getMissionList",success:function(i){t.list=i.data.data}})},tk:function(){this.creditData={id:0,thumb:"",title:"签到填坑",order_price:this.mission.data.mission.tk.credit,order_type:"mission",count:1,email:""},this.$refs.creditpay.open()},missionAction:function(){var t=this;uni.request({method:"POST",header:this.$store.state.headerToken,url:this.$store.state.restUrlNormal+"userMission",success:function(i){t.$nextTick((function(){t.mission.data.mission=i.data.mission,t.getCurrentUserInfo(),uni.showModal({content:"签到成功！",showCancel:!1}),t.getList()}))}})}}};i.default=e},"5aba":function(t,i,s){var e=s("24fb");i=e(!1),i.push([t.i,".mission-in-row[data-v-3caee6e5]{padding:%?24?% 0;justify-content:space-between}.mission-in-row .button[data-v-3caee6e5]{font-size:%?24?%}.mission-in-row + .mission-in-row[data-v-3caee6e5]{border-top:1px solid #efefef}.mission-top[data-v-3caee6e5]{margin-top:%?24?%;padding:0 %?24?%;box-shadow:rgba(0,0,0,.09) 0 3px 12px}.m-l-i[data-v-3caee6e5]{margin-top:%?12?%;display:flex}.l-number[data-v-3caee6e5]{width:%?56?%;min-width:%?56?%;color:#b2b2b2}.mission-page-list[data-v-3caee6e5]{padding:%?16?% %?24?%;background-color:#fff}.avatar[data-v-3caee6e5]{width:%?72?%;height:%?72?%;margin-right:%?16?%}.mission-page-user-info[data-v-3caee6e5]{display:flex;flex-flow:column;align-items:flex-start;font-size:%?26?%}.missino-list-item[data-v-3caee6e5]{justify-content:space-between;padding:%?16?% 0}.mission-list[data-v-3caee6e5]{margin-top:%?32?%}.gold-page-table[data-v-3caee6e5]{padding:%?24?%}.gold-table[data-v-3caee6e5]{margin-right:%?32?%}",""]),t.exports=i},"71cf":function(t,i,s){var e=s("5aba");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=s("4f06").default;a("eb055658",e,!0,{sourceMap:!1,shadowMode:!1})},"85ad":function(t,i,s){"use strict";var e=s("71cf"),a=s.n(e);a.a},c348:function(t,i,s){"use strict";s.r(i);var e=s("1146"),a=s("d21a");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(n);s("85ad");var o=s("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"3caee6e5",null,!1,e["a"],void 0);i["default"]=c.exports},d21a:function(t,i,s){"use strict";s.r(i);var e=s("54f9"),a=s.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);i["default"]=a.a}}]);