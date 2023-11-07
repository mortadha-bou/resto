import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExclusiveItemComponent } from './components/exclusive-item/exclusive-item.component';
import { AboutComponent } from './components/about/about.component';
import { VideoComponent } from './components/video/video.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReviewPartComponent } from './components/review-part/review-part.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { LoginComponent } from './components/login/login.component';
import { ChefComponent } from './components/chef/chef.component';
import { MenusComponent } from './components/menus/menus.component';
import { PlatComponent } from './components/plat/plat.component';
import {HttpClientModule} from '@angular/common/http';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ExclusiveItemComponent,
    AboutComponent,
    VideoComponent,
    FoodMenuComponent,
    ChefsComponent,
    ReservationComponent,
    ReviewPartComponent,
    BlogComponent,
    HomeComponent,
    SignupComponent,
    AddPlatComponent,
    AddChefComponent,
    LoginComponent,
    ChefComponent,
    MenusComponent,
    PlatComponent,
    EditChefComponent,
    EditPlatComponent,
    ReservationTableComponent,
    EditReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
