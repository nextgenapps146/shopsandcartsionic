import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    ordersRef: AngularFirestoreCollection<Order>;
    orderItemsRef: AngularFirestoreCollection<OrderItem>;

    constructor(
        public Afs: AngularFirestore
    ) { }

    public async getUserOrders(storeid) {
        this.ordersRef = this.Afs.collection<Order>('orders',
            ref => ref.where('storeid', '==', storeid));
        return this.ordersRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data: any = dataItems.payload.doc.data() as Order,
                    id = dataItems.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    public async updateStatus(status, orderid) {
        this.ordersRef = this.Afs.collection<Order>('orders');
        await this.ordersRef.doc(orderid).update({ status });
    }

    public async getOrderItems(itemid) {
        this.orderItemsRef = this.Afs.collection<OrderItem>('orderitems',
            ref => ref.where('orderid', '==', itemid));
        return this.orderItemsRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data: any = dataItems.payload.doc.data() as OrderItem,
                    id = dataItems.payload.doc.id;
                return { ...data, id };
            }))
        );
    }

    public async getOrder(orderid) {
        this.ordersRef = this.Afs.collection<Order>('orders');
        return this.ordersRef.doc(orderid).snapshotChanges().pipe(
            map((res: any) => {
                const record = res.payload.data() as Order;
                return record;
            })
        );
    }

    public async sendNotificaion(record) {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function() {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(record));
    }

    // Vishal - when you take a look at this, wanted to know where is this used..
    // public async getOders() {
    //     this.orderCollectionReference = this.Afs.collection('Orders', ref => ref);
    //     return this.orderCollectionReference.snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data = dataItems.payload.doc.data();
    //                 const id = dataItems.payload.doc.id;
    //                 const addressType = data.address.addresstype;
    //                 const flatNumber = data.address.flatNumber;
    //                 const locality = data.address.locality;
    //                 const deliverdTo = data.address.title + ' ' + data.address.name;
    //                 const street = data.address.street;
    //                 let createdAtDate = '';
    //                 if (data.created_at) {
    //                     createdAtDate = data.created_at.toDate();
    //                 }
    //                 const productId = [];
    //                 const productDetails = [];
    //                 for (const row of data.products) {
    //                     productId.push(row.id);
    //                     productDetails.push(row.name + '=' + row.units);
    //                 }
    //                 if (data.promoCode) {
    //                     const promo = data.promoCode.code;
    //                     const promoOff = data.promoCode.discount;
    //                     return { id, createdAtDate, productDetails, productId, promo, promoOff, addressType, street, flatNumber, locality, deliverdTo, ...data };
    //                 } else {
    //                     return { id, createdAtDate, productDetails, productId, addressType, street, flatNumber, locality, deliverdTo, ...data };
    //                 }

    //             }))
    //         );
    // }
}

export interface Order {
    storeid: string;
    customerid: string;
    customername: string;
    total: string;
    status: string; // vlaue will be New when added first
    transaction: any; // it is an array of object which contains these values { status , comment , time , username }
    delivery_mode: string; // it can be value from in three three option - deliver, pick_up , curve_site
    payment_mode: string;
    created_date: string; // it can be value of it =  online , cash_on_dlivery , pay_at_store
}

export interface OrderItem {
    orderid: string;
    itemid: string;
    itenname: string;
    itemimage: string;
    quantity: number;
    amount: number;
}
