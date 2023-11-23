import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { KameraPage } from './kamera/kamera.page';


const routes: Routes = [
 {
    path: 'kamera',
    loadChildren: () => import('./kamera/kamera.module').then( m => m.KameraPageModule)
  },
  {
    path: '',
    redirectTo: 'kamera',
    pathMatch: 'full'
  }, 
  
  {
    path: 'forside',
    loadChildren: () => import('./forside/forside.module').then( m => m.ForsidePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
