import { BaseBarGraph } from 'src/app/shared-classes/base-bar-graph';
import { Injectable } from '@angular/core';
import { Car } from '../shared-classes/car';
import { YearSlicingBarGraph } from '../shared-classes/year-slicing-bar-graph.class';
import { BrandSlicingBarGraph } from '../shared-classes/brand-slicing-bar-graph.class';
import { GrapghingTypes } from '../shared-classes/graphing-tyoes.enum';

@Injectable({
  providedIn: 'root'
})
export class BarGraphUtilService {
  Graphs: Map<string, BaseBarGraph> = new Map();

  constructor() { }

  PrepareBarGraph(cars: Car[], barGraphingType: GrapghingTypes, graphName: string) {
    const timerStart = new Date();

    const graph =  barGraphingType === GrapghingTypes.brand ? new BrandSlicingBarGraph() : new YearSlicingBarGraph();
    const uniqueCategories = [];
    const dataMap: Map<string, number> = new Map<string, number>();

    cars.forEach(car => { // perform this on an external API !!

      const index = uniqueCategories.indexOf(car[barGraphingType]);
      if (index === -1) {
        uniqueCategories.push(car[barGraphingType]);
        dataMap.set(car[barGraphingType], 0);
      } else {
        const count = dataMap.get(car[barGraphingType]);
        dataMap.set(car[barGraphingType], count + 1);
      }

    });

    const counts = [];
    const colors: string[] = [];
    dataMap.forEach( x => {
      counts.push(x);
      colors.push(graph.GetBaseColor());
    });

    // override base graph data
    graph.data[0].orientation = 'h';
    graph.data[0].y = uniqueCategories;
    graph.data[0].x = counts;
    graph.data[0].marker.color = colors;

    this.Graphs.set(graphName, graph);

    const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
    console.debug(`Prepare ${barGraphingType} graph completed after ${timeElapsed / 1000} seconds`);
  }

  public GetGraphByName(graphName: string): BaseBarGraph {
    return this.Graphs.get(graphName);
  }

  public ModifyGraphsAfterelection(selectedCategory: string, barGraphingType: GrapghingTypes, graphName: string) {
    const graph = this.Graphs.get(graphName);

    this.ResetColorsOfOthers(selectedCategory, barGraphingType);

    const index = graph.data[0].y.findIndex(_ => _ == selectedCategory);
    if (index > -1) {
      if (barGraphingType === GrapghingTypes.brand) {
        graph.data[0].marker.color[index] = 'rgba(200,10,10,1)';
      }
      if (barGraphingType === GrapghingTypes.year) {
        graph.data[0].marker.color[index] = 'rgba(10,10,200,1)';
      }
    }
  }

  private ResetColorsOfOthers(selectedCategoryException: string, barGraphingTypeException: GrapghingTypes) {
    const brandsGraph = this.Graphs.get(BrandSlicingBarGraph.name);
    const yearsGraph = this.Graphs.get(YearSlicingBarGraph.name);

    const brandsColors = brandsGraph.data[0].marker.color;
    for (let i = 0; i < brandsColors.length; i++) {
      brandsColors[i] = brandsGraph.GetBaseColor();
    }

    const yearsColors = yearsGraph.data[0].marker.color;
    for (let i = 0; i < yearsColors.length; i++) {
      yearsColors[i] = yearsGraph.GetBaseColor();
    }
  }
}
