

import {Injectable} from '@angular/core';
@Injectable()
export class commonConstants {
    
    domain = "https://www.kindplanner.nl/";
    baseUrl = this.domain + "api/";
    loginApi = this.baseUrl + "login/";
    
    constructor() {}

}