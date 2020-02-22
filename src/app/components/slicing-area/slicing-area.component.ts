import { CarsDataHandlerService } from './../../data-utils/cars-data-handler.service';
import { Component, OnInit } from '@angular/core';
import { YearSlicingGraph } from 'src/app/data-utils/year-slicing/year-slicing-graph.class';
import { BrandSlicingGraph } from 'src/app/data-utils/brand-slicing/brand-slicing-grap.class';

@Component({
  selector: 'app-slicing-area',
  templateUrl: './slicing-area.component.html',
  styleUrls: ['./slicing-area.component.scss']
})
export class SlicingAreaComponent implements OnInit {

  brandGraph: BrandSlicingGraph;
  yearBarGraph: YearSlicingGraph;

  constructor(private carsDataHandlerService: CarsDataHandlerService) { }

  async ngOnInit(): Promise<void> {
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
