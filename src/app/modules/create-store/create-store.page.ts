import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../../services/utils.service';
import { StoreService } from '../../services/store.service';
import { LocationPage } from '../location/location.page';

@Component({
    selector: 'app-create-store',
    templateUrl: './create-store.page.html',
    styleUrls: ['./create-store.page.scss'],
})

export class CreateStorePage implements OnInit {

    myStoreInfo: any;
    storeModel: any;
    operation: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public utils: UtilsService,
        private storeService: StoreService,
        private modalController: ModalController
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.operation = params && params.operation ? params.operation : 'update';
            this.myStoreInfo = this.utils.myStore && this.utils.myStore.info || {};
            this.storeModel = Object.assign({}, this.myStoreInfo);
        });
    }

    async addressChange() {
        const modal = await this.modalController.create({
            component: LocationPage
        });
        modal.onDidDismiss().then((res) => {
            if (res.data) {
                this.addAddress(res.data);
            }
        });
        return await modal.present();
    }

    addAddress(address) {
        this.storeModel.streetaddress = address.streetaddress;
        this.storeModel.city = address.city;
        this.storeModel.state = address.state;
        this.storeModel.zipcode = address.zipcode;
        this.storeModel.additionaladdress = address.additionaladdress;
    }

    async Continue() {
        if (this.storeModel) {
            const p = this.getStoreParams();
            if (p.type && p.bizcat && p.name && p.streetaddress && p.city && p.state && p.zipcode) {
                if (this.operation === 'create') {
                    this.createStore(p);
                } else {
                    this.updateStore(p);
                }
            } else {
                this.utils.presentToast('All fields are required here');
            }
        }
    }

    createStore(params) {
        this.storeService.createStore(this.utils.userInfo.id, params).then(async () => {
            this.utils.presentToast('Added New Store Successfully');
            localStorage.setItem(this.utils.userInfo.id + 'store', JSON.stringify(this.storeModel));
            this.router.navigate(['my-store']);
        }).catch(err => console.log(err));
    }

    updateStore(params) {
        const changedParams = this.getChangedParams(params);
        if (Object.keys(changedParams).length > 0) {
            this.storeService.updateStore(this.utils.userInfo.id, changedParams).then(async () => {
                this.utils.presentToast('Added New Store Successfully');
                localStorage.setItem(this.utils.userInfo.id + 'store', JSON.stringify(this.myStoreInfo));
                this.router.navigate(['my-store']);
            }).catch(err => console.log(err));
        } else {
            this.router.navigate(['my-store']);
        }
    }

    getStoreParams() {
        const si = this.storeModel;
        return {
            name: si.name,
            streetaddress: si.streetaddress,
            city: si.city,
            state: si.state,
            zipcode: si.zipcode,
            iscurbsidepickup: si.iscurbsidepickup || false,
            isdelivery: si.isdelivery || false,
            iscredit: si.iscredit || false,
            ispayonline: si.ispayonline || false,
            categoriescount: 0,
            productscount: 0,
            type: si.type,
            bizcat: si.bizcat,
            image: si.image
        };
    }

    getChangedParams(params) {
        const objKeys = Object.keys(params);
        objKeys.forEach(key => {
            if (params[key] === this.myStoreInfo[key]) {
                delete params[key];
            } else {
                this.myStoreInfo[key] = params[key];
            }
        });
        delete params.id; // only for update
        return params;
    }
}
