import { DramComponent } from './../components/dram/dram';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { FinishPage } from '../pages/finish/finish';
import { WheelPage } from './../pages/wheel/wheel';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NosePage } from '../pages/nose/nose';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyCnAcJcXyyzReuBsKLzeKNTHsITKnYO3uk",
  authDomain: "dramwhiskey-2017-10-31.firebaseapp.com",
  databaseURL: "https://dramwhiskey-2017-10-31.firebaseio.com",
  projectId: "dramwhiskey-2017-10-31",
  storageBucket: "dramwhiskey-2017-10-31.appspot.com",
  messagingSenderId: "944324968688"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NosePage,
    FinishPage,
    HomePage,
    TabsPage,
    DramComponent,
    WheelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    NosePage,
    AboutPage,
    FinishPage,
    HomePage,
    TabsPage,
    WheelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
