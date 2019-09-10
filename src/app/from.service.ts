import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FromService {

  constructor(private http: HttpClient,private router: Router) {

   }
    
  getdata(name,city)
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((res : any[])=>{
       console.log(res['title']);
       if(res['title'] == "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"){
        this.router.navigateByUrl('/home');
       }
       else{
        this.router.navigateByUrl('/defalut');
       }
    });
  }
   

 
  }


   
