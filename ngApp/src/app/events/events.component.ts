import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  sevents=[]
  currentUser:any=[]
  constructor(private _eventService:EventService,
     private _router:Router,
     private _authService:AuthService,
     private _activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {

    this.allEvents();
  }

  allEvents(){
    this._eventService.getAllEvent()
      .subscribe(
        res=>{
          return this.sevents=res
        },
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

  goToEdit(id){
     this._router.navigate(['/events/'+id]);
  }

  deleteCountry(id){
    this._eventService.deleteEvent(id)
    .subscribe(
      res=>{
        this.allEvents()    
      },
      err=>{
        console.log(err);
      }
    )
  }

}
