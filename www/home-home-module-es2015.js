(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/best-offers/best-offers.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/best-offers/best-offers.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"contentSection\" ion-no-ion-margin *ngIf=\"bestOffers\">\n  <div class=\"topSection\">\n    <div>\n      <ion-label class=\"leftHeading\">Best Offers</ion-label>\n    </div>\n    <div (click)=\"seeAllProduct()\" class=\"topRightSection\">\n      <ion-note color=\"danger\" class=\"rightHeading\">See all</ion-note>\n    </div>\n  </div>\n\n  <div class=\"productCardSection\">\n    <ion-card class=\"productCard cardBorderRadius card_height\" *ngFor=\"let product of bestOffers | async;let i = index\">\n      <div ion-padding-horizontal class=\"productImage\" (click)=\"viewProduct(product)\"  style=\"padding-top: 24px;\">\n        <div class=\"discountSection\">\n          <ion-label ion-text-uppercase>{{product.offer}} %Off</ion-label>\n        </div>\n        <ion-img [src]=\"product.images[0]\" ion-ion-margin-top  class=\"image_height\"></ion-img>\n      </div>\n\n      <ion-card-header>\n        <div class=\"dFlexAlignItemCenter\">\n          <ion-card-title>₹ {{product.salePrice}}</ion-card-title>\n          <span class=\"subTitle\">₹ {{product.regularPrice}}</span>\n        </div>\n        <!-- <h5 ion-no-padding ion-no-ion-margin class=\"textBold productName\">Apple</h5> -->\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"textBold font18 productDesc product_name\">{{product.name}}</p>\n        <!-- <div class=\"product_price\">\n        <span class=\"productQty\">{{product.pricePerQuantity}} </span>\n        </div> -->\n        <div class=\"addBtnSection\">\n          <ion-button expand=\"full\" color=\"danger\" class=\"addBtn\" *ngIf=\"product.units === 0\" (click)=\"addToCart(product)\">Add\n          </ion-button>\n\n          <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove', product)\" class=\"segmentBtn\">\n              <div  class=\"button_div\">\n                <ion-icon name=\"remove\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n            <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add', product)\" class=\"segmentBtn\">\n              <div  class=\"button_div\">\n                <ion-icon name=\"add\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popular-deals/popular-deals.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popular-deals/popular-deals.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"contentSection\" ion-no-ion-margin *ngIf=\"popularDeals\">\n  <div class=\"topSection\">\n    <div>\n      <ion-label class=\"leftHeading\">Popular Deals</ion-label>\n    </div>\n    <div (click)=\"seeAllProduct()\" class=\"topRightSection\">\n      <ion-note color=\"danger\" class=\"rightHeading\">See all</ion-note>\n    </div>\n  </div>\n\n  <div class=\"productCardSection\">\n    <ion-card class=\"productCard cardBorderRadius  card_height\" *ngFor=\"let product of popularDeals | async;let i = index\">\n      <div ion-padding-horizontal class=\"productImage\" (click)=\"viewProduct(product)\" style=\"padding-top: 24px;\">\n        <div class=\"discountSection\">\n          <ion-label ion-text-uppercase>{{product.offer}} %Off</ion-label>\n        </div>\n        <ion-img [src]=\"product.images[0]\" ion-ion-margin-top  class=\"image_height\"></ion-img>\n      </div>\n\n      <ion-card-header>\n        <div class=\"dFlexAlignItemCenter\">\n          <ion-card-title>₹ {{product.salePrice}}</ion-card-title>\n          <span class=\"subTitle\">₹ {{product.regularPrice}}</span>\n        </div>\n        <!-- <h5 ion-no-padding ion-no-ion-margin class=\"textBold productName\">Apple</h5> -->\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"textBold font18 productDesc product_name\">{{product.name}}</p>\n        <!-- <div class=\"product_price\">\n        <span class=\"productQty\">{{product.pricePerQuantity}} </span>\n        </div> -->\n        <div class=\"addBtnSection\">\n          <ion-button expand=\"full\" color=\"danger\" class=\"addBtn\" *ngIf=\"product.units === 0\" (click)=\"addToCart(product)\">Add\n          </ion-button>\n\n          <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove',product)\" class=\"segmentBtn\">\n              <div  class=\"button_div\">\n                <ion-icon name=\"remove\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n            <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add', product)\" class=\"segmentBtn\">\n              <div  class=\"button_div\">\n                <ion-icon name=\"add\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/short-offers/short-offers.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/short-offers/short-offers.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"contentSection\" ion-no-ion-margin *ngIf=\"shortOffers\">\n  <div class=\"topSection\">\n    <div>\n      <ion-label class=\"leftHeading\">Short Time Offers</ion-label>\n    </div>\n    <div (click)=\"seeAllProduct()\" class=\"topRightSection\">\n      <ion-note color=\"danger\" class=\"rightHeading\">See all</ion-note>\n    </div>\n  </div>\n\n  <div class=\"productCardSection\">\n    <ion-card class=\"productCard cardBorderRadius  card_height\" *ngFor=\"let product of shortOffers | async;let i = index\">\n      <div ion-padding-horizontal class=\"productImage\" (click)=\"viewProduct(product)\" style=\"padding-top: 24px;\">\n        <div class=\"discountSection\">\n          <ion-label ion-text-uppercase>{{product.offer}} %Off</ion-label>\n        </div>\n        <ion-img [src]=\"product.images[0]\" ion-ion-margin-top class=\"image_height\"></ion-img>\n      </div>\n\n      <ion-card-header>\n        <div class=\"dFlexAlignItemCenter\">\n          <ion-card-title>₹ {{product.salePrice}}</ion-card-title>\n          <span class=\"subTitle\">₹ {{product.regularPrice}}</span>\n        </div>\n        <!-- <h5 ion-no-padding ion-no-ion-margin class=\"textBold productName\">Apple</h5> -->\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"textBold font18 productDesc product_name\">{{product.name}}</p>\n        <!-- <div class=\"product_price\">\n        <span class=\"productQty\">{{product.pricePerQuantity}} </span>\n      </div> -->\n        <div class=\"addBtnSection\">\n          <ion-button expand=\"full\" color=\"danger\" class=\"addBtn\" *ngIf=\"product.units === 0\" (click)=\"addToCart(product)\">Add\n          </ion-button>\n\n          <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove',product)\" class=\"segmentBtn\">\n              <div  class=\"button_div\">\n                <ion-icon name=\"remove\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n            <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add',product)\" class=\"segmentBtn\">\n              <div  class=\"button_div\">\n                <ion-icon name=\"add\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/top-savers/top-savers.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/top-savers/top-savers.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"contentSection\" ion-no-ion-margin *ngIf=\"topSavers\">\n  <div class=\"topSection\">\n    <div>\n      <ion-label class=\"leftHeading\">Top Savers Today</ion-label>\n    </div>\n    <div (click)=\"seeAllProduct()\" class=\"topRightSection\">\n      <ion-note color=\"danger\" class=\"rightHeading\">See all</ion-note>\n    </div>\n  </div>\n\n  <div class=\"productCardSection\">\n    <ion-card class=\"productCard cardBorderRadius card_height\" *ngFor=\"let product of topSavers | async;let i = index\" >\n      <div ion-padding-horizontal class=\"productImage\" (click)=\"viewProduct(product)\">\n        <div class=\"discountSection\">\n          <ion-label ion-text-uppercase>{{product.offer}} %Off</ion-label>\n        </div>\n        <ion-img [src]=\"product.images[0]\" ion-ion-margin-top class=\"image_height\"></ion-img>\n      </div>\n\n      <ion-card-header>\n        <div class=\"dFlexAlignItemCenter\">\n         \n          <ion-card-title>₹ {{product.salePrice}}</ion-card-title>\n       \n         <span class=\"subTitle\">₹ {{product.regularPrice}}</span>\n     \n        </div>\n        <!-- <h5 ion-no-padding ion-no-ion-margin class=\"textBold productName\">Apple</h5> -->\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"textBold font18 productDesc product_name\" >{{product.name}}</p>\n        <!-- <div class=\"product_price\">\n        <span class=\"productQty\">{{product.pricePerQuantity}} </span>\n        </div> -->\n        <div class=\"addBtnSection\">\n          <ion-button expand=\"full\" color=\"danger\" class=\"addBtn\" *ngIf=\"product.units === 0\"\n            (click)=\"addToCart(product)\">Add\n          </ion-button>\n\n          <ion-segment *ngIf=\"product.units > 0\" mode=\"md\">\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'remove', product)\"\n              class=\"segmentBtn\">\n              <!-- <ion-icon name=\"remove-circle-outline\"></ion-icon> -->\n              <div  class=\"button_div\">\n                <ion-icon name=\"remove\" class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n            <ion-text ion-padding-horizontal class=\"textUnits\">{{product.units}}</ion-text>\n            <ion-segment-button mode=\"md\" ion-no-padding color=\"undefined\" (click)=\"updateCart(product.id,'add', product)\"\n              class=\"segmentBtn\">\n              <!-- <ion-icon name=\"add-circle-outline\"></ion-icon> -->\n              <div class=\"button_div\">\n                <ion-icon name=\"add\"  class=\"all_icons\"></ion-icon>\n                </div>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"dFlexRow deliverySection\">\n            <ion-note class=\"whiteColor\">In & Around</ion-note>\n            <div class=\"flex\">\n                <ion-select #myCitySelect interface=\"popover\" [(ngModel)]=\"util.userSearchingCity\" (ionChange)=\"setUserSearchCity($event)\">\n                    <ion-select-option value=\"Naperville\">Naperville, IL</ion-select-option>\n                    <ion-select-option value=\"Aurora\">Aurora, IL</ion-select-option>\n                </ion-select>\n                <!-- <ion-label class=\"locationAddress\">{{locationAddress}}</ion-label>\n                <ion-icon name=\"create\" mode=\"md\" (click)=\"addLocation()\" class=\"create_icon\"></ion-icon> -->\n            </div>\n        </div>\n\n        <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"onChat()\">\n            <!-- <ion-icon slot=\"icon-only\" name=\"chat\" (click)=\"onChat()\"></ion-icon> -->\n            <ion-icon name=\"chatboxes\"></ion-icon>\n            <!-- <span class=\"cartQuantity\">{{cart.productQty}}</span> -->\n        </ion-button>\n    </ion-toolbar>\n    <ion-toolbar color=\"primary\">\n        <ion-searchbar color=\"light\" md=\"ios\" (click)=\"searchPage()\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Make this as a component -->\n    <!-- <ion-list>\n        <ion-list-header>\n            Stores in your area\n        </ion-list-header>\n        <ion-item *ngFor=\"let store of storesList\">\n            <ion-label>\n                <p><ion-icon style=\"color:#15bf15\" name=\"checkmark\" slot=\"start\"></ion-icon>Pay on Pickup</p>\n                <h2>{{ store.name }}</h2>\n                <h4>{{ store.streetaddress }}, {{ store.city }} {{ store.state }} {{ store.zipcode }}</h4>\n            </ion-label>\n            <ion-button slot=\"end\" mode=\"ios\" class=\"pRelative\" (click)=\"goToStorePage(store)\">\n                <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n                <span class=\"cartQuantity\">{{cart.productQty}}</span>\n            </ion-button>\n        </ion-item>\n    </ion-list> -->\n\n    <ion-list>\n        <br>\n        <ion-item class=\"product-item\" *ngFor=\"let store of storesList\" (click)=\"goToStorePage(store)\">\n            <!-- <ion-thumbnail slot=\"start\">\n                <img [src]=\"item.images[0]\">\n            </ion-thumbnail> -->\n            <ion-label>\n                <h2><strong>{{ store.name }}</strong></h2>\n                <p>{{ store.streetaddress }}, {{ store.city }} {{ store.state }} {{ store.zipcode }}</p>\n                <!-- <p>Price: {{ item.regularPrice }}</p> -->\n            </ion-label>\n            <ion-icon slot=\"end\" name=\"arrow-dropright-circle\"></ion-icon>\n\n        </ion-item>\n    </ion-list>\n\n    <!-- <ion-card>\n        <ion-item>\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>ion-item in a card, icon left, button right</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n        </ion-item>\n\n        <ion-card-content>\n            This is content, without any paragraph or header tags,\n            within an ion-card-content element.\n        </ion-card-content>\n    </ion-card> -->\n\n    <!-- <ion-card>\n        <ion-item href=\"#\" class=\"ion-activated\">\n            <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n            <ion-label>Card Link Item 1 activated</ion-label>\n        </ion-item>\n\n        <ion-item href=\"\">\n            <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n            <ion-label>Card Link Item 2</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ion-activated\">\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n            <ion-label>Card Button Item 1 activated</ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n            <ion-label>Card Button Item 2</ion-label>\n        </ion-item>\n    </ion-card> -->\n\n\n    <!--Top Saver Component location:- components/top-saver-->\n    <top-savers></top-savers>\n\n    <!--Best Offer Component location:- components/best-offers-->\n    <best-offers></best-offers>\n\n    <!--Popular Deals Component location:- components/popular-deals-->\n    <popular-deals></popular-deals>\n\n    <!--Short Offers Component location:- components/short-offers-->\n    <short-offers></short-offers>\n\n    <div class=\"slideSection\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" #ionSlides (ionSlidesDidLoad)=\"slidesDidLoad()\">\n            <ion-slide *ngFor=\"let slide of prodoctSlides\">\n                <img [src]=\"slide\">\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <ion-list>\n        <br>\n        <ion-item class=\"product-item\" *ngFor=\"let item of categoryItems | async\">\n            <ion-thumbnail slot=\"start\">\n                <img [src]=\"item.images[0]\">\n            </ion-thumbnail>\n            <ion-label>\n                <h2><strong>{{ item.name }}</strong></h2>\n                <p>Category: {{ item.categories? item.categories : '--' }}</p>\n                <!-- <p>Price: {{ item.regularPrice }}</p> -->\n            </ion-label>\n\n            <ion-button (click)=\"addStoreProducts(ListByRows)\">\n                <ion-icon slot=\"start\" name=\"md-add\"></ion-icon>\n                Add\n            </ion-button>\n        </ion-item>\n    </ion-list>\n\n    <!--Accordian Component location:- components/accordian-->\n    <std-accordian *ngFor=\"let item of categoryItems | async\" [title]=\"item.name\" [image]=\"item.images[0]\"\n        [label]=\"item.discount\" [desc]=\"item.description\" [id]=\"item.id\">\n        <div *ngFor=\"let category of fsServices.categories\">\n            <ion-card class=\"childCard\" ion-no-ion-margin ion-padding-top *ngIf=\"category.id === item.id\">\n                <ion-row class=\"CardrowSection\" ion-ion-margin-bottom>\n                    <ion-col ion-no-padding (click)=\"goToProducts(category,category.child)\" class=\"cardCol\"\n                        mdWavesEffect size=\"6\" *ngFor=\"let child of category.child\">\n                        <ion-card class=\"childCardSection\">\n                            <img class=\"child\" src=\"{{child.images[0]}}\" alt=\"\">\n                            <ion-card-content>\n                                <span class=\"under\">{{child.name}}</span>\n                                <ion-row class=\"bottom-text text-center green center-xs\">\n                                    <span class=\"h-off\"> {{child.offer}} %off</span>\n                                </ion-row>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </div>\n    </std-accordian>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/best-offers/best-offers.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/best-offers/best-offers.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  padding: 0 40px;\n  position: relative;\n}\n.productCard .productImage .discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: -10px;\n  left: 10px;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnIcon {\n  background: var(--ion-color-primary);\n  --background:var(--ion-color-primary);\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.productName {\n  font-size: 22px;\n  color: var(--ion-color-dark);\n  padding-top: 8px;\n}\n.productDesc {\n  color: var(--ion-color-dark);\n  padding-bottom: 16px;\n}\n.productCardSection {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: hidden;\n}\n.productCard {\n  display: inline-block;\n  white-space: pre-line;\n  padding: 2px auto;\n  width: calc(70% - 20px);\n  height: auto;\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n}\n.textUnits {\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZXN0LW9mZmVycy9iZXN0LW9mZmVycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92aXNoYWwvRG9jdW1lbnRzL3Rlc3RpbmcvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9iZXN0LW9mZmVycy9iZXN0LW9mZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBREFKO0FDR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURBSjtBQ0dFO0VBQ0UsZUFBQTtBREFKO0FDR0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREFKO0FDR0U7RUFDRSxnREFBQTtFQUNBLGtEQUFBO0VBQ0EsVUFBQTtBREFKO0FDRUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURBTjtBQ0VNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QURBUjtBQ0lJO0VBQ0UsZUFBQTtBREZOO0FDSUk7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURGTjtBQ09FO0VBQ0Usb0NBQUE7RUFDQSxxQ0FBQTtBREpKO0FDUUk7RUFDRSxrQkFBQTtFQUNGLG1CQUFBO0FETEo7QUNVRTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FEUEo7QUNVRTtFQUNFLDRCQUFBO0VBRUEsb0JBQUE7QURSSjtBQ1lFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDV0U7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLGtEQUFBO0FEUko7QUNnQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRGJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iZXN0LW9mZmVycy9iZXN0LW9mZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG4uY29udGVudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDhweDtcbn1cblxuLmxlZnRIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRvcFJpZ2h0U2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTk4OTg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdENhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICB3aWR0aDogNjAlO1xufVxuLnByb2R1Y3RDYXJkIC5wcm9kdWN0SW1hZ2Uge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0Q2FyZCAucHJvZHVjdEltYWdlIC5kaXNjb3VudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4ucHJvZHVjdENhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnByb2R1Y3RDYXJkIC5zdWJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGRCdG5JY29uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYWRkQnRuU2VjdGlvbiAuYWRkQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4ucHJvZHVjdE5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5wcm9kdWN0RGVzYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4ucHJvZHVjdENhcmRTZWN0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdy1YOiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3RDYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHBhZGRpbmc6IDJweCBhdXRvO1xuICB3aWR0aDogY2FsYyg3MCUgLSAyMHB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xufVxuXG4udGV4dFVuaXRzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSIsIi8qKlxuICogSW9uaWMgNCAgR3JvY2VyeSBDb21wbGV0ZSBQbGF0Zm9ybShodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LWdyb2NlcnktYXBwLWFuZC1hZG1pbi1kYXNoYm9hcmQpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXG4gKlxuICovXG5cblxuLmNvbnRlbnRTZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAubGVmdEhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAucmlnaHRIZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLnRvcFJpZ2h0U2VjdGlvbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5wcm9kdWN0Q2FyZHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gICAgd2lkdGg6IDYwJTtcbiAgXG4gICAgLnByb2R1Y3RJbWFnZXtcbiAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgICAuZGlzY291bnRTZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzE1YmYxNTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgIH1cbiAgICAuc3ViVGl0bGV7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICB9XG4gIFxuICAuYWRkQnRuSWNvbntcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICAuYWRkQnRuU2VjdGlvbntcbiAgICAuYWRkQnRue1xuICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOjVweDsgXG4gICAgfVxuICAgIFxuICB9XG4gIFxuICAucHJvZHVjdE5hbWV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICB9XG4gIFxuICAucHJvZHVjdERlc2N7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC8vIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gIFxuICAucHJvZHVjdENhcmRTZWN0aW9ue1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93LVg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbiAgLnByb2R1Y3RDYXJke1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgcGFkZGluZzogMnB4IGF1dG87XG4gICAgd2lkdGg6IGNhbGMoNzAlIC0gMjBweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgfVxuICBcbiAgLnNlZ21lbnRCdG57XG4gICAgLy8gbWluLXdpZHRoOiA0NXB4O1xuICAgIC8vIG1heC13aWR0aDogNjBweDtcbn1cblxuLnRleHRVbml0c3tcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/best-offers/best-offers.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/best-offers/best-offers.component.ts ***!
  \*****************************************************************/
/*! exports provided: BestOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestOffersComponent", function() { return BestOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let BestOffersComponent = class BestOffersComponent {
    constructor(dataServ, cart, route, fsServices) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.route = route;
        this.fsServices = fsServices;
        // this.bestOffers = dataServ.bestOffers[0];
        this.fsServices.getProductsAccordingToTags('Best Offers').then((data) => {
            this.bestOffers = data;
        });
    }
    ngOnInit() { }
    seeAllProduct() {
        this.route.navigate(['product-list']);
    }
    addToCart(product) {
        const productunits = this.cart.addCart.find(el => el.id === product.id);
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
    }
    updateCart(productID, type, product) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
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
    }
    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }
};
BestOffersComponent.ctorParameters = () => [
    { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
BestOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-offers',
        template: __webpack_require__(/*! raw-loader!./best-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/best-offers/best-offers.component.html"),
        styles: [__webpack_require__(/*! ./best-offers.component.scss */ "./src/app/components/best-offers/best-offers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], BestOffersComponent);



/***/ }),

