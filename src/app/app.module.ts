import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartersComponent } from './starters/starters.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { SnacksComponent } from './snacks/snacks.component';
import { SoftdrinksComponent } from './softdrinks/softdrinks.component';
import { SaladsComponent } from './salads/salads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartersComponent,
    FastfoodComponent,
    BreakfastComponent,
    SnacksComponent,
    SoftdrinksComponent,
    SaladsComponent,
    LoginComponent,
    SignupComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
