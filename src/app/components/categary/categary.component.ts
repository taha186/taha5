
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategaeryService } from 'src/app/core/services/categaery.service';
import {  ActivatedRoute, RouterLink } from '@angular/router';



@Component({
  selector: 'app-categary',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categary.component.html',
  styleUrls: ['./categary.component.css']
})
export class CategaryComponent implements OnInit {
  constructor(private _CategaeryService:CategaeryService,private _ActivatedRoute:ActivatedRoute){}
  getallcategary:any;
  
  ngOnInit(): void {

    
    this._CategaeryService.getallgategary().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.getallcategary=response.data
        

      }
    })

   
  }
}