/***/ "./src/app/components/popular-deals/popular-deals.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/popular-deals/popular-deals.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  padding: 0 40px;\n  position: relative;\n}\n.productCard .productImage .discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: -10px;\n  left: 10px;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnIcon {\n  background: var(--ion-color-primary);\n  --background:var(--ion-color-primary);\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.productName {\n  font-size: 22px;\n  color: var(--ion-color-dark);\n  padding-top: 8px;\n}\n.productDesc {\n  color: var(--ion-color-dark);\n  padding-bottom: 16px;\n}\n.productCardSection {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: hidden;\n}\n.productCard {\n  display: inline-block;\n  white-space: pre-line;\n  padding: 2px auto;\n  width: calc(70% - 20px);\n  height: auto;\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n}\n.textUnits {\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1bGFyLWRlYWxzL3BvcHVsYXItZGVhbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdmlzaGFsL0RvY3VtZW50cy90ZXN0aW5nL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvcG9wdWxhci1kZWFscy9wb3B1bGFyLWRlYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FEREo7QUNJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRERKO0FDSUU7RUFDRSxlQUFBO0FEREo7QUNJRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FERE47QUNJRTtFQUNFLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0FEREo7QUNHSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBREROO0FDR007RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRERSO0FDS0k7RUFDRSxlQUFBO0FESE47QUNLSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREhOO0FDT0U7RUFDRSxvQ0FBQTtFQUNBLHFDQUFBO0FESko7QUNRSTtFQUNFLGtCQUFBO0VBQ0YsbUJBQUE7QURMSjtBQ1NFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUROSjtBQ1NFO0VBQ0UsNEJBQUE7RUFDQSxvQkFBQTtBRE5KO0FDVUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEUEo7QUNTRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7QUROSjtBQ2NBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURYRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wdWxhci1kZWFscy9wb3B1bGFyLWRlYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5jb250ZW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4ubGVmdEhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHRIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udG9wUmlnaHRTZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzllOTg5ODtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9kdWN0Q2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIHdpZHRoOiA2MCU7XG59XG4ucHJvZHVjdENhcmQgLnByb2R1Y3RJbWFnZSB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3RDYXJkIC5wcm9kdWN0SW1hZ2UgLmRpc2NvdW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5wcm9kdWN0Q2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4ucHJvZHVjdENhcmQgLnN1YlRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFkZEJ0bkljb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hZGRCdG5TZWN0aW9uIC5hZGRCdG4ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czo1cHg7XG59XG5cbi5wcm9kdWN0TmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnByb2R1Y3REZXNjIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5wcm9kdWN0Q2FyZFNlY3Rpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93LVg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ucHJvZHVjdENhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgcGFkZGluZzogMnB4IGF1dG87XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDIwcHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG59XG5cbi50ZXh0VW5pdHMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59IiwiLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cblxuXG5cbi5jb250ZW50U2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogOHB4O1xuICB9XG4gICAgXG4gIC5sZWZ0SGVhZGluZ3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5yaWdodEhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAudG9wUmlnaHRTZWN0aW9ue1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzllOTg5ODtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLnByb2R1Y3RDYXJke1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgICB3aWR0aDogNjAlO1xuICBcbiAgICAucHJvZHVjdEltYWdle1xuICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICAgIC5kaXNjb3VudFNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIH1cbiAgXG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgIH1cbiAgICAuc3ViVGl0bGV7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmFkZEJ0bkljb257XG4gICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgLmFkZEJ0blNlY3Rpb257XG4gICAgLmFkZEJ0bntcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czo1cHg7IFxuICAgIH1cbiAgfVxuICBcbiAgLnByb2R1Y3ROYW1le1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgfVxuICBcbiAgLnByb2R1Y3REZXNje1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuICBcbiAgXG4gIC5wcm9kdWN0Q2FyZFNlY3Rpb257XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxuICAucHJvZHVjdENhcmR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICBwYWRkaW5nOiAycHggYXV0bztcbiAgICB3aWR0aDogY2FsYyg3MCUgLSAyMHB4KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICB9XG5cbi5zZWdtZW50QnRue1xuICAgIC8vIG1pbi13aWR0aDogNDVweDtcbiAgICAvLyBtYXgtd2lkdGg6IDYwcHg7XG59XG5cbi50ZXh0VW5pdHN7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/popular-deals/popular-deals.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/popular-deals/popular-deals.component.ts ***!
  \*********************************************************************/
