import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhislistService } from 'src/app/core/services/whislist.service';
import { Products } from 'src/app/core/interface/products';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-whislist',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.css']
})
export class WhislistComponent implements OnInit {
 
  products:Products[]=[]
  whislist:string[]=[]
  constructor(private _WhislistService:WhislistService,private _ToastrService:ToastrService,private _CartService:CartService,private _Renderer2:Renderer2){}
  ngOnInit(): void {
    this._WhislistService.getwhislist().subscribe({
      next:(response)=>{
        console.log(response);
        this.products=response.data
        this.whislist=response.data.map((item:any)=>item._id)
        console.log('newdata',this.whislist);
        
       
        

      }
    })
  }
  
addtocard(id:string,element:HTMLButtonElement):void{

  this._Renderer2.setAttribute(element,'disabled','true')
  this._CartService.addtocart(id).subscribe({
    next:(response)=>{
console.log( 'details',response);
this._ToastrService.success(response.message)
this._Renderer2.removeAttribute(element,'disabled')
this._CartService.cartnum.next(response.numOfCartItems)


    },error:(err)=>{
      console.log(err.error.message);
      this._Renderer2.removeAttribute(element,'disabled')
      

    }
  })

}

addfavwhislist(id:string):void{
  this._WhislistService.addtowhislist(id).subscribe({
    next:(response)=>{
      
      this._ToastrService.success(response.message)
      this.whislist=response.data
      
    }
  })
  
}

removewhish(id:string):void{
  this._WhislistService.removewhislist(id).subscribe({
    next:(response)=>{
     
      this._ToastrService.success(response.message)
      this.whislist=response.data
      this._WhislistService.getwhislist().subscribe({
        next:(response)=>{
          console.log(response);
          this.products=response.data
          
        }
      })
      
      

    }
  })
}








}
