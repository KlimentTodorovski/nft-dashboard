import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAsset } from 'src/shared/models/asset.interface';
import { IAssets } from 'src/shared/models/assets.interface';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit, OnDestroy {

  public assets: IAssets | undefined;
  public _assets: IAsset[] = [];
  public next: string = '';
  public previous: string = '';

  private getAssetsSubscription: Subscription | undefined;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.getAssetsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAssets();
  }

  private getAssets(): void {
    this.getAssetsSubscription = this.dataService
      .getAssets()
      .subscribe((assets: IAssets) => {
        console.log(assets);
        this.assets = assets;
        this.next = assets.next;
        this.previous = assets.previous;
        this._assets = this._assets.concat(assets.assets.filter(x => x.image_url !== null));
      }
    );
  }

  public openCollection(asset: IAsset) {
    const collectionSlug = asset.collection.slug;
    this.router.navigate([`/collections/${collectionSlug}`]);
  }
}
