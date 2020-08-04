import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { UtilsService } from '../../services/utils.service';
import { CartService } from '../../services/CartServices/cart.service';
import { constants } from 'buffer';
import { ChatService } from '../../services/chat.service';
import { StoreCategoryService } from '../../services/store-category.service';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.page.html',
    styleUrls: ['./store.page.scss'],
})

export class StorePage implements OnInit {
    storeProductsList: any;
    storeId: any;
    storeName: any;
    users = [];
    result: any;
    userId = this.utils.userInfo.id;
    currentAddingItem: any = null;
    storeCategoriesList: any;
    qpMap: any;

    constructor(
        private route: Router,
        private activatedRoute: ActivatedRoute,
        private utils: UtilsService,
        private fireStore: FirestoreService,
        private chatService: ChatService,
        private storeCategoryService: StoreCategoryService,
        private storeService: StoreService,
        public cart: CartService) {
        this.qpMap = this.utils.quantitiesAndProductsMap;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.storeId && params.storeName) {
                this.storeId = params.storeId;
                this.storeName = params.storeName;
                this.getStoreInfo(this.storeId);
                localStorage.setItem('sellerid', this.storeId);
                this.cart.setCurrentStore(this.storeId);

                let productQty = 0;
                this.cart.addCart.map((el) => {
                    productQty += el.units;
                });
                this.cart.productQty = productQty;
                this.getStoreCategories(this.storeId);
            }
        });
    }

    ngOnInit() {
        // This needs to be moved to products page and category id needs to be sent with this
        // this.storeProductService.getStoreProducts().then((data) => {
        //     data.subscribe(list => {
        //         for (let elc = 0; elc < (list || []).length; elc++) {
        //             const product = list[elc];
        //             const productunits = this.cart.addCart.find(el => el.id === product.id);
        //             if (productunits) {
        //                 (<any>list[elc]).units = productunits.units;
        //             } else {
        //                 (<any>list[elc]).units = 0;
        //             }
        //         }
        //         this.storeProductsList = list;
        //         console.log(list);
        //     });
        // });
    }

    getStoreInfo(storeId) {
        this.storeService.getStoreInfo(storeId).then((data) => {
            data.subscribe(data => {
                this.utils.userShoppingStoreInfo = data;
            });
        });
    }

    getStoreCategories(storeId) {
        this.storeCategoryService.getStoreCategories(storeId).then((data) => {
            data.subscribe(list => {
                this.storeCategoriesList = list;
                // this.myStore.categories = list;
            });
        });
    }

    // I dont think we need to call this here - we only ceck and add when they click on it
    // getChatUsers() {
    //     this.chatService.checkChatContacts(this.utils.userInfo.id, this.storeId).then((messages) => {
    //         messages.subscribe(async (list) => {
    //             // this.users = list;
    //             console.log(list);
    //             const index = (list || []).findIndex((r) => r.customerid === this.utils.userInfo.id && r.sellerid === this.storeId);
    //             if (index < 0) {
    //                 const record = {
    //                     sellerid: this.storeId,
    //                     customerid: this.utils.userInfo.id,
    //                     sellerimage: 's.png',
    //                     sellername: this.storeName,
    //                     customerimage: 'c.png',
    //                     customername: this.utils.userInfo.username
    //                 };
    //                 await this.chatService.addChatContacts(record);
    //             } else {
    //                 const record = list[index];
    //                 const navigationExtras = {
    //                     queryParams: {
    //                         chatcontactid: record.chatcontactid,
    //                         sellerid: record.sellerid
    //                     }
    //                 };
    //                 this.router.navigate(['chatroom'], navigationExtras);
    //                 // this.router.navigateByUrl("/chatroom")
    //             }
    //         });
    //     });
    // }

    // enableItemAdding(product) {
    //     this.currentAddingItem = product;
    //     this.currentAddingItem.isItemAdding = true;
    // }

    // disableItemAdding() {
    //     if (this.currentAddingItem) {
    //         this.currentAddingItem.isItemAdding = false;
    //     }
    // }

    // addToCart(product) {
    //     this.disableItemAdding();
    //     this.enableItemAdding(product);
    //     const productunits = this.cart.addCart.find(el => el.id === product.id);
    //     if (productunits) {
    //         productunits.units += 1;
    //         this.cart.productQty += 1;
    //         product.units = productunits.units;
    //     } else {
    //         product.units = 1;
    //         this.cart.addCart.push(product);
    //         this.cart.productQty += 1;
    //     }
    //     this.cart.setCurrentStore(this.storeId);
    // }

    // updateCart(productID, type, product) {
    //     const productunits = this.cart.addCart.find(el => el.id === productID);
    //     const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
    //     if (type === 'add') {
    //         productunits.units += 1;
    //         this.cart.productQty += 1;
    //         product.units = productunits.units;
    //     }
    //     if (type === 'remove') {
    //         productunits.units -= 1;
    //         this.cart.productQty -= 1;
    //         product.units = productunits.units;
    //         if (product.units === 0) {
    //             this.cart.addCart.splice(productIndex, 1);
    //             this.disableItemAdding();
    //         }
    //     }
    //     this.cart.setCurrentStore(this.storeId);
    // }

    onchatroom() {
        // this.getChatUsers();
        this.route.navigate(['chatroom'], { queryParams: { storeId: this.storeId }});
    }

    cartPage() {
        const navigationExtras = {
            queryParams: {
                storeid: this.storeId,
                storeName: this.storeName
            }
        };
        this.route.navigate(['cart'], navigationExtras);
    }

    handleHeaderEvents(event) {
        if (event.name === 'cart' && this.qpMap['totalCart'] && this.qpMap['totalCart'] > 0) {
            this.route.navigate(['cart']);
        }
    }

    handleCategoriesEvent(event) {
        if (event.name === 'arrow-right') {
            this.goToStoreProducts(event.item);
        }
    }

    goToStoreProducts(category) {
        const navigationExtras = {
            queryParams: {
                storeId: this.storeId,
                categoryId: category.id
            }
        };
        this.route.navigate(['product-list'], navigationExtras);
    }

}
