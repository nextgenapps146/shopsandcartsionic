import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController, IonSlides, MenuController, IonSelect, PopoverController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilsService } from '../../services/utils.service';
import { AuthServiceService } from '../../services/auth-service.service';
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
        public http: HttpClient,
        private route: Router,
        public fsServices: FirestoreService,
        private storeService: StoreService,
        public authService: AuthServiceService,
        public popoverController: PopoverController,
        public utils: UtilsService
    ) {

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
        this.storeService.getUserLocalStores(this.utils.userShoppingCity).then((data) => {
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
                storeId: store.id,
                storeName: store.name
            }
        };
        this.route.navigate(['store'], navigationExtras);
    }

    onChat() {
        this.route.navigate(['chat']);
    }
}




