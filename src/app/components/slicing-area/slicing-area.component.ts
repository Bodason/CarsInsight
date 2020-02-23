import { BrandSlicingBarGraph } from './../../shared-classes/brand-slicing-bar-graph.class';
import { CarsDataHandlerService } from './../../data-utils/cars-data-handler.service';
import { Component, OnInit } from '@angular/core';
import { YearSlicingBarGraph } from 'src/app/shared-classes/year-slicing-bar-graph.class';
import { BarGraphUtilService } from 'src/app/graphing-util/bar-graph-util.service';
import { Car } from 'src/app/shared-classes/car';

@Component({
  selector: 'app-slicing-area',
  templateUrl: './slicing-area.component.html',
  styleUrls: ['./slicing-area.component.scss']
})
export class SlicingAreaComponent implements OnInit {
  cars: Car[];
  brandGraph: BrandSlicingBarGraph;
  yearBarGraph: YearSlicingBarGraph;

  constructor(private carsDataHandlerService: CarsDataHandlerService,
              private barGraphUtilService: BarGraphUtilService) { }

  async ngOnInit(): Promise<void> { // TODO: get rid of async+await and use observable pattern instead for a more responsive feel.
    await this.carsDataHandlerService.LoadCars();
    this.cars = this.carsDataHandlerService.GetCars();
    await this.barGraphUtilService.PrepareBarGraph(this.cars, 'Year', YearSlicingBarGraph.name);
    await this.barGraphUtilService.PrepareBarGraph(this.cars, 'Brand', BrandSlicingBarGraph.name);

    this.brandGraph = this.barGraphUtilService.GetGraphByName(BrandSlicingBarGraph.name);
    this.yearBarGraph = this.barGraphUtilService.GetGraphByName(YearSlicingBarGraph.name);
  }


  selectedTest(test: any) {
    console.log(test);
  }

}
