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

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AssetComponent,
    AssetsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialExampleModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
