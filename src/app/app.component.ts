import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// services
import { GuardService } from './Services/GuardService';

// components
import AuthComponent from './Components/Auth/AuthComponent';

// routes
import { AppRoutes } from './Routes/Routes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AuthComponent;

  pages: Array<{title: string, component: any, isGuarded: boolean }> = AppRoutes;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public guardService: GuardService) {
    this.initializeApp();
  }

  public isAuthenticated(): boolean
  {
    return this.guardService.isAuthenticated();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
