import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ForgetService } from 'src/app/core/services/forget/forget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  constructor(private _ForgetService:ForgetService,private _Router:Router){}
  btn1:boolean=true;
  btn2:boolean=false;
  btn3:boolean=false;


  usermeg:any;
  email:string=''




  formgroup:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
    

  })
  resetpass:FormGroup=new FormGroup({
    resetCode:new FormControl('')
    
  })
  updata:FormGroup=new FormGroup({
    

    newPassword:new FormControl('')
    
  })

forgetpassword():void{
    console.log(this.formgroup.value);
    let data =this.formgroup.value
    this.email=data.email
    this._ForgetService.forgetpassword(data).subscribe({
      next:(response)=>{
        
        console.log(response);
        this.usermeg=response.message
        console.log(this.usermeg);
        this.btn1=false;
        this.btn2=true;
        this.btn3=false;
        

      },error:(err)=>{
        this.usermeg=err.error.message
        console.log(this.usermeg);
        

      }
    })

   
}
resetpassword():void{
   let reset=this.resetpass.value

  this._ForgetService.resetpassword(reset).subscribe({
    next:(response)=>{
      console.log(response);
      this.btn1=false;
      this.btn2=false;
      this.btn3=true;

      

    }
  })

}

putpassword():void{
  let data= this.updata.value
  data.email=this.email
  this._ForgetService.putpassword(data).subscribe({
    next:(response)=>{console.log(response);
    if(response.token){
      localStorage.setItem('eToken',response.token)
      this._Router.navigate(['/home'])
    }


    }
  })


  
}




}
