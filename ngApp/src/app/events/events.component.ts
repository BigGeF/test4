import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  sevents=[]
  currentUser:any={}
  constructor(private _eventService:EventService,
     private _router:Router,
     private _activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.allEvents();
    // this.getUser()        
  }
  // getUser(){
  //   this._eventService.getCurrentUser()
  //   .subscribe(
  //     res=>{
  //       console.log("in getUser function",this.currentUser);
  //       return this.currentUser=res;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  // }
  allEvents(){
    this._eventService.getAllEvent()
      .subscribe(
        res=>{
          return this.sevents = res;
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

}
