import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from 'src/app/core/services/checkout/checkout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkid:any='';


    
  
  constructor(private _CheckoutService:CheckoutService,private _ActivatedRoute:ActivatedRoute,private _Router:Router){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('id'));
        this.checkid =params.get('id')
      

        

      }
    })
  }
  formgroup:FormGroup=new FormGroup({
    details:new FormControl(''),
    phone:new FormControl(' '),
    city:new FormControl('')

  })

  checkout():void{
    let data=this.formgroup.value
    console.log(this.formgroup.value);
    this._CheckoutService.checkout(this.checkid,data).subscribe({
      
      next:(response)=>{
        console.log( response);
        if(response.status === "success"){
        window.open(response.session.url,'_self')

        }
        
       

        

      }
    })
   


    
  
  }




}
