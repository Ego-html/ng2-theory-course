import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cars-details-page',
  standalone: true,
  imports: [],
  templateUrl: './cars-details-page.component.html',
  styleUrl: './cars-details-page.component.css'
})
export class CarsDetailsPageComponent implements OnInit {
  carId!: number;
  carName!: string;
  carYear!: number;
  carColor!: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.carId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.carName = this.route.snapshot.paramMap.get('name') ?? '';
    this.carYear = +(this.route.snapshot.paramMap.get('year') ?? 0);
    this.route.queryParams.subscribe(params => {
      this.carColor = params['color'];
    });
  }
}
