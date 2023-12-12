import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPriceModalPageRoutingModule } from './edit-price-modal-routing.module';

import { EditPriceModalPage } from './edit-price-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPriceModalPageRoutingModule
  ],
  declarations: [EditPriceModalPage]
})
export class EditPriceModalPageModule {}
