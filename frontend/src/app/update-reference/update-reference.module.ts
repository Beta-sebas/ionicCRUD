import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateReferencePageRoutingModule } from './update-reference-routing.module';

import { UpdateReferencePage } from './update-reference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateReferencePageRoutingModule
  ],
  declarations: [UpdateReferencePage]
})
export class UpdateReferencePageModule {}
