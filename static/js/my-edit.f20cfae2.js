(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-edit"],{1897:function(t,e,a){"use strict";var i=a("df97"),n=a.n(i);n.a},"26e7":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},"29ba":function(t,e,a){"use strict";a.r(e);var i=a("ef67"),n=a("3c5c");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("fbcc");var o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"4c2bb6f0",null,!1,i["a"],void 0);e["default"]=c.exports},3363:function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7");var n=i(a("c7eb")),s=i(a("1da1")),o=i(a("53ca")),c={data:function(){return{id:0,locked:!1,editData:[],region:"",defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"440113",updateLocked:!1,type:"name",isFocus:!1,saveLocked:!1,emailVerCode:"",phoneVerCode:"",recaptchaUrl:"",imgcheck:{locked:!1,img_code:"",token:""},count:60,sms:{locked:!1,token:""},register:{username:"",password:"",nickname:"",inv:"",smsCode:"",smsToken:""},deleteUserAction:!1,isCanUse:uni.getStorageSync("isCanUse")||!1}},onLoad:function(t){var e=this;this.id=t.id,this.getEditData(),uni.$on("reloadAddress",(function(){e.getEditData()}))},onUnload:function(){uni.$off("reloadAddress")},computed:{bar:function(){return this.$store.state.bar},token:function(){return this.$store.state.token},userData:function(){return this.$store.state.userData},userRole:function(){return this.$store.state.userRole}},methods:{dialogInputConfirm:function(t){var e=this;uni.request({method:"post",url:this.$store.state.restUrlNormal+"deleteUser",header:this.$store.state.headerToken,data:{password:t},success:function(t){403!=t.statusCode?e.loginOut():uni.showModal({content:t.data.message,showCancel:!1})}})},deleteUser:function(){var t=this;this.deleteUserAction=!1,uni.showModal({content:"删除账户后无法恢复，确定要删除账户吗？？",success:function(e){e.confirm&&(t.deleteUserAction=!0,t.$refs.deleteUser.open())}})},getRecaptcha:function(){var t=this;this.$refs.popupcode.open(),uni.request({method:"POST",url:this.$store.state.restUrlNormal+"getRecaptcha",data:{number:4,width:400,height:180},success:function(e){403==e.statusCode?uni.showModal({content:e.data.message,showCancel:!1}):(t.recaptchaUrl=e.data.base,t.imgcheck.token=e.data.token)}})},imgCodeCancel:function(){this.$refs.popupcode.close(),this.sms.locked=!1},imgCodeCheck:function(){var t=this;1!=this.imgcheck.locked&&(this.imgcheck.locked=!0,uni.request({method:"POST",url:this.$store.state.restUrlNormal+"imgCodeCheck",data:{img_code:this.imgcheck.img_code,token:this.imgcheck.token,loginType:1},success:function(e){403==e.statusCode?uni.showModal({content:e.data.message,showCancel:!1}):t.sendCode(),t.imgcheck.locked=!1}}))},sendCode:function(){var t=this;1!=this.sms.locked&&(this.sms.locked=!0,uni.request({method:"POST",url:this.$store.state.restUrlNormal+"sendCode",data:{nickname:"",username:"phone"==this.type?this.editData.phone:this.editData.email,password:"",code:"",img_code:this.imgcheck.img_code,invitation_code:"",token:this.imgcheck.token,smsToken:"",luoToken:"",confirmPassword:"",loginType:1},success:function(e){403==e.statusCode?uni.showModal({content:e.data.message,showCancel:!1}):(t.register.smsToken=e.data.token,t.countdown(),t.$refs.popupcode.close())}}))},buildAction:function(t,e){var a=this;e.isset?this.unBuild(t):this.socialLogin(t).then((function(t){a.getEditData()}))},build:function(t){},unBuild:function(t){var e=this;1!=this.locked&&(this.locked=!0,uni.request({method:"post",url:this.$store.state.restUrlNormal+"unBuild",header:this.$store.state.headerToken,data:{user_id:this.id,type:t},success:function(t){"403"==t.statusCode?uni.showToast({title:t.data.message,icon:"error",duration:2e3}):e.getEditData(),e.locked=!1}}))},countdown:function(){var t=this;if(this.count<=1)return this.count=60,void(this.sms.locked=!1);this.count--,setTimeout((function(){t.countdown()}),1e3)},sexChange:function(t){this.$set(this.userData,"sex",t.detail.value)},closePopup:function(){this.saveLocked||(this.isFocus=!1,this.$refs.popup.close())},open:function(t){var e=this;"address"!=t?(this.type=t,this.$refs.popup.open(),setTimeout((function(){e.isFocus=!0}),300)):this.go("/pages/global/address")},loginOut:function(){var t=this;uni.removeStorage({key:"token",success:function(e){t.$store.commit("setToken",""),t.$store.commit("setUserData",""),t.$store.commit("setUserRole",""),uni.clearStorageSync(),uni.reLaunch({url:"/pages/my/index"})}})},handleGetRegion:function(t){this.region=t},chooseFile:function(){var t=this;1!=this.updateLocked&&(this.updateLocked=!0,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var a=e.tempFilePaths;uni.showLoading({title:"上传中..."}),uni.uploadFile({url:t.$store.state.restUrlNormal+"fileUpload",filePath:a[0],name:"file",header:{Authorization:"Bearer "+t.$store.state.token},formData:{post_id:1,type:"avatar"},success:function(e){if(uni.hideLoading(),"403"==e.statusCode){var a="您无权上传图片";t.b2CheckJson(e.data)&&(a=JSON.parse(e.data).message),uni.showToast({title:a,icon:"error",duration:2e3})}else{var i;i="object"!==(0,o.default)(e.data)&&"Object"!==typeof e.data?JSON.parse(e.data):e.data,t.save("avatar",{user_id:t.id,url:i.url,id:i.id}),t.userData.avatar=i.url,t.$store.commit("setUserData",t.userData)}t.updateLocked=!1}})},fail:function(){uni.hideLoading(),t.updateLocked=!1}}))},getEditData:function(){var e=this;uni.request({method:"post",url:this.$store.state.restUrlNormal+"getAuthorSettings",header:this.$store.state.headerToken,data:{user_id:this.id},success:function(a){"403"==a.statusCode?uni.showToast({title:a.data.message,icon:"error",duration:2e3}):(t.log(a),e.editData=a.data)}})},saveRequest:function(e,a){var i=this;return new Promise((function(n,s){uni.request({method:"post",url:i.$store.state.restUrlNormal+e,header:i.$store.state.headerToken,data:a,success:function(e){if(t.log(e),"403"!=e.statusCode)return uni.showToast({title:"保存成功",icon:"success",duration:2e3}),void n(e.data);uni.showToast({title:e.data.message,icon:"none",duration:2e3}),i.saveLocked=!1}})}))},save:function(t,e){var a=this;return(0,s.default)((0,n.default)().mark((function i(){return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(1!=a.saveLocked){i.next=2;break}return i.abrupt("return");case 2:if(a.saveLocked=!0,"avatar"!=t){i.next=8;break}return i.next=6,a.saveRequest("saveAvatar",e);case 6:i.next=26;break;case 8:if("name"!=a.type){i.next=11;break}return i.next=11,a.saveRequest("saveNickName",{user_id:a.id,name:a.userData.name});case 11:if("desc"!=a.type){i.next=14;break}return i.next=14,a.saveRequest("saveDesc",{user_id:a.id,desc:a.userData.desc});case 14:if("sex"!=a.type){i.next=17;break}return i.next=17,a.saveRequest("saveSex",{user_id:a.id,sex:a.userData.sex});case 17:if("password"!=a.type){i.next=20;break}return i.next=20,a.saveRequest("editPass",{user_id:a.id,password:a.userData.password,repassword:a.userData.repassword});case 20:if("email"!=a.type){i.next=23;break}return i.next=23,a.saveRequest("saveUsername",{username:a.editData.email,password:"",code:a.emailVerCode,img_code:a.imgcheck.img_code,invitation_code:"",token:a.imgcheck.token,smsToken:a.register.smsToken,luoToken:"",confirmPassword:"",loginType:"",user_id:a.userData.id});case 23:if("phone"!=a.type){i.next=26;break}return i.next=26,a.saveRequest("saveUsername",{username:a.editData.phone,password:"",code:a.phoneVerCode,img_code:a.imgcheck.img_code,invitation_code:"",token:a.imgcheck.token,smsToken:a.register.smsToken,luoToken:"",confirmPassword:"",loginType:"",user_id:a.userData.id});case 26:a.$store.commit("setUserData",a.userData),a.saveLocked=!1,a.closePopup();case 29:case"end":return i.stop()}}),i)})))()}}};e.default=c}).call(this,a("5a52")["default"])},"3b5d":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n=i(a("c5b9")),s=a("37dc"),o=i(a("d014")),c=(0,s.initVueI18n)(o.default),d=c.t,r={name:"uniPopupDialog",mixins:[n.default],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||d("uni-popup.ok")},closeText:function(){return this.cancelText||d("uni-popup.cancel")},placeholderText:function(){return this.placeholder||d("uni-popup.placeholder")},titleText:function(){return this.title||d("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=r},"3c5c":function(t,e,a){"use strict";a.r(e);var i=a("3363"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"3e14":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},6139:function(t,e,a){"use strict";a.r(e);var i=a("9db3"),n=a("6afc");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("1897");var o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"56681c50",null,!1,i["a"],void 0);e["default"]=c.exports},"6afc":function(t,e,a){"use strict";a.r(e);var i=a("3b5d"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},9007:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"9db3":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-popup-dialog"},[a("v-uni-view",{staticClass:"uni-dialog-title"},[a("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?a("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[a("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):a("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",["checkbox"===t.inputType?a("v-uni-input",{staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"checkbox"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}):"radio"===t.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:t.inputType},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])],2),a("v-uni-view",{staticClass:"uni-dialog-button-group"},[a("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1),a("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},n=[]},b992:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-56681c50]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-56681c50]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-56681c50]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-56681c50]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-56681c50]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-56681c50]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-56681c50]{font-size:16px;color:#333}.uni-button-color[data-v-56681c50]{color:#007aff}.uni-dialog-input[data-v-56681c50]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-56681c50]{color:#4cd964}.uni-popup__warn[data-v-56681c50]{color:#f0ad4e}.uni-popup__error[data-v-56681c50]{color:#dd524d}.uni-popup__info[data-v-56681c50]{color:#909399}',""]),t.exports=e},c5b9:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,a=e.$options.name;while(a!==t){if(e=e.$parent,!e)return!1;a=e.$options.name}return e}}};e.default=i},d014:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("26e7")),s=i(a("9007")),o=i(a("3e14")),c={en:n.default,"zh-Hans":s.default,"zh-Hant":o.default};e.default=c},df97:function(t,e,a){var i=a("b992");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("79f5c31e",i,!0,{sourceMap:!1,shadowMode:!1})},e79a:function(t,e,a){var i=a("fc68");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("32b48170",i,!0,{sourceMap:!1,shadowMode:!1})},ef67:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uniPopup:a("a0e6").default,uniPopupDialog:a("6139").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"user-edit-page"},[t.userData?a("v-uni-view",{staticStyle:{"padding-top":"48rpx"}},[a("v-uni-view",{staticClass:"edit-row avatar",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseFile.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"avatar-img b2radius b2img",attrs:{src:t.userData.avatar,mode:"aspectFill"}}),a("b2font",{attrs:{type:"b2xiangji b2radius",size:"60"}})],1),a("v-uni-view",{staticClass:"edit-row"},[a("v-uni-view",{staticClass:"edit-title"},[t._v("基本资料")]),a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("name")}}},[a("v-uni-view",{staticClass:"c9"},[t._v("昵称")]),a("v-uni-view",[t._v(t._s(t.userData.name))])],1),a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("desc")}}},[a("v-uni-view",{staticClass:"c9"},[t._v("简介")]),a("v-uni-view",{staticClass:"lin-1 lin-2"},[t._v(t._s(t.userData.desc?t.userData.desc:"暂无介绍"))])],1),a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("sex")}}},[a("v-uni-view",{staticClass:"c9"},[t._v("性别")]),a("v-uni-view",[t._v(t._s("0"==t.userData.sex?"女":"男"))])],1)],1),t.editData.email||t.editData.phone?a("v-uni-view",{staticClass:"edit-row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("password")}}},[a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center"},[a("v-uni-view",{staticClass:"c9"},[t._v("密码")]),a("v-uni-view",[t._v("修改密码")])],1),a("v-uni-view",{staticClass:"edit-desc"})],1):t._e(),"tel"==t.editData.check_type||"telandemail"==t.editData.check_type?a("v-uni-view",{staticClass:"edit-row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("phone")}}},[a("v-uni-view",{staticClass:"edit-title"},[t._v("绑定手机")]),a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center"},[a("v-uni-view",{staticClass:"c9"},[t._v("手机号码")]),a("v-uni-view",[t._v(t._s(t.editData.phone?t.editData.phone:"立刻绑定"))])],1)],1):t._e(),"email"==t.editData.check_type||"telandemail"==t.editData.check_type?a("v-uni-view",{staticClass:"edit-row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("email")}}},[a("v-uni-view",{staticClass:"edit-title"},[t._v("绑定邮箱")]),a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center"},[a("v-uni-view",{staticClass:"c9"},[t._v("邮箱地址")]),a("v-uni-view",[t._v(t._s(t.editData.email?t.editData.email:"立刻绑定"))])],1)],1):t._e(),t.editData?a("v-uni-view",{staticClass:"edit-row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open("address")}}},[a("v-uni-view",{staticClass:"edit-title"},[t._v("地址管理")]),a("v-uni-view",{staticClass:"edit-row-in bold-light flex-center"},[a("v-uni-view",{staticClass:"c9"},[t._v("默认地址")]),a("v-uni-view",[a("v-uni-view",{staticClass:"fs12"},[t.editData.default_address?a("v-uni-view",[a("v-uni-view",{staticClass:"bold-light fs14"},[a("v-uni-text",[t._v(t._s(t.editData.address[t.editData.default_address].name))]),a("v-uni-text",[t._v(t._s(t.editData.address[t.editData.default_address].phone))])],1),a("v-uni-view",{staticClass:"fs13"},[t.editData.address[t.editData.default_address].province?a("v-uni-text",[t._v(t._s(t.editData.address[t.editData.default_address].province))]):t._e(),t.editData.address[t.editData.default_address].city?a("v-uni-text",[t._v(t._s(t.editData.address[t.editData.default_address].city))]):t._e(),t.editData.address[t.editData.default_address].county?a("v-uni-text",[t._v(t._s(t.editData.address[t.editData.default_address].county))]):t._e(),a("v-uni-text",[t._v(t._s(t.editData.address[t.editData.default_address].address))])],1)],1):a("v-uni-view",[t._v("收货地址为空，请添加收货地址")])],1)],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"login-out"},[a("v-uni-button",{staticClass:"fs16",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginOut.apply(void 0,arguments)}}},[t._v("退出登录")])],1),a("v-uni-view",{staticClass:"login-out delete"},[a("v-uni-button",{staticClass:"fs16 delete-user",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteUser.apply(void 0,arguments)}}},[t._v("删除账户")]),a("v-uni-view",{staticClass:"fs12 gray"},[t._v("删除账户后将无法恢复，请谨慎操作")])],1)],1):t._e(),a("uni-popup",{ref:"popup",attrs:{type:"bottom","mask-click":!t.saveLocked},on:{maskClick:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"edit-box"},[a("v-uni-view",{staticClass:"circle-list-top"},[a("v-uni-view",{staticClass:"fs14",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}}},[t._v("关闭")]),a("v-uni-view",["name"==t.type?a("v-uni-text",[t._v("您的新昵称")]):t._e(),"desc"==t.type?a("v-uni-text",[t._v("一句话介绍")]):t._e(),"password"==t.type?a("v-uni-text",[t._v("修改密码")]):t._e(),"sex"==t.type?a("v-uni-text",[t._v("选择性别")]):t._e(),"phone"==t.type?a("v-uni-text",[t._v("绑定手机")]):t._e()],1),"phone"!=t.type&&"email"!=t.type?a("v-uni-button",{staticClass:"b2color fs12 text",attrs:{loading:t.saveLocked,disabled:t.saveLocked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v(t._s(t.saveLocked?"保存中":"保存"))]):t._e()],1),"name"==t.type?a("v-uni-view",{staticClass:"edit-in"},[a("v-uni-input",{staticClass:"edit-input",attrs:{type:"text",focus:t.isFocus},model:{value:t.userData.name,callback:function(e){t.$set(t.userData,"name",e)},expression:"userData.name"}})],1):t._e(),"desc"==t.type?a("v-uni-view",{staticClass:"edit-in"},[a("v-uni-textarea",{staticClass:"edit-input",attrs:{type:"text",focus:t.isFocus},model:{value:t.userData.desc,callback:function(e){t.$set(t.userData,"desc",e)},expression:"userData.desc"}})],1):t._e(),"password"==t.type?a("v-uni-view",{staticClass:"edit-in"},[a("v-uni-input",{staticClass:"edit-input",attrs:{type:"text",focus:t.isFocus,placeholder:"请输入密码"},model:{value:t.userData.password,callback:function(e){t.$set(t.userData,"password",e)},expression:"userData.password"}}),a("v-uni-input",{staticClass:"edit-input",attrs:{type:"text",placeholder:"请重复输入密码"},model:{value:t.userData.repassword,callback:function(e){t.$set(t.userData,"repassword",e)},expression:"userData.repassword"}})],1):t._e(),"sex"==t.type?a("v-uni-view",{staticClass:"edit-in"},[a("v-uni-radio-group",{staticClass:"sex-select",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sexChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"sex-1"},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"0",checked:"0"==t.userData.sex}}),t._v("女")],1),a("v-uni-label",{staticClass:"sex-1"},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"1",checked:"1"==t.userData.sex}}),t._v("男")],1)],1)],1):t._e(),"phone"==t.type?a("v-uni-view",{staticClass:"edit-in"},[a("v-uni-view",[t._v("请输入您的手机号码")]),a("v-uni-view",[a("v-uni-input",{staticClass:"edit-input",attrs:{type:"text",placeholder:"手机号码",focus:t.isFocus},model:{value:t.editData.phone,callback:function(e){t.$set(t.editData,"phone",e)},expression:"editData.phone"}})],1),a("v-uni-view",{staticClass:"versend"},[a("v-uni-input",{staticClass:"vercode edit-input",attrs:{type:"text",placeholder:"验证码"},model:{value:t.phoneVerCode,callback:function(e){t.phoneVerCode=e},expression:"phoneVerCode"}}),a("v-uni-button",{staticClass:"sendbutton empty",attrs:{disabled:t.sms.locked||!t.editData.phone},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRecaptcha.apply(void 0,arguments)}}},[t._v(t._s(t.sms.locked?t.count+"秒后重新发送":"获取验证码"))])],1),a("v-uni-view",{staticClass:"savebutton"},[a("v-uni-button",{attrs:{loading:t.saveLocked,disabled:t.saveLocked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)],1):t._e(),"email"==t.type?a("v-uni-view",{staticClass:"edit-in"},[a("v-uni-view",[t._v("请输入您的邮箱")]),a("v-uni-view",[a("v-uni-input",{staticClass:"edit-input",attrs:{type:"text",placeholder:"邮箱地址",focus:t.isFocus},model:{value:t.editData.email,callback:function(e){t.$set(t.editData,"email",e)},expression:"editData.email"}})],1),a("v-uni-view",{staticClass:"versend"},[a("v-uni-input",{staticClass:"vercode edit-input",attrs:{type:"text",placeholder:"验证码"},model:{value:t.emailVerCode,callback:function(e){t.emailVerCode=e},expression:"emailVerCode"}}),a("v-uni-button",{staticClass:"sendbutton empty",attrs:{disabled:t.sms.locked||!t.editData.email},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRecaptcha.apply(void 0,arguments)}}},[t._v(t._s(t.sms.locked?t.count+"秒后重新发送":"获取验证码"))])],1),a("v-uni-view",{staticClass:"savebutton"},[a("v-uni-button",{attrs:{loading:t.saveLocked,disabled:t.saveLocked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)],1):t._e()],1)],1),a("uni-popup",{ref:"popupcode",attrs:{type:"top"}},[a("v-uni-view",{staticClass:"cp-step"},[a("v-uni-view",{staticClass:"cp-step-in flex-center"},[a("v-uni-view",{staticClass:"c-title"},[t._v("你是机器人吗？")]),a("v-uni-view",{staticClass:"c-img-box"},[t.recaptchaUrl?a("v-uni-image",{staticClass:"c-img b2img",attrs:{src:t.recaptchaUrl,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRecaptcha.apply(void 0,arguments)}}}):t._e()],1),a("v-uni-view",{staticClass:"fs14 gray"},[a("v-uni-text",{staticClass:"c-desc"},[t._v("请输入图片中的验证码")]),a("v-uni-text",{staticClass:"c-desc"},[t._v("点击「我是人类」按钮获取验证码")])],1),a("v-uni-input",{staticClass:"inp",attrs:{type:"text"},model:{value:t.imgcheck.img_code,callback:function(e){t.$set(t.imgcheck,"img_code",e)},expression:"imgcheck.img_code"}}),a("v-uni-view",{staticClass:"flex-center c-action"},[a("v-uni-button",{staticClass:"can-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgCodeCancel.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-button",{staticClass:"c-button",attrs:{disabled:t.imgcheck.locked||4!=t.imgcheck.img_code.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgCodeCheck.apply(void 0,arguments)}}},[t._v("我是人类")])],1)],1)],1)],1),a("uni-popup",{ref:"deleteUser",attrs:{type:"center"}},[t.deleteUserAction?a("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"请输入您的账户密码",placeholder:"账户密码"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogInputConfirm.apply(void 0,arguments)}}}):t._e()],1)],1)},s=[]},fbcc:function(t,e,a){"use strict";var i=a("e79a"),n=a.n(i);n.a},fc68:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.delete-user[data-v-4c2bb6f0]{background-color:#fff!important;color:#999!important}.user-edit-page[data-v-4c2bb6f0]{background:#fff;padding:%?32?%}.sex-select .sex-1[data-v-4c2bb6f0]{margin-right:%?24?%;margin-top:%?60?%}.circle-list-top[data-v-4c2bb6f0]{position:relative;text-align:center;padding:%?24?%;margin-bottom:%?24?%;border-bottom:1px solid #efefef;display:flex;justify-content:space-between;align-items:center}.edit-in[data-v-4c2bb6f0]{padding:1px %?48?%;box-sizing:border-box}.edit-input[data-v-4c2bb6f0]{background-color:#f5f6f7;padding:%?32?%;font-size:%?32?%;margin-top:%?16?%;box-sizing:border-box;width:100%;min-height:%?110?%}.sex-select[data-v-4c2bb6f0]{display:flex;flex-flow:column}.disabled[data-v-4c2bb6f0]{opacity:.5}.edit-box[data-v-4c2bb6f0]{background-color:#fff;width:100%;height:calc(100vh - 100px)}.edit-box .b2color.fs12[data-v-4c2bb6f0]{margin:0}.versend[data-v-4c2bb6f0]{display:flex;align-items:center}.versend .sendbutton[data-v-4c2bb6f0]{width:%?400?%;font-size:%?32?%;margin-left:%?16?%;height:%?100?%;line-height:%?100?%;margin-top:%?16?%}.edit-row[data-v-4c2bb6f0]{margin-bottom:%?48?%;padding-bottom:%?49?%;border-bottom:1px solid #f0f0f0}.edit-desc[data-v-4c2bb6f0]{font-size:%?24?%;color:silver}.edit-title[data-v-4c2bb6f0]{font-weight:700}.edit-row-in[data-v-4c2bb6f0]{margin-top:%?48?%}.avatar[data-v-4c2bb6f0]{position:relative}.avatar-img[data-v-4c2bb6f0], .avatar[data-v-4c2bb6f0]{width:%?160?%;height:%?160?%}.avatar-img[data-v-4c2bb6f0]{position:absolute;left:0;top:0;width:100%;height:100%}.avatar .b2font[data-v-4c2bb6f0]{width:100%;text-align:center;height:%?160?%;line-height:%?160?%;position:relative;z-index:2;color:#fff;background-color:rgba(0,0,0,.3)}.edit-row-in[data-v-4c2bb6f0]{font-size:%?30?%}.edit-row-in .c9[data-v-4c2bb6f0]{width:%?180?%;min-width:%?180?%}.edit-row.avatar[data-v-4c2bb6f0]{border:0;padding-bottom:0}.open-box[data-v-4c2bb6f0]{margin-top:%?24?%}.open-name[data-v-4c2bb6f0]{margin-top:%?10?%;display:flex;flex-flow:column;width:80%}.open-item[data-v-4c2bb6f0]{width:%?200?%;display:flex;flex-flow:column;margin-right:%?24?%}.open-avatar[data-v-4c2bb6f0]{background-color:#efefef;width:%?200?%;height:%?200?%;position:relative}.open-image[data-v-4c2bb6f0]{position:absolute;left:0;top:0;width:100%;height:100%}.bd-button[data-v-4c2bb6f0]{font-size:%?24?%!important;height:%?54?%!important;line-height:%?54?%!important;padding:0 %?32?%!important;background-color:rgba(25,133,255,.2)!important;color:#1985ff!important}.bd-button[data-v-4c2bb6f0]::after{border:0}.bd-button.empty[data-v-4c2bb6f0]{background-color:hsla(0,0%,100%,.6)!important;color:#212121!important}.bd-box[data-v-4c2bb6f0]{position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.bd-a[data-v-4c2bb6f0]{margin:%?10?% 0}.open-top[data-v-4c2bb6f0]{justify-content:space-between}.ad-address[data-v-4c2bb6f0]{width:100%}.ad-name[data-v-4c2bb6f0]{width:%?160?%;text-align:right}.ad-a[data-v-4c2bb6f0]{color:#999}.ad-box .edit-row-in[data-v-4c2bb6f0]{border-bottom:1px solid #efefef;padding-bottom:%?32?%;margin-bottom:%?32?%}.ad-n[data-v-4c2bb6f0]{margin-top:%?16?%}.cp-step[data-v-4c2bb6f0]{background-color:#fff;width:100%;display:block;padding:%?80?% 0 %?200?% 0}.cp-step .inp[data-v-4c2bb6f0]{width:100%;height:%?100?%;padding:0 %?38?%;background-color:#efefef;margin:%?32?% 0;font-size:%?60?%;text-align:center;letter-spacing:%?20?%;box-sizing:border-box}.cp-step-in[data-v-4c2bb6f0]{max-width:%?400?%;margin:0 auto;flex-flow:column}.c-action[data-v-4c2bb6f0]{justify-content:space-between;margin-top:%?60?%;width:100%}.c-button[data-v-4c2bb6f0]{font-size:%?28?%;height:%?70?%;line-height:%?70?%;margin:0}.can-button[data-v-4c2bb6f0]{background:none!important;color:#999!important;font-size:%?28?%;height:%?70?%;line-height:%?70?%;margin:0}.c-img[data-v-4c2bb6f0]{width:%?400?%;height:%?180?%;display:block;border-radius:%?10?%}.c-img-box[data-v-4c2bb6f0]{margin:%?32?% 0;width:%?400?%;height:%?180?%;background-color:#efefef;border-radius:%?10?%}.savebutton[data-v-4c2bb6f0]{margin-top:%?32?%}.login-out.delete[data-v-4c2bb6f0]{background-color:#f5f6f7;padding:%?20?%;border-radius:%?8?%}.login-out.delete .fs12[data-v-4c2bb6f0]{margin-top:%?12?%;text-align:left}.login-out[data-v-4c2bb6f0]{text-align:center;padding-bottom:%?30?%}',""]),t.exports=e}}]);