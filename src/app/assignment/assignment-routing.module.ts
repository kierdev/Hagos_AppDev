import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment } from './assignment-page';

const routes: Routes = [
  {
    path: '',
    component: Assignment,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }