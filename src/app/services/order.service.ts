import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    ordersRef: AngularFirestoreCollection<Order>;
    orderItemsRef: AngularFirestoreCollection<OrderItem>;

    constructor(
        public Afs: AngularFirestore,
        public utils: UtilsService
    ) { }

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

    public async addOrder(record) {
        this.ordersRef = this.Afs.collection('orders');
        return await this.ordersRef.add(record).then((doc) => {
            return doc.id;
        });
    }

    public async addOrderItem(record) {
        this.orderItemsRef = this.Afs.collection('orderitems');
        return await this.orderItemsRef.add(record);
    }

    public async getUserOrders(userId) {
        this.ordersRef = this.Afs.collection<Order>('orders',
            ref => ref.where('customerid', '==', userId).where('deliverystatus', '==', 'nd'));
        return this.ordersRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data: any = dataItems.payload.doc.data() as Order;
                const id = dataItems.payload.doc.id;
                // this.UserOrders.push({ id, ...data });
                return { id, ...data };
            }))
        );
    }

    public async getOrdersItem(itemid) {
        this.orderItemsRef = this.Afs.collection<OrderItem>('orderitems',
            ref => ref.where('orderid', '==', itemid));
        return this.orderItemsRef.snapshotChanges().pipe(
            map(res => res.map(dataItems => {
                const data: any = dataItems.payload.doc.data() as OrderItem;
                // const id = dataItems.payload.doc.id;
                return { ...data };
            }))
        );
    }

    public async placeOrder(randomNumber, record) {
        await this.utils.openLoader();
        this.ordersRef = this.Afs.collection('orders');
        await this.utils.openLoader();
        await this.ordersRef.doc(randomNumber).set(record);
        await this.utils.closeLoading();
    }

    public saveOrderToStorage(userId, record, isUpdateFromDbRequired) {
        let allOrders = {
            orders: []
        };
        const savedOrders = this.getSavedOrders(userId);
        if (savedOrders && savedOrders.orders) {
            allOrders = savedOrders;
        }
        allOrders['isUpdateRequired'] = isUpdateFromDbRequired;
        allOrders.orders.unshift(record);
        localStorage.setItem(userId + 'orders', JSON.stringify(allOrders));
    }

    public getSavedOrders(userId) {
        return JSON.parse(localStorage.getItem(userId + 'orders'));
    }

    public saveAllOrdersToStorage(userId, allOrders) {
        localStorage.setItem(userId + 'orders', JSON.stringify(allOrders));
    }

    // // Revisiting needed ----
    // public async createUserOrder(grandTotal, addCart, promoCode, selectedDay, selectedTime, address) {
    //     this.ordersRef = this.Afs.collection('Orders');
    //     await this.utils.openLoader();
    //     // if (Object.keys(promoCode).length) {
    //     //     await this.ordersRef.add({ created: new Date(), total: grandTotal, products: addCart, promoCode, selectedDay, selectedTime, address, userid: this.utils.userInfo.id });
    //     // } else {
    //     //     await this.ordersRef.add({ created: new Date(), total: grandTotal, products: addCart, selectedDay, selectedTime, address, userid: this.utils.userInfo.id });
    //     // }
    //     await this.utils.closeLoading();
    // }

    // This is also in chat Service - i dont think we need in two places
    // public async sendNotificaion(record) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.addEventListener('readystatechange', function() {
    //         if (this.readyState === 4) {
    //             console.log(this.responseText);
    //         }
    //     });
    //     xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify(record));
    // }

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
    // storeid: string;
    // customerid: string;
    // customername: string;
    // total: string;
    // status: string; // vlaue will be New when added first
    // transaction: any; // it is an array of object which contains these values { status , comment , time , username }
    // delivery_mode: string; // it can be value from in three three option - deliver, pick_up , curve_site
    // payment_mode: string;
    // created: Date; // it can be value of it =  online , cash_on_dlivery , pay_at_store
}

export interface OrderItem {
    orderid: string;
    itemid: string;
    itenname: string;
    itemimage: string;
    quantity: number;
    amount: number;
}
