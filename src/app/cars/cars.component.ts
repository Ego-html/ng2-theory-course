import {ApplicationConfig, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CarComponent} from "../car/car.component";
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {map, Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {
  AsyncPipe,
  CurrencyPipe, DatePipe,
  DecimalPipe, JsonPipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle, PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from "@angular/common";
import {AddCarComponent} from "../add-car/add-car.component";
import {CarFilterPipe} from "./car-filter.pipe";
import {ConsoleService} from './console.service'
import {Console2Service} from "./console2.service";
import {CarsService} from "./cars.service";
import {bootstrapApplication} from "@angular/platform-browser";

class Car {
  name: string | undefined;
  isSold: boolean | undefined;
}

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    FormsModule,
    NgIf,
    NgForOf,
    NgStyle,
    NgClass,
    AddCarComponent,
    LowerCasePipe,
    UpperCasePipe,
    SlicePipe,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
    PercentPipe,
    JsonPipe,
    CarFilterPipe,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  encapsulation: ViewEncapsulation.None,
  // providers: [CarsService]
})
export class CarsComponent implements OnInit {

  carsService: Car[] = [];

  myCar: any[] = [];
  carName: string = '';
  appTitle: string = '';

  constructor(private consoleService: ConsoleService, private consoleService2: Console2Service, private myCarsService: CarsService) {
  }

  form!: FormGroup;

  ngOnInit() {
    this.carsService = [];
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail as AsyncValidatorFn),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });

    this.myCarsService.getAppTitle().subscribe(
      (response: any) => {
        console.log(response)
        this.appTitle = response.title.value;
      },
      (error) => {
        console.error('Error fetching app title:', error)
      }
    );
  }

  loadCars() {
    this.myCarsService
      .getCars()
      .subscribe((response: any) => {
        this.myCar = [response.cars];
        console.log(this.myCar);
      })
  }

  addNewCar() {
    this.myCarsService.addNewCar(this.carName)
      .subscribe(
        () => {
          console.log('Car added successfully!');
          this.carName = '';
        },
        (error: any) => {
          console.error('Error adding car:', error);
        }
      );
  }


  onSubmit() {
    console.log('Submitted!', this.form);
  }

  checkForLength(control: FormControl): ValidationErrors | null {

    if (control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({
            'emailIsUsed': true
          })
        } else {
          resolve(null);
        }
      }, 3000)
    })
  }

  headerText = 'Создание своей директивы';

  displayCars() {
    this.carsService = this.consoleService.cars;
    this.consoleService2.log('Машины успешно отобразились для пользователя');
  }

  cars: Car[] = [{
    name: 'Ford',
    isSold: false
  }, {
    name: 'Mazda',
    isSold: false
  }, {
    name: 'Audi',
    isSold: false
  }];

  searchCar = '';

  newCars = [
    {name: 'Ford'},
    {name: 'Mazda'},
    {name: 'Audi'},
    {name: 'Mercedes'},
    {name: 'BMW'}
  ]

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  charsCount = 5;

  addCar() {
    this.newCars.push({
      name: 'New Car'
    })
  }

  title: null = null;

  asyncTitle = of('Async title 3 seconds').pipe(delay(3000), map((title: string) => title));

  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };

  num = 2;

  updateCarList(event: any) {
    const car = event as { name: string, isSold: boolean };
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'New car name';
  }

  getClass(car: Car) {
    return {
      'list-group-item-success': !car.isSold,
      'list-group-item-danger': car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string, car: Car) {
    if (type === 'buy') {
      car.isSold = true;
    } else if (type === 'return') {
      car.isSold = false
    }

    // this.consoleService.log(`${car.name} status = ${type}`);
  }
}


