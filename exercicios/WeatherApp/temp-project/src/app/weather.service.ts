import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=bilbao&appid=4079abfeea565fa5f716eec8df5dd8c7&units=imperial')
  }
}
