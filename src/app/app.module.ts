// angular references
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd party references
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule, PlotlyViaCDNModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

// in-app references
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { SlicingAreaComponent } from './components/slicing-area/slicing-area.component';
import { InsightsAreaComponent } from './components/insights-area/insights-area.component';
import { TableAreaComponent } from './components/table-area/table-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavBarComponent,
    SlicingAreaComponent,
    InsightsAreaComponent,
    TableAreaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PlotlyModule,
    PlotlyViaCDNModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
