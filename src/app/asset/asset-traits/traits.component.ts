import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Trait } from 'src/shared/models/asset.interface';
import { faFolderBlank } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'asset-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent implements OnInit, AfterViewInit {

  @Input() traits: Trait[] = [];
  @Input() pagination: number[] = [];

  public dataSource: MatTableDataSource<Trait> = new MatTableDataSource();
  public faIcon = faFolderBlank;
  public displayedColumns: string[] = [
    "trait_type",
    "value",
    "trait_count"
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    if (this.paginator)
      this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.data = this.traits;

    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'trait_type') {
        return item.trait_type;
      } else if (property === 'value') {
        return item.value;
      } else if (property === 'trait_count') {
        return item.trait_count;
      }

      return 0;
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
