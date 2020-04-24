(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/payment/payment.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment/payment.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list ion-no-ion-margin color=\"light\">\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"medium\">\n          <ion-input clearInput type=\"text\" placeholder=\"Enter your promo code here\" [(ngModel)]=\"promoCode\" class=\"input\" ion-padding-horizontal\n            clear-input=\"true\" [disabled]=\"!!appliedPromoCode\"></ion-input>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-button (click)=\"applyPromoCode(promoCode)\" expand=\"block\" [disabled]=\"!promoCode || !!appliedPromoCode\">Apply</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"appliedPromoCode\" class=\"promoCodeDiv\">\n      <ion-col>\n        <div>\n          {{appliedPromoCode}} promo code applied\n          <ion-icon name=\"close\" float-right (click)=\"removePromoCode()\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-list-header color=\"light\">\n      <ion-label>Select payment method</ion-label>\n    </ion-list-header>\n    <ion-radio-group>\n      <ion-card *ngFor=\"let add of dataService.current_user.billing; let i = index;\">\n\n        <ion-card-content>\n          <div class=\"cardContentSection\">\n            <ion-radio slot=\"start\" value=\"{{i}}\" checked></ion-radio>\n            <ion-label ion-padding-start>\n              <ion-row class=\"full\" align-items-center>\n                <ion-col size=\"10\">\n                  <ion-row align-items-center>\n                    <p ion-no-ion-margin>\n                      <strong>XXXX-XXXX-XXXX-{{add.card_number}}</strong>\n                    </p>\n                  </ion-row>\n                  <ion-row align-items-center>\n                    <p class=\"small\" ion-no-ion-margin>Expiry date: {{add.expiry_date}}</p>\n                    <h6 class=\"small mycolor\" *ngIf=\"i==0\" ion-padding-start ion-no-ion-margin>PRIMARY</h6>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-label>\n            <img [src]=\"add.image\" class=\"cardImage\">\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-radio-group>\n\n\n  </ion-list>\n  <ion-row justify-content-center ion-padding-top ion-padding-bottom>\n    <ion-text color=\"primary\" (click)=\"addPayment()\">\n      {{addNewPayment ? 'Cancel' : 'Add new payment method'}}\n    </ion-text>\n  </ion-row>\n\n  <div *ngIf=\"addNewPayment\" class=\"add-payment-div contentSection\">\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-button fill=\"outline\" (click)=\"SaveCard()\" class=\"saveBtn\" float-right>Save</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text>\n          <span class=\"label\">Credit/Debit Number</span>\n        </ion-text>\n        <ion-input class=\"input\" ion-padding-horizontal type=\"number\" placeholder=\"Credit/Debit Number\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text>\n          <span class=\"label\">Card Type</span>\n        </ion-text>\n        <ion-select placeholder=\"Select Card Type\" class=\"input\" [(ngModel)]=\"cardDetails.cardType\">\n          <ion-select-option value=\"visa\">VISA</ion-select-option>\n          <ion-select-option value=\"master\">Master Card</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text>\n          <span class=\"label\">Security Code(CVV)</span>\n        </ion-text>\n        <ion-input class=\"input\" ion-padding-horizontal type=\"number\" placeholder=\"CVV\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text>\n          <span class=\"label\">Expiry Date</span>\n        </ion-text>\n        <ion-input class=\"input\" placeholder=\"MM/YY\" ion-padding-horizontal></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5 ion-no-ion-margin class=\"label\">Billing Zip/Postal Code</h5>\n        <h6 class=\"small\">The zip or postal code from the address registered for this card</h6>\n      </ion-col>\n      <ion-col>\n        <ion-input class=\"input\" placeholder=\"Zip/Postal Code\" ion-padding-horizontal></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"lockSection\">\n        <div>\n          <ion-icon name=\"lock\" class=\"icon\" class=\"lockIcon\"></ion-icon>\n        </div>\n        <div class=\"secureTextSection\">\n          <h5 ion-no-ion-margin class=\"label\">Secure Payment</h5>\n          <h6 class=\"small\" ion-no-ion-margin>Trusted by over 500 million shoppers in 50 countries</h6>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer (click)=\"done()\">\n  <ion-toolbar text-center>\n    <ion-button color=\"primary\" expand=\"block\">Pay ₹{{cart.grandTotal}} </ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");
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
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n.label {\n  font-size: 12px;\n}\n.small {\n  font-size: 9px;\n  color: #787878;\n}\n.icon {\n  font-size: 21px;\n}\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.add-payment-div {\n  border: 1px solid #ddd;\n  ion-margin-bottom: 10px;\n  padding: 10px;\n}\n.contentSection {\n  background: #fff;\n}\n.cardContentSection {\n  display: flex;\n  align-items: center;\n}\n.cardContentSection ion-label {\n  width: 100%;\n}\n.cardImage {\n  width: 40px;\n}\n.lockSection {\n  display: flex;\n  align-items: flex-start;\n}\n.lockIcon {\n  font-size: 21px;\n  padding-right: 8px;\n}\n.secureTextSection {\n  padding-top: 5px;\n}\n.promoCodeDiv {\n  border: 2px dashed red;\n  max-width: calc(100% - 20px);\n  margin: auto;\n  ion-margin-bottom: 10px;\n}\n.promoCodeDiv ion-icon {\n  color: red;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9zYW50b3NoYi9Eb2N1bWVudHMvbmV4dGdlbmFwcHMvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FEQ0o7QUNDQTtFQUNJLGVBQUE7QURFSjtBQ0FBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QURHSjtBQ0RBO0VBQ0ksZUFBQTtBRElKO0FDRkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FES0o7QUNIQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FETUo7QUNIQTtFQUNJLGdCQUFBO0FETUo7QUNIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRE1KO0FDSkk7RUFDSSxXQUFBO0FETVI7QUNGQTtFQUNJLFdBQUE7QURLSjtBQ0ZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FES0o7QUNGQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBREtKO0FDRkE7RUFDSSxnQkFBQTtBREtKO0FDSEE7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FETUo7QUNMSTtFQUNJLFVBQUE7RUFDSixlQUFBO0FET0oiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5pbnB1dCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2QyZDJkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG4uYWRkLXBheW1lbnQtZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaW9uLW1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXJkQ29udGVudFNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmRDb250ZW50U2VjdGlvbiBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmRJbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ubG9ja1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmxvY2tJY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5zZWN1cmVUZXh0U2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5wcm9tb0NvZGVEaXYge1xuICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IGF1dG87XG4gIGlvbi1tYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb21vQ29kZURpdiBpb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG4uaW5wdXQge1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG59XG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59XG4uYWRkLXBheW1lbnQtZGl2e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgaW9uLW1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRlbnRTZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXJkQ29udGVudFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxufVxuXG4uY2FyZEltYWdle1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4ubG9ja1NlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmxvY2tJY29ue1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5zZWN1cmVUZXh0U2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnByb21vQ29kZURpdntcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGlvbi1tYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _services_ProductService_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ProductService/products.service */ "./src/app/services/ProductService/products.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");









let PaymentPage = class PaymentPage {
    constructor(menuCtrl, dataService, alertController, route, toastCtrl, cart, fsServices, util, activeRoute, product) {
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.alertController = alertController;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.cart = cart;
        this.fsServices = fsServices;
        this.util = util;
        this.activeRoute = activeRoute;
        this.product = product;
        this.addNewPayment = false;
        this.cardDetails = { cardNumber: null, cardType: null, cardCvv: null, cardDate: null, zipCode: null };
        this.activeRoute.params.subscribe((res) => {
            this.selectedDay = res.selectedDay;
            this.selectedTime = res.selectedTime;
            this.addressvalue = res.addressvalue;
        });
    }
    ngOnInit() {
    }
    addPayment() {
        this.addNewPayment = !this.addNewPayment;
    }
    done() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let address = {};
            let promocode = {};
            for (let i = 0; i < this.fsServices.UserAddress.length; i++) {
                if (this.addressvalue === this.fsServices.UserAddress[i].id) {
                    address = this.fsServices.UserAddress[i];
                }
            }
            if (this.fsServices.promoCodes.length) {
                this.fsServices.promoCodes.forEach(offer => {
                    if (offer.code === this.appliedPromoCode) {
                        promocode = offer;
                    }
                });
            }
            this.fsServices.createUserOrder(this.cart.grandTotal, this.cart.addCart, promocode, this.selectedDay, this.selectedTime, address)
                .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    message: 'Your order Successfully Complete',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
                this.product.cartArray = this.cart.addCart;
                this.cart.addCart.map((ele) => {
                    ele.units = 0;
                });
                this.cart.addCart = [];
                this.cart.productQty = 0;
                this.cart.subTotal = 0;
                this.cart.grandTotal = 0;
                this.route.navigate(['home']);
            }));
        });
    }
    removePromoCode() {
        this.appliedPromoCode = '';
        this.util.presentToast('Promocode removed successfully!', true, 'bottom', 2100);
        this.cart.grandTotal = 0;
        for (let i = 0; i < this.cart.addCart.length; i++) {
            const productPrice = this.cart.addCart[i].salePrice;
            this.cart.grandTotal += productPrice * this.cart.addCart[i].units;
        }
    }
    applyPromoCode(promocode) {
        let matched = false;
        if (this.fsServices.promoCodes.length === 0) {
            this.util.openLoader();
            this.fsServices.getOffers().then((data) => {
                data.subscribe(codes => {
                    if (this.fsServices.promoCodes.length) {
                        this.fsServices.promoCodes.forEach(offer => {
                            if (offer.code === promocode) {
                                matched = true;
                                this.util.presentToast('Promocode applied successfully!', true, 'bottom', 2100);
                                this.appliedPromoCode = promocode;
                                this.promoCode = '';
                                this.cart.grandTotal = 0;
                                for (let i = 0; i < this.cart.addCart.length; i++) {
                                    const productPrice = this.cart.addCart[i].salePrice - ((this.cart.addCart[i].salePrice * parseInt(offer.discount)) / 100);
                                    this.cart.grandTotal += productPrice * this.cart.addCart[i].units;
                                }
                            }
                        });
                        if (!matched) {
                            this.util.presentToast('Promocode is not valid!', true, 'bottom', 2100);
                        }
                    }
                    else {
                        this.util.presentToast('No Promocode is available for now!', true, 'bottom', 2100);
                    }
                });
                this.util.closeLoading();
            });
        }
        else {
            this.fsServices.promoCodes.forEach(offer => {
                if (offer.code === promocode) {
                    matched = true;
                    this.util.presentToast('Promocode applied successfully!', true, 'bottom', 2100);
                }
            });
            if (!matched) {
                this.util.presentToast('Promocode is not valid!!', true, 'bottom', 2100);
            }
        }
    }
    back() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure?',
                message: 'Do you want to cancel entering your payment info?',
                buttons: [
                    {
                        text: 'Yes',
                        cssClass: 'mycolor',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'mycolor',
                        handler: () => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
    SaveCard() {
        if (this.cardDetails.cardType === 'visa') {
            this.dataService.current_user.billing.push({ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/visa.png' });
        }
        if (this.cardDetails.cardType === 'master') {
            this.dataService.current_user.billing.push({ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/mastercard.png' });
        }
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_8__["UtilsServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_ProductService_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] }
];
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/payment/payment.page.html"),
        styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"],
        _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_8__["UtilsServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_ProductService_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=payment-payment-module-es2015.js.map