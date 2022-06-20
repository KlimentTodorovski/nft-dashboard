import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { AssetDetails, IAsset } from 'src/shared/models/asset.interface';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit, OnDestroy {

  public asset: IAsset | undefined;
  public assetContractAddress: string = '';
  public tokenId: string = '';
  public gettingData: boolean = true;
  public etherscan: string = 'https://etherscan.io/address/';

  private getAssetSubscription: Subscription | undefined;

  public assetDetails: AssetDetails = {
    contractAddress: '',
    createdDate: '',
    creator: '',
    etherscan: '',
    name: '',
    owner: '',
    tokenId: ''
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.getAssetSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.assetContractAddress = params.get('assetContractAddress')!;
      this.etherscan += this.assetContractAddress;

      this.tokenId = params.get('tokenId')!;
    })

    this.getAsset();
  }

  private getAsset(): void {
    this.getAssetSubscription = this.dataService
      .getAsset(this.assetContractAddress, this.tokenId)
      .subscribe((asset: IAsset) => {
        this.asset = asset;
        console.log(asset);
        this.mapToAssetDetails(asset);
        this.gettingData = false;
      }
    );
  }

  public openCollection(): void {
    if (this.asset) {
      this.router.navigate([`/collections/${this.asset.collection.slug}`]);
    }
  }

  private mapToAssetDetails(asset: IAsset) {
    this.assetDetails.contractAddress = this.assetContractAddress;
    this.assetDetails.createdDate = asset.asset_contract.created_date;
    this.assetDetails.creator = asset.creator.user.username;
    this.assetDetails.etherscan = this.etherscan;
    this.assetDetails.name = asset.name;
    this.assetDetails.owner = asset.owner.user.username;
    this.assetDetails.tokenId = this.tokenId;
  }
}
