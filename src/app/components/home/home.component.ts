
import { CartService } from './../../core/services/cart/cart.service';

import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Products } from 'src/app/core/interface/products';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CategaeryService } from 'src/app/core/services/categaery.service';
import { Gatgery } from 'src/app/core/interface/gatgery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WhislistService } from 'src/app/core/services/whislist.service';







@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  constructor( private _WhislistService:WhislistService,private _Renderer2:Renderer2,private _ProductsService:ProductsService,private _CategaeryService:CategaeryService,private _CartService:CartService,private _ToastrService:ToastrService){}


products:Products[]=[]
gatageries:Gatgery[]=[]
term:string=''
cartnumber:number=0
whislist:string[]=[]

  ngOnInit(): void {
    
    this._ProductsService.getallproduct().subscribe({
      next:(response)=>{
        console.log(response.data
        );
        this.products=response.data

        this._WhislistService.getwhislist().subscribe({
          next:(response)=>{
            console.log('firstdata',response);
            this._WhislistService.cartnumber.next(response.count)
            this.whislist=response.data.map((item:any)=>item._id)
            console.log('newdata',this.whislist);

            
            
            
          }
        })
       
    
       
       

        

      }
    })


    this._CategaeryService.getallgategary().subscribe({
      next:(response)=>{
        console.log( response.data);
        this.gatageries=response.data
        
      }
    })
  }


  mainslider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
   
    nav: true
  }






  gategaryoption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
  
    autoplayTimeout:7000,
    autoplaySpeed:1000,


    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
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
      console.log(response);
      this._ToastrService.success(response.message)
      this.whislist=response.data
      
    }
  })
  
}

removewhish(id:string):void{
  this._WhislistService.removewhislist(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message)
      this.whislist=response.data
      
      

    }
  })
}



}