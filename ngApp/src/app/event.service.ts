import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private _eventUrl = 'http://localhost:3000/api/events'
  private _oneEventUrl = 'http://localhost:3000/api/events/'
  private _eventIndexUrl = 'http://localhost:3000/api/eventsForIndex'
private _createEventUrl='http://localhost:3000/api/events'
private _updateEventUrl='http://localhost:3000/api/events/'
private _deleteEventUrl='http://localhost:3000/api/delete/'

  constructor(private _httpClient:HttpClient) { }

  createEvent(event){
    return this._httpClient.post<any>(this._createEventUrl,event)
  }
  updateEvent(id,event){
    return this._httpClient.put<any>(this._updateEventUrl+id,event)
  }
  deleteEvent(_id){
    return this._httpClient.delete(this._deleteEventUrl+_id)
  }

  getAllEvent(){
    return this._httpClient.get<any>(this._eventUrl)
  }

  getAllEventForIndex(){
    return this._httpClient.get<any>(this._eventIndexUrl)
  }
  
  getOneEvents(id){
    return this._httpClient.get<any>(this._oneEventUrl+id)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  // getUser(){
  //   return localStorage.getItem("user");
  // }
  // getToken(){
    //   return localStorage.getItem('token')
    // }
  // loginUser(user){
  //   return this._httpClient.post<any>(this._loginUrl,user)
  // }
}
