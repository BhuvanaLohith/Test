import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from "./home/home.component";
import {SupportComponent} from "./support/support.component";
import {ActivateComponent} from "./activate/activate.component";
import {MyloginComponent} from "./mylogin/mylogin.component";
import {OrdersimcardComponent} from "./ordersimcard/ordersimcard.component";
import {MembershipComponent} from "./membership/membership.component";
import {MyformComponent} from "./myform/myform.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ordersimcard', component: OrdersimcardComponent },
  { path: 'support', component: SupportComponent },
  { path: 'activate', component: ActivateComponent },
  { path: 'mylogin', component: MyloginComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'myform', component: MyformComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
