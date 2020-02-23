import { BarGraphUtilService } from './../graphing-util/bar-graph-util.service';
import { YearSlicingBarGraph } from './year-slicing-bar-graph.class';
import { Car } from './../../shared-classes/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearSlicingUtilService {
  constructor(private graphingUtil: BarGraphUtilService) {
   }

  public PrepareYearsGraphIfNull(cars: Car[]) { // separate logic from this call into multiple promises
    const timerStart = new Date();

    this.graphingUtil.PrepareBarGraph(cars, 'Year', YearSlicingBarGraph.name);

    const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
    console.debug(`Prepare tear graph completed after ${timeElapsed / 1000} seconds`);
  }

  public GetYearsGraph(): YearSlicingBarGraph {
    return this.graphingUtil.GetGraphByName(YearSlicingBarGraph.name);
  }
}
