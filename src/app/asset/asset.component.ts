import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAsset } from 'src/shared/models/asset.interface';

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

  private getAssetSubscription: Subscription | undefined;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.getAssetSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.assetContractAddress = params.get('assetContractAddress')!;
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
        this.gettingData = false;
      }
    );
  }
}
