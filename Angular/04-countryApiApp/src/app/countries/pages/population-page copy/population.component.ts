import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Community, PopulationData } from '../../interfaces/population.interface';
import { PopulationService } from '../../../services/population.service';
import { ProvincesService } from '../../../services/provincias.service';

@Component({
  selector: 'app-provinces',
  templateUrl: './population.component.html',
})
export class PopulationPageCopyComponent implements OnInit {
  populationData: PopulationData[] = [];
  communities: Community[] = [];
  combinedData: any[] = [];

  constructor(
    private populationService: PopulationService,
    private provincesService: ProvincesService
  ) {}

  ngOnInit(): void {
    this.loadPopulationData();
    this.loadCommunitiesAndProvinces();
  }

  // Функція для нормалізації назв громад та провінцій
normalizeRegionName(region: string): string {
  return region
    .toLowerCase()
    .replace(/rioja, la/g, 'la rioja')
    .replace(/balears, illes/g, 'illes balears')
    .replace(/castilla - la mancha/g, 'castilla-la mancha')
    .replace(/madrid, comunidad de/g, 'comunidad de madrid')
    .replace(/navarra, comunidad foral de/g, 'comunidad foral de navarra')
    .replace(/murcia, región de/g, 'región de murcia')
    .replace(/principado de asturias/g, 'principado de asturias')
    .replace(/canarias/g, 'canarias')
    .replace(/castilla y león/g, 'castilla y león')
    .replace(/valencia/g, 'comunitat valenciana')
    .replace(/comunitat valenciana/g, 'comunitat valenciana')
    .replace(/país vasco/g, 'país vasco')
    .replace(/,/g, '')
    .trim();
}


  loadPopulationData(): void {
    this.populationService.getPopulationData().subscribe(data => {
      this.populationData = data.map(region => ({
        region: region.Nombre,
        year: 2022,
        // Отримання населення за 2022 рік або 0, якщо дані відсутні
        population: region.Data.find(d => d.Anyo === 2021)?.Valor || 0
      }));

      // Логування для перевірки даних
      console.log('Population Data:', this.populationData);

      // Виклик функції для об'єднання даних
      this.combineData();
    });
  }

  loadCommunitiesAndProvinces(): void {
    this.provincesService.getCommunitiesAndProvinces().subscribe(data => {
      this.communities = data;

      // Логування для перевірки даних
      console.log('Communities Data:', this.communities);

      // Виклик функції для об'єднання даних
      this.combineData();
    });
  }

combineData(): void {
  if (this.populationData.length && this.communities.length) {
    this.combinedData = this.communities
      .map(community => {
        // Нормалізуємо назву громади для порівняння
        const normalizedCommunityName = this.normalizeRegionName(community.name);

        // Знаходимо дані населення для цієї громади
        const filteredPopulation = this.populationData
          .filter(p => this.normalizeRegionName(p.region).includes(normalizedCommunityName))
          .map(p => p.population);

        // Знаходимо найбільше ненульове значення населення
        const maxPopulation = filteredPopulation.length
          ? Math.max(...filteredPopulation.filter(p => p > 0))
          : 0;

        // Перевірка на конкретні громади, які потрібно виключити
        const isExcluded = [
          'ciudad autónoma de ceuta',
          'principado de asturias',
          'ciudad autónoma de melilla'
        ].includes(normalizedCommunityName);

        // Повертаємо громаду лише якщо її населення більше 0 і вона не є виключеною
        return !isExcluded && maxPopulation > 0
          ? {
              ...community,
              population: maxPopulation,
              provinces: community.provinces.map(province => {
                const normalizedProvinceName = this.normalizeRegionName(province.name);

                const provincePopulation = this.populationData
                  .filter(p => this.normalizeRegionName(p.region).includes(normalizedProvinceName))
                  .map(p => p.population);

                const maxProvincePopulation = provincePopulation.length
                  ? Math.max(...provincePopulation.filter(p => p > 0))
                  : 0;

                return {
                  ...province,
                  population: maxProvincePopulation
                };
              })
            }
          : null;
      })
      .filter(community => community !== null);

    // Додаємо логування для перевірки об'єднаних даних
    console.log('Combined Data:', this.combinedData);
  }
}

}
