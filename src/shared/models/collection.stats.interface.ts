export interface ICollectionStats {
  stats: Stat;
}

export interface Stat {
  one_day_volume: number
  one_day_change: number
  one_day_sales: number
  one_day_average_price: number
  seven_day_volume: number
  seven_day_change: number
  seven_day_sales: number
  seven_day_average_price: number
  thirty_day_volume: number
  thirty_day_change: number
  thirty_day_sales: number
  thirty_day_average_price: number
  total_volume: number
  total_sales: number
  total_supply: number
  count: number
  num_owners: number
  average_price: number
  num_reports: number
  market_cap: number
  floor_price: number
}

export interface CollectionStatsVolume {
  one_day_volume: number
  seven_day_volume: number
  thirty_day_volume: number
  total_volume: number
}

export interface CollectionStatsChange {
  one_day_change: number
  seven_day_change: number
  thirty_day_change: number
}

export interface CollectionStatsSales {
  one_day_sales: number
  seven_day_sales: number
  thirty_day_sales: number
  total_sales: number
}

export interface CollectionStatsAveragePrice {
  one_day_average_price: number
  seven_day_average_price: number
  thirty_day_average_price: number
  average_price: number
}
