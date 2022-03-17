import { Card, Marketplace } from ".";

/**
 * Collection Types
 */

export interface CollectionCard extends Card {
  valueIncoming?: number;
  valueOutgoing?: number;
  dateIncoming?: Date;
  dateOutgoing?: Date;
}

export interface Collection extends Marketplace {
  ownedBy?: string;
}
