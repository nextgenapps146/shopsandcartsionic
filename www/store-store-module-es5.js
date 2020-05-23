(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-store-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"dFlexRow deliverySection\">\n            <!-- <ion-note class=\"whiteColor\">Delivery Location</ion-note> -->\n            <div class=\"flex\">\n                <ion-label class=\"locationAddress\">Southern Spices</ion-label>\n                <ion-icon name=\"create\" mode=\"md\" (click)=\"addLocation()\" class=\"create_icon\"></ion-icon>\n            </div>\n        </div>\n\n        <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"onchatroom()\">\n            <!-- <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon> -->\n            <ion-icon name=\"chatboxes\"></ion-icon>\n            <!-- <span class=\"cartQuantity\">2</span> -->\n        </ion-button>\n    </ion-toolbar>\n    <ion-toolbar color=\"primary\">\n        <ion-searchbar color=\"light\" md=\"ios\" (click)=\"searchPage()\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/store/store-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/store/store-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageRoutingModule", function() { return StorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.page */ "./src/app/store/store.page.ts");




var routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_3__["StorePage"]
    }
];
var StorePageRoutingModule = /** @class */ (function () {
    function StorePageRoutingModule() {
    }
    StorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StorePageRoutingModule);
    return StorePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-routing.module */ "./src/app/store/store-routing.module.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.page */ "./src/app/store/store.page.ts");







var StorePageModule = /** @class */ (function () {
    function StorePageModule() {
    }
    StorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _store_routing_module__WEBPACK_IMPORTED_MODULE_5__["StorePageRoutingModule"]
            ],
            declarations: [_store_page__WEBPACK_IMPORTED_MODULE_6__["StorePage"]]
        })
    ], StorePageModule);
    return StorePageModule;
}());



/***/ }),

/***/ "./src/app/store/store.page.scss":
/*!***************************************!*\
  !*** ./src/app/store/store.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/store/store.page.ts":
/*!*************************************!*\
  !*** ./src/app/store/store.page.ts ***!
  \*************************************/
/*! exports provided: StorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePage", function() { return StorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");





var StorePage = /** @class */ (function () {
    function StorePage(router, route, utils, fireStore) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.utils = utils;
        this.fireStore = fireStore;
        this.users = [];
        this.userId = this.utils.userInfo.id;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.storeid && params.storename) {
                _this.storeid = params.storeid;
                _this.storename = params.storename;
                localStorage.setItem("sellerid", _this.storeid);
            }
        });
    }
    StorePage.prototype.getChatUsers = function () {
        var _this = this;
        this.fireStore.checkChatContacts(this.storeid).then(function (messages) {
            messages.subscribe(function (list) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var index, record, record_1, navigationExtras;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            //this.users = list;
                            console.log(list);
                            index = (list || []).findIndex(function (r) { return r.customerid == _this.utils.userInfo.id && r.sellerid == _this.storeid; });
                            if (!(index < 0)) return [3 /*break*/, 2];
                            record = {
                                sellerid: this.storeid,
                                customerid: this.utils.userInfo.id,
                                sellerimage: 's.png',
                                sellername: this.storename,
                                customerimage: 'c.png',
                                customername: this.utils.userInfo.username
                            };
                            return [4 /*yield*/, this.fireStore.addChatContacts(record)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            record_1 = list[index];
                            navigationExtras = {
                                queryParams: {
                                    chatcontactid: record_1.chatcontactid,
                                    sellerid: record_1.sellerid
                                }
                            };
                            this.router.navigate(['chatroom'], navigationExtras);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    StorePage.prototype.ngOnInit = function () {
    };
    StorePage.prototype.onchatroom = function () {
        this.getChatUsers();
        //this.router.navigateByUrl("/chatroom")
    };
    StorePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
    ]; };
    StorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! raw-loader!./store.page.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.page.html"),
            styles: [__webpack_require__(/*! ./store.page.scss */ "./src/app/store/store.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"], _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], StorePage);
    return StorePage;
}());



/***/ })

}]);
//# sourceMappingURL=store-store-module-es5.js.map