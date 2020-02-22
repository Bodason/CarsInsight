import { BrandSlicingGraph } from './brand-slicing/brand-slicing-graph';
import { Car } from './../shared-classes/car';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { YearSlicingGraph } from './year-slicing/year-slicing-graph.class';
import { BaseBarGraph } from '../shared-classes/base-bar-graph';

@Injectable({
  providedIn: 'root'
})
export class CarsDataHandlerService {
  private Cars: Car[];
  private BrandGraph = new BrandSlicingGraph();
  private YearGraph = new YearSlicingGraph();


  constructor(private http: HttpClient) {
  }

  public async loadCars() {
    if (!this.Cars) {
      const timerStart = new Date();

      this.Cars = await this.http.get<Promise<Car[]>>('../../assets/Data/carsData.json').toPromise(); // TODO: Load from a server instead !
      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures

      console.debug(`Load cars completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public PrepareBrandGraph() {
    const brandsAxis: string[] = [];
    const consumtionAxis: string[] = [];

    if (this.BrandGraph?.data == null) {
      const timerStart = new Date();

      this.Cars.forEach(car => {
        brandsAxis.push(car.brand);
        consumtionAxis.push(car.price);
      });

      this.BrandGraph.data = [{
        type: 'bar',
        x: consumtionAxis,
        y: brandsAxis,
        orientation: 'h'
      }];
      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
      console.debug(`Prepare brand graph completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public GetBrandGraph(): BrandSlicingGraph {
    return this.BrandGraph;
  }

  PrepareYearsGraphIfNull() {
    const yearsAxis: string[] = [];
    const consumtionAxis: string[] = [];

    if (this.YearGraph?.data == null) {
      const timerStart = new Date();

      this.Cars.forEach(car => {
        yearsAxis.push(car.year);
        consumtionAxis.push(car.price);
      });

      this.YearGraph.data = [{
        type: 'bar',
        x: consumtionAxis,
        y: yearsAxis,
        orientation: 'h'
      }];
      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
      console.debug(`Prepare brand graph completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public GetYearGraph(): BaseBarGraph {
    return this.YearGraph;
  }

}
