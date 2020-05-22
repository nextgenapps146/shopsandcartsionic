(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-store-create-store-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-store/create-store.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-store/create-store.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"title-ios\" ion-text-capitalize>Create Your Store</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"primary\">\n        <ion-searchbar #q placeholder=\"Search Location\" ion-no-padding (keyup.enter)=\"searchAddress(q.value)\"\n            (keyup)=\"validateSearch(q.value)\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!utils.storeInfo\">\n    <div class=\"contentSection\" padding>\n        <ion-list *ngIf=\"showAddressSearchList && possibleAddresses && possibleAddresses.length > 0\">\n            <ion-radio-group>\n                <ion-item *ngFor=\"let address of possibleAddresses; let i = index\">\n                    <ion-label>\n                        <h3>{{ address.streetnumber }} {{ address.route }}</h3>\n                        <p>{{ address.city }}, {{ address.state }} {{ address.zipcode }}</p>\n                    </ion-label>\n                    <ion-radio slot=\"start\" [value]=\"i\" (click)=\"selectAddress(address)\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>\n        </ion-list>\n\n        <span *ngIf=\"!showAddressSearchList\">\n            <ion-list class=\"f-list\" lines=\"full\">\n                <ion-list-header>\n                    General Information\n                </ion-list-header>\n                <ion-item class=\"f-item\" lines=\"full\">\n                    <ion-label position=\"floating\">Name of your store</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"storeName\" name=\"Store Name\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"f-item\" lines=\"full\">\n                    <ion-label position=\"floating\">Street Address</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"streetAddress\" name=\"street Address\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"f-item\" lines=\"full\">\n                    <ion-label position=\"floating\">City</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"city\" name=\"city\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"f-item\" lines=\"full\">\n                    <ion-label position=\"floating\">Zip Code</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"zipCode\" name=\"zipcode\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"f-item\" lines=\"full\">\n                    <ion-label position=\"floating\">State</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"state\" name=\"state\"></ion-input>\n                </ion-item>\n\n                <ion-list-header>\n                    Pick up/Delivery Options\n                </ion-list-header>\n\n                <ion-item>\n                    <ion-label>Curb Side Pickup</ion-label>\n                    <ion-toggle [(ngModel)]=\"isCurbSidePickup\"></ion-toggle>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Delivery</ion-label>\n                    <ion-toggle [(ngModel)]=\"isDelivery\"></ion-toggle>\n                </ion-item>\n\n                <ion-list-header>\n                    Payment Options\n                </ion-list-header>\n\n                <ion-item>\n                    <ion-label>Pay on Pickup</ion-label>\n                    <ion-toggle [(ngModel)]=\"isPayOnPickup\"></ion-toggle>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>Credit/Pay Later</ion-label>\n                    <ion-toggle [(ngModel)]=\"isCredit\"></ion-toggle>\n                </ion-item>\n\n            </ion-list>\n                <!-- <h6>Nickname of your address</h6>\n            <div class=\"BtnSection\">\n                <div class=\"btnOutline homeBtn\" (click)=\"addAddress('Home')\"\n                    [ngClass]=\"{'active': homeTrue,'btnColorBlack':!homeTrue,'btnColorWhite': homeTrue}\">Home</div>\n                <div class=\"btnOutline officeBtn\" (click)=\"addAddress('Office')\"\n                    [ngClass]=\"{'active': officeTrue,'btnColorBlack':!officeTrue,'btnColorWhite': officeTrue}\">Office\n                </div>\n            </div> -->\n            <br>\n            <ion-button expand=\"full\" color=\"primary\"\n                *ngIf=\"storeName !== '' && streetAddress !== '' && city !== '' && state !== ''\"\n                (click)=\"Continue()\">\n                Continue</ion-button>\n        </span>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/create-store/create-store.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/create-store/create-store.module.ts ***!
  \*****************************************************/
/*! exports provided: CreateStorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStorePageModule", function() { return CreateStorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-store.page */ "./src/app/create-store/create-store.page.ts");
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
        component: _create_store_page__WEBPACK_IMPORTED_MODULE_6__["CreateStorePage"]
    }
];
let CreateStorePageModule = class CreateStorePageModule {
};
CreateStorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_create_store_page__WEBPACK_IMPORTED_MODULE_6__["CreateStorePage"]]
    })
], CreateStorePageModule);



