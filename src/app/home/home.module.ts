import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ServiceCardComponent } from '../shared/service-card/service-card.component';
import { StackCardComponent } from '../shared/stack-card/stack-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, ServiceCardComponent, StackCardComponent],
})
export class HomePageModule {}
