(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~categories-categories-module~home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/accordian/accordian.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/accordian/accordian.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"contentSection\" [ngClass]=\"{'minheight': cardContentToggle, 'carminHeight': !cardContentToggle}\"\n    id=\"accordian\">\n    <ion-card-header (click)=\"toggleAccordian()\"\n        [ngClass]=\"{'textColorWhite': cardContentToggle, 'textColorBlack': !cardContentToggle}\" class=\"pRelative\">\n        <div>\n            <div class=\"discountSection\" *ngIf=\"label\">\n                <ion-label ion-text-uppercase>{{label}}</ion-label>\n            </div>\n            <img class=\"sideImg\" src=\"{{image}}\" alt=\"\">\n        </div>\n\n        <div class=\"pRelative\">\n            <ion-buttons class=\"iconBtn\">\n                <ion-icon *ngIf=\"!accordianExpandable\" name=\"arrow-down\" mode=\"ios\" class=\"icons\" color=\"primary\"\n                    style=\"    ion-ion-margin-top: 5px;\"></ion-icon>\n                <ion-icon *ngIf=\"accordianExpandable\" name=\"arrow-up\" mode=\"ios\" class=\"icons whiteColor\" color=\"light\"\n                    style=\"    ion-ion-margin-top: 5px;\"></ion-icon>\n            </ion-buttons>\n        </div>\n        <div class=\"titleSection\">\n            <b><span class=\"title\">{{title}}</span></b>\n            <br>\n            <span class=\"des\">{{desc}}</span>\n        </div>\n    </ion-card-header>\n\n    <ion-card-content #cardContent *ngIf=\"cardContentToggle\" class=\"accordingContentSection\" ion-ion-margin-bottom ion-no-ion-margin\n        ion-no-padding>\n        <ng-content></ng-content>\n    </ion-card-content>\n    <div *ngIf=\"child\">\n        <div *ngFor=\"let ch of child | async\"></div>\n    </div>\n</ion-card>"

/***/ }),

