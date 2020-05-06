import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { UtilsServiceService } from '../Utils/utils-service.service';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    chatMessagesCollectionReference: AngularFirestoreCollection<ChatMessages>;
    chatContactsCollectionReference: AngularFirestoreCollection<ChatContacts>;
    productsCollectionReference: AngularFirestoreCollection<Products>;
    categoriesCollectionReference: AngularFirestoreCollection<Category>;
    offersCollectionReference: AngularFirestoreCollection<Offer>;
    userCollectionRefrence: AngularFirestoreCollection<User>;
    addressCollectionRefrence: AngularFirestoreCollection;
    storesCollectionRefrence: AngularFirestoreCollection<Store>;
    ordersCollectionRefrence: AngularFirestoreCollection;
    categories: any = [];
    promoCodes: any = [];
    UserAddress: any = [];
    UserOrders: any = [];
    recentSearches: any = [];
    storesNearBy: any = [];
    constructor(private utils: UtilsServiceService, public Afs: AngularFirestore) { }


    // *****************************************************************************************************************************
    // --------------------------------------------------------------------------------------
    // GET CALLS  --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------
    // *****************************************************************************************************************************


    public async getCurrentUserInfo(userId) {
        // TO DO --
        // when you dont find any record create a record --
        const _self = this;
        this.userCollectionRefrence = this.Afs.collection<User>('users', ref => ref.where('id', '==', userId).orderBy('username'));
        return this.userCollectionRefrence
            .snapshotChanges().pipe(
                map((res: any) => {
                    res.map(dataItems => {
                        const data = dataItems.payload.doc.data() as User;
                        // const id = dataItems.payload.doc.id;
                        debugger;
                        _self.utils.userInfo = { ...data };
                        return { ...data };
                    });
                })
            );
    }

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

    public async getUserAddress() {
        this.addressCollectionRefrence = this.Afs.collection<Products>('Address', ref => ref.where('userid', '==', this.utils.userInfo.id).orderBy('locality'));
        return this.addressCollectionRefrence
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as Products;
                    const id = dataItems.payload.doc.id;
                    this.UserAddress.push({ id, ...data });
                    return { id, ...data };
                }))
            );
    }
    public async getUserOrders() {
        this.ordersCollectionRefrence = this.Afs.collection<Products>('Orders', ref => ref.where('userid', '==', this.utils.userInfo.id).orderBy('selectedTime'));
        return this.ordersCollectionRefrence
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as Products;
                    const id = dataItems.payload.doc.id;
                    this.UserOrders.push({ id, ...data });
                    return { id, ...data };
                }))
            );
    }

    public async getUserLocalStores(city) {
        this.storesCollectionRefrence = this.Afs.collection('stores', ref => ref.where('city', '==', city));
        return this.storesCollectionRefrence
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data();
                    const id = dataItems.payload.doc.id;
                    this.storesNearBy.push({ id, ...data });
                    return { id, ...data };
                }))
            );
    }

    public async searchProducts(value) {
        this.ordersCollectionRefrence = this.Afs.collection<Products>('products', ref => ref.orderBy('name').startAt(value).endAt(value + '\uf8ff'));
        return this.ordersCollectionRefrence
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as Products;
                    const id = dataItems.payload.doc.id;
                    const salePrice = data.regularPrice - ((data.regularPrice * data.offer) / 100);
                    this.UserOrders.push({ id, ...data });
                    return { id, ...data };
                }))
            );
    }

    // *****************************************************************************************************************************
    // --------------------------------------------------------------------------------------
    // CREATE CALLS  --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------
    // *****************************************************************************************************************************


    public async createUser(uniqueId, result) {
        this.userCollectionRefrence = this.Afs.collection<User>('users');
        await this.utils.openLoader();
        await this.userCollectionRefrence.add({ ...result });
        await this.storesCollectionRefrence.doc(uniqueId).set({ ...result }).then(snapshot => {
            this.utils.userInfo = { id: uniqueId, ...result };
            console.log(snapshot);
        });
        await this.utils.closeLoading();
    }

    public async createUserOrder(grandTotal, addCart, promoCode, selectedDay, selectedTime, address) {
        this.ordersCollectionRefrence = this.Afs.collection('Orders');
        await this.utils.openLoader();
        if (Object.keys(promoCode).length) {

            await this.ordersCollectionRefrence.add({ created_at: new Date(), grandTotal: grandTotal, products: addCart, promoCode, selectedDay, selectedTime, address, userid: this.utils.userInfo.id });
        } else {
            await this.ordersCollectionRefrence.add({ created_at: new Date(), grandTotal: grandTotal, products: addCart, selectedDay, selectedTime, address, userid: this.utils.userInfo.id });
        }
        await this.utils.closeLoading();
    }

    public async createStore(result) {
        this.storesCollectionRefrence = this.Afs.collection<Store>('stores');
        await this.utils.openLoader();
        await this.storesCollectionRefrence.doc(this.utils.userInfo.id).set({ ...result }).then(snapshot => {
            console.log(snapshot);
        });
        await this.utils.closeLoading();
        // TODO -- database trigger to update the user field isSeller: false to true in the user collections
    }

    public async addUserAddress(result) {
        this.addressCollectionRefrence = this.Afs.collection('Address');
        await this.utils.openLoader();
        await this.addressCollectionRefrence.add({ ...result, userid: this.utils.userInfo.id });
        await this.utils.closeLoading();
    }

    public async updateUser(dataId, result) {
        this.userCollectionRefrence = this.Afs.collection<User>('users');
        await this.utils.openLoader();
        delete result.id;
        await this.userCollectionRefrence.doc(dataId).update({ ...result });
        await this.utils.closeLoading();
    }

    public async getChatUsers(userId) {
        this.chatContactsCollectionReference = this.Afs.collection<ChatContacts>('chatcontacts',
         ref => ref.where('customerid', '==', userId));
        return this.chatContactsCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as ChatContacts;
                    const id = dataItems.payload.doc.id;
                    return {...data , chatcontactid: id};
                }))
            );
    }

    public async addChatUsers(record) {
        this.addressCollectionRefrence = this.Afs.collection('chatcontacts');
        //await this.utils.openLoader();
        await this.addressCollectionRefrence.add(record);
        //await this.utils.closeLoading();
    }

    
    public async getChatMessages(chatcontactid) {
        this.chatContactsCollectionReference = this.Afs.collection<ChatContacts>('chatmessages',
         ref => ref.where('chatcontactid', '==', chatcontactid));
        return this.chatContactsCollectionReference
            .snapshotChanges().pipe(
                map(res => res.map(dataItems => {
                    const data: any = dataItems.payload.doc.data() as ChatContacts;
                    // const id = dataItems.payload.doc.id;
                    return {...data };
                }))
            );
    }

    public async addChatMessage(record, userId) {

        record.senderid = userId;
        record.messagetime = new Date().getTime();
        record.readby  = [userId];

        this.addressCollectionRefrence = this.Afs.collection('chatmessages');
        //await this.utils.openLoader();
        await this.addressCollectionRefrence.add(record);
        //await this.utils.closeLoading();
    }
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
    custoemername: string;
    custoemerimage: string;
    lastmessage: string;
}

export interface ChatMessages {
    chatcontactid: string;
    senderid: string;
    message: string;
    messagetime: string;
    readby: any;
}