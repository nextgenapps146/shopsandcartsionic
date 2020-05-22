(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>\n      <span class=\"topTitle\">My Cart</span>\n      <br />\n      <span class=\"title-ios cartItems\"> {{cart.addCart.length}} Items</span>\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"cart.addCart.length > 0\">\n    <ion-card class=\"contentSection\">\n      <ion-card-content ion-no-padding>\n        <div>\n          <div class=\"subTotal dFlexJustifyContentSpaceBetween\">\n            <ion-text class=\"textPadding\">\n              <h5>Sub Total</h5>\n            </ion-text>\n            <ion-text class=\"textPadding\">\n              <h5> ₹ {{cart.subTotal}}</h5>\n            </ion-text>\n          </div>\n          <div class=\"dliveryCharge dFlexJustifyContentSpaceBetween\">\n            <ion-text class=\"textPadding\">\n              <h5>Dilevery Charge</h5>\n            </ion-text>\n            <ion-text class=\"textPadding\">\n              <h5> ₹ {{cart.deliveryCharge}} </h5>\n            </ion-text>\n          </div>\n          <div class=\"yourSaving dFlexJustifyContentSpaceBetween\">\n            <ion-text class=\"textPadding\">\n              <h5>Your Saving</h5>\n            </ion-text>\n            <ion-text class=\"textPadding\">\n              <h5> ₹ {{cart.totalSave}}</h5>\n            </ion-text>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <!--Product List-->\n    <ion-list ion-ion-margin-top>\n      <ion-item *ngFor=\"let product of cart.addCart;let i = index\" ion-no-padding>\n        <div class=\"productSection\">\n          <div class=\"imageSection\" padding>\n            <img [src]=\"product.images[0]\">\n          </div>\n\n          <div class=\"productTitle pRelative\">\n            <div class=\"discountSection\">\n              <ion-label ion-text-uppercase>{{product.offer}} % off</ion-label>\n            </div>\n            <div ion-ion-margin-top ion-padding-top>\n              <h4 class=\"title\">{{product.name}}</h4>\n              <h6>₹{{product.salePrice}}</h6>\n            </div>\n\n          </div>\n          <div slot=\"end\" class=\"productCartSection\">\n            <div class=\"addBtnSection\">\n              <!-- <ion-button expand=\"full\"  (click)=\"addToCart(i)\">\n                  <ion-icon name=\"close\" color=\"danger\" slot=\"icon-only\" ></ion-icon>\n                </ion-button> -->\n              <div class=\"removeBtn\">\n                <ion-button color=\"undefined\" fill=\"clear\" (click)=\"removeProduct(product.id,i,product.units)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\" color=\"danger\"></ion-icon>\n                </ion-button>\n              </div>\n\n\n              <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n                <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove')\"\n                  class=\"segmentBtn\">\n                  <ion-icon name=\"remove-circle-outline\"></ion-icon>\n                </ion-segment-button>\n                <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n                <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add')\"\n                  class=\"segmentBtn\">\n                  <ion-icon name=\"add-circle-outline\"></ion-icon>\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n    <!--End of Product List-->\n\n  </div>\n  <div *ngIf=\"cart.addCart.length==0\" [ngClass]=\"{ 'cartTopSection' :cart.addCart.length == 0 }\">\n    <div [ngClass]=\"{ 'cartTextSection' : cart.addCart.length == 0 }\" text-center>\n      <ion-icon name=\"cart\" class=\"cartIcon\"></ion-icon>\n      <h3>Your Cart is Empty</h3>\n      <p>Lets get you started</p>\n      <ion-button color=\"primary\" (click)=\"startShopping()\">Start shopping </ion-button>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer (click)=\"deliveryAddress()\" *ngIf=\"cart.addCart.length > 0\">\n  <ion-toolbar color=\"primary\" ion-padding-horizontal>\n    <div class=\"footerCartSection\">\n      <ion-text>\n        <h4>Checkout</h4>\n      </ion-text>\n      <ion-text>\n        <h4> ₹ {{cart.grandTotal}} </h4>\n      </ion-text>\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
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
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.cartItems {\n  font-size: 14px;\n}\n.topTitle {\n  font-size: 18px;\n}\n.cartTopSection {\n  height: 100%;\n}\n.cartTextSection {\n  align-items: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.cartIcon {\n  font-size: 30px;\n}\n.footerCartSection {\n  display: flex;\n  justify-content: space-between;\n}\n.yourSaving {\n  border-top: 1px solid #000;\n}\n.textPadding {\n  padding: 10px;\n}\n.textPadding h5 {\n  color: #000;\n  font-size: 16px;\n}\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 4px 8px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: -5px;\n  left: 10px;\n}\n.discountSection ion-label {\n  font-size: 14px;\n}\n.productSection {\n  display: flex;\n  align-items: center;\n  padding-bottom: 16px;\n  padding-top: 16px;\n}\n.imageSection {\n  width: 36%;\n}\n.productTitle {\n  width: 40%;\n}\n.productCartSection {\n  width: 20%;\n}\n.segmentBtn {\n  min-width: 30px;\n  max-width: 40px;\n  height: 80px;\n}\n.removeBtn {\n  position: absolute;\n  top: 0;\n  right: 5px;\n}\nion-segment {\n  align-items: center;\n}\nion-segment ion-text {\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsIi9Vc2Vycy92aXNoYWwvRG9jdW1lbnRzL3Rlc3RpbmcvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFZQTtFQUNJLGVBQUE7QURESjtBQ0dBO0VBQ0ksZUFBQTtBREFKO0FDRUE7RUFDSSxZQUFBO0FEQ0o7QUNDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FERUo7QUNDQTtFQUNJLGVBQUE7QURFSjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FERUo7QUNDQTtFQUNJLDBCQUFBO0FERUo7QUNBQTtFQUNJLGFBQUE7QURHSjtBQ0RJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QURHUjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FERUo7QUNDRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FERUo7QUNBSTtFQUNJLGVBQUE7QURFUjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBREVKO0FDQUE7RUFDSSxVQUFBO0FER0o7QUNHQTtFQUNJLFVBQUE7QURESjtBQ0lBO0VBQ0ksVUFBQTtBRERKO0FDSUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURESjtBQ0lBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRERKO0FDSUE7RUFDSSxtQkFBQTtBRERKO0FDRUk7RUFDQSxnQkFBQTtBREFKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG4uY2FydEl0ZW1zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG9wVGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jYXJ0VG9wU2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcnRUZXh0U2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJ0SWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZvb3RlckNhcnRTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ueW91clNhdmluZyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4udGV4dFBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnRleHRQYWRkaW5nIGg1IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5kaXNjb3VudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBsZWZ0OiAxMHB4O1xufVxuLmRpc2NvdW50U2VjdGlvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLmltYWdlU2VjdGlvbiB7XG4gIHdpZHRoOiAzNiU7XG59XG4ucHJvZHVjdFRpdGxlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnByb2R1Y3RDYXJ0U2VjdGlvbiB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5zZWdtZW50QnRuIHtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLnJlbW92ZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tc2VnbWVudCBpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG5cbi5jYXJ0SXRlbXN7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRvcFRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jYXJ0VG9wU2VjdGlvbntcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FydFRleHRTZWN0aW9ue1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcnRJY29ue1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZvb3RlckNhcnRTZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ueW91clNhdmluZ3tcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwO1xufVxuLnRleHRQYWRkaW5ne1xuICAgIHBhZGRpbmc6MTBweDtcblxuICAgIGg1e1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuLmNvbnRlbnRTZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAuZGlzY291bnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGxlZnQ6IDEwcHg7XG5cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4ucHJvZHVjdFNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmltYWdlU2VjdGlvbntcbiAgICB3aWR0aDogMzYlO1xuICAgIGltZ3tcbiAgICAgICAgLy8gd2lkdGg6IDY1JTtcbiAgICB9XG59XG5cbi5wcm9kdWN0VGl0bGV7XG4gICAgd2lkdGg6IDQwJTtcblxufVxuLnByb2R1Y3RDYXJ0U2VjdGlvbntcbiAgICB3aWR0aDogMjAlO1xufVxuXG4uc2VnbWVudEJ0bntcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLnJlbW92ZUJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiA1cHg7XG59XG5cbmlvbi1zZWdtZW50e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW9uLXRleHR7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let CartPage = class CartPage {
    constructor(dataServ, cart, route, alertController) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.route = route;
        this.alertController = alertController;
        this.addCart();
    }
    addCart() {
        this.cart.deliveryCharge = 0;
        this.cart.totalSave = 0;
        this.cart.grandTotal = 0;
        this.cart.addCart.map(el => {
            const total = el.units * el.salePrice;
            this.cart.subTotal = total;
            this.cart.deliveryCharge = el.deliveryCharge ? this.cart.deliveryCharge + el.deliveryCharge : this.cart.deliveryCharge;
            this.cart.grandTotal += this.cart.subTotal + this.cart.deliveryCharge;
            this.cart.totalSave += el.units * (parseInt(el.regularPrice) - el.salePrice);
        });
    }
    ngOnInit() {
        this.addCart();
    }
    startShopping() {
        this.route.navigate(['home']);
    }
    updateCart(productID, type) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        let id;
        if (type === 'add') {
            productunits.units += 1;
            this.cart.productQty += 1;
            const total = 1 * productunits.salePrice;
            this.cart.subTotal = this.cart.subTotal + total;
            this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;
        }
        if (type === 'remove') {
            if (productunits.units > 1) {
                productunits.units -= 1;
                id = productunits.id;
                this.cart.productQty -= 1;
                const total = 1 * productunits.salePrice;
                this.cart.subTotal = this.cart.subTotal - total;
                this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;
            }
            else {
                this.removeProduct(productID, id);
            }
        }
        this.addCart();
    }
    removeProduct(productID, index, productUnit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Remove From Cart!',
                message: 'Are you Sure you want to remove this Product',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                        }
                    }, {
                        text: 'Remove',
                        handler: () => {
                            this.cart.productQty = this.cart.productQty - productUnit || 0;
                            const productunits = this.cart.addCart.find(el => el.id === productID);
                            const total = 1 * productunits.salePrice;
                            this.cart.subTotal = this.cart.subTotal - total;
                            this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;
                            productunits.units = 0;
                            if (this.cart.productQty === 0) {
                                this.cart.subTotal = 0;
                                this.cart.grandTotal = 0;
                            }
                            this.cart.addCart.splice(index, 1);
                            this.addCart();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deliveryAddress() {
        this.route.navigate(['delivery']);
    }
};
CartPage.ctorParameters = () => [
    { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map