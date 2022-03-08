import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadReferencePageRoutingModule } from './read-reference-routing.module';

import { ReadReferencePage } from './read-reference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadReferencePageRoutingModule
  ],
  declarations: [ReadReferencePage]
})
export class ReadReferencePageModule {}
