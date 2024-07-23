import { CartService } from 'src/app/core/services/cart/cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Products } from 'src/app/core/interface/products';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule,FormsModule,SearchPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageSize:number=0;
  currentPage:number=1;
  total:number=0
  term:string=''
  



  constructor(private _ProductsService:ProductsService,private _ToastrService:ToastrService,private _CartService:CartService,private _Renderer2:Renderer2){}
  products:Products[]=[]
  ngOnInit(): void {
    this._ProductsService.getallproduct().subscribe({
      next:(response)=>{
        console.log( response.data
        );
      
        this.products=response.data
        this.pageSize=response.metadata.limit
        this.currentPage=response.metadata.currentPage
        this.total=response.results


       
    
       
       

        

      }
    })

  }

  pageChanged(event:any):void{
    this._ProductsService.getallproduct(event).subscribe({
      next:(response)=>{
        console.log( response.data
        );
      
        this.products=response.data
        this.pageSize=response.metadata.limit
        this.currentPage=response.metadata.currentPage
        this.total=response.results


       
    
       
       

        

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

}
