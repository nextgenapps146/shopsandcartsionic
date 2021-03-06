import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { UtilsService } from '../utils.service';

@Injectable({
    providedIn: 'root'
})

export class FirestoreService {
    chatMessagesCollectionReference: AngularFirestoreCollection<ChatMessages>;
    // chatContactsCollectionReference: AngularFirestoreCollection<ChatContacts>;
    productsCollectionReference: AngularFirestoreCollection<Products>;
    categoriesCollectionReference: AngularFirestoreCollection<Category>;
    offersCollectionReference: AngularFirestoreCollection<Offer>;
    // userCollectionRefrence: AngularFirestoreCollection<User>;
    // addressCollectionRefrence: AngularFirestoreCollection;
    // storesCollectionRefrence: AngularFirestoreCollection<Store>;
    // ordersCollectionRefrence: AngularFirestoreCollection;
    // selectedStoreProductsCollectionRefrence: AngularFirestoreCollection;
    chatCollectionRefrence: AngularFirestoreCollection<ChatContacts>;
    // ordersItemCollectionRefrence: AngularFirestoreCollection<OrderItem>;
    categories: any = [];
    promoCodes: any = [];
    UserAddress: any = [];
    UserOrders: any = [];
    recentSearches: any = [];
    storesNearBy: any = [];

    constructor(private utils: UtilsService, public Afs: AngularFirestore) { }


    // *****************************************************************************************************************************
    // --------------------------------------------------------------------------------------
    // GET CALLS  --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------
    // *****************************************************************************************************************************


    // public async getCurrentUserInfo(userId) {
    //     // TO DO --
    //     // when you dont find any record create a record --
    //     this.userCollectionRefrence = this.Afs.collection<User>('users');
    //     return this.userCollectionRefrence.doc(userId)
    //         .snapshotChanges().pipe(
    //             map((res: any) => {

    //                 // Since this is a single object only one value will come here
    //                 this.utils.userInfo = res.payload.data() as User;
    //                 this.utils.userInfo.id = res.payload.id;
    //                 this.updateUserDeviceToken();
    //                 return this.utils.userInfo;
    //             })
    //         );
    // }

    // public async getStore(id) {
    //     this.storesCollectionRefrence = this.Afs.collection<Store>('stores');
    //     return this.storesCollectionRefrence.doc(id)
    //         .snapshotChanges().pipe(
    //             map((res: any) => {
    //                 // Since this is a single object only one value will come here
    //                 this.utils.storeInfo = res.payload.data() as Store;
    //                 if (this.utils.storeInfo) {
    //                     this.utils.storeInfo.id = res.payload.id;
    //                 }
    //                 return this.utils.storeInfo;
    //             })
    //         );
    // }

