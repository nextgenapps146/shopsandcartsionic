(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>product list</ion-title>\n    <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"cartPage()\">\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      <span class=\"cartQuantity\">{{cart.productQty}}</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row *ngIf=\"allProducts\">\n    <ion-col size=\"6\" *ngFor=\"let product of allProducts | async ;let i = index\">\n      <ion-card class=\"productCard card_height\">\n        <div ion-padding-horizontal class=\"productImage\" (click)=\"viewProduct(product)\">\n          <div class=\"discountSection\">\n            <ion-label ion-text-uppercase>{{product.offer}} % off</ion-label>\n          </div>\n          <ion-img [src]=\"product.images[0]\" class=\"productImg\" class=\"image_height\"></ion-img>\n        </div>\n\n        <ion-card-header>\n          <div class=\"dFlexAlignItemCenter\">\n            <ion-card-title>{{product.salePrice}}</ion-card-title>\n            <span class=\"subTitle\"> {{product.regularPrice}}</span>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"cardContentSection\">\n\n          <p class=\"textBold font18 productDesc product_name\">{{product.name}}</p>\n          <!-- <span class=\"productQty\">{{product.pricePerQuantity}} </span> -->\n          <div class=\"addBtnSection\">\n            <ion-button expand=\"full\" color=\"danger\" class=\"addBtn\" *ngIf=\"product.units === 0\" (click)=\"addToCart(product)\">\n              Add</ion-button>\n\n            <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n              <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove')\"\n                class=\"segmentBtn\">\n                <!-- <ion-icon name=\"remove-circle-outline\"></ion-icon> -->\n                <div class=\"button_div\">\n                  <ion-icon name=\"remove\"  class=\"all_icons\"></ion-icon>\n                  </div>\n              </ion-segment-button>\n              <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n              <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add')\"\n                class=\"segmentBtn\">\n                <!-- <ion-icon name=\"add-circle-outline\"></ion-icon> -->\n                <div class=\"button_div\">\n                  <ion-icon name=\"add\"  class=\"all_icons\"></ion-icon>\n                  </div>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/product-list/product-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list.page */ "./src/app/product-list/product-list.page.ts");
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
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]
    }
];
let ProductListPageModule = class ProductListPageModule {
};
ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })
], ProductListPageModule);



/***/ }),

