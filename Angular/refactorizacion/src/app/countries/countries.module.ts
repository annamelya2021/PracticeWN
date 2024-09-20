import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/countryTable/countryTable.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MainPageCountriesComponent } from './pages/main-page-countries/main-page-countries.component';
import { PopulationPageCopyComponent } from './pages/population-page copy/population.component';
import { PopulationPageComponent } from './pages/population-page/population.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryPageComponent,
    PopulationPageComponent,
    PopulationPageCopyComponent,
    CountryTableComponent,
    PopulationPageCopyComponent,
    LayoutPageComponent,
    MainPageCountriesComponent,
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [],
})
export class CountriesModule {}
