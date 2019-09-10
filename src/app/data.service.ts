import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
news=[
  {id:1,title:"skoda",name:"hundai"},
  {id:1,title:"skoda",name:"hundai"},
  {id:1,title:"skoda",name:"hundai"}
];
  constructor() { }

  getidea(){
  return this.news
   }
}
