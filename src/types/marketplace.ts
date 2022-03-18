import { CollectionCard } from "@types";

export interface MarketplaceCard extends CollectionCard {
  owner: string;
}

export interface Marketplace {
  marketplace: MarketplaceCard[];
}
