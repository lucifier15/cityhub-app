import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';


@Injectable()
export class ServiceService{

	constructor(private http: Http){}
	
	getService(serv_detail){
		return this.http.get('http://127.0.0.1:8000/api/getService/'+serv_detail)
			.map(
				(response: Response) => {
					return response.json().service;
				}
			);
	}
}