import { Component, Input, OnInit } from '@angular/core';
import { CollectionDetails } from 'src/shared/models/collection.interface';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
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

  constructor() { }

  ngOnInit(): void {
    this.etherscan += this.collectionDetails.payout_address;
  }

}
