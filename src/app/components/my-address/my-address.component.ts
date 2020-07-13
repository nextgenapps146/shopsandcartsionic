import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/DataServices/data.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss'],
})
export class MyAddressComponent implements OnInit {
  address;
  constructor(
    public dataService: DataService,
    public route: Router, private fsSevices: FirestoreService) {
    this.fsSevices.getUserAddress().then((data) => {
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
