import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsDataHandlerService {
  private Cars: Car[];

  constructor(private http: HttpClient) {
  }

  async loadCars() {
    if (!this.Cars) {
      this.Cars = await this.http.get<Promise<Car[]>>('../../assets/Data/carsData.json').toPromise();
      console.log(this.Cars);
    }
  }

}
