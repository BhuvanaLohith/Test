import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MY_VAR } from '../../assets/js/new';

//declare function mymethod(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   x
   constructor(data : DataService ) { 
   this.x = data.getidea();
  // constructor(){

  //   // this.x = mymethod();
  //   this.x = MY_VAR;
  // }
   }
  ngOnInit() {
  //  / mymethod();
  // const returned = MY_VAR;
  // console.log(MY_VAR +"fjf")
  // const returnFunc = synapseThrow();
  // console.log(synapseThrow+"bhduwd")
  }

}
