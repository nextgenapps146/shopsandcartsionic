(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/location/location.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/location/location.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"primary\">\n  <ion-toolbar lines=\"none\">\n    <ion-title slot=\"start\">\n      Select Location\n    </ion-title>\n    <ion-buttons slot=\"end\" size=\"large\">\n      <ion-back-button [text]=\"''\" icon=\"close\" class=\"btn-close\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"padding-tool\">\n    <ion-searchbar #q placeholder=\"Search Location\" ion-no-padding (keyup.enter)=\"searchAddress(q.value)\"></ion-searchbar>\n    <p ion-no-ion-margin padding style=\"font-size:16px;text-align:center;\">Or</p>\n    <button class=\"btn\" ion-button full color=\"primary\" (click)=\"getUserLocation()\">Use my Current Location</button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-no-padding>\n  <!-- <div class=\"under\">\n    <p class=\"city\">Popular Cities</p>\n  </div>\n  <ion-list class=\"scroll\">\n    <ion-item *ngFor=\"let item of items\">\n      {{ item }}\n    </ion-item>\n  </ion-list> -->\n\n  <ion-list *ngIf=\"possibleAddresses && possibleAddresses.length > 0\">\n    <ion-radio-group value=\"biff\">\n      <ion-item *ngFor=\"let address of possibleAddresses\">\n        <ion-label>\n            <h3>{{ address.streetnumber }} {{ address.route }}</h3>\n            <p>{{ address.city }}, {{ address.state }} {{ address.zipcode }}</p>\n        </ion-label>\n        <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");
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
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\nion-header {\n  --background: #f2f2f2;\n  z-index: 0;\n}\nion-toolbar {\n  --background: #f2f2f2;\n}\nion-title {\n  font-size: 18px;\n  text-align: start;\n  padding: 16px;\n}\n.padding-tool {\n  padding-bottom: 16px;\n}\n.container {\n  background: #f8f8f8;\n  padding-bottom: 10px;\n}\nh5 {\n  text-align: center;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.btn-close {\n  font-size: 30px;\n}\n.btn-p {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.btn {\n  background: var(--ion-color-primary);\n  padding: 10px 0px;\n  border-radius: 5px;\n  width: 100%;\n  color: white;\n}\n.search {\n  ion-margin-bottom: 7px;\n}\nh6 {\n  text-align: center;\n  margin: 5px;\n}\n.under {\n  border-bottom: 1px solid;\n}\n.city {\n  margin-left: 15px;\n}\n.scroll {\n  height: 60%;\n  overflow: auto;\n}\n.close {\n  border-radius: 100%;\n  border: 1px solid black;\n  font-size: 20px;\n  background: white;\n  margin: 10px 46%;\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIiwiL1VzZXJzL3NhbnRvc2hiL0RvY3VtZW50cy9uZXh0Z2VuYXBwcy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCOzs7Ozs7OztFQUFBO0FBVUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QURBSjtBQ0VBO0VBQ0kscUJBQUE7QURDSjtBQ0NBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBREVKO0FDQUE7RUFDSSxvQkFBQTtBREdKO0FDQUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FER0o7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QURJSjtBQ0ZBO0VBQ0ksZUFBQTtBREtKO0FDSEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FETUo7QUNIQTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FETUo7QUNIQTtFQUNJLHNCQUFBO0FETUo7QUNIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBRE1KO0FDSkE7RUFDSSx3QkFBQTtBRE9KO0FDTEE7RUFDSSxpQkFBQTtBRFFKO0FDTkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBRFNKO0FDTkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRFNKIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHotaW5kZXg6IDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucGFkZGluZy10b29sIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYnRuLWNsb3NlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYnRuLXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaCB7XG4gIGlvbi1tYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbmg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnVuZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4uY2l0eSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2xvc2Uge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDQ2JTtcbiAgcGFkZGluZy10b3A6IDNweDtcbn0iLCJcbi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cbmlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB6LWluZGV4OiAwO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuLnBhZGRpbmctdG9vbHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XG59XG5oNXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XG59XG4uYnRuLWNsb3Nle1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5idG4tcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaHtcbiAgICBpb24tbWFyZ2luLWJvdHRvbTogN3B4O1xuXG59XG5oNntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHhcbn1cbi51bmRlcntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWRcbn1cbi5jaXR5e1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4XG59XG4uc2Nyb2xse1xuICAgIGhlaWdodDogNjAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2xvc2V7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDEwcHggNDYlO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
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




// import { Geolocation } from '@ionic-native/geolocation/ngx';


var LocationPage = /** @class */ (function () {
    function LocationPage(route, util, modalCtrl, toastCtrl, geolocation, nativeGeocoder) {
        this.route = route;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.items = ['New Delhi', 'Gurgaon', 'Jaipur', 'Goa', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Kolkata', 'Pune', 'Chennai', 'Chandigarh'];
        this.options = {
            useLocale: true,
            maxResults: 5
        };
    }
    LocationPage.prototype.ngOnInit = function () {
        this.possibleAddresses = [];
        this.geocoder = new google.maps.Geocoder();
    };
    LocationPage.prototype.home = function () {
        this.route.navigate(['home']);
    };
    LocationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: undefined },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] }
    ]; };
    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! raw-loader!./location.page.html */ "./node_modules/raw-loader/index.js!./src/app/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], Object, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-location-module-es5.js.map