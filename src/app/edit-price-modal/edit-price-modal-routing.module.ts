import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPriceModalPage } from './edit-price-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditPriceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPriceModalPageRoutingModule {}
