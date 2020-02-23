import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsightsUtilService {
  public Insights = new BehaviorSubject<InsightsData>(new InsightsData());

  constructor() {}

}

export class InsightsData {
  AmountOfCars: number;
  AveragePrice: number;
  AverageFuelCons: number;
}
