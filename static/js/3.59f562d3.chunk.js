(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{308:function(e,a,s){e.exports={messages:"Messages_messages__2Czpm",dialog:"Messages_dialog__tfj-k",dialogItems:"Messages_dialogItems__2OoFm",dialogHead:"Messages_dialogHead__BDJuz",dialogBody:"Messages_dialogBody__Pv6vX",messageOut:"Messages_messageOut__1ecbx",messagesFill:"Messages_messagesFill__2JJHa",formContainer:"Messages_formContainer__PFn6z",avatar:"Messages_avatar__FiFmh",avatarContainer:"Messages_avatarContainer__1PCd-",name:"Messages_name__1VKCA",buttonForm:"Messages_buttonForm__3NwVr",emptyMessages:"Messages_emptyMessages__12fxk",selectDialog:"Messages_selectDialog__1geCX",iconMessage:"Messages_iconMessage__3b62w",dialogSearch:"Messages_dialogSearch__1DKPy",searchInput:"Messages_searchInput__2JgjW",emojiPicker:"Messages_emojiPicker__65cWX",buttomEmoji:"Messages_buttomEmoji__gcgVt",test:"Messages_test__1-Qm2",emojyPicker:"Messages_emojyPicker__3pYFV",messagesMobile:"Messages_messagesMobile__1u_Qb",newChat:"Messages_newChat__2BM_U",emptyChatText:"Messages_emptyChatText__2WzFB",arrowBack:"Messages_arrowBack__14Ze4"}},309:function(e,a,s){e.exports={items:"DialogWithUser_items__2hRxI",name:"DialogWithUser_name__2SpA4",message:"DialogWithUser_message__2BINV",selectedDialog:"DialogWithUser_selectedDialog__adA2o",avatar:"DialogWithUser_avatar__3n_ux",timeLastMessage:"DialogWithUser_timeLastMessage__1lmR_",yourMessage:"DialogWithUser_yourMessage__27Rr9"}},310:function(e,a,s){e.exports={message:"MessageItem_message__3fTmO",messageRight:"MessageItem_messageRight__1aGY_",messageContainer:"MessageItem_messageContainer__DmkNm",time:"MessageItem_time__pQF6M",timeRight:"MessageItem_timeRight__1aq_t",timeLeft:"MessageItem_timeLeft__22qsT"}},315:function(e,a,s){"use strict";s.r(a);var t=s(82),r=s(58),n=s(4),c=s(56),i=s(19),o=s(0),m=s.n(o),l=s(308),g=s.n(l),u=s(309),d=s.n(u),h=s(5),_=s(11),M=function(e){Object(o.useEffect)(function(){r(Object(h.b)(new Date(e.date)))},[e.date]);var a=Object(o.useState)(null),s=Object(c.a)(a,2),t=s[0],r=s[1];return m.a.createElement(_.b,{to:"/messages/".concat(e.id)},m.a.createElement("div",{onClick:function(){e.isSearchMode&&e.outSearch()},ref:e.dialogRef,className:d.a.items+" "+(e.currentDialogId===e.id?d.a.selectedDialog:"")},m.a.createElement("div",null,m.a.createElement("img",{className:d.a.avatar,src:e.avatar,alt:"avatar"})),m.a.createElement("div",null,m.a.createElement("div",{className:d.a.name},e.name),m.a.createElement("span",{className:d.a.message},e.isYoursMessage?m.a.createElement("span",{className:d.a.yourMessage},"You: "):"",e.lastMessage.length>50?e.lastMessage.slice(0,50)+"...":e.lastMessage)),m.a.createElement("span",{className:d.a.timeLastMessage},t)))},f=s(310),E=s.n(f),v=function(e){return e.right?m.a.createElement("div",{className:E.a.messageContainer},m.a.createElement("div",{className:E.a.time+" "+E.a.timeRight},e.time),m.a.createElement("div",{className:E.a.message+" "+E.a.messageRight},e.message)):m.a.createElement("div",{className:E.a.messageContainer},m.a.createElement("div",{className:E.a.message},e.message),m.a.createElement("div",{className:E.a.time+" "+E.a.timeLeft},e.time))},b=s(311),I=m.a.forwardRef(function(e,a){var s=e.children,t=Object(i.a)(e,["children"]),r=Object(o.useState)(!1),l=Object(c.a)(r,2),g=l[0],u=l[1],d=Object(o.useState)(!1),h=Object(c.a)(d,2),_=h[0],M=h[1],f=g||_,E=Object(o.useCallback)(function(){u(!0)},[]),v=Object(o.useCallback)(function(){u(!1)},[]),I=Object(o.useCallback)(function(){M(!0)},[]),p=Object(o.useCallback)(function(){M(!1)},[]),F=Object(o.useMemo)(function(){return{renderer:function(e){var a=e.elementRef,s=e.style,t=Object(i.a)(e,["elementRef","style"]);return m.a.createElement("span",Object.assign({},t,{ref:a,style:Object(n.a)({},s,{opacity:f?1:0,transition:"opacity 0.4s ease-in-out"}),onMouseEnter:I,onMouseLeave:p}))}}},[f,I,p]);return m.a.createElement(b.a,Object.assign({},t,{wrapperProps:{renderer:function(e){var a=e.elementRef,s=e.style,t=Object(i.a)(e,["elementRef","style"]);return m.a.createElement("div",Object.assign({},t,{ref:a,style:Object(n.a)({},s,{right:0})}))}},trackXProps:F,trackYProps:F,onScrollStart:E,onScrollStop:v,scrollDetectionThreshold:500,ref:a}),s)}),p=s(30),F=s.n(p),N=s(27),j=s(141),S=s(17),O=s(22),D=s(80),w=s(15),y=Object(j.a)({form:"addMessageForm",onSubmitSuccess:function(e,a){a(Object(N.b)("addMessageForm"))}})(function(e){return m.a.createElement("form",{onKeyDown:function(a){13===a.keyCode&&!1===a.shiftKey&&a.target.name==="message".concat(e.userId)&&(a.preventDefault(),e.handleSubmit())},onSubmit:e.handleSubmit},Object(S.c)("write message to ".concat(e.name),"message".concat(e.userId),[O.b,O.c],"textarea",null,null,{autoFocus:!0}),e.dirty&&m.a.createElement("button",{className:g.a.buttonForm,type:"submit"}),m.a.createElement(D.b,{formName:"addMessageForm",fieldName:"message".concat(e.userId),Form:e.addMessageForm,styles:g.a,dispatch:e.dispatch}))}),k=Object(w.b)(function(e){return{addMessageForm:e.form.addMessageForm}})(y),C=s(29),U=function(){return m.a.createElement("div",{className:g.a.emptyMessages},m.a.createElement("div",{className:g.a.iconMessage}),m.a.createElement("div",{className:g.a.selectDialog},"Please select a dialog"))},W=function(e){var a=e.currentDialog,s=Object(i.a)(e,["currentDialog"]),t=a.messages.map(function(e,a){return m.a.createElement(v,{time:e.timeFormat,key:a,right:e.right,message:e.message,id:e.id})}),r=Object(o.useRef)();return Object(o.useEffect)(function(){!s.isSearchMode&&document.querySelector("textarea[name=message".concat(s.userId,"]")).focus()}),Object(o.useEffect)(function(){r.current.scrollToBottom()},[t]),m.a.createElement("div",{className:g.a.dialog},m.a.createElement("div",{className:g.a.dialogHead},m.a.createElement("div",{className:g.a.avatarContainer},m.a.createElement(_.b,{to:"/profile/".concat(s.userId)},m.a.createElement("img",{className:g.a.avatar,src:a.avatar,alt:"avatar"}))),m.a.createElement("span",{className:g.a.name},m.a.createElement(_.b,{to:"/profile/".concat(s.userId)},a.name)),m.a.createElement(_.b,{className:g.a.arrowBack,to:"/messages/"})),m.a.createElement(I,{children:m.a.createElement("div",{className:g.a.messagesFill},t),ref:r,removeTrackYWhenNotUsed:!0,style:{width:"100%",height:"75%"}}),m.a.createElement("div",{className:g.a.formContainer},m.a.createElement(k,{userId:s.userId,name:a.name,onSubmit:function(e){s.sendMessage(e["message".concat(s.userId)],s.userId)}})))},R=function(e){var a=e.getUserForMessages,s=e.setUserForMessages,t=Object(i.a)(e,["getUserForMessages","setUserForMessages"]);return Object(o.useEffect)(function(){return a(t.userId),function(){s(null)}},[t.userId,a,s]),t.isFetching?m.a.createElement(C.a,null):t.userForMessage?m.a.createElement("div",{className:g.a.dialog},m.a.createElement("div",{className:g.a.dialogHead},m.a.createElement("div",{className:g.a.avatarContainer},m.a.createElement(_.b,{to:"/profile/".concat(t.userId)},m.a.createElement("img",{className:g.a.avatar,src:t.userForMessage.photo||F.a,alt:"avatar"}))),m.a.createElement("span",{className:g.a.name},m.a.createElement(_.b,{to:"/profile/".concat(t.userId)},t.userForMessage.name)),m.a.createElement(_.b,{className:g.a.arrowBack,to:"/messages/"})),m.a.createElement("div",{className:g.a.newChat},m.a.createElement("div",{className:g.a.emptyChatText},"Yet no messages with ",t.userForMessage.name)," "),m.a.createElement("div",{className:g.a.formContainer},m.a.createElement(k,{userId:t.userId,name:t.userForMessage.name,onSubmit:function(e){t.setNewDialog(e["message".concat(t.userId)],t.userId,t.userForMessage.photo,t.userForMessage.name)}}))):m.a.createElement(U,null)},x=function(e){var a=e.currentDialog,s=Object(i.a)(e,["currentDialog"]);return a?m.a.createElement(W,Object.assign({currentDialog:a},s)):m.a.createElement(R,s)},L=s(21),P=function(e,a,s,t){var r=Object(o.useState)(window.innerWidth),n=Object(c.a)(r,2),i=n[0],m=n[1];return Object(o.useEffect)(function(){var e=function(){m(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),i>e?a(t):s(t)},B=function(e){return m.a.createElement(z,e)},T=function(e){return m.a.createElement(Y,e)},Y=function(e){var a=e.currentDialogId,s=e.isSearchMode,t=e.currentDialog,r=e.searchInput,n=e.searchWord,c=e.dialogItemsSearch,o=e.dialogItems,l=e.handleSearch,u=Object(i.a)(e,["currentDialogId","isSearchMode","currentDialog","searchInput","searchWord","dialogItemsSearch","dialogItems","handleSearch"]);return m.a.createElement("div",{className:g.a.messagesMobile},!!a&&m.a.createElement(L.e,null,m.a.createElement(L.c,{exact:!0,path:"/messages/",render:function(){return m.a.createElement(U,null)}}),m.a.createElement(L.c,{path:"/:userId",render:function(){return m.a.createElement(x,{valueMessage:u.valueMessage,isSearchMode:s,userId:a,sendMessage:u.sendMessage,currentDialog:t,isFetching:u.isFetching,getUserForMessages:u.getUserForMessages,userForMessage:u.userForMessage,setNewDialog:u.setNewDialog,setUserForMessages:u.setUserForMessages})}})),!a&&m.a.createElement("div",{className:g.a.dialogItems},m.a.createElement("div",{className:g.a.dialogSearch},m.a.createElement("input",{ref:r,placeholder:"Search",className:g.a.searchInput,value:n,onChange:function(e){return l(e)},type:"text",name:"",id:""})),m.a.createElement("div",{className:g.a.dialogsList},m.a.createElement(I,{children:s?c:o,removeTrackYWhenNotUsed:!0,className:g.a.test}))))},z=function(e){var a=e.currentDialogId,s=e.isSearchMode,t=e.currentDialog,r=e.searchInput,n=e.searchWord,c=e.dialogItemsSearch,o=e.dialogItems,l=e.handleSearch,u=Object(i.a)(e,["currentDialogId","isSearchMode","currentDialog","searchInput","searchWord","dialogItemsSearch","dialogItems","handleSearch"]);return m.a.createElement("div",{className:g.a.messages},m.a.createElement(L.e,null,m.a.createElement(L.c,{exact:!0,path:"/messages/",render:function(){return m.a.createElement(U,null)}}),m.a.createElement(L.c,{path:"/:userId",render:function(){return m.a.createElement(x,{valueMessage:u.valueMessage,isSearchMode:s,userId:a,sendMessage:u.sendMessage,currentDialog:t,isFetching:u.isFetching,getUserForMessages:u.getUserForMessages,userForMessage:u.userForMessage,setNewDialog:u.setNewDialog,setUserForMessages:u.setUserForMessages})}})),m.a.createElement("div",{className:g.a.dialogItems},m.a.createElement("div",{className:g.a.dialogSearch},m.a.createElement("input",{ref:r,placeholder:"Search",className:g.a.searchInput,value:n,onChange:function(e){return l(e)},type:"text",name:"",id:""})),m.a.createElement("div",{className:g.a.dialogsList},m.a.createElement(I,{children:s?c:o,removeTrackYWhenNotUsed:!0,style:{width:"100%",height:"85vh"}}))))},J=function(e){var a=e.dialogItemsData,s=e.setSearch,t=e.dialogsFromSearch,r=Object(i.a)(e,["dialogItemsData","setSearch","dialogsFromSearch"]),l=Object(o.useState)(""),g=Object(c.a)(l,2),u=g[0],d=g[1],h=Object(o.useState)(!1),_=Object(c.a)(h,2),f=_[0],E=_[1];Object(o.useEffect)(function(){var e=function(e){e.target!==v.current&&e.target!==b.current&&I()};return f?document.addEventListener("click",e):document.removeEventListener("click",e),function(){document.removeEventListener("click",e)}},[f]);var v=Object(o.useRef)(),b=Object(o.useRef)(),I=function(){E(!1),d("")},p=+r.match.params.userId?+r.match.params.userId:0,F=p&&a[a.findIndex(function(e){return e.userId===p})],N=a.map(function(e,a){return m.a.createElement(M,{avatar:e.avatar,currentDialogId:p,date:e.messages[e.messages.length-1].date,isYoursMessage:e.messages[e.messages.length-1].right,lastMessage:e.messages[e.messages.length-1].message,key:a+1,name:e.name,id:e.userId})}),j=f&&t.map(function(e,a){return m.a.createElement(M,{dialogRef:b,isSearchMode:f,avatar:e.avatar,outSearch:I,lastMessage:e.messages[e.messages.length-1].message,date:e.messages[e.messages.length-1].date,isYoursMessage:e.messages[e.messages.length-1].right,key:a+1,name:e.name,id:e.userId,currentDialogId:p})});return P(790,B,T,Object(n.a)({currentDialogId:p,currentDialog:F,dialogItemsSearch:j,dialogItems:N,handleSearch:function(e){var a=e.currentTarget.value;d(a),a&&""!==a.trim()&&(s(a),E(!0))},isSearchMode:f,searchInput:v,searchWord:u},r))},H=s(9),V=Object(H.d)(Object(w.b)(function(e){return{dialogItemsData:e.messages.dialogItemsData,dialogsFromSearch:e.messages.dialogsFromSearch,isFetching:e.messages.isFetching,userForMessage:e.messages.userForMessage}},{sendMessage:r.d,getUserForMessages:r.b,setUserForMessages:r.g,setSearch:r.f,setNewDialog:r.e}),t.a)(J);a.default=V}}]);
//# sourceMappingURL=3.59f562d3.chunk.js.map