(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{299:function(e,a,s){e.exports={messages:"Messages_messages__2Czpm",dialog:"Messages_dialog__tfj-k",dialogItems:"Messages_dialogItems__2OoFm",dialogHead:"Messages_dialogHead__BDJuz",dialogBody:"Messages_dialogBody__Pv6vX",dialogSearch:"Messages_dialogSearch__1DKPy",messageOut:"Messages_messageOut__1ecbx"}},300:function(e,a,s){e.exports={items:"DialogItems_items__3lVke"}},301:function(e,a,s){e.exports={message:"MessageItem_message__1EI6v",messageLeft:"MessageItem_messageLeft__2wEvz"}},302:function(e,a,s){"use strict";s.r(a);var t=s(0),m=s.n(t),n=s(68),i=s(126),g=s(299),l=s.n(g),c=s(300),o=s.n(c),d=s(13),r=function(e){var a="/messages/"+e.id;return m.a.createElement("div",{className:o.a.items},m.a.createElement(d.b,{to:a},e.name))},u=s(301),_=s.n(u),E=function(e){return e.right?m.a.createElement("div",{className:_.a.message+" "+_.a.messageLeft},e.message):m.a.createElement("div",{className:_.a.message},e.message)},v=s(89),f=s(127),b=s(29),M=s(42),p=Object(M.a)(30),N=Object(f.a)({form:"addMessageForm"})(function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement(v.a,{component:b.b,name:"message",cols:"30",rows:"10",validate:[M.b,p]}),m.a.createElement("div",null,m.a.createElement("button",{type:"submit"},"Send Message")))}),h=function(e){var a=e.Messages.messagesData.map(function(e){return m.a.createElement(E,{right:e.right,message:e.message,id:e.id})}),s=e.Messages.dialogItemsData.map(function(e){return m.a.createElement(r,{name:e.name,id:e.id})});return m.a.createElement("div",{className:l.a.messages},m.a.createElement("div",{className:l.a.dialog},m.a.createElement("div",{className:l.a.dialogHead}),m.a.createElement("div",{className:l.a.dialogBody},a,m.a.createElement(N,{onSubmit:e.sendMessage}))),m.a.createElement("div",{className:l.a.dialogItems},m.a.createElement("div",{className:l.a.dialogSearch}),m.a.createElement("div",{className:l.a.dialogsList},s)))},w=s(11),I=s(6);a.default=Object(I.d)(Object(w.b)(function(e){return{Messages:e.Messages}},{sendMessage:i.b}),n.a)(h)}}]);
//# sourceMappingURL=3.2ea9a908.chunk.js.map