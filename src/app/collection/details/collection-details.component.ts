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
    short_description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
