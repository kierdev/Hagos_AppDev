// group members: HAGOS, PEREZ, ZUNIGA of BSIT 2-3

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { Assignment } from './assignment-page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AssignmentRoutingModule
    ],
  declarations: [Assignment],
})
export class AssignmentModule {}


