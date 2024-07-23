import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }


  cartnum:BehaviorSubject<number>=new BehaviorSubject(0);




  myheader:any={
    token:localStorage.getItem('eToken')

  }
  
  


  addtocart(prodid:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
      productId:prodid
    },{headers:this.myheader
      
    })
  }


  getcard():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.myheader
    })
  }


  removecart(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      headers:this.myheader
    })
  }

  updatacart(id:String,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
       count:count 
    },{
      headers:this.myheader
    })
  }
  clearall():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.myheader
    })
  }



}
