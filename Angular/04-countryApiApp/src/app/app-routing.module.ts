import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { PublicGuard } from './auth/guards/public.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

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
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m=> m.CountriesModule)

  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'countries',
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
