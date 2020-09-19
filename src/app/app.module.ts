import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { IssuePage } from './modules/issue/issue.page';
// import { SearchPage } from './modules/search/search.page';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AccordianComponent } from './components/accordian/accordian.component';
// import { RateUsPage } from './modules/rate-us/rate-us.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FirestoreService } from './services/firestore/firestore.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ComponentsModule } from './components/components.module';
import { SelectLocationComponent } from './components/select-location/select-location.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [
        SelectLocationComponent,
        LoginComponent
    ],
    imports: [
        ComponentsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        IonicModule.forRoot(),
        FontAwesomeModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports: [],
    providers: [
        FirebaseX,
        FCM,
        StatusBar,
        SplashScreen,
        Geolocation,
        NativeGeocoder,
        SocialSharing,
        FirestoreService,
        UserService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
