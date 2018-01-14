import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
@Injectable()
export class ServicesService{
	
	constructor(private http: Http){}

	displayServices(){
		return this.http.get('http://127.0.0.1:8000/api/services')
			.map(
				(response: Response) => {
					return response.json().services;
				}
			);
	}
}