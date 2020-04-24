(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-product-view-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/check-delivery/check-delivery.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/check-delivery/check-delivery.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding class=\"contentSection\" ion-ion-margin-bottom>\n  <ion-row>\n    <ion-col>\n      <ion-label>\n        Check Delivery\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"pinInputSection\">\n    <ion-col size=\"6\">\n      <ion-input placeholder=\"Enter Your Pin\" type=\"tel\" maxlength=\"6\" class=\"inputBorder\" [(ngModel)]=\"pinCode\"></ion-input>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"solid\" size=\"small\" (click)=\"checkPin(pinCode)\" >Submit</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"dFlexJustifyContentSpaceBetween deliverytype\" ion-padding-top>\n    <ion-text>Cash on Delivery</ion-text>\n    <ion-text>Free Shipping</ion-text>\n    <ion-text> Delivery in</ion-text>\n  </ion-row>\n  <ion-row class=\"dFlexJustifyContentSpaceBetween deliverytype\" ion-padding-top>\n    <ion-text>\n        <ion-icon name=\"checkmark\" *ngIf=\"product.cod\"></ion-icon>\n        <ion-icon name=\"close\" *ngIf=\"!product.cod\"></ion-icon>\n    </ion-text>\n    <ion-text>\n        <ion-icon name=\"checkmark\" *ngIf=\"product.free_shipping\"></ion-icon>\n        <ion-icon name=\"close\" *ngIf=\"!product.free_shipping\"></ion-icon>\n    </ion-text>\n    <ion-text> {{product.delivery_in}} Days</ion-text>\n\n  </ion-row>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/review/review.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/review/review.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"review.length > 0\" class=\"contentSection\" ion-padding-vertical ion-ion-margin-bottom>\n  <div style=\"    padding-left: 16px;\">\n    Ratings & Reviews\n  </div>\n  <div class=\"flex\" ion-padding-bottom>\n    <div class=\"left-div\">\n      <div class=\"flex\">\n        <h1 style=\"ion-margin:0\" class=\"averageReview\">{{averageReview}}</h1>\n        <ion-icon name=\"star\" class=\"icon-style\"></ion-icon>\n      </div>\n      <div>\n        {{review.length}} reviews\n      </div>\n    </div>\n    <div style=\"width:60vw\">\n      <div class=\"flex flex-center\">\n        <span class=\"starText\">5</span>\n        <ion-icon name=\"star\" class=\"small-star\"></ion-icon>\n        <div class=\"gradient-div\" [style.background]=\"'linear-gradient(to right, #32db64 0%,#32db64 ' + fivepercentage + '%, #bdbdbd '+ fivepercentage +'% , #bdbdbd 100%)'\"></div>{{starfive}}\n      </div>\n      <div class=\"flex flex-center\">\n        <span class=\"starText\">4</span>\n        <ion-icon name=\"star\" class=\"small-star\"></ion-icon>\n\n        <div class=\"gradient-div\" [style.background]=\"'linear-gradient(to right, #32db64 0%, #32db64 ' + fourpercentage + '%, #bdbdbd '+ fourpercentage +'% , #bdbdbd 100%)'\"></div>{{starfour}}\n      </div>\n      <div class=\"flex flex-center\">\n        <span class=\"starText\">3</span>\n        <ion-icon name=\"star\" class=\"small-star\"></ion-icon>\n        <div class=\"gradient-div\" [style.background]=\"'linear-gradient(to right, #32db64 0%, #32db64 ' + threepercentage + '%, #bdbdbd '+ threepercentage +'% , #bdbdbd 100%)'\"></div>{{starthree}}\n      </div>\n      <div class=\"flex flex-center\">\n        <span class=\"starText\">2</span>\n        <ion-icon name=\"star\" class=\"small-star\"></ion-icon>\n        <div class=\"gradient-div\" [style.background]=\"'linear-gradient(to right, #32db64 0%, #32db64 ' + twopercentage + '%, #bdbdbd '+ twopercentage +'% , #bdbdbd 100%)'\"></div>{{startwo}}\n      </div>\n      <div class=\"flex flex-center\">\n        <span class=\"starText\">1</span>\n        <ion-icon name=\"star\" class=\"small-star\"></ion-icon>\n        <div class=\"gradient-div\" [style.background]=\"'linear-gradient(to right, #32db64 0%, #32db64 ' + onepercentage + '%, #bdbdbd '+ onepercentage +'% , #bdbdbd 100%)'\"></div>{{starone}}\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <ion-item *ngFor=\"let review of review\" class=\"itemBorder\" lines=\"none\">\n      <div class=\"revie-top-most-div\">\n        <div style=\"width: 60%;\">\n          <div class=\"flex flex-center\" style=\"justify-content: flex-start;\">\n            <div class=\"flex flex-center review-rating\"> {{review.starCount}}\n              <ion-icon name=\"star\"></ion-icon>\n            </div>\n            <div style=\"white-space: normal;\">\n              {{review.headline}}\n            </div>\n          </div>\n          <div style=\"white-space: normal;\"> {{review.message}}</div>\n        </div>\n        <div *ngIf=\"review.imageUrl\" class=\"image-div\">\n          <img src={{review.imageUrl}} class=\"image-style-review\">\n        </div>\n      </div>\n      <div> {{review.userInfo.username}}\n        <span class=\"date-span\"> {{review.dateOfReview}}</span>\n      </div>\n    </ion-item>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/similar-product/similar-product.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/similar-product/similar-product.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" ion-no-ion-margin *ngIf=\"similarProduct\">\n    <div class=\"topSection\">\n        <div>\n            <ion-label class=\"leftHeading\">{{similarProduct.headingLeft}}</ion-label>\n        </div>\n        <div (click)=\"seeAllProduct()\" class=\"topRightSection\">\n            <ion-note color=\"danger\" class=\"rightHeading\">{{similarProduct.headingRight}}</ion-note>\n        </div>\n    </div>\n\n    <div class=\"productCardSection\">\n        <ion-card class=\"productCard contentSection\" *ngFor=\"let product of similarProduct.products;let i = index\">\n            <div ion-padding-horizontal class=\"productImage\" (click)=\"viewProduct(product)\">\n                <ion-img [src]=\"product.image\" ion-ion-margin-top></ion-img>\n                <div class=\"SimilarShareSection\" slot=\"end\">\n                    <ion-icon name=\"heart\" *ngIf=\"product.checked\" class=\"iconSize heartRed \" (click)=\"favoriteProduct(i)\"></ion-icon>\n                    <ion-icon name=\"heart-empty\" *ngIf=\"!product.checked\" class=\"iconSize heartRed\" (click)=\"favoriteProduct(i)\"></ion-icon>\n                    <ion-icon name=\"share\" class=\"iconSize shareIcon\" mode=\"md\" (click)=\"shareProduct(product)\"></ion-icon>\n                </div>\n            </div>\n\n            <ion-card-header>\n                <div class=\"dFlexAlignItemCenter offSection\">\n                    <div class=\"discountSection\">\n                        <ion-label ion-text-uppercase>4.5</ion-label>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </div>\n                    <div class=\"dFlexTitle\">\n                        <span class=\"titleFont\">{{product.salePrice}}</span>\n                        <span class=\"subTitle\"> {{product.regularPrice}}</span>\n                    </div>\n                </div>\n            </ion-card-header>\n            <ion-card-content ion-padding-top>\n                <p class=\"textBold font18 productDesc\">{{product.name}}</p>\n                <span class=\"productQty\">{{product.qty}} </span>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-product/view-product.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-product/view-product.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>product list</ion-title>\n    <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"cartPage()\">\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      <span class=\"cartQuantity\">{{cart.productQty}}</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"product\">\n  <ion-row>\n    <ion-col class=\"imageViewSection\">\n      <img [src]=\"product.images[0]\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row ion-ion-margin-bottom>\n    <ion-col size=\"8\" ion-padding-start>\n      <ion-label class=\"productTitle\" style=\"margin-left: 5%;\">{{product.name}}</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"iconSection\">\n\n      <ion-icon name=\"heart\" *ngIf=\"heartToggle\" class=\"iconSize heartRed\" (click)=\"favoriteProduct()\">\n        <ion-ripple-effect>\n        </ion-ripple-effect>\n      </ion-icon>\n      <ion-icon name=\"heart-empty\" *ngIf=\"!heartToggle\" class=\"iconSize heartRed\" (click)=\"favoriteProduct()\">\n      </ion-icon>\n      <ion-icon name=\"share\" class=\"iconSize shareIcon\" mode=\"md\" (click)=\"shareProduct(product)\"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"priceSection\" ion-ion-margin-top ion-ion-margin-bottom ion-padding-vertical>\n    <ion-col size=\"6\" ion-no-padding>\n      <div class=\"dFlexSection\">\n        <ion-label>Price</ion-label>\n        <ion-label color=\"primary\" ion-padding-start>₹{{product.salePrice}} / {{product.pricePerQuantity}}</ion-label>\n      </div>\n    </ion-col>\n    <ion-col size=\"6\" ion-no-padding class=\"quantitySection\">\n      <div class=\"dFlexSection\">\n        <ion-label>Quantity</ion-label>\n        <ion-select ion-padding-start [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"0\"\n          [(ngModel)]=\"selectedQty\" mode=\"ios\" (ionChange)=\"addQty(selectedQty)\">\n          <ion-select-option *ngFor=\"let item of quantityList\" [value]=\"item\" selected>{{item}}\n            <ion-label></ion-label>\n          </ion-select-option>\n        </ion-select>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <!--Check Delivery Component location:- components/check-delivery-->\n  <check-delivery></check-delivery>\n\n  <!--Review Component location:- components/stor-review-->\n  <stor-review></stor-review>\n\n  <!--Similar Product Component location:- components/similar-product>-->\n  <!-- <similar-product></similar-product> -->\n\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" text-center>\n        <ion-button expand=\"full\" color=\"light\" (click)=\"addtoCart()\" [disabled]=\"!selectedQty\">\n          <ion-text color=\"primary\" ion-text-uppercase>Add to Cart</ion-text>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" text-center>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"buyNow()\" [disabled]=\"!selectedQty\">\n          <ion-text ion-text-uppercase>Buy Now</ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/components/check-delivery/check-delivery.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/check-delivery/check-delivery.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.inputBorder {\n  border-bottom: 1px solid #a09b9b;\n}\n.pinInputSection {\n  display: flex;\n  align-items: flex-end;\n}\n.active {\n  --background:var(--ion-color-primary);\n  background: var(--ion-color-primary);\n  padding: 2px 5px;\n  border-radius: 3px;\n}\n.btnOutline {\n  border: 1px solid var(--ion-color-primary);\n  --border:1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n.homeBtn {\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n}\n.officeBtn {\n  margin-left: 10px;\n  max-width: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n}\n.BtnSection {\n  display: flex;\n}\n.btnColorWhite {\n  color: #fff;\n}\n.btnColorBlack {\n  color: #000;\n}\n.contentSection {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1kZWxpdmVyeS9jaGVjay1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW50b3NoYi9Eb2N1bWVudHMvbmV4dGdlbmFwcHMvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9jaGVjay1kZWxpdmVyeS9jaGVjay1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFhQTtFQUNJLGdDQUFBO0FERko7QUNJQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBRERKO0FDSUE7RUFDSSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRERKO0FDR0E7RUFDSSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0VBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRENKO0FDR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0dBO0VBQ0ksYUFBQTtBREFKO0FDRUE7RUFDSSxXQUFBO0FEQ0o7QUNDQTtFQUNJLFdBQUE7QURFSjtBQ0FBO0VBQ0ksZ0JBQUE7QURHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2stZGVsaXZlcnkvY2hlY2stZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmlucHV0Qm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMDliOWI7XG59XG5cbi5waW5JbnB1dFNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5hY3RpdmUge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmJ0bk91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvbWVCdG4ge1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG59XG5cbi5vZmZpY2VCdG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4uQnRuU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG5Db2xvcldoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG5Db2xvckJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb250ZW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG5cblxuLmlucHV0Qm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNhMDliOWI7XG59XG4ucGluSW5wdXRTZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uYWN0aXZle1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuT3V0bGluZXtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ob21lQnRue1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIFxufVxuXG4ub2ZmaWNlQnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIFxufVxuLkJ0blNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5idG5Db2xvcldoaXRle1xuICAgIGNvbG9yOiNmZmY7XG59XG4uYnRuQ29sb3JCbGFja3tcbiAgICBjb2xvcjojMDAwO1xufVxuLmNvbnRlbnRTZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/check-delivery/check-delivery.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/check-delivery/check-delivery.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDeliveryComponent", function() { return CheckDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */




let CheckDeliveryComponent = class CheckDeliveryComponent {
    constructor(activeRoute, utils) {
        this.activeRoute = activeRoute;
        this.utils = utils;
        this.pinCode = '';
        this.product = {};
        this.cashDeliveryToggle = false;
        this.freeShippingToggle = false;
        this.deliveryDaysToggle = false;
        this.activeRoute.params.subscribe((params) => {
            this.product = JSON.parse(params.product);
        });
    }
    checkPin(pinCode) {
        if (this.product.pin.length === 0) {
            this.utils.presentToast('All pincode supported for this product', true, 'bottom', 2100);
            return;
        }
        else {
            let matched = false;
            for (let i = 0; i < this.product.pin.length; i++) {
                if (pinCode === this.product.pin[i]) {
                    matched = true;
                }
            }
            if (matched) {
                this.utils.presentToast('This pin code is supported for this product', true, 'bottom', 2100);
            }
            else {
                this.utils.presentToast('This pin code is not supported for this product', true, 'bottom', 2100);
            }
        }
    }
    ngOnInit() { }
    addAddress(item) {
        if (item === 'cashDelivery') {
            this.cashDeliveryToggle = true;
            this.freeShippingToggle = false;
            this.deliveryDaysToggle = false;
        }
        if (item === 'freeShipping') {
            this.cashDeliveryToggle = false;
            this.freeShippingToggle = true;
            this.deliveryDaysToggle = false;
        }
        if (item === 'deliveryDays') {
            this.cashDeliveryToggle = false;
            this.freeShippingToggle = false;
            this.deliveryDaysToggle = true;
        }
    }
};
CheckDeliveryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsServiceService"] }
];
CheckDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'check-delivery',
        template: __webpack_require__(/*! raw-loader!./check-delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/check-delivery/check-delivery.component.html"),
        styles: [__webpack_require__(/*! ./check-delivery.component.scss */ "./src/app/components/check-delivery/check-delivery.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsServiceService"]])
], CheckDeliveryComponent);



