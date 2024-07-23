import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategaeryService {

  constructor(private _HttpClient:HttpClient) { }
  getallgategary():Observable<any>{
    return this ._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getdetailscategary(id:string):Observable<any>{
    return this ._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
}
