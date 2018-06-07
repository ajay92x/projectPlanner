import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { commonOperation } from '../providers/operations';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

    statusbarColor = '#37a3e7';
    googleTrackerIdVr = "UA-120277103-1";
    
  constructor(private platform: Platform, private splashScreen: SplashScreen, public cop: commonOperation) {
    if (this.platform.is('cordova')) {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.cop.statusbarBgChangeFn(this.statusbarColor);
            this.splashScreen.hide();

            this.cop.watchNetworkConnectFn();
            /*this.cop.getFCMTokenFn();
            this.cop.onFCMNotificationReceivedFn();
            this.cop.onFCMTokenRefreshFn();*/

//            this.cop.googleAnalyticsFn(this.googleTrackerIdVr);
        });
    }
  }
}