/*! exports provided: PopularDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularDealsComponent", function() { return PopularDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let PopularDealsComponent = class PopularDealsComponent {
    constructor(dataServ, cart, route, fsServices) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.route = route;
        this.fsServices = fsServices;
        this.fsServices.getProductsAccordingToTags('Popular Deals').then((data) => {
            this.popularDeals = data;
        });
    }
    ngOnInit() { }
    seeAllProduct() {
        this.route.navigate(['product-list']);
    }
    addToCart(product) {
        const productunits = this.cart.addCart.find(el => el.id === product.id);
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
    }
    updateCart(productID, type, product) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
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
    }
    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }
};
PopularDealsComponent.ctorParameters = () => [
    { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
PopularDealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'popular-deals',
        template: __webpack_require__(/*! raw-loader!./popular-deals.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popular-deals/popular-deals.component.html"),
        styles: [__webpack_require__(/*! ./popular-deals.component.scss */ "./src/app/components/popular-deals/popular-deals.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], PopularDealsComponent);



/***/ }),

/***/ "./src/app/components/short-offers/short-offers.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/short-offers/short-offers.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  padding: 0 40px;\n  position: relative;\n}\n.productCard .productImage .discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: -10px;\n  left: 10px;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnIcon {\n  background: var(--ion-color-primary);\n  --background:var(--ion-color-primary);\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.productName {\n  font-size: 22px;\n  color: var(--ion-color-dark);\n  padding-top: 8px;\n}\n.productDesc {\n  color: var(--ion-color-dark);\n  padding-bottom: 16px;\n}\n.productCardSection {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: hidden;\n}\n.productCard {\n  display: inline-block;\n  white-space: pre-line;\n  padding: 2px auto;\n  width: calc(70% - 20px);\n  height: auto;\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n}\n.textUnits {\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9ydC1vZmZlcnMvc2hvcnQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Zpc2hhbC9Eb2N1bWVudHMvdGVzdGluZy9ncmV0ZWxsby1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL3Nob3J0LW9mZmVycy9zaG9ydC1vZmZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBYUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QURGSjtBQ0tFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FERko7QUNLRTtFQUNFLGVBQUE7QURGSjtBQ0tFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURGTjtBQ0tFO0VBQ0UsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7QURGSjtBQ0lJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FERk47QUNJTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FERlI7QUNNSTtFQUNFLGVBQUE7QURKTjtBQ01JO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FESk47QUNVRTtFQUNFLG9DQUFBO0VBQ0EscUNBQUE7QURQSjtBQ1dJO0VBQ0Usa0JBQUE7RUFDRixtQkFBQTtBRFJKO0FDYUU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBRFZKO0FDYUU7RUFDRSw0QkFBQTtFQUVBLG9CQUFBO0FEWEo7QUNlRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURaSjtBQ2NFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtBRFhKO0FDbUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURoQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3J0LW9mZmVycy9zaG9ydC1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5sZWZ0SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWdodEhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b3BSaWdodFNlY3Rpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2R1Y3RDYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgd2lkdGg6IDYwJTtcbn1cbi5wcm9kdWN0Q2FyZCAucHJvZHVjdEltYWdlIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdENhcmQgLnByb2R1Y3RJbWFnZSAuZGlzY291bnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzE1YmYxNTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3RDYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5wcm9kdWN0Q2FyZCAuc3ViVGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRkQnRuSWNvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFkZEJ0blNlY3Rpb24gLmFkZEJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOjVweDtcbn1cblxuLnByb2R1Y3ROYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ucHJvZHVjdERlc2Mge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnByb2R1Y3RDYXJkU2VjdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0Q2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBwYWRkaW5nOiAycHggYXV0bztcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMjBweCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbn1cblxuLnRleHRVbml0cyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cblxuXG4uY29udGVudFNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuICBcbiAgLmxlZnRIZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnJpZ2h0SGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC50b3BSaWdodFNlY3Rpb257XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAucHJvZHVjdENhcmR7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIHdpZHRoOiA2MCU7XG4gIFxuICAgIC5wcm9kdWN0SW1hZ2V7XG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgICAgLmRpc2NvdW50U2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICB9XG4gICAgfVxuICBcbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgfVxuICAgIC5zdWJUaXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICBcbiAgICBcbiAgfVxuICBcbiAgLmFkZEJ0bkljb257XG4gICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgLmFkZEJ0blNlY3Rpb257XG4gICAgLmFkZEJ0bntcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czo1cHg7IFxuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgLnByb2R1Y3ROYW1le1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgfVxuICBcbiAgLnByb2R1Y3REZXNje1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAvLyB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG4gIFxuICBcbiAgLnByb2R1Y3RDYXJkU2VjdGlvbntcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdy1YOiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG4gIC5wcm9kdWN0Q2FyZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIHBhZGRpbmc6IDJweCBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDIwcHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIH1cblxuLnNlZ21lbnRCdG57XG4gICAgICAvLyBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAvLyBtYXgtd2lkdGg6IDYwcHg7XG4gIH1cblxuICAudGV4dFVuaXRze1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH0gIFxuICBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/short-offers/short-offers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/short-offers/short-offers.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShortOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortOffersComponent", function() { return ShortOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let ShortOffersComponent = class ShortOffersComponent {
    constructor(cart, dataServ, route, fsServices) {
        this.cart = cart;
        this.dataServ = dataServ;
        this.route = route;
        this.fsServices = fsServices;
        // this.shortOffers  = dataServ.shortOffers[0];
        this.fsServices.getProductsAccordingToTags('Short Time Offers').then((data) => {
            this.shortOffers = data;
        });
    }
    ngOnInit() { }
    seeAllProduct() {
        this.route.navigate(['product-list']);
    }
    addToCart(product) {
        const productunits = this.cart.addCart.find(el => el.id === product.id);
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
    }
    updateCart(productID, type, product) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
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
    }
    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }
};
ShortOffersComponent.ctorParameters = () => [
    { type: src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
ShortOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'short-offers',
        template: __webpack_require__(/*! raw-loader!./short-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/short-offers/short-offers.component.html"),
        styles: [__webpack_require__(/*! ./short-offers.component.scss */ "./src/app/components/short-offers/short-offers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], ShortOffersComponent);



/***/ }),

/***/ "./src/app/components/top-savers/top-savers.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/top-savers/top-savers.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  padding: 16px;\n  position: relative;\n}\n.productCard .productImage img {\n  width: 100%;\n}\n.productCard .productImage .discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnIcon {\n  background: var(--ion-color-primary);\n  --background:var(--ion-color-primary);\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.productName {\n  font-size: 22px;\n  color: var(--ion-color-dark);\n  padding-top: 8px;\n}\n.productDesc {\n  color: var(--ion-color-dark);\n  padding-bottom: 16px;\n}\n.productCardSection {\n  white-space: nowrap;\n  height: auto;\n  overflow-X: scroll;\n  overflow-y: hidden;\n}\n.productCard {\n  display: inline-block;\n  white-space: pre-line;\n  padding: 2px auto;\n  width: calc(70% - 20px);\n  height: auto;\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n}\n.textUnits {\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3Atc2F2ZXJzL3RvcC1zYXZlcnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdmlzaGFsL0RvY3VtZW50cy90ZXN0aW5nL2dyZXRlbGxvLW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdG9wLXNhdmVycy90b3Atc2F2ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RUFBQTtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBREFKO0FDR0U7RUFDRSxlQUFBO0FEQUo7QUNHRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQU47QUNHRTtFQUNFLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0FEQUo7QUNFSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBREFOO0FDRU07RUFDRSxXQUFBO0FEQVI7QUNFTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEQVI7QUNNSTtFQUNFLGVBQUE7QURKTjtBQ01JO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FESk47QUNVRTtFQUNFLG9DQUFBO0VBQ0EscUNBQUE7QURQSjtBQ1dJO0VBQ0Usa0JBQUE7RUFDRixtQkFBQTtBRFJKO0FDYUU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBRFZKO0FDYUU7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0FEVko7QUNjRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURYSjtBQ2FFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtBRFZKO0FDa0JFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURmTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLXNhdmVycy90b3Atc2F2ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBJb25pYyA0ICBHcm9jZXJ5IENvbXBsZXRlIFBsYXRmb3JtKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtZ3JvY2VyeS1hcHAtYW5kLWFkbWluLWRhc2hib2FyZClcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqXG4gKi9cbi5jb250ZW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4ubGVmdEhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHRIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udG9wUmlnaHRTZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzllOTg5ODtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9kdWN0Q2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIHdpZHRoOiA2MCU7XG59XG4ucHJvZHVjdENhcmQgLnByb2R1Y3RJbWFnZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0Q2FyZCAucHJvZHVjdEltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3RDYXJkIC5wcm9kdWN0SW1hZ2UgLmRpc2NvdW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2R1Y3RDYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5wcm9kdWN0Q2FyZCAuc3ViVGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRkQnRuSWNvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFkZEJ0blNlY3Rpb24gLmFkZEJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOjVweDtcbn1cblxuLnByb2R1Y3ROYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ucHJvZHVjdERlc2Mge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnByb2R1Y3RDYXJkU2VjdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0Q2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBwYWRkaW5nOiAycHggYXV0bztcbiAgd2lkdGg6IGNhbGMoNzAlIC0gMjBweCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbn1cblxuLnRleHRVbml0cyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cbi5jb250ZW50U2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogOHB4O1xuICB9XG5cbiAgLmxlZnRIZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnJpZ2h0SGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC50b3BSaWdodFNlY3Rpb257XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ODk4O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAucHJvZHVjdENhcmR7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICAgIHdpZHRoOiA2MCU7XG4gIFxuICAgIC5wcm9kdWN0SW1hZ2V7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmRpc2NvdW50U2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAvL21hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAvL2xlZnQ6IDEwcHg7XG4gICAgfVxuICAgIH1cbiAgXG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgIH1cbiAgICAuc3ViVGl0bGV7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgXG4gICAgXG4gIH1cbiAgXG4gIC5hZGRCdG5JY29ue1xuICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIC5hZGRCdG5TZWN0aW9ue1xuICAgIC5hZGRCdG57XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6NXB4OyBcbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIC5wcm9kdWN0TmFtZXtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5wcm9kdWN0RGVzY3tcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gIFxuICAucHJvZHVjdENhcmRTZWN0aW9ue1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93LVg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbiAgLnByb2R1Y3RDYXJke1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgcGFkZGluZzogMnB4IGF1dG87XG4gICAgd2lkdGg6IGNhbGMoNzAlIC0gMjBweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgfVxuXG4uc2VnbWVudEJ0bntcbiAgICAgIC8vIG1pbi13aWR0aDogNDVweDtcbiAgICAgIC8vIG1heC13aWR0aDogNjBweDtcbiAgfVxuXG4gIC50ZXh0VW5pdHN7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfSAgXG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/top-savers/top-savers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/top-savers/top-savers.component.ts ***!
  \***************************************************************/
/*! exports provided: TopSaversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSaversComponent", function() { return TopSaversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let TopSaversComponent = class TopSaversComponent {
    constructor(dataServ, cart, route, fsServices) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.route = route;
        this.fsServices = fsServices;
        // this.topSavers = dataServ.topSaversproduct[0];
        this.fsServices.getProductsAccordingToTags('Top Savers Today').then((data) => {
            this.topSavers = data;
        });
    }
    ngOnInit() { }
    seeAllProduct() {
        this.route.navigate(['product-list']);
    }
    addToCart(product) {
        const productunits = this.cart.addCart.find(el => el.id === product.id);
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
    }
    updateCart(productID, type, product) {
        const productunits = this.cart.addCart.find(el => el.id === productID);
        const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
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
    }
    viewProduct(product) {
        this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
    }
};
TopSaversComponent.ctorParameters = () => [
    { type: src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
TopSaversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'top-savers',
        template: __webpack_require__(/*! raw-loader!./top-savers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/top-savers/top-savers.component.html"),
        styles: [__webpack_require__(/*! ./top-savers.component.scss */ "./src/app/components/top-savers/top-savers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        src_app_services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], TopSaversComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_top_savers_top_savers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/top-savers/top-savers.component */ "./src/app/components/top-savers/top-savers.component.ts");
/* harmony import */ var _components_best_offers_best_offers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/best-offers/best-offers.component */ "./src/app/components/best-offers/best-offers.component.ts");
/* harmony import */ var _components_popular_deals_popular_deals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/popular-deals/popular-deals.component */ "./src/app/components/popular-deals/popular-deals.component.ts");
/* harmony import */ var _components_short_offers_short_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/short-offers/short-offers.component */ "./src/app/components/short-offers/short-offers.component.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */












