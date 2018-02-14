import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/Rx';

@Injectable()
export class OrdersService{
	
	constructor(private http: Http,private authService: AuthService){}

	getOrders(){
	const token = this.authService.getToken();
	 return this.http.get('http://127.0.0.1:8000/api/orders?token=' + token)
	 	.map(
	 		(response: Response) => {
	 			return response.json().orders;
	 		}
	 	);
	}
}