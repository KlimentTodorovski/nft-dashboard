import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAssets } from 'src/shared/models/assets.interface';
import { CollectionDetails, ICollection } from 'src/shared/models/collection.interface';

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
  private previous: string = '';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

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
        .subscribe((collection: ICollection) => {
          this.collection = collection;
          this.mapToCollectionDetails(collection);
        }
      );
    }
  }

  mapToCollectionDetails(collection: ICollection): void {
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
}
