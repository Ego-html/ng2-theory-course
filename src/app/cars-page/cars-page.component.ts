import {Component, OnInit} from '@angular/core';
import {RoutesCarsService} from "../cars.servisce";
import { Car } from './cars.definition';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.css'
})
export class CarsPageComponent implements OnInit{
  cars: Car[] = [];

  constructor(private routesCars: RoutesCarsService) {}

  ngOnInit() {
    this.cars = this.routesCars.cars;
  }
}
