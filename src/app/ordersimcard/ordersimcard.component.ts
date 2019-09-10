import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-ordersimcard',
  templateUrl: './ordersimcard.component.html',
  styleUrls: ['./ordersimcard.component.css']
})
export class OrdersimcardComponent implements OnInit {
@Input()
message:any;
  constructor() { }

  ngOnInit() {
  }

}
