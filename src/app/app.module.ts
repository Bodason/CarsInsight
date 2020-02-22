// angular references
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavBarComponent,
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
