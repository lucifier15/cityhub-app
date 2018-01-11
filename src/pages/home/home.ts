import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserAccPage } from '../user-acc/user-acc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getUserAcc(){
  	this.navCtrl.push(UserAccPage);
  }

}
