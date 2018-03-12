import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {ActorsComponent} from './pages/actors/actors.component';
import {HomeComponent} from './pages/home/home.component';
import {InitPageComponent} from './pages/init-page/init-page.component';

//RouteConfiguration
export const routes:Routes=[
{
  path:'',
  component:LoginComponent
},
{
  path:'home',
  component:HomeComponent,
  children:[
   {
     path: 'init',
     component:InitPageComponent,
     outlet:'home-router'
   },
   {
     path:'actors',
     component:ActorsComponent,
     outlet:'home-router'
   }
]
}

];

export const routing: ModuleWithProviders=RouterModule.forRoot(routes);
