import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsPageComponent} from './cars-page/cars-page.component';
import { HomePageComponent} from './home-page/home-page.component';
import {CarsDetailsPageComponent} from "./cars-details-page/cars-details-page.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cars', component: CarsPageComponent},
  { path: 'cars/:id/:name/:year', component: CarsDetailsPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
