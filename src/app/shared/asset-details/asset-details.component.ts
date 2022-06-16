import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  @Input() name: string = '';
  @Input() owner: string = '';
  @Input() contractAddress: string = '';
  @Input() tokenId: string = '';
  @Input() createdDate: string = '';
  @Input() creator: string = '';
  @Input() etherscan: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
