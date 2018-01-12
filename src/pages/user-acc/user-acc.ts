import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup,NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { MyordersPage } from '../myorders/myorders';


@IonicPage()
@Component({
  selector: 'page-user-acc',
  templateUrl: 'user-acc.html',
})


export class UserAccPage {

  constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
   private authService: AuthService,
   public toastCtrl: ToastController
   ) {
  }

  signup ={
    name: '',
    email: '',
    password: ''
  };

  signin ={
    email1: '',
    password1: ''
  };
  
  onSignUp(form: NgForm) {
  	this.authService.signup(form.value.name, form.value.email, form.value.password)
  	 .subscribe(
  	 	response => console.log(response),
  	 	error    => console.log(error)
  	 );
     let toast = this.toastCtrl.create({
     message: 'Registartion Successful',
     duration: '3000',
     position: 'bottom'
     });

     toast.onDidDismiss(()=> {
     console.log('Dismissed toast');
     });

     toast.present();
  }

  onSignIn(form: NgForm) {
    this.authService.signin(form.value.email1, form.value.password1)
     .subscribe(
      tokenData => console.log(tokenData),
      error    => console.log(error)
     );
  }

  myOrders(){
    this.navCtrl.push(MyordersPage);
  }

}
