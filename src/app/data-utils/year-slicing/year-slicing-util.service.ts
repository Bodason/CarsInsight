import { YearSlicingBarGraph } from './year-slicing-bar-graph.class';
import { Car } from './../../shared-classes/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearSlicingUtilService {
  YearGraph: YearSlicingBarGraph;

  constructor() {
    this.YearGraph = new YearSlicingBarGraph();
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

      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after performance measures
      console.debug(`Prepare year graph completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public GetYearsGraph(): YearSlicingBarGraph {
    return this.YearGraph;
  }
}
