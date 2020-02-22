import { YearBarGraph } from './../../services/year-graph';
import { BaseBarGraph } from './../../services/base-bar-graph';
import { CarsDataHandlerService } from './../../services/cars-data-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  brandGraph: BaseBarGraph;
  yearBarGraph: BaseBarGraph;

  constructor(private carsDataHandlerService: CarsDataHandlerService) { }

  async ngOnInit(): Promise<void> {
    await this.carsDataHandlerService.loadCars();
    await this.carsDataHandlerService.PrepareBrandGraph();

    await this.carsDataHandlerService.PrepareYearsGraphIfNull();

    this.brandGraph = this.carsDataHandlerService.GetBrandGraph();
    this.yearBarGraph = this.carsDataHandlerService.GetYearGraph();
  }


  selectedTest(test: any) {
    console.log(test);
  }


}
