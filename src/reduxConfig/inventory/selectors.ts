import { RootState } from "../config/rootReducer";
import { CardItem } from "components";
import { CardProps } from "reduxConfig/inventory/slice";

export const inventorySelector = ({ inventory }: RootState) => inventory;

export const inventoryItemSelector = (card: CardProps) => card;

// fetchYears

// fetchProducts

// fetchInserts

// fetchTeams

// fetchAttributes

// fetchMyItems
