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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.page */ "./src/app/store/store.page.ts");




const routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_3__["StorePage"]
    }
];
let StorePageRoutingModule = class StorePageRoutingModule {
};
StorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StorePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-routing.module */ "./src/app/store/store-routing.module.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.page */ "./src/app/store/store.page.ts");







let StorePageModule = class StorePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");





let StorePage = class StorePage {
    constructor(router, route, utils, fireStore) {
        this.router = router;
        this.route = route;
        this.utils = utils;
        this.fireStore = fireStore;
        this.users = [];
        this.userId = this.utils.userInfo.id;
        this.route.queryParams.subscribe(params => {
            if (params && params.storeid && params.storename) {
                this.storeid = params.storeid;
                this.storename = params.storename;
                localStorage.setItem("sellerid", this.storeid);
            }
        });
    }
    getChatUsers() {
        this.fireStore.checkChatContacts(this.storeid).then((messages) => {
            messages.subscribe((list) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                //this.users = list;
                console.log(list);
                var index = (list || []).findIndex((r) => r.customerid == this.utils.userInfo.id && r.sellerid == this.storeid);
                if (index < 0) {
                    var record = {
                        sellerid: this.storeid,
                        customerid: this.utils.userInfo.id,
                        sellerimage: 's.png',
                        sellername: this.storename,
                        customerimage: 'c.png',
                        customername: this.utils.userInfo.username
                    };
                    yield this.fireStore.addChatContacts(record);
                }
                else {
                    const record = list[index];
                    let navigationExtras = {
                        queryParams: {
                            chatcontactid: record.chatcontactid,
                            sellerid: record.sellerid
                        }
                    };
                    this.router.navigate(['chatroom'], navigationExtras);
                    //this.router.navigateByUrl("/chatroom")
                }
            }));
        });
    }
    ngOnInit() {
    }
    onchatroom() {
        this.getChatUsers();
        //this.router.navigateByUrl("/chatroom")
    }
};
StorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
];
StorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(/*! raw-loader!./store.page.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.page.html"),
        styles: [__webpack_require__(/*! ./store.page.scss */ "./src/app/store/store.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsServiceService"], _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
], StorePage);



/***/ })

}]);
//# sourceMappingURL=store-store-module-es2015.js.map