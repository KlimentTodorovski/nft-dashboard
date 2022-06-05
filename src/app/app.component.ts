import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAsset } from 'src/shared/asset.interface';
import { IAssets } from 'src/shared/assets.interface';
import { IBundles } from 'src/shared/bundles.interface';
import { ICollection } from 'src/shared/collection.interface';
import { ICollectionStats } from 'src/shared/collection.stats.interface';
import { ICollections } from 'src/shared/collections.interface';
import { IContract } from 'src/shared/contract.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'nft-dashboard';

  public asset: IAsset | undefined;
  public assets: IAssets | undefined;
  public bundles: IBundles | undefined;
  public collection: ICollection | undefined;
  public collectionStats: ICollectionStats | undefined;
  public collections: ICollections | undefined;
  public contract: IContract | undefined;

  public subscribtion1: Subscription | undefined;
  public subscribtion2: Subscription | undefined;
  public subscribtion3: Subscription | undefined;
  public subscribtion4: Subscription | undefined;
  public subscribtion5: Subscription | undefined;
  public subscribtion6: Subscription | undefined;
  public subscribtion7: Subscription | undefined;

  constructor(
    private dataService: DataService
  ) { }

  ngOnDestroy(): void {
    this.subscribtion1?.unsubscribe();
    this.subscribtion2?.unsubscribe();
    this.subscribtion3?.unsubscribe();
    this.subscribtion4?.unsubscribe();
    this.subscribtion5?.unsubscribe();
    this.subscribtion6?.unsubscribe();
    this.subscribtion7?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAsset();
    this.getAssets();
    this.getBundles();
    this.getCollection();
    this.getCollectionStats();
    this.getCollections();
    this.getContracts();
  }

  private getAssets(): void {
    this.subscribtion1 = this.dataService
      .getAssets('doodles-official')
      .subscribe((assets: IAssets) => {
        this.assets = assets;
      }
    );
  }

  private getAsset(): void {
    this.subscribtion2 = this.dataService
      .getAsset('0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', '1')
      .subscribe((asset: IAsset) => {
        this.asset = asset;
      }
    );
  }

  private getBundles(): void {
    this.subscribtion3 = this.dataService
      .getBundles()
      .subscribe((bundles: IBundles) => {
        this.bundles = bundles;
      }
    );
  }

  private getCollection(): void {
    this.subscribtion4 = this.dataService
      .getCollection('doodles-official')
      .subscribe((collection: ICollection) => {
        this.collection = collection;
      }
    );
  }

  private getCollectionStats(): void {
    this.subscribtion5 = this.dataService
      .getCollectionStats('doodles-official')
      .subscribe((collectionStats: ICollectionStats) => {
        this.collectionStats = collectionStats;
      }
    );
  }

  private getCollections(): void {
    this.subscribtion6 = this.dataService
      .getCollections()
      .subscribe((collections: ICollections) => {
        this.collections = collections;
      }
    );
  }

  private getContracts(): void {
    this.subscribtion7 = this.dataService
      .getContract('0x06012c8cf97bead5deae237070f9587f8e7a266d')
      .subscribe((contract: IContract) => {
        this.contract = contract;
      }
    );
  }
}
