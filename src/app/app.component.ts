import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CarsComponent} from "./cars/cars.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarsPageComponent} from "./cars-page/cars-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent, HomePageComponent, CarsPageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng2-course-theory';
}
