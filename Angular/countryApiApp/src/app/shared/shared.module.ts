import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from '../countries/components/searchBox/searchBox.component';
import { CountryTableComponent } from '../countries/components/countryTable/countryTable.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    ContactComponent,
    SidebarComponent,
    SearchBoxComponent,
    CountryTableComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
    CountryTableComponent
  ]
})
export class SharedModule { }
