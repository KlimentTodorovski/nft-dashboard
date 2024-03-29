import { NumberValueAccessor } from "@angular/forms";
import { Stat } from "./collection.stats.interface";

export interface ICollection {
  collection: Collection;
}

export interface Collection {
  editors:                         string[];
  payment_tokens:                  PaymentToken[];
  primary_asset_contracts:         PrimaryAssetContract[];
  traits:                          ITrait;
  stats:                           Stat;
  banner_image_url:                string;
  chat_url:                        null | string;
  created_date:                    string;
  default_to_fiat:                 boolean;
  description:                     string;
  dev_buyer_fee_basis_points:      string;
  dev_seller_fee_basis_points:     string;
  discord_url:                     string;
  display_data:                    DisplayData;
  external_url:                    string;
  featured:                        boolean;
  featured_image_url:              string;
  hidden:                          boolean;
  safelist_request_status:         string;
  image_url:                       string;
  is_subject_to_whitelist:         boolean;
  large_image_url:                 string;
  medium_username:                 null | string;
  name:                            string;
  only_proxied_transfers:          boolean;
  opensea_buyer_fee_basis_points:  string;
  opensea_seller_fee_basis_points: string;
  payout_address:                  string;
  require_email:                   boolean;
  short_description:               null | string;
  slug:                            string;
  telegram_url:                    null | string;
  twitter_username:                null | string;
  instagram_username:              null | string;
  wiki_url:                        null | string;
  is_nsfw:                         boolean;
}

export interface DisplayData {
  card_display_style: string;
}

export interface Editor {
  editor: string;
  link: string;
}

export interface PaymentToken {
  id:        number;
  symbol:    string;
  address:   string;
  image_url: string;
  name:      string;
  decimals:  number;
  eth_price: number;
  usd_price: number;
}

export interface PrimaryAssetContract {
  address:                         string;
  asset_contract_type:             string;
  created_date:                    string;
  name:                            string;
  nft_version:                     string;
  opensea_version:                 null | string;
  owner:                           number;
  schema_name:                     string;
  symbol:                          string;
  total_supply:                    string;
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
  payout_address:                  string;
}

export interface ITrait {
  item: any;
}

export interface CollectionDetails {
  image_url: string;
  banner_image_url: string;
  created_date: string;
  description: string;
  short_description: null | string;
  name: string;
  payout_address: string;
  items_count: number;
  num_owners: number;
  floor_price: number;
  total_volume: number;
  eth_picture: string;
  eth_usd_price: number;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  wiki_url: string;
  slug: string;
  discord_url: string;
  official_url: string;
}