/***/ "./src/app/product-list/product-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  position: relative;\n  padding-top: 8px;\n}\n.productCard .productImage .discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: 5px;\n  left: 10px;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnIcon {\n  background: var(--ion-color-primary);\n  --background:var(--ion-color-primary);\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.productName {\n  font-size: 22px;\n  color: var(--ion-color-dark);\n  padding-top: 8px;\n}\n.productDesc {\n  color: var(--ion-color-dark);\n  padding-bottom: 16px;\n  font-weight: bold;\n}\n.productCardSection {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: hidden;\n}\n.productCard {\n  background: #fff;\n  display: inline-block;\n  white-space: pre-line;\n  padding: 2px auto;\n  width: 100%;\n  margin: 0;\n  height: auto;\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n}\nion-segment {\n  height: 42px;\n}\n.textUnits {\n  font-size: 18px;\n}\n.cardContentSection {\n  padding-top: 0;\n}\n.productImg {\n  padding-top: 22px;\n}\nion-segment {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBREFKO0FDR0U7RUFDRSxlQUFBO0FEQUo7QUNHRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQU47QUNHRTtFQUNFLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0FEQUo7QUNFSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QURBTjtBQ0VNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBREFSO0FDSUU7RUFDSSxlQUFBO0FERk47QUNJSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREZOO0FDUUU7RUFDRSxvQ0FBQTtFQUNBLHFDQUFBO0FETEo7QUNTSTtFQUNFLGtCQUFBO0VBQ0YsbUJBQUE7QUROSjtBQ1dFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QURSSjtBQ1dFO0VBQ0UsNEJBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FEVEo7QUNhRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURWSjtBQ1lFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLGtEQUFBO0FEVEo7QUNZRTtFQUNFLFlBQUE7QURUSjtBQ2lCRTtFQUNJLGVBQUE7QURkTjtBQ2lCRTtFQUNFLGNBQUE7QURkSjtBQ2lCRTtFQUNDLGlCQUFBO0FEZEg7QUNpQkU7RUFDRSxtQkFBQTtBRGRKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5sZWZ0SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWdodEhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b3BSaWdodFNlY3Rpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2R1Y3RDYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgd2lkdGg6IDYwJTtcbn1cbi5wcm9kdWN0Q2FyZCAucHJvZHVjdEltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnByb2R1Y3RDYXJkIC5wcm9kdWN0SW1hZ2UgLmRpc2NvdW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4ucHJvZHVjdENhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnByb2R1Y3RDYXJkIC5zdWJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGRCdG5JY29uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYWRkQnRuU2VjdGlvbiAuYWRkQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4ucHJvZHVjdE5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5wcm9kdWN0RGVzYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2R1Y3RDYXJkU2VjdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0Q2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBwYWRkaW5nOiAycHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGhlaWdodDogNDJweDtcbn1cblxuLnRleHRVbml0cyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNhcmRDb250ZW50U2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHJvZHVjdEltZyB7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG4uY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuICBcbiAgLmxlZnRIZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnJpZ2h0SGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC50b3BSaWdodFNlY3Rpb257XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAucHJvZHVjdENhcmR7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIHdpZHRoOiA2MCU7XG4gIFxuICAgIC5wcm9kdWN0SW1hZ2V7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICBcbiAgICAgIC5kaXNjb3VudFNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgIH1cbiAgICAuc3ViVGl0bGV7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgXG4gICAgXG4gIH1cbiAgXG4gIC5hZGRCdG5JY29ue1xuICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIC5hZGRCdG5TZWN0aW9ue1xuICAgIC5hZGRCdG57XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6NXB4OyBcbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIC5wcm9kdWN0TmFtZXtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5wcm9kdWN0RGVzY3tcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLy8gdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgXG4gIC5wcm9kdWN0Q2FyZFNlY3Rpb257XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxuICAucHJvZHVjdENhcmR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIHBhZGRpbmc6IDJweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnR7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICB9XG5cbi5zZWdtZW50QnRue1xuICAgICAgLy8gbWluLXdpZHRoOiA0NXB4O1xuICAgICAgLy8gbWF4LXdpZHRoOiA2MHB4O1xuICB9XG5cbiAgLnRleHRVbml0c3tcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfSAgXG5cbiAgLmNhcmRDb250ZW50U2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDowO1xuICB9XG5cbiAgLnByb2R1Y3RJbWd7XG4gICBwYWRkaW5nLXRvcDoyMnB4O1xuICB9XG4gIFxuICBpb24tc2VnbWVudHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/product-list/product-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/product-list/product-list.page.ts ***!
  \***************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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






let ProductListPage = class ProductListPage {
    constructor(dataServ, cart, route, fsServices) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.route = route;
        this.fsServices = fsServices;
        this.fsServices.getProducts().then((data) => {
            this.allProducts = data;
        });
    }
    ngOnInit() {
    }
    addToCart(product) {
        product.units = 1;
        this.cart.addCart.push(product);
        this.cart.productQty += 1;
    }
    updateCart(productID, type) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        if (type === 'add') {
            productunits.units += 1;
            this.cart.productQty += 1;
        }
        if (type === 'remove') {
            productunits.units -= 1;
            this.cart.productQty -= 1;
        }
    }
    cartPage() {
        this.route.navigate(['cart']);
    }
    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }
};
ProductListPage.ctorParameters = () => [
    { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.page.html"),
        styles: [__webpack_require__(/*! ./product-list.page.scss */ "./src/app/product-list/product-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], ProductListPage);



/***/ })

}]);
//# sourceMappingURL=product-list-product-list-module-es2015.js.map