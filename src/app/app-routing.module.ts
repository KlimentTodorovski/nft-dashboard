import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AssetsComponent } from './assets/assets.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/assets'
  },
  {
    path: 'assets',
    component: AssetsComponent
  },
  {
    path: 'assets/:assetContractAddress/:tokenId',
    component: AssetComponent
  },
  {
    path: 'collections/:collectionSlug',
    component: CollectionComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/collections'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
