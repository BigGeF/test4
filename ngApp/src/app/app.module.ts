import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { EventComponent } from './event/event.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { GetOneAndUpdateEventComponent } from './get-one-and-update-event/get-one-and-update-event.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { ShowOneCountryComponent } from './show-one-country/show-one-country.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    EventComponent,
    GetOneAndUpdateEventComponent,
    NewCountryComponent,
    ShowOneCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,EventService,AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
