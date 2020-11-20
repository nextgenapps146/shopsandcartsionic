import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { MapboxService, Feature } from '../../services/mapbox.service';
declare var google;

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})

export class LocationPage implements OnInit {

    geocoder: any;
    possibleAddresses = [];

    constructor(
        private route: Router,
        private cRef: ChangeDetectorRef,
        public util: UtilsService,
        private mapboxService: MapboxService,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController) { }

    ngOnInit() {
        this.possibleAddresses = [];
        // this.geocoder = new google.maps.Geocoder();
    }

    home() {
        this.route.navigate(['home']);
    }

    handleHeaderEvents(event) {
        if (event.name === 'close') {
            this.modalCtrl.dismiss();
        } else if (event.name === 'search') {
            this.searchAddress(event.item);
            this.cRef.detectChanges();
        } else if (event.name === 'search-clear') {
            this.possibleAddresses = [];
        }
    }

    addressSelect(address) {
        this.modalCtrl.dismiss(address);
    }

    searchAddress(address) {
        this.mapboxService.searchWord(address).subscribe((features: Feature[]) => {
            const results = features.map(feat => feat.place_name);
            this.mapPossibleAddresses(features);
        });
    }

    mapPossibleAddresses(results) {
        results.forEach(item => {
            const address: any = {};
            const zipcode = item.context.filter(val => val.id.includes('postcode'));
            address.zipcode = zipcode[0].text;

            const state = item.context.filter(val => val.id.includes('region'));
            address.state = state[0].text;

            const city = item.context.filter(val => val.id.includes('place'));
            address.city = city[0].text;

            const country = item.context.filter(val => val.id.includes('country'));
            address.country = country[0].text;

            address.streetaddress = item.address + ' ' + item.text;
            this.possibleAddresses.push(address);
        });
    }

    // searchAddress(address) {
    //     this.util.openLoader();
    //     const instance = this;
    //     this.geocoder.geocode({ address }, (results, status) => {
    //         if (status === 'OK') {
    //             instance.preparePossibleAdressesList(results);
    //         } else {
    //             alert('Geocode was not successful for the following reason: ' + status);
    //         }
    //     });
    // }

    // preparePossibleAdressesList(results) {
    //     const addressResultsArr = [];
    //     results.forEach(item => {
    //         if (item && item.address_components) {
    //             const rsltAdrComponent = item.address_components,
    //             address: any = {};
    //             rsltAdrComponent.forEach(element => {
    //                 if (element.types && element.types.includes('street_number')) {
    //                     address.streetnumber = element.short_name;
    //                 } else if (element.types && element.types.includes('route')) {
    //                     address.route = element.short_name;
    //                 } else if (element.types && element.types.includes('locality')) {
    //                     address.city = element.short_name;
    //                 } else if (element.types && element.types.includes('administrative_area_level_1')) {
    //                     address.state = element.short_name;
    //                 } else if (element.types && element.types.includes('country')) {
    //                     address.country = element.short_name;
    //                 } else if (element.types && element.types.includes('postal_code')) {
    //                     address.zipcode = element.short_name;
    //                 }
    //             });
    //             if (address.city) {
    //                 addressResultsArr.push(address);
    //             }
    //         } else {
    //             this.util.presentToast('No Results Found!', true, 'bottom', 2100);
    //         }
    //         this.possibleAddresses = addressResultsArr;
    //     });

    //     this.util.closeLoading();
    // }
}
