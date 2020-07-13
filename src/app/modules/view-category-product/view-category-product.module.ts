import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewCategoryProductPage } from './view-category-product.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoryProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewCategoryProductPage]
})
export class ViewCategoryProductPageModule {}