/***/ "./src/app/components/accordian/accordian.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/accordian/accordian.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  margin: 8px;\n  margin: 8px;\n}\n.card-header {\n  background-color: white;\n  color: #0c0b0b;\n}\n.sideImg {\n  height: 100px;\n  width: 100px;\n  float: left;\n}\n.title {\n  margin-top: 20px;\n  margin-left: 16px;\n  font-size: 22px;\n}\n.colorChange {\n  background-color: var(--ion-color-primary);\n}\n.labels {\n  margin-left: 7px;\n}\n.des {\n  margin-left: 16px;\n  font-size: 18px;\n}\n.discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n.iconBtn {\n  position: absolute;\n  right: -10px;\n  top: 10px;\n}\n.iconBtn .icons {\n  float: right;\n  font-size: 24px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 0px;\n  zoom: 1.5;\n}\n.minheight {\n  background: var(--ion-color-primary);\n  scroll-behavior: smooth;\n}\n.carminHeight {\n  background: #fff;\n  padding-bottom: 16px;\n}\n.titleSection {\n  white-space: nowrap;\n  width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 20px;\n}\n.textColorWhite {\n  color: #fff;\n  color: var(--ion-color-light);\n}\n.textColorBlack {\n  color: #000;\n  color: var(--ion-color-dark);\n}\n.accordingContentSection {\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Zpc2hhbC9Eb2N1bWVudHMvdGVzdGluZy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlhbi9hY2NvcmRpYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBV0E7RUFFSSxXQUFBO0VBQ0EsV0FBQTtBRERKO0FDSUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QURESjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FERkY7QUNLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FERkY7QUNJQTtFQUNFLDBDQUFBO0FEREY7QUNJQTtFQUNFLGdCQUFBO0FEREY7QUNJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRERGO0FDS0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREZKO0FDT0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FESko7QUNLSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBREhaO0FDT0E7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FESko7QUNNQTtFQUVJLGdCQUFBO0VBQ0Esb0JBQUE7QURKSjtBQ09BO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FESko7QUNPQTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtBREpKO0FDTUE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7QURISjtBQ01BO0VBQ0ksYUFBQTtBREhKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5jb250ZW50U2VjdGlvbiB7XG4gIG1hcmdpbjogOHB4O1xuICBtYXJnaW46IDhweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMGMwYjBiO1xufVxuXG4uc2lkZUltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5jb2xvckNoYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxhYmVscyB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5kZXMge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGlzY291bnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzE1YmYxNTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uQnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5pY29uQnRuIC5pY29ucyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHpvb206IDEuNTtcbn1cblxuLm1pbmhlaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5jYXJtaW5IZWlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnRpdGxlU2VjdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA2MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGV4dENvbG9yV2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi50ZXh0Q29sb3JCbGFjayB7XG4gIGNvbG9yOiAjMDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uYWNjb3JkaW5nQ29udGVudFNlY3Rpb24ge1xuICBtYXJnaW46IDAgM3B4O1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cblxuLmNvbnRlbnRTZWN0aW9ue1xuICAgIFxuICAgIG1hcmdpbjogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIFxuICB9XG4uY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6cmdiKDEyLCAxMSwgMTEpO1xufVxuLmNhcmQtY29udGVudHtcbn1cbi5zaWRlSW1ne1xuICBoZWlnaHQ6MTAwcHg7XG4gIHdpZHRoOjEwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgLy8gbWFyZ2luLXRvcDogNDBweDtcbn1cbi50aXRsZXtcbiAgbWFyZ2luLXRvcDoyMHB4O1xuICBtYXJnaW4tbGVmdDoxNnB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uY29sb3JDaGFuZ2V7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxufVxuXG4ubGFiZWxze1xuICBtYXJnaW4tbGVmdDo3cHg7XG59XG5cbi5kZXN7XG4gIG1hcmdpbi1sZWZ0OjE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuXG4uZGlzY291bnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gbWFyZ2luLXRvcDogNHB4O1xuICAgIC8vIGxlZnQ6IDVweDtcbn1cblxuLmljb25CdG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICB0b3A6MTBweDtcbiAgICAuaWNvbnN7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHpvb206MS41O1xuICAgIH1cbn1cblxuLm1pbmhlaWdodHtcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5jYXJtaW5IZWlnaHR7XG4gICAgLy8gbWluLWhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnRpdGxlU2VjdGlvbntcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGV4dENvbG9yV2hpdGV7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItbGlnaHQpXG59XG4udGV4dENvbG9yQmxhY2t7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspXG59XG5cbi5hY2NvcmRpbmdDb250ZW50U2VjdGlvbntcbiAgICBtYXJnaW46MCAzcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/accordian/accordian.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/accordian/accordian.component.ts ***!
  \*************************************************************/
/*! exports provided: AccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordianComponent", function() { return AccordianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */



let AccordianComponent = class AccordianComponent {
    constructor(render, fsServices) {
        this.render = render;
        this.fsServices = fsServices;
        this.accordianExpandable = false;
        this.cardContentToggle = false;
    }
    ngOnInit() {
    }
    toggleAccordian() {
        window.scroll({
            behavior: 'smooth'
        });
        this.cardContentToggle = !this.cardContentToggle;
        this.accordianExpandable = !this.accordianExpandable;
        if (this.accordianExpandable) {
        }
        this.fsServices.getProductsAccordingToCategory(this.id).then((data) => {
            this.child = data;
        });
    }
    condition() {
        return this.accordianExpandable;
    }
};
AccordianComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardContent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AccordianComponent.prototype, "cardContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordianComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordianComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordianComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordianComponent.prototype, "desc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordianComponent.prototype, "youInm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordianComponent.prototype, "id", void 0);
AccordianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'std-accordian',
        template: __webpack_require__(/*! raw-loader!./accordian.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/accordian/accordian.component.html"),
        styles: [__webpack_require__(/*! ./accordian.component.scss */ "./src/app/components/accordian/accordian.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
], AccordianComponent);



/***/ }),

/***/ "./src/app/share.module.ts":
/*!*********************************!*\
  !*** ./src/app/share.module.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordian/accordian.component */ "./src/app/components/accordian/accordian.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_components_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_3__["AccordianComponent"]],
        exports: [_components_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_3__["AccordianComponent"]],
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~categories-categories-module~home-home-module-es2015.js.map