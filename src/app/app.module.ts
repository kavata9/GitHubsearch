import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ProfileService } from './profile.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpModule } from '@angular/http'



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
