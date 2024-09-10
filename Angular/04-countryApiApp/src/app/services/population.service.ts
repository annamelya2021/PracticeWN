import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PopulationService {
 private apiUrl: string = 'https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/22?p=12&g1=70:&date=:&page=1'
  constructor(private http: HttpClient) {
   }
   getPopulationData(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
   }
}
