import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { ICollections } from 'src/shared/collections.interface';
import { MatTableDataSource } from '@angular/material/table'
import { Collection } from 'src/shared/collection.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit, OnDestroy, AfterViewInit {

  public displayedColumns: string[] = ["name", "one_day_volume", "seven_day_volume", "floor_price", "num_owners", "count"];
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
    //this.getCollectionStats();
  }

  public goToCollection(): void {
    this.router.navigate([3, 'assets'], {relativeTo: this.route});
  }

  private getCollections(): void {
    this.getCollectionsSubscription = this.dataService
      .getCollections()
      .subscribe((collections: ICollections) => {
        this.dataSource = new MatTableDataSource(collections.collections);

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

  public getRecord(row: Collection): void {
    this.router.navigate([row.slug, 'assets'], {relativeTo: this.route});
  }
}
