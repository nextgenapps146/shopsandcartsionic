(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-address/my-address.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-address/my-address.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-radio-group *ngIf=\"address\">\n  <ion-item *ngFor=\"let add of address|async; let i = index;\">\n    <ion-label>\n      <ion-row align-items-center>\n        <p ion-no-ion-margin>\n          <strong>{{add.title}} {{add.name}}</strong>\n        </p>\n        <h6 class=\"small mycolor\" *ngIf=\"i==0\" ion-padding-start>PRIMARY</h6>\n      </ion-row>\n      <ion-row>\n        <p ion-no-ion-margin>{{add.flatNumbers}}</p>\n      </ion-row>\n      <ion-row>\n        <p ion-no-ion-margin>{{add.street}}</p>\n      </ion-row>\n      <ion-row>\n        <p ion-no-ion-margin>{{add.locality}}</p>\n      </ion-row>\n    </ion-label>\n\n    <ion-radio slot=\"start\" value=\"{{i}}\" checked></ion-radio>\n  </ion-item>\n\n</ion-radio-group>\n\n<ion-card class=\"contentSection\" (click)=\"addAddress()\">\n  <ion-card-content>\n    <div class=\"dFlexAlignItemCenter\">\n      <ion-icon name=\"add-circle-outline\" class=\"iconSize fontSize\"></ion-icon>\n      <h5 ion-padding-start class=\"fontSize\">Add New Address</h5>\n    </div>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-profile/my-profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-profile/my-profile.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentSection\" padding>\n\n  <ion-list class=\"f-list\" lines=\"full\">\n    <ion-item class=\"f-item\" lines=\"full\">\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.username\" name=\"username\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"f-item\" lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.email\" name=\"email\" disabled></ion-input>\n    </ion-item>\n\n    <ion-item class=\"f-item\" lines=\"full\">\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"userInfo.phoneNumber\" name=\"phoneNumber\"></ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"userInfo.gender\">\n        <ion-list-header>\n          Gender\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Male</ion-label>\n          <ion-radio value=\"male\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Female</ion-label>\n          <ion-radio value=\"female\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </ion-list>\n\n  <div>\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"Continue()\">Continue</ion-button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/paymentcards/paymentcards.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/paymentcards/paymentcards.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list ion-no-ion-margin color=\"light\" ion-ion-margin-bottom>\n  <ion-radio-group>\n    <ion-card *ngFor=\"let add of dataService.current_user.billing; let i = index;\" class=\"sc-ion-card-ios-h\">\n      <ion-card-content>\n        <div class=\"cardContentSection\">\n          <ion-radio slot=\"start\" value=\"{{i}}\" checked></ion-radio>\n          <ion-label ion-padding-start>\n            <ion-row class=\"full\" align-items-center>\n              <ion-col size=\"10\">\n                <ion-row align-items-center>\n                  <p ion-no-ion-margin><strong>XXXX-XXXX-XXXX-{{add.card_number}}</strong></p>\n                </ion-row>\n                <ion-row align-items-center>\n                  <p class=\"small\" ion-no-ion-margin>Expiry date: {{add.expiry_date}}</p>\n                  <h6 class=\"small mycolor\" *ngIf=\"i==0\" ion-padding-start ion-no-ion-margin>PRIMARY</h6>\n                </ion-row>\n\n              </ion-col>\n            </ion-row>\n          </ion-label>\n          <img [src]=\"add.image\" class=\"cardImage\">\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-radio-group>\n</ion-list>\n\n\n<div class=\"add-payment-div contentSection\">\n  <ion-row>\n    <ion-col>\n      <div>\n        <ion-button fill=\"outline\" (click)=\"SaveCard()\" class=\"saveBtn\" float-right>Save</ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-text><span class=\"label\">Credit/Debit Number</span></ion-text>\n      <ion-input class=\"input\" ion-padding-horizontal type=\"number\" placeholder=\"Credit/Debit Number\" [(ngModel)]=\"cardDetails.cardNumber\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-text><span class=\"label\">Card Type</span></ion-text>\n      <ion-select placeholder=\"Select Card Type\" class=\"input\" [(ngModel)]=\"cardDetails.cardType\">\n        <ion-select-option value=\"visa\">VISA</ion-select-option>\n        <ion-select-option value=\"master\">Master Card</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-text><span class=\"label\">Security Code(CVV)</span></ion-text>\n      <ion-input class=\"input\" ion-padding-horizontal type=\"number\" placeholder=\"CVV\" [(ngModel)]=\"cardDetails.cardCvv\"></ion-input>\n    </ion-col>\n    <ion-col>\n      <ion-text><span class=\"label\">Expiry Date</span></ion-text>\n      <ion-input class=\"input\" placeholder=\"MM/YY\" [(ngModel)]=\"cardDetails.cardDate\" ion-padding-horizontal></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h5 ion-no-ion-margin class=\"label\">Billing Zip/Postal Code</h5>\n      <h6 class=\"small\">The zip or postal code from the address registered for this card</h6>\n    </ion-col>\n    <ion-col>\n      <ion-input class=\"input\" placeholder=\"Zip/Postal Code\" [(ngModel)]=\"cardDetails.zipCode\" ion-padding-horizontal></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"lockSection\">\n      <div>\n        <ion-icon name=\"lock\" class=\"icon\" class=\"lockIcon\"></ion-icon>\n      </div>\n      <div class=\"secureTextSection\">\n        <h5 ion-no-ion-margin class=\"label\">Secure Payment</h5>\n        <h6 class=\"small\" ion-no-ion-margin>Trusted by over 500 million shoppers in 50 countries</h6>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-account/my-account.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-account/my-account.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>My Account</ion-title>\n    <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"cartPage()\">\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      <span class=\"cartQuantity\">{{cart.productQty}}</span>\n    </ion-button>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <div *ngIf=\"userDetails\" class=\"userSection\" ion-padding-horizontal>\n      <ion-avatar slot=\"start\">\n        <img [src]=\"profileUrl\">\n      </ion-avatar>\n      <div ion-padding-start class=\"userDetail\">\n        <ion-label class=\"userName\">\n          {{userDetails.username}}\n        </ion-label>\n        <ion-text>{{userDetails.email}}</ion-text>\n      </div>\n      <!-- <div class=\"editSection\" slot=\"end\" float-right (click)=\"editProfile()\">\n        <ion-label ion-button color=\"light\">Edit Profile</ion-label>\n      </div> -->\n\n    </div>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-segment [(ngModel)]=\"selectSegment\">\n      <ion-segment-button value=\"profile\" class=\"segmentButton\" color=\"light\">\n        <ion-label>Profile</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"mycard\" color=\"light\">\n        <ion-label>My Card</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"MyAddress\" color=\"light\">\n        <ion-label>My Address</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <my-profile *ngIf=\"selectSegment == 'profile'\"></my-profile>\n  <stor-paymentcards *ngIf=\"selectSegment == 'mycard'\"></stor-paymentcards>\n  <my-address *ngIf=\"selectSegment == 'MyAddress'\"></my-address>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/my-address/my-address.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-address/my-address.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n.label {\n  font-size: 12px;\n}\n.small {\n  font-size: 13px;\n  color: var(--ion-color-primary);\n}\n.icon {\n  font-size: 21px;\n}\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.add-payment-div {\n  border: 1px solid #ddd;\n  ion-margin-bottom: 10px;\n  padding: 10px;\n}\n.contentSection {\n  background: #fff;\n}\n.cardContentSection {\n  display: flex;\n  align-items: center;\n}\n.cardContentSection ion-label {\n  width: 100%;\n}\n.fontSize {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1hZGRyZXNzL215LWFkZHJlc3MuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvbXktYWRkcmVzcy9teS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVdBO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QURBSjtBQ0VBO0VBQ0ksZUFBQTtBRENKO0FDQ0E7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QURFSjtBQ0FBO0VBQ0ksZUFBQTtBREdKO0FDREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FESUo7QUNGQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FES0o7QUNGQTtFQUNJLGdCQUFBO0FES0o7QUNGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBREtKO0FDSEk7RUFDSSxXQUFBO0FES1I7QUNEQTtFQUNJLGVBQUE7QURJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktYWRkcmVzcy9teS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5pbnB1dCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2QyZDJkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG4uYWRkLXBheW1lbnQtZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaW9uLW1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXJkQ29udGVudFNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmRDb250ZW50U2VjdGlvbiBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvbnRTaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cblxuLmlucHV0IHtcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn1cbi5hZGQtcGF5bWVudC1kaXZ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBpb24tbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNhcmRDb250ZW50U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG59XG5cbi5mb250U2l6ZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/my-address/my-address.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-address/my-address.component.ts ***!
  \***************************************************************/
/*! exports provided: MyAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAddressComponent", function() { return MyAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */





var MyAddressComponent = /** @class */ (function () {
    function MyAddressComponent(dataService, route, fsSevices) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.fsSevices = fsSevices;
        this.fsSevices.getUserAddress().then(function (data) {
            _this.address = data;
        });
    }
    MyAddressComponent.prototype.ngOnInit = function () { };
    MyAddressComponent.prototype.addAddress = function () {
        this.route.navigate(['add-address']);
    };
    MyAddressComponent.prototype.ionViewDidEnter = function () {
    };
    MyAddressComponent.ctorParameters = function () { return [
        { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
    ]; };
    MyAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-address',
            template: __webpack_require__(/*! raw-loader!./my-address.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-address/my-address.component.html"),
            styles: [__webpack_require__(/*! ./my-address.component.scss */ "./src/app/components/my-address/my-address.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
    ], MyAddressComponent);
    return MyAddressComponent;
}());



