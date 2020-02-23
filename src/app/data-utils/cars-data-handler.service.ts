import { Car } from './../shared-classes/car';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BarGraphUtilService } from '../graphing-util/bar-graph-util.service';

@Injectable({
  providedIn: 'root'
})
export class CarsDataHandlerService {
  private Cars: Car[];
  private dataSourceUrl = '../../assets/Data/carsData.json';

  constructor(private http: HttpClient) {}

  public async LoadCars() {
    if (!this.Cars) {
      const timerStart = new Date();

      this.Cars = await this.http.get<Promise<Car[]>>(this.dataSourceUrl).toPromise(); // TODO: Load from a server instead !
      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures

      console.debug(`Load cars completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public GetCars(): Car[] {
    return this.Cars;
  }

}
