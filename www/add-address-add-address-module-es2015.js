(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-address-add-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-address/add-address.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-address/add-address.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>Add address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"contentSection\" padding>\n\n    <div class=\"flex radioSection\">\n      <ion-radio-group [(ngModel)]=\"title\" mode=\"md\">\n        <ion-radio checked mode=\"md\" name=\"gender\" value=\"Mr\"></ion-radio>\n        <span class=\"f-gender\">\n          Mr </span>\n        <ion-radio mode=\"md\" name=\"gender\" value=\"Mrs\"></ion-radio>\n        <span class=\"f-gender\">\n          Mrs </span>\n        <ion-radio mode=\"md\" name=\"gender\" value=\"Miss\"></ion-radio>\n        <span class=\"f-gender\">\n          Miss </span>\n      </ion-radio-group>\n    </div>\n\n    <ion-list class=\"f-list\" lines=\"full\">\n\n      <ion-item class=\"f-item\" lines=\"full\">\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"name \" name=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"f-item\" lines=\"full\">\n        <ion-label position=\"floating\">Flat/House/Office No.</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"flatNumber\" name=\"flatNumber\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"f-item\" lines=\"full\">\n        <ion-label position=\"floating\">Street/Society/Office Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"street\" name=\"street\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"f-item\" lines=\"full\">\n        <ion-label position=\"floating\">Locality</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"locality\" name=\"locality\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div>\n      <h6>Nickname of your address</h6>\n      <div class=\"BtnSection\">\n        <div class=\"btnOutline homeBtn\" (click)=\"addAddress('Home')\" [ngClass]=\"{'active': homeTrue,'btnColorBlack':!homeTrue,'btnColorWhite': homeTrue}\">Home</div>\n        <div class=\"btnOutline officeBtn\" (click)=\"addAddress('Office')\" [ngClass]=\"{'active': officeTrue,'btnColorBlack':!officeTrue,'btnColorWhite': officeTrue}\">Office</div>\n      </div>\n      <br>\n      <ion-button expand=\"full\" color=\"primary\" *ngIf=\"locality !== '' && street !== '' && flatNumber !== '' && name !== ''\" (click)=\"Continue()\">Continue</ion-button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-address/add-address.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.module.ts ***!
  \***************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address.page */ "./src/app/add-address/add-address.page.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







const routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]
    }
];
let AddAddressPageModule = class AddAddressPageModule {
};
AddAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })
], AddAddressPageModule);



/***/ }),

/***/ "./src/app/add-address/add-address.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  height: 100%;\n}\n.radioSection {\n  padding-left: 10px;\n}\n.f-nav {\n  display: flex;\n  justify-content: baseline;\n}\n.f-form {\n  padding-top: 10px;\n  margin-left: 14px;\n}\n.flex {\n  display: flex;\n}\n.f-gender {\n  margin-right: 15px;\n  margin-left: 3px;\n}\n.f-list {\n  margin-top: 3px;\n}\n.f-item {\n  padding-left: 0px;\n}\n.active {\n  --background:var(--ion-color-primary);\n  background: var(--ion-color-primary);\n}\n.btnOutline {\n  border: 1px solid var(--ion-color-primary);\n  --border:1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n.homeBtn {\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  justify-content: center;\n}\n.officeBtn {\n  margin-left: 10px;\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  justify-content: center;\n}\n.BtnSection {\n  display: flex;\n}\n.btnColorWhite {\n  color: #fff;\n}\n.btnColorBlack {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwiL1VzZXJzL3Zpc2hhbC9Eb2N1bWVudHMvdGVzdGluZy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBVUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksa0JBQUE7QURDSjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FERUo7QUNBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QURHSjtBQ0RBO0VBQ0ksYUFBQTtBRElKO0FDRkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FES0o7QUNIQTtFQUNJLGVBQUE7QURNSjtBQ0pBO0VBQ0ksaUJBQUE7QURPSjtBQ0pBO0VBQ0kscUNBQUE7RUFDQSxvQ0FBQTtBRE9KO0FDTEE7RUFDSSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QURRSjtBQ05BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FEU0o7QUNMQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FEUUo7QUNMQTtFQUNJLGFBQUE7QURRSjtBQ05BO0VBQ0ksV0FBQTtBRFNKO0FDUEE7RUFDSSxXQUFBO0FEVUoiLCJmaWxlIjoic3JjL2FwcC9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmFkaW9TZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuXG4uZi1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mLWdlbmRlciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmYtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmYtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYnRuT3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaG9tZUJ0biB7XG4gIG1heC13aWR0aDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vZmZpY2VCdG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLkJ0blNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuQ29sb3JXaGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuQ29sb3JCbGFjayB7XG4gIGNvbG9yOiAjMDAwO1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cbi5jb250ZW50U2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJhZGlvU2VjdGlvbntcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbn1cbi5mLW5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmVcbn1cbi5mLWZvcm17XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4XG59XG4uZi1nZW5kZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xufVxuLmYtbGlzdHtcbiAgICBtYXJnaW4tdG9wOjNweDtcbn1cbi5mLWl0ZW17XG4gICAgcGFkZGluZy1sZWZ0OiAwcHhcbn1cblxuLmFjdGl2ZXtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmJ0bk91dGxpbmV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaG9tZUJ0bntcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLm9mZmljZUJ0bntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cbi5CdG5TZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uYnRuQ29sb3JXaGl0ZXtcbiAgICBjb2xvcjojZmZmO1xufVxuLmJ0bkNvbG9yQmxhY2t7XG4gICAgY29sb3I6IzAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-address/add-address.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-address/add-address.page.ts ***!
  \*************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let AddAddressPage = class AddAddressPage {
    constructor(route, utils, toastCtrl, fireStore) {
        this.route = route;
        this.utils = utils;
        this.toastCtrl = toastCtrl;
        this.fireStore = fireStore;
    }
    ngOnInit() {
        this.homeTrue = false;
        this.officeTrue = false;
        this.btnColor = 'undefined';
    }
    addAddress(item) {
        if (item === 'Home') {
            this.btnColor = 'primary';
            this.homeTrue = true;
            this.officeTrue = false;
        }
        if (item === 'Office') {
            this.officeTrue = true;
            this.homeTrue = false;
        }
        this.addresstype = item;
    }
    Continue() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.name && this.flatNumber && this.street && this.locality && this.title && this.addresstype) {
                this.fireStore.addUserAddress({
                    name: this.name, flatNumber: this.flatNumber, street: this.street, locality: this.locality, title: this.title, addresstype: this.addresstype
                }).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastCtrl.create({
                        message: 'Add new Address Successfully',
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                    this.route.navigate([this.utils.AddAdressBackUrl, { title: 'MyAddress' }]);
                }));
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'All fields are required here',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        });
    }
};
AddAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
AddAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-address',
        template: __webpack_require__(/*! raw-loader!./add-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-address/add-address.page.html"),
        styles: [__webpack_require__(/*! ./add-address.page.scss */ "./src/app/add-address/add-address.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], AddAddressPage);



/***/ })

}]);
//# sourceMappingURL=add-address-add-address-module-es2015.js.map