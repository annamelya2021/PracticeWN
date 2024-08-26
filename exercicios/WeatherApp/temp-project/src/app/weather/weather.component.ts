import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  MyWeather:any;
  temperature:number =0;
  feelsLikeTemp:number =0;
  humidity: number= 0;
  pressure: number=0;
  summary:string = '';
iconUrl:string= ''



  constructor(private WeatherService:WeatherService){

  }

  ngOnInit(): void {
    this.WeatherService.getWeather().subscribe({

      next:(res) => {
          console.log(res)
          this.MyWeather = res;
          console.log('this.MyWeather :>> ', this.MyWeather);
          this.temperature = this.MyWeather.main.temp;
          this.feelsLikeTemp = this.MyWeather.main.feels_like;
          this.humidity = this.MyWeather.main.humidity;
          this.pressure = this.MyWeather.main.pressure;
          this.summary = this.MyWeather.weather[0].main;
          this.iconUrl ='https://openweathermap.org/img/wn/' + this.MyWeather.weather[0].icon +'@2x.png'




        },

        error: (error) => console.log(error.message),

        complete:()=>console.info('Api call completed')

  })
 }
}
