import { PopulationService } from './../../../services/population.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';


@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrl: './population.component.css'
})
export class PopulationPageComponent implements OnInit {
 populationData : any[] =[];

 constructor(private populationService: PopulationService){}

  ngOnInit(): void {
    this.populationService.getPopulationData().subscribe(data =>{
      this.populationData = data.map((region: {
        Data: any; Nombre: any;
}) => ({
        region: region.Nombre,
        year: 2022,
        population: region.Data.find((d: { Anyo: any; }) => d.Anyo === 2021)?.Valor | 0

      }))
    })
  }

}
