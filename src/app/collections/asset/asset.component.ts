import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IAsset } from 'src/shared/asset.interface';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit, OnDestroy {

  public asset: IAsset | undefined;

  private getAssetSubscription: Subscription | undefined;

  constructor(
    private dataService: DataService
  ) { }

  ngOnDestroy(): void {
    this.getAssetSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAsset('0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', '1');
  }

  private getAsset(assetContractAddress: string, tokenId: string): void {
    this.getAssetSubscription = this.dataService
      .getAsset(assetContractAddress, tokenId)
      .subscribe((asset: IAsset) => {
        this.asset = asset;
      }
    );
  }
}
