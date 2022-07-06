"use strict";(self.webpackChunksmart_meeting_organizer=self.webpackChunksmart_meeting_organizer||[]).push([[58],{3307:function(n,t,e){e.d(t,{Z:function(){return o}});e(2791);var r="Button_btn__RBtNK",i=e(184),o=function(n){var t=n.label;return(0,i.jsx)("button",{"data-testid":"button-"+t,className:r,children:t})}},9754:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(885),i=e(2791),o="Card_card__zQfcO",a="Card_title__fjt9r",d="Card_description__ZISe4",u=e(184),l=function(n){var t=n.title,e=n.descriptions,l=(0,i.useState)(!1),c=(0,r.Z)(l,2),s=c[0],m=c[1];return(0,u.jsxs)("div",{className:"".concat(o),"data-testid":"card-"+t,style:{background:s?"#ccffcc":"white"},onClick:function(n){m(!s)},children:[(0,u.jsx)("h2",{className:a,children:t}),e&&e.map((function(n){return(0,u.jsx)("p",{className:d,children:n},1e5*Math.random())}))]})}},7664:function(n,t,e){e.d(t,{Pb:function(){return l},V3:function(){return u},jr:function(){return c}});var r,i,o,a=e(168),d=e(6320),u=(0,d.Ps)(r||(r=(0,a.Z)(["\n    query Buildings {\n      Buildings {\n        name\n        meetingRooms {\n          name\n          meetings {\n            title\n            date\n            startTime\n            endTime\n          }\n        }\n      }\n    }\n"]))),l=(0,d.Ps)(i||(i=(0,a.Z)(["\n  query MeetingRooms {\n    MeetingRooms {\n      id\n      name\n      floor\n      building {\n        name\n      }\n      meetings {\n        startTime\n        endTime\n      }\n    }\n  }\n"]))),c=(0,d.Ps)(o||(o=(0,a.Z)(["\n  mutation Meeting(\n    $id: Int!\n    $title: String!\n    $date: String!\n    $startTime: String!\n    $endTime: String!\n    $meetingRoomId: Int!\n    ) {\n    Meeting(\n      id: $id\n      title: $title\n      date: $date\n      startTime: $startTime\n      endTime: $endTime\n      meetingRoomId: $meetingRoomId\n    ) {\n      id\n      title\n      date\n    }\n  }\n"])))},6058:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r=e(885),i=e(9388),o=e(2791),a=e(3124),d=e(5970),u=e(2364),l=e(9484),c=e(5046);var s=e(6578),m=e(9434),g=e(3504),f=e(6871),v=e(3307),h=e(9754),p=e(7664),j=e(5415),_=e(184),b=function(){var n=(0,f.s0)(),t=(0,m.I0)(),e=(0,m.v9)((function(n){return n.meeting})),b=function(n,t){var e=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var r=(0,o.useState)({called:!1,loading:!1,client:e}),s=r[0],m=r[1],g=(0,o.useRef)({result:s,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(g.current,{client:e,options:t,mutation:n});var f=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=g.current,e=t.client,r=t.options,o=t.mutation,u=(0,i.pi)((0,i.pi)({},r),{mutation:o});g.current.result.loading||u.ignoreResults||m(g.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var c=++g.current.mutationId,s=(0,a.J)(u,n);return e.mutate(s).then((function(t){var r,i,o,a=t.data,u=t.errors,f=u&&u.length>0?new l.c({graphQLErrors:u}):void 0;if(c===g.current.mutationId&&!s.ignoreResults){var v={called:!0,loading:!1,data:a,error:f,client:e};g.current.isMounted&&!(0,d.D)(g.current.result,v)&&m(g.current.result=v)}return null===(i=null===(r=g.current.options)||void 0===r?void 0:r.onCompleted)||void 0===i||i.call(r,t.data),null===(o=n.onCompleted)||void 0===o||o.call(n,t.data),t})).catch((function(t){var r,i,o,a;if(c===g.current.mutationId&&g.current.isMounted){var u={loading:!1,error:t,data:void 0,called:!0,client:e};(0,d.D)(g.current.result,u)||m(g.current.result=u)}if((null===(r=g.current.options)||void 0===r?void 0:r.onError)||s.onError)return null===(o=null===(i=g.current.options)||void 0===i?void 0:i.onError)||void 0===o||o.call(i,t),null===(a=n.onError)||void 0===a||a.call(n,t),{data:void 0,errors:t};throw t}))}),[]),v=(0,o.useCallback)((function(){m({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return g.current.isMounted=!0,function(){g.current.isMounted=!1}}),[]),[f,(0,i.pi)({reset:v},s)]}(p.jr,{context:{headers:{token:"a123gjhgjsdf6576"}}}),x=(0,r.Z)(b,2),I=x[0],T=x[1],M=(0,s.a)(p.Pb,{context:{headers:{token:"a123gjhgjsdf6576"}}}),R=M.loading,k=M.error,C=M.data;if(R)return"Loading...";if(k)return"Error! ".concat(k.message);var $=C.MeetingRooms.map((function(n){return(0,_.jsx)("div",{onClick:function(){return e=n.id,void t((0,j.v7)(e));var e},children:(0,_.jsx)(h.Z,{title:n.name,id:n.id,descriptions:[n.building.name,"Floor: ".concat(n.floor)]})})}));return(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:"Please Select One of the free rooms"}),$,(0,_.jsx)(g.rU,{to:"/",children:(0,_.jsx)("div",{onClick:function(t){t.preventDefault(),I({variables:{id:parseInt(1e4*Math.random()),title:e.title,date:e.date,startTime:e.startTime,endTime:e.endTime,meetingRoomId:e.meetingRoomId}});var r=T.loading,i=T.error;T.data;r?console.log("loading"):i?console.log("error"):n("/")},children:(0,_.jsx)(v.Z,{label:"Save"})})})]})}}}]);
//# sourceMappingURL=58.f49fedfe.chunk.js.map