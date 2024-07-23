import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  mytoken:any;
  isloading:boolean=false

  

  formgroup:FormGroup=new FormGroup({
   
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
   


  },{validators:[this.conformpassword]} as FormControlOptions);


  conformpassword(group:FormGroup):void{
    let password =group.get('password')
    let rePassword=group.get('rePassword')
    

    if(password?.value !=rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }else if(password?.value == ''){
      rePassword?.setErrors({reguired:true})
    }
  }
  login():void{
    let data =this.formgroup.value
    
    console.log(data);
    this.isloading=true
    this._AuthService.signinlogin(data).subscribe({
      next:(response)=>{
        
       
       
        if(response.message=="success"){
          console.log(response);
          localStorage.setItem('eToken',response.token)
          this.isloading=false

        this._Router.navigate(['/home'])

        }
        
        
        
      },error:(err)=>{
        this.isloading=false
        console.log(err);
        

      }
    })
    
  }

}
