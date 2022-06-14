import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAsset } from 'src/shared/asset.interface';
import { IAssets } from 'src/shared/assets.interface';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit, OnDestroy {

  public assets: IAssets | undefined;
  public _assets: IAsset[] = [];

  private getAssetsSubscription: Subscription | undefined;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.getAssetsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAssets('');
  }

  private getAssets(collectionSlug: string): void {
    this.getAssetsSubscription = this.dataService
      .getAssets(collectionSlug)
      .subscribe((assets: IAssets) => {
        this.assets = assets;
        this._assets = this._assets.concat(assets.assets.filter(x => x.image_url !== null));
      }
    );
  }

  public openCollection(asset: IAsset) {
    const collectionSlug = asset.collection.slug;
    this.router.navigate([`/collections/${collectionSlug}/assets`]);
  }
}
