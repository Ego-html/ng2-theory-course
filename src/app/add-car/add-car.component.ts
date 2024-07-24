import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-car',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  carName = '';
  carYear = 2017;
  @Output() onAddCar = new EventEmitter<{name: string, year: number}>();

  addCar() {
    const newCar = { name: this.carName, year: this.carYear};
    this.onAddCar.emit(newCar);
    this.carName = '';
    this.carYear = 2017;
  }
}

