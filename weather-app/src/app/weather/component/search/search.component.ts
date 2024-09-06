import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'search-weather',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  cityName: string = '';

  @Output()
  citySearch = new EventEmitter<string>();

    onSearch(){
    if(this.cityName){
      this.citySearch.emit(this.cityName)
      this.cityName=''
    }
  }
 }
