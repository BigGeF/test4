import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventUrl = 'http://localhost:3000/api/events'
  private _eventIndexUrl = 'http://localhost:3000/api/eventsForIndex'


  constructor(private _httpClient:HttpClient) { }

  getAllEvent(){
    return this._httpClient.get<any>(this._eventUrl)
  }
  getAllEventForIndex(){
    return this._httpClient.get<any>(this._eventIndexUrl)
  }

  // getToken(){
  //   return localStorage.getItem('token')
  // }

  // getCurrentUser(){
  //   return this._httpClient.get<any>('http://localhost:3000/api/currentUser');
  // }
  // loggedIn(){
  //   return !!localStorage.getItem('token')
  // }
  // loginUser(user){
  //   return this._httpClient.post<any>(this._loginUrl,user)
  // }
}
