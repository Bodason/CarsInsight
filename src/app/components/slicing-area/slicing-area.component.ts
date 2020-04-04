import { InsightsUtilService } from './../../data-utils/insights-util.service';
import { BrandSlicingBarGraph } from './../../shared-classes/brand-slicing-bar-graph.class';
import { CarsDataHandlerService } from './../../data-utils/cars-data-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { YearSlicingBarGraph } from 'src/app/shared-classes/year-slicing-bar-graph.class';
import { BarGraphUtilService } from 'src/app/graphing-util/bar-graph-util.service';
import { Car } from 'src/app/shared-classes/car';
import { GrapghingTypes as GraphingTypes } from 'src/app/shared-classes/graphing-tyoes.enum';
import { PlotComponent } from 'angular-plotly.js';

@Component({
  selector: 'app-slicing-area',
  templateUrl: './slicing-area.component.html',
  styleUrls: ['./slicing-area.component.scss']
})
export class SlicingAreaComponent implements OnInit {
  @ViewChild('Years') YearsPlotlyComponent: PlotComponent;
  @ViewChild('Brands') BrandsPlotlyComponent: PlotComponent;

  cars: Car[];
  graphingTypes = GraphingTypes;
  brandGraph: BrandSlicingBarGraph;
  yearBarGraph: YearSlicingBarGraph;

  constructor(private carsDataHandlerService: CarsDataHandlerService,
              private insightsUtil: InsightsUtilService,
              private barGraphUtilService: BarGraphUtilService) { }

  async ngOnInit(): Promise<void> { // TODO: get rid of async+await and use observable pattern instead for a more responsive feel.
    await this.carsDataHandlerService.LoadCars(); // temp locaiton - move further upwards
    this.cars = this.carsDataHandlerService.GetCars();

    this.barGraphUtilService.PrepareBarGraph(this.cars, GraphingTypes.year, YearSlicingBarGraph.name);
    this.barGraphUtilService.PrepareBarGraph(this.cars, GraphingTypes.brand, BrandSlicingBarGraph.name);

    this.brandGraph = this.barGraphUtilService.GetGraphByName(BrandSlicingBarGraph.name);
    this.yearBarGraph = this.barGraphUtilService.GetGraphByName(YearSlicingBarGraph.name);
  }

  async SelectedCategoryChanged(plotlySelectEvent: any, categoryType: GraphingTypes) {
    const selectedCategory: string = plotlySelectEvent.points[0].label;
    const graphName =  categoryType === GraphingTypes.brand ? BrandSlicingBarGraph.name : YearSlicingBarGraph.name;

    this.insightsUtil.UpdateInsights(selectedCategory, categoryType);
    this.barGraphUtilService.ModifyGraphsAfterelection(selectedCategory, categoryType, graphName);

    await this.BrandsPlotlyComponent.createPlot(); // update didnt trigger color change, so i had to use this more expensive method
    await this.YearsPlotlyComponent.createPlot(); // update didnt trigger color change, so i had to use this more expensive method
  }
}
