import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Error404Component } from './pages/error404/error404.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinerComponent } from './components/loadingSpiner/loadingSpiner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { CountryTableComponent } from './components/countryTable/countryTable.component';
import { CountryDetailModalComponent } from './components/country-detail-modal/country-detail-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    Error404Component,
    LoadingSpinerComponent,
    SidebarComponent,
    SearchBoxComponent,
    CountryTableComponent,
    CountryDetailModalComponent




  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent,
    Error404Component,
    LoadingSpinerComponent,
    SidebarComponent,
    SearchBoxComponent,
    CountryTableComponent,
    CountryDetailModalComponent


  ]
})
export class SharedModule { }
