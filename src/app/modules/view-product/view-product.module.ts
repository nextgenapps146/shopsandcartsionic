import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewProductPage } from './view-product.page';
import { ReviewComponent } from '../../components/review/review.component';
import { CheckDeliveryComponent } from '../../components/check-delivery/check-delivery.component';
import { SimilarProductComponent } from '../../components/similar-product/similar-product.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewProductPage, ReviewComponent, CheckDeliveryComponent, SimilarProductComponent]
})
export class ViewProductPageModule {}
