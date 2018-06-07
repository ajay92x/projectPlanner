import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/*import {
    HTTP
} from '@ionic-native/http';*/
import {
    Geolocation
} from '@ionic-native/geolocation';
import {
    AppRate
} from '@ionic-native/app-rate';
import {
    AppVersion
} from '@ionic-native/app-version';
import {
    Camera,
    CameraOptions
} from '@ionic-native/camera';
import {
    CardIO
} from '@ionic-native/card-io';
import {
    DatePicker
} from '@ionic-native/date-picker';
import {
    Device
} from '@ionic-native/device';
import {
    Dialogs
} from '@ionic-native/dialogs';
import {
    FCM
} from '@ionic-native/fcm';
import {
    FingerprintAIO
} from '@ionic-native/fingerprint-aio';
import {
    GoogleAnalytics
} from '@ionic-native/google-analytics';
import {
    Network
} from '@ionic-native/network';
import {
    SpinnerDialog
} from '@ionic-native/spinner-dialog';
import {
    Toast
} from '@ionic-native/toast';

import {commonOperation} from '../providers/operations';
import {commonConstants} from '../providers/constants';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    commonOperation,
    commonConstants,
    StatusBar,
    SplashScreen,
//    HTTP,
    Geolocation,
    AppRate,
    AppVersion,
    Camera,
    CardIO,
    DatePicker,
    Device,
    Dialogs,
    FCM,
    FingerprintAIO,
    GoogleAnalytics,
    SpinnerDialog,
    Network,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
