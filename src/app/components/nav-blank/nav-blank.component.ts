import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { WhislistService } from 'src/app/core/services/whislist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent  implements OnInit {
  
  constructor(private _WhislistService:WhislistService,private _Router:Router,private _CartService:CartService,private _ProductsService:ProductsService,private _Renderer2:Renderer2){}
  cartnumber:any;
  cartnumwhislist:number=0
  @ViewChild('navbar') navelement!:ElementRef;

  @HostListener('window:scroll')
  onScroll():void{
    if(  scrollY > 500){
      this._Renderer2.addClass(this.navelement.nativeElement,'px-5')

    }else{
      this._Renderer2.removeClass(this.navelement.nativeElement,'px-5')
    }

  }






  ngOnInit(): void {
    this._CartService.cartnum.subscribe({
      next:(response)=>{
        console.log( response);
        this.cartnumber=response
        this._WhislistService.cartnumber.subscribe({
          next:(response)=>{
            console.log(response);
            this.cartnumwhislist=response
            

          }
        })
        
        
      }
    })
    this._CartService.getcard().subscribe({
      next:(response)=>{
        console.log(response.numOfCartItems);
        this.cartnumber=response.numOfCartItems

        

      }
    })



    
  }

  signout():void{
    localStorage.removeItem('eToken')
    this._Router.navigate(['/login'])
   


   
    

  }

}
