import { Component, Input, OnInit } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
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
    ownerAddress: '',
    creatorAddress: ''
  }

  public ownerEtherscan: string = 'https://etherscan.io/address/';
  public creatorEtherscan: string = 'https://etherscan.io/address/';

  public owner: string = 'Owner';
  public creator: string = 'Creator';

  public faIconExternalLink = faExternalLink;

  constructor() { }

  ngOnInit(): void {
    if (this.assetDetails.ownerAddress) {
      this.ownerEtherscan += this.assetDetails.ownerAddress;
      this.creatorEtherscan += this.assetDetails.creatorAddress;
    }

    if (this.assetDetails.owner) {
      this.owner = this.assetDetails.owner;
    }

    if (this.assetDetails.creator) {
      this.creator = this.assetDetails.creator;
    }
  }
}
