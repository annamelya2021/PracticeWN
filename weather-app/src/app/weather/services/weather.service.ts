import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 private apiKey:string ='4079abfeea565fa5f716eec8df5dd8c7';
 private apiUrl:string ='https://api.openweathermap.org/data/2.5/weather'

  constructor(private http:HttpClient) { }

  getWeather(city:string){
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=imperial`)
  }

/*   getWeather(city:string):Observable<Card[]>{
    return this.http.get<Card[]>(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=imperial`)
  } */


}
