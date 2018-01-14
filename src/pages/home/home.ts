import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserAccPage } from '../user-acc/user-acc';
import { ServicePage } from '../service/service';
import { ServicesService } from '../../services/services.service';
import { Services } from '../../orders.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private servicesService: ServicesService) {

  }

  services: Services[];

  ionViewDidEnter(){
    this.servicesService.displayServices()
      .subscribe(
        (services: Services[]) => this.services = services,
        (error: Response) => console.log(error)
      );
  }

  getUserAcc(){
  	this.navCtrl.push(UserAccPage);
  }

  getService(){
  	this.navCtrl.push(ServicePage);
  }



}
