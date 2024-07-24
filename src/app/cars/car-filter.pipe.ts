import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'carFilter',
  standalone: true,
  pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(cars: { name: string }[], searchCar: string): any {
    if (cars.length === 0 || searchCar === '') {
      return cars;
    }

    return cars.filter(car => car.name.toLowerCase() === searchCar);
  }
}
