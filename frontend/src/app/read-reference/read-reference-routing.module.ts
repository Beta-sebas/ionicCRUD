import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadReferencePage } from './read-reference.page';

const routes: Routes = [
  {
    path: '',
    component: ReadReferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadReferencePageRoutingModule {}
