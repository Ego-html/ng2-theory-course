import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class RoutesCarsService {
  cars = [
    {
      name: 'Ford',
      id: 1
    },
    {
      name: 'Audi',
      id: 2
    },
    {
      name: 'BMW',
      id: 3
    },
    {
      name: 'Mercedes',
      id: 4
    }
  ]
}
