import { CarsDataHandlerService } from './../../services/cars-data-handler.service';
import { BaseBarGraph } from './../../services/base-bar-graph';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slicing-area',
  templateUrl: './slicing-area.component.html',
  styleUrls: ['./slicing-area.component.scss']
})
export class SlicingAreaComponent implements OnInit {

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
