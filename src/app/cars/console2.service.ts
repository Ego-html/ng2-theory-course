import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Console2Service {

  log(str: string) {
    console.log(str);
  }
}
