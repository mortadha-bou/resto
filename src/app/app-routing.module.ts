import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';

const routes: Routes = [
  
  //http://localhost:4200/
  {path:"home",component:HomeComponent},
  //http://localhost:4200/signup
  {path:"signup",component: SignupComponent},
  //http://localhost:4200/addplat
  {path:"addplat",component:  AddPlatComponent },
  //http://localhost:4200/addChef
  {path:"addchef",component: AddChefComponent},
  //http://localhost:4200/login
  {path:"",component: LoginComponent},
   //http://localhost:4200/menu
   {path:"menu",component: FoodMenuComponent},
  //http://localhost:4200/chefs
  {path:"chefs",component: ChefsComponent},
   //http://localhost:4200/chefs
   {path:"home",component: HomeComponent},
   //http://localhost:4200/reservatoin
   {path:"reservation",component: ReservationComponent},
   {path:"editChef/:id",component: EditChefComponent},
   {path:"editPlat/:id",component: EditPlatComponent},
   {path:"editReservation/:id",component: EditReservationComponent},
   {path:"reservationTable",component: ReservationTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
