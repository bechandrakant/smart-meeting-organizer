"use strict";(self.webpackChunksmart_meeting_organizer=self.webpackChunksmart_meeting_organizer||[]).push([[740],{3307:function(e,t,n){n.d(t,{Z:function(){return l}});n(2791);var a="Button_btn__RBtNK",i=n(184),l=function(e){var t=e.label;return(0,i.jsx)("button",{"data-testid":"button-"+t,className:a,children:t})}},3740:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(2982),i=n(885),l=n(2791),r=n(9434),s=n(6871),c=n(3307),u=n(5415),o="DatePicker_container__gOy2b",d="DatePicker_label__CFUck",_="DatePicker_input__2yGam",m=n(184),g=function(){var e=(0,r.I0)(),t=(0,l.useState)("2022-07-06"),n=(0,i.Z)(t,2),a=n[0],s=n[1];return(0,m.jsxs)("div",{className:o,"data-testid":"date-picker",children:[(0,m.jsx)("label",{for:"meeting",className:d,children:"Start date:"}),(0,m.jsx)("input",{type:"date",id:"meeting",name:"meeting",value:a,min:"2022-07-06",max:"2022-12-31",className:_,onChange:function(t){s(t.target.value),e((0,u.k2)(t.target.value))}})]})},p={container:"Dropdown_container__mwqMJ",label:"Dropdown_label__bSwJS",select:"Dropdown_select__SthRx"},v=function(e){var t=e.label,n=e.options,a=(0,r.I0)();return(0,m.jsxs)("div",{className:p.container,children:[(0,m.jsx)("label",{className:p.label,for:"building-select",children:t}),(0,m.jsx)("select",{name:"building",className:p.select,onChange:function(e){a((0,u.Mk)(e.target.value))},children:n&&n.length&&n.map((function(e,n){return(0,m.jsx)("option",{value:e,style:p.option,children:e},"Dropdown-".concat(n,"-").concat(t))}))})]})},x="Timepicker_container__kuEJg",b="Timepicker_label__tFl2O",h="Timepicker_input__JaBxs",f=function(e){var t=e.label,n=(0,r.I0)(),a=(0,l.useState)("00:00"),s=(0,i.Z)(a,2),c=s[0],o=s[1];return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("label",{className:b,for:"timepicker",children:t}),(0,m.jsx)("input",{className:h,type:"time",name:"timepicker",required:!0,value:c,onChange:function(e){o(e.target.value),t.toLowerCase().includes("start")?n((0,u.qv)(e.target.value)):n((0,u.I6)(e.target.value))}})]})},j="AddMeeting_container__I7u30",k="AddMeeting_title__kDYTo",N="AddMeeting_inputBox__mhqp2",S=function(){var e=(0,r.I0)(),t=(0,s.s0)(),n=(0,r.v9)(u.SB),o=(0,l.useState)(""),d=(0,i.Z)(o,2),_=d[0],p=d[1];return(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)("h2",{className:k,children:"Add meeting"}),(0,m.jsx)("input",{type:"text",onChange:function(t){e((0,u._W)(_)),p(t.target.value)},value:_,placeholder:"Enter title",className:N}),(0,m.jsx)(g,{}),(0,m.jsx)(f,{label:"Start Time"}),(0,m.jsx)(f,{label:"End Time"}),(0,m.jsx)(v,{label:"Select a Building",options:(0,a.Z)(n.meeting.buildings)}),(0,m.jsx)("div",{onClick:function(e){e.preventDefault(),t("/select-rooms")},children:(0,m.jsx)(c.Z,{label:"Next"})})]})}}}]);
//# sourceMappingURL=740.935ff2a7.chunk.js.map