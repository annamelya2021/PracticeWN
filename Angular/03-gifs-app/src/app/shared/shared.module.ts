import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { LazyImageComponent } from './componets/lazyImage/lazyImage.component';




@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LazyImageComponent

  ]
})
export class SharedModule { }
