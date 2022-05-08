export interface IAsset {
  token_id: number,
  image_url: string,
  background_color: string,
  name: string,
  external_link: string,
  asset_contract: IAssetContract,
  owner: IAccount,
  traits: ITrait [],
  last_sale: string //not a string,
}

export interface ITrait {
  trait_type: string,
  value: string | number,
  display_type: string | number
}

export interface IAssetContract {
  address: string,
  name: string,
  symbol: string,
  image_url: string,
  description: string,
  external_link: string
}

export interface IAccount {
  address: string,
  user: IUser,
  config: string
}

export interface IUser {
  username: string
}

export interface ICollections {
  collections: IOpenSeaCollection []
}

export interface ICollection {
  collection: IOpenSeaCollection
}

export interface ICollectionStats {
  stats: IStat
}

export interface IOpenSeaCollection {
  name: string,
  external_link: string,
  description: string,
  slug: string,
  image_url: string,
  banner_image_url: string,
  dev_seller_fee_basis_points: string,
  safelist_request_status: string,
  payout_address: string,
  primary_asset_contracts: string // not a string,
  traits: string // not a string,
  payment_tokens: IPaymentToken [],
  editors: string [],
  stats: IStat []
}

export interface IPaymentToken {
  id: number,
  symbol: string,
  address: string,
  image_url: string,
  name: string,
  decimals: number,
  eth_price: number,
  usd_price: number
}

export interface IStat {
  one_day_volume: number,
  one_day_change: number,
  one_day_sales: number,
  one_day_average_price: number,
  seven_day_volume: number,
  seven_day_change: number,
  seven_day_sales: number,
  seven_day_average_price: number,
  thirty_day_volume: number,
  thirty_day_change: number,
  thirty_day_sales: number,
  thirty_day_average_price: number,
  total_volume: number,
  total_sales: number,
  total_supply: number,
  count: number,
  num_owners: number,
  average_price: number,
  num_reports: number,
  market_cap: number,
  floor_price: number
}
