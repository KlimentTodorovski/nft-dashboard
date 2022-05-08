import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAsset, ICollection, ICollections, ICollectionStats } from 'src/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "https://api.opensea.io/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCollection(slug: string): Observable<ICollection> {
    const collectionUrl: string = 'api/v1/collection/'

    return this.httpClient.get<ICollection>(this.baseUrl + collectionUrl + slug)
      .pipe(
        map(collection => {
          return collection;
        })
      );
  }

  public getCollections(): Observable<ICollections> {
    const collectionUrl: string = 'api/v1/collections?offset=0&limit=10'

    return this.httpClient.get<ICollections>(this.baseUrl + collectionUrl)
      .pipe(
        map(collections => {
          return collections;
        })
      );
  }

  public getAsset(): Observable<IAsset> {
    const assetUrl: string = 'api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/?include_orders=false';

    return this.httpClient.get<IAsset>(this.baseUrl + assetUrl)
    .pipe(
      map(asset => {
        return asset;
      })
    );
  }

  public getCollectionStats(): Observable<ICollectionStats> {
    const collectionStatsUrl: string = 'api/v1/collection/doodles-official/stats';

    return this.httpClient.get<ICollectionStats>(this.baseUrl + collectionStatsUrl)
    .pipe(
      map(collectionStats => {
        return collectionStats;
      })
    );
  }
}
