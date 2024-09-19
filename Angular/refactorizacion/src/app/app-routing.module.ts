import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherPageComponent } from './tiempo/pages/weather-page/weather-page.component';
import { Error404Component } from './shared/pages/error404/error404.component';


const routes: Routes = [

   {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
  path: 'weather',
  // component: WeatherPageComponent,
  loadChildren: () => import('./tiempo/tiempo.module').then( m => m.TiempoModule ),
},
{
  path: 'flags',
  loadChildren: () => import('./banderas/banderas.module').then( m => m.BanderasModule ),
},

  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
