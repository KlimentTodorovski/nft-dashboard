import { Collection } from "./collection.interface";

export interface IAsset {
  id:                         number;
  num_sales:                  number;
  background_color:           null | string;
  image_url:                  string;
  image_preview_url:          string;
  image_thumbnail_url:        string;
  image_original_url:         string;
  animation_url:              null | string;
  animation_original_url:     null | string;
  name:                       null | string;
  description:                null | string;
  external_link:              string;
  asset_contract:             AssetContract;
  permalink:                  string;
  collection:                 Collection;
  decimals:                   null | string;
  token_metadata:             string;
  is_nsfw:                    boolean;
  owner:                      Creator;
  sell_orders:                null | string;
  creator:                    Creator;
  traits:                     Trait[];
  last_sale:                  LastSale;
  top_bid:                    null | string;
  listing_date:               null | string;
  is_presale:                 boolean;
  transfer_fee_payment_token: null | string;
  transfer_fee:               null | string;
  related_assets:             any[];
  orders:                     null | string;
  auctions:                   any[];
  supports_wyvern:            boolean;
  top_ownerships:             TopOwnership[];
  ownership:                  null | string;
  highest_buyer_commitment:   null | string;
  token_id:                   string;
}

export interface AssetContract {
  address:                         string;
  asset_contract_type:             string;
  created_date:                    Date;
  name:                            string;
  nft_version:                     string;
  opensea_version:                 null | string;
  owner:                           null | string;
  schema_name:                     string;
  symbol:                          string;
  total_supply:                    null | string;
  description:                     string;
  external_link:                   string;
  image_url:                       string;
  default_to_fiat:                 boolean;
  dev_buyer_fee_basis_points:      number;
  dev_seller_fee_basis_points:     number;
  only_proxied_transfers:          boolean;
  opensea_buyer_fee_basis_points:  number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points:          number;
  seller_fee_basis_points:         number;
  payout_address:                  null | string;
}

export interface Creator {
  user:            User;
  profile_img_url: string;
  address:         string;
  config:          string;
}

export interface User {
  username: string;
}

export interface LastSale {
  asset:           Asset;
  asset_bundle:    null | string;
  event_type:      string;
  event_timestamp: string;
  auction_type:    null | string;
  total_price:     string;
  payment_token:   LastSalePaymentToken;
  transaction:     Transaction;
  created_date:    string;
  quantity:        string;
}

export interface Asset {
  decimals: null | string;
  token_id: string;
}

export interface LastSalePaymentToken {
  symbol:    string;
  address:   string;
  image_url: string;
  name:      string;
  decimals:  number;
  eth_price: string;
  usd_price: string;
}

export interface Transaction {
  block_hash:        string;
  block_number:      string;
  from_account:      Creator;
  id:                number;
  timestamp:         string;
  to_account:        Creator;
  transaction_hash:  string;
  transaction_index: string;
}

export interface TopOwnership {
  owner:    Creator;
  quantity: string;
}

export interface Trait {
  trait_type:   string;
  value:        string;
  trait_count:  number;
}

export interface AssetDetails {
  name: string;
  owner: string;
  contractAddress: string;
  tokenId: string;
  etherscan: string;
  creator: string;
  creatorAddress: string;
  createdDate: Date;
  description: string;
  ownerAddress: string;
}
