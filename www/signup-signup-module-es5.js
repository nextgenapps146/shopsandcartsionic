(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content ion-no-padding>\n    <div class=\"main\">\n      <ion-card ion-no-ion-margin class=\"card\">\n          <ion-card-content>\n              <ion-row class=\"row\">\n                  <div class=\"fire-logo\">\n                      <img src=\"../../assets/imgs/icon.png\" class=\"img-logo\">\n                      <ion-text><h2 ion-no-ion-margin ion-margin-vertical text-center>Sign Up</h2></ion-text>\n                    </div>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                    <ion-input type=\"text\" placeholder=\"User Name\" [(ngModel)]=\"first_name\" class=\"input\" ion-padding-horizontal></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-input clearInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"input\" ion-padding-horizontal></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-input clearInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" class=\"input\" ion-padding-horizontal></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-button expand=\"block\" color=\"undefined\" class=\"btn-transition\" (click)=\"signup()\" ><strong >Create an Account</strong></ion-button>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                      <ion-button expand=\"block\" fill=\"outline\" color=\"undefined\" (click)=\"util.navigate('login')\" class=\"btn-color\"><strong>Have an account? Sign in</strong></ion-button>\n                    </ion-col>\n                  </ion-row>\n          </ion-card-content>\n        </ion-card>\n  </div>\n  </ion-content>\n\n"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nion-card {\n  --background: #fff;\n  margin: 20px;\n}\n\n.img-logo {\n  height: 150px;\n  width: 150px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.btn-transition {\n  background: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.btn-color {\n  color: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  height: 150px;\n  width: 150px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNoYWwvRG9jdW1lbnRzL3Rlc3RpbmcvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2REFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSw2REFBQTtBQ0tKOztBREhBO0VBQ0ksd0RBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICAvLyBib3gtc2hhZG93OiBub25lO1xuICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzpub25lO1xufVxuLmltZy1sb2dve1xuICAgIGhlaWdodDoxNTBweDtcbiAgICB3aWR0aDoxNTBweDtcbn1cbi5maXJlLWxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdyaWR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bi10cmFuc2l0aW9ue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XG59XG4uYnRuLWNvbG9ye1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1nLWxvZ297XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIHdpZHRoOjE1MHB4O1xufVxuLmZpcmUtbG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59IiwiLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLXRyYW5zaXRpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uZmlyZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/* harmony import */ var _services_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Auth/auth-service.service */ "./src/app/services/Auth/auth-service.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");






var SignupPage = /** @class */ (function () {
    function SignupPage(util, fireStore, menuCtrl, authServ) {
        this.util = util;
        this.fireStore = fireStore;
        this.menuCtrl = menuCtrl;
        this.authServ = authServ;
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password = '';
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.first_name !== '' && this.email !== '' && this.password !== '' && this.util.validateEmail(this.email)) {
            this.authServ.createAccount(this.email, this.password, this.first_name).then(function (userData) {
                _this.fireStore.updateUserDeviceToken();
                _this.util.presentToast('Thanks for Signup', true, 'bottom', 2100);
                _this.util.navigate('', false);
            }).catch(function (err) {
                if (err) {
                    _this.util.presentToast("" + err, true, 'bottom', 2100);
                }
            });
        }
        else {
            this.util.presentToast('Wrong Input/Invalid Details', true, 'bottom', 2100);
        }
    };
    SignupPage.ctorParameters = function () { return [
        { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsServiceService"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsServiceService"], _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es5.js.map