import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  carName = 'Ford';
  carYear = 2015;

  getName() {
      return this.carName;
  }

}