/***/ }),

/***/ "./src/app/components/review/review.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.scroll-content {\n  padding: 0 !important;\n  ion-margin-bottom: 44px;\n  /* padding: 5px !important; */\n}\n.fix-content {\n  padding: 0 !important;\n  ion-margin-bottom: 44px;\n  /* padding: 5px !important; */\n}\n.card-header-style {\n  border-bottom: 1px solid #e0e0e0;\n  padding: 0px;\n  margin: 15px;\n  padding-bottom: 5px;\n}\n.cart-icon-number-div {\n  position: absolute;\n  right: 6px;\n  top: 9px;\n  background-color: white;\n  color: #4183d7;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-title-style {\n  color: white;\n  padding: 10px;\n  background: #4183D7 !important;\n  margin-top: -5px;\n  font-weight: bold;\n}\n.call-icon-style {\n  background: red;\n  color: #f4f4f4;\n}\n.footer-button {\n  margin: 0px;\n  width: 100%;\n  background: #32db64;\n  color: #f4f4f4;\n  font-size: 300;\n  font-weight: 300;\n}\n.share-icon-style {\n  position: absolute;\n  color: white;\n  font-size: 2em;\n  right: 60px;\n  top: 14px;\n  z-index: 10000;\n}\n.whatsapp-button-style {\n  position: fixed;\n  z-index: 100000;\n  bottom: 103px;\n  right: 15px;\n  height: 46px;\n  width: 46px;\n  background-color: #1ebea5;\n}\n.gradient-div {\n  background: linear-gradient(to right, #32db64 50%, #bdbdbd 50%);\n  height: 8px;\n  width: 35vw;\n  border-radius: 2px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.flex-center {\n  align-items: center;\n  justify-content: center;\n}\n.left-div {\n  text-align: center;\n  width: 40vw;\n  border-right: 1px solid #bdbdbd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.review-rating {\n  width: 30px;\n  height: 20px;\n  background: #32db64;\n  color: white;\n  margin-right: 10px;\n  font-size: 0.8em;\n  border-radius: 2px;\n}\n.date-span {\n  font-size: 0.8em;\n  color: grey;\n  float: right;\n}\n.small-star {\n  color: #a2a252;\n  font-size: 1em;\n}\n.image-div {\n  height: 100px;\n  width: 100px;\n}\n.revie-top-most-div {\n  display: flex;\n  justify-content: space-between;\n}\n.image-style-review {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.flex {\n  display: flex;\n}\n.revie-top-most-div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.contentSection {\n  background: #fff;\n}\n.itemBorder {\n  border-top: 1px solid #cdc9c9;\n}\n.starText {\n  font-size: 20px;\n}\n.averageReview {\n  font-size: 30px;\n}\n.icon-style {\n  font-size: 27px;\n  color: #f4d60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhbnRvc2hiL0RvY3VtZW50cy9uZXh0Z2VuYXBwcy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBV0E7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QURBSjtBQ0VBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FEQ0o7QUNDQTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBREVKO0FDQ0M7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFJQSx1QkFBQTtFQUlBLG1CQUFBO0FERUo7QUNBQztFQUNHLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FER0o7QUNEQztFQUNHLGVBQUE7RUFDQSxjQUFBO0FESUo7QUNDQztFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBQztFQUNPLGtCQUFBO0VBQ0osWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURHSjtBQ0RDO0VBQ08sZUFBQTtFQUNKLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURJSjtBQ0ZDO0VBQ0csK0RBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREtKO0FDSEM7RUFDRyxtQkFBQTtFQUNBLHVCQUFBO0FETUo7QUNKQztFQUNHLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRE9KO0FDTEM7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRFFKO0FDTkM7RUFDRyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEU0o7QUNQQztFQUNHLGNBQUE7RUFDQSxjQUFBO0FEVUo7QUNSQztFQUNPLGFBQUE7RUFDSixZQUFBO0FEV0o7QUNUQztFQUNPLGFBQUE7RUFDSiw4QkFBQTtBRFlKO0FDVkM7RUFDTyxZQUFBO0VBQ0osV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURhSjtBQ1ZDO0VBQ0ksYUFBQTtBRGFMO0FDVkM7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEYUo7QUNYQTtFQUNJLGdCQUFBO0FEY0o7QUNaQTtFQUNJLDZCQUFBO0FEZUo7QUNaQTtFQUNJLGVBQUE7QURlSjtBQ1pBO0VBQ0ksZUFBQTtBRGVKO0FDWkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBRGVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgaW9uLW1hcmdpbi1ib3R0b206IDQ0cHg7XG4gIC8qIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50OyAqL1xufVxuXG4uZml4LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGlvbi1tYXJnaW4tYm90dG9tOiA0NHB4O1xuICAvKiBwYWRkaW5nOiA1cHggIWltcG9ydGFudDsgKi9cbn1cblxuLmNhcmQtaGVhZGVyLXN0eWxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2FydC1pY29uLW51bWJlci1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2cHg7XG4gIHRvcDogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM0MTgzZDc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmlkZW8tdGl0bGUtc3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM0MTgzRDcgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYWxsLWljb24tc3R5bGUge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiAjZjRmNGY0O1xufVxuXG4uZm9vdGVyLWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzMyZGI2NDtcbiAgY29sb3I6ICNmNGY0ZjQ7XG4gIGZvbnQtc2l6ZTogMzAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc2hhcmUtaWNvbi1zdHlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJlbTtcbiAgcmlnaHQ6IDYwcHg7XG4gIHRvcDogMTRweDtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi53aGF0c2FwcC1idXR0b24tc3R5bGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgYm90dG9tOiAxMDNweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogNDZweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZWJlYTU7XG59XG5cbi5ncmFkaWVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMmRiNjQgNTAlLCAjYmRiZGJkIDUwJSk7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogMzV2dztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sZWZ0LWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwdnc7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmV2aWV3LXJhdGluZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMzMmRiNjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5kYXRlLXNwYW4ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogZ3JleTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc21hbGwtc3RhciB7XG4gIGNvbG9yOiAjYTJhMjUyO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmltYWdlLWRpdiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnJldmllLXRvcC1tb3N0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmltYWdlLXN0eWxlLXJldmlldyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZXZpZS10b3AtbW9zdC1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLml0ZW1Cb3JkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NkYzljOTtcbn1cblxuLnN0YXJUZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXZlcmFnZVJldmlldyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmljb24tc3R5bGUge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiAjZjRkNjBhO1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgICBpb24tbWFyZ2luLWJvdHRvbTo0NHB4O1xuICAgIC8qIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50OyAqL1xufVxuLmZpeC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgICBpb24tbWFyZ2luLWJvdHRvbTo0NHB4O1xuICAgIC8qIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50OyAqL1xufVxuLmNhcmQtaGVhZGVyLXN0eWxle1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuIC5jYXJ0LWljb24tbnVtYmVyLWRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDZweDtcbiAgICB0b3A6IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzQxODNkNztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gfVxuIC52aWRlby10aXRsZS1zdHlsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiM0MTgzRDchaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gfVxuIC5jYWxsLWljb24tc3R5bGV7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiAjZjRmNGY0O1xuXG4gfVxuXG5cbiAuZm9vdGVyLWJ1dHRvbntcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMzJkYjY0O1xuICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgIGZvbnQtc2l6ZTogMzAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gfVxuIC5zaGFyZS1pY29uLXN0eWxle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIHRvcDogMTRweDtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiB9XG4gLndoYXRzYXBwLWJ1dHRvbi1zdHlsZXtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICBib3R0b206IDEwM3B4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICB3aWR0aDogNDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViZWE1O1xuIH1cbiAuZ3JhZGllbnQtZGl2e1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMyZGI2NCA1MCUsICNiZGJkYmQgNTAlKTtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogMzV2dztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiB9XG4gLmZsZXgtY2VudGVye1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gfVxuIC5sZWZ0LWRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JkYmRiZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG4gLnJldmlldy1yYXRpbmd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMmRiNjQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuIH1cbiAuZGF0ZS1zcGFue1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gfVxuIC5zbWFsbC1zdGFye1xuICAgIGNvbG9yOiAjYTJhMjUyO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuIH1cbiAuaW1hZ2UtZGl2e1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiB9XG4gLnJldmllLXRvcC1tb3N0LWRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gfVxuIC5pbWFnZS1zdHlsZS1yZXZpZXd7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiB9XG5cbiAuZmxleHtcbiAgICAgZGlzcGxheTogZmxleDtcbiB9XG5cbiAucmV2aWUtdG9wLW1vc3QtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5pdGVtQm9yZGVye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2RjOWM5O1xufVxuXG4uc3RhclRleHR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXZlcmFnZVJldmlld3tcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pY29uLXN0eWxle1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBjb2xvcjogI2Y0ZDYwYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


