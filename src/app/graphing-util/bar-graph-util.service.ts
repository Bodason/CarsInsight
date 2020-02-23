import { BaseBarGraph } from 'src/app/shared-classes/base-bar-graph';
import { Injectable } from '@angular/core';
import { Car } from '../shared-classes/car';
import { YearSlicingBarGraph } from '../shared-classes/year-slicing-bar-graph.class';
import { BrandSlicingBarGraph } from '../shared-classes/brand-slicing-bar-graph.class';

@Injectable({
  providedIn: 'root'
})
export class BarGraphUtilService {

  Graphs: Map<string, BaseBarGraph> = new Map();

  constructor() { }

  PrepareBarGraph(cars: Car[], barGraphingType: 'Year'|'Brand', graphName: string) {
    const timerStart = new Date();

    const graph =  barGraphingType === 'Brand' ? new BrandSlicingBarGraph() : new YearSlicingBarGraph();
    const uniqueCategories = [];
    const dataMap: Map<string, number> = new Map<string, number>();
    const category = barGraphingType.toLowerCase();

    cars.forEach(car => { // perform this on an external API !!

      const index = uniqueCategories.indexOf(car[category]);
      if (index === -1) {
        uniqueCategories.push(car[category]);
        dataMap.set(car[category], 0);
      } else {
        const count = dataMap.get(car[category]);
        dataMap.set(car[category], count + 1);
      }

    });

    const counts = [];
    dataMap.forEach( x => counts.push(x));

    // override base graph data
    graph.data[0].orientation = 'h';
    graph.data[0].y = uniqueCategories;
    graph.data[0].x = counts;

    this.Graphs.set(graphName, graph);

    const timeElapsed = new Date().getTime() - timerStart.getTime(); // TODO: get rid of timer after perfomance measures
    console.debug(`Prepare ${category} graph completed after ${timeElapsed / 1000} seconds`);
  }

  public GetGraphByName(graphName: string): BaseBarGraph {
    return this.Graphs.get(graphName);
  }
}
