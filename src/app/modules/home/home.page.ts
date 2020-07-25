import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { CartService } from '../../services/CartServices/cart.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalController, IonSlides, MenuController, IonSelect, PopoverController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilsService } from '../../services/utils.service';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { SelectLocationComponent } from '../../components/select-location/select-location.component';
import { StoreService } from '../../services/store.service';

declare var google;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('ionSlides', { static: true }) ionSlides: IonSlides;
    @ViewChild('myCitySelect', { static: true }) selectRef: IonSelect;

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
        private storeService: StoreService,
        private menuCtrl: MenuController,
        public authService: AuthServiceService,
        public popoverController: PopoverController,
        private geolocation: Geolocation,
        public utils: UtilsService
    ) {
        // this.locationAddress = ' D-Block,Malviya Nagar,jaipur ';
        // this.prodoctSlides = ['assets/imgs/b1.jpg', 'assets/imgs/b2.jpg', 'assets/imgs/b3.png', 'assets/imgs/b4.jpg'];

        // this.fsServices.getProducts().then((data) => {
        //     this.products = data;
        // });

        // this.fsServices.getCategoriesHomePage().then((data) => {
        //     this.categoryItems = data;
        // });

    }

    ionViewDidEnter() {
        if (!this.utils.userShoppingCity) {
            this.presentPopover(null);
        } else {
            this.getUserSearchingStores();
        }
    }

    ngOnInit() {
        // this.ionSlides.startAutoplay();
    }

    async presentPopover(event: any) {
        const popover = await this.popoverController.create({
          component: SelectLocationComponent,
          event: event,
          showBackdrop: true,
          backdropDismiss: false,
          cssClass: 'overlay-popover'
        });

        popover.onDidDismiss().then((dataReturned) => {
            this.utils.userShoppingCity = dataReturned.data;
            this.setUserShoppingCity();
        });

        return await popover.present();
    }

    handleHeaderEvents(event) {
        if (event.name === 'title') {
            this.presentPopover(event);
        }
    }

    setUserShoppingCity() {
        if (this.utils.userShoppingCity) {
            localStorage.setItem('shoppingCity', this.utils.userShoppingCity);
            this.getUserSearchingStores();
        }
    }

    getUserSearchingStores() {
        this.storeService.getUserLocalStores().then((data) => {
            data.subscribe(list => {
                this.storesList = list;
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    goToStorePage(store) {
        const navigationExtras = {
            queryParams: {
                storeid: store.id,
                storename: store.name
            }
        };
        this.storeService.getStoreInfo(store.id).then((data) => {
            data.subscribe(data => {
                this.route.navigate(['store'], navigationExtras);
            });
        });
    }

    // slidesDidLoad() {
    //     this.ionSlides.startAutoplay();
    // }

    // seeAllProduct() {
    //     this.route.navigate(['product-list']);
    // }

    // addLocation() {
    //     this.route.navigate(['location']);
    // }

    // goToProducts(title, product) {
    //     this.route.navigate(['view-category-product', { categoryName: title.name, categoryId: title.id, product: JSON.stringify(product) }]);
    // }

    // async searchPage() {
    //     const modal = await this.modalController.create({
    //         component: SearchPage,
    //     });
    //     return await modal.present();
    // }

    // cartPage() {
    //     this.route.navigate(['cart']);
    // }

    // async getGeoLocation(lat: number, lng: number) {
    //     if (navigator.geolocation) {
    //         const geocoder = await new google.maps.Geocoder();
    //         const latlng = await new google.maps.LatLng(lat, lng);
    //         const request = { latLng: latlng };

    //         await geocoder.geocode(request, (results, status) => {
    //             if (status === google.maps.GeocoderStatus.OK) {
    //                 const result = results[0];
    //                 const rsltAdrComponent = result.address_components;
    //                 if (result != null) {

    //                     if (rsltAdrComponent[0] != null) {
    //                         this.locationAddress = rsltAdrComponent[0].long_name + ', ' + rsltAdrComponent[2].short_name + ', ' + rsltAdrComponent[1].short_name;
    //                     }
    //                     for (let i = 0; i < rsltAdrComponent.length; i++) {
    //                         if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
    //                             // this.utils.userCity = rsltAdrComponent[i].short_name;
    //                         }
    //                     }
    //                 } else {
    //                     // alert("No address available!");
    //                 }
    //             }
    //         });
    //     }
    // }

    onChat() {
        this.route.navigate(['chat']);
    }
}




