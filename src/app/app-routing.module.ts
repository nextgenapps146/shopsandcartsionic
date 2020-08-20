import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsService } from './services/guards.service';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule),
        // canActivate: [GuardsService]
    },
    { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsPageModule) },
    { path: 'need-help', loadChildren: () => import('./modules/need-help/need-help.module').then(m => m.NeedHelpPageModule) },
    { path: 'issue', loadChildren: () => import('./modules/issue/issue.module').then(m => m.IssuePageModule) },
    { path: 'search', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchPageModule) },
    { path: 'product-list', loadChildren: () => import('./modules/product-list/product-list.module').then(m => m.ProductListPageModule) },
    { path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesPageModule) },
    { path: 'rate-us', loadChildren: () => import('./modules/rate-us/rate-us.module').then(m => m.RateUsPageModule) },
    { path: 'view-product', loadChildren: () => import('./modules/view-product/view-product.module').then(m => m.ViewProductPageModule) },
    { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule) },
    { path: 'otp', loadChildren: () => import('./modules/otp/otp.module').then(m => m.OtpPageModule) },
    { path: 'offers', loadChildren: () => import('./modules/offers/offers.module').then(m => m.OffersPageModule) },
    { path: 'view-category-product', loadChildren: () => import('./modules/view-category-product/view-category-product.module').then(m => m.ViewCategoryProductPageModule) },
    { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderPageModule) },
    { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartPageModule) },
    { path: 'add-address', loadChildren: () => import('./modules/add-address/add-address.module').then(m => m.AddAddressPageModule) },

    // { path: 'create-store', loadChildren: () => import('./modules/create-store/create-store.module').then(m => m.CreateStorePageModule) },
    { path: 'delivery', loadChildren: () => import('./modules/delivery/delivery.module').then(m => m.DeliveryPageModule) },
    { path: 'location', loadChildren: () => import('./modules/location/location.module').then(m => m.LocationPageModule) },
    { path: 'payment', loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentPageModule) },
    { path: 'my-account', loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountPageModule) },
    { path: 'my-card', loadChildren: () => import('./modules/my-card/my-card.module').then(m => m.MyCardPageModule) },
    { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupPageModule) },
    { path: 'confirm-email', loadChildren: () => import('./modules/confirm-email/confirm-email.module').then(m => m.ConfirmEmailPageModule)},
    {
        path: 'store',
        loadChildren: () => import('./modules/store/store.module').then(m => m.StorePageModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatPageModule)
    },
    {
        path: 'chatroom',
        loadChildren: () => import('./modules/chatroom/chatroom.module').then(m => m.ChatroomPageModule)
    },
    {
        path: 'order-items',
        loadChildren: () => import('./modules/order-items/order-items.module').then(m => m.OrderItemsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
