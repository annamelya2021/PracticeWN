import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    console.log('holatoggle2 :>> ');
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    console.log('holatoggle dark:>> ');
    return this.themeService.isDarkTheme();
  }
}
