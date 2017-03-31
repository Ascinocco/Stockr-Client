import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpModule } from '@angular/http';

// services
import { AuthService } from './Services/AuthService';
import { GuardService } from './Services/GuardService';
import { HttpService } from './Services/HttpService';
import { StockService } from './Services/StockService';
import { UserService } from './Services/UserService';


// components
import { MyApp } from './app.component';
import { FeedComponent } from './Components/Feed/FeedComponent';
import { AuthComponent } from './Components/Auth/AuthComponent';
import { SearchComponent } from './Components/Search/SearchComponent';
import { SettingsComponent } from './Components/Settings/SettingsComponent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedComponent,
    AuthComponent,
    SearchComponent,
    SettingsComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    LocalStorageModule.withConfig({ prefix: 'todo-it', storageType: 'localStorage' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedComponent,
    AuthComponent,
    SearchComponent,
    SettingsComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    GuardService,
    HttpService,
    StockService,
    UserService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