let ReviewComponent = class ReviewComponent {
    constructor() {
        this.greenColor = 'green';
        this.starfive = 0;
        this.starfour = 0;
        this.starthree = 0;
        this.startwo = 0;
        this.starone = 0;
        this.averageReview = 0;
        this.fivepercentage = 0;
        this.fourpercentage = 0;
        this.threepercentage = 0;
        this.twopercentage = 0;
        this.onepercentage = 0;
        this.fivecss = '';
        this.fourcss = '';
        this.threecss = '';
        this.twocss = '';
        this.onecss = '';
        this.review = [
            {
                headline: 'Fresh Food',
                id: '9DFRHRGqjUoQYuZaqUdA',
                imageUrl: 'assets/imgs/herbs.jpg',
                message: 'Fresh and Good Product',
                productId: '04Nou0mdXzZ5oq0gtpgX',
                starCount: 5,
                userInfo: '',
                email: 'qwerty@ui.com',
                Uid: '7YVBOXqbr3bot7M27dYL8K625iD3',
                userId: '7YVBOXqbr3bot7M27dYL8K625iD3',
                username: 'Qwert',
            }
        ];
        this.countReview();
    }
    ngOnInit() { }
    countReview() {
        for (let i = 0; i < this.review.length; i++) {
            if (this.review[i].starCount === 5) {
                this.starfive++;
            }
            else if (this.review[i].starCount === 4) {
                this.starfour++;
            }
            else if (this.review[i].starCount === 3) {
                this.starthree++;
            }
            else if (this.review[i].starCount === 2) {
                this.startwo++;
            }
            else if (this.review[i].starCount === 1) {
                this.starfour++;
            }
        }
        this.averageReview = (this.starfive * 5 + this.starfour * 4 + this.starthree * 3 + this.startwo * 2 + this.starone * 1) / this.review.length;
        this.findPercentage();
    }
    findPercentage() {
        if (this.starfive >= this.starfour && this.starfive >= this.starthree && this.starfive >= this.startwo && this.starfive >= this.starone) {
            this.fivepercentage = 100;
            this.threepercentage = (this.starthree / this.starfive) * 100;
            this.fourpercentage = (this.starfour / this.starfive) * 100;
            this.twopercentage = (this.startwo / this.starfive) * 100;
            this.onepercentage = (this.starone / this.starfive) * 100;
        }
        else if (this.starfour >= this.starfive && this.starfour >= this.starthree && this.starfour >= this.startwo && this.starfour >= this.starone) {
            this.fourpercentage = 100;
            this.threepercentage = (this.starthree / this.starfour) * 100;
            this.fivepercentage = (this.starfive / this.starfour) * 100;
            this.twopercentage = (this.startwo / this.starfour) * 100;
            this.onepercentage = (this.starone / this.starfour) * 100;
        }
        else if (this.starthree >= this.starfive && this.starthree >= this.starfour && this.starthree >= this.startwo && this.starthree >= this.starone) {
            this.threepercentage = 100;
            this.fourpercentage = (this.starfour / this.starthree) * 100;
            this.fivepercentage = (this.starfive / this.starthree) * 100;
            this.twopercentage = (this.startwo / this.starthree) * 100;
            this.onepercentage = (this.starone / this.starthree) * 100;
        }
        else if (this.startwo >= this.starfive && this.startwo >= this.starfour && this.startwo >= this.startwo && this.startwo >= this.starone) {
            this.twopercentage = 100;
            this.fourpercentage = (this.starfour / this.startwo) * 100;
            this.fivepercentage = (this.starfive / this.startwo) * 100;
            this.threepercentage = (this.starthree / this.startwo) * 100;
            this.onepercentage = (this.starone / this.startwo) * 100;
        }
        else if (this.starone >= this.starfive && this.starone >= this.starfour && this.starone >= this.starthree && this.starone >= this.startwo) {
            this.onepercentage = 100;
            this.fourpercentage = (this.starfour / this.starone) * 100;
            this.fivepercentage = (this.starfive / this.starone) * 100;
            this.threepercentage = (this.starthree / this.starone) * 100;
            this.twopercentage = (this.startwo / this.starone) * 100;
        }
        this.onepercentage = this.onepercentage.toFixed(1);
        this.fourpercentage = this.fourpercentage.toFixed(1);
        this.fivepercentage = this.fivepercentage.toFixed(1);
        this.threepercentage = this.threepercentage.toFixed(1);
        this.twopercentage = this.twopercentage.toFixed(1);
        this.fivecss = 100 - this.fivepercentage;
        this.fourcss = 100 - this.fourpercentage;
        this.threecss = 100 - this.threepercentage;
        this.twocss = 100 - this.twopercentage;
        this.onecss = 100 - this.onepercentage;
    }
};
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stor-review',
        template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/review/review.component.html"),
        styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/components/review/review.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReviewComponent);



