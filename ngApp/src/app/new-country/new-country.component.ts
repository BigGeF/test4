import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {
newCountry:any={}

  constructor(private _event:EventService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  createCountry(){
    this._event.createEvent(this.newCountry)
    .subscribe(
      res=>{
    this._router.navigate(['/events'])
        }
      )
  }
  
}
