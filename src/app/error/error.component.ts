import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  public errorMessage: string = '';

  private routeSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.queryParams
      .subscribe(params => {
        if (params['collectionSlug']) {
          this.errorMessage = `The collection: ${params['collectionSlug']} does not exists.`;
        } else if (params['contractAddress'] && params['tokenId'] === "0") {
          this.errorMessage = 'The format for asset search should be "Contract address / token ID".';
        } else if (params['contractAddress'] && params['tokenId']) {
          this.errorMessage = `The asset with contract address: ${params['contractAddress']} and token id: ${params['tokenId']} does not exists.`;
        }
      }
    );
  }
}
