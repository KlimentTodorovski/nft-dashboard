import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Collection } from 'src/shared/models/collection.interface';
import { ICollections } from 'src/shared/models/collections.interface';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit, OnDestroy, AfterViewInit {

  public displayedColumns: string[] = [
    "name",
    "one_day_volume",
    "seven_day_volume",
    "thirty_day_volume",
    "floor_price",
    "num_owners",
  ];

  public dataSource: MatTableDataSource<Collection> = new MatTableDataSource();

  private getCollectionsSubscription: Subscription | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.getCollectionsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getCollections();

    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'name') {
        return item.name;
      } else if (property === 'one_day_volume') {
        return item.stats.one_day_volume;
      } else if (property === 'seven_day_volume') {
        return item.stats.seven_day_volume;
      } else if (property === 'thirty_day_volume') {
        return item.stats.thirty_day_volume;
      }  else if (property === 'floor_price') {
         return item.stats.floor_price;
      } else if (property === 'num_owners') {
         return item.stats.num_owners;
      }

      return 0;
    };
    //this.getCollectionStats();
  }

  private getCollections(): void {
    this.getCollectionsSubscription = this.dataService
      .getCollections()
      .subscribe((collections: ICollections) => {
        this.dataSource.data = collections.collections;

        if (this.paginator)
          this.dataSource.paginator = this.paginator;
      }
    );
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public goTodetails (row: Collection): void {
    this.router.navigate([row.slug, 'assets'], {relativeTo: this.route});
  }
}
