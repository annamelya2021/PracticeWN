import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CountriesModule } from './countries/countries.module';
import { RouterModule, Routes } from '@angular/router'; // Import the Angular Router module
import { AuthModule } from './auth/auth.module';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CountriesModule,
    RouterModule.forRoot([]),
    AuthModule,


    //  MatCardModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatIconModule,
    // MatButtonModule,
    // MatExpansionModule,
    //   ReactiveFormsModule,
    // MatFormFieldModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
