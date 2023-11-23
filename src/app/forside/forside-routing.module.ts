import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForsidePage } from './forside.page';

const routes: Routes = [
  {
    path: '',
    component: ForsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForsidePageRoutingModule {}
