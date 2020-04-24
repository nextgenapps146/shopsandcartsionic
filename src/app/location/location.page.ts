/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { UtilsServiceService } from '../services/Utils/utils-service.service';
// import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var google;

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
    items = ['New Delhi', 'Gurgaon', 'Jaipur', 'Goa', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Kolkata', 'Pune', 'Chennai', 'Chandigarh'];
    location: any;
    options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    geocoder: any;
    possibleAddresses: Array<object>;
    constructor(
        private route: Router,
        public util: UtilsServiceService,
        public modalCtrl: ModalController, public toastCtrl: ToastController, public geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

    ngOnInit() {
        this.possibleAddresses = [];
        this.geocoder = new google.maps.Geocoder();
    }
    home() {
        this.route.navigate(['home']);
    }
    // getUserLocation() {
    //     this.geolocation.getCurrentPosition().then((resp) => {
    //         this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
    //     }).catch((error) => {
    //     });
    // }
    // async getGeoLocation(lat: number, lng: number) {
    //     const _instance = this;
    //     if (navigator.geolocation) {
    //         const latlng = await new google.maps.LatLng(lat, lng);
    //         const request = { latLng: latlng };

    //         // use Ionic Native geocode if cordova is available
    //         // TO DO ---
    //         this.geocoder.geocode(request, (results, status) => {
    //             if (status === google.maps.GeocoderStatus.OK) {
    //                 _instance.preparePossibleAdressesList(results);
    //             }
    //         });
    //     }
    // }

    // searchAddress(address) {
    //     this.util.openLoader();
    //     const _instance = this;
    //     this.possibleAddresses = [];
    //     this.geocoder.geocode( { 'address': address}, function(results, status) {
    //         if (status === 'OK') {
    //             _instance.preparePossibleAdressesList(results);
    //         } else {
    //           alert('Geocode was not successful for the following reason: ' + status);
    //         }
    //     });
    // }

    // preparePossibleAdressesList(results) {
    //     if (results && results.length > 0) {
    //         for (let i = 0; i < results.length; i++) {
    //             const result = results[i],
    //             rsltAdrComponent = result.address_components;
    //             if (result != null) {
    //                 const address: any = {};
    //                 for (let i = 0; i < rsltAdrComponent.length; i++) {
    //                     if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('street_number')) {
    //                         address.streetnumber = rsltAdrComponent[i].short_name;
    //                     }
    //                     if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('route')) {
    //                         address.route = rsltAdrComponent[i].short_name;
    //                     }
    //                     if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
    //                         address.city = rsltAdrComponent[i].short_name;
    //                     }
    //                     if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('administrative_area_level_1')) {
    //                         address.state = rsltAdrComponent[i].short_name;
    //                     }
    //                     if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('country')) {
    //                         address.country = rsltAdrComponent[i].short_name;
    //                     }
    //                     if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('postal_code')) {
    //                         address.zipcode = rsltAdrComponent[i].short_name;
    //                     }
    //                 }
    //                 if (address.route && address.city) {
    //                     this.possibleAddresses.push(address);
    //                 }
    //             } else {
    //                 this.util.presentToast('No Results Found!', true, 'bottom', 2100);
    //             }
    //         }
    //         this.util.closeLoading();
    //     }
    // }
}
