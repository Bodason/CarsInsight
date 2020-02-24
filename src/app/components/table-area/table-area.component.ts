import { InsightsUtilService } from './../../data-utils/insights-util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from 'src/app/shared-classes/car';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrls: ['./table-area.component.scss']
})
export class TableAreaComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['id','milage', 'brand', 'model', 'price', 'year'];

  tableData: MatTableDataSource<Car> = new MatTableDataSource();

  constructor(private insightsUtil: InsightsUtilService) { }

  ngOnInit(): void {
    this.insightsUtil.FilteredDataset.subscribe( (dataset: Car[]) => {
      this.tableData = new MatTableDataSource(dataset);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();

    if (this.tableData.paginator) {
      this.tableData.paginator.firstPage();
    }
  }
}
