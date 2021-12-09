export enum CoinTypes {
  lore = "lore",
  leadership = "leadership",
  spirit = "spirit",
  tactics = "tactics",
}

export interface ICoins {
  [CoinTypes.leadership]: number;
  [CoinTypes.lore]: number;
  [CoinTypes.spirit]: number;
  [CoinTypes.tactics]: number;
}
