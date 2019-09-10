import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { OrdersimcardComponent } from './ordersimcard/ordersimcard.component';
import { ActivateComponent } from './activate/activate.component';
import { SupportComponent } from './support/support.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import {FormsModule} from '@angular/forms';
import { MyformComponent } from './myform/myform.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { DemoComponent } from './demo/demo.component';
import { SubmitformComponent } from './submitform/submitform.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
// import { Component } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MembershipComponent,
    OrdersimcardComponent,
    ActivateComponent,
    SupportComponent,
    MyloginComponent,
    MyformComponent,
    DemoComponent,
    SubmitformComponent,
    TwowaydatabindingComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
