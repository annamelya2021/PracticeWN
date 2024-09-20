import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { CountryDetailModalComponent } from './components/country-detail-modal/country-detail-modal.component';

import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { PopulationPageCopyComponent } from './pages/population-page copy/population.component';
import { PopulationPageComponent } from './pages/population-page/population.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CountryTableComponent } from './components/countryTable/countryTable.component';
import { SharedModule } from '../shared/shared.module';
//import { MainPageCountriesComponent } from './pages/main-page-countries/main-page-countries.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
   /*  ByFlagPageComponent, */
    CountryDetailModalComponent,
   CountryPageComponent,
    PopulationPageComponent,
    PopulationPageCopyComponent,
    CountryTableComponent,
     PopulationPageCopyComponent,
    LayoutPageComponent,
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
    MatIconModule
  ],
 exports: [


    ]
})
export class CountriesModule { }
