import { Car } from './../../shared-classes/car';
import { Injectable } from '@angular/core';
import { BrandSlicingGraph } from './brand-slicing-grap.class';

@Injectable({
  providedIn: 'root'
})
export class BrandSlicingUtilService {
  BrandGraph: BrandSlicingGraph;

  constructor() {
    this.BrandGraph = new BrandSlicingGraph();
   }

  public PrepareBrandGraph(cars: Car[]) {
    const brandsAxis: string[] = [];
    const consumtionAxis: string[] = [];

    if (this.BrandGraph?.data == null) {
      const timerStart = new Date();

      cars.forEach(car => {
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
}
