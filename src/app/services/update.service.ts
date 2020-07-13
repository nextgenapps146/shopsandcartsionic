// import { Injectable } from '@angular/core';
// import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
// import { map } from 'rxjs/operators';
// import { UtilsService } from './utils.service';
// import * as firebase from 'firebase';

// @Injectable({
//     providedIn: 'root'
// })

// export class UpdateService {

//     productsRef: AngularFirestoreCollection<Products>;
//     categoryRef: AngularFirestoreCollection<Category>;
//     offerRef: AngularFirestoreCollection<Offer>;
//     storeCategoriesRef: AngularFirestoreCollection<StoreCategories>;
//     storeProductsRef: AngularFirestoreCollection<StoreProducts>;

//     tableName: AngularFirestoreCollection;

//     constructor(
//         public Afs: AngularFirestore,
//         public utils: UtilsService
//         ) {
//             this.productsRef = this.Afs.collection<Products>('products');
//             this.categoryRef = this.Afs.collection<Category>('categories');
//             this.offerRef = this.Afs.collection<Offer>('offers');
//             this.storeProductsRef = this.Afs.collection<StoreProducts>('storeproducts');
//             this.storeCategoriesRef = this.Afs.collection<StoreCategories>('storecategories');
//         }

//     async uploadItems(result) {
//         this.tableName = this.getTableRef();
//         if (this.tableName) {
//             this.utils.loadingData('Updating .....');
//             await this.tableName.add({ ...result });
//             this.utils.dismissLoader();
//             this.utils.dismissModal();
//             this.utils.presentToast('Successfully Added Item');
//         } else {
//             this.utils.error('danger', 'updateService: uploadItems');
//         }
//     }

//     async updateItems(result, dataId) {
//         this.tableName = this.getTableRef();
//         if (this.tableName) {
//             this.utils.loadingData('Updating .....');
//             await this.tableName.doc(dataId).update({ ...result });
//             this.utils.dismissLoader();
//             this.utils.dismissModal();
//             this.utils.presentToast('Successfully Uploaded Item');
//         } else {
//             this.utils.error('danger', 'updateService: updateItems');
//         }
//     }

//     async uploadImageToStorage(imageFile) {
//         return new Promise((resolve, reject) => {
//             const newName = `${new Date().getTime()}`;
//             firebase.storage().ref().child(`myupload/${newName}`).put(imageFile).then(snapshot => {
//                 snapshot.ref.getDownloadURL().then(url => {
//                     resolve(url);
//                 });
//             });
//         });
//     }

//     deleteProduct(product) {
//         this.utils.removeConform().then((data) => {
//             if (data === 'ok') {
//                 this.tableName = this.getTableRef();
//                 if (this.tableName) {
//                     this.tableName.doc(product.id).delete();
//                 } else {
//                     this.utils.error('danger', 'updateService: deleteProduct');
//                 }
//             }
//         });
//     }

//     getTableRef() {
//         let tableRef: any = '';
//         if (this.utils.workingTable === 'product') {
//             tableRef = this.productsRef;
//         } else if (this.utils.workingTable === 'store-product') {
//             tableRef = this.storeProductsRef;
//         } else if (this.utils.workingTable === 'category') {
//             tableRef = this.categoryRef;
//         } else if (this.utils.workingTable === 'store-category') {
//             tableRef = this.storeCategoriesRef;
//         } else if (this.utils.workingTable === 'offers') {
//             tableRef = this.offerRef;
//         }
//         return tableRef;
//     }
// }


// export interface Products {
//     name: string;
//     rate: string;
//     description: string;
//     offer: string;
//     instruction: string;
//     pin: number;
//     images: [];
//     id?: string;
// }

// export interface Category {
//     name: string;
//     description: string;
//     images: [];
//     id?: string;
// }

// export interface Offer {
//     title: string;
//     description: string;
//     condition: string;
//     id?: string;
// }

// export interface StoreCategories {
//     id?: string; // primary doc id
//     categoryid: string;
//     sellerid: string;
//     categoryname: string;
//     percentageoff: number;
// }

// export interface StoreProducts {
//     sellerid: string; // primary doc id
//     productid: string;
// }
