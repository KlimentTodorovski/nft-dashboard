import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAssets } from 'src/shared/models/assets.interface';
import { ICollection } from 'src/shared/models/collection.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  public collection: ICollection | undefined;
  public assets: IAssets | undefined;

  public slug: string | null = '';
  public gettingData: boolean = true;

  private getCollectionSubscription: Subscription | undefined;
  private getAssetsSubscription: Subscription | undefined;

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
    this.getCollection();

    this.route.paramMap.subscribe(params => {
      this.slug = params.get('collectionSlug');
    })

    if (this.slug) {
      this.getAssets(this.slug);
    }
  }

  public goToAsset(): void {
    this.router.navigate([3], {relativeTo: this.route});
  }

  private getAssets(collectionSlug: string): void {
    this.getAssetsSubscription = this.dataService
      .getAssets(collectionSlug)
      .subscribe((assets: IAssets) => {
        this.assets = assets;
        this.gettingData = false;
      }
    );
  }

  private getCollection(): void {
    if (this.slug) {
      this.getCollectionSubscription = this.dataService
        .getCollection(this.slug)
        .subscribe((collection: ICollection) => {
          this.collection = collection;
        }
      );
    }
  }
}
