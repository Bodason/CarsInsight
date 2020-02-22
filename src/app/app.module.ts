import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandSlicingAreaComponent } from './components/brand-slicing-area/brand-slicing-area.component';


import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule, PlotlyViaCDNModule } from 'angular-plotly.js';
import { SlicingAreaComponent } from './components/slicing-area/slicing-area.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavBarComponent,
    BrandSlicingAreaComponent,
    SlicingAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PlotlyModule,
    PlotlyViaCDNModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
