(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title-ios\" ion-text-capitalize>Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <std-accordian *ngFor=\"let item of categoryItems | async\" [title]=\"item.name\" [image]=\"item.images[0]\"\n    [label]=\"item.discount\" [desc]=\"item.description\" [id]=\"item.id\">\n    <div *ngFor=\"let category of fsServices.categories\">\n      <ion-card class=\"childCard\" ion-no-ion-margin ion-padding-top *ngIf=\"category.id === item.id\">\n        <ion-row class=\"CardrowSection\" ion-ion-margin-bottom>\n          <ion-col ion-no-padding (click)=\"goToProducts(category,category.child)\" class=\"cardCol\" mdWavesEffect size=\"6\"\n            *ngFor=\"let child of category.child\">\n            <ion-card class=\"childCardSection\">\n              <img class=\"child\" src=\"{{child.images[0]}}\" alt=\"\">\n              <ion-card-content>\n                <span class=\"under\">{{child.name}}</span>\n                <ion-row class=\"bottom-text text-center green center-xs\" *ngIf=\"child.offer\">\n                  <span class=\"h-off\"> {{child.offer}}% <span style=\"margin-left:4px\">off</span> </span>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </std-accordian>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"contentSection\" [ngClass]=\"{'minheight': cardContentToggle, 'carminHeight': !cardContentToggle}\" id=\"accordian\">\n    <ion-card-header (click)=\"toggleAccordian()\" [ngClass]=\"{'textColorWhite': cardContentToggle, 'textColorBlack': !cardContentToggle}\"\n        class=\"pRelative\">\n        <div>\n            <div class=\"discountSection\">\n                <ion-label ion-text-uppercase>{{label}}</ion-label>\n            </div>\n            <img class=\"sideImg\" src=\"{{image}}\" alt=\"\">\n        </div>\n        <div class=\"pRelative\">\n            <ion-buttons class=\"iconBtn\">\n                <ion-icon *ngIf=\"!accordianExpandable\" name=\"arrow-down\" mode=\"ios\" class=\"icons\" color=\"primary\" style=\"    ion-ion-margin-top: 5px;\"></ion-icon>\n                <ion-icon *ngIf=\"accordianExpandable\" name=\"arrow-up\" mode=\"ios\" class=\"icons whiteColor\" color=\"light\"\n                    style=\"    ion-ion-margin-top: 5px;\"></ion-icon>\n            </ion-buttons>\n        </div>\n        <div class=\"titleSection\">\n            <b><span class=\"title\">{{title}}</span></b>\n            <br>\n            <span class=\"des\">{{desc}}</span>\n        </div>\n    </ion-card-header>\n    <ion-card-content #cardContent *ngIf=\"cardContentToggle\" ion-ion-margin-bottom ion-no-ion-margin ion-no-padding>\n        <ng-content></ng-content>\n    </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");









