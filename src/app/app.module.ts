import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserAccPage } from '../pages/user-acc/user-acc';
import { MyordersPage } from '../pages/myorders/myorders'
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { ServicePage } from '../pages/service/service';
import { ServicesService } from '../services/services.service';
import { ServiceService } from '../services/service.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserAccPage,
    MyordersPage,
    ServicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserAccPage,
    MyordersPage,
    ServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    OrdersService,
    ServicesService,
    ServiceService
  ]
})
export class AppModule {}