let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _share_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_top_savers_top_savers_component__WEBPACK_IMPORTED_MODULE_7__["TopSaversComponent"], _components_best_offers_best_offers_component__WEBPACK_IMPORTED_MODULE_8__["BestOffersComponent"], _components_popular_deals_popular_deals_component__WEBPACK_IMPORTED_MODULE_9__["PopularDealsComponent"], _components_short_offers_short_offers_component__WEBPACK_IMPORTED_MODULE_10__["ShortOffersComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n *\n */\n.contentSection {\n  background: #fff;\n  margin: 8px;\n}\n.leftHeading {\n  font-size: 20px;\n  font-weight: bold;\n}\n.locationAddress {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n.rightHeading {\n  font-size: 18px;\n}\n.topRightSection {\n  border: 1px solid #9e9898;\n  padding: 6px;\n  border-radius: 5px;\n}\n.productCard {\n  box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  --box-shadow: 0 4px 16px rgba(156, 153, 153, 0.97);\n  width: 60%;\n}\n.productCard .productImage {\n  padding: 0 40px;\n  position: relative;\n}\n.productCard .productImage .discountSection {\n  background: #15bf15;\n  color: #fff;\n  position: absolute;\n  padding: 6px 16px;\n  border-radius: 5px;\n  font-weight: bold;\n  margin-top: 8px;\n  left: 10px;\n}\n.productCard ion-icon[name=checkmark] {\n  color: #15bf15;\n}\n.productCard ion-card-header {\n  padding: 0 16px;\n}\n.productCard .subTitle {\n  font-size: 16px;\n  text-decoration: line-through;\n  padding-left: 16px;\n  color: #000;\n}\n.addBtnSection .addBtn {\n  border-radius: 5px;\n  --border-radius:5px;\n}\n.slideSection {\n  margin: 8px;\n}\n.slideSection img {\n  border-radius: 8px;\n}\n.childCard {\n  width: 100%;\n  border-radius: 0;\n  box-shadow: none;\n  --box-shadow:none;\n}\nion-row.CardrowSection {\n  text-align: center;\n}\nion-col.cardCol {\n  text-align: center;\n  margin-top: 0px;\n  padding-bottom: 5px;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n}\n.deliverySection ion-note {\n  font-size: 12px;\n  margin-top: 8px;\n}\n.deliverySection ion-select {\n  padding: 0;\n  font-weight: bold;\n}\n.deliverySection ion-label {\n  font-size: 20px;\n  font-weight: bold;\n}\n.deliverySection ion-icon {\n  font-size: 24px;\n}\n.bottom-text {\n  bottom: 5px;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n.green {\n  color: green;\n}\n.childCardSection {\n  margin: 0 2px;\n  min-height: 210px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.childCardSection .child {\n  width: 52%;\n}\n.create_icon {\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi9Vc2Vycy92aXNoYWwvRG9jdW1lbnRzL3Rlc3RpbmcvZ3JldGVsbG8tbW9iaWxlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VBQUE7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBREFGO0FDR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURBRjtBQ0dBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURBQTtBQ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7QURDRjtBQ0VBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURDSjtBQ0VBO0VBQ0UsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7QURDRjtBQ0NBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNDSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QURDTjtBQ0dBO0VBQ0ksY0FBQTtBRERKO0FDSUU7RUFDRSxlQUFBO0FERko7QUNJRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREZKO0FDT0U7RUFDRSxrQkFBQTtFQUNGLG1CQUFBO0FESkY7QUNTQTtFQUNFLFdBQUE7QURORjtBQ09FO0VBQ0Usa0JBQUE7QURMSjtBQ1NBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRE5GO0FDU0E7RUFDRSxrQkFBQTtBRE5GO0FDVUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURQRjtBQ1dFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QURSSjtBQ1dFO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FEVE47QUNXRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRFRKO0FDV0U7RUFDRSxlQUFBO0FEVEo7QUNhQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FEVkY7QUNZQTtFQUNJLFlBQUE7QURUSjtBQ1lBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEVEY7QUNXRTtFQUNFLFVBQUE7QURUSjtBQ1lBO0VBRUUsa0JBQUE7QURWRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5sZWZ0SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2NhdGlvbkFkZHJlc3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJpZ2h0SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRvcFJpZ2h0U2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTk4OTg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdENhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE1NiwgMTUzLCAxNTMsIDAuOTcpO1xuICB3aWR0aDogNjAlO1xufVxuLnByb2R1Y3RDYXJkIC5wcm9kdWN0SW1hZ2Uge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0Q2FyZCAucHJvZHVjdEltYWdlIC5kaXNjb3VudFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMTViZjE1O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3RDYXJkIGlvbi1pY29uW25hbWU9Y2hlY2ttYXJrXSB7XG4gIGNvbG9yOiAjMTViZjE1O1xufVxuLnByb2R1Y3RDYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5wcm9kdWN0Q2FyZCAuc3ViVGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRkQnRuU2VjdGlvbiAuYWRkQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4uc2xpZGVTZWN0aW9uIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uc2xpZGVTZWN0aW9uIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNoaWxkQ2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuaW9uLXJvdy5DYXJkcm93U2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbC5jYXJkQ29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kZWxpdmVyeVNlY3Rpb24gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5kZWxpdmVyeVNlY3Rpb24gaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlbGl2ZXJ5U2VjdGlvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlbGl2ZXJ5U2VjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJvdHRvbS10ZXh0IHtcbiAgYm90dG9tOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY2hpbGRDYXJkU2VjdGlvbiB7XG4gIG1hcmdpbjogMCAycHg7XG4gIG1pbi1oZWlnaHQ6IDIxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGlsZENhcmRTZWN0aW9uIC5jaGlsZCB7XG4gIHdpZHRoOiA1MiU7XG59XG5cbi5jcmVhdGVfaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn0iLCIvKipcbiAqIElvbmljIDQgIEdyb2NlcnkgQ29tcGxldGUgUGxhdGZvcm0oaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1ncm9jZXJ5LWFwcC1hbmQtYWRtaW4tZGFzaGJvYXJkKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxuICpcbiAqL1xuXG5cbi5jb250ZW50U2VjdGlvbntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5sZWZ0SGVhZGluZ3tcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvY2F0aW9uQWRkcmVzc3tcbm92ZXJmbG93OiBoaWRkZW47XG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbndoaXRlLXNwYWNlOiBub3dyYXA7XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZmxleHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmlnaHRIZWFkaW5ne1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b3BSaWdodFNlY3Rpb257XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzllOTg5ODtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdENhcmR7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNTYsIDE1MywgMTUzLCAwLjk3KTtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTU2LCAxNTMsIDE1MywgMC45Nyk7XG4gIHdpZHRoOiA2MCU7XG5cbi5wcm9kdWN0SW1hZ2V7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5kaXNjb3VudFNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZDogIzE1YmYxNTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG5pb24taWNvbltuYW1lPWNoZWNrbWFya10ge1xuICAgIGNvbG9yOiAjMTViZjE1O1xufVxuXG4gIGlvbi1jYXJkLWhlYWRlcntcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbiAgLnN1YlRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cblxuLmFkZEJ0blNlY3Rpb257XG4gIC5hZGRCdG57XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czo1cHg7XG4gIH1cblxufVxuXG4uc2xpZGVTZWN0aW9ue1xuICBtYXJnaW46IDhweDtcbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuXG4uY2hpbGRDYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzpub25lO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuaW9uLXJvdy5DYXJkcm93U2VjdGlvbiB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuXG59XG5cbmlvbi1jb2wuY2FyZENvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGVsaXZlcnlTZWN0aW9ue1xuICBpb24tbm90ZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgaW9uLXNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpb24taWNvbntcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuLmJvdHRvbS10ZXh0e1xuICBib3R0b206IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXkgOmZsZXg7XG4gIHdpZHRoOjEwMCU7XG59XG4uZ3JlZW4ge1xuICAgIGNvbG9yOmdyZWVuO1xufVxuXG4uY2hpbGRDYXJkU2VjdGlvbntcbiAgbWFyZ2luOiAwIDJweDtcbiAgbWluLWhlaWdodDogMjEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5jaGlsZHtcbiAgICB3aWR0aDogNTIlO1xuICB9XG59XG4uY3JlYXRlX2ljb25cbntcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/data.service */ "./src/app/services/DataServices/data.service.ts");
/* harmony import */ var _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CartServices/cart.service */ "./src/app/services/CartServices/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/Utils/utils-service.service */ "./src/app/services/Utils/utils-service.service.ts");
/* harmony import */ var _services_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/Auth/auth-service.service */ "./src/app/services/Auth/auth-service.service.ts");
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */












