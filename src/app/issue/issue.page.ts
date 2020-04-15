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
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.page.html',
  styleUrls: ['./issue.page.scss'],
})
export class IssuePage implements OnInit {
 public questions;
 public title;
 public que = [];
 public ans = [];
  constructor(
    private modalController: ModalController,
    private params: NavParams
    ) {

      this.questions = params.get('value');
      this.title = params.get('title');
      for (const i of this.questions) {
        this.que.push(Object.keys(i));
        this.ans.push(Object.values(i));
      }
    }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