/***/ }),

/***/ "./src/app/components/similar-product/similar-product.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/similar-product/similar-product.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  padding: 0 40px;\n  position: relative;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnIcon {\n  background: var(--ion-color-primary);\n  --background:var(--ion-color-primary);\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.productName {\n  font-size: 22px;\n  color: var(--ion-color-dark);\n  padding-top: 8px;\n}\n.productDesc {\n  color: var(--ion-color-dark);\n  padding-bottom: 16px;\n  margin-top: 8px;\n}\n.productCardSection {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: hidden;\n}\n.productCard {\n  display: inline-block;\n  white-space: pre-line;\n  padding: 2px auto;\n  width: calc(70% - 20px);\n  height: auto;\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --border-radius: 8px;\n  border-radius: 8px;\n}\n.segmentBtn {\n  min-width: 45px;\n  max-width: 60px;\n}\n.textUnits {\n  font-size: 24px;\n}\n.SimilarShareSection {\n  display: flex;\n  font-size: 24px;\n  position: absolute;\n  right: 15px;\n  top: 0px;\n}\n.iconSize {\n  font-size: 24px;\n}\n.heartRed {\n  color: red;\n}\n.shareIcon {\n  margin-left: 8px;\n  color: #000;\n}\n.discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  left: 10px;\n}\n.dFlexTitle {\n  display: flex;\n  align-items: center;\n}\n.titleFont {\n  font-size: 20px;\n}\n.offSection {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW1pbGFyLXByb2R1Y3Qvc2ltaWxhci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhbnRvc2hiL0RvY3VtZW50cy9uZXh0Z2VuYXBwcy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL3NpbWlsYXItcHJvZHVjdC9zaW1pbGFyLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBV0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QURBSjtBQ0dFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7QURBSjtBQ0dFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURBTjtBQ0dFO0VBQ0UsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7QURBSjtBQ0VJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEQU47QUNLSTtFQUNFLGVBQUE7QURITjtBQ0tJO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FESE47QUNPRTtFQUNFLG9DQUFBO0VBQ0EscUNBQUE7QURKSjtBQ1FJO0VBQ0Usa0JBQUE7RUFDRixtQkFBQTtBRExKO0FDVUU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBRFBKO0FDVUU7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRFBKO0FDV0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEUko7QUNVRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEUEo7QUNVQTtFQUNNLGVBQUE7RUFDQSxlQUFBO0FEUE47QUNVRTtFQUNJLGVBQUE7QURQTjtBQ1dFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FEUko7QUNZRTtFQUNFLGVBQUE7QURUSjtBQ1lBO0VBQ0ksVUFBQTtBRFRKO0FDV0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QURSSjtBQ1dBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FEUko7QUNlQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRFpKO0FDZUE7RUFDSSxlQUFBO0FEWko7QUNlQTtFQUNJLHlCQUFBO0FEWkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbWlsYXItcHJvZHVjdC9zaW1pbGFyLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5sZWZ0SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWdodEhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b3BSaWdodFNlY3Rpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2R1Y3RDYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgd2lkdGg6IDYwJTtcbn1cbi5wcm9kdWN0Q2FyZCAucHJvZHVjdEltYWdlIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdENhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnByb2R1Y3RDYXJkIC5zdWJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGRCdG5JY29uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYWRkQnRuU2VjdGlvbiAuYWRkQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4ucHJvZHVjdE5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5wcm9kdWN0RGVzYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wcm9kdWN0Q2FyZFNlY3Rpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93LVg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ucHJvZHVjdENhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgcGFkZGluZzogMnB4IGF1dG87XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDIwcHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zZWdtZW50QnRuIHtcbiAgbWluLXdpZHRoOiA0NXB4O1xuICBtYXgtd2lkdGg6IDYwcHg7XG59XG5cbi50ZXh0VW5pdHMge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5TaW1pbGFyU2hhcmVTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDBweDtcbn1cblxuLmljb25TaXplIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaGVhcnRSZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc2hhcmVJY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5kaXNjb3VudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmRGbGV4VGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGVGb250IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ub2ZmU2VjdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG4uY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuICBcbiAgLmxlZnRIZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnJpZ2h0SGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC50b3BSaWdodFNlY3Rpb257XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAucHJvZHVjdENhcmR7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIHdpZHRoOiA2MCU7XG4gIFxuICAgIC5wcm9kdWN0SW1hZ2V7XG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgICAgXG4gICAgfVxuICBcbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgfVxuICAgIC5zdWJUaXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG4gIFxuICAuYWRkQnRuSWNvbntcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICAuYWRkQnRuU2VjdGlvbntcbiAgICAuYWRkQnRue1xuICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOjVweDsgXG4gICAgfVxuICAgIFxuICB9XG4gIFxuICAucHJvZHVjdE5hbWV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICB9XG4gIFxuICAucHJvZHVjdERlc2N7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgXG4gIC5wcm9kdWN0Q2FyZFNlY3Rpb257XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxuICAucHJvZHVjdENhcmR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICBwYWRkaW5nOiAycHggYXV0bztcbiAgICB3aWR0aDogY2FsYyg3MCUgLSAyMHB4KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG4uc2VnbWVudEJ0bntcbiAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgIG1heC13aWR0aDogNjBweDtcbiAgfVxuXG4gIC50ZXh0VW5pdHN7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gIH0gIFxuICBcblxuICAuU2ltaWxhclNoYXJlU2VjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiAwcHg7XG5cbiAgfVxuXG4gIC5pY29uU2l6ZXtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5oZWFydFJlZHtcbiAgICBjb2xvcjogcmVkO1xufVxuLnNoYXJlSWNvbntcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGNvbG9yOiMwMDA7XG59XG4gIFxuLmRpc2NvdW50U2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogIzE1YmYxNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbi5zaW1pbGFyUmF0ZVNlY3Rpb257XG5cbn1cblxuLmRGbGV4VGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGVGb250e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm9mZlNlY3Rpb257XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/similar-product/similar-product.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/similar-product/similar-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: SimilarProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarProductComponent", function() { return SimilarProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
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






let SimilarProductComponent = class SimilarProductComponent {
    constructor(dataServ, cart, route, toastCtrl) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.similarProduct = dataServ.similarProducts[0];
        this.similarProduct.products.map((ele) => ele.checked = false);
    }
    ngOnInit() { }
    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }
    shareProduct() {
    }
    favoriteProduct(index) {
        this.heartToggle = !this.heartToggle;
        this.similarProduct.products[index].checked = !this.similarProduct.products[index].checked;
        if (this.similarProduct.products[index].checked) {
            this.favoriteDone();
        }
        if (!this.similarProduct.products[index].checked) {
            this.favoriteRemove();
        }
    }
    favoriteDone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Add Favorite Product',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    favoriteRemove() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Remove Favorite Product',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    seeAllProduct() {
        this.route.navigate(['product-list']);
    }
};
SimilarProductComponent.ctorParameters = () => [
    { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
SimilarProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'similar-product',
        template: __webpack_require__(/*! raw-loader!./similar-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/similar-product/similar-product.component.html"),
        styles: [__webpack_require__(/*! ./similar-product.component.scss */ "./src/app/components/similar-product/similar-product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], SimilarProductComponent);



/***/ }),

/***/ "./src/app/view-product/view-product.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-product/view-product.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPageModule", function() { return ViewProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-product.page */ "./src/app/view-product/view-product.page.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_check_delivery_check_delivery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/check-delivery/check-delivery.component */ "./src/app/components/check-delivery/check-delivery.component.ts");
/* harmony import */ var _components_similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/similar-product/similar-product.component */ "./src/app/components/similar-product/similar-product.component.ts");
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
        component: _view_product_page__WEBPACK_IMPORTED_MODULE_6__["ViewProductPage"]
    }
];
let ViewProductPageModule = class ViewProductPageModule {
};
ViewProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_product_page__WEBPACK_IMPORTED_MODULE_6__["ViewProductPage"], _components_review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"], _components_check_delivery_check_delivery_component__WEBPACK_IMPORTED_MODULE_8__["CheckDeliveryComponent"], _components_similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_9__["SimilarProductComponent"]]
    })
], ViewProductPageModule);



