import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateReferencePage } from './update-reference.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateReferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateReferencePageRoutingModule {}
