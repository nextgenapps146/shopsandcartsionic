(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/otp/otp.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/otp/otp.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>Verification Code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-text text-center>\n      <h3 class=\"\" ion-padding-horizontal>Please enter Verification code sent On {{phoneNumber}}</h3>\n    </ion-text>\n  </div>\n  <div class=\"phonetopSection\">\n    <div class=\"phoneSection\" ion-padding-bottom>\n      <div class=\"divOuter ion-marginTop\">\n        <div class=\"divInner ion-marginTop\">\n          <ion-input type=\"tel\" class=\"inputBorder  ion-marginTop\" #otp1 maxlength=\"1\" [(ngModel)]=\"otpInput1\" (keyup)=\"next(otp2,'1')\"></ion-input>\n          <ion-input type=\"tel\" class=\"inputBorder ion-marginTop\" #otp2 maxlength=\"1\" [(ngModel)]=\"otpInput2\" (keyup)=\"next(otp3,'2')\"></ion-input>\n          <ion-input type=\"tel\" class=\"inputBorder ion-marginTop\" #otp3 maxlength=\"1\" [(ngModel)]=\"otpInput3\" (keyup)=\"next(otp4,'3')\"></ion-input>\n          <ion-input type=\"tel\" class=\"inputBorder ion-marginTop\" #otp4 maxlength=\"1\" [(ngModel)]=\"otpInput4\"></ion-input>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"policyText\" text-center>\n      <ion-button mode=\"md\" expand=\"full\" color=\"danger\" ion-ion-margin-top (click)=\"verify()\">Verify\n      </ion-button>\n      <div class=\"resendSection\">\n        <ion-text color=\"primary\" (click)=\"resendMsg()\">\n          <h5>Resend</h5>\n        </ion-text>\n        <ion-text>\n          <!-- <h6 id=\"timer\"></h6>left -->\n          <h6>5:24 left</h6>\n        </ion-text>\n      </div>\n    </div>\n  </div>\n  <div class=\"resendText\" text-center *ngIf=\"resendMsgToggle\" ion-ion-margin-top>\n    <ion-icon name=\"checkmark-circle-outline\" color=\"success\" class=\"successOtp\"></ion-icon>\n    <ion-text>\n      <h5 ion-no-padding ion-no-ion-margin>A One Time Password has been sent to {{phoneNumber}}</h5>\n    </ion-text>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/otp/otp.module.ts":
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "./src/app/otp/otp.page.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







var routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]
    }
];
var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
        })
    ], OtpPageModule);
    return OtpPageModule;
}());



/***/ }),

/***/ "./src/app/otp/otp.page.scss":
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.phonetopSection {\n  margin-top: 15%;\n}\n.phoneSection {\n  border: 1px solid #695e5e;\n  display: flex;\n  min-height: 65px;\n}\n.phoneSection .inputDiv {\n  display: flex;\n  align-items: center;\n}\nion-select.select-placeholder {\n  color: currentColor;\n  opacity: 1;\n  --opacity: 1;\n}\nion-select {\n  opacity: 1;\n  --opacity: 1;\n}\n.inputBorder {\n  border-bottom: 4px solid #d9d9d9;\n  margin-right: 10px;\n  width: 30px;\n  font-size: 24px;\n}\n.divInner {\n  left: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  display: flex;\n}\n.divOuter {\n  width: 100%;\n  overflow: hidden;\n  max-height: 37px;\n}\n.marginTop {\n  justify-content: center;\n  display: flex;\n}\n.btnSubmit {\n  --border-radius: 7px;\n}\n.resendSection {\n  display: flex;\n  justify-content: space-between;\n}\n.resendText {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.successOtp {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwL290cC5wYWdlLnNjc3MiLCIvVXNlcnMvdmlzaGFsL0RvY3VtZW50cy90ZXN0aW5nL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL290cC9vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0ksZUFBQTtBRENKO0FDR0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBREFKO0FDRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURBUjtBQ0dBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBREFKO0FDRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBRENKO0FDRUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURDSjtBQ0VFO0VBQ0UsT0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxhQUFBO0FEQ0o7QUNFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEQ0o7QUNDRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBREVKO0FDQ0U7RUFDRSxvQkFBQTtBREVKO0FDQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QURFSjtBQ0NFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QURFSjtBQ0FFO0VBQ0UsZUFBQTtBREdKIiwiZmlsZSI6InNyYy9hcHAvb3RwL290cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLnBob25ldG9wU2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuLnBob25lU2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2OTVlNWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG59XG4ucGhvbmVTZWN0aW9uIC5pbnB1dERpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1zZWxlY3Quc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgb3BhY2l0eTogMTtcbiAgLS1vcGFjaXR5OiAxO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgb3BhY2l0eTogMTtcbiAgLS1vcGFjaXR5OiAxO1xufVxuXG4uaW5wdXRCb3JkZXIge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2Q5ZDlkOTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZGl2SW5uZXIge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2T3V0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMzdweDtcbn1cblxuLm1hcmdpblRvcCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5yZXNlbmRTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmVzZW5kVGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1Y2Nlc3NPdHAge1xuICBmb250LXNpemU6IDMycHg7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuLnBob25ldG9wU2VjdGlvbntcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cblxuLnBob25lU2VjdGlvbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjk1ZTVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogNjVweDtcblxuICAgIC5pbnB1dERpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5pb24tc2VsZWN0LnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC0tb3BhY2l0eTogMTtcbn1cbmlvbi1zZWxlY3R7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtLW9wYWNpdHk6IDE7XG59XG5cbi5pbnB1dEJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkOWQ5ZDk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5kaXZJbm5lciB7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5kaXZPdXRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAzN3B4O1xuICB9XG4gIC5tYXJnaW5Ub3Age1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5idG5TdWJtaXQge1xuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgLnJlc2VuZFNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucmVzZW5kVGV4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zdWNjZXNzT3Rwe1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/otp/otp.page.ts":
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */




var OtpPage = /** @class */ (function () {
    function OtpPage(route, menuCtrl, actvRoute) {
        var _this = this;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.actvRoute = actvRoute;
        this.obj = document.getElementById('partitioned');
        this.resendMsgToggle = false;
        this.actvRoute.params.subscribe(function (params) {
            _this.phoneNumber = params.phoneNumber;
        });
        this.inputFocus2 = true;
    }
    OtpPage.prototype.ngOnInit = function () {
        // this.timerFunction();
    };
    OtpPage.prototype.verify = function () {
        this.route.navigate(['home']);
    };
    OtpPage.prototype.onchange = function (num) {
        if (num === 1) {
            this.inputFocus1 = false;
            this.inputFocus2 = true;
        }
        else if (num === 2) {
            this.inputFocus3 = true;
        }
        else if (num === 3) {
            this.inputFocus4 = true;
        }
        else {
            this.inputFocus1 = false;
            this.inputFocus2 = false;
            this.inputFocus3 = false;
            this.inputFocus4 = false;
        }
    };
    OtpPage.prototype.next = function (el, val) {
        var numberRegex = /^[0-9\s]*$/;
        var regexp = /^\S*$/;
        if (val === '1' && numberRegex.test(this.otpInput1) && regexp.test(this.otpInput1)) {
            el.setFocus();
        }
        else if (val === '2' && numberRegex.test(this.otpInput2) && regexp.test(this.otpInput2)) {
            el.setFocus();
        }
        else if (val === '3' && numberRegex.test(this.otpInput3) && regexp.test(this.otpInput3)) {
            el.setFocus();
        }
    };
    OtpPage.prototype.preview = function (el) {
        if (el === 'otp4') {
            el.setFocus();
        }
    };
    OtpPage.prototype.timerFunction = function () {
        var countDownDate = new Date('Jan 5, 2021 15:5:25').getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an element with id="demo"
            document.getElementById('timer').innerHTML = minutes + 'm ' + seconds + 's ';
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('timer').innerHTML = 'EXPIRED';
            }
        }, 1000);
    };
    OtpPage.prototype.resendMsg = function () {
        var _this = this;
        this.resendMsgToggle = true;
        setTimeout(function () { return _this.resendMsgToggle = false; }, 2000);
    };
    OtpPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    OtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! raw-loader!./otp.page.html */ "./node_modules/raw-loader/index.js!./src/app/otp/otp.page.html"),
            styles: [__webpack_require__(/*! ./otp.page.scss */ "./src/app/otp/otp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OtpPage);
    return OtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=otp-otp-module-es5.js.map