import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage)},
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'principal-page',
    loadComponent: () => import('./principal-page/principal-page.page').then( m => m.PrincipalPagePage)
  },
  {
    path: 'cameras',
    loadComponent: () => import('./cameras/cameras.page').then( m => m.CamerasPage)
  },
  {
    path: 'setting',
    loadComponent: () => import('./setting/setting.page').then( m => m.SettingPage)
  }
];
