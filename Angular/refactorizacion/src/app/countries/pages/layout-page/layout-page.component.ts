import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
 */
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Search countries by capital', icon: 'search', url: './countries/by-capital' },
    { label: 'Search countries by region', icon: 'search', url: './countries/by-region' },
    { label: 'Search countries by name', icon: 'search', url: './countries/by-country' },
    { label: 'Search countries by flag', icon: 'search', url: './countries/by-flag' },
    { label: 'Population y regions of Spain', icon: 'search', url: './countries/populationcopy' }
    ,
  ];

  constructor(
  /*   private authService: AuthService, */
    private router: Router
  ) {}

 /*  get user():User | undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  } */

}
