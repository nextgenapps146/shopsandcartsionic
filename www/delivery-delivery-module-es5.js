(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delivery/delivery.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delivery/delivery.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>Delivery Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-radio-group *ngIf=\"addressArray\" [(ngModel)]=\"addressvalue\">\n    <ion-item *ngFor=\"let add of addressArray|async; let i = index;\">\n      <ion-label>\n        <ion-row align-items-center>\n          <p ion-no-ion-margin>\n            <strong>{{add.title}} {{add.name}}</strong>\n          </p>\n        </ion-row>\n        <ion-row>\n          <p ion-no-ion-margin>{{add.flatNumbers}}</p>\n        </ion-row>\n        <ion-row>\n          <p ion-no-ion-margin>{{add.street}}</p>\n        </ion-row>\n        <ion-row>\n          <p ion-no-ion-margin>{{add.locality}}</p>\n        </ion-row>\n      </ion-label>\n      <ion-radio slot=\"start\" value={{add.id}} checked></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n  <ion-card class=\"contentSection\" (click)=\"addAddress()\">\n      <ion-card-content>\n        <div class=\"dFlexAlignItemCenter\">\n          <ion-icon name=\"add-circle-outline\" class=\"iconSize fontSize\"></ion-icon>\n          <h5 ion-padding-start class=\"fontSize\">Add New Address</h5>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  <ion-row class=\"check-row\">\n    <div *ngFor=\"let day of Days;let i=index\" [ngClass]=\"{'days':CurrentIndex == i}  \" (click)=\"slideTap(i)\" class=\"center\">\n      <ion-col [ngClass]=\"{'days':CurrentIndex == i}\" class=\"center\">\n        <span class=\"day-addr\">{{day}}</span>\n        <span *ngIf=\"check()\"></span>\n      </ion-col>\n    </div>\n  </ion-row>\n\n  <ion-segment>\n    <ion-slides (ionSlideDidChange)=\"slideChanged()\" pager=\"false\" [options]=\"slideOpts\" #slides>\n      <ion-slide *ngFor=\"let day of Days;let i=index\">\n        <div class=\"timeSlide bgTransparent\">\n          <ion-radio-group [(ngModel)]=\"selectedTime\">\n            <ion-list class=\"check-list bgTransparent\">\n              <ion-item *ngFor=\"let t of Time\" class=\"list-items bgTransparent\" lines=\"none\">\n                <ion-radio checked=\"false\" value={{t}}></ion-radio>\n                <ion-label ion-padding-start>\n                  <span class=\"check-label\">{{t}}</span>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-radio-group>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-segment>\n</ion-content>\n\n<ion-footer (click)=\"paymentPage()\">\n  <ion-toolbar class=\"bgTransparent\">\n    <ion-row class=\"bgTransparent\">\n      <ion-col text-center class=\"bgTransparent\">\n        <ion-button color=\"primary\" expand=\"full\" class=\"btnRadius\">Proceed To Payment</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/delivery/delivery.module.ts":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.module.ts ***!
  \*********************************************/
/*! exports provided: DeliveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPageModule", function() { return DeliveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _delivery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery.page */ "./src/app/delivery/delivery.page.ts");
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
        component: _delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]
    }
];
var DeliveryPageModule = /** @class */ (function () {
    function DeliveryPageModule() {
    }
    DeliveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]]
        })
    ], DeliveryPageModule);
    return DeliveryPageModule;
}());



/***/ }),

