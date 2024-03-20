import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdCustomPagePageRoutingModule } from './third-custom-page-routing.module';

import { ThirdCustomPagePage } from './third-custom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdCustomPagePageRoutingModule
  ],
  declarations: [ThirdCustomPagePage]
})
export class ThirdCustomPagePageModule {}
