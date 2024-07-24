import {Console2Service} from "./console2.service";
import {Injectable} from "@angular/core";

class Car {
  name: string | undefined;
  isSold: boolean | undefined;
}

@Injectable({
  providedIn: 'root'
})

export class ConsoleService {

  cars: Car[] = [{
    name: 'BMW',
    isSold: false
  }, {
    name: 'Lada',
    isSold: false
  }, {
    name: 'Mitsubishi lancer',
    isSold: false
  }];

  addCar(name: string) {
    this.cars.push({isSold: false, name})
  }
}
