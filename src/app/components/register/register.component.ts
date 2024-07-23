import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl,  FormControlOptions,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errmsg:string=''
  isloading:boolean=false;

  
  constructor(private _AuthService:AuthService,private _Router:Router){}
  formgroup:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    



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
handelform():void{
  console.log(this.formgroup.value);
  this.isloading=true

  const userdat= this.formgroup.value;
 if(this.formgroup.valid === true){
  this._AuthService.regisiter(userdat).subscribe({
    next:(response)=>{
      
      console.log(response);
      if(response.message=="success"){
        this.isloading=false
        this._Router.navigate(['/login'])


      }
      

    }
    ,error:(err)=>{
      console.log(err);
      
      
      this.errmsg=err.error.message
      this.isloading=false

      

    }
  })
 }
  
}



  

}
