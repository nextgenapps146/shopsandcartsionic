/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePage } from './home.page';
import { TopSaversComponent } from '../components/top-savers/top-savers.component';
import { BestOffersComponent } from '../components/best-offers/best-offers.component';
import { PopularDealsComponent } from '../components/popular-deals/popular-deals.component';
import { ShortOffersComponent } from '../components/short-offers/short-offers.component';
import { AccordianComponent } from '../components/accordian/accordian.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { SharedModule } from '../share.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        FontAwesomeModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [
        HomePage,
        TopSaversComponent,
        BestOffersComponent,
        PopularDealsComponent,
        ShortOffersComponent
    ]
})
export class HomePageModule { }
