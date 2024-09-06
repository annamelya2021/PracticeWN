import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SearchComponent } from './weather/component/search/search.component';
import { WeatherComponent } from './weather/component/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseChartDirective } from 'ng2-charts';
import { WeatherChartComponent } from './weather/component/weather-chart/weather-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    WeatherChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    BaseChartDirective,

  ]
    ,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
