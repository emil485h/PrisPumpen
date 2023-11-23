import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForsidePageRoutingModule } from './forside-routing.module';

import { ForsidePage } from './forside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForsidePageRoutingModule
  ],
  declarations: [ForsidePage]
})
export class ForsidePageModule {}
