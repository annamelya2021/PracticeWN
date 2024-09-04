import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layoutPage.component';
import { LoginPageComponent } from './pages/login-page/loginPage.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


const routes: Routes = [
  { path: '',
    component: LayoutPageComponent,
    children: [
     { path: 'login',
      component: LoginPageComponent
    },
    {
      path: 'new-account',
      component: RegisterPageComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    },

    ]
    }

 ];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],

})
export class AuthRoutingModule { }
