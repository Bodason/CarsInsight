import { Car } from './../shared-classes/car';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BarGraphUtilService } from '../graphing-util/bar-graph-util.service';
import { YearSlicingBarGraph } from '../shared-classes/year-slicing-bar-graph.class';
import { BrandSlicingBarGraph } from '../shared-classes/brand-slicing-bar-graph.class';

@Injectable({
  providedIn: 'root'
})
export class CarsDataHandlerService {
  private Cars: Car[];
  private dataSourceUrl = '../../assets/Data/carsData.json';

  constructor(
    private http: HttpClient,
    private graphingUtil: BarGraphUtilService) {}

  public async LoadCars() {
    if (!this.Cars) {
      const timerStart = new Date();

      this.Cars = await this.http.get<Promise<Car[]>>(this.dataSourceUrl).toPromise(); // TODO: Load from a server instead !
      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures

      console.debug(`Load cars completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public PrepareBrandGraph() {
    this.graphingUtil.PrepareBarGraph(this.Cars, 'Brand', BrandSlicingBarGraph.name);
  }

  public GetBrandGraph(): BrandSlicingBarGraph {
    return this.graphingUtil.GetGraphByName(BrandSlicingBarGraph.name);
  }

  public PrepareYearsGraphIfNull() {
    this.graphingUtil.PrepareBarGraph(this.Cars, 'Year', YearSlicingBarGraph.name);
  }

  public GetYearGraph(): YearSlicingBarGraph {
    return this.graphingUtil.GetGraphByName(YearSlicingBarGraph.name);
  }

}
