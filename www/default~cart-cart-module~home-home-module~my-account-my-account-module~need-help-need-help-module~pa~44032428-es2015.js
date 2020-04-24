(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~home-home-module~my-account-my-account-module~need-help-need-help-module~pa~44032428"],{

/***/ "./src/app/services/CartServices/cart.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/CartServices/cart.service.ts ***!
  \*******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
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


let CartService = class CartService {
    constructor() {
        this.productQty = 0;
        this.addCart = [];
        this.subTotal = 0;
        this.grandTotal = 0;
        this.orderComplete = [];
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartService);



/***/ }),

/***/ "./src/app/services/DataServices/data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/DataServices/data.service.ts ***!
  \*******************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
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


let DataService = class DataService {
    constructor() {
        this.current_user = {
            fname: 'John ',
            uid: 'ALSIOCSIIUAISUC',
            did: 'JIOU-ASBB-C871-0345',
            aid: 'ASBB-ASBB-C871-0345',
            lname: 'Deo',
            email: 'AdityaGour@gmail.com',
            billing: [{ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/visa.png' }, { card_number: '4564', expiry_date: '03/25', image: 'assets/imgs/mastercard.png' },],
            address: [
                { name: 'John Deo', flat: 'D Block', locality: 'Jaipur', nickName: 'office' },
                { name: 'Aditya Gour', flat: 'D Block Malviya Nagar', locality: 'Jaipur', nickName: 'Home' }
            ]
        };
        this.needHelp = {
            'Shipping and Delivery': [
                { 'How log does shipping take?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How can I track my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How much does shipping cost?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Where does my order ship from?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I change my shipping address?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Returns and Refunds': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Payment, Pricing & Promotions': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Orders': [
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Managing Your Account': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'User Feedback': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Customer Support': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ]
        };
        this.topSaversproduct = [{
                headingLeft: 'Top Savers Today', headingRight: 'See all',
                products: [
                    { id: 0, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 1, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 2, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 3, off: '27% off', name: 'Carrots ', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 4, off: '22% off', name: 'Banana', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 5, off: '40% off', name: 'Apples', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 6, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/t2.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 7, off: '27% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 8, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 9, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 10, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 11, off: '27% off', name: 'Carrots', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                ]
            }];
        this.bestOffers = [{
                headingLeft: 'Best Offers', headingRight: 'See all',
                products: [
                    { id: 12, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 13, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 14, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 15, off: '27% off', name: 'Carrots ', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 16, off: '22% off', name: 'Banana', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 17, off: '40% off', name: 'Apples', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 18, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/t2.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 19, off: '27% off', name: 'Fruits & Vegetables', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 20, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 21, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 22, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 23, off: '27% off', name: 'Carrots', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                ]
            }];
        this.shortOffers = [{
                headingLeft: 'Short Time Offers', headingRight: 'See all',
                products: [
                    { id: 24, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 25, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 26, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 27, off: '27% off', name: 'Carrots ', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 28, off: '22% off', name: 'Banana', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 29, off: '40% off', name: 'Apples', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 30, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/t2.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 31, off: '27% off', name: 'Fruits & Vegetables', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 32, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 33, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 34, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 35, off: '27% off', name: 'Carrots', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                ]
            }];
        this.popularDeals = [{
                headingLeft: 'Popular Deals', headingRight: 'See all',
                products: [
                    { id: 37, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 38, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 39, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 40, off: '27% off', name: 'Carrots ', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 41, off: '22% off', name: 'Banana', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 42, off: '40% off', name: 'Apples', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 43, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/t2.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 44, off: '27% off', name: 'Fruits & Vegetables', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 45, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 46, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 47, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 48, off: '27% off', name: 'Carrots', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                ]
            }];
        this.similarProducts = [{
                headingLeft: 'Similar Product', headingRight: 'View More',
                products: [
                    { id: 49, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 50, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 51, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 52, off: '27% off', name: 'Carrots ', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 53, off: '22% off', name: 'Banana', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 54, off: '40% off', name: 'Apples', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 55, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 56, off: '27% off', name: 'Fruits & Vegetables', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 57, off: '22% off', name: 'Banana', image: 'assets/imgs/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 58, off: '40% off', name: 'Apples', image: 'assets/imgs/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                    { id: 59, off: '12% off', name: 'Tomatoes', image: 'assets/imgs/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
                    { id: 60, off: '27% off', name: 'Carrots', image: 'assets/imgs/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
                ]
            }];
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataService);



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~home-home-module~my-account-my-account-module~need-help-need-help-module~pa~44032428-es2015.js.map