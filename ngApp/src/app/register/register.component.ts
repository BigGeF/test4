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
  //   if (this.registerUserData.adminCode === "wa98030") {
  //     this.registerUserData.isAdmin = true;
  // }
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.token)
          this._router.navigate(['/event'])
        },

        err=>console.log(err)
      )
  }
}