/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.radioSection {\n  padding-left: 10px;\n}\n.f-nav {\n  display: flex;\n  justify-content: baseline;\n}\n.f-form {\n  padding-top: 10px;\n  margin-left: 14px;\n}\n.flex {\n  display: flex;\n}\n.f-gender {\n  margin-right: 15px;\n  margin-left: 3px;\n}\n.f-list {\n  margin-top: 3px;\n}\n.f-item {\n  padding-left: 0px;\n}\n.active {\n  --background:var(--ion-color-primary);\n  background: var(--ion-color-primary);\n}\n.btnOutline {\n  border: 1px solid var(--ion-color-primary);\n  --border:1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n.homeBtn {\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n}\n.officeBtn {\n  margin-left: 10px;\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n}\n.BtnSection {\n  display: flex;\n}\n.btnColorWhite {\n  color: #fff;\n}\n.btnColorBlack {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBREFKO0FDR0E7RUFDSSxrQkFBQTtBREFKO0FDRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QURDSjtBQ0NBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBREVKO0FDQUE7RUFDSSxhQUFBO0FER0o7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QURJSjtBQ0ZBO0VBQ0ksZUFBQTtBREtKO0FDSEE7RUFDSSxpQkFBQTtBRE1KO0FDSEE7RUFDSSxxQ0FBQTtFQUNBLG9DQUFBO0FETUo7QUNKQTtFQUNJLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBRE9KO0FDTEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEUUo7QUNKQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRE9KO0FDTEE7RUFDSSxhQUFBO0FEUUo7QUNOQTtFQUNJLFdBQUE7QURTSjtBQ1BBO0VBQ0ksV0FBQTtBRFVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJhZGlvU2VjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmYtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcbn1cblxuLmYtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZi1nZW5kZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5mLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5mLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJ0bk91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvbWVCdG4ge1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG59XG5cbi5vZmZpY2VCdG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4uQnRuU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG5Db2xvcldoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG5Db2xvckJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG4uY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmFkaW9TZWN0aW9ue1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xufVxuLmYtbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZVxufVxuLmYtZm9ybXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXhcbn1cbi5mLWdlbmRlcntcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBtYXJnaW4tbGVmdDozcHg7XG59XG4uZi1saXN0e1xuICAgIG1hcmdpbi10b3A6M3B4O1xufVxuLmYtaXRlbXtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweFxufVxuXG4uYWN0aXZle1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYnRuT3V0bGluZXtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ob21lQnRue1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIFxufVxuXG4ub2ZmaWNlQnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuLkJ0blNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5idG5Db2xvcldoaXRle1xuICAgIGNvbG9yOiNmZmY7XG59XG4uYnRuQ29sb3JCbGFja3tcbiAgICBjb2xvcjojMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */




var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(utils, fireStore) {
        this.utils = utils;
        this.fireStore = fireStore;
        this.userInfo = {};
        this.userInfo = Object.assign({}, this.utils.userInfo);
    }
    MyProfileComponent.prototype.ngOnInit = function () { };
    MyProfileComponent.prototype.Continue = function () {
        if (this.userInfo.username && this.userInfo.phoneNumber && this.userInfo.gender) {
            this.fireStore.updateUser(this.userInfo.id, Object.assign({}, this.userInfo));
        }
        else {
            this.utils.presentToast('All field is required here', true, 'bottom', 2100);
        }
    };
    MyProfileComponent.ctorParameters = function () { return [
        { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_2__["UtilsServiceService"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
    ]; };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-profile',
            template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/components/my-profile/my-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_2__["UtilsServiceService"], _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/paymentcards/paymentcards.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/paymentcards/paymentcards.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n.label {\n  font-size: 12px;\n}\n.small {\n  font-size: 9px;\n  color: #787878;\n}\n.icon {\n  font-size: 21px;\n}\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.add-payment-div {\n  border: 1px solid #ddd;\n  ion-margin-bottom: 10px;\n  padding: 10px;\n}\n.contentSection {\n  background: #fff;\n}\n.cardContentSection {\n  display: flex;\n  align-items: center;\n}\n.cardContentSection ion-label {\n  width: 90%;\n}\n.cardImage {\n  width: 40px;\n}\n.lockSection {\n  display: flex;\n  align-items: flex-start;\n}\n.lockIcon {\n  font-size: 21px;\n  padding-right: 8px;\n}\n.secureTextSection {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50Y2FyZHMvcGF5bWVudGNhcmRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhbnRvc2hiL0RvY3VtZW50cy9uZXh0Z2VuYXBwcy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnRjYXJkcy9wYXltZW50Y2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBYUE7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBREZKO0FDSUE7RUFDSSxlQUFBO0FEREo7QUNHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FEQUo7QUNFQTtFQUNJLGVBQUE7QURDSjtBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBREVKO0FDQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBREdKO0FDQUE7RUFDSSxnQkFBQTtBREdKO0FDQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURHSjtBQ0RJO0VBQ0ksVUFBQTtBREdSO0FDQUE7RUFDSSxXQUFBO0FER0o7QUNBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBREdKO0FDQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0FBO0VBQ0ksZ0JBQUE7QURHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudGNhcmRzL3BheW1lbnRjYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG4uaW5wdXQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjNzg3ODc4O1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogOTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn1cblxuLmFkZC1wYXltZW50LWRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGlvbi1tYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGVudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2FyZENvbnRlbnRTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkQ29udGVudFNlY3Rpb24gaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmNhcmRJbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ubG9ja1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmxvY2tJY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5zZWN1cmVUZXh0U2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG5cblxuLmlucHV0IHtcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuLmFkZC1wYXltZW50LWRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGlvbi1tYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50U2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2FyZENvbnRlbnRTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICB3aWR0aDogOTAlXG4gICAgfVxufVxuLmNhcmRJbWFnZXtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLmxvY2tTZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5sb2NrSWNvbntcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uc2VjdXJlVGV4dFNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/paymentcards/paymentcards.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/paymentcards/paymentcards.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcardsComponent", function() { return PaymentcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */



var PaymentcardsComponent = /** @class */ (function () {
    function PaymentcardsComponent(dataService) {
        this.dataService = dataService;
        this.cardDetails = { cardNumber: null, cardType: null, cardCvv: null, cardDate: null, zipCode: null };
    }
    PaymentcardsComponent.prototype.ngOnInit = function () { };
    PaymentcardsComponent.prototype.SaveCard = function () {
        if (this.cardDetails.cardType === 'visa') {
            this.dataService.current_user.billing.push({ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/visa.png' });
        }
        if (this.cardDetails.cardType === 'master') {
            this.dataService.current_user.billing.push({ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/mastercard.png' });
        }
    };
    PaymentcardsComponent.ctorParameters = function () { return [
        { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    PaymentcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'stor-paymentcards',
            template: __webpack_require__(/*! raw-loader!./paymentcards.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/paymentcards/paymentcards.component.html"),
            styles: [__webpack_require__(/*! ./paymentcards.component.scss */ "./src/app/components/paymentcards/paymentcards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PaymentcardsComponent);
    return PaymentcardsComponent;
}());



/***/ }),

/***/ "./src/app/my-account/my-account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");
/* harmony import */ var _components_paymentcards_paymentcards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/paymentcards/paymentcards.component */ "./src/app/components/paymentcards/paymentcards.component.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_my_address_my_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/my-address/my-address.component */ "./src/app/components/my-address/my-address.component.ts");
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
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]
    }
];
var MyAccountPageModule = /** @class */ (function () {
    function MyAccountPageModule() {
    }
    MyAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"], _components_paymentcards_paymentcards_component__WEBPACK_IMPORTED_MODULE_7__["PaymentcardsComponent"], _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__["MyProfileComponent"], _components_my_address_my_address_component__WEBPACK_IMPORTED_MODULE_9__["MyAddressComponent"]]
        })
    ], MyAccountPageModule);
    return MyAccountPageModule;
}());



/***/ }),

/***/ "./src/app/my-account/my-account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.ionSegementSection {\n  background: #a81b1b;\n}\n.segment-button-indicator {\n  align-self: center;\n  background-color: var(--indicator-color-checked, var(--color-checked));\n  background: #fff;\n  height: 5px;\n  width: 65px;\n}\n.ion-segment-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.userSection {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.userName {\n  font-size: 22px;\n}\n.userDetail {\n  display: flex;\n  flex-direction: column;\n}\n.editSection {\n  position: absolute;\n  right: 10px;\n}\n.iconSize {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9zYW50b3NoYi9Eb2N1bWVudHMvbmV4dGdlbmFwcHMvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFVQTtFQUNJLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEQ0o7QUNDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERUo7QUNDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FERUo7QUNFQTtFQUNJLGVBQUE7QURDSjtBQ0VBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBRENKO0FDRUE7RUFDSSxlQUFBO0FEQ0oiLCJmaWxlIjoic3JjL2FwcC9teS1hY2NvdW50L215LWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5pb25TZWdlbWVudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjYTgxYjFiO1xufVxuXG4uc2VnbWVudC1idXR0b24taW5kaWNhdG9yIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZCwgdmFyKC0tY29sb3ItY2hlY2tlZCkpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlck5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi51c2VyRGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVkaXRTZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cblxuLmljb25TaXplIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cbi5pb25TZWdlbWVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2E4MWIxYjtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQsdmFyKC0tY29sb3ItY2hlY2tlZCkpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG59XG4uaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuXG4udXNlclNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi51c2VyTmFtZXtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi51c2VyRGV0YWlse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVkaXRTZWN0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbn1cblxuLmljb25TaXple1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-account/my-account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/*! exports provided: MyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPage", function() { return MyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */





var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(cart, activeRoute, route, utils) {
        var _this = this;
        this.cart = cart;
        this.activeRoute = activeRoute;
        this.route = route;
        this.utils = utils;
        // this.userDetails = { profileUrl: 'assets/images/user.png', name: 'John Doe', phoneNo: '+91-000-0000-0000', location: 'jaipur' };
        this.userDetails = this.utils.userInfo;
        this.activeRoute.params.subscribe(function (res) {
            _this.selectSegment = res.title;
        });
        this.profileUrl = 'assets/images/user.png';
        this.utils.AddAdressBackUrl = '/my-account';
    }
    MyAccountPage.prototype.ngOnInit = function () {
    };
    MyAccountPage.prototype.editProfile = function () {
        this.selectSegment = 'profile';
    };
    MyAccountPage.prototype.cartPage = function () {
        this.route.navigate(['cart']);
    };
    MyAccountPage.ctorParameters = function () { return [
        { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"] }
    ]; };
    MyAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-account',
            template: __webpack_require__(/*! raw-loader!./my-account.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-account/my-account.page.html"),
            styles: [__webpack_require__(/*! ./my-account.page.scss */ "./src/app/my-account/my-account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"]])
    ], MyAccountPage);
    return MyAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-account-my-account-module-es5.js.map