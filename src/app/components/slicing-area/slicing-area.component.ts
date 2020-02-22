import { YearSlicingBarGraph } from './../../data-utils/year-slicing/year-slicing-bar-graph.class';
import { BrandSlicingBarGraph } from './../../data-utils/brand-slicing/brand-slicing-bar-grap.class';
import { CarsDataHandlerService } from './../../data-utils/cars-data-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slicing-area',
  templateUrl: './slicing-area.component.html',
  styleUrls: ['./slicing-area.component.scss']
})
export class SlicingAreaComponent implements OnInit {

  brandGraph: BrandSlicingBarGraph;
  yearBarGraph: YearSlicingBarGraph;

  constructor(private carsDataHandlerService: CarsDataHandlerService) { }

  async ngOnInit(): Promise<void> { // TODO: get rid of async+await and use observable pattern instead for a more responsive feel.
    await this.carsDataHandlerService.LoadCars();
    await this.carsDataHandlerService.PrepareBrandGraph();

    await this.carsDataHandlerService.PrepareYearsGraphIfNull();

    this.brandGraph = this.carsDataHandlerService.GetBrandGraph();
    this.yearBarGraph = this.carsDataHandlerService.GetYearGraph();
  }


  selectedTest(test: any) {
    console.log(test);
  }

}
