import { YearSlicingBarGraph } from './year-slicing/year-slicing-bar-graph.class';
import { BrandSlicingBarGraph } from './brand-slicing/brand-slicing-bar-grap.class';
import { BrandSlicingUtilService } from './brand-slicing/brand-slicing-util.service';
import { Car } from './../shared-classes/car';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BaseBarGraph } from '../shared-classes/base-bar-graph';
import { YearSlicingUtilService } from './year-slicing/year-slicing-util.service';

@Injectable({
  providedIn: 'root'
})
export class CarsDataHandlerService {
  private Cars: Car[];
  private dataSourceUrl = '../../assets/Data/carsData.json';

  constructor(
    private http: HttpClient,
    private yearSlicingUtil: YearSlicingUtilService,
    private brandSlicingUtilService: BrandSlicingUtilService) {}

  public async LoadCars() {
    if (!this.Cars) {
      const timerStart = new Date();

      this.Cars = await this.http.get<Promise<Car[]>>(this.dataSourceUrl).toPromise(); // TODO: Load from a server instead !
      const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures

      console.debug(`Load cars completed after ${timeElapsed / 1000} seconds`);
    }
  }

  public PrepareBrandGraph() {
    this.brandSlicingUtilService.PrepareBrandGraph(this.Cars);
  }

  public GetBrandGraph(): BrandSlicingBarGraph {
    return this.brandSlicingUtilService.GetBrandGraph();
  }

  public PrepareYearsGraphIfNull() {
    this.yearSlicingUtil.PrepareYearsGraphIfNull(this.Cars);
  }

  public GetYearGraph(): YearSlicingBarGraph {
    return this.yearSlicingUtil.GetYearsGraph();
  }

}
