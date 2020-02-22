import { Car } from './../../shared-classes/car';
import { YearSlicingGraph } from './year-slicing-graph.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearSlicingUtilService {
  YearGraph: YearSlicingGraph;

  constructor() {
    this.YearGraph = new YearSlicingGraph();
  }

  public PrepareYearsGraphIfNull(cars: Car[]) {
    const yearsAxis: string[] = [];
    const consumtionAxis: string[] = [];

    if (this.YearGraph?.data == null) {
      const timerStart = new Date();

      cars.forEach(car => {
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

  public GetYearsGraph(): YearSlicingGraph {
    return this.YearGraph;
  }
}
