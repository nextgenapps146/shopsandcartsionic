/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/DataServices/data.service';
import { CartService } from '../services/CartServices/cart.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalController, IonSlides, MenuController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { FirestoreService } from '../services/firestore/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilsServiceService } from '../services/Utils/utils-service.service';
import { AuthServiceService } from '../services/Auth/auth-service.service';
declare var google;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('ionSlides', { static: true }) ionSlides: IonSlides;
    public locationAddress;
    public prodoctSlides: Array<any>;
    public categoryItems;

    slideOpts = {
        effect: 'flip'
    };
    products: any = [];
    storesList: any = [];

    public productList: Array<any>;
    constructor(
        public dataServ: DataService,
        public cart: CartService,
        public http: HttpClient,
        private route: Router,
        private modalController: ModalController,
        public fsServices: FirestoreService,
        private menuCtrl: MenuController,
        public authService: AuthServiceService,
        private geolocation: Geolocation,
        public util: UtilsServiceService
    ) {
        this.locationAddress = ' D-Block,Malviya Nagar,jaipur ';
        this.prodoctSlides = ['assets/imgs/b1.jpg', 'assets/imgs/b2.jpg', 'assets/imgs/b3.png', 'assets/imgs/b4.jpg'];

        this.fsServices.getProducts().then((data) => {
            this.products = data;
        });
        this.fsServices.getCategoriesHomePage().then((data) => {
            this.categoryItems = data;
        });

        this.fsServices.getUserLocalStores('Naperville').then((data) => {
            data.subscribe(list => {
                this.storesList = list;
            });
        }).catch((error) => {
            console.log(error);
        });

    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true, 'start');
        this.geolocation.getCurrentPosition().then((resp) => {
            // we dont need this here
            // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
        });

    }
    ngOnInit() {
        this.ionSlides.startAutoplay();
    }
    goToStorePage() {
        // this.route.navigate(['store', { product: JSON.stringify(product) }]); later
        this.route.navigate(['store']);
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
    async searchPage() {
        const modal = await this.modalController.create({
            component: SearchPage,
        });
        return await modal.present();
    }

    cartPage() {
        this.route.navigate(['cart']);
    }
    async getGeoLocation(lat: number, lng: number) {
        if (navigator.geolocation) {
            const geocoder = await new google.maps.Geocoder();
            const latlng = await new google.maps.LatLng(lat, lng);
            const request = { latLng: latlng };

            await geocoder.geocode(request, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    const result = results[0];
                    const rsltAdrComponent = result.address_components;
                    if (result != null) {

                        if (rsltAdrComponent[0] != null) {
                            this.locationAddress = rsltAdrComponent[0].long_name + ', ' + rsltAdrComponent[2].short_name + ', ' + rsltAdrComponent[1].short_name;
                        }
                        for (let i = 0; i < rsltAdrComponent.length; i++) {
                            if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
                                this.util.userCity = rsltAdrComponent[i].short_name;
                            }
                        }
                    } else {
                        // alert("No address available!");
                    }
                }
            });
        }
    }
}