/***/ }),

/***/ "./src/app/view-product/view-product.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-product/view-product.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.imageViewSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.imageViewSection img {\n  width: 70%;\n}\n.iconSection {\n  display: flex;\n  justify-content: center;\n}\n.iconSize {\n  font-size: 24px;\n}\n.heartRed {\n  color: red;\n}\n.productTitle {\n  font-size: 22px;\n}\n.shareIcon {\n  margin-left: 8px;\n}\n.dFlexSection {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.priceSection {\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n  width: 100%;\n  justify-content: space-between;\n  background: #fff;\n  padding-right: 16px;\n}\nion-footer ion-toolbar {\n  --background: #eaeaea;\n}\n.footer-md:before {\n  background-image: none;\n}\n.fixed {\n  position: fixed;\n}\n.quantitySection {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wcm9kdWN0L3ZpZXctcHJvZHVjdC5wYWdlLnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0FEQ0o7QUNHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBREFGO0FDR0E7RUFDRSxlQUFBO0FEQUY7QUNHQTtFQUNFLFVBQUE7QURBRjtBQ0dBO0VBQ0UsZUFBQTtBREFGO0FDR0E7RUFDRSxnQkFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURBRjtBQ0dBO0VBQ0UscUJBQUE7QURBRjtBQ0dBO0VBQ0Usc0JBQUE7QURBRjtBQ0dBO0VBQ0UsZUFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QURBRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5pbWFnZVZpZXdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1hZ2VWaWV3U2VjdGlvbiBpbWcge1xuICB3aWR0aDogNzAlO1xufVxuXG4uaWNvblNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb25TaXplIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaGVhcnRSZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHJvZHVjdFRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uc2hhcmVJY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmRGbGV4U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByaWNlU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5xdWFudGl0eVNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cbi5pbWFnZVZpZXdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbi5pY29uU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvblNpemUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5oZWFydFJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcm9kdWN0VGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIC8vIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5zaGFyZUljb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZEZsZXhTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpY2VTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWFlYWVhO1xufVxuXG4uZm9vdGVyLW1kOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnF1YW50aXR5U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/view-product/view-product.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-product/view-product.page.ts ***!
  \***************************************************/