let HomePage = class HomePage {
    constructor(dataServ, cart, http, route, modalController, fsServices, menuCtrl, authService, geolocation, util) {
        this.dataServ = dataServ;
        this.cart = cart;
        this.http = http;
        this.route = route;
        this.modalController = modalController;
        this.fsServices = fsServices;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.geolocation = geolocation;
        this.util = util;
        this.slideOpts = {
            effect: 'flip'
        };
        this.products = [];
        this.storesList = [];
        this.locationAddress = ' D-Block,Malviya Nagar,jaipur ';
        this.prodoctSlides = ['assets/imgs/b1.jpg', 'assets/imgs/b2.jpg', 'assets/imgs/b3.png', 'assets/imgs/b4.jpg'];
        this.fsServices.getProducts().then((data) => {
            this.products = data;
        });
        this.fsServices.getCategoriesHomePage().then((data) => {
            this.categoryItems = data;
        });
        this.getUserSearchingStores();
    }
    getUserSearchingStores() {
        this.fsServices.getUserLocalStores().then((data) => {
            data.subscribe(list => {
                this.storesList = list;
            });
        }).catch((error) => {
            console.log(error);
        });
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true, 'start');
        // this.geolocation.getCurrentPosition().then((resp) => {
        //     // we dont need this here
        //     // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
        // }).catch((error) => {
        // });
        if (!this.util.userSearchingCity) {
            this.selectRef.open();
        }
    }
    setUserSearchCity(city) {
        if (this.util.userSearchingCity) {
            localStorage.setItem('usersearchingcity', this.util.userSearchingCity);
            this.getUserSearchingStores();
        }
    }
    ngOnInit() {
        this.ionSlides.startAutoplay();
    }
    goToStorePage(store) {
        let navigationExtras = {
            queryParams: {
                storeid: store.id,
                storename: store.name
            }
        };
        this.route.navigate(['store'], navigationExtras);
    }
    slidesDidLoad() {
        this.ionSlides.startAutoplay();
    }
    seeAllProduct() {
        this.route.navigate(['product-list']);
    }
    addLocation() {
        this.route.navigate(['location']);
    }
    goToProducts(title, product) {
        this.route.navigate(['view-category-product', { categoryName: title.name, categoryId: title.id, product: JSON.stringify(product) }]);
    }
    searchPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"],
            });
            return yield modal.present();
        });
    }
    cartPage() {
        this.route.navigate(['cart']);
    }
    getGeoLocation(lat, lng) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (navigator.geolocation) {
                const geocoder = yield new google.maps.Geocoder();
                const latlng = yield new google.maps.LatLng(lat, lng);
                const request = { latLng: latlng };
                yield geocoder.geocode(request, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        const result = results[0];
                        const rsltAdrComponent = result.address_components;
                        if (result != null) {
                            if (rsltAdrComponent[0] != null) {
                                this.locationAddress = rsltAdrComponent[0].long_name + ', ' + rsltAdrComponent[2].short_name + ', ' + rsltAdrComponent[1].short_name;
                            }
                            for (let i = 0; i < rsltAdrComponent.length; i++) {
                                if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
                                    // this.util.userCity = rsltAdrComponent[i].short_name;
                                }
                            }
                        }
                        else {
                            // alert("No address available!");
                        }
                    }
                });
            }
        });
    }
    onChat() {
        this.route.navigate(['chat']);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _services_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
    { type: _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_10__["UtilsServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionSlides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
], HomePage.prototype, "ionSlides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCitySelect', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelect"])
], HomePage.prototype, "selectRef", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_DataServices_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _services_CartServices_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
        _services_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"],
        _services_Utils_utils_service_service__WEBPACK_IMPORTED_MODULE_10__["UtilsServiceService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map