/***/ }),

/***/ "./src/app/create-store/create-store.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/create-store/create-store.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  height: 100%;\n}\n.radioSection {\n  padding-left: 10px;\n}\n.f-nav {\n  display: flex;\n  justify-content: baseline;\n}\n.f-form {\n  padding-top: 10px;\n  margin-left: 14px;\n}\n.flex {\n  display: flex;\n}\n.f-gender {\n  margin-right: 15px;\n  margin-left: 3px;\n}\n.f-list {\n  margin-top: 3px;\n}\n.f-item {\n  padding-left: 0px;\n}\n.active {\n  --background:var(--ion-color-primary);\n  background: var(--ion-color-primary);\n}\n.btnOutline {\n  border: 1px solid var(--ion-color-primary);\n  --border:1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n.homeBtn {\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  justify-content: center;\n}\n.officeBtn {\n  margin-left: 10px;\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  justify-content: center;\n}\n.BtnSection {\n  display: flex;\n}\n.btnColorWhite {\n  color: #fff;\n}\n.btnColorBlack {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXN0b3JlL2NyZWF0ZS1zdG9yZS5wYWdlLnNjc3MiLCIvVXNlcnMvdmlzaGFsL0RvY3VtZW50cy90ZXN0aW5nL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL2NyZWF0ZS1zdG9yZS9jcmVhdGUtc3RvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FEQ0o7QUNFQTtFQUNJLGtCQUFBO0FEQ0o7QUNDQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBREVKO0FDQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FER0o7QUNEQTtFQUNJLGFBQUE7QURJSjtBQ0ZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBREtKO0FDSEE7RUFDSSxlQUFBO0FETUo7QUNKQTtFQUNJLGlCQUFBO0FET0o7QUNKQTtFQUNJLHFDQUFBO0VBQ0Esb0NBQUE7QURPSjtBQ0xBO0VBQ0ksMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FEUUo7QUNOQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRFNKO0FDTEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRFFKO0FDTEE7RUFDSSxhQUFBO0FEUUo7QUNOQTtFQUNJLFdBQUE7QURTSjtBQ1BBO0VBQ0ksV0FBQTtBRFVKIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXN0b3JlL2NyZWF0ZS1zdG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmFkaW9TZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuXG4uZi1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mLWdlbmRlciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmYtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmYtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYnRuT3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaG9tZUJ0biB7XG4gIG1heC13aWR0aDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vZmZpY2VCdG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLkJ0blNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuQ29sb3JXaGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuQ29sb3JCbGFjayB7XG4gIGNvbG9yOiAjMDAwO1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cbi5jb250ZW50U2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJhZGlvU2VjdGlvbntcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbn1cbi5mLW5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmVcbn1cbi5mLWZvcm17XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4XG59XG4uZi1nZW5kZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xufVxuLmYtbGlzdHtcbiAgICBtYXJnaW4tdG9wOjNweDtcbn1cbi5mLWl0ZW17XG4gICAgcGFkZGluZy1sZWZ0OiAwcHhcbn1cblxuLmFjdGl2ZXtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmJ0bk91dGxpbmV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaG9tZUJ0bntcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLm9mZmljZUJ0bntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cbi5CdG5TZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uYnRuQ29sb3JXaGl0ZXtcbiAgICBjb2xvcjojZmZmO1xufVxuLmJ0bkNvbG9yQmxhY2t7XG4gICAgY29sb3I6IzAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-store/create-store.page.ts":
/*!***************************************************!*\
  !*** ./src/app/create-store/create-store.page.ts ***!
  \***************************************************/
