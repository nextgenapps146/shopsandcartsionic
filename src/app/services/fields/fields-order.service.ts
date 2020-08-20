import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FieldsOrderService {

    orderTable = [
        { name: 'id', field: '', type: 'index' },
        { name: 'created_at', field: 'createdAtDate' },
        { name: 'AddressType', field: 'addressType' },
        { name: 'flat Number', field: 'flatNumber' },
        { name: 'Street', field: 'street' },
        { name: 'Locality', field: 'locality' },
        { name: 'Deliverd To', field: 'deliverdTo' },
        { name: 'Products Id', field: 'productId' },
        { name: 'productDetails', field: 'productDetails' },

        { name: 'Promo Code', field: 'promo' },
        { name: 'Promo off', field: 'promoOff' },
        { name: 'Selected Day', field: 'selectedDay' },
        { name: 'Selected Time', field: 'selectedTime' },
        { name: 'User Id', field: 'userId' },
    ];

}
