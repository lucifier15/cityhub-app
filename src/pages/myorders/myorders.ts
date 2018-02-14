import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../orders.interface';


@IonicPage()

@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html',
})
export class MyordersPage {
  
  orders: Orders[];

  constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
   private ordersService: OrdersService,
   ) {}

  ionViewWillEnter(){
  	this.ordersService.getOrders()
  		.subscribe(
  			(orders: Orders[]) => this.orders = orders,
  			(error: Response) => console.log(error)
  		);
  }
}
