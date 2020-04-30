import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData:any = {}
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res=>{
          localStorage.setItem('token',res.token)
          localStorage.setItem('email',res.email)
          this._router.navigate(['/event'])
        },

        err=>console.log(err)
      )
  }
}
