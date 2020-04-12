import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-one-and-update-event',
  templateUrl: './get-one-and-update-event.component.html',
  styleUrls: ['./get-one-and-update-event.component.css']
})
export class GetOneAndUpdateEventComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {

  }

 
}
