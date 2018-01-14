import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServicesService } from '../../services/services.service';
import { Services } from '../../orders.interface';



@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
   private servicesService: ServicesService) {
  }

  services: Services[];

  ionViewDidEnter(){
  	this.servicesService.displayServices()
  		.subscribe(
  			(services: Services) => this.services = services,
  			(error: Response) => console.log(error)
  		);
  }
}
