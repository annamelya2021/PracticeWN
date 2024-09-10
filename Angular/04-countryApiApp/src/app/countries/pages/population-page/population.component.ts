import { Component, OnInit } from '@angular/core';
import { PopulationService } from './../../../services/population.service';
import { PopulationData, ApiPopulationResponse } from '../../interfaces/population.interface';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationPageComponent implements OnInit {
  populationData: PopulationData[] = [];
  filteredData: PopulationData[] = [];
  searchTerm: string = '';

  constructor(private populationService: PopulationService) {}

  ngOnInit(): void {
    this.loadPopulationData();
  }

  loadPopulationData(): void {
    this.populationService.getPopulationData().subscribe((data: ApiPopulationResponse[]) => {
      this.populationData = data.map((region: ApiPopulationResponse) => ({
        region: region.Nombre,
        year: 2021,
        population: region.Data.find(d => d.Anyo === 2021)?.Valor || 0
      })).filter(item => item.population > 3000);

      this.filteredData = this.populationData.filter(item =>
        item.region.toLowerCase().includes('total municipios')
      );
    });
  }

  handleSearch(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    this.filterData();
  }

  handleDebounce(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    this.filterData();
  }

  filterData(): void {
    this.filteredData = this.populationData.filter(item =>
      item.region.toLowerCase().includes(this.searchTerm)
    );
  }
}
