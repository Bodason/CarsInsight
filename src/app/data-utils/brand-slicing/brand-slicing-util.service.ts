import { BrandSlicingBarGraph } from './brand-slicing-bar-grap.class';
import { Car } from './../../shared-classes/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandSlicingUtilService {
  BrandGraph: BrandSlicingBarGraph;
  uniqueBrands: string[];

  constructor() {
    this.BrandGraph = new BrandSlicingBarGraph();
   }

  public PrepareBrandGraph(cars: Car[]) { // separate logic from this call into multiple promises
    const brandsData: string[] = [];
    const consumtionData: string[] = [];

    if (this.BrandGraph?.data == null) {
      const timerStart = new Date();

      cars.forEach(car => { // perform this on an external API !!
        brandsData.push(car.brand);
        consumtionData.push(car.price);
      });

      this.uniqueBrands = brandsData ?? brandsData.filter( this.onlyUnique ); // get this from an external API !!
      const colors: string[] = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.uniqueBrands.length; i++) {
        colors.push('rgba(1' + i + '0,0,0)');
      }

      this.BrandGraph.data = [{
        type: 'histogram',
        y: brandsData,
        orientation: 'h',
      }];



      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
      console.debug(`Prepare brand graph completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public GetBrandGraph(): BrandSlicingBarGraph {
    return this.BrandGraph;
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
}
