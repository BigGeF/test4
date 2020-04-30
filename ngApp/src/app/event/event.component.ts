import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events=[]
  constructor(private _eventService: EventService,private _router:Router) { }

  ngOnInit(): void {
    this._eventService.getAllEventForIndex()
      .subscribe(
        res=>this.events=res,
        err=>console.log(err)
      )
  }
  goToThisCountry(id){
    return this._router.navigate(['country/'+id])
  }
}
