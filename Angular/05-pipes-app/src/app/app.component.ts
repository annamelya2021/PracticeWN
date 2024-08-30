import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
        {
          label: 'Documents',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-plus'
              },
              {
                  label: 'Search',
                  icon: 'pi pi-search'
              }
          ]
      },
      {
          label: 'Profile',
          items: [
              {
                  label: 'Settings',
                  icon: 'pi pi-cog'
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out'
              }
          ]
      }
      ];
  }

}
