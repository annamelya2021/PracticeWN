import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

import { PopulationPageComponent } from './pages/population-page/population.component';
import { PopulationPageCopyComponent } from './pages/population-page copy/population.component';
import { MainPageCountriesComponent } from './pages/main-page-countries/main-page-countries.component';
//import { MainPageCountriesComponent } from './pages/main-page-countries/main-page-countries.component';



const routes:Routes= [
  /*  {
     path: '',
     loadChildren: () => import('../../countries.module').then( m => m.CountriesModule ),
   },
  */

   {
     path: '',
     component: MainPageCountriesComponent,
     children: [
       {
         path: 'by-capital',
         component: ByCapitalPageComponent,
       },
       {
         path: 'by-country',
         component: ByCountryPageComponent,
       },
    {
         path: 'by-region',
         component: ByRegionPageComponent,
       },

       {
         path: 'by/:id',
         component: CountryPageComponent,
       },

       {
         path: 'populationcopy',
         component:  PopulationPageCopyComponent  ,
       },
        {
         path: '**' ,
         redirectTo: 'by-capital',
       },
     ]

     }
 ]

@NgModule({
  imports: [
RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class CountriesRoutingModule { }
