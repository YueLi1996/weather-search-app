import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { StreetandcityComponent } from './components/streetandcity/streetandcity.component';
import { SelectStateComponent } from './components/select-state/select-state.component';
import { AutoDetectComponent } from './components/auto-detect/auto-detect.component';
import { SearchClearComponent } from './components/search-clear/search-clear.component';
import { ResultFavoriteComponent } from './components/result-favorite/result-favorite.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    StreetandcityComponent,
    SelectStateComponent,
    AutoDetectComponent,
    SearchClearComponent,
    ResultFavoriteComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule, HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }