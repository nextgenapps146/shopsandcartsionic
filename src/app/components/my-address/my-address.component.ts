import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataServices/data.service';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'my-address',
    templateUrl: './my-address.component.html',
    styleUrls: ['./my-address.component.scss'],
})
export class MyAddressComponent implements OnInit {

    address;

    constructor(
        public dataService: DataService,
        public route: Router,
        private addressService: AddressService) {
        this.addressService.getUserAddress().then((data) => {
            this.address = data;
        });
    }

    ngOnInit() { }

    addAddress() {
        this.route.navigate(['add-address']);
    }
    ionViewDidEnter() {

    }

}