/***/ "./src/app/delivery/delivery.page.scss":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: red;\n}\n.swiper-pagination.swiper-pagination-bullets {\n  display: none !important;\n}\n.check-row {\n  padding-left: 16px;\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n}\n.center {\n  padding: 6px;\n  border-radius: 3px;\n}\n.days {\n  color: #fff;\n  background: var(--ion-color-primary);\n}\n.timeSlide {\n  width: 100%;\n}\n.ion-footer ion-toolbar {\n  --background:#eaeaea;\n  background: #eaeaea;\n}\nion-footer {\n  --background:#eaeaea;\n}\n.footer-md:before {\n  background-image: none;\n}\n.bgTransparent {\n  --background:#eaeaea;\n  background: #eaeaea;\n}\n.newAddress {\n  padding: 0 5px;\n}\n.contentSection {\n  background: #fff;\n}\n.cardContentSection {\n  display: flex;\n  align-items: center;\n}\n.cardContentSection ion-label {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkucGFnZS5zY3NzIiwiL1VzZXJzL3NhbnRvc2hiL0RvY3VtZW50cy9uZXh0Z2VuYXBwcy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9kZWxpdmVyeS9kZWxpdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBV0E7RUFDSSxlQUFBO0FEQUo7QUNHQTtFQUNJLHdCQUFBO0FEQUo7QUNHQTtFQUNHLGtCQUFBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0dBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FEQUo7QUNFQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtBRENKO0FDRUE7RUFDSSxXQUFBO0FEQ0o7QUNFQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QURDSjtBQ0VFO0VBQ0Usb0JBQUE7QURDSjtBQ0VFO0VBQ0Usc0JBQUE7QURDSjtBQ0NFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBREVKO0FDQ0U7RUFDSSxjQUFBO0FERU47QUNDRTtFQUNFLGdCQUFBO0FERUo7QUNDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBREVKO0FDQUk7RUFDSSxXQUFBO0FERVIiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyeS9kZWxpdmVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZGF5cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi50aW1lU2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6I2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDojZWFlYWVhO1xufVxuXG4uZm9vdGVyLW1kOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5iZ1RyYW5zcGFyZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNlYWVhZWE7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5cbi5uZXdBZGRyZXNzIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5jb250ZW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXJkQ29udGVudFNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmRDb250ZW50U2VjdGlvbiBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cbi5jb250ZW50U2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRze1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrLXJvd3tcbiAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcntcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmRheXN7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGltZVNsaWRle1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9uLWZvb3RlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiNlYWVhZWE7XG4gIH1cblxuICBpb24tZm9vdGVye1xuICAgIC0tYmFja2dyb3VuZDojZWFlYWVhO1xuICB9XG5cbiAgLmZvb3Rlci1tZDpiZWZvcmV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lO1xuICB9XG4gIC5iZ1RyYW5zcGFyZW50e1xuICAgIC0tYmFja2dyb3VuZDojZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6I2VhZWFlYTtcbiAgfVxuXG4gIC5uZXdBZGRyZXNze1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gIH1cblxuICAuY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNhcmRDb250ZW50U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/delivery/delivery.page.ts":
/*!*******************************************!*\
  !*** ./src/app/delivery/delivery.page.ts ***!
  \*******************************************/
/*! exports provided: DeliveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPage", function() { return DeliveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






var DeliveryPage = /** @class */ (function () {
    function DeliveryPage(route, utils, fireStore) {
        var _this = this;
        this.route = route;
        this.utils = utils;
        this.fireStore = fireStore;
        this.CurrentIndex = 0;
        this.slideOpts = {
            effect: 'flip'
        };
        this.SlideIndex = 0;
        this.selectedTime = '6AM - 9AM';
        this.addressvalue = '';
        this.selectedDay = 'Sunday';
        // this.address = 'D-Block,Malvia Nagar,Jaipur';
        this.Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        this.Time = ['6AM - 9AM', '10AM - 1PM', '4PM - 7PM', '8PM - 11PM', '9AM - 4PM'];
        this.fireStore.getUserAddress().then(function (data) {
            _this.addressArray = data;
        });
        this.utils.AddAdressBackUrl = '/delivery';
    }
    DeliveryPage.prototype.ngOnInit = function () {
    };
    DeliveryPage.prototype.addAddress = function () {
        this.route.navigate(['add-address']);
    };
    DeliveryPage.prototype.slideTap = function (index) {
        this.CurrentIndex = index;
        this.SlideIndex = index;
        this.slides.slideTo(index, 200);
    };
    DeliveryPage.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (res) {
            _this.CurrentIndex = res;
            _this.SlideIndex = res;
        });
    };
    DeliveryPage.prototype.check = function () {
    };
    DeliveryPage.prototype.paymentPage = function () {
        switch (this.SlideIndex) {
            case 0:
                this.selectedDay = 'Sunday';
                break;
            case 1:
                this.selectedDay = 'Monday';
                break;
            case 2:
                this.selectedDay = 'Tuesday';
                break;
            case 3:
                this.selectedDay = 'Wednesday';
                break;
            case 4:
                this.selectedDay = 'Thrusday';
                break;
            case 5:
                this.selectedDay = 'Friday';
                break;
            default:
                this.selectedDay = 'Saturday';
        }
        if (this.addressvalue) {
            this.route.navigate(['payment', {
                    selectedDay: this.selectedDay,
                    addressvalue: this.addressvalue,
                    selectedTime: this.selectedTime
                }]);
        }
        else {
            this.utils.presentToast('All field is required here', true, 'bottom', 2100);
        }
    };
    DeliveryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], DeliveryPage.prototype, "slides", void 0);
    DeliveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! raw-loader!./delivery.page.html */ "./node_modules/raw-loader/index.js!./src/app/delivery/delivery.page.html"),
            styles: [__webpack_require__(/*! ./delivery.page.scss */ "./src/app/delivery/delivery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"], _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
    ], DeliveryPage);
    return DeliveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module-es5.js.map