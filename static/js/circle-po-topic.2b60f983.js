(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["circle-po-topic"],{1897:function(t,e,i){"use strict";var a=i("df97"),o=i.n(a);o.a},"1a2e":function(t,e,i){var a=i("9ec0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("62256934",a,!0,{sourceMap:!1,shadowMode:!1})},"26e7":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},"3b5d":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var o=a(i("c5b9")),n=i("37dc"),s=a(i("d014")),c=(0,n.initVueI18n)(s.default),l=c.t,r={name:"uniPopupDialog",mixins:[o.default],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||l("uni-popup.ok")},closeText:function(){return this.cancelText||l("uni-popup.cancel")},placeholderText:function(){return this.placeholder||l("uni-popup.placeholder")},titleText:function(){return this.title||l("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=r},"3e14":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},6139:function(t,e,i){"use strict";i.r(e);var a=i("9db3"),o=i("6afc");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("1897");var s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"56681c50",null,!1,a["a"],void 0);e["default"]=c.exports},"6afc":function(t,e,i){"use strict";i.r(e);var a=i("3b5d"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},9007:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"93ea":function(t,e,i){"use strict";i.r(e);var a=i("cd40"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},9772:function(t,e,i){"use strict";var a=i("1a2e"),o=i.n(a);o.a},"9db3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-popup-dialog"},[i("v-uni-view",{staticClass:"uni-dialog-title"},[i("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[i("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",["checkbox"===t.inputType?i("v-uni-input",{staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"checkbox"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}):"radio"===t.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:t.inputType},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])],2),i("v-uni-view",{staticClass:"uni-dialog-button-group"},[i("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1),i("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},o=[]},"9ec0":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.vote-box[data-v-3a06bb6e]{background-color:rgba(25,133,255,.03);padding:%?24?%}.vote-type .text[data-v-3a06bb6e]{font-size:%?32?%;padding:0;display:inline-block;margin-right:%?48?%;color:#212121!important}.vote-title[data-v-3a06bb6e]{justify-content:space-between;padding:0 %?24?% %?16?% %?24?%;margin-bottom:%?16?%;border-bottom:1px solid rgba(25,133,255,.08);margin-right:%?-24?%;margin-left:%?-24?%}.add-button[data-v-3a06bb6e]{width:%?60?%;height:%?60?%;line-height:%?60?%;display:flex;justify-content:center;margin-left:%?16?%;background-color:none!important;border-radius:100%}.vote-input[data-v-3a06bb6e]{background-color:#fff;flex:1;font-size:%?30?%;padding:%?16?%;border:1px solid #efefef}.vote-type .text.b2color[data-v-3a06bb6e]{color:#1985ff!important}.vote-type .text[data-v-3a06bb6e]::after{border:0}.vote-item[data-v-3a06bb6e], .guess-item[data-v-3a06bb6e]{display:flex;align-items:center;margin-bottom:%?16?%}.circle-menu[data-v-3a06bb6e]{position:fixed;left:0;right:0;top:0;z-index:5;z-index:66;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding-right:%?32?%;padding-left:%?32?%;box-sizing:border-box}.c-header-right .empty[data-v-3a06bb6e]{padding:0}.c-header-right .empty[data-v-3a06bb6e]::after{border:0}.circle-list[data-v-3a06bb6e]{padding:%?24?%;height:%?800?%;box-sizing:border-box}.circle-list-top[data-v-3a06bb6e]{position:relative;text-align:center;padding:%?24?%}.image-in-box-in[data-v-3a06bb6e]{height:0;padding-top:100%;position:relative;box-shadow:rgba(0,0,0,.05) 0 0 0 1px;background:#bfbfbf}.image-item[data-v-3a06bb6e]{width:100%;height:100%;position:absolute;top:0;left:0;opacity:.6}.video-box[data-v-3a06bb6e]{width:%?340?%;height:%?190?%;position:relative;background-color:#b2b2b2;margin-top:%?16?%}.img-box[data-v-3a06bb6e]{position:relative;flex-wrap:wrap}.image-in-box[data-v-3a06bb6e]{width:33.333%;padding:%?8?%;box-sizing:border-box;position:relative}.update-close[data-v-3a06bb6e]{position:absolute;top:%?24?%;right:%?24?%;width:%?42?%;height:%?42?%;text-align:center;line-height:%?42?%;background-color:hsla(0,0%,100%,.8);color:#212121;border-radius:100%;z-index:5}.uploading[data-v-3a06bb6e]{position:absolute;top:0;width:100%;height:100%;left:0;display:flex;justify-content:center;align-items:center;text-align:center;background:hsla(0,0%,100%,.6);font-size:12px}.video-in-box[data-v-3a06bb6e], .video-in-box-in[data-v-3a06bb6e]{width:100%;height:100%}.search-close[data-v-3a06bb6e]{position:absolute;width:%?30?%;height:%?30?%;right:%?40?%;top:%?20?%;background-color:#fff;line-height:%?30?%;text-align:center;border-radius:100%}.circle-list-box[data-v-3a06bb6e]{background-color:#fff}.empty-circles[data-v-3a06bb6e]{height:%?200?%;align-items:center;justify-content:center}.circle-list-top .b2color[data-v-3a06bb6e]{position:absolute;right:%?24?%;top:%?24?%}.circle-search[data-v-3a06bb6e]{margin:0 %?24?%;background-color:#f5f6f7;padding:%?16?%;border-radius:%?10?%}.item-info-box[data-v-3a06bb6e]{display:flex;justify-content:space-between;width:100%}.item-info[data-v-3a06bb6e]{flex:1}.meta-s[data-v-3a06bb6e]{margin:0 %?16?%}.item-box[data-v-3a06bb6e]{position:relative}.circle-item[data-v-3a06bb6e]{position:relative;padding-bottom:%?16?%}.item-info-box[data-v-3a06bb6e]{margin-left:%?98?%;height:%?130?%;border-bottom:%?2?% solid #efefef}.item-action[data-v-3a06bb6e]{height:%?48?%}.item-action .mini-btn[data-v-3a06bb6e]{font-size:%?22?%;padding:0 %?16?%;background:#f7f7f7!important;border-color:#f7f7f7!important;color:#1985ff!important;height:%?60?%;line-height:%?60?%}.item-action .mini-btn[data-v-3a06bb6e]::after{border:0}.item-img[data-v-3a06bb6e]{position:absolute;width:%?80?%;height:%?80?%;top:0}.item-img-src[data-v-3a06bb6e]{position:absolute;width:100%;height:100%;top:0;left:0}.item-info .fs13[data-v-3a06bb6e]{margin:%?4?% 0}.circle-text[data-v-3a06bb6e]{color:#999}.picked-circle[data-v-3a06bb6e]{margin-bottom:%?54?%}.picked-circle[data-v-3a06bb6e]{color:#999}.circle-menu[data-v-3a06bb6e]{border-bottom:%?2?% solid #efefef}.f-icon[data-v-3a06bb6e]{margin-right:%?8?%}.po-row-1[data-v-3a06bb6e]{flex:1;padding-top:%?32?%;padding-bottom:%?340?%}.po-footer[data-v-3a06bb6e]{background-color:#fbfbfd;padding:%?40?% %?24?%;text-align:center;border-bottom:1px solid #efefef;position:fixed;bottom:0;right:0;left:0;height:%?320?%;box-sizing:border-box}.po-boxin[data-v-3a06bb6e]{padding-bottom:calc(var(--window-bottom) + 10px);padding-bottom:constant(safe-area-inset-bottom);\r\n  /*兼容 IOS<11.2*/padding-bottom:env(safe-area-inset-bottom);\r\n  /*兼容 IOS>11.2*/display:flex;justify-content:center;text-align:center;width:100%;box-sizing:border-box}.po-footer .b2font[data-v-3a06bb6e]{display:block;height:%?100?%;width:%?100?%;line-height:%?100?%;text-align:center;box-shadow:rgba(0,0,0,.09) 0 3px 12px;background-color:#fff;margin-bottom:%?16?%;border-radius:%?30?%}.po-footer .flex-center[data-v-3a06bb6e]{flex-flow:column;margin:0 %?24?%}.po-topic[data-v-3a06bb6e]{display:flex;flex-flow:column;height:100%}.po-tools[data-v-3a06bb6e]{padding:0 %?24?%}.po-tools .fs15[data-v-3a06bb6e]{display:flex;align-items:center;height:%?80?%;line-height:%?56?%;padding:0 20 %?8?% 0;position:relative;margin-right:%?60?%}.po-tools .fs15[data-v-3a06bb6e]::after{content:"";width:%?30?%;height:%?30?%;position:absolute;left:%?8?%;top:%?20?%;border-radius:100%}.po-tools .fs15 .b2font[data-v-3a06bb6e]{font-weight:400;text-shadow:none;margin-right:%?8?%}.picked.say .b2font[data-v-3a06bb6e]{background-color:#4caf50;color:#fff}.picked.ask .b2font[data-v-3a06bb6e]{background-color:#f35;color:#fff}.picked.guess .b2font[data-v-3a06bb6e]{background-color:#ffa41b;color:#fff}.picked.vote .b2font[data-v-3a06bb6e]{background-color:#1a85ff;color:#fff}.po-content[data-v-3a06bb6e]{padding:0;width:100%;min-height:%?200?%}',""]),t.exports=e},b992:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-56681c50]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-56681c50]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-56681c50]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-56681c50]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-56681c50]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-56681c50]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-56681c50]{font-size:16px;color:#333}.uni-button-color[data-v-56681c50]{color:#007aff}.uni-dialog-input[data-v-56681c50]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-56681c50]{color:#4cd964}.uni-popup__warn[data-v-56681c50]{color:#f0ad4e}.uni-popup__error[data-v-56681c50]{color:#dd524d}.uni-popup__info[data-v-56681c50]{color:#909399}',""]),t.exports=e},be9b:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uniPopup:i("a0e6").default,uniPopupDialog:i("6139").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"po-topic"},[i("v-uni-view",{staticClass:"circle-menu fs15",style:"height:"+t.bar.height+"px;padding-top:"+t.bar.top+"px"},[i("v-uni-view",{staticClass:"c-header-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-view",{staticClass:"c-header-center"},[i("v-uni-text",{staticClass:"bold"},[t._v("发布话题")])],1),i("v-uni-view",{staticClass:"c-header-right",style:"padding-right:"+t.bar.width+"px"},[i("v-uni-button",{staticClass:"empty",attrs:{size:"mini",disabled:t.locked||!t.title&&!t.content||t.poLocked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("发布")])],1)],1),i("v-uni-view",{staticClass:"po-row-1 b2mg",style:"padding-top:"+(t.bar.height+12)+"px"},[i("v-uni-view",{staticClass:"picked-circle flex-center fs14 bold-light"},[i("b2font",{class:["f-icon",{b2color:t.circleId}],attrs:{type:"b2donut-chart-fill"}}),i("v-uni-view",{staticClass:"circle-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openbox.apply(void 0,arguments)}}},[t.circleId?i("v-uni-text",{staticClass:"b2color"},[t._v(t._s(t.circleName))]):i("v-uni-text",[t._v("选择一个"+t._s(t.opt.mNames.circle_name))])],1),i("b2font",{class:t.circleId?"b2color":"",attrs:{type:"b2arrow-right-s-line"}}),i("v-uni-view",["say"==t.type?i("v-uni-text",[t._v("说：")]):t._e(),"ask"==t.type?i("v-uni-text",[t._v("提问：")]):t._e(),"vote"==t.type?i("v-uni-text",[t._v("投票：")]):t._e(),"guess"==t.type?i("v-uni-text",[t._v("你猜：")]):t._e()],1)],1),i("v-uni-view",{staticClass:"po-form mg-t"},[i("v-uni-input",{staticClass:"fs16 bold",attrs:{type:"text",placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("v-uni-textarea",{staticClass:"po-content mg-t fs16",attrs:{placeholder:"话题内容",maxlength:"9999","auto-height":"true","disable-default-padding":"true"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("v-uni-view",{staticClass:"media-box"},[i("v-uni-view",{staticClass:"img-box flex-center"},t._l(t.image.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"image-in-box"},[i("v-uni-view",{staticClass:"image-in-box-in b2radius"},[i("v-uni-image",{staticClass:"image-item b2img",attrs:{src:e.poster,mode:"aspectFill"}})],1),e.success?i("v-uni-view",{staticClass:"update-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeFile("image",a)}}},[i("b2font",{attrs:{type:"b2close-fill",size:"42"}})],1):i("v-uni-view",{staticClass:"uploading b2radius"},[t._v(t._s(e.progress)+"%")])],1)})),1),t.video.list.length>0?i("v-uni-view",{staticClass:"video-box b2radius"},t._l(t.video.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"video-in-box"},[i("v-uni-view",{staticClass:"video-in-box-in b2radius"}),e.success?i("v-uni-view",{staticClass:"update-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeFile("video",a)}}},[i("b2font",{attrs:{type:"b2close-fill",size:"42"}})],1):i("v-uni-view",{staticClass:"uploading b2radius"},[t._v(t._s(e.progress)+"%")]),e.success?i("v-uni-view",{staticClass:"uploading b2radius"},[t._v("视频上传完成")]):t._e()],1)})),1):t._e(),"vote"==t.type?i("v-uni-view",{staticClass:"vote-box"},[i("v-uni-view",{staticClass:"vote-title fs14 flex-center gray"},[i("v-uni-text",[t._v("投票")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.type="say"}}},[t._v("取消")])],1),i("v-uni-view",{staticClass:"vote-type"},[i("v-uni-button",{class:"radio"===t.vote.type?"picked b2color text empty":"text empty",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.voteTypeSelect("radio")}}},[t._v("单选")]),i("v-uni-button",{class:"multiple"===t.vote.type?"picked b2color text empty":"text empty",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.voteTypeSelect("multiple")}}},[t._v("多选")]),i("v-uni-button",{class:"pk"===t.vote.type?"picked b2color text empty":"text empty",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.voteTypeSelect("pk")}}},[t._v("PK")])],1),i("v-uni-view",{staticClass:"vote-list"},t._l(t.vote.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"vote-item"},[i("v-uni-input",{staticClass:"vote-input",attrs:{type:"text",disabled:a>=2&&"pk"===t.vote.type},model:{value:t.vote.list[a],callback:function(e){t.$set(t.vote.list,a,e)},expression:"vote.list[index]"}}),i("v-uni-button",{staticClass:"add-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),a===t.vote.list.length-1?a>=2&&"pk"===t.vote.type?t.subVoteList(a):t.addVoteList():t.subVoteList(a)}}},[a>=2&&"pk"===t.vote.type?i("v-uni-view",[i("b2font",{attrs:{type:"b2subtract-fill",size:"38"}})],1):a===t.vote.list.length-1?i("v-uni-view",[i("b2font",{attrs:{type:"b2add-line",size:"38"}})],1):i("v-uni-view",[i("b2font",{attrs:{type:"b2subtract-fill",size:"38"}})],1)],1)],1)})),1),"radio"===t.vote.type?i("v-uni-view",{staticClass:"fs13 gray"},[t._v("可以设置多个项目，用户只能选择其中一个项目进行投票")]):"multiple"===t.vote.type?i("v-uni-view",{staticClass:"fs13 gray"},[t._v("可以设置多个项目，用户可以选择多个项目进行投票")]):i("v-uni-view",{staticClass:"fs13 gray"},[t._v("只能设置两个项目，用户只能选择其中之一")])],1):t._e(),"guess"==t.type?i("v-uni-view",{staticClass:"vote-box"},[i("v-uni-view",{staticClass:"vote-title fs14 flex-center gray"},[i("v-uni-text",[t._v("你猜")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.type="say"}}},[t._v("取消")])],1),i("v-uni-view",{staticClass:"vote-list"},[i("v-uni-radio-group",{staticClass:"guess-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.guessChange.apply(void 0,arguments)}}},t._l(t.guess.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"guess-item"},[i("v-uni-radio",{staticClass:"topic-guess-right",staticStyle:{transform:"scale(0.7)"},attrs:{value:String(a),checked:t.guess.right==a}}),i("v-uni-input",{staticClass:"vote-input",attrs:{type:"text",disabled:a>=2&&"pk"==t.guess.type},model:{value:t.guess.list[a],callback:function(e){t.$set(t.guess.list,a,e)},expression:"guess.list[index]"}}),i("v-uni-button",{staticClass:"add-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),a===t.guess.list.length-1?t.addGuessList():t.subGuessList(a)}}},[a===t.guess.list.length-1?i("v-uni-view",[i("b2font",{attrs:{type:"b2add-line",size:"38"}})],1):i("v-uni-view",[i("b2font",{attrs:{type:"b2subtract-fill",size:"38"}})],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"fs13 gray"},[t._v("请选择一个正确答案。当前正确答案是："),i("v-uni-text",{staticClass:"b2color"},[t._v(t._s("#"+(parseInt(t.guess.right)+1)))])],1)],1):t._e()],1)],1),i("v-uni-view",{staticClass:"po-footer"},[i("v-uni-view",{staticClass:"fs14 gray mg-b"},[t._v("添加媒体与互动")]),i("v-uni-view",{staticClass:"po-boxin"},[i("v-uni-view",{class:["say","flex-center"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[i("b2font",{attrs:{type:"b2image-fill",size:"50"}}),i("v-uni-text",{staticClass:"bold-light fs14 gray"},[t._v("图片")])],1),i("v-uni-view",{class:["ask","flex-center"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseVideo.apply(void 0,arguments)}}},[i("b2font",{attrs:{type:"b2movie-fill",size:"50"}}),i("v-uni-text",{staticClass:"bold-light fs14 gray"},[t._v("视频")])],1),i("v-uni-view",{class:["vote","flex-center",{picked:"vote"==t.type}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.type="vote"}}},[i("b2font",{attrs:{type:"b2bar-chart-fill",size:"50"}}),i("v-uni-text",{staticClass:"bold-light fs14 gray"},[t._v("投票")])],1),i("v-uni-view",{class:["guess","flex-center",{picked:"guess"==t.type}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.type="guess"}}},[i("b2font",{attrs:{type:"b2heart-pulse-line",size:"50"}}),i("v-uni-text",{staticClass:"bold-light fs14 gray"},[t._v("你猜")])],1)],1)],1),i("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"circle-list-box"},[i("v-uni-view",{staticClass:"circle-list-top"},[i("v-uni-view",[t._v("选择"+t._s(t.opt.mNames.circle_name))]),i("v-uni-view",{staticClass:"b2color fs16",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBox.apply(void 0,arguments)}}},[t._v("确定")])],1),i("v-uni-view",{staticStyle:{position:"relative"}},[i("v-uni-input",{staticClass:"circle-search fs14",attrs:{placeholder:"搜索"+t.opt.mNames.circle_name},model:{value:t.circleValue,callback:function(e){t.circleValue=e},expression:"circleValue"}}),t.circleValue?i("b2font",{staticClass:"search-close",attrs:{type:"b2close-fill",size:"28"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.circleValue=""}}}):t._e()],1),t.circleData?i("v-uni-scroll-view",{staticClass:"scroll-Y circle-list",attrs:{"scroll-y":"true","lower-threshold":"50"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.onreachbottom.apply(void 0,arguments)}}},[Object.keys(t.circleData.circles).length>0||t.circleData.circles.length>0?i("v-uni-view",[i("v-uni-radio-group",{staticClass:"t-vote-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.circleData.circles,(function(e,a){return i("v-uni-label",{key:a,staticClass:"circle-item flex-center"},[i("v-uni-view",{staticClass:"item-img b2radius"},[i("v-uni-image",{staticClass:"item-img-src b2img",attrs:{src:e.icon,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"item-info-box"},[i("v-uni-view",{staticClass:"item-info"},[i("v-uni-view",{staticClass:"fs14 bold"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"fs13 lin-1 c9 "},[t._v(t._s(e.desc))]),i("v-uni-view",{staticClass:"fs12 c9 bold-light"},[i("v-uni-text",[t._v(t._s(e.topic_count)+" 帖子")]),i("v-uni-text",{staticClass:"meta-s"},[t._v("•")]),i("v-uni-text",[t._v(t._s(e.user_count)+" 已加入")])],1)],1),i("v-uni-view",{staticClass:"item-action"},[e.in_circle?i("v-uni-view",[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:String(e.id),checked:t.circleId==e.id}})],1):i("v-uni-view",[i("v-uni-button",{staticClass:"mini-btn",attrs:{size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/circle/join-circle?circleId="+e.id)}}},[t._v("申请加入")])],1)],1)],1)],1)})),1)],1):i("v-uni-view",{staticClass:"empty-circles flex-center"},[i("v-uni-text",{staticClass:"fs14 gray"},[t._v("没有"+t._s(t.opt.mNames.circle_name))])],1)],1):t._e()],1)],1),i("uni-popup",{ref:"confirm",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{duration:2e3},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.canelPopup.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmPopup.apply(void 0,arguments)}}},[t._v("确定要删除"+t._s(t.popupText)+"吗？")])],1)],1)},n=[]},c5b9:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e}}};e.default=a},cd40:function(t,e,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("53ca")),n=a(i("5530"));i("fb6a"),i("14d9"),i("d3b7"),i("159b"),i("b64b"),i("e25e"),i("e9c4"),i("4de4");var s={data:function(){return{circleId:0,circleName:"",circleList:"",type:"say",circlePicked:0,circleValue:"",circleData:"",_circleData:"",locked:!1,title:"",content:"",updateLocked:!1,poLocked:!1,popupText:"",popupType:"image",popupIndex:0,ask:{userInput:"",locked:!1,userList:[],focus:!1,pickedList:[],picked:!1,type:"someone",reward:"credit",time:"",pay:"",userCount:4,hiddenInput:!1},vote:{type:"radio",list:[""]},guess:{list:[""],right:0},image:{allow:!0,list:[],count:5,oldNum:0,newNum:0,indexMark:0},video:{allow:!0,list:[],count:5,oldNum:0,newNum:0,indexMark:0},file:{allow:!0,list:[],count:5,oldNum:0,newNum:0,indexMark:0},card:{show:!1,allow:!0,list:{},count:5,oldNum:0,newNum:0,indexMark:0,input:"",locked:!1},role:{show:!1,list:"",see:"public",money:"",credit:"",lv:[],lvPicked:[],currentCircle:0}}},onShareAppMessage:function(t){return{title:"发布话题",path:"/circle/po-topic"}},onLoad:function(t){var e=this;t.id&&(this.circleId=t.id),t.name&&(this.circleName=t.name),this.token||this.go("/pages/global/login"),this.loadCircleData(),uni.$on("joinCircle",(function(t){t&&e.joinSuccess(t)}))},onUnload:function(){uni.$off("joinCircle")},computed:{bar:function(){return this.$store.state.bar},token:function(){return this.$store.state.token},opt:function(){return this.$store.state.opt},userRole:function(){return this.$store.state.userRole}},methods:{voteTypeSelect:function(t){"pk"==t&&this.vote.list.length>2&&(this.vote.list=this.vote.list.slice(0,2)),this.vote.type=t},addVoteList:function(){"pk"===this.vote.type&&this.vote.list.length>=2||this.vote.list.push("")},subVoteList:function(t){this.$delete(this.vote.list,t)},addGuessList:function(){this.guess.list.push("")},subGuessList:function(t){this.$delete(this.guess.list,t)},canelPopup:function(){this.$refs.popup.close()},confirmPopup:function(){"image"==this.popupType&&(this.$delete(this[this.popupType].list,this.popupIndex),this[this.popupType].indexMark=this[this.popupType].list.length),"video"==this.popupType&&this.$delete(this[this.popupType].list,this.popupIndex)},joinSuccess:function(t){var e=this;Object.keys(this.circleData.circles).forEach((function(i){e.circleData.circles[i].id==t&&(e.$set(e.circleData.circles[i],"in_circle",!0),e.circleId=t,e.circleName=e.circleData.circles[i].name)}))},guessChange:function(t){this.guess.right=t.detail.value},radioChange:function(t){this.circlePicked=t.detail.value},openbox:function(){this.$refs.popup.open("bottom")},closeBox:function(){var t=this;this.$refs.popup.close("bottom"),Object.keys(this.circleData.circles).forEach((function(e){parseInt(t.circleData.circles[e].id)==parseInt(t.circlePicked)&&(t.circleId=t.circlePicked,t.circleName=t.circleData.circles[e].name)}))},pickedType:function(t){this.type=t},loadCircleData:function(){var t=this;uni.request({method:"post",url:this.$store.state.restUrlNormal+"getCurrentUserCircleData",header:this.$store.state.headerToken,data:{circle_id:this.circleId},success:function(e){"403"==e.statusCode?uni.showToast({title:e.data.message,icon:"error",duration:2e3}):(t.circleData=e.data,t._circleData=JSON.stringify(e.data))}})},onreachbottom:function(){},searchAction:function(t){var e=this;1!=this.searchLocked&&(this.searchLocked=!0,uni.request({method:"post",url:this.$store.state.restUrlNormal+"circleSearch",header:this.$store.state.headerToken,data:{key:t},success:function(t){"403"==t.statusCode?uni.showToast({title:t.data.message,icon:"error",duration:2e3}):e.circleData.circles=(0,n.default)({},t.data),e.searchLocked=!1}}))},removeFile:function(t,e){this.popupIndex=e,this.popupType=t,this.$refs.confirm.open(),"image"==t&&(this.popupText="这张图片"),"video"==t&&(this.popupText="这个视频")},getVideoPoster:function(){var e=document.createElement("video"),i=document.createElement("canvas");e.currentTime=5,e.onloadeddata=function(a){var o=i.getContext("2d");o.drawImage(e,0,0,res.width,res.height,0,0,290,150);var n=i.toDataURL("image/jpeg");t.log(n,"-----")}},chooseVideo:function(){var e=this;if(1!=this.updateLocked)return this.updateLocked=!0,this.poLocked=!0,this.userRole.can_img?this.video.list.length>1?(uni.showToast({title:"最多上传1个视频",icon:"none",duration:2e3}),void(this.updateLocked=!1)):void uni.chooseVideo({sourceType:["album"],count:this.circleData.media_count.video_count,success:function(i){t.log(i);var a=i.tempFilePath;e.$set(e.video.list,0,{poster:a,progress:0,success:!1,id:0,url:"",task:""}),e.video.list[0].task=uni.uploadFile({url:e.$store.state.restUrlNormal+"fileUpload",filePath:a,name:"file",header:{Authorization:"Bearer "+e.$store.state.token},formData:{post_id:1,type:"circle"},success:function(t){if("403"==t.statusCode){var i="您无权上传视频";e.b2CheckJson(t.data)&&(i=JSON.parse(t.data).message),uni.showToast({title:i,icon:"error",duration:2e3}),e.video.list=[]}else{var a;a="object"!==(0,o.default)(t.data)&&"Object"!==typeof t.data?JSON.parse(t.data):t.data,e.$set(e.video.list[0],"url",a.url),e.$set(e.video.list[0],"id",a.id),e.$set(e.video.list[0],"success",!0),e.video.indexMark=e.video.list.length,e.checkLocked()}e.updateLocked=!1}}),e.video.list[0].task.onProgressUpdate((function(t){e.$set(e.video.list[0],"progress",t.progress)}))},fail:function(){e.updateLocked=!1}}):(uni.showToast({title:"暂无权上传视频",icon:"none",duration:2e3}),void(this.updateLocked=!1))},chooseCard:function(){},chooseImage:function(){var e=this;if(1!=this.updateLocked)return this.updateLocked=!0,this.poLocked=!0,this.userRole.can_img?this.image.list.length>=this.circleData.media_count.image_count?(uni.showToast({title:"最多上传"+this.circleData.media_count.image_count+"张图片",icon:"none",duration:2e3}),void(this.updateLocked=!1)):void uni.chooseImage({sizeType:["original","compressed"],sourceType:["album"],count:this.circleData.media_count.image_count,success:function(i){var a=i.tempFilePaths;a.forEach((function(i,a){a+=e.image.indexMark,e.$set(e.image.list,a,{poster:i,progress:0,success:!1,id:0,url:"",task:""}),e.image.list[a].task=uni.uploadFile({url:e.$store.state.restUrlNormal+"fileUpload",filePath:i,name:"file",header:{Authorization:"Bearer "+e.$store.state.token},formData:{post_id:1,type:"circle"},success:function(i){if(t.log(i),uni.hideLoading(),"403"==i.statusCode){var n="您无权上传图片";e.b2CheckJson(i.data)&&(n=JSON.parse(i.data).message),uni.showToast({title:n,icon:"error",duration:2e3}),e.image.list=[]}else{var s;s="object"!==(0,o.default)(i.data)&&"Object"!==typeof i.data?JSON.parse(i.data):i.data,e.$set(e.image.list[a],"url",s.url),e.$set(e.image.list[a],"id",s.id),e.$set(e.image.list[a],"success",!0),e.image.indexMark=e.image.list.length,e.checkLocked()}e.updateLocked=!1}}),e.image.list[a].task.onProgressUpdate((function(t){e.$set(e.image.list[a],"progress",t.progress)}))}))},fail:function(){e.updateLocked=!1}}):(uni.showToast({title:"暂无权上传图片",icon:"none",duration:2e3}),void(this.updateLocked=!1))},checkLocked:function(){this.image.list.length>0&&(this.poLocked=this.image.list.filter((function(t){return 0==t.success}))),this.video.list.length>0&&(t.log("video",this.video.list.length),this.poLocked=this.video.list.filter((function(t){return 0==t.success}))),this.file.list.length>0&&(t.log("file",this.file.list.length),this.poLocked=this.file.list.filter((function(t){return 0==t.success}))),this.poLocked=!1},submit:function(){var e=this;!0!==this.locked&&(this.locked=!0,uni.request({method:"post",url:this.$store.state.restUrlNormal+"insertCircleTopic",header:this.$store.state.headerToken,data:{type:this.type,circle:this.circleId,ask:this.ask,vote:this.vote,guess:this.guess,title:this.title,content:this.content,image:this.image,video:this.video,file:this.file,card:this.card,role:this.role},success:function(i){t.log(i),"403"==i.statusCode?uni.showToast({title:i.data.message,icon:"none",duration:2e3}):(uni.$emit("getTopicData",i.data),e.goback()),e.locked=!1}}))}},watch:{circleValue:function(t){t?this.searchAction(t):this.circleData=JSON.parse(this._circleData)}}};e.default=s}).call(this,i("5a52")["default"])},d014:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("26e7")),n=a(i("9007")),s=a(i("3e14")),c={en:o.default,"zh-Hans":n.default,"zh-Hant":s.default};e.default=c},df97:function(t,e,i){var a=i("b992");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("79f5c31e",a,!0,{sourceMap:!1,shadowMode:!1})},f9e5:function(t,e,i){"use strict";i.r(e);var a=i("be9b"),o=i("93ea");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("9772");var s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"3a06bb6e",null,!1,a["a"],void 0);e["default"]=c.exports}}]);