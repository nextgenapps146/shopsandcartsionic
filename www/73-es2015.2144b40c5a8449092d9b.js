(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{J3Yu:function(i,t,n){"use strict";n.r(t),n.d(t,"ion_loading",(function(){return m}));var e=n("dSyh"),o=n("AfW+"),s=(n("aiEM"),n("+4pY")),a=n("pori"),r=n("Dl6n"),d=n("YtD4");const c=i=>{const t=Object(s.a)(),n=Object(s.a)(),e=Object(s.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},l=i=>{const t=Object(s.a)(),n=Object(s.a)(),e=Object(s.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},p=i=>{const t=Object(s.a)(),n=Object(s.a)(),e=Object(s.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},g=i=>{const t=Object(s.a)(),n=Object(s.a)(),e=Object(s.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},m=class{constructor(i){Object(e.l)(this,i),this.presented=!1,this.mode=Object(e.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,a.a)},Object(a.e)(this.el),this.didPresent=Object(e.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(e.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(e.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(e.d)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=Object(e.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await Object(a.f)(this,"loadingEnter",c,p,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,i,t,"loadingLeave",l,g)}onDidDismiss(){return Object(a.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(a.h)(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:t}=this,n=Object(e.e)(this);return Object(e.i)(e.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(r.b)(this.cssClass)),{[n]:!0,"loading-translucent":this.translucent})},Object(e.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(e.i)("div",{class:"loading-wrapper",role:"dialog"},t&&Object(e.i)("div",{class:"loading-spinner"},Object(e.i)("ion-spinner",{name:t})),i&&Object(e.i)("div",{class:"loading-content",innerHTML:Object(d.a)(i)})))}get el(){return Object(e.f)(this)}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);