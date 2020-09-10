import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
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
        private storeCategoryService: StoreCategoryService,
        private storeService: StoreService) {
        this.qpMap = this.utils.quantitiesAndProductsMap;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.storeId && params.storeName) {
                this.storeId = params.storeId;
                this.storeName = params.storeName;
                this.getStoreInfo(this.storeId);
                this.getStoreCategories(this.storeId);
            }
        });
    }

    ngOnInit() {}

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

    handleHeaderEvents(event) {
        if (event.name === 'cart' && this.qpMap['totalCart'] && this.qpMap['totalCart'] > 0) {
            this.route.navigate(['cart']);
        } else if (event.name === 'message') {
            this.goToChatRoom();
        }
    }

    goToChatRoom() {
        const navigationExtras = {
            queryParams: {
                recipientName: this.storeName,
                recipientId: this.storeId // seller id is the same as storeid
            }
        };
        this.route.navigate(['chatroom'], navigationExtras);
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
