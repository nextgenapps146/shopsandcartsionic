import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    addrRef: AngularFirestoreCollection;

    constructor(
        public Afs: AngularFirestore,
        public utils: UtilsService
        ) { }

    // only add to local storage
    public addUserAddress(userId, result, selected) {
        const userAddresses = this.getUserAddress(userId);
        if (result && result.fullAddress) {
            userAddresses['items'].push(result);
        }
        userAddresses['selected'] = selected;
        localStorage.setItem(userId + 'addresses', JSON.stringify(userAddresses));
    }

    public getUserAddress(userId) {
        const defaultAddress = { items: [], selected: '' };
        return JSON.parse(localStorage.getItem(userId + 'addresses')) || defaultAddress;
    }

    // public async getDeliveryAddress(address_id) {
    //     this.addrRef = this.Afs.collection('address');
    //     return this.addrRef.doc(address_id).snapshotChanges().pipe(
    //         map((res: any) => {
    //             const record = res.payload.data();
    //             return record;
    //         })
    //     );
    // }
}
