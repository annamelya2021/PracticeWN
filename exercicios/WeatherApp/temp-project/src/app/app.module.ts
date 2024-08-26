import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './weatherApp/component/search/search.component';
import { WeatherComponent } from './weatherApp/component/card/card.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
