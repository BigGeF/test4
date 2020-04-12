import { Component, OnInit } from '@angular/core';
import{AuthService}from '../auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:any={}
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
loginUser(){
  if(this.loginUserData.adminCode !=='wa98030'){
    // this._router.navigate(['/event'])

    this._router.navigate(['/event'])
    }else{
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res=>{
          localStorage.setItem('token',res.token)
          this._router.navigate(['/events'])
          }
        )
    }
  }
}
