import { BrandSlicingBarGraph } from './brand-slicing-bar-grap.class';
import { Car } from './../../shared-classes/car';
import { Injectable } from '@angular/core';
import { BarGraphUtilService } from 'src/app/graphing-util/bar-graph-util.service';

@Injectable({
  providedIn: 'root'
})
export class BrandSlicingUtilService {
  constructor(private graphingUtil: BarGraphUtilService) {
   }

  public PrepareBrandGraph(cars: Car[]) { // separate logic from this call into multiple promises
    const timerStart = new Date();

    this.graphingUtil.PrepareBarGraph(cars, 'Brand', BrandSlicingBarGraph.name);

    const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
    console.debug(`Prepare brand graph completed after ${timeElapsed / 1000} seconds`);
  }

  public GetBrandGraph(): BrandSlicingBarGraph {
    return this.graphingUtil.GetGraphByName(BrandSlicingBarGraph.name);
  }
}
