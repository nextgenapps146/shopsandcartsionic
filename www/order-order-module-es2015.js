(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>My Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n\n  <!-- <ion-list *ngIf=\"products.cartArray.length>0\">\n    <ion-item *ngFor=\"let c of products.cartArray;let i=index\" class=\"order-item\">\n      <ion-thumbnail class=\"thumbnail\">\n        <img class=\"thumb-img\" class=\"sideImg\" src=\"{{c.image}}\" alt=\"Images\">\n      </ion-thumbnail>\n      <div item-content style=\"width:calc(100% - 120px) ;\">\n        <ion-badge item-content *ngIf=\"c.off!=undefined\">Up to {{c.off}}</ion-badge><br>\n        <h2 ion-content>\n          <b class=\"order-name\">{{c.name}}</b>\n        </h2>\n        {{c.qty}}\n        <br>\n        <ion-grid class=\"o-list\">\n          <ion-row>\n\n            <ion-col col-4 class=\"o-col\">\n              <strong><span>${{c.price}}</span></strong>\n            </ion-col>\n            <ion-col col-8 class=\"right\">\n              <span class=\"vertical\" [ngClass]=\"{'red':c.status=='Late','green':c.status=='Delivered','orange':c.status=='Processing'}\">{{c.status}}</span>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-item>\n  </ion-list> -->\n\n  <div class=\"order-div\" *ngIf=\"fsServices.UserOrders.length==0\">\n    <img src=\"assets/imgs/pixel2.jpeg\" alt=\"image\">\n    <br>\n    <div class=\"cartTextSection\" text-center>\n      <h3>You have no past orders</h3>\n      <p>Lets get you started</p>\n      <ion-button color=\"primary\" (click)=\"startShopping()\">Start shopping </ion-button>\n    </div>\n\n  </div>\n  <ion-list ion-ion-margin-top *ngIf=\"orders\">\n    <ion-card *ngFor=\"let order of orders | async;let i=index\" ion-no-padding class=\"cardSection\">\n      <div class=\"productSection\">\n        <div class=\"productTitle pRelative order-summary\">\n          <div ion-ion-margin-top ion-padding-top>\n            <h6>Grand Total :₹{{order.grandTotal}}</h6>\n            <h6>Number of products : ₹{{order.products.length}}</h6>\n          </div>\n        </div>\n        <div slot=\"end\" class=\"productCartSection\">\n          <div class=\"addBtnSection\">\n            <ion-row>\n              <ion-col class=\"right\">\n                <span class=\"vertical\" [ngClass]=\"{'red':order.status=='Late','green':order.status=='Delivered','orange':order.status=='Processing'}\">{{order.status}}</span>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <div *ngFor=\"let product of order.products\"  class=\"address-block\">\n        <div class=\"productSection\">\n          <div class=\"imageSection\" padding>\n            <img [src]=\"product.images[0]\">\n          </div>\n          <div class=\"productTitle pRelative\">\n            <div class=\"discountSection\">\n              <ion-label ion-text-uppercase>{{product.offer}} % off</ion-label>\n            </div>\n            <div ion-ion-margin-top ion-padding-top>\n              <h4 class=\"title\">{{product.name}}</h4>\n              <h6>₹ {{product.regularPrice}}</h6>\n              <h6>Quanity : {{product.units}}</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"address-block\">\n        <div class=\"addBtnSection\">\n          <ion-row>\n            <ion-col>\n              Address:\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{order.address.flatNumber}} {{order.address.street}} {{order.address.locality}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Deliverd To:\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{order.address.title}} {{order.address.name}}\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div class=\"address-block\" *ngIf=\"order.promoCode\">\n        <div class=\"addBtnSection\">\n          <ion-row>\n            <ion-col>\n              PromoCode:\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{order.promoCode.code}} {{order.promoCode.discount}}% off\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </ion-card>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/order/order.page.ts");
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
        component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/order/order.page.scss":
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 4px 8px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: -5px;\n  left: 10px;\n}\n.discountSection ion-label {\n  font-size: 14px;\n}\n.order-summary {\n  text-align: center;\n  min-width: 100%;\n}\nion-list {\n  --background:transparent;\n  background: transparent;\n}\n.cardSection {\n  background: #fff;\n  margin: 6px;\n  margin-top: 0;\n}\n.productSection {\n  display: flex;\n  align-items: center;\n  padding-bottom: 16px;\n  padding-top: 10px;\n  width: 100%;\n}\n.imageSection {\n  width: 36%;\n}\n.productTitle {\n  width: 40%;\n}\n.productCartSection {\n  width: 20%;\n}\n.segmentBtn {\n  min-width: 30px;\n  max-width: 40px;\n}\n.red {\n  color: red;\n  font-weight: bold;\n}\n.orange {\n  color: orange;\n  font-weight: bold;\n}\n.green {\n  color: green;\n  font-weight: bold;\n}\nh6 {\n  margin: 0;\n}\n.address-block {\n  border-top: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwiL1VzZXJzL3NhbnRvc2hiL0RvY3VtZW50cy9uZXh0Z2VuYXBwcy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9vcmRlci9vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRERKO0FDR0k7RUFDSSxlQUFBO0FERFI7QUNJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBRERKO0FDR0E7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0FEQUo7QUNJQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURESjtBQ0dBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURBSjtBQ0VBO0VBQ0ksVUFBQTtBRENKO0FDS0E7RUFDSSxVQUFBO0FESEo7QUNNQTtFQUNJLFVBQUE7QURISjtBQ01BO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QURISjtBQ01BO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FESEo7QUNLQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBREZKO0FDSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QURESjtBQ0dBO0VBQ0ksU0FBQTtBREFKO0FDR0E7RUFDSSxxQkFBQTtBREFKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5kaXNjb3VudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBsZWZ0OiAxMHB4O1xufVxuLmRpc2NvdW50U2VjdGlvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5vcmRlci1zdW1tYXJ5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA2cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5wcm9kdWN0U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZVNlY3Rpb24ge1xuICB3aWR0aDogMzYlO1xufVxuLnByb2R1Y3RUaXRsZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5wcm9kdWN0Q2FydFNlY3Rpb24ge1xuICB3aWR0aDogMjAlO1xufVxuXG4uc2VnbWVudEJ0biB7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA0MHB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcmFuZ2Uge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDYge1xuICBtYXJnaW46IDA7XG59XG5cbi5hZGRyZXNzLWJsb2NrIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cblxuXG4uZGlzY291bnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGxlZnQ6IDEwcHg7XG5cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4ub3JkZXItc3VtbWFyeXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3R7XG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cbn1cblxuLmNhcmRTZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi5wcm9kdWN0U2VjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaW1hZ2VTZWN0aW9ue1xuICAgIHdpZHRoOiAzNiU7XG4gICAgaW1ne1xuICAgICAgICAvLyB3aWR0aDogNjUlO1xuICAgIH1cbn1cblxuLnByb2R1Y3RUaXRsZXtcbiAgICB3aWR0aDogNDAlO1xuXG59XG4ucHJvZHVjdENhcnRTZWN0aW9ue1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5zZWdtZW50QnRue1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbi5yZWR7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9yYW5nZXtcbiAgICBjb2xvcjpvcmFuZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZ3JlZW57XG4gICAgY29sb3I6Z3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oNntcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hZGRyZXNzLWJsb2Nre1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/order/order.page.ts":
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ProductService_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ProductService/products.service */ "./src/app/services/ProductService/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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






let OrderPage = class OrderPage {
    constructor(products, fsServices, util, route) {
        this.products = products;
        this.fsServices = fsServices;
        this.util = util;
        this.route = route;
        this.fsServices.getUserOrders().then((data) => {
            this.orders = data;
        });
    }
    ngOnInit() {
    }
    startShopping() {
        this.route.navigate(['home']);
    }
};
OrderPage.ctorParameters = () => [
    { type: _services_ProductService_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/index.js!./src/app/order/order.page.html"),
        styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/order/order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ProductService_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"],
        _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map