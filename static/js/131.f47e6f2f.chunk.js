"use strict";(self.webpackChunksmart_meeting_organizer=self.webpackChunksmart_meeting_organizer||[]).push([[131],{3307:function(n,e,t){t.d(e,{Z:function(){return a}});t(2791);var i="Button_btn__RBtNK",r=t(184),a=function(n){var e=n.label;return(0,r.jsx)("button",{"data-testid":"button-"+e,className:i,children:e})}},9754:function(n,e,t){t.d(e,{Z:function(){return u}});var i=t(885),r=t(2791),a="Card_card__zQfcO",o="Card_title__fjt9r",s="Card_description__ZISe4",d=t(184),u=function(n){var e=n.title,t=n.descriptions,u=(0,r.useState)(!1),m=(0,i.Z)(u,2),c=m[0],g=m[1];return(0,d.jsxs)("div",{className:"".concat(a),"data-testid":"card-"+e,style:{background:c?"#ccffcc":"white"},onClick:function(n){g(!c)},children:[(0,d.jsx)("h2",{className:o,children:e}),t&&t.map((function(n){return(0,d.jsx)("p",{className:s,children:n},1e5*Math.random())}))]})}},7664:function(n,e,t){t.d(e,{Pb:function(){return u},V3:function(){return d},jr:function(){return m}});var i,r,a,o=t(168),s=t(6320),d=(0,s.Ps)(i||(i=(0,o.Z)(["\n    query Buildings {\n      Buildings {\n        name\n        meetingRooms {\n          name\n          meetings {\n            title\n            date\n            startTime\n            endTime\n          }\n        }\n      }\n    }\n"]))),u=(0,s.Ps)(r||(r=(0,o.Z)(["\n  query MeetingRooms {\n    MeetingRooms {\n      id\n      name\n      floor\n      building {\n        name\n      }\n      meetings {\n        startTime\n        endTime\n      }\n    }\n  }\n"]))),m=(0,s.Ps)(a||(a=(0,o.Z)(["\n  mutation Meeting(\n    $id: Int!\n    $title: String!\n    $date: String!\n    $startTime: String!\n    $endTime: String!\n    $meetingRoomId: Int!\n    ) {\n    Meeting(\n      id: $id\n      title: $title\n      date: $date\n      startTime: $startTime\n      endTime: $endTime\n      meetingRoomId: $meetingRoomId\n    ) {\n      id\n      title\n      date\n    }\n  }\n"])))},131:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var i=t(2982),r=(t(2791),t(3504)),a=t(9754),o=t(3307),s="Home_home__9Ke73",d=t(6578),u=t(7664),m=t(2426),c=t.n(m),g=t(9434),l=t(5415),f=t(184),h=function(){var n=(0,g.I0)(),e=(0,d.a)(u.V3,{context:{headers:{token:"a123gjhgjsdf6576"}}}),t=e.loading,m=e.error,h=e.data;if(t)return"Loading...";if(m)return"Error! ".concat(m.message);var _=h.Buildings.map((function(n){return n.name}));n((0,l.Zo)((0,i.Z)(_)));var T=h.Buildings.reduce((function(n,e){return n+e.meetingRooms.length}),0),j=h.Buildings.reduce((function(n,e){return e.meetingRooms&&e.meetingRooms.forEach((function(e){e.meetings&&(n+=e.meetings.length)})),n}),0),v=0,R=h.Buildings.reduce((function(n,e){var t=0;e.meetingRooms&&e.meetingRooms.meetings&&e.meetingRooms.meetings.forEach((function(e){var i=e.date,r=e.startTime,a=e.endTime,o=((new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours())+":"+((new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes());if(c()(i).isBefore(c()())||c()(i).isAfter(c()()))t++;else{var s="hh:mm",d=c()(o,s),u=c()(r,s),m=c()(a,s);d.isBetween(u,m)?t++:v++}return n+t}))}),0);return(0,f.jsxs)("div",{className:s,"data-testid":"home-page",children:[(0,f.jsx)(a.Z,{title:"Buildings",descriptions:["Total: "+h.Buildings.length]}),(0,f.jsx)(a.Z,{title:"Rooms",descriptions:["Total "+T,"Free now ".concat(R||T)]}),(0,f.jsx)(a.Z,{title:"Meetings",descriptions:["Total ".concat(j," today"),"Total ".concat(v," going on now")]}),(0,f.jsx)(r.rU,{to:"/add-meeting",children:(0,f.jsx)(o.Z,{label:"Add a Meeting"})})]})}}}]);
//# sourceMappingURL=131.f47e6f2f.chunk.js.map