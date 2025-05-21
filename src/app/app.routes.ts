import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'log',
    loadComponent: () => import('./log/log.page').then( m => m.LogPage)
  },
  {
    path: 'sign',
    loadComponent: () => import('./sign/sign.page').then( m => m.SignPage)
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
  },
  
  {
  path: 'detalle/:camera/:year/:month',
  loadComponent: () => import('./detalle/detalle.page').then(m => m.DetallePage)
},
{
  path: 'fire',
  loadComponent: () => import('./fire-detector/fire-detector.component').then(m => m.FireDetectorComponent)
},
{
  path:'photo',
   loadComponent: () => import('./photos/photos.component').then(m => m.PhotosComponent)
}

];
