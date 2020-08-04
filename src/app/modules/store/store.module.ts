import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StorePage } from './store.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        FormsModule,
        IonicModule,
        FontAwesomeModule,
        StorePageRoutingModule
    ],
    declarations: [StorePage]
})
export class StorePageModule { }
