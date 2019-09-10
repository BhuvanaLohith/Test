import { Component, OnInit } from '@angular/core';

//import { ActivateComponent } from './activate/activate.component';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  test ={
    "id":1,
    "name":"abc"
  }
  constructor() { }

  ngOnInit() {
  }

}
