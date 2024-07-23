import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandService } from 'src/app/core/services/brand.service';
import { Gatgery } from 'src/app/core/interface/gatgery';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _BrandService:BrandService){}

  pageSize:number=0;
  currentPage:number=0
  total:number=0

  getallbrand:Gatgery[]=[]
  ngOnInit(): void {
    this._BrandService.getallbrands().subscribe({
      next:(response)=>{
        console.log(response);
        this.getallbrand=response.data
        this.pageSize=response.metadata.limit;
        this.currentPage=response.metadata.currentPage
        this.total=response.results

        

      }
    })

    




    
  }

  pageChanged(event:any):void{
    this._BrandService.getallbrands(event).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.getallbrand=response.data
        this.pageSize=response.metadata.limit;
        this.currentPage=response.metadata.currentPage
        this.total=response.results

        

      }
    })

   

  }





}
