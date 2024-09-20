import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* import { ByFlagPageComponent } from './pages/by-flag-page/by-flag-page.component';
import { CountryDetailModalComponent } from './components/country-detail-modal/country-detail-modal.component';
import { PopulationPageComponent } from './pages/population-page/population.component';
import { PopulationPageCopyComponent } from './pages/population-page copy/population.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
 */
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainCountriesRoutingModule } from './main-page-country-routing.module';
import { MainPageCountriesComponent } from './main-page-countries.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    MainPageCountriesComponent,

  ],
  imports: [
    CommonModule,
    MainCountriesRoutingModule,
    SharedModule


  ],
 exports: [

  MainPageCountriesComponent
    ]
})
export class MainCountriesModule { }
