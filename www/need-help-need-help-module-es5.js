(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["need-help-need-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/need-help/need-help.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/need-help/need-help.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>need help</ion-title>\n    <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"cartPage()\">\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      <span class=\"cartQuantity\">{{cart.productQty}}</span>\n    </ion-button>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar color=\"light\" md=\"ios\" (click)=\"searchPage()\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card ion-ion-margin-bottom ion-no-padding color=\"light\" *ngFor=\"let question of questions; let i = index\" class=\"cardSection\"\n    (click)=\"openIssue(i, question)\">\n    <ion-card-header>\n      <ion-card-subtitle class=\"font18\">{{question}}</ion-card-subtitle>\n      <ion-icon name=\"arrow-forward\" float-right mode=\"ios\"></ion-icon>\n    </ion-card-header>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/need-help/need-help.module.ts":
/*!***********************************************!*\
  !*** ./src/app/need-help/need-help.module.ts ***!
  \***********************************************/
/*! exports provided: NeedHelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpPageModule", function() { return NeedHelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _need_help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./need-help.page */ "./src/app/need-help/need-help.page.ts");
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
        component: _need_help_page__WEBPACK_IMPORTED_MODULE_6__["NeedHelpPage"]
    }
];
var NeedHelpPageModule = /** @class */ (function () {
    function NeedHelpPageModule() {
    }
    NeedHelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_need_help_page__WEBPACK_IMPORTED_MODULE_6__["NeedHelpPage"]]
        })
    ], NeedHelpPageModule);
    return NeedHelpPageModule;
}());



/***/ }),

/***/ "./src/app/need-help/need-help.page.scss":
/*!***********************************************!*\
  !*** ./src/app/need-help/need-help.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.cardSection ion-card-header {\n  display: flex;\n  justify-content: space-between;\n}\n.cardSection ion-icon {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVlZC1oZWxwL25lZWQtaGVscC5wYWdlLnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL25lZWQtaGVscC9uZWVkLWhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Ozs7RUFBQTtBQVlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FERlI7QUNJSTtFQUNJLGVBQUE7QURGUiIsImZpbGUiOiJzcmMvYXBwL25lZWQtaGVscC9uZWVkLWhlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5jYXJkU2VjdGlvbiBpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZFNlY3Rpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59IiwiXG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cbi5jYXJkU2VjdGlvbntcbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIFxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/need-help/need-help.page.ts":
/*!*********************************************!*\
  !*** ./src/app/need-help/need-help.page.ts ***!
  \*********************************************/
/*! exports provided: NeedHelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpPage", function() { return NeedHelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _issue_issue_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../issue/issue.page */ "./src/app/issue/issue.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */








var NeedHelpPage = /** @class */ (function () {
    function NeedHelpPage(dataServ, modalController, route, cart) {
        this.dataServ = dataServ;
        this.modalController = modalController;
        this.route = route;
        this.cart = cart;
        this.faqs = dataServ.needHelp;
        this.questions = Object.keys(dataServ.needHelp);
    }
    NeedHelpPage.prototype.ngOnInit = function () {
    };
    NeedHelpPage.prototype.openIssue = function (i, question) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _issue_issue_page__WEBPACK_IMPORTED_MODULE_4__["IssuePage"],
                            componentProps: { value: Object.values(this.faqs)[i], title: question }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NeedHelpPage.prototype.searchPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NeedHelpPage.prototype.cartPage = function () {
        this.route.navigate(['cart']);
    };
    NeedHelpPage.ctorParameters = function () { return [
        { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
    ]; };
    NeedHelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-need-help',
            template: __webpack_require__(/*! raw-loader!./need-help.page.html */ "./node_modules/raw-loader/index.js!./src/app/need-help/need-help.page.html"),
            styles: [__webpack_require__(/*! ./need-help.page.scss */ "./src/app/need-help/need-help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
    ], NeedHelpPage);
    return NeedHelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=need-help-need-help-module-es5.js.map