import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-one-country',
  templateUrl: './show-one-country.component.html',
  styleUrls: ['./show-one-country.component.css']
})
export class ShowOneCountryComponent implements OnInit {
country:any=[]
  constructor(private _eventService:EventService,
    private _router:Router,
    private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params
    .subscribe((params:Params)=>{
      this._eventService.getOneEvents(params.id)
      .subscribe((data:any)=>{
        this.country=data.event
      })
    })
  }
 showThisCountry(){
   this._eventService.getOneEvents(this.country)
   .subscribe(
     res=>{
       this.country=res
     },
     err=>{
       console.log(err);
     }
   )
 }
}
