import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/core/services/brand.service';
import { Gatgery } from 'src/app/core/interface/gatgery';


@Component({
  selector: 'app-branddetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.css']
})
export class BranddetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _BrandService:BrandService){}
  prodid:any;
  branddetails:Gatgery={} as Gatgery
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('id'));
         this.prodid=params.get('id')
        

      }
    })
    this._BrandService.geteachbrand(this.prodid).subscribe({
      next:(reponse)=>{
        console.log(reponse);
        this.branddetails=reponse.data;

        

      }
    })


  }


}
