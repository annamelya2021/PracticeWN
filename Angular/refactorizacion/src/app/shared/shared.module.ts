import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CountryDetailModalComponent } from './components/country-detail-modal/country-detail-modal.component';
import { LoadingSpinerComponent } from './components/loadingSpiner/loadingSpiner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    NavbarComponent,
    Error404Component,
    LoadingSpinerComponent,
    SidebarComponent,
    SearchBoxComponent,
    CountryDetailModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    Error404Component,
    LoadingSpinerComponent,
    SidebarComponent,
    SearchBoxComponent,
    CountryDetailModalComponent,
  ],
})
export class SharedModule {}
