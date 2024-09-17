import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { PublicGuard } from './auth/guards/public.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import {AuthModule} from "./auth/auth.module";
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [ PublicGuard ],
    canMatch: [ PublicGuard ]
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ),
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m=> m.CountriesModule)

  },
  {
    path: '**',
    redirectTo: 'countries/by-capital'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
