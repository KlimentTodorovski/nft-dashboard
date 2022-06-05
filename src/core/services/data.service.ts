import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAsset } from 'src/shared/asset.interface';
import { IAssets } from 'src/shared/assets.interface';
import { IBundles } from 'src/shared/bundles.interface';
import { ICollection } from 'src/shared/collection.interface';
import { ICollectionStats } from 'src/shared/collection.stats.interface';
import { ICollections } from 'src/shared/collections.interface';
import { IContract } from 'src/shared/contract.interface';

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

  public getAssets(collectionSlug: string): Observable<IAssets> {
    const assetUrl: string = `/assets?order_direction=desc&limit=20&include_orders=false&collection=${collectionSlug}`;

    return this.httpClient.get<IAssets>(this.baseUrl + assetUrl)
    .pipe(
      map(asset => {
        return asset;
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
    const collectionUrl: string = '/collections?offset=0&limit=10'

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
