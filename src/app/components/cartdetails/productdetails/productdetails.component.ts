import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  constructor(private _Renderer2:Renderer2,
    private _CartService:CartService,private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService,private _ToastrService:ToastrService){}
  prodid:any;
  productdetails:any={};
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('id'));
        this.prodid=params.get('id')
        
        
        

      }
    })

    this._ProductsService.geteachproduct(this.prodid).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.productdetails=response.data
        

      },error:(err)=>{
        console.log(err.error.message);
        

      }
    })
    
  }



    detailsoptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
  
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


}
