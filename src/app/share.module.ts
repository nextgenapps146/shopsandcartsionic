/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */

import { CommonModule,  } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordianComponent } from './components/accordian/accordian.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [AccordianComponent],
    exports: [AccordianComponent],

})
export class SharedModule { }
