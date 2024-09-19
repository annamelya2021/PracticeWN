import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes= [
  {
    path: '',
    loadChildren: () => import('../../countries.module').then( m => m.CountriesModule ),
  },


]


@NgModule({
  imports: [
RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class MainCountriesRoutingModule { }
