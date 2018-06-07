webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonOperation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_card_io__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_dialogs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fingerprint_aio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_spinner_dialog__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {HTTP} from '@ionic-native/http';















//import { Http } from '@angular/http';


var commonOperation = /** @class */ (function () {
    function commonOperation(http, platform, geolocation, appVersion, camera, cardIO, datePicker, device, dialogs, fcm, faio, ga, network, spinnerDialog, statusBar, toast) {
        this.http = http;
        this.platform = platform;
        this.geolocation = geolocation;
        this.appVersion = appVersion;
        this.camera = camera;
        this.cardIO = cardIO;
        this.datePicker = datePicker;
        this.device = device;
        this.dialogs = dialogs;
        this.fcm = fcm;
        this.faio = faio;
        this.ga = ga;
        this.network = network;
        this.spinnerDialog = spinnerDialog;
        this.statusBar = statusBar;
        this.toast = toast;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () { });
        }
    }
    commonOperation.prototype.log = function (data) {
        console.trace(JSON.stringify(data));
    };
    commonOperation.prototype.httpErrorHandle = function (data) {
    };
    //$ npm install --save @ionic-native/http
    /**
     * POST API Call.
     */
    commonOperation.prototype.httpPostFn = function (api, creds) {
        var _this = this;
        //        this.showLoaderFn("", "");
        return new Promise(function (resolve, reject) {
            _this.http.post(api, creds, {}).subscribe(function (res) {
                //                this.hideLoaderFn();
                resolve(res);
                _this.log("SUCCESS:" + JSON.stringify(res));
            }, function (error) {
                _this.hideLoaderFn();
                reject(error);
                _this.log("ERROR:" + JSON.stringify(error));
                _this.httpErrorHandle(error);
            });
        });
    };
    /**
     * GET API Call.
     */
    commonOperation.prototype.httpGetFn = function (api) {
        var _this = this;
        this.showLoaderFn("", "");
        return new Promise(function (resolve, reject) {
            _this.http.get(api, {}).subscribe(function (res) {
                _this.hideLoaderFn();
                resolve(res);
                _this.log("SUCCESS:" + JSON.stringify(res));
            }, function (error) {
                _this.hideLoaderFn();
                reject(error);
                _this.log("ERROR:" + JSON.stringify(error));
                _this.httpErrorHandle(error);
            });
        });
    };
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
    commonOperation.prototype.getCurrentPositionFn = function () {
        var _this = this;
        var position;
        this.geolocation.getCurrentPosition().then(function (pos) {
            position = pos;
            _this.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            _this.deviceLatitudeVr = pos.coords.latitude;
            _this.deviceLongitudeVr = pos.coords.longitude;
        });
    };
    /**
     *  Watch position change of your device.
     */
    commonOperation.prototype.watchPositionChangeFn = function () {
        var _this = this;
        this.watchLocationChangeVr = this.geolocation.watchPosition().subscribe(function (pos) {
            _this.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });
    };
    /**
     * Stop watching position change.
     */
    commonOperation.prototype.stopWatchingPositionChangeFn = function () {
        this.watchLocationChangeVr.unsubscribe();
    };
    //$ ionic cordova plugin add cordova-plugin-app-version
    //$ npm install --save @ionic-native/app-version
    /**
     * Get application details (app name, package name, app version)
     */
    commonOperation.prototype.getApplicationDetailFn = function () {
        var appName = this.appVersion.getAppName(), packageName = this.appVersion.getPackageName(), appVersion = this.appVersion.getVersionNumber();
        this.log(appName + "," + packageName + "," + appVersion);
    };
    //$ ionic cordova plugin add cordova-plugin-device
    //$ npm install --save @ionic-native/device
    /**
     * Get device details.
     */
    commonOperation.prototype.getDeviceDetailsFn = function () {
        var codovaVersion = this.device.cordova, modelName = this.device.model, platformName = this.device.platform, uuidOfDevice = this.device.uuid, osVersion = this.device.version, deviceManufacturere = this.device.manufacturer, isDeviceVirtual = this.device.isVirtual;
        this.log('Device basic details are: ' + codovaVersion + "," + modelName + "," + platformName + "," + uuidOfDevice + "," + osVersion + "," + deviceManufacturere + "," + isDeviceVirtual);
    };
    //$ ionic cordova plugin add cordova-plugin-camera
    //$ npm install --save @ionic-native/camera
    //https://github.com/apache/cordova-plugin-camera
    /**
     * Get image.
     */
    commonOperation.prototype.getImageFn = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    //$ ionic cordova plugin add card.io.cordova.mobilesdk
    //$ npm install --save @ionic-native/card-io
    /**
     * Scan card.
     */
    commonOperation.prototype.cardScannerFn = function () {
        var _this = this;
        this.cardIO.canScan()
            .then(function (res) {
            if (res) {
                var options = {
                    requireExpiry: true,
                    requireCVV: true,
                    requirePostalCode: false,
                    keepApplicationTheme: true,
                    requireCardholderName: true,
                    scanExpiry: true,
                    hideCardIOLogo: true,
                    useCardIOLogo: true
                };
                _this.cardIO.scan(options).then(function (date) { return _this.log('Got Card: ' + JSON.stringify(date)); }, function (err) { return _this.log('Error occurred while getting date: ' + JSON.stringify(err)); });
            }
        });
    };
    //$ ionic cordova plugin add cordova-plugin-datepicker
    //$ npm install --save @ionic-native/date-picker
    /**
     * Open date picker.
     */
    commonOperation.prototype.openDatepickerFn = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return _this.log('Got date: ' + JSON.stringify(date)); }, function (err) { return _this.log('Error occurred while getting date: ' + JSON.stringify(err)); });
    };
    //$ ionic cordova plugin add cordova-plugin-dialogs
    //$ npm install --save @ionic-native/dialogs
    /**
     * Custom alert dialog.
     */
    commonOperation.prototype.alertFn = function (msg, title, buttonName) {
        var _this = this;
        this.dialogs.alert(msg ? msg : 'Hello world', title ? title : 'Example', buttonName ? buttonName : 'OK')
            .then(function () { return _this.log('Dialog dismissed'); })
            .catch(function (e) { return _this.log('Error displaying dialog' + JSON.stringify(e)); });
    };
    /**
     * Custom confirmation dialog.
     */
    commonOperation.prototype.confirmFn = function (msg, title, buttonLabels) {
        var _this = this;
        this.dialogs.confirm(msg ? msg : 'Hello world', title ? title : 'Example', buttonLabels ? buttonLabels : ['YES', 'NO'])
            .then(function (res) { return _this.log('Confirm dismissed' + JSON.stringify(res)); })
            .catch(function (e) { return _this.log('Error displaying dialog' + JSON.stringify(e)); });
    };
    /**
     * Custom prompt dialog.
     */
    commonOperation.prototype.promptFn = function (msg, title, buttonLabels) {
        var _this = this;
        this.dialogs.prompt(msg ? msg : 'Hello world', title ? title : 'Example', buttonLabels ? buttonLabels : ['YES', 'NO'], '')
            .then(function (res) { return _this.log('Confirm dismissed' + JSON.stringify(res)); })
            .catch(function (e) { return _this.log('Error displaying dialog' + JSON.stringify(e)); });
    };
    /**
     * Custom beep dialog.
     */
    commonOperation.prototype.beepFn = function (count) {
        this.dialogs.beep(count ? count : 3);
    };
    //$ ionic cordova plugin add cordova-plugin-fcm
    //$ npm install --save @ionic-native/fcm
    /**
     * FCM Token generated.
     */
    commonOperation.prototype.getFCMTokenFn = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            _this.log("TOKEN NEW:" + token);
        });
    };
    /**
     * FCM Notification received.
     */
    commonOperation.prototype.onFCMNotificationReceivedFn = function () {
        var _this = this;
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                _this.log("Received in background:" + JSON.stringify(data));
            }
            else {
                _this.log("Received in foreground:" + JSON.stringify(data));
            }
            ;
        });
    };
    /**
     * FCM token refresh.
     */
    commonOperation.prototype.onFCMTokenRefreshFn = function () {
        var _this = this;
        this.fcm.onTokenRefresh().subscribe(function (token) {
            _this.log("TOKEN REFRESH:" + token);
        });
    };
    //$ ionic cordova plugin add cordova-plugin-fingerprint-aio
    //$ npm install --save @ionic-native/fingerprint-aio
    /**
     * Show fingerprint aio.
     */
    commonOperation.prototype.showFingerprintFn = function () {
        var _this = this;
        this.faio.show({
            clientId: 'Fingerprint-Demo',
            clientSecret: 'password',
            disableBackup: true,
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please authenticate' //Only for iOS
        })
            .then(function (result) { return _this.log(result); })
            .catch(function (error) { return _this.log(error); });
    };
    //$ ionic cordova plugin add cordova-plugin-google-analytics
    //$ npm install --save @ionic-native/google-analytics
    /**
     * Google analytic tracker.
     */
    commonOperation.prototype.googleAnalyticsFn = function (googleTrackerId) {
        var _this = this;
        this.ga.startTrackerWithId(googleTrackerId)
            .then(function () {
            _this.log('Google analytics is ready now');
            _this.ga.trackView('test');
            // Tracker is ready
            // You can now track pages or set additional information such as AppVersion or UserId
        })
            .catch(function (e) { return _this.log('Error starting GoogleAnalytics' + JSON.stringify(e)); });
    };
    //$ ionic cordova plugin add cordova-plugin-network-information
    //$ npm install --save @ionic-native/network
    /**
     * Watch network disconnect.
     */
    commonOperation.prototype.watchNetworkDisconnectFn = function () {
        var _this = this;
        this.watchNetworkChangeVr = this.network.onDisconnect().subscribe(function () {
            _this.toastFn('Network disconnected. Please check your network connection.');
            _this.stopWatchingNetworkChangeFn();
            _this.watchNetworkConnectFn();
        });
    };
    /**
     * Stop watching network change.
     */
    commonOperation.prototype.stopWatchingNetworkChangeFn = function () {
        this.watchNetworkChangeVr.unsubscribe();
    };
    /**
     * Watch network connect.
     */
    commonOperation.prototype.watchNetworkConnectFn = function () {
        var _this = this;
        this.watchNetworkChangeVr = this.network.onConnect().subscribe(function () {
            _this.toastFn('Network connected');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === 'wifi') { }
                _this.stopWatchingNetworkChangeFn();
                _this.watchNetworkDisconnectFn();
            }, 3000);
        });
    };
    //$ ionic cordova plugin add cordova-plugin-native-spinner
    //$ npm install --save @ionic-native/spinner-dialog
    /**
     * Show loader.
     */
    commonOperation.prototype.showLoaderFn = function (title, message) {
        this.spinnerDialog.show(title ? title : 'Hiho', message ? message : 'Loading...');
    };
    /**
     * Hide loader.
     */
    commonOperation.prototype.hideLoaderFn = function () {
        this.spinnerDialog.hide();
    };
    //$ ionic cordova plugin add cordova-plugin-statusbar
    //$ npm install --save @ionic-native/status-bar
    /**
     * Change background of statusbar.
     */
    commonOperation.prototype.statusbarBgChangeFn = function (colorCode) {
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString(colorCode ? colorCode : '#FF8C00');
    };
    //$ ionic cordova plugin add cordova-plugin-x-toast
    //$ npm install --save @ionic-native/toast
    /**
     * Show toast message.
     */
    commonOperation.prototype.toastFn = function (msg, duration, position) {
        var _this = this;
        if (msg === void 0) { msg = "I'm a toast"; }
        if (duration === void 0) { duration = '3000'; }
        if (position === void 0) { position = 'bottom'; }
        try {
            this.toast.hide();
        }
        catch (err) { }
        this.toast.show(msg, duration, position).subscribe(function (toast) {
            _this.log(toast);
        });
    };
    commonOperation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_card_io__["a" /* CardIO */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_spinner_dialog__["a" /* SpinnerDialog */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__["a" /* Toast */]])
    ], commonOperation);
    return commonOperation;
}());

