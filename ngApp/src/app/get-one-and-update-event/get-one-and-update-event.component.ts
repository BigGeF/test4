import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-get-one-and-update-event',
  templateUrl: './get-one-and-update-event.component.html',
  styleUrls: ['./get-one-and-update-event.component.css']
})
export class GetOneAndUpdateEventComponent implements OnInit {
  country:any=[]
  errors:any={}
  constructor(
    private _router:Router, 
    private _eventService:EventService,
    private _activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateroute.params
    .subscribe((params:Params)=>{
      this._eventService.getOneEvents(params.id)
      .subscribe((data:any)=>{
        this.country=data.event
      })
    })
  }
  handleSubmitCountry(){
    this._eventService.updateEvent(this.country._id,{
      name:this.country.name,
      price:this.country.price,
      des:this.country.des
    })
    .subscribe((data:any)=>{
      if(data.hasOwnProperty('errors')){
        this.errors=data.errors
      }else{
        this._router.navigate(['/'])
      }
    })
  }

  deleteCountry(id){
    this._eventService.deleteEvent(this.country._id)
    .subscribe(
      res=>{
        this._router.navigate(['/events'])
      }
    )
  }
}
