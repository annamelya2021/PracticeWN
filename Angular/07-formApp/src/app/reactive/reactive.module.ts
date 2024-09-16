import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { BasicPageComponent } from "./pages/basicPage/basicPage.component";
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';


@NgModule({
  declarations: [
    DynamicPageComponent,
    SwitchesPageComponent,
    BasicPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
