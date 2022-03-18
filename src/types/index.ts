export * from "./collection";
export * from "./marketplace";
export * from "./productDB";

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
  odds?: string;
  owner?: string;
  id: string | number;
}

export interface Status {
  error: string | null;
  status: "idle" | "pending" | "fulfilled" | "rejected";
}
