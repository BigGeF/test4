import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventComponent } from './event/event.component';
import { AuthGuard } from './auth.guard';
import { GetOneAndUpdateEventComponent } from './get-one-and-update-event/get-one-and-update-event.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { ShowOneCountryComponent } from './show-one-country/show-one-country.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },
{
  path:'event',
  component:EventComponent,
},
  {
    path:'events',
    component:EventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'events/:id',
    component:GetOneAndUpdateEventComponent,
    canActivate:[AuthGuard]
  }
  ,{
    path:'newCountry',
    component:NewCountryComponent,
    canActivate:[AuthGuard]
  },{
    path:'country/:id',
    component:ShowOneCountryComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
