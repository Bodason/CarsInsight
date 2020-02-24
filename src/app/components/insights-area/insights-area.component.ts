import { InsightsUtilService, InsightsData } from './../../data-utils/insights-util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-area',
  templateUrl: './insights-area.component.html',
  styleUrls: ['./insights-area.component.scss']
})
export class InsightsAreaComponent implements OnInit {
  insightsData: InsightsData;

  constructor( private insightsUtil: InsightsUtilService) { }

  ngOnInit(): void {
    this.insightsUtil.Insights.subscribe((insight: InsightsData) => {
      this.insightsData = insight;
    });
  }

}
