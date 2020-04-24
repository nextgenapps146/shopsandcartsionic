(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-card-my-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-card/my-card.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-card/my-card.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>myCard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/my-card/my-card.module.ts":
/*!*******************************************!*\
  !*** ./src/app/my-card/my-card.module.ts ***!
  \*******************************************/
/*! exports provided: MyCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardPageModule", function() { return MyCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-card.page */ "./src/app/my-card/my-card.page.ts");
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
        component: _my_card_page__WEBPACK_IMPORTED_MODULE_6__["MyCardPage"]
    }
];
let MyCardPageModule = class MyCardPageModule {
};
MyCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_card_page__WEBPACK_IMPORTED_MODULE_6__["MyCardPage"]]
    })
], MyCardPageModule);



/***/ }),

/***/ "./src/app/my-card/my-card.page.scss":
/*!*******************************************!*\
  !*** ./src/app/my-card/my-card.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FyZC9teS1jYXJkLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9zYW50b3NoYi9Eb2N1bWVudHMvbmV4dGdlbmFwcHMvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvbXktY2FyZC9teS1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9teS1jYXJkL215LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi8iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/my-card/my-card.page.ts":
/*!*****************************************!*\
  !*** ./src/app/my-card/my-card.page.ts ***!
  \*****************************************/
/*! exports provided: MyCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardPage", function() { return MyCardPage; });
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


let MyCardPage = class MyCardPage {
    constructor() { }
    ngOnInit() {
    }
};
MyCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-card',
        template: __webpack_require__(/*! raw-loader!./my-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-card/my-card.page.html"),
        styles: [__webpack_require__(/*! ./my-card.page.scss */ "./src/app/my-card/my-card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyCardPage);



/***/ })

}]);
//# sourceMappingURL=my-card-my-card-module-es2015.js.map