(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-global-address"],{"33f2":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".address[data-v-2955eb50]{padding:%?24?%}.add-set[data-v-2955eb50]{text-align:center;height:%?100?%;line-height:%?100?%;-webkit-box-shadow:rgba(50,50,105,.15) 0 2px 5px 0,rgba(0,0,0,.05) 0 1px 1px 0;box-shadow:rgba(50,50,105,.15) 0 2px 5px 0,rgba(0,0,0,.05) 0 1px 1px 0;margin-bottom:%?24?%;background-color:#fff}.ad-box[data-v-2955eb50]{-webkit-box-pack:justify;justify-content:space-between}.ad-edit[data-v-2955eb50]{width:%?80?%;-webkit-box-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}.ad-edit .mini-btn[data-v-2955eb50]{margin-top:%?32?%;height:%?52?%;line-height:%?52?%;margin-right:0}.ad-info[data-v-2955eb50]{-webkit-box-flex:1;flex:1;padding-right:%?24?%}.add-title > uni-text[data-v-2955eb50]{margin-right:%?24?%}.add-address[data-v-2955eb50]{margin-top:%?16?%}.add-address .b2color[data-v-2955eb50]{margin-right:%?10?%}.ad-box[data-v-2955eb50]{margin-top:%?24?%;padding:%?32?%;-webkit-box-shadow:rgba(50,50,105,.15) 0 2px 5px 0,rgba(0,0,0,.05) 0 1px 1px 0;box-shadow:rgba(50,50,105,.15) 0 2px 5px 0,rgba(0,0,0,.05) 0 1px 1px 0}",""]),t.exports=e},"368c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{addresses:{addresses:[],default:""}}},onLoad:function(){var e=this;this.getData(),uni.$on("reloadAddress",(function(){t("log",11," at pages/global/address.vue:34"),e.getData()}))},onUnload:function(){uni.$off("reloadAddress")},methods:{getAd:function(t){return t.province?t.province+" "+t.city+" "+t.county+" "+t.address:t.address},getData:function(){var t=this;uni.request({method:"post",url:this.$store.state.restUrlNormal+"getAddresses",header:this.$store.state.headerToken,success:function(e){"403"!=e.statusColde&&(t.addresses=e.data)}})},picked:function(e){t("log",e," at pages/global/address.vue:62"),uni.$emit("pickedAddress",e),this.goback()}}};e.default=a}).call(this,a("0de9")["log"])},"4cc3":function(t,e,a){var s=a("33f2");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("4f06").default;i("e5069622",s,!0,{sourceMap:!1,shadowMode:!1})},7359:function(t,e,a){"use strict";var s=a("4cc3"),i=a.n(s);i.a},b989:function(t,e,a){"use strict";var s;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"address"},[a("v-uni-view",{staticClass:"add-set",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/global/set-address")}}},[t._v("添加地址")]),Object.keys(t.addresses.addresses).length>0?a("v-uni-view",{staticClass:"add-list"},t._l(t.addresses.addresses,(function(e,s,i){return a("v-uni-view",{key:i,staticClass:"flex-center ad-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.picked(s)}}},[a("v-uni-view",{staticClass:"ad-info"},[a("v-uni-view",{staticClass:"add-title flex-center fs14 bold-light"},[a("v-uni-text",{staticClass:"bold-light"},[t._v(t._s(e.name))]),a("v-uni-text",{staticClass:"bold-light"},[t._v(t._s(e.phone))])],1),a("v-uni-view",{staticClass:"add-address fs13 gray"},[t.addresses.default==s?a("v-uni-text",{staticClass:"b2color"},[t._v("[默认地址]")]):t._e(),t._v(t._s(t.getAd(e)))],1)],1),a("v-uni-view",{staticClass:"ad-edit flex-center gray"},[a("v-uni-text",{staticClass:"edit-btn fs14",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.go("/pages/global/set-address?key="+s)}}},[t._v("编辑")])],1)],1)})),1):a("v-uni-view",{staticClass:"list-empty fs13 gray"},[t._v("地址为空，请添加一个地址！")])],1)},n=[]},fe672:function(t,e,a){"use strict";a.r(e);var s=a("b989"),i=a("fea8");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("7359");var d,o=a("f0c5"),r=Object(o["a"])(i["default"],s["b"],s["c"],!1,null,"2955eb50",null,!1,s["a"],d);e["default"]=r.exports},fea8:function(t,e,a){"use strict";a.r(e);var s=a("368c"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=i.a}}]);