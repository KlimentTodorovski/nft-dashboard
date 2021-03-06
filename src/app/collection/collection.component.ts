import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAssets } from 'src/shared/models/assets.interface';
import { CollectionDetails, ICollection } from 'src/shared/models/collection.interface';
import { CollectionStatsVolume, CollectionStatsSales, CollectionStatsAveragePrice, Stat } from 'src/shared/models/collection.stats.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  public collection: ICollection | undefined;
  public assets: IAssets | undefined;

  public slug: string = '';
  public gettingData: boolean = true;

  private getCollectionSubscription: Subscription | undefined;
  private getAssetsSubscription: Subscription | undefined;
  private next: string = '';

  public collectionDetails: CollectionDetails = {
    image_url: '',
    banner_image_url: '',
    created_date: '',
    description: '',
    name: '',
    payout_address: '',
    short_description: '',
    floor_price: 0,
    items_count: 0,
    num_owners: 0,
    total_volume: 0,
    eth_picture: ''
  }

  public collectionStatsVolume: CollectionStatsVolume = {
    one_day_volume: 0,
    seven_day_volume: 0,
    thirty_day_volume: 0,
    total_volume: 0
  }

  public collectionStatsSales: CollectionStatsSales = {
    one_day_sales: 0,
    seven_day_sales: 0,
    thirty_day_sales: 0,
    total_sales: 0
  }

  public collectionStatsAveragePrice: CollectionStatsAveragePrice = {
    one_day_average_price: 0,
    seven_day_average_price: 0,
    thirty_day_average_price: 0,
    average_price: 0
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnDestroy(): void {
    this.getCollectionSubscription?.unsubscribe();
    this.getAssetsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const collectionSlug = params.get('collectionSlug');

      if (collectionSlug) {
        this.slug = collectionSlug;
      }
    });

    if (this.slug) {
      this.getCollection();
      this.getAssets();
    }
  }

  private getAssets(): void {
    if (this.slug) {
      this.getAssetsSubscription = this.dataService
        .getAssets(this.next, this.slug)
        .subscribe((assets: IAssets) => {
          this.assets = assets;
          this.gettingData = false;
        }
      );
    }
  }

  private getCollection(): void {
    if (this.slug) {
      this.getCollectionSubscription = this.dataService
        .getCollection(this.slug)
        .subscribe({
          next: (collection: ICollection) => {
            this.collection = collection;
            this.mapToCollectionDetails(collection);
            this.mapToCollectionStats(collection.collection.stats);
          },
          error: () => {
            this.navigateToErrorPage();
          }}
      );
    }
  }

  private mapToCollectionDetails(collection: ICollection): void {
    this.collectionDetails.image_url = collection.collection.image_url;
    this.collectionDetails.banner_image_url = collection.collection.banner_image_url;
    this.collectionDetails.created_date = collection.collection.created_date;
    this.collectionDetails.description = collection.collection.description;
    this.collectionDetails.name = collection.collection.name;
    this.collectionDetails.payout_address = collection.collection.payout_address;
    this.collectionDetails.short_description = collection.collection.short_description;
    this.collectionDetails.floor_price = collection.collection.stats.floor_price;
    this.collectionDetails.items_count = collection.collection.stats.count;
    this.collectionDetails.num_owners = collection.collection.stats.num_owners;
    this.collectionDetails.total_volume = collection.collection.stats.total_volume;
    this.collectionDetails.eth_picture = collection.collection.payment_tokens[0].image_url;
  }

  private mapToCollectionStats(stats: Stat): void {
    this.mapToCollectionStatsVolume(stats);
    this.mapToCollectionStatsSales(stats);
    this.mapToCollectionStatsAveragePrice(stats);
  }

  private mapToCollectionStatsVolume(stats: Stat): void {
    this.collectionStatsVolume.one_day_volume = stats.one_day_volume;
    this.collectionStatsVolume.seven_day_volume = stats.seven_day_volume;
    this.collectionStatsVolume.thirty_day_volume = stats.thirty_day_volume;
    this.collectionStatsVolume.total_volume = stats.total_volume;
  }

  private mapToCollectionStatsSales(stats: Stat) {
    this.collectionStatsSales.one_day_sales = stats.one_day_sales;
    this.collectionStatsSales.seven_day_sales = stats.seven_day_sales;
    this.collectionStatsSales.thirty_day_sales = stats.thirty_day_sales;
    this.collectionStatsSales.total_sales = stats.total_sales
  }

  private mapToCollectionStatsAveragePrice(stats: Stat) {
    this.collectionStatsAveragePrice.one_day_average_price = stats.one_day_average_price;
    this.collectionStatsAveragePrice.seven_day_average_price = stats.seven_day_average_price;
    this.collectionStatsAveragePrice.thirty_day_average_price = stats.thirty_day_average_price;
    this.collectionStatsAveragePrice.average_price = stats.average_price;
  }

  private navigateToErrorPage(): void {
    this.router.navigate(['/error'],
      {
        queryParams: {
          collectionSlug: this.slug
        }
      }
    );
  }
}
