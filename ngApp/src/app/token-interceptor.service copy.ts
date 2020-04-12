import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorziation:`Bearer ${authService.getToken()}`
      }
    })
    
    return next.handle(tokenizedReq)
  };

}
