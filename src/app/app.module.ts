import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LocalStorageService } from 'angular-2-local-storage';

// services
import { AuthService } from './Services/AuthService';
import { GuardService } from './Services/GuardService';
import { HttpsService } from './Services/HttpsService';
import { StockService } from './Services/StockService';
import { UserService } from './Services/UserService';


// components
import { MyApp } from './app.component';
import { FeedComponent } from './Components/Feed/FeedComponent';
import { AuthComponent } from './Components/Auth/AuthComponent';
import { SearchComponent } from './Components/Search/SearchComponent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedComponent,
    AuthComponent,
    SearchComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedComponent,
    AuthComponent,
    SearchComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    AuthService,
    GuardService,
    HttpsService,
    StockService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
