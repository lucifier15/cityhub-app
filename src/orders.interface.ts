export interface Orders{
	id: number;
	service: string;
	name: string;
	user_id: number;
	status: string;
	phone_no: string;
	pincode: string;
	locality: string;
	address: string;
	city: string;
	state: string;
	landmark: string;
	alternate_no: string;
	pay_status: string;
	answers: string;
	created_at: string;
}

export interface Services{
	id: number;
	img_path: string;
	title: string;
	created_at: string;
}