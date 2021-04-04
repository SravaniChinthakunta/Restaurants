import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreakfastComponent } from './breakfast/breakfast.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { SaladsComponent } from './salads/salads.component';
import { SignupComponent } from './signup/signup.component';
import { SnacksComponent } from './snacks/snacks.component';
import { SoftdrinksComponent } from './softdrinks/softdrinks.component';
import { StartersComponent } from './starters/starters.component';


const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"breakfast",component:BreakfastComponent},
  {path:"starters",component:StartersComponent},
  {path:"salads",component:SaladsComponent},
  {path:"snacks",component:SnacksComponent},
  {path:"softdrinks",component:SoftdrinksComponent},
  {path:"fastfood",component:FastfoodComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
