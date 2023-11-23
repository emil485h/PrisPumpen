import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KameraPageRoutingModule } from './kamera-routing.module';

import { KameraPage } from './kamera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KameraPageRoutingModule
  ],
  declarations: [KameraPage]
})
export class KameraPageModule {}
