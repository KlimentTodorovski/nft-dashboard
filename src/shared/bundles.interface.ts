import { AssetContract } from "./asset.interface";
import { Asset } from "./asset.interface";

export interface IBundles {
  bundles: BundleElement[];
}

export interface BundleElement {
  maker:          Maker;
  slug:           string;
  assets:         Asset[];
  name:           string;
  description:    string;
  external_link:  null | string;
  asset_contract: AssetContract;
  permalink:      string;
  sell_orders:    SellOrder[];
}

export interface Maker {
  user:            User;
  profile_img_url: string;
  address:         string;
  config:          string;
}

export interface User {
  username: null | string;
}

export interface SellOrder {
  created_date:           string;
  closing_date:           string;
  closing_extendable:     boolean;
  expiration_time:        number;
  listing_time:           number;
  order_hash:             string;
  metadata:               Metadata;
  exchange:               string;
  maker:                  FeeRecipient;
  taker:                  FeeRecipient;
  current_price:          string;
  current_bounty:         string;
  bounty_multiple:        string;
  maker_relayer_fee:      string;
  taker_relayer_fee:      string;
  maker_protocol_fee:     string;
  taker_protocol_fee:     string;
  maker_referrer_fee:     string;
  fee_recipient:          FeeRecipient;
  fee_method:             number;
  side:                   number;
  sale_kind:              number;
  target:                 string;
  how_to_call:            number;
  calldata:               string;
  replacement_pattern:    string;
  static_target:          string;
  static_extradata:       string;
  payment_token:          string;
  payment_token_contract: PaymentTokenContract;
  base_price:             string;
  extra:                  string;
  quantity:               string;
  salt:                   string;
  v:                      number;
  r:                      string;
  s:                      string;
  approved_on_chain:      boolean;
  cancelled:              boolean;
  finalized:              boolean;
  marked_invalid:         boolean;
  prefixed_hash:          string;
}

export interface FeeRecipient {
  user:            number;
  profile_img_url: string;
  address:         string;
  config:          string;
}

export interface Metadata {
  bundle: MetadataBundle;
}

export interface MetadataBundle {
  assets:      BundelAsset[];
  schemas:     string[];
  name:        string;
  description: string;
}

export interface BundelAsset {
  id:      string;
  address: string;
}

export interface PaymentTokenContract {
  symbol:    string;
  address:   string;
  image_url: string;
  name:      string;
  decimals:  number;
  eth_price: string;
  usd_price: string;
}
