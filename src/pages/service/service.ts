import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceService } from '../../services/service.service';
import { Service } from '../../orders.interface';
import { Options } from '../../orders.interface';


@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
  
  serv_detail: string;
  constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
   private serviceService: ServiceService) {
    this.serv_detail = this.navParams.data.title;
  }

  service: Service[];
  options: Options[];

  ionViewWillEnter(){
  	this.serviceService.getService(this.serv_detail)
  		.subscribe(
  			(service: Service[]) => this.service = service,
  			(error: Response) => console.log(error)
  		);

    this.serviceService.getOptions(this.serv_detail)
    .subscribe(
      (options: Options[]) => this.options = options,
      (error: Response) => console.log(error)
    );
  }

  filterItemsofType(type){
    
    return this.options.filter(x=> x.question_no == type)
  }
}
