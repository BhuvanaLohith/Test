import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  Display() {
 
    this.router.navigateByUrl('/home');
  }

}
