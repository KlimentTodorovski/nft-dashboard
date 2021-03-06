import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { CollectionDetails } from 'src/shared/models/collection.interface';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollectionDetailsComponent implements OnInit {

  @Input() collectionDetails: CollectionDetails = {
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
  };

  public etherscan: string = 'https://etherscan.io/address/';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.etherscan += this.collectionDetails.payout_address;

    this.collectionDetails.total_volume = Math.round((this.collectionDetails.total_volume + Number.EPSILON) * 1000) / 1000;
    this.collectionDetails.floor_price = Math.round((this.collectionDetails.floor_price + Number.EPSILON) * 1000) / 1000;
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      panelClass: 'no-padding-dialog',
      data: {
        imageUrl: this.collectionDetails.image_url
      }
    });
  }
}
