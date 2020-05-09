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
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilsServiceService } from '../services/Utils/utils-service.service';
declare var google;

@Component({
    selector: 'app-create-store',
    templateUrl: './create-store.page.html',
    styleUrls: ['./create-store.page.scss'],
})

export class CreateStorePage implements OnInit {

    public selectedAddress: any;
    public storeName;
    public streetAddress;
    public city;
    public state;
    public zipCode;
    public isCurbSidePickup = false;
    public isDelivery = false;
    public isPayOnPickup = false;
    public isCredit = false;
    // public addresstype;
    public toggle: boolean;
    public btnColor;
    public homeTrue: boolean;
    public officeTrue: boolean;
    geocoder: any;
    possibleAddresses: Array<object>;
    showAddressSearchList = false;

    constructor(
        private route: Router,
        public geolocation: Geolocation,
        public utils: UtilsServiceService,
        private toastCtrl: ToastController,
        public fireStore: FirestoreService
    ) { }

    ngOnInit() {
        this.getSellerStoreInformation();
        if (this.utils.storeInfo && this.utils.storeInfo.id) {
            this.utils.presentToast('You Already have  a store Created!');
        }
        this.homeTrue = false;
        this.officeTrue = false;
        this.btnColor = 'undefined';
        this.possibleAddresses = [];
        this.geocoder = new google.maps.Geocoder();
    }

    // addAddress(item) {
    //     if (item === 'Home') {
    //         this.btnColor = 'primary';
    //         this.homeTrue = true;
    //         this.officeTrue = false;
    //     }
    //     if (item === 'Office') {
    //         this.officeTrue = true;
    //         this.homeTrue = false;
    //     }
    //     this.addresstype = item;
    // }


    getSellerStoreInformation() {
        if (this.utils.userInfo.id) {
            this.fireStore.getUserStore(this.utils.userInfo.id).then((data) => {
                data.subscribe(todos => {
                    // this.utils.storeInfo = todos[0];
                    console.log(this.utils.storeInfo);
                    this.utils.presentToast('You Already have  a store Created!', false, 'top', 6000);
                });
            });
        } else {
            // this.utils.presentToast('Store Not Found!');
            // logout -------
        }
    }

    async Continue() {
        if (this.storeName && this.streetAddress && this.city && this.state) {
            this.fireStore.createStore({
                name: this.storeName,
                streetaddress: this.streetAddress,
                city: this.city,
                state: this.state,
                zipcode: this.zipCode,
                iscurbsidepickup: this.isCurbSidePickup,
                isdelivery: this.isDelivery,
                ispayonpickup: this.isPayOnPickup,
                iscredit: this.isCredit,
                categories: []
            }).then(async () => {
                const toast = await this.toastCtrl.create({
                    message: 'Add new Address Successfully',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
                // TO DO -------------------
                // this.route.navigate([this.utils.AddAdressBackUrl, { title: 'MyAddress' }]);
            }).catch(err => console.log(err));
        } else {
            const toast = await this.toastCtrl.create({
                message: 'All fields are required here',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        }
    }

    validateSearch(value) {
        if (value.length > 0) {
            this.showAddressSearchList = true;
        } else {
            this.showAddressSearchList = false;
            this.possibleAddresses = [];
        }
    }

    selectAddress(address) {
        this.showAddressSearchList = false;
        this.streetAddress = address.streetnumber + ' ' + address.route;
        this.city = address.city;
        this.state = address.state;
        this.zipCode = address.zipcode;
    }

    getUserLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
        });
    }

    async getGeoLocation(lat: number, lng: number) {
        const _instance = this;
        if (navigator.geolocation) {
            const latlng = await new google.maps.LatLng(lat, lng);
            const request = { latLng: latlng };

            // use Ionic Native geocode if cordova is available -- fix this later
            this.geocoder.geocode(request, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    _instance.preparePossibleAdressesList(results);
                }
            });
        }
    }

    searchAddress(address) {
        this.showAddressSearchList = true;
        this.utils.openLoader();
        const _instance = this;
        this.possibleAddresses = [];
        this.geocoder.geocode( { 'address': address}, function(results, status) {
            if (status === 'OK') {
                _instance.preparePossibleAdressesList(results);
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    preparePossibleAdressesList(results) {
        if (results && results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                const result = results[i],
                rsltAdrComponent = result.address_components;
                if (result != null) {
                    const address: any = {};
                    for (let i = 0; i < rsltAdrComponent.length; i++) {
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('street_number')) {
                            address.streetnumber = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('route')) {
                            address.route = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
                            address.city = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('administrative_area_level_1')) {
                            address.state = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('country')) {
                            address.country = rsltAdrComponent[i].short_name;
                        }
                        if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('postal_code')) {
                            address.zipcode = rsltAdrComponent[i].short_name;
                        }
                    }
                    if (address.route && address.city) {
                        this.possibleAddresses.push(address);
                    }
                } else {
                    this.utils.presentToast('No Results Found!', true, 'bottom', 2100);
                }
            }
            this.utils.closeLoading();
        }
    }



}
