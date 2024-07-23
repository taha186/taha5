import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {

  constructor(private _HttpClient:HttpClient) { }

  cartnumber:BehaviorSubject<number>=new BehaviorSubject(0)

  myheader:any={
    token:localStorage.getItem('eToken')
  }
  addtowhislist(id:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      productId: id
    },{
      headers:this.myheader
    })
  }

  getwhislist():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      headers:this.myheader
    })
  }

  removewhislist(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
      headers:this.myheader
    })
  }
}
