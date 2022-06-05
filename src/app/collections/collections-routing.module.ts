import { ModuleWithProviders } from '@angular/core';
import { CollectionsComponent } from './collections.component';
import { CollectionComponent } from './collection/collection.component';
import { AssetComponent } from './asset/asset.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
    path: ':collectionUid/assets',
    component: CollectionComponent
  },
  {
    path: ':collectionUid/assets/:assetUid',
    component: AssetComponent
  }
]

export const ROUTES: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
