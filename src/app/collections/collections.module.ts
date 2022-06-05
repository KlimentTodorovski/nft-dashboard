import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from './collections-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { AssetComponent } from './asset/asset.component';
import { CollectionsComponent } from './collections.component';
import { CoreModule } from 'src/core/core.module';



@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionComponent,
    AssetComponent
  ],
  imports: [
    ROUTES,
    CommonModule,
    CoreModule
  ]
})
export class CollectionsModule { }
