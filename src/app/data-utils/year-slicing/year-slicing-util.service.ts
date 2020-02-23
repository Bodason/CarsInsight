import { YearSlicingBarGraph } from './year-slicing-bar-graph.class';
import { Car } from './../../shared-classes/car';
import { Injectable } from '@angular/core';
import { BarGraphUtilService } from 'src/app/graphing-util/bar-graph-util.service';

@Injectable({
  providedIn: 'root'
})
export class YearSlicingUtilService {
  constructor(private graphingUtil: BarGraphUtilService) {
   }

  public PrepareYearsGraphIfNull(cars: Car[]) { // separate logic from this call into multiple promises
    this.graphingUtil.PrepareBarGraph(cars, 'Year', YearSlicingBarGraph.name);
  }

  public GetYearsGraph(): YearSlicingBarGraph {
    return this.graphingUtil.GetGraphByName(YearSlicingBarGraph.name);
  }
}
