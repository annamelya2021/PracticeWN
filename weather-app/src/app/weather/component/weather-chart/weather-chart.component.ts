import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html'
})
export class WeatherChartComponent implements OnInit {


  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature' }
  ];
  public chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOptions = {
    responsive: true
  };
  public chartLegend = true;
  public chartType = 'line';







  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    // Задайте дані графіка тут, якщо потрібно
  }
}
