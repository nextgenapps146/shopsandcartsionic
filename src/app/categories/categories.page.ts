/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categoryItems;

  constructor(
    public http: HttpClient,
    private route: Router,
    public fsServices: FirestoreService
  ) {
    this.fsServices.getCategories().then((data) => {
      this.categoryItems = data;
    });
  }

  ngOnInit() {
  }

  goToProducts(category) {
    this.route.navigate(['view-category-product', { categoryName: category.name, categoryId: category.id }]);

  }
}
