import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _currentUserUrl="http://localhost:3000/api/currentUser"
  constructor(private _httpClient:HttpClient,private _router:Router) { }

  registerUser(user){
    return this._httpClient.post<any>(this._registerUrl,user)
  }
  loginUser(user){
    return this._httpClient.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  // currentuser(){
  //   return this._httpClient.get<any>(this._currentUserUrl)
  // }
  
  getToken(){
    return localStorage.getItem('token')
  }
  

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/event'])
  }
  
}
