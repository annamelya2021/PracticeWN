import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  public  countries: Country[]=[]

 constructor (private countriesService: CountriesService){

 }
searchByCapital( term:string){
console.log('desde el capical page')
console.log('term :>> ', term);

this.countriesService.searchcapital(term).subscribe(countries => {
  this.countries = countries;
})

}
}
