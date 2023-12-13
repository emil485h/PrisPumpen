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
  },  {
    path: 'landingpage',
    loadChildren: () => import('./landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'edit-price-modal',
    loadChildren: () => import('./edit-price-modal/edit-price-modal.module').then( m => m.EditPriceModalPageModule)
  },

  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