    public async getProducts() {
        this.productsCollectionReference = this.Afs.collection<Products>('products', ref => ref.orderBy('name'));
        return this.productsCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as Products;
                    const id = dataItems.payload.doc.id;
                    const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
                    return { id, units: 0, salePrice: salePrice, ...data };
                }))
            );
    }

    public async getCategoriesHomePage() {
        this.categories = [];
        this.categoriesCollectionReference = this.Afs.collection<Category>('categories', ref => ref.where('home_page', '==', true).orderBy('name'));
        return this.categoriesCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map((dataItems) => {
                    const data = dataItems.payload.doc.data() as Category;
                    const id = dataItems.payload.doc.id;
                    this.categories.push({ id: id, child: [], ...data });
                    return { id, child: [], ...data };
                }))
            );
    }

    public async getProductsAccordingToCategory(category) {
        this.productsCollectionReference = this.Afs.collection<Products>('products', ref => ref.where('categories', 'array-contains', category).orderBy('name'));
        return this.productsCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as Products;
                    const id = dataItems.payload.doc.id;
                    const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
                    const pos = this.categories.map(function (e) { return e.id; }).indexOf(category);
                    if (this.categories[pos].child.map(function (e) { return e.id; }).indexOf(id) === -1) {
                        this.categories[pos].child.push({ id, units: 0, salePrice: salePrice, ...data });
                    }
                    return { id, units: 0, salePrice: salePrice, ...data };
                }))
            );
    }

    public async getProductsAccordingToTags(tag) {
        this.productsCollectionReference = this.Afs.collection<Products>('products', ref => ref.where('tags', '==', tag).orderBy('name'));
        return this.productsCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as Products;
                    const id = dataItems.payload.doc.id;
                    const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
                    return { id, units: 0, salePrice: salePrice, ...data };
                }))
            );
    }

    public async getCategories() {
        this.categories = [];
        this.categoriesCollectionReference = this.Afs.collection<Category>('categories', ref => ref.orderBy('name'));
        return this.categoriesCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data = dataItems.payload.doc.data() as Category;
                    const id = dataItems.payload.doc.id;
                    this.categories.push({ id: id, child: [], ...data });
                    return { id, ...data };
                }))
            );
    }

    public async getOffers() {
        this.offersCollectionReference = this.Afs.collection<Offer>('offers', ref => ref.orderBy('title'));
        return this.offersCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data = dataItems.payload.doc.data() as Offer;
                    const id = dataItems.payload.doc.id;
                    this.promoCodes.push({ id, ...data });
                    return { id, ...data };
                }))
            );
    }

    // Address needs to be added to local storage - we dont save address
    // public async addUserAddress(result) {
    //     await this.utils.openLoader();
    //     this.addressCollectionRefrence = this.Afs.collection('address');
    //     await this.addressCollectionRefrence.add({ ...result, userid: this.utils.userInfo.id });
    //     await this.utils.closeLoading();
    // }

    // public async getUserAddress() {
    //     this.addressCollectionRefrence = this.Afs.collection<Products>('address', ref => ref.where('userid', '==', this.utils.userInfo.id));
    //     return this.addressCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as Products;
    //                 const id = dataItems.payload.doc.id;
    //                 this.UserAddress.push({ id, ...data });
    //                 return { id, ...data };
    //             }))
    //         );
    // }

    // public async getDeliveryAddress(address_id) {
    //     this.addressCollectionRefrence = this.Afs.collection<User>('address');
    //     return this.addressCollectionRefrence.doc(address_id)
    //         .snapshotChanges().pipe(
    //             map((res: any) => {
    //                 const record = res.payload.data() as User;
    //                 return record;
    //             })
    //         );
    // }
    // public async getUserOrders() {
    //     this.ordersCollectionRefrence = this.Afs.collection<Products>('orders', ref => ref.where('customerid', '==', this.utils.userInfo.id));
    //     return this.ordersCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as Products;
    //                 const id = dataItems.payload.doc.id;
    //                 this.UserOrders.push({ id, ...data });
    //                 return { id, ...data };
    //             }))
    //         );
    // }
    // public async getOrdersItem(itemid) {
    //     this.ordersCollectionRefrence = this.Afs.collection<ChatContacts>('orderitems',
    //         ref => ref.where('orderid', '==', itemid));
    //     return this.ordersCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as Products;
    //                 // const id = dataItems.payload.doc.id;
    //                 return { ...data };
    //             }))
    //         );
    // }

    // public async getUserLocalStores() {
    //     this.storesCollectionRefrence = this.Afs.collection('stores', ref => ref.where('city', '==', this.utils.userShoppingCity));
    //     return this.storesCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data();
    //                 const id = dataItems.payload.doc.id;
    //                 this.storesNearBy.push({ id, ...data });
    //                 return { id, ...data };
    //             }))
    //         );
    // }

    // This method is wrong ---
    // public async searchProducts(value) {
    //     this.ordersCollectionRefrence = this.Afs.collection<Products>('products', ref => ref.orderBy('name').startAt(value).endAt(value + '\uf8ff'));
    //     return this.ordersCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as Products;
    //                 const id = dataItems.payload.doc.id;
    //                 const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
    //                 this.UserOrders.push({ id, ...data });
    //                 return { id, ...data };
    //             }))
    //         );
    // }

    // public async getStoreProducts() {
    //     this.utils.storeProducts = [];
    //     this.selectedStoreProductsCollectionRefrence = this.Afs.collection('storeproducts', ref => ref.where('storeid', '==', this.utils.storeInfo.id));
    //     return this.selectedStoreProductsCollectionRefrence
    //         .snapshotChanges().pipe(
    //             map(res => res.map((dataItems) => {
    //                 const data = dataItems.payload.doc.data();
    //                 const id = dataItems.payload.doc.id;
    //                 this.utils.storeProducts.push({ id, ...data });
    //                 return { id, ...data };
    //             }))
    //         );
    // }

    // *****************************************************************************************************************************
    // --------------------------------------------------------------------------------------
    // CREATE CALLS  --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------
    // *****************************************************************************************************************************


    // public async createUser(uniqueId, result) {
    //     this.userCollectionRefrence = this.Afs.collection<User>('users');
    //     await this.utils.openLoader();
    //     await this.userCollectionRefrence.doc(uniqueId).set({ ...result }).then(snapshot => {
    //         this.utils.userInfo = { id: uniqueId, ...result };
    //         console.log(snapshot);
    //     });
    //     await this.utils.closeLoading();
    // }

    // public async createUserOrder(grandTotal, addCart, promoCode, selectedDay, selectedTime, address) {
    //     this.ordersCollectionRefrence = this.Afs.collection('Orders');
    //     await this.utils.openLoader();
    //     if (Object.keys(promoCode).length) {

    //         await this.ordersCollectionRefrence.add({ created_at: new Date(), grandTotal: grandTotal, products: addCart, promoCode, selectedDay, selectedTime, address, userid: this.utils.userInfo.id });
    //     } else {
    //         await this.ordersCollectionRefrence.add({ created_at: new Date(), grandTotal: grandTotal, products: addCart, selectedDay, selectedTime, address, userid: this.utils.userInfo.id });
    //     }
    //     await this.utils.closeLoading();
    // }

    // public async createStore(result) {
    //     this.storesCollectionRefrence = this.Afs.collection<Store>('stores');
    //     await this.utils.openLoader();
    //     await this.storesCollectionRefrence.doc(this.utils.userInfo.id).set({ ...result }).then(snapshot => {
    //         console.log(snapshot);
    //     });
    //     await this.utils.closeLoading();
    //     // TODO -- database trigger to update the user field isSeller: false to true in the user collections
    // }

    // public async updateUser(dataId, result) {
    //     this.userCollectionRefrence = this.Afs.collection<User>('users');
    //     await this.utils.openLoader();
    //     delete result.id;
    //     await this.userCollectionRefrence.doc(dataId).update({ ...result });
    //     await this.utils.closeLoading();
    // }

    // public async getChatUsers(userId) {
    //     this.chatContactsCollectionReference = this.Afs.collection<ChatContacts>('chatcontacts',
    //         ref => ref.where('customerid', '==', userId));
    //     return this.chatContactsCollectionReference
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as ChatContacts;
    //                 const id = dataItems.payload.doc.id;
    //                 return { ...data, chatcontactid: id };
    //             }))
    //         );
    // }

    // public async  addChatContacts(record) {
    //     this.chatContactsCollectionReference = this.Afs.collection('chatcontacts');
    //     await this.chatContactsCollectionReference.add(record);
    // }

    // public async checkChatContacts(storeid) {
    //     const userId = this.utils.userInfo.id;
    //     this.chatContactsCollectionReference = this.Afs.collection<ChatContacts>('chatcontacts',
    //         ref => ref.where('customerid', '==', userId).where('sellerid', '==', storeid));
    //     return this.chatContactsCollectionReference
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as ChatContacts;
    //                 const id = dataItems.payload.doc.id;
    //                 return { ...data, chatcontactid: id };
    //             }))
    //         );
    // }

    // public async updateUserDeviceToken() {
    //     const deviceId = localStorage.getItem('deviceid');
    //     const userId = this.utils.userInfo.id;
    //     if (deviceId && userId) {
    //         this.userCollectionRefrence = this.Afs.collection<User>('users');
    //         await this.userCollectionRefrence.doc(userId).update({ token: deviceId });
    //     }
    // }

    // public async addChatUsers(record) {
    //     this.chatContactsCollectionReference = this.Afs.collection('chatcontacts');
    //     return await this.chatContactsCollectionReference.add(record);
    // }


    // public async getChatMessages(chatcontactid) {
    //     this.chatContactsCollectionReference = this.Afs.collection<ChatContacts>('chatmessages',
    //         ref => ref.where('chatcontactid', '==', chatcontactid));
    //     return this.chatContactsCollectionReference
    //         .snapshotChanges().pipe(
    //             map(res => res.map(dataItems => {
    //                 const data: any = dataItems.payload.doc.data() as ChatContacts;
    //                 // const id = dataItems.payload.doc.id;
    //                 return { ...data };
    //             }))
    //         );
    // }

    // public async addTextMessage(record) {
    //     this.chatContactsCollectionReference = this.Afs.collection('chatmessages');
    //     await this.chatContactsCollectionReference.add(record);
    // }

    // public async addChatMessage(record, userId) {
    //     record.senderid = userId;
    //     record.messagetime = new Date().getTime();
    //     record.readby = [userId];

    //     this.chatContactsCollectionReference = this.Afs.collection('chatmessages');

    //     await this.chatContactsCollectionReference.add(record);
    //     this.chatContactsCollectionReference = this.Afs.collection<ChatContacts>('chatcontacts');
    //     await this.chatContactsCollectionReference.doc(record.chatcontactid).update({ lastmessage: record.message, lastmessagetime: record.messagetime });
    // }

    // public async addChatPushMessage(record) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.addEventListener('readystatechange', function () {
    //         if (this.readyState === 4) {
    //             console.log(this.responseText);
    //         }
    //     });
    //     xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify(record));
    // }

    // public async sendNotificaion(record) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.addEventListener('readystatechange', function () {
    //         if (this.readyState === 4) {
    //             console.log(this.responseText);
    //         }
    //     });
    //     xhr.open('POST', 'https://us-central1-bansik-7c7c4.cloudfunctions.net/function-1');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify(record));
    // }

    // public async getUserInfo(userId) {
    //     this.userCollectionRefrence = this.Afs.collection<User>('users');
    //     return this.userCollectionRefrence.doc(userId)
    //         .snapshotChanges().pipe(
    //             map((res: any) => {
    //                 // Since this is a single object only one value will come here
    //                 const record = res.payload.data() as User;
    //                 return record;
    //             })
    //         );
    // }

    // public async loadChatContactDetails(chatcontactid) {
    //     this.chatCollectionRefrence = this.Afs.collection<ChatContacts>('chatcontacts');
    //     return this.chatCollectionRefrence.doc(chatcontactid)
    //         .snapshotChanges().pipe(
    //             map((res: any) => {
    //                 // Since this is a single object only one value will come here
    //                 const record = res.payload.data() as ChatContacts;
    //                 return record;
    //             })
    //         );
    // }

    // public async addOrder(record) {
    //     this.ordersCollectionRefrence = this.Afs.collection('orders');
    //     return await this.ordersCollectionRefrence.add(record).then((doc) => {
    //         return doc.id;
    //     });
    // }

    // public async  addOrderItem(record) {
    //     this.ordersItemCollectionRefrence = this.Afs.collection('orderitems');
    //     return await this.ordersItemCollectionRefrence.add(record);
    // }

}

