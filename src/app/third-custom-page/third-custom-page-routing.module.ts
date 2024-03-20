import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdCustomPagePage } from './third-custom-page.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdCustomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdCustomPagePageRoutingModule {}
