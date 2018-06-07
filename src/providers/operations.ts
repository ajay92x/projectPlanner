//import {HTTP} from '@ionic-native/http';
import {
    Geolocation
} from '@ionic-native/geolocation';
import {
    Platform
} from 'ionic-angular';
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
    StatusBar
} from '@ionic-native/status-bar';
import {
    Toast
} from '@ionic-native/toast';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable()
export class commonOperation {

    watchNetworkChangeVr;
    watchLocationChangeVr;
    deviceLatitudeVr;
    deviceLongitudeVr;

    constructor(private http: HttpClient, private platform: Platform, private geolocation: Geolocation, private appVersion: AppVersion, private camera: Camera, private cardIO: CardIO, private datePicker: DatePicker, private device: Device, private dialogs: Dialogs, private fcm: FCM, private faio: FingerprintAIO, private ga: GoogleAnalytics, private network: Network, private spinnerDialog: SpinnerDialog, private statusBar: StatusBar, private toast: Toast) {

        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {});
        }

    }
    
    log(data){
        console.trace(JSON.stringify(data));
    }

    httpErrorHandle(data){
        
    }
    //$ npm install --save @ionic-native/http
    /**
     * POST API Call.
     */
    httpPostFn(api, creds) {
//        this.showLoaderFn("", "");
        return new Promise((resolve, reject) => {
            this.http.post(api, creds, {}).subscribe(res => {
//                this.hideLoaderFn();
                resolve(res);
                this.log("SUCCESS:"+ JSON.stringify(res));
            }, (error) => {
                this.hideLoaderFn();
                reject(error);
                this.log("ERROR:"+ JSON.stringify(error));
                this.httpErrorHandle(error);
            });
        });
        
    }

    /**
     * GET API Call.
     */
    httpGetFn(api) {
        this.showLoaderFn("", "");
        return new Promise((resolve, reject) => {
            this.http.get(api, {}).subscribe(res => {
                this.hideLoaderFn();
                resolve(res);
                this.log("SUCCESS:"+ JSON.stringify(res));
            }, (error) => {
                this.hideLoaderFn();
                reject(error);
                this.log("ERROR:"+ JSON.stringify(error));
                this.httpErrorHandle(error);
            });
        });
    }

    /**
     * Upload file API Call.
     */
   /* httpUploadFileFn(api, creds, filePath, name) {
        return new Promise((resolve, reject) => {
            this.http.uploadFile(api, creds, {}, filePath, name).then(res => {
                resolve(res);
                this.log("SUCCESS:"+ JSON.stringify(res));
            }, (error) => {
                reject(error);
                this.log("ERROR:"+ JSON.stringify(error));
                this.httpErrorHandle(error);
            });
        });
    }*/

    //$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
    //$ npm install --save @ionic-native/geolocation
    /**
     * Get current position of your device.
     */
    getCurrentPositionFn() {
        var position;
        this.geolocation.getCurrentPosition().then(pos => {
            position = pos;
            this.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            this.deviceLatitudeVr = pos.coords.latitude;
            this.deviceLongitudeVr = pos.coords.longitude;
        });
    }

    /**
     *  Watch position change of your device.
     */
    watchPositionChangeFn() {
        this.watchLocationChangeVr = this.geolocation.watchPosition().subscribe(pos => {
            this.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });
    }

    /**
     * Stop watching position change. 
     */
    stopWatchingPositionChangeFn() {
        this.watchLocationChangeVr.unsubscribe();
    }

    //$ ionic cordova plugin add cordova-plugin-app-version
    //$ npm install --save @ionic-native/app-version
    /**
     * Get application details (app name, package name, app version)
     */
    getApplicationDetailFn() {
        let appName = this.appVersion.getAppName(),
            packageName = this.appVersion.getPackageName(),
            appVersion = this.appVersion.getVersionNumber();

        this.log(appName +","+packageName +","+appVersion);
    }

    //$ ionic cordova plugin add cordova-plugin-device
    //$ npm install --save @ionic-native/device
    /**
     * Get device details.
     */
    getDeviceDetailsFn() {
        let codovaVersion = this.device.cordova,
            modelName = this.device.model,
            platformName = this.device.platform,
            uuidOfDevice = this.device.uuid,
            osVersion = this.device.version,
            deviceManufacturere = this.device.manufacturer,
            isDeviceVirtual = this.device.isVirtual;

        this.log('Device basic details are: ' + codovaVersion +","+ modelName +","+ platformName +","+ uuidOfDevice +","+ osVersion +","+ deviceManufacturere +","+ isDeviceVirtual);
    }


    //$ ionic cordova plugin add cordova-plugin-camera
    //$ npm install --save @ionic-native/camera
    //https://github.com/apache/cordova-plugin-camera
    /**
     * Get image.
     */
    getImageFn() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }


    //$ ionic cordova plugin add card.io.cordova.mobilesdk
    //$ npm install --save @ionic-native/card-io
    /**
     * Scan card.
     */
    cardScannerFn() {
        this.cardIO.canScan()
            .then(
                (res: boolean) => {
                    if (res) {
                        let options = {
                            requireExpiry: true,
                            requireCVV: true,
                            requirePostalCode: false,
                            keepApplicationTheme: true,
                            requireCardholderName: true,
                            scanExpiry: true,
                            hideCardIOLogo: true,
                            useCardIOLogo: true
                        };
                        this.cardIO.scan(options).then(
                            date => this.log('Got Card: ' + JSON.stringify(date)),
                            err => this.log('Error occurred while getting date: ' + JSON.stringify(err))
                        );
                    }
                }
            );
    }

    //$ ionic cordova plugin add cordova-plugin-datepicker
    //$ npm install --save @ionic-native/date-picker
    /**
     * Open date picker.
     */
    openDatepickerFn() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
            date => this.log('Got date: '+ JSON.stringify(date)),
            err => this.log('Error occurred while getting date: '+ JSON.stringify(err))
        );
    }

    //$ ionic cordova plugin add cordova-plugin-dialogs
    //$ npm install --save @ionic-native/dialogs
    /**
     * Custom alert dialog.
     */
    alertFn(msg, title, buttonName) {
        this.dialogs.alert(msg ? msg : 'Hello world', title ? title : 'Example', buttonName ? buttonName : 'OK')
            .then(() => this.log('Dialog dismissed'))
            .catch(e => this.log('Error displaying dialog'+ JSON.stringify(e)));
    }

    /**
     * Custom confirmation dialog.
     */
    confirmFn(msg, title, buttonLabels) {
        this.dialogs.confirm(msg ? msg : 'Hello world', title ? title : 'Example', buttonLabels ? buttonLabels : ['YES', 'NO'])
            .then(res => this.log('Confirm dismissed'+ JSON.stringify(res)))
            .catch(e => this.log('Error displaying dialog'+ JSON.stringify(e)));
    }

    /**
     * Custom prompt dialog.
     */
    promptFn(msg, title, buttonLabels) {
        this.dialogs.prompt(msg ? msg : 'Hello world', title ? title : 'Example', buttonLabels ? buttonLabels : ['YES', 'NO'], '')
            .then(res => this.log('Confirm dismissed'+ JSON.stringify(res)))
            .catch(e => this.log('Error displaying dialog'+ JSON.stringify(e)));
    }

    /**
     * Custom beep dialog.
     */
    beepFn(count) {
        this.dialogs.beep(count ? count : 3);
    }

    //$ ionic cordova plugin add cordova-plugin-fcm
    //$ npm install --save @ionic-native/fcm
    /**
     * FCM Token generated.
     */
    getFCMTokenFn() {
        this.fcm.getToken().then(token => {
            this.log("TOKEN NEW:" + token);
        });
    }

    /**
     * FCM Notification received.
     */
    onFCMNotificationReceivedFn() {
        this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
                this.log("Received in background:" + JSON.stringify(data));
            } else {
                this.log("Received in foreground:" + JSON.stringify(data));
            };
        });
    }

    /**
     * FCM token refresh.
     */
    onFCMTokenRefreshFn() {
        this.fcm.onTokenRefresh().subscribe(token => {
            this.log("TOKEN REFRESH:" + token);
        });
    }

    //$ ionic cordova plugin add cordova-plugin-fingerprint-aio
    //$ npm install --save @ionic-native/fingerprint-aio
    /**
     * Show fingerprint aio.
     */
    showFingerprintFn() {
        this.faio.show({
                clientId: 'Fingerprint-Demo',
                clientSecret: 'password', //Only necessary for Android
                disableBackup: true, //Only for Android(optional)
                localizedFallbackTitle: 'Use Pin', //Only for iOS
                localizedReason: 'Please authenticate' //Only for iOS
            })
            .then((result: any) => this.log(result))
            .catch((error: any) => this.log(error));
    }

    //$ ionic cordova plugin add cordova-plugin-google-analytics
    //$ npm install --save @ionic-native/google-analytics
    /**
     * Google analytic tracker.
     */
    googleAnalyticsFn(googleTrackerId) {
        this.ga.startTrackerWithId(googleTrackerId)
            .then(() => {
                this.log('Google analytics is ready now');
                this.ga.trackView('test');
                // Tracker is ready
                // You can now track pages or set additional information such as AppVersion or UserId
            })
            .catch(e => this.log('Error starting GoogleAnalytics'+ JSON.stringify(e)));
    }

    //$ ionic cordova plugin add cordova-plugin-network-information
    //$ npm install --save @ionic-native/network
    /**
     * Watch network disconnect.
     */
    watchNetworkDisconnectFn() {
        this.watchNetworkChangeVr = this.network.onDisconnect().subscribe(() => {
            this.toastFn('Network disconnected. Please check your network connection.');
            this.stopWatchingNetworkChangeFn();
            this.watchNetworkConnectFn();
        });
    }

    /**
     * Stop watching network change.
     */
    stopWatchingNetworkChangeFn() {
        this.watchNetworkChangeVr.unsubscribe();
    }

    /**
     * Watch network connect.
     */
    watchNetworkConnectFn() {
        this.watchNetworkChangeVr = this.network.onConnect().subscribe(() => {
            this.toastFn('Network connected');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(() => {
                if (this.network.type === 'wifi') {}
                this.stopWatchingNetworkChangeFn();
                this.watchNetworkDisconnectFn();
            }, 3000);
        });
    }

    //$ ionic cordova plugin add cordova-plugin-native-spinner
    //$ npm install --save @ionic-native/spinner-dialog
    /**
     * Show loader.
     */
    showLoaderFn(title, message) {
        this.spinnerDialog.show(title ? title : 'Hiho', message ? message : 'Loading...');
    }

    /**
     * Hide loader.
     */
    hideLoaderFn() {
        this.spinnerDialog.hide();
    }

    //$ ionic cordova plugin add cordova-plugin-statusbar
    //$ npm install --save @ionic-native/status-bar
    /**
     * Change background of statusbar.
     */
    statusbarBgChangeFn(colorCode) {
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString(colorCode ? colorCode : '#FF8C00');
    }

    //$ ionic cordova plugin add cordova-plugin-x-toast
    //$ npm install --save @ionic-native/toast
    /**
     * Show toast message.
     */
    toastFn(msg=`I'm a toast`, duration='3000', position='bottom') {
        try {
            this.toast.hide();
        } catch (err) {}
        this.toast.show(msg, duration, position).subscribe(
            toast => {
                this.log(toast);
            }
        );
    }




}
