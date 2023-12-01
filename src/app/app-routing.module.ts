import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { KameraPage } from './kamera/kamera.page';
import { ForsidePage } from './forside/forside.page';


const routes: Routes = [
  
  {
    path: 'forside',
    loadChildren: () => import('./forside/forside.module').then( m => m.ForsidePageModule)
  },
 
  {
    path: '',
    redirectTo: 'forside',
    pathMatch: 'full'
  }, 
  {
    path: 'kamera',
    loadChildren: () => import('./kamera/kamera.module').then( m => m.KameraPageModule)
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
