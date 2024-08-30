import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PrimeNgModule

  ],
  exports:[
    MenuComponent,
  ]
})
export class SharedModule { }
