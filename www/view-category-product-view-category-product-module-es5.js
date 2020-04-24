(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-category-product-view-category-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-category-product/view-category-product.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-category-product/view-category-product.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>{{categoryName}}</ion-title>\n    <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"cartPage()\">\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      <span class=\"cartQuantity\">{{cart.productQty}}</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list ion-padding-top>\n    <ion-item *ngFor=\"let product of categoryProducts | async;let i = index\" ion-no-padding>\n      <div class=\"productSection\">\n        <ion-col size=\"4\" (click)=\"viewProduct(product)\">\n          <div class=\"imageSection\" padding>\n            <img [src]=\"product.images[0]\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"productshowSection\">\n            <div class=\"productTitle pRelative\">\n              <div class=\"discountSection\">\n                <ion-label ion-text-uppercase>{{product.offer}} %off</ion-label>\n              </div>\n              <ion-row (click)=\"viewProduct(product)\">\n                <div ion-ion-margin-top ion-padding-top>\n                  <h4 class=\"title textBold\">{{product.name}}</h4>\n                  <span class=\"productQty\">{{product.pricePerQuantity}} </span>\n                </div>\n              </ion-row>\n              <ion-row class=\"footerRowSection\">\n                <ion-col size=\"4\">\n                  <h6>₹{{product.salePrice}}</h6>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <div class=\"productCartSection\" text-right>\n                    <div class=\"addBtnSection\">\n                      <ion-button size=\"default\" color=\"danger\" *ngIf=\"product.units === 0\" (click)=\"addToCart(product)\">Add\n                      </ion-button>\n                      <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n                        <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove', product)\" class=\"segmentBtn\">\n                          <ion-icon name=\"remove-circle-outline\"></ion-icon>\n                        </ion-segment-button>\n                        <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n                        <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add', product)\" class=\"segmentBtn\">\n                          <ion-icon name=\"add-circle-outline\"></ion-icon>\n                        </ion-segment-button>\n                      </ion-segment>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </ion-col>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/view-category-product/view-category-product.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view-category-product/view-category-product.module.ts ***!
  \***********************************************************************/
/*! exports provided: ViewCategoryProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoryProductPageModule", function() { return ViewCategoryProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_category_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-category-product.page */ "./src/app/view-category-product/view-category-product.page.ts");
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
        component: _view_category_product_page__WEBPACK_IMPORTED_MODULE_6__["ViewCategoryProductPage"]
    }
];
var ViewCategoryProductPageModule = /** @class */ (function () {
    function ViewCategoryProductPageModule() {
    }
    ViewCategoryProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_category_product_page__WEBPACK_IMPORTED_MODULE_6__["ViewCategoryProductPage"]]
        })
    ], ViewCategoryProductPageModule);
    return ViewCategoryProductPageModule;
}());



/***/ }),

