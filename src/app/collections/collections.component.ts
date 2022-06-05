import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { ICollections } from 'src/shared/collections.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit, OnDestroy {

  public collections: ICollections | undefined;

  private getCollectionsSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnDestroy(): void {
    this.getCollectionsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getCollections();
  }

  public goToCollection(): void {
    this.router.navigate([3, 'assets'], {relativeTo: this.route});
  }

  private getCollections(): void {
    this.getCollectionsSubscription = this.dataService
      .getCollections()
      .subscribe((collections: ICollections) => {
        this.collections = collections;
      }
    );
  }
}