//# sourceMappingURL=operations.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var commonConstants = /** @class */ (function () {
    function commonConstants() {
        this.domain = "https://www.kindplanner.nl/";
        this.baseUrl = this.domain + "api/";
        this.loginApi = this.baseUrl + "login/";
    }
    commonConstants = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], commonConstants);
    return commonConstants;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_operations__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, cop, con) {
        this.navCtrl = navCtrl;
        this.cop = cop;
        this.con = con;
        this.isDanger = true;
        this.isSecondary = false;
        this.isRound = true;
        this.isOutline = false;
        this.isClear = true;
        this.myColor = 'secondary';
        this.myColor2 = 'dark';
    }
    HomePage.prototype.rateApp = function () { };
    HomePage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        var options = {};
        var body = new FormData();
        body.append("image", this.file);
        body.append("desc", "testing");
        /*this.http.post(api, body, options).subscribe(res => {
            this.cop.log(res);
        });*/
    };
    HomePage.prototype.loginFn = function () {
        var loginObj = {
            method: "authenticate",
            p: "login",
            password: "123X",
            username: "admin@movesmart.company"
        };
        var tempApi = "http://movesmart.offshoresolutions.nl/movesmart_dev/backoffice/service/servicecoach.php?_tk=tk&service_type=ionic";
        /*let loginObj = {
            username: "Ajay",
            password: "123qwe"
        }*/
        this.cop.log(loginObj);
        this.cop.httpPostFn(tempApi, loginObj).then(function (result) {
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/oss/PROJECTS/KindPlanner/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title> Ionic Blank </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="registrationForm">\n        <ion-item>\n            <ion-label>\n                <ion-icon name="person"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type="text" placeholder="Username"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="key"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type="password" placeholder="Password"></ion-input>\n        </ion-item>\n        <ion-item class="item-leave-height">\n            <ion-label>\n                <ion-icon name="list-box"></ion-icon>\n            </ion-label>\n            <ion-select class="custom-select" placeholder="Select value">\n                <ion-option value="CASUAL LEAVE">Casual Leave</ion-option>\n                <ion-option value="COMP OFF">Comp Off</ion-option>\n                <ion-option value="EARNED LEAVE">Earned Leave</ion-option>\n                <ion-option value="SICK LEAVE">Sick Leave</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Pepperoni</ion-label>\n            <ion-checkbox [(ngModel)]="pepperoni" color="primary"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n            <ion-label>Sausage</ion-label>\n            <ion-checkbox [(ngModel)]="sausage" color="secondary"></ion-checkbox>\n        </ion-item>\n    </div>\n    <!-- <div>\n        <button id="notification-button" ion-button clear>\n        <ion-icon name="notifications">\n          <ion-badge id="notifications-badge" color="danger">5</ion-badge>\n        </ion-icon>              \n    </button>\n    </div>\n\n    <button ion-button icon-only>\n	<ion-badge color="accent">23</ion-badge>\n	<ion-icon name="notifications"></ion-icon>\n</button>\n    <br />\n\n    <input type="file" name="image" accept="image/*" (change)="changeListener($event)">\n\n    <button ion-button (click)="this.cop.getCurrentPositionFn()">Get CUrrent Position</button>\n\n    <button ion-button color="secondary" (click)="this.cop.watchPositionChangeFn()">Watch Position Change</button>\n\n    <button ion-button color="danger" (click)="this.cop.stopWatchingPositionChangeFn()">Stop Watching Position Change</button>\n\n    <button ion-button color="light" (click)="this.rateApp()">Rate Application</button>\n\n    <button ion-button color="dark" (click)="this.cop.getApplicationDetailFn()">Get Application Detail</button>\n\n    <button ion-button full (click)="this.cop.getImageFn()">Get Image</button>\n\n    <button ion-button full (click)="this.cop.cardScannerFn()">Card Scan</button>\n\n    <button ion-button block (click)="this.cop.openDatepickerFn()">Date Picker</button>\n\n    <button ion-button round (click)="this.cop.getDeviceDetailsFn()">Get Device Detail</button>\n\n    <button ion-button full outline (click)="this.cop.alertFn()">Custom Alert</button>\n\n    <button ion-button block outline (click)="this.cop.confirmFn()">Custom Confirm</button>\n\n    <button ion-button round outline (click)="this.cop.promptFn()">Custom Prompt</button>\n\n    <button ion-button round outline (click)="this.cop.beepFn()">Custom Beep</button>\n\n    <button ion-button round outline (click)="this.cop.toastFn()">Custom Toast</button>\n    <button ion-button round outline (click)="this.cop.showLoaderFn()">Custom Show Loader</button>\n    <button ion-button round outline (click)="this.cop.hideLoaderFn()">Hide Loader</button>\n\n\n    <button ion-button icon-start (click)="this.cop.showFingerprintFn()">\n  <ion-icon name="star"></ion-icon>\n  Finger Print Scanner\n</button>\n\n    <button ion-button icon-end (click)="this.cop.statusbarBgChangeFn()">Statusbar Color Change\n  <ion-icon name="star"></ion-icon>\n</button>\n\n    <button ion-button icon-only (click)="this.cop.watchNetworkConnectFn()">\n  <ion-icon name="star"></ion-icon>\n</button>\n\n    <button ion-button large (click)="this.cop.getFCMTokenFn()">FCM Token</button>\n\n    <button ion-button (click)="this.loginFn()">LOGIN</button>\n\n    <button ion-button small (click)="this.cop.hideLoaderFn()">Small</button>\n\n\n    <button ion-button [color]="isDanger ? \'danger\' : \'primary\'" [outline]="isOutline">Danger (Solid)</button>\n\n    <button ion-button [color]="myColor" [round]="isRound">Secondary (Round)</button>\n\n    <button ion-button [color]="isSecondary ? \'secondary\' : \'primary\'" [clear]="isClear">Primary (Clear)</button>\n\n    <button ion-button [color]="myColor2" [outline]="isOutline" [round]="isRound">Dark (Solid + Round)</button>\n\n    <button ion-button>Click me!</button>-->\n</ion-content>'/*ion-inline-end:"/home/oss/PROJECTS/KindPlanner/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_operations__["a" /* commonOperation */], __WEBPACK_IMPORTED_MODULE_3__providers_constants__["a" /* commonConstants */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_rate__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_card_io__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_dialogs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_fingerprint_aio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_spinner_dialog__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_toast__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_operations__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_constants__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*import {
    HTTP
} from '@ionic-native/http';*/


















//import { HttpModule } from '@angular/http';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__providers_operations__["a" /* commonOperation */],
                __WEBPACK_IMPORTED_MODULE_20__providers_constants__["a" /* commonConstants */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                //    HTTP,
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_card_io__["a" /* CardIO */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_toast__["a" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_operations__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, splashScreen, cop) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.cop = cop;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.statusbarColor = '#37a3e7';
        this.googleTrackerIdVr = "UA-120277103-1";
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                _this.cop.statusbarBgChangeFn(_this.statusbarColor);
                _this.splashScreen.hide();
                _this.cop.watchNetworkConnectFn();
                /*this.cop.getFCMTokenFn();
                this.cop.onFCMNotificationReceivedFn();
                this.cop.onFCMTokenRefreshFn();*/
                //            this.cop.googleAnalyticsFn(this.googleTrackerIdVr);
            });
        }
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oss/PROJECTS/KindPlanner/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/oss/PROJECTS/KindPlanner/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__providers_operations__["a" /* commonOperation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map