import { Car } from 'src/app/shared-classes/car';
import { GrapghingTypes } from './../shared-classes/graphing-tyoes.enum';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsightsUtilService {
  public Insights = new BehaviorSubject<InsightsData>(new InsightsData());
  private Data: Car[];
  public FilteredDataset = new BehaviorSubject<Car[]>([]);

  constructor() {}

  SetData(cars: Car[]) {
    if (!this.Data) {
      this.Data = cars;
    }
  }

  public UpdateInsights(selectedCategory: string, categoryType: GrapghingTypes) {
    const filteredData = this.Data.filter( x => x[categoryType] == selectedCategory);
    this.FilteredDataset.next(filteredData);
    const insight = new InsightsData();
    const amountOfCarsFiltered = filteredData.length;
    insight.AmountOfCars = amountOfCarsFiltered;

    const summedCars = filteredData.reduce((previousValue: Car, currentValue: Car) => {
      const newCar = new Car();
      newCar.milage = (Number(previousValue.milage) + Number(currentValue.milage)).toString();
      newCar.price = (Number(previousValue.price) + Number(currentValue.price)).toString();
      return newCar;
    });

    insight.AverageFuelCons = Number(summedCars.milage) / amountOfCarsFiltered;
    insight.AveragePrice = Number(summedCars.price) / amountOfCarsFiltered;

    this.Insights.next(insight);
  }
}

export class InsightsData {
  AmountOfCars: number;
  AveragePrice: number;
  AverageFuelCons: number;
}