/*! exports provided: ViewProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPage", function() { return ViewProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







let ViewProductPage = class ViewProductPage {
    constructor(activeRoute, dataServ, cart, toastCtrl, route, socialSharing) {
        this.activeRoute = activeRoute;
        this.dataServ = dataServ;
        this.cart = cart;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.socialSharing = socialSharing;
        this.customPopoverOptions = {};
        this.quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.activeRoute.params.subscribe((params) => {
            this.product = JSON.parse(params.product);
        });
        this.heartToggle = false;
    }
    ngOnInit() {
    }
    shareProduct() {
        this.socialSharing.share('https://store.enappd.com');
    }
    favoriteProduct() {
        this.heartToggle = !this.heartToggle;
        if (this.heartToggle) {
            this.favoriteDone();
        }
        if (!this.heartToggle) {
            this.favoriteRemove();
        }
    }
    addQty() {
    }
    cartPage() {
        this.route.navigate(['cart']);
    }
    favoriteDone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Add Favorite Product',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    favoriteRemove() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Remove Favorite Product',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    addtoCart() {
        const productunits = this.cart.addCart.find(el => el.id === this.product.id);
        this.product.units = this.selectedQty;
        if (this.selectedQty > 0 && !productunits) {
            this.cart.productQty += this.product.units;
            this.cart.addCart.push(this.product);
        }
        else if (this.selectedQty > 0) {
            this.cart.productQty -= productunits.units;
            productunits.units = this.selectedQty;
            this.cart.productQty += this.selectedQty;
        }
    }
    buyNow() {
        this.product.units = this.selectedQty;
        if (this.selectedQty > 0) {
            this.cart.productQty = this.product.units;
            this.cart.addCart.push(this.product);
        }
        this.route.navigate(['cart']);
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
};
ViewProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
ViewProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-product',
        template: __webpack_require__(/*! raw-loader!./view-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-product/view-product.page.html"),
        styles: [__webpack_require__(/*! ./view-product.page.scss */ "./src/app/view-product/view-product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
], ViewProductPage);



/***/ })

}]);
//# sourceMappingURL=view-product-view-product-module-es2015.js.map