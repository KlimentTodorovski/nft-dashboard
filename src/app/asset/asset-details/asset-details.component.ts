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
    createdDate: '',
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
    console.log(this.assetDetails.name);
    if (this.assetDetails.ownerAddress) {
      this.ownerEtherscan += this.assetDetails.ownerAddress;
    }
  }

}