export interface Products {
    name: string;
    rate: string;
    description: string;
    offer: string;
    instruction: string;
    pin: number;
    images: [];
    id?: string;
}
export interface Category {
    name: string;
    description: string;
    images: [];
    id?: string;
}


export interface Offer {
    title: string;
    description: string;
    condition: string;
    id?: string;
}

export interface User {
    email: string;
    id: string;
    username: string;
}

export interface Store {
    city: string;
    iscredit: boolean;
    iscurbsidepickup: boolean;
    isdelivery: boolean;
    ispayonpickup: boolean;
    name: string;
    state: string;
    streetaddress: string;
    zipcode: number;
    categories: any;
    categoriescount: number;
    productscount: number;
}


export interface ChatContacts {
    sellerid: string;
    sellerame: string;
    sellerimage: string;
    customerid: string;
    customername: string;
    customerimage: string;
    lastmessage: string;
}

export interface ChatMessages {
    chatcontactid: string;
    senderid: string;
    message: string;
    messagetime: string;
    readby: any;
}


export interface ChatNotificaions {
    title: string;
    body: string;
    token: string;
    targetid: string;
}

export interface Order {
    storeid: string;
    storename: string;
    customerid: string;
    customername: string;
    total: string;
    status: string;  // vlaue will be New when added first
    transaction: any; // it is an array of object which contains these values { status , comment , time , username }
    delivery_mode: string; // it can be value from in three three option - deliver, pick_up , curve_site
    payment_mode: string; // it can be value of it =  online , cash_on_dlivery , pay_at_store
    address_value: string;
    created_date: String;
}


export interface OrderItem {
    orderid: string;
    itemid: string;
    itenname: string;
    itemimage: string;
    quantity: number;
    amount: number;
}
