import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAsset, ICollection, ICollections, ICollectionStats } from 'src/shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'nft-dashboard';

  public collection: ICollection | undefined;
  public collections: ICollections | undefined;
  public asset: IAsset | undefined;
  public collectionStats: ICollectionStats | undefined;

  public subscribtion1: Subscription | undefined;
  public subscribtion2: Subscription | undefined;
  public subscribtion3: Subscription | undefined;
  public subscribtion4: Subscription | undefined;

  constructor(
    private dataService: DataService
  ) { }

  ngOnDestroy(): void {
    this.subscribtion1?.unsubscribe();
    this.subscribtion2?.unsubscribe();
    this.subscribtion3?.unsubscribe();
    this.subscribtion4?.unsubscribe();
  }

  ngOnInit(): void {
    this.getCollections();
    this.getCollection();
    this.getAsset();
    this.getCollectionStats();
  }

  private getCollections(): void {
    this.subscribtion1 = this.dataService
      .getCollections()
      .subscribe((collections: ICollections) => {
        this.collections = collections;
      }
    );
  }

  private getCollection(): void {
    this.subscribtion2 = this.dataService
      .getCollection('doodles-official')
      .subscribe((collection: ICollection) => {
        this.collection = collection;
      }
    );
  }

  private getAsset(): void {
    this.subscribtion3 = this.dataService
      .getAsset()
      .subscribe((asset: IAsset) => {
        this.asset = asset;
      }
    );
  }

  private getCollectionStats(): void {
    this.subscribtion4 = this.dataService
      .getCollectionStats()
      .subscribe((collectionStats: ICollectionStats) => {
        this.collectionStats = collectionStats;
      }
    );
  }
}
