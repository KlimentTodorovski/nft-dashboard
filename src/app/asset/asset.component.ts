import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { AssetDetails, IAsset } from 'src/shared/models/asset.interface';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssetComponent implements OnInit, OnDestroy {

  public asset: IAsset | undefined;
  public assetContractAddress: string = '';
  public tokenId: string = '';
  public gettingData: boolean = true;
  public etherscan: string = 'https://etherscan.io/address/';

  private getAssetSubscription: Subscription | undefined;
  private getRouteParamsSubscription: Subscription | undefined;

  public assetDetails: AssetDetails = {
    contractAddress: '',
    createdDate: new Date(),
    creator: '',
    creatorAddress: '',
    etherscan: '',
    name: '',
    owner: '',
    tokenId: '',
    description: '',
    ownerAddress: ''
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnDestroy(): void {
    this.getAssetSubscription?.unsubscribe();
    this.getRouteParamsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getRouteParamsSubscription = this.route.paramMap.
      subscribe(params => {
      this.assetContractAddress = params.get('assetContractAddress')!;
      this.etherscan += this.assetContractAddress;

      this.tokenId = params.get('tokenId')!;

      this.getAsset();
    });
  }

  private getAsset(): void {
    this.getAssetSubscription = this.dataService
      .getAsset(this.assetContractAddress, this.tokenId)
      .subscribe({
        next: (asset: IAsset) => {
          this.asset = asset;
          console.log(asset);
          this.mapToAssetDetails(asset);
          this.gettingData = false;
        },
        error: () => {
          this.navigateToErrorPage();
        }}
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
    this.assetDetails.name = asset.name ?? 'N/A';
    this.assetDetails.owner = asset.top_ownerships[0].owner.user?.username ?? '';
    this.assetDetails.ownerAddress = asset.top_ownerships[0].owner.address;
    this.assetDetails.tokenId = this.tokenId;
    this.assetDetails.description = asset.description ?? '';
    this.assetDetails.creatorAddress = asset.creator.address ?? '';
  }

  public openDialog(): void {
    this.dialog.open(DialogComponent, {
      panelClass: 'no-padding-dialog',
      data: {
        imageUrl: this.asset?.image_url
      }
    });
  }

  private navigateToErrorPage(): void {
    this.router.navigate(['/error'],
      {
        queryParams: {
          contractAddress: this.assetContractAddress,
          tokenId: this.tokenId
        }
      }
    );
  }
}
