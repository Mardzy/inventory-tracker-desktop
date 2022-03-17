import { CollectionCard } from "./collection";
import { SerializedError } from "@reduxjs/toolkit";

export * from "./collection";

export interface Card {
  cardId: string;
  description: string;
  teamCity?: string;
  teamName?: string;
  rookie?: string;
  auto?: string;
  memorabilia?: string;
  serialNumbered?: number;
  setName: string;
  cardThickness: number;
  ownedBy?: string;
  id: string;
}

export interface Product {
  items: Card[] | CollectionCard[];
  genre: string;
  manufacturer: string;
  productName: string;
  year: string | number;
}

export interface Marketplace {
  error?: string | SerializedError | null;
  products: Product[];
  loading: boolean;
}
