import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cardselected:any=null;
  constructor(private _CartService:CartService,private _Renderer2:Renderer2){}
  ngOnInit(): void {
    this._CartService.getcard().subscribe({
      next:(response)=>{
        
        
        console.log(response.data);
        this.cardselected=response.data
        
        

      },error:(err)=>{
        console.log(err);
        
      }
    })
    
    
  }
  removecart(id:string,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.removecart(id).subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(element,'disabled')
        console.log(response.data);
        this.cardselected=response.data
        this._CartService.cartnum.next(response.numOfCartItems)

        
      

        

      },error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(element,'disabled')
        
        
        
      }
    })
  }

  updata(id:string,count:number,btn1:HTMLButtonElement,btn2:HTMLButtonElement):void{

    this._Renderer2.setAttribute(btn1,'disabled','true')
    this._Renderer2.setAttribute(btn2,'disabled','true')

   if(count >= 1){
    this._CartService.updatacart(id,count).subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(btn1,'disabled')
        this._Renderer2.removeAttribute(btn2,'disabled')
        console.log(response);
        this.cardselected=response.data
        

      },error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(btn1,'disabled')
        this._Renderer2.removeAttribute(btn2,'disabled')
        
      }
    })
   }
  }

  clearall():void{
    this._CartService.clearall().subscribe({
      next:(response)=>{
        console.log(response);
        this.cardselected=null;
        this._CartService.cartnum.next(0)
        

      }
    })
  }
  
  

}
