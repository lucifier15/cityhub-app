import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class OrdersService{
	
	constructor(private http: Http){}

	getOrders(){
	 return this.http.get('http://127.0.0.1:8000/api/orders')
	 	.map(
	 		(response: Response) => {
	 			return response.json().orders;
	 		}
	 	);
	}
}