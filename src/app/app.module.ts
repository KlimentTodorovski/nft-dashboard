import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetComponent } from './asset/asset.component';
import { CollectionComponent } from './collection/collection.component';
import { CoreModule } from 'src/core/core.module';
import { MaterialExampleModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets/assets.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TraitsComponent } from './asset/asset-traits/traits.component';
import { AssetDetailsComponent } from './asset/asset-details/asset-details.component';
import { CollectionDetailsComponent } from './collection/details/collection-details.component';
import { StatsComponent } from './collection/stats/stats.component';
import { EditorsComponent } from './collection/editors/editors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandTextComponent } from './shared/expand-text/expand-text.component';
import { DialogComponent } from './shared/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AssetComponent,
    AssetsComponent,
    LoadingSpinnerComponent,
    TraitsComponent,
    AssetDetailsComponent,
    CollectionDetailsComponent,
    StatsComponent,
    EditorsComponent,
    ExpandTextComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialExampleModule,
    InfiniteScrollModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
