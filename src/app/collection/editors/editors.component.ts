import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { Editor } from 'src/shared/models/collection.interface';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {

  @Input() editors: string[] = [];
  private _editors: Editor[] = [];
  public etherscan: string = 'https://etherscan.io/address/';

  public dataSource: MatTableDataSource<Editor> = new MatTableDataSource();
  public faIconExternalLink = faExternalLink;
  public displayedColumns: string[] = [
    "editor",
    "link"
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
    this.editors.forEach(element => {
      let item: Editor = {
        editor: element,
        link: this.etherscan + element
      };

      this._editors.push(item);
    });

    this.dataSource.data = this._editors;

    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'editor') {
        return item.editor;
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
