import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';

import { ByFlagPageComponent } from './pages/by-flag-page/by-flag-page.component';
import { CountryDetailModalComponent } from './components/country-detail-modal/country-detail-modal.component';
import { PopulationPageComponent } from './pages/population-page/population.component';
import { PopulationPageCopyComponent } from './pages/population-page copy/population.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ByFlagPageComponent,
    CountryDetailModalComponent,
    PopulationPageComponent,
    PopulationPageCopyComponent,

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ]
})
export class CountriesModule { }
