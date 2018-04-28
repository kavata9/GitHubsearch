import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


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
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
