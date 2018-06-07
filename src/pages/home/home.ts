import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {commonOperation} from '../../providers/operations';
import {commonConstants} from '../../providers/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    
     isDanger: boolean = true;
  isSecondary: boolean = false;
  isRound: boolean = true;
  isOutline: boolean = false;
  isClear: boolean = true;
  myColor: string = 'secondary';
  myColor2: string = 'dark';
    
     file: File;
    
  constructor(public navCtrl: NavController, public cop:commonOperation, public con: commonConstants) {}
    
  rateApp(){}
    
   
changeListener($event): void {
    this.file = $event.target.files[0];
    
    var options = {};
    let body = new FormData();
    body.append("image", this.file);
    body.append("desc", "testing");

    /*this.http.post(api, body, options).subscribe(res => {
        this.cop.log(res);
    });*/
}
    
    
  loginFn(){
    
      let loginObj = {
            method: "authenticate",
            p: "login",
            password: "123X",
            username: "admin@movesmart.company"
      }
      
      let tempApi = "http://movesmart.offshoresolutions.nl/movesmart_dev/backoffice/service/servicecoach.php?_tk=tk&service_type=ionic";
      
        /*let loginObj = {
            username: "Ajay",
            password: "123qwe"
        }*/
        this.cop.log(loginObj);

        this.cop.httpPostFn(tempApi, loginObj).then((result) => {

        });
    
  }

}
