(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+eai":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("ZZ/e"),i=u("scJ8"),a=u("c6VM");class o{constructor(l,n,u){this.route=l,this.utils=n,this.fireStore=u,this.CurrentIndex=0,this.slideOpts={effect:"flip"},this.SlideIndex=0,this.selectedTime="6AM - 9AM",this.addressvalue="",this.selectedDay="Sunday",this.Days=["SUN","MON","TUE","WED","THU","FRI","SAT"],this.Time=["6AM - 9AM","10AM - 1PM","4PM - 7PM","8PM - 11PM","9AM - 4PM"],this.fireStore.getUserAddress().then(l=>{this.addressArray=l}),this.utils.AddAdressBackUrl="/delivery"}ngOnInit(){}addAddress(){this.route.navigate(["add-address"])}slideTap(l){this.CurrentIndex=l,this.SlideIndex=l,this.slides.slideTo(l,200)}slideChanged(){this.slides.getActiveIndex().then(l=>{this.CurrentIndex=l,this.SlideIndex=l})}check(){}paymentPage(){switch(this.SlideIndex){case 0:this.selectedDay="Sunday";break;case 1:this.selectedDay="Monday";break;case 2:this.selectedDay="Tuesday";break;case 3:this.selectedDay="Wednesday";break;case 4:this.selectedDay="Thrusday";break;case 5:this.selectedDay="Friday";break;default:this.selectedDay="Saturday"}this.addressvalue?this.route.navigate(["payment",{selectedDay:this.selectedDay,addressvalue:this.addressvalue,selectedTime:this.selectedTime}]):this.utils.presentToast("All field is required here",!0,"bottom",2100)}}class r{}var b=u("pMnS"),s=u("oBZk"),c=u("s7LF"),d=u("SVse"),g=u("iInd"),p=e.Bb({encapsulation:0,styles:[['@charset "UTF-8";.swiper-pagination.swiper-pagination-bullets[_ngcontent-%COMP%]{display:none!important}.check-row[_ngcontent-%COMP%]{padding-left:16px;min-height:70px;display:flex;align-items:center}.center[_ngcontent-%COMP%]{padding:6px;border-radius:3px}.days[_ngcontent-%COMP%]{color:#fff;background:var(--ion-color-primary)}.timeSlide[_ngcontent-%COMP%]{width:100%}.ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#eaeaea;background:#eaeaea}ion-footer[_ngcontent-%COMP%]{--background:#eaeaea}.footer-md[_ngcontent-%COMP%]:before{background-image:none}.bgTransparent[_ngcontent-%COMP%]{--background:#eaeaea;background:#eaeaea}.newAddress[_ngcontent-%COMP%]{padding:0 5px}.contentSection[_ngcontent-%COMP%]{background:#fff}.cardContentSection[_ngcontent-%COMP%]{display:flex;align-items:center}.cardContentSection[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{width:100%}']],data:{}});function C(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,25,"ion-item",[],null,null,null,s.fb,s.r)),e.Cb(1,49152,null,0,t.H,[e.j,e.p,e.F],null,null),(l()(),e.Db(2,0,null,0,19,"ion-label",[],null,null,null,s.gb,s.s)),e.Cb(3,49152,null,0,t.N,[e.j,e.p,e.F],null,null),(l()(),e.Db(4,0,null,0,5,"ion-row",[["align-items-center",""]],null,null,null,s.qb,s.C)),e.Cb(5,49152,null,0,t.jb,[e.j,e.p,e.F],null,null),e.Cb(6,16384,null,0,t.d,[e.p],null,null),(l()(),e.Db(7,0,null,0,2,"p",[["ion-no-ion-margin",""]],null,null,null,null,null)),(l()(),e.Db(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Wb(9,null,[""," ",""])),(l()(),e.Db(10,0,null,0,3,"ion-row",[],null,null,null,s.qb,s.C)),e.Cb(11,49152,null,0,t.jb,[e.j,e.p,e.F],null,null),(l()(),e.Db(12,0,null,0,1,"p",[["ion-no-ion-margin",""]],null,null,null,null,null)),(l()(),e.Wb(13,null,["",""])),(l()(),e.Db(14,0,null,0,3,"ion-row",[],null,null,null,s.qb,s.C)),e.Cb(15,49152,null,0,t.jb,[e.j,e.p,e.F],null,null),(l()(),e.Db(16,0,null,0,1,"p",[["ion-no-ion-margin",""]],null,null,null,null,null)),(l()(),e.Wb(17,null,["",""])),(l()(),e.Db(18,0,null,0,3,"ion-row",[],null,null,null,s.qb,s.C)),e.Cb(19,49152,null,0,t.jb,[e.j,e.p,e.F],null,null),(l()(),e.Db(20,0,null,0,1,"p",[["ion-no-ion-margin",""]],null,null,null,null,null)),(l()(),e.Wb(21,null,["",""])),(l()(),e.Db(22,0,null,0,3,"ion-radio",[["checked",""],["slot","start"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Pb(l,25)._handleBlurEvent(u.target)&&t),"ionSelect"===n&&(t=!1!==e.Pb(l,25)._handleIonSelect(u.target)&&t),t}),s.ob,s.z)),e.Tb(5120,null,c.d,(function(l){return[l]}),[t.Ob]),e.Cb(24,49152,null,0,t.ab,[e.j,e.p,e.F],{checked:[0,"checked"],value:[1,"value"]},null),e.Cb(25,16384,null,0,t.Ob,[e.p],null,null)],(function(l,n){l(n,24,0,"",e.Hb(1,"",n.context.$implicit.id,""))}),(function(l,n){l(n,9,0,n.context.$implicit.title,n.context.$implicit.name),l(n,13,0,n.context.$implicit.flatNumbers),l(n,17,0,n.context.$implicit.street),l(n,21,0,n.context.$implicit.locality)}))}function h(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,9,"ion-radio-group",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Pb(l,1)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Pb(l,1)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.addressvalue=u)&&t),t}),s.nb,s.A)),e.Cb(1,16384,null,0,t.Qb,[e.p],null,null),e.Tb(1024,null,c.d,(function(l){return[l]}),[t.Qb]),e.Cb(3,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Tb(2048,null,c.e,null,[c.g]),e.Cb(5,16384,null,0,c.f,[[4,c.e]],null,null),e.Cb(6,49152,null,0,t.bb,[e.j,e.p,e.F],null,null),(l()(),e.sb(16777216,null,0,2,null,C)),e.Cb(8,278528,null,0,d.j,[e.Y,e.T,e.x],{ngForOf:[0,"ngForOf"]},null),e.Rb(131072,d.b,[e.j])],(function(l,n){var u=n.component;l(n,3,0,u.addressvalue),l(n,8,0,e.Xb(n,8,0,e.Pb(n,9).transform(u.addressArray)))}),(function(l,n){l(n,0,0,e.Pb(n,5).ngClassUntouched,e.Pb(n,5).ngClassTouched,e.Pb(n,5).ngClassPristine,e.Pb(n,5).ngClassDirty,e.Pb(n,5).ngClassValid,e.Pb(n,5).ngClassInvalid,e.Pb(n,5).ngClassPending)}))}function f(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,0,"span",[],null,null,null,null,null))],null,null)}function m(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,12,"div",[["class","center"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.slideTap(l.context.index)&&e),e}),null,null)),e.Tb(512,null,d.r,d.s,[e.x,e.y,e.p,e.L]),e.Cb(2,278528,null,0,d.i,[d.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Sb(3,{days:0}),(l()(),e.Db(4,0,null,null,8,"ion-col",[["class","center"]],null,null,null,s.Y,s.k)),e.Tb(512,null,d.r,d.s,[e.x,e.y,e.p,e.L]),e.Cb(6,278528,null,0,d.i,[d.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Sb(7,{days:0}),e.Cb(8,49152,null,0,t.t,[e.j,e.p,e.F],null,null),(l()(),e.Db(9,0,null,0,1,"span",[["class","day-addr"]],null,null,null,null,null)),(l()(),e.Wb(10,null,["",""])),(l()(),e.sb(16777216,null,0,1,null,f)),e.Cb(12,16384,null,0,d.k,[e.Y,e.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,e=l(n,3,0,u.CurrentIndex==n.context.index);l(n,2,0,"center",e);var t=l(n,7,0,u.CurrentIndex==n.context.index);l(n,6,0,"center",t),l(n,12,0,u.check())}),(function(l,n){l(n,10,0,n.context.$implicit)}))}function D(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,9,"ion-item",[["class","list-items bgTransparent"],["lines","none"]],null,null,null,s.fb,s.r)),e.Cb(1,49152,null,0,t.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Db(2,0,null,0,3,"ion-radio",[["checked","false"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Pb(l,5)._handleBlurEvent(u.target)&&t),"ionSelect"===n&&(t=!1!==e.Pb(l,5)._handleIonSelect(u.target)&&t),t}),s.ob,s.z)),e.Tb(5120,null,c.d,(function(l){return[l]}),[t.Ob]),e.Cb(4,49152,null,0,t.ab,[e.j,e.p,e.F],{checked:[0,"checked"],value:[1,"value"]},null),e.Cb(5,16384,null,0,t.Ob,[e.p],null,null),(l()(),e.Db(6,0,null,0,3,"ion-label",[["ion-padding-start",""]],null,null,null,s.gb,s.s)),e.Cb(7,49152,null,0,t.N,[e.j,e.p,e.F],null,null),(l()(),e.Db(8,0,null,0,1,"span",[["class","check-label"]],null,null,null,null,null)),(l()(),e.Wb(9,null,["",""]))],(function(l,n){l(n,1,0,"none"),l(n,4,0,"false",e.Hb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,9,0,n.context.$implicit)}))}function P(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,13,"ion-slide",[],null,null,null,s.wb,s.I)),e.Cb(1,49152,null,0,t.qb,[e.j,e.p,e.F],null,null),(l()(),e.Db(2,0,null,0,11,"div",[["class","timeSlide bgTransparent"]],null,null,null,null,null)),(l()(),e.Db(3,0,null,null,10,"ion-radio-group",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Pb(l,4)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Pb(l,4)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.selectedTime=u)&&t),t}),s.nb,s.A)),e.Cb(4,16384,null,0,t.Qb,[e.p],null,null),e.Tb(1024,null,c.d,(function(l){return[l]}),[t.Qb]),e.Cb(6,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Tb(2048,null,c.e,null,[c.g]),e.Cb(8,16384,null,0,c.f,[[4,c.e]],null,null),e.Cb(9,49152,null,0,t.bb,[e.j,e.p,e.F],null,null),(l()(),e.Db(10,0,null,0,3,"ion-list",[["class","check-list bgTransparent"]],null,null,null,s.ib,s.t)),e.Cb(11,49152,null,0,t.O,[e.j,e.p,e.F],null,null),(l()(),e.sb(16777216,null,0,1,null,D)),e.Cb(13,278528,null,0,d.j,[e.Y,e.T,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,6,0,u.selectedTime),l(n,13,0,u.Time)}),(function(l,n){l(n,3,0,e.Pb(n,8).ngClassUntouched,e.Pb(n,8).ngClassTouched,e.Pb(n,8).ngClassPristine,e.Pb(n,8).ngClassDirty,e.Pb(n,8).ngClassValid,e.Pb(n,8).ngClassInvalid,e.Pb(n,8).ngClassPending)}))}function v(l){return e.Yb(0,[e.Ub(402653184,1,{slides:0}),(l()(),e.Db(1,0,null,null,11,"ion-header",[],null,null,null,s.bb,s.n)),e.Cb(2,49152,null,0,t.B,[e.j,e.p,e.F],null,null),(l()(),e.Db(3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.Bb,s.N)),e.Cb(4,49152,null,0,t.Cb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Db(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.S,s.e)),e.Cb(6,49152,null,0,t.l,[e.j,e.p,e.F],null,null),(l()(),e.Db(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Pb(l,9).onClick(u)&&t),t}),s.Q,s.c)),e.Cb(8,49152,null,0,t.g,[e.j,e.p,e.F],null,null),e.Cb(9,16384,null,0,t.h,[[2,t.ib],t.Jb],null,null),(l()(),e.Db(10,0,null,0,2,"ion-title",[["class","title-ios"],["ion-text-capitalize",""]],null,null,null,s.Ab,s.M)),e.Cb(11,49152,null,0,t.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Wb(-1,0,["Delivery Address"])),(l()(),e.Db(13,0,null,null,24,"ion-content",[],null,null,null,s.Z,s.l)),e.Cb(14,49152,null,0,t.u,[e.j,e.p,e.F],null,null),(l()(),e.sb(16777216,null,0,1,null,h)),e.Cb(16,16384,null,0,d.k,[e.Y,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.Db(17,0,null,0,8,"ion-card",[["class","contentSection"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addAddress()&&e),e}),s.X,s.f)),e.Cb(18,49152,null,0,t.m,[e.j,e.p,e.F],null,null),(l()(),e.Db(19,0,null,0,6,"ion-card-content",[],null,null,null,s.T,s.g)),e.Cb(20,49152,null,0,t.n,[e.j,e.p,e.F],null,null),(l()(),e.Db(21,0,null,0,4,"div",[["class","dFlexAlignItemCenter"]],null,null,null,null,null)),(l()(),e.Db(22,0,null,null,1,"ion-icon",[["class","iconSize fontSize"],["name","add-circle-outline"]],null,null,null,s.cb,s.o)),e.Cb(23,49152,null,0,t.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Db(24,0,null,null,1,"h5",[["class","fontSize"],["ion-padding-start",""]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Add New Address"])),(l()(),e.Db(26,0,null,0,3,"ion-row",[["class","check-row"]],null,null,null,s.qb,s.C)),e.Cb(27,49152,null,0,t.jb,[e.j,e.p,e.F],null,null),(l()(),e.sb(16777216,null,0,1,null,m)),e.Cb(29,278528,null,0,d.j,[e.Y,e.T,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Db(30,0,null,0,7,"ion-segment",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Pb(l,33)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Pb(l,33)._handleChangeEvent(u.target)&&t),t}),s.tb,s.E)),e.Tb(5120,null,c.d,(function(l){return[l]}),[t.Qb]),e.Cb(32,49152,null,0,t.lb,[e.j,e.p,e.F],null,null),e.Cb(33,16384,null,0,t.Qb,[e.p],null,null),(l()(),e.Db(34,0,null,0,3,"ion-slides",[["pager","false"]],null,[[null,"ionSlideDidChange"]],(function(l,n,u){var e=!0;return"ionSlideDidChange"===n&&(e=!1!==l.component.slideChanged()&&e),e}),s.xb,s.J)),e.Cb(35,49152,[[1,4],["slides",4]],0,t.rb,[e.j,e.p,e.F],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),e.sb(16777216,null,0,1,null,P)),e.Cb(37,278528,null,0,d.j,[e.Y,e.T,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Db(38,0,null,null,11,"ion-footer",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.paymentPage()&&e),e}),s.ab,s.m)),e.Cb(39,49152,null,0,t.z,[e.j,e.p,e.F],null,null),(l()(),e.Db(40,0,null,0,9,"ion-toolbar",[["class","bgTransparent"]],null,null,null,s.Bb,s.N)),e.Cb(41,49152,null,0,t.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Db(42,0,null,0,7,"ion-row",[["class","bgTransparent"]],null,null,null,s.qb,s.C)),e.Cb(43,49152,null,0,t.jb,[e.j,e.p,e.F],null,null),(l()(),e.Db(44,0,null,0,5,"ion-col",[["class","bgTransparent"],["text-center",""]],null,null,null,s.Y,s.k)),e.Cb(45,49152,null,0,t.t,[e.j,e.p,e.F],null,null),e.Cb(46,16384,null,0,t.d,[e.p],null,null),(l()(),e.Db(47,0,null,0,2,"ion-button",[["class","btnRadius"],["color","primary"],["expand","full"]],null,null,null,s.R,s.d)),e.Cb(48,49152,null,0,t.k,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Wb(-1,0,["Proceed To Payment"]))],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,16,0,u.addressArray),l(n,23,0,"add-circle-outline"),l(n,29,0,u.Days),l(n,35,0,u.slideOpts,"false"),l(n,37,0,u.Days),l(n,48,0,"primary","full")}),null)}function y(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"app-delivery",[],null,null,null,v,p)),e.Cb(1,114688,null,0,o,[g.m,i.a,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.zb("app-delivery",o,y,{},{},[]);u.d(n,"DeliveryPageModuleNgFactory",(function(){return F}));var F=e.Ab(r,[],(function(l){return e.Mb([e.Nb(512,e.m,e.lb,[[8,[b.a,k]],[3,e.m],e.D]),e.Nb(4608,d.m,d.l,[e.z,[2,d.u]]),e.Nb(4608,c.i,c.i,[]),e.Nb(4608,t.b,t.b,[e.F,e.g]),e.Nb(4608,t.Ib,t.Ib,[t.b,e.m,e.w]),e.Nb(4608,t.Nb,t.Nb,[t.b,e.m,e.w]),e.Nb(1073742336,d.c,d.c,[]),e.Nb(1073742336,c.h,c.h,[]),e.Nb(1073742336,c.a,c.a,[]),e.Nb(1073742336,t.Eb,t.Eb,[]),e.Nb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.Nb(1073742336,r,r,[]),e.Nb(1024,g.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);