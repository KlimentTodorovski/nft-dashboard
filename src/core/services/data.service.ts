import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAsset } from 'src/shared/models/asset.interface';
import { IAssets } from 'src/shared/models/assets.interface';
import { IBundles } from 'src/shared/models/bundles.interface';
import { ICollection } from 'src/shared/models/collection.interface';
import { ICollectionStats } from 'src/shared/models/collection.stats.interface';
import { ICollections } from 'src/shared/models/collections.interface';
import { IContract } from 'src/shared/models/contract.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "https://api.opensea.io/api/v1";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAsset(assetContractAddress: string, tokenId: string): Observable<IAsset> {
    const assetUrl: string = `/asset/${assetContractAddress}/${tokenId}/?include_orders=false`;

    return this.httpClient.get<IAsset>(this.baseUrl + assetUrl)
    .pipe(
      map(asset => {
        return asset;
      })
    );
  }

  public getAssets(next: string = '', collectionSlug: string | null = null): Observable<IAssets> {
    let assetUrl: string = '/assets?limit=50';

    if (next !== '') {
      assetUrl = assetUrl + `&cursor=${next}`;
    }

    if (collectionSlug) {
      assetUrl = assetUrl + `&collection=${collectionSlug}`;
    }

    return this.httpClient.get<IAssets>(this.baseUrl + assetUrl)
    .pipe(
      map(assets => {
        return assets;
      })
    );
  }

  public getBundles(): Observable<IBundles> {
    const bundlesUrl: string = '/bundles?limit=20&offset=0';

    return this.httpClient.get<IBundles>(this.baseUrl + bundlesUrl)
    .pipe(
      map(bundles => {
        return bundles;
      })
    );
  }

  public getCollection(collection_slug: string): Observable<ICollection> {
    const collectionUrl: string = `/collection/${collection_slug}`;

    return this.httpClient.get<ICollection>(this.baseUrl + collectionUrl)
      .pipe(
        map(collection => {
          console.log(collection);
          return collection;
        })
      );
  }

  public getCollectionStats(collection_slug: string): Observable<ICollectionStats> {
    const collectionStatsUrl: string = `/collection/${collection_slug}/stats`;

    return this.httpClient.get<ICollectionStats>(this.baseUrl + collectionStatsUrl)
    .pipe(
      map(collectionStats => {
        return collectionStats;
      })
    );
  }

  public getCollections(): Observable<ICollections> {
    const collectionUrl: string = '/collections?limit=100'

    return this.httpClient.get<ICollections>(this.baseUrl + collectionUrl)
      .pipe(
        map(collections => {
          return collections;
        })
      );
  }

  public getContract(asset_contract_address: string): Observable<IContract> {
    const contractnUrl: string = `/asset_contract/${asset_contract_address}`;

    return this.httpClient.get<IContract>(this.baseUrl + contractnUrl)
      .pipe(
        map(contract => {
          return contract;
        })
      );
  }
}
