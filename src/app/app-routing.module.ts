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
import { Routes, RouterModule } from '@angular/router';
import { GuardsService } from './guards/guards.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [GuardsService]
  },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule) },
  { path: 'need-help', loadChildren: () => import('./need-help/need-help.module').then(m => m.NeedHelpPageModule) },
  { path: 'issue', loadChildren: () => import('./issue/issue.module').then(m => m.IssuePageModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule) },
  { path: 'product-list', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListPageModule) },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule) },
  { path: 'rate-us', loadChildren: () => import('./rate-us/rate-us.module').then(m => m.RateUsPageModule) },
  { path: 'view-product', loadChildren: () => import('./view-product/view-product.module').then(m => m.ViewProductPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'otp', loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule) },
  { path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule) },
  { path: 'view-category-product', loadChildren: () => import('./view-category-product/view-category-product.module').then(m => m.ViewCategoryProductPageModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule) },
  { path: 'add-address', loadChildren: () => import('./add-address/add-address.module').then(m => m.AddAddressPageModule) },
  { path: 'create-store', loadChildren: () => import('./create-store/create-store.module').then(m => m.CreateStorePageModule) },
  { path: 'delivery', loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryPageModule) },
  { path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule) },
  { path: 'my-account', loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountPageModule) },
  { path: 'my-card', loadChildren: () => import('./my-card/my-card.module').then(m => m.MyCardPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
