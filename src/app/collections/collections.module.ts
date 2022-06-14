import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CoreModule } from 'src/core/core.module';
import { MaterialExampleModule } from '../material/material.module';

@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialExampleModule
  ]
})
export class CollectionsModule { }