const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _share_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"], _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"]],
        entryComponents: []
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.childCard {\n  width: 100%;\n  border-radius: 0;\n}\nion-col.cardCol {\n  text-align: center;\n  margin-top: 0px;\n  padding-bottom: 5px;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n}\n.childCard {\n  width: 100%;\n  border-radius: 0;\n  --box-shadow:none;\n  box-shadow: none;\n  padding-top: 8px;\n}\nion-row.CardrowSection {\n  text-align: center;\n}\nion-col.cardCol {\n  text-align: center;\n  margin-top: 0px;\n  padding-bottom: 5px;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n}\n.childCardSection {\n  margin: 0 2px;\n  min-height: 210px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.childCardSection .child {\n  width: 52%;\n}\n.bottom-text {\n  bottom: 5px;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n.green {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9zYW50b3NoYi9Eb2N1bWVudHMvbmV4dGdlbmFwcHMvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFXQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBREFKO0FDR0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURBSjtBQ0dFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEQUo7QUNHRTtFQUNFLGtCQUFBO0FEQUo7QUNHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBREFKO0FDR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0VFO0VBQ0UsVUFBQTtBREFKO0FDR0U7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBREFKO0FDR0U7RUFDRSxZQUFBO0FEQUoiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5jaGlsZENhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLWNvbC5jYXJkQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jaGlsZENhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbmlvbi1yb3cuQ2FyZHJvd1NlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb2wuY2FyZENvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2hpbGRDYXJkU2VjdGlvbiB7XG4gIG1hcmdpbjogMCAycHg7XG4gIG1pbi1oZWlnaHQ6IDIxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGlsZENhcmRTZWN0aW9uIC5jaGlsZCB7XG4gIHdpZHRoOiA1MiU7XG59XG5cbi5ib3R0b20tdGV4dCB7XG4gIGJvdHRvbTogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cbi5jaGlsZENhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgaW9uLWNvbC5jYXJkQ29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuY2hpbGRDYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIHBhZGRpbmctdG9wOjhweDtcbiAgfVxuXG4gIGlvbi1yb3cuQ2FyZHJvd1NlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG5cbiAgaW9uLWNvbC5jYXJkQ29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuY2hpbGRDYXJkU2VjdGlvbntcbiAgICBtYXJnaW46IDAgMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDIxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmNoaWxke1xuICAgIHdpZHRoOjUyJVxuICB9XG4gIH1cbiAgLmJvdHRvbS10ZXh0e1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXkgOmZsZXg7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuXG4gIC5ncmVlbiB7XG4gICAgY29sb3I6Z3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */





let CategoriesPage = class CategoriesPage {
    constructor(http, route, fsServices) {
        this.http = http;
        this.route = route;
        this.fsServices = fsServices;
        this.fsServices.getCategories().then((data) => {
            this.categoryItems = data;
        });
    }
    ngOnInit() {
    }
    goToProducts(category) {
        this.route.navigate(['view-category-product', { categoryName: category.name, categoryId: category.id }]);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html"),
        styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], CategoriesPage);



/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  margin: 8px;\n  margin: 8px;\n}\n.card-header {\n  background-color: white;\n  color: #0c0b0b;\n}\n.sideImg {\n  height: 80px;\n  width: 100px;\n  float: left;\n  margin-top: 25px;\n}\n.title {\n  margin-top: 20px;\n  margin-left: 10px;\n  font-size: 22px;\n}\n.colorChange {\n  background-color: var(--ion-color-primary);\n}\n.labels {\n  margin-left: 7px;\n}\n.des {\n  margin-left: 10px;\n  font-size: 18px;\n}\n.discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: 4px;\n  left: 10px;\n}\n.iconBtn {\n  position: absolute;\n  right: -10px;\n  top: -20px;\n}\n.iconBtn .icons {\n  float: right;\n  font-size: 18px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 0px;\n  zoom: 1.5;\n}\n.minheight {\n  background: var(--ion-color-primary);\n}\n.carminHeight {\n  background: #fff;\n}\n.titleSection {\n  white-space: nowrap;\n  width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.textColorWhite {\n  color: #fff;\n  color: var(--ion-color-light);\n}\n.textColorBlack {\n  color: #000;\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudG9zaGIvRG9jdW1lbnRzL25leHRnZW5hcHBzL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjs7Ozs7Ozs7RUFBQTtBQVdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QURGSjtBQ0tBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FERko7QUNNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FESEY7QUNLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FERkY7QUNJQTtFQUNFLDBDQUFBO0FEREY7QUNJQTtFQUNFLGdCQUFBO0FEREY7QUNJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRERGO0FDS0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FERko7QUNLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURGSjtBQ0dJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FERFI7QUNNQTtFQUNJLG9DQUFBO0FESEo7QUNLQTtFQUNJLGdCQUFBO0FERko7QUNLQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QURGSjtBQ0tBO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FERko7QUNJQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtBRERKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgbWFyZ2luOiA4cHg7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwYzBiMGI7XG59XG5cbi5zaWRlSW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY29sb3JDaGFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uZGVzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmRpc2NvdW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5pY29uQnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogLTIwcHg7XG59XG4uaWNvbkJ0biAuaWNvbnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICB6b29tOiAxLjU7XG59XG5cbi5taW5oZWlnaHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jYXJtaW5IZWlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4udGl0bGVTZWN0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDYwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50ZXh0Q29sb3JXaGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnRleHRDb2xvckJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59IiwiXG5cbi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cblxuLmNvbnRlbnRTZWN0aW9ue1xuICAgIG1hcmdpbjogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG4uY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6cmdiKDEyLCAxMSwgMTEpO1xufVxuLmNhcmQtY29udGVudHtcbn1cbi5zaWRlSW1ne1xuICBoZWlnaHQ6ODBweDtcbiAgd2lkdGg6MTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnRpdGxle1xuICBtYXJnaW4tdG9wOjIwcHg7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5jb2xvckNoYW5nZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXG59XG5cbi5sYWJlbHN7XG4gIG1hcmdpbi1sZWZ0OjdweDtcbn1cblxuLmRlc3tcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cbi5kaXNjb3VudFNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuLmljb25CdG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICB0b3A6IC0yMHB4O1xuICAgIC5pY29uc3tcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB6b29tOjEuNTtcbiAgICAgIFxuICAgIH1cbn1cblxuLm1pbmhlaWdodHtcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5jYXJtaW5IZWlnaHR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnRpdGxlU2VjdGlvbntcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRleHRDb2xvcldoaXRle1xuICAgIGNvbG9yOiNmZmY7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxufVxuLnRleHRDb2xvckJsYWNre1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
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


let CategoriesComponent = class CategoriesComponent {
    constructor(render) {
        this.render = render;
        this.accordianExpandable = false;
        this.cardContentToggle = false;
    }
    ngOnInit() {
    }
    toggleAccordian() {
        this.cardContentToggle = !this.cardContentToggle;
        this.accordianExpandable = !this.accordianExpandable;
        if (this.accordianExpandable) {
        }
    }
    condition() {
        return this.accordianExpandable;
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardContent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesComponent.prototype, "cardContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesComponent.prototype, "desc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesComponent.prototype, "youInm", void 0);
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'store-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
], CategoriesComponent);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map