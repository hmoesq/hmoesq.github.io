(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-single-post"],{"09bb":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("c7eb")),n=i(a("1da1"));a("d3b7"),a("c975");var s=i(a("9925")),d={components:{b2content:s.default},data:function(){return{loadingStatus:!0,data:"",postid:0,videoIndex:0,commentCount:0,seo:{imageUrl:"",content:"",desc:""},load:!1,vi:""}},computed:{pageLocked:function(){return this.$store.state.pageLocked}},onPullDownRefresh:function(){uni.showLoading({title:"加载中..."}),this.loadPostData()},onReachBottom:function(){},onShow:function(){this.$store.state.reflash&&(uni.showLoading({title:"加载中..."}),this.loadPostData()),uni.setStorageSync("historyUrl",this.currentUrl())},onLoad:function(t){t.id&&(this.postid=t.id,(0===t.vi||t.vi)&&(this.vi=t.vi),this.loadPostData())},onShareAppMessage:function(t){return{title:this.data.title,path:"/pages/single/post?id="+this.postid+"&vi="+this.videoIndex,imageUrl:this.seo.imageUrl,content:this.seo.content,desc:this.seo.desc}},methods:{openComment:function(){this.$refs.comment.openComment(!0)},reload:function(){uni.showLoading({title:"加载中..."}),this.loadPostData()},getDogeVideo:function(t){var e=this;return new Promise((function(a){uni.request({method:"post",url:e.$store.state.restUrlNormal+"getDogeVideo",header:e.$store.state.headerToken,data:{id:t.id,token:t.token},success:function(t){403!=t.data?a(t.data):uni.showModal({content:t.data.message,showCancel:!1})}})}))},indexChange:function(t){this.videoIndex=t},resetVideos:function(t){var e=this;return(0,n.default)((0,o.default)().mark((function a(){var i,n;return(0,o.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(t.video&&t.video.videos.length>0)){a.next=11;break}i=0;case 2:if(!(i<t.video.videos.length)){a.next=11;break}if(!t.video.videos[i].id){a.next=8;break}return a.next=6,e.getDogeVideo(t.video.videos[i]);case 6:n=a.sent,n&&e.$set(t.video.videos[i],"url",n);case 8:i++,a.next=2;break;case 11:return a.abrupt("return",t);case 12:case"end":return a.stop()}}),a)})))()},loadPostData:function(){var t=this,e=uni.getStorageSync("b2_guest_buy_"+this.postid+"_x");uni.request({method:"post",url:this.$store.state.restUrl+"getPost",header:this.$store.state.headerToken,data:{postId:this.postid,guest:e},success:function(){var e=(0,n.default)((0,o.default)().mark((function e(a){var i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(403==a.statusCode){e.next=14;break}if(a.data.video.videos&&a.data.video.videos.length>0)for(i=0;i<a.data.video.videos.length;i++)!a.data.video.videos[i].url||-1===a.data.video.videos[i].url.indexOf("bilibili.com")&&-1===a.data.video.videos[i].url.indexOf("v.qq.com")||t.$delete(a.data.video.videos,i);return e.next=4,t.resetVideos(a.data);case 4:a.data=e.sent,t.data=a.data,t.seo.imageUrl=t.data.seo.img,t.seo.content=t.data.seo.desc,t.seo.desc=t.data.seo.desc,t.loadingStatus=!1,t.commentCount=t.data.meta.comment,uni.stopPullDownRefresh(),t.$store.state.reflash=!1,t.$nextTick((function(){t.load=!0,""!==t.vi&&(t.videoIndex=t.vi)}));case 14:uni.hideLoading();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}}};e.default=d},"12e5":function(t,e,a){"use strict";a.r(e);var i=a("4f2f"),o=a("58ee");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("5c91");var s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"153aee28",null,!1,i["a"],void 0);e["default"]=d.exports},"4f2f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"post-single bgw"},[a("b2Loading",{attrs:{status:t.loadingStatus}}),t.loadingStatus?t._e():[a("v-uni-view",{class:"post-content "+t.data.type},["post-style-5"==t.data.type?a("b2videos",{attrs:{data:t.data.video,index:t.videoIndex,postid:t.postid,title:t.data.title,thumb:t.data.thumb},on:{changeIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.indexChange.apply(void 0,arguments)},reload:function(e){arguments[0]=e=t.$handleEvent(e),t.reload.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"box"},[a("v-uni-view",[a("v-uni-view",{staticClass:"content-title"},[t._v(t._s(t.$decode(t.data.title)))]),a("v-uni-view",{staticClass:"post-meta"},[a("v-uni-view",{staticClass:"post-meta-left"},[a("v-uni-image",{staticClass:"avatar b2img",attrs:{src:t.data.meta.user_avatar,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"post-meta-user"},[a("v-uni-view",{domProps:{textContent:t._s(t.data.meta.user_name)}}),a("v-uni-view",{staticClass:"post-meta-meta"},[a("v-uni-view",{staticClass:"post-meta-meta-item"},[t._v(t._s(t.data.meta.like)+"个喜欢")]),a("v-uni-view",{staticClass:"post-meta-meta-item"},[t._v(t._s(t.data.meta.comment)+"个评论")]),a("v-uni-view",{staticClass:"post-meta-meta-item"},[t._v(t._s(t.data.meta.date_normal))])],1)],1)],1),a("v-uni-view",{staticClass:"post-meta-right"},[t._v(t._s(t.data.meta.views)+"浏览")])],1),"post-style-5"==t.data.type&&t.data.video.videos.length>1?a("v-uni-view",{staticClass:"video-list"},[a("v-uni-scroll-view",{staticClass:"video-list-scroll",attrs:{"scroll-x":"true"},on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},t._l(t.data.video.videos,(function(e,i){return a("v-uni-view",{key:i,staticClass:"video-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.videoIndex=i}}},[e.h2?a("v-uni-view",{staticClass:"h2 lin-1"},[t._v(t._s(e.h2))]):t._e(),a("v-uni-view",{class:["video-list-title lin-1 lin-2 bold-light",{picked:i==t.videoIndex}]},[t._v(t._s(e.title))])],1)})),1)],1):t._e()],1),a("b2content",{attrs:{content:t.data.content,data:t.data,postid:t.postid},on:{reload:function(e){arguments[0]=e=t.$handleEvent(e),t.reload.apply(void 0,arguments)}}}),t.data.download.error?t._e():a("b2download",{attrs:{data:t.data.download,postid:t.postid,title:t.data.title},on:{reload:function(e){arguments[0]=e=t.$handleEvent(e),t.reload.apply(void 0,arguments)}}})],1)],1),t.data.related.length>0?a("v-uni-view",{staticClass:"related"},t._l(t.data.related,(function(e,i){return a("v-uni-view",{staticClass:"related-item flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/single/post?id="+e.id)}}},[a("v-uni-view",{staticClass:"related-title"},[t._v(t._s(e.title))]),a("v-uni-view",[a("img",{staticClass:"related-img",attrs:{src:e.thumb}})])],1)})),1):t._e(),a("comment",{ref:"comment",staticClass:"post-comment",attrs:{postid:t.postid,count:t.commentCount,load:t.load,name:"评论"}}),t.data?a("singleBar",{attrs:{postid:t.postid,commentCount:t.commentCount,type:"post",posttitle:t.data.title,desc:t.data.excerpt,img:t.data.thumb,url:t.data.link},on:{openComment:function(e){arguments[0]=e=t.$handleEvent(e),t.openComment.apply(void 0,arguments)}}}):t._e()]],2)},o=[]},"58ee":function(t,e,a){"use strict";a.r(e);var i=a("09bb"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"5c91":function(t,e,a){"use strict";var i=a("eec2"),o=a.n(i);o.a},"84ac":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".post-single[data-v-153aee28]{overflow:hidden}.video-list-scroll[data-v-153aee28]{white-space:nowrap;margin-top:%?40?%}.video-list-item[data-v-153aee28]{display:inline-block;vertical-align:bottom;margin-right:%?32?%}.video-list-title[data-v-153aee28]{display:flex;width:%?200?%;height:%?80?%;padding:0 %?20?%;border:1px solid #efefef;align-items:center;white-space:normal;font-size:%?24?%;border-radius:%?12?%}.video-list-title.picked[data-v-153aee28]{border:1px solid #ff3a55}.video-list-item .h2[data-v-153aee28]{font-size:%?24?%;font-weight:700;margin-bottom:%?8?%;margin-left:%?8?%}.post-style-1 .post-thumb[data-v-153aee28]{display:none}.related[data-v-153aee28]{padding:%?20?% %?32?%;border-top:%?20?% solid #efefef}.related-item + .related-item[data-v-153aee28]{margin-top:%?20?%}.related-title[data-v-153aee28]{flex:1}.related-img[data-v-153aee28]{width:%?200?%;height:%?150?%;border-radius:%?10?%;margin-left:%?20?%;display:block}uni-button[size=mini][data-v-153aee28]{padding:%?8?% 1em;line-height:1.6}.content-title[data-v-153aee28]{margin:%?32?% 0}.post-meta[data-v-153aee28]{display:flex;justify-content:space-between;align-items:center}.post-meta-left[data-v-153aee28]{display:flex;font-size:%?26?%;align-items:center}.post-meta-left .avatar[data-v-153aee28]{border-radius:%?6?%;width:%?66?%;height:%?66?%;margin-right:%?16?%}.post-meta-meta[data-v-153aee28]{display:flex;align-items:center;color:#999;font-size:%?24?%}.post-meta-meta-item[data-v-153aee28]{margin-right:%?16?%}",""]),t.exports=e},eec2:function(t,e,a){var i=a("84ac");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("354a3e24",i,!0,{sourceMap:!1,shadowMode:!1})}}]);