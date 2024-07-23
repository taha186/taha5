import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private _HttpClient:HttpClient) { }
  mytoken:any={
    token:localStorage.getItem('eToken')
  }

  checkout(id:string,check:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress:check
       
    },{
      headers:this.mytoken
    })
  }


  
}
