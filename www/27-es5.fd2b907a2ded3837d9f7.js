(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"6Mca":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("ZZ/e"),o=function(){function n(n,l,u){var t=this;this.route=n,this.menuCtrl=l,this.actvRoute=u,this.obj=document.getElementById("partitioned"),this.resendMsgToggle=!1,this.actvRoute.params.subscribe((function(n){t.phoneNumber=n.phoneNumber})),this.inputFocus2=!0}return n.prototype.ngOnInit=function(){},n.prototype.verify=function(){this.route.navigate(["home"])},n.prototype.onchange=function(n){1===n?(this.inputFocus1=!1,this.inputFocus2=!0):2===n?this.inputFocus3=!0:3===n?this.inputFocus4=!0:(this.inputFocus1=!1,this.inputFocus2=!1,this.inputFocus3=!1,this.inputFocus4=!1)},n.prototype.next=function(n,l){var u=/^[0-9\s]*$/,t=/^\S*$/;("1"===l&&u.test(this.otpInput1)&&t.test(this.otpInput1)||"2"===l&&u.test(this.otpInput2)&&t.test(this.otpInput2)||"3"===l&&u.test(this.otpInput3)&&t.test(this.otpInput3))&&n.setFocus()},n.prototype.preview=function(n){"otp4"===n&&n.setFocus()},n.prototype.timerFunction=function(){var n=new Date("Jan 5, 2021 15:5:25").getTime(),l=setInterval((function(){var u=(new Date).getTime(),t=n-u,e=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);document.getElementById("timer").innerHTML=e+"m "+o+"s ",t<0&&(clearInterval(l),document.getElementById("timer").innerHTML="EXPIRED")}),1e3)},n.prototype.resendMsg=function(){var n=this;this.resendMsgToggle=!0,setTimeout((function(){return n.resendMsgToggle=!1}),2e3)},n}(),i=function(){return function(){}}(),a=u("pMnS"),b=u("oBZk"),r=u("gIcY"),c=u("Ip0R"),s=u("ZYCi"),p=t.Db({encapsulation:0,styles:[['@charset "UTF-8";.phonetopSection[_ngcontent-%COMP%]{margin-top:15%}.phoneSection[_ngcontent-%COMP%]{border:1px solid #695e5e;display:flex;min-height:65px}.phoneSection[_ngcontent-%COMP%]   .inputDiv[_ngcontent-%COMP%]{display:flex;align-items:center}ion-select.select-placeholder[_ngcontent-%COMP%]{color:currentColor;opacity:1;--opacity:1}ion-select[_ngcontent-%COMP%]{opacity:1;--opacity:1}.inputBorder[_ngcontent-%COMP%]{border-bottom:4px solid #d9d9d9;margin-right:10px;width:30px;font-size:24px}.divInner[_ngcontent-%COMP%]{left:0;position:-webkit-sticky;position:sticky;display:flex}.divOuter[_ngcontent-%COMP%]{width:100%;overflow:hidden;max-height:37px}.marginTop[_ngcontent-%COMP%]{justify-content:center;display:flex}.btnSubmit[_ngcontent-%COMP%]{--border-radius:7px}.resendSection[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.resendText[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center}.successOtp[_ngcontent-%COMP%]{font-size:32px}']],data:{}});function g(n){return t.ac(0,[(n()(),t.Fb(0,0,null,null,7,"div",[["class","resendText"],["ion-ion-margin-top",""],["text-center",""]],null,null,null,null,null)),t.Eb(1,16384,null,0,e.d,[t.p],null,null),(n()(),t.Fb(2,0,null,null,1,"ion-icon",[["class","successOtp"],["color","success"],["name","checkmark-circle-outline"]],null,null,null,b.cb,b.o)),t.Eb(3,49152,null,0,e.C,[t.j,t.p,t.H],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.Fb(4,0,null,null,3,"ion-text",[],null,null,null,b.zb,b.L)),t.Eb(5,49152,null,0,e.xb,[t.j,t.p,t.H],null,null),(n()(),t.Fb(6,0,null,0,1,"h5",[["ion-no-ion-margin",""],["ion-no-padding",""]],null,null,null,null,null)),(n()(),t.Yb(7,null,["A One Time Password has been sent to ",""]))],(function(n,l){n(l,3,0,"success","checkmark-circle-outline")}),(function(n,l){n(l,7,0,l.component.phoneNumber)}))}function d(n){return t.ac(0,[(n()(),t.Fb(0,0,null,null,11,"ion-header",[],null,null,null,b.bb,b.n)),t.Eb(1,49152,null,0,e.B,[t.j,t.p,t.H],null,null),(n()(),t.Fb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,b.Bb,b.N)),t.Eb(3,49152,null,0,e.Cb,[t.j,t.p,t.H],{color:[0,"color"]},null),(n()(),t.Fb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.S,b.e)),t.Eb(5,49152,null,0,e.l,[t.j,t.p,t.H],null,null),(n()(),t.Fb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Rb(n,8).onClick(u)&&e),e}),b.Q,b.c)),t.Eb(7,49152,null,0,e.g,[t.j,t.p,t.H],null,null),t.Eb(8,16384,null,0,e.h,[[2,e.ib],e.Jb],null,null),(n()(),t.Fb(9,0,null,0,2,"ion-title",[["class","title-ios"],["ion-text-capitalize",""]],null,null,null,b.Ab,b.M)),t.Eb(10,49152,null,0,e.Ab,[t.j,t.p,t.H],null,null),(n()(),t.Yb(-1,0,["Verification Code"])),(n()(),t.Fb(12,0,null,null,64,"ion-content",[["padding",""]],null,null,null,b.Z,b.l)),t.Eb(13,49152,null,0,e.u,[t.j,t.p,t.H],null,null),t.Eb(14,16384,null,0,e.d,[t.p],null,null),(n()(),t.Fb(15,0,null,0,5,"div",[],null,null,null,null,null)),(n()(),t.Fb(16,0,null,null,4,"ion-text",[["text-center",""]],null,null,null,b.zb,b.L)),t.Eb(17,49152,null,0,e.xb,[t.j,t.p,t.H],null,null),t.Eb(18,16384,null,0,e.d,[t.p],null,null),(n()(),t.Fb(19,0,null,0,1,"h3",[["class",""],["ion-padding-horizontal",""]],null,null,null,null,null)),(n()(),t.Yb(20,null,["Please enter Verification code sent On ",""])),(n()(),t.Fb(21,0,null,0,53,"div",[["class","phonetopSection"]],null,null,null,null,null)),(n()(),t.Fb(22,0,null,null,38,"div",[["class","phoneSection"],["ion-padding-bottom",""]],null,null,null,null,null)),(n()(),t.Fb(23,0,null,null,37,"div",[["class","divOuter ion-marginTop"]],null,null,null,null,null)),(n()(),t.Fb(24,0,null,null,36,"div",[["class","divInner ion-marginTop"]],null,null,null,null,null)),(n()(),t.Fb(25,0,null,null,8,"ion-input",[["class","inputBorder  ion-marginTop"],["maxlength","1"],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Rb(n,28)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Rb(n,28)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.otpInput1=u)&&e),"keyup"===l&&(e=!1!==o.next(t.Rb(n,42),"1")&&e),e}),b.eb,b.q)),t.Eb(26,540672,null,0,r.b,[],{maxlength:[0,"maxlength"]},null),t.Vb(1024,null,r.c,(function(n){return[n]}),[r.b]),t.Eb(28,16384,null,0,e.Rb,[t.p],null,null),t.Vb(1024,null,r.d,(function(n){return[n]}),[e.Rb]),t.Eb(30,671744,null,0,r.g,[[8,null],[6,r.c],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Vb(2048,null,r.e,null,[r.g]),t.Eb(32,16384,null,0,r.f,[[4,r.e]],null,null),t.Eb(33,49152,[["otp1",4]],0,e.G,[t.j,t.p,t.H],{maxlength:[0,"maxlength"],type:[1,"type"]},null),(n()(),t.Fb(34,0,null,null,8,"ion-input",[["class","inputBorder ion-marginTop"],["maxlength","1"],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Rb(n,37)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Rb(n,37)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.otpInput2=u)&&e),"keyup"===l&&(e=!1!==o.next(t.Rb(n,51),"2")&&e),e}),b.eb,b.q)),t.Eb(35,540672,null,0,r.b,[],{maxlength:[0,"maxlength"]},null),t.Vb(1024,null,r.c,(function(n){return[n]}),[r.b]),t.Eb(37,16384,null,0,e.Rb,[t.p],null,null),t.Vb(1024,null,r.d,(function(n){return[n]}),[e.Rb]),t.Eb(39,671744,null,0,r.g,[[8,null],[6,r.c],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Vb(2048,null,r.e,null,[r.g]),t.Eb(41,16384,null,0,r.f,[[4,r.e]],null,null),t.Eb(42,49152,[["otp2",4]],0,e.G,[t.j,t.p,t.H],{maxlength:[0,"maxlength"],type:[1,"type"]},null),(n()(),t.Fb(43,0,null,null,8,"ion-input",[["class","inputBorder ion-marginTop"],["maxlength","1"],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Rb(n,46)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Rb(n,46)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.otpInput3=u)&&e),"keyup"===l&&(e=!1!==o.next(t.Rb(n,60),"3")&&e),e}),b.eb,b.q)),t.Eb(44,540672,null,0,r.b,[],{maxlength:[0,"maxlength"]},null),t.Vb(1024,null,r.c,(function(n){return[n]}),[r.b]),t.Eb(46,16384,null,0,e.Rb,[t.p],null,null),t.Vb(1024,null,r.d,(function(n){return[n]}),[e.Rb]),t.Eb(48,671744,null,0,r.g,[[8,null],[6,r.c],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Vb(2048,null,r.e,null,[r.g]),t.Eb(50,16384,null,0,r.f,[[4,r.e]],null,null),t.Eb(51,49152,[["otp3",4]],0,e.G,[t.j,t.p,t.H],{maxlength:[0,"maxlength"],type:[1,"type"]},null),(n()(),t.Fb(52,0,null,null,8,"ion-input",[["class","inputBorder ion-marginTop"],["maxlength","1"],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Rb(n,55)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Rb(n,55)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.otpInput4=u)&&e),e}),b.eb,b.q)),t.Eb(53,540672,null,0,r.b,[],{maxlength:[0,"maxlength"]},null),t.Vb(1024,null,r.c,(function(n){return[n]}),[r.b]),t.Eb(55,16384,null,0,e.Rb,[t.p],null,null),t.Vb(1024,null,r.d,(function(n){return[n]}),[e.Rb]),t.Eb(57,671744,null,0,r.g,[[8,null],[6,r.c],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Vb(2048,null,r.e,null,[r.g]),t.Eb(59,16384,null,0,r.f,[[4,r.e]],null,null),t.Eb(60,49152,[["otp4",4]],0,e.G,[t.j,t.p,t.H],{maxlength:[0,"maxlength"],type:[1,"type"]},null),(n()(),t.Fb(61,0,null,null,13,"div",[["class","policyText"],["text-center",""]],null,null,null,null,null)),t.Eb(62,16384,null,0,e.d,[t.p],null,null),(n()(),t.Fb(63,0,null,null,2,"ion-button",[["color","danger"],["expand","full"],["ion-ion-margin-top",""],["mode","md"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.verify()&&t),t}),b.R,b.d)),t.Eb(64,49152,null,0,e.k,[t.j,t.p,t.H],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(n()(),t.Yb(-1,0,["Verify "])),(n()(),t.Fb(66,0,null,null,8,"div",[["class","resendSection"]],null,null,null,null,null)),(n()(),t.Fb(67,0,null,null,3,"ion-text",[["color","primary"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.resendMsg()&&t),t}),b.zb,b.L)),t.Eb(68,49152,null,0,e.xb,[t.j,t.p,t.H],{color:[0,"color"]},null),(n()(),t.Fb(69,0,null,0,1,"h5",[],null,null,null,null,null)),(n()(),t.Yb(-1,null,["Resend"])),(n()(),t.Fb(71,0,null,null,3,"ion-text",[],null,null,null,b.zb,b.L)),t.Eb(72,49152,null,0,e.xb,[t.j,t.p,t.H],null,null),(n()(),t.Fb(73,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Yb(-1,null,["5:24 left"])),(n()(),t.ub(16777216,null,0,1,null,g)),t.Eb(76,16384,null,0,c.k,[t.ab,t.V],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,3,0,"primary"),n(l,26,0,"1"),n(l,30,0,u.otpInput1),n(l,33,0,"1","tel"),n(l,35,0,"1"),n(l,39,0,u.otpInput2),n(l,42,0,"1","tel"),n(l,44,0,"1"),n(l,48,0,u.otpInput3),n(l,51,0,"1","tel"),n(l,53,0,"1"),n(l,57,0,u.otpInput4),n(l,60,0,"1","tel"),n(l,64,0,"danger","full","md"),n(l,68,0,"primary"),n(l,76,0,u.resendMsgToggle)}),(function(n,l){n(l,20,0,l.component.phoneNumber),n(l,25,0,t.Rb(l,26).maxlength?t.Rb(l,26).maxlength:null,t.Rb(l,32).ngClassUntouched,t.Rb(l,32).ngClassTouched,t.Rb(l,32).ngClassPristine,t.Rb(l,32).ngClassDirty,t.Rb(l,32).ngClassValid,t.Rb(l,32).ngClassInvalid,t.Rb(l,32).ngClassPending),n(l,34,0,t.Rb(l,35).maxlength?t.Rb(l,35).maxlength:null,t.Rb(l,41).ngClassUntouched,t.Rb(l,41).ngClassTouched,t.Rb(l,41).ngClassPristine,t.Rb(l,41).ngClassDirty,t.Rb(l,41).ngClassValid,t.Rb(l,41).ngClassInvalid,t.Rb(l,41).ngClassPending),n(l,43,0,t.Rb(l,44).maxlength?t.Rb(l,44).maxlength:null,t.Rb(l,50).ngClassUntouched,t.Rb(l,50).ngClassTouched,t.Rb(l,50).ngClassPristine,t.Rb(l,50).ngClassDirty,t.Rb(l,50).ngClassValid,t.Rb(l,50).ngClassInvalid,t.Rb(l,50).ngClassPending),n(l,52,0,t.Rb(l,53).maxlength?t.Rb(l,53).maxlength:null,t.Rb(l,59).ngClassUntouched,t.Rb(l,59).ngClassTouched,t.Rb(l,59).ngClassPristine,t.Rb(l,59).ngClassDirty,t.Rb(l,59).ngClassValid,t.Rb(l,59).ngClassInvalid,t.Rb(l,59).ngClassPending)}))}function h(n){return t.ac(0,[(n()(),t.Fb(0,0,null,null,1,"app-otp",[],null,null,null,d,p)),t.Eb(1,114688,null,0,o,[s.m,e.Hb,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var m=t.Bb("app-otp",o,h,{},{},[]);u.d(l,"OtpPageModuleNgFactory",(function(){return x}));var x=t.Cb(i,[],(function(n){return t.Ob([t.Pb(512,t.m,t.nb,[[8,[a.a,m]],[3,t.m],t.F]),t.Pb(4608,c.m,c.l,[t.B,[2,c.u]]),t.Pb(4608,r.i,r.i,[]),t.Pb(4608,e.b,e.b,[t.H,t.g]),t.Pb(4608,e.Ib,e.Ib,[e.b,t.m,t.x]),t.Pb(4608,e.Nb,e.Nb,[e.b,t.m,t.x]),t.Pb(1073742336,c.c,c.c,[]),t.Pb(1073742336,r.h,r.h,[]),t.Pb(1073742336,r.a,r.a,[]),t.Pb(1073742336,e.Eb,e.Eb,[]),t.Pb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),t.Pb(1073742336,i,i,[]),t.Pb(1024,s.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);