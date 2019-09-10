import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FromService} from "../from.service";

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
 })

export class MyformComponent implements OnInit {

  city:string;
  firstname:string;

  constructor(private from:FromService, private http:HttpClientModule) {
   
   }
  ngOnInit() {

  }
  getdata(){
 console.log(this.city)
   this.from.getdata(this.city, this.firstname)
  }
}

