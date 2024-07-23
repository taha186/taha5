import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategaeryService } from 'src/app/core/services/categaery.service';
import { Gatgery } from 'src/app/core/interface/gatgery';

@Component({
  selector: 'app-gataegarydetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gataegarydetail.component.html',
  styleUrls: ['./gataegarydetail.component.css']
})
export class GataegarydetailComponent implements OnInit {
  prodid:any;
  getdetails:Gatgery={} as Gatgery

  constructor(private _CategaeryService:CategaeryService,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('_id'));
        this.prodid=params.get('_id')

        this._CategaeryService.getdetailscategary(this.prodid).subscribe({
          next:(response)=>{
            console.log(response.data);
            this.getdetails=response.data
            
    
          }
        })
        

      }
    })
      
      
  
  }

  
  
}
