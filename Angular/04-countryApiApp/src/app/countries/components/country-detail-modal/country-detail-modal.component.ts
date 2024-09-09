import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-country-detail-modal',
  templateUrl: './country-detail-modal.component.html',
  styleUrls: ['./country-detail-modal.component.css']
})
export class CountryDetailModalComponent {
  @Input() country!: Country;
  @Input() showModal: boolean = false;

  closeModal() {
    this.showModal = false;
  }
}
