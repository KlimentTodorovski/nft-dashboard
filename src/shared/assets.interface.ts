import { IAsset } from "./asset.interface";

export interface IAssets {
  next:     string;
  previous: null;
  assets:   IAsset[];
}
