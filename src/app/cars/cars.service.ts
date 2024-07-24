import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Car } from './car.definition';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  private apiUrl = 'http://cars.localhost/server/index.php';

  constructor(private http: HttpClient) {}

  getAppTitle(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  getCars(): Observable<Car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.get<Car>(this.apiUrl, {
      headers
    })
      .pipe(
        tap(data => console.log('Received data from server:', data)),
          catchError(error => {
          console.error('Error fetching cars:', error);
          return throwError(() => error); // Use throwError here
        })
      );
  }

  addNewCar(carName: string): Observable<any> {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post(this.apiUrl, data)
  }
}
