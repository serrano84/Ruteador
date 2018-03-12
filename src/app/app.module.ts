import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InitPageComponent } from './pages/init-page/init-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    HomeComponent,
    LoginComponent,
    InitPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
