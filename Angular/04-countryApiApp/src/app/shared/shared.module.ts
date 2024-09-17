import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CountryTableComponent } from '../countries/components/countryTable/countryTable.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { LoadingSpinerComponent } from './components/loadingSpiner/loadingSpiner.component';
import { SearchBoxComponent } from '../countries/components/searchBox/searchBox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactComponent,
    CountryTableComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
    LoadingSpinerComponent,
    Error404PageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactComponent,
    CountryTableComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