/***/ "./src/app/view-category-product/view-category-product.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/view-category-product/view-category-product.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 4px 8px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: -5px;\n  left: 10px;\n}\n.discountSection ion-label {\n  font-size: 14px;\n}\n.productSection {\n  display: flex;\n  align-items: center;\n  padding-bottom: 16px;\n  padding-top: 16px;\n  width: 100%;\n}\nion-segment {\n  height: 36px;\n}\n.segmentBtn {\n  min-width: 30px;\n  max-width: 40px;\n}\n.footerRowSection {\n  display: flex;\n  align-items: flex-end;\n}\nion-segment {\n  align-items: center;\n}\nion-segment ion-text {\n  margin-top: 10px;\n}\nion-list {\n  background: #eaeaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jYXRlZ29yeS1wcm9kdWN0L3ZpZXctY2F0ZWdvcnktcHJvZHVjdC5wYWdlLnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL3ZpZXctY2F0ZWdvcnktcHJvZHVjdC92aWV3LWNhdGVnb3J5LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QURBSjtBQ0VJO0VBQ0ksZUFBQTtBREFSO0FDR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBREFKO0FDZ0JBO0VBQ0ksWUFBQTtBRGJKO0FDZ0JBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QURiSjtBQ2dCQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBRGJKO0FDZUE7RUFDSSxtQkFBQTtBRFpKO0FDYUk7RUFDSSxnQkFBQTtBRFhSO0FDZUE7RUFDSSxtQkFBQTtBRFpKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1jYXRlZ29yeS1wcm9kdWN0L3ZpZXctY2F0ZWdvcnktcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmRpc2NvdW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4uZGlzY291bnRTZWN0aW9uIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3RTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5zZWdtZW50QnRuIHtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbi5mb290ZXJSb3dTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tc2VnbWVudCBpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cbi5kaXNjb3VudFNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgbGVmdDogMTBweDtcblxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi5wcm9kdWN0U2VjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaW1hZ2VTZWN0aW9ue1xuICAgIC8vIHdpZHRoOiA0MCU7XG4gICAgaW1ne1xuICAgICAgICAvLyB3aWR0aDogNjUlO1xuICAgIH1cbn1cblxuLnByb2R1Y3RUaXRsZXtcbiAgICAvLyB3aWR0aDogNDAlO1xuXG59XG4ucHJvZHVjdENhcnRTZWN0aW9ue1xuICAgIC8vIHdpZHRoOiAyMCU7XG59XG5pb24tc2VnbWVudHtcbiAgICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5zZWdtZW50QnRue1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbi5mb290ZXJSb3dTZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuaW9uLXNlZ21lbnR7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBpb24tdGV4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6I2VhZWFlYTtcbn1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/view-category-product/view-category-product.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view-category-product/view-category-product.page.ts ***!
  \*********************************************************************/
/*! exports provided: ViewCategoryProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoryProductPage", function() { return ViewCategoryProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
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






var ViewCategoryProductPage = /** @class */ (function () {
    function ViewCategoryProductPage(activeRoute, cart, dataServ, route, fsServices) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.cart = cart;
        this.dataServ = dataServ;
        this.route = route;
        this.fsServices = fsServices;
        this.activeRoute.params.subscribe(function (params) {
            _this.categoryName = params.categoryName;
            _this.categoryId = params.categoryId;
            _this.fsServices.getProductsAccordingToCategory(_this.categoryId).then(function (data) {
                _this.categoryProducts = data;
            });
        });
    }
    ViewCategoryProductPage.prototype.ngOnInit = function () {
    };
    ViewCategoryProductPage.prototype.addToCart = function (product) {
        var productunits = this.cart.addCart.find(function (el) { return el.id === product.id; });
        if (productunits) {
            productunits.units += 1;
            this.cart.productQty += 1;
            product.units = productunits.units;
        }
        else {
            product.units = 1;
            this.cart.addCart.push(product);
            this.cart.productQty += 1;
        }
    };
    ViewCategoryProductPage.prototype.updateCart = function (productID, type, product) {
        var productunits = this.cart.addCart.find(function (el) { return el.id === productID; });
        var productIndex = this.cart.addCart.indexOf(function (el) { return el.id === productID; });
        if (type === 'add') {
            productunits.units += 1;
            this.cart.productQty += 1;
            product.units = productunits.units;
        }
        if (type === 'remove') {
            productunits.units -= 1;
            this.cart.productQty -= 1;
            product.units = productunits.units;
            if (product.units === 0) {
                this.cart.addCart.splice(productIndex, 1);
            }
        }
    };
    ViewCategoryProductPage.prototype.cartPage = function () {
        this.route.navigate(['cart']);
    };
    ViewCategoryProductPage.prototype.viewProduct = function (product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    };
    ViewCategoryProductPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
    ]; };
    ViewCategoryProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-category-product',
            template: __webpack_require__(/*! raw-loader!./view-category-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-category-product/view-category-product.page.html"),
            styles: [__webpack_require__(/*! ./view-category-product.page.scss */ "./src/app/view-category-product/view-category-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
    ], ViewCategoryProductPage);
    return ViewCategoryProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-category-product-view-category-product-module-es5.js.map