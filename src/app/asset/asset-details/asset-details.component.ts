import { Component, Input, OnInit } from '@angular/core';
import { AssetDetails } from 'src/shared/models/asset.interface';

@Component({
  selector: 'asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  @Input() assetDetails: AssetDetails = {
    contractAddress: '',
    createdDate: new Date(),
    creator: '',
    etherscan: '',
    name: '',
    owner: '',
    tokenId: '',
    description: '',
    ownerAddress: ''
  }

  public ownerEtherscan: string = 'https://etherscan.io/address/';

  constructor() { }

  ngOnInit(): void {
    if (this.assetDetails.ownerAddress) {
      this.ownerEtherscan += this.assetDetails.ownerAddress;
    }
  }
}