/*! exports provided: CreateStorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStorePage", function() { return CreateStorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







let CreateStorePage = class CreateStorePage {
    constructor(route, geolocation, utils, toastCtrl, fireStore) {
        this.route = route;
        this.geolocation = geolocation;
        this.utils = utils;
        this.toastCtrl = toastCtrl;
        this.fireStore = fireStore;
        this.isCurbSidePickup = false;
        this.isDelivery = false;
        this.isPayOnPickup = false;
        this.isCredit = false;
        this.showAddressSearchList = false;
    }
    ngOnInit() {
        this.getSellerStoreInformation();
        if (this.utils.storeInfo && this.utils.storeInfo.id) {
            this.utils.presentToast('You Already have  a store Created!');
        }
        this.homeTrue = false;
        this.officeTrue = false;
        this.btnColor = 'undefined';
        this.possibleAddresses = [];
        this.geocoder = new google.maps.Geocoder();
    }
    // addAddress(item) {
    //     if (item === 'Home') {
    //         this.btnColor = 'primary';
    //         this.homeTrue = true;
    //         this.officeTrue = false;
    //     }
    //     if (item === 'Office') {
    //         this.officeTrue = true;
    //         this.homeTrue = false;
    //     }
    //     this.addresstype = item;
    // }
    getSellerStoreInformation() {
        if (this.utils.userInfo.id) {
            this.fireStore.getUserStore(this.utils.userInfo.id).then((data) => {
                data.subscribe(todos => {
                    // this.utils.storeInfo = todos[0];
                    // console.log(this.utils.storeInfo);
                    // this.utils.presentToast('You Already have  a store Created!', false, 'top', 6000);
                });
            });
        }
        else {
            // this.utils.presentToast('Store Not Found!');
            // logout -------
        }
    }
    Continue() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.storeName && this.streetAddress && this.city && this.state) {
                this.fireStore.createStore({
                    name: this.storeName,
                    streetaddress: this.streetAddress,
                    city: this.city,
                    state: this.state,
                    zipcode: this.zipCode,
                    iscurbsidepickup: this.isCurbSidePickup,
                    isdelivery: this.isDelivery,
                    ispayonpickup: this.isPayOnPickup,
                    iscredit: this.isCredit,
                    categories: []
                }).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastCtrl.create({
                        message: 'Add new Address Successfully',
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                    // TO DO -------------------
                    // this.route.navigate([this.utils.AddAdressBackUrl, { title: 'MyAddress' }]);
                })).catch(err => console.log(err));
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
    validateSearch(value) {
        if (value.length > 0) {
            this.showAddressSearchList = true;
        }
        else {
            this.showAddressSearchList = false;
            this.possibleAddresses = [];
        }
    }
    selectAddress(address) {
        this.showAddressSearchList = false;
        this.streetAddress = address.streetnumber + ' ' + address.route;
        this.city = address.city;
        this.state = address.state;
        this.zipCode = address.zipcode;
    }
    getUserLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
        });
    }
    getGeoLocation(lat, lng) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const _instance = this;
            if (navigator.geolocation) {
                const latlng = yield new google.maps.LatLng(lat, lng);
                const request = { latLng: latlng };
                // use Ionic Native geocode if cordova is available -- fix this later
                this.geocoder.geocode(request, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        _instance.preparePossibleAdressesList(results);
                    }
                });
            }
        });
    }
    searchAddress(address) {
        this.showAddressSearchList = true;
        this.utils.openLoader();
        const _instance = this;
        this.possibleAddresses = [];
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                _instance.preparePossibleAdressesList(results);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    preparePossibleAdressesList(results) {
        if (results && results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                const result = results[i], rsltAdrComponent = result.address_components;
                if (result != null) {
                    const address = {};
                    for (let i = 0; i < rsltAdrComponent.length; i++) {
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('street_number')) {
                            address.streetnumber = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('route')) {
                            address.route = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
                            address.city = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('administrative_area_level_1')) {
                            address.state = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('country')) {
                            address.country = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('postal_code')) {
                            address.zipcode = rsltAdrComponent[i].short_name;
                        }
                    }
                    if (address.route && address.city) {
                        this.possibleAddresses.push(address);
                    }
                }
                else {
                    this.utils.presentToast('No Results Found!', true, 'bottom', 2100);
                }
            }
            this.utils.closeLoading();
        }
    }
};
CreateStorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_6__["UtilsServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
CreateStorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-store',
        template: __webpack_require__(/*! raw-loader!./create-store.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-store/create-store.page.html"),
        styles: [__webpack_require__(/*! ./create-store.page.scss */ "./src/app/create-store/create-store.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_6__["UtilsServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], CreateStorePage);



/***/ })

}]);
//# sourceMappingURL=create-store-create-store-module-es2015.js.map