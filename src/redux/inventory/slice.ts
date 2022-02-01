import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { mockInventory } from "../mocks/inventory";
import rootReducer from "redux/rootReducer";

interface Card {
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
}

export interface Product {
  cards: Card[];
  genre: string;
  manufacturer: string;
  productName: string;
  year: string | number;
}

export interface InventoryProps {
  error: boolean;
  errorMessage: string;
  inventory: Product[];
  loading: boolean;
}

export const initialState: InventoryProps = {
  error: false,
  errorMessage: "",
  inventory: [],
  loading: false,
};

// asyncThunk generate three extraReducers
export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  () => {
    try {
      return { ...initialState, inventory: mockInventory };
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addToInventory: (state, action: PayloadAction<string>) => {
      console.log("action: ", action);
      console.log("state: ", state);
    },
    removeFromInventory: (state, action: PayloadAction<string>) => {
      console.log("action: ", action);
      console.log("state: ", state);
    },
  },
});

export const {
  actions: { addToInventory, removeFromInventory },
} = inventorySlice;

export type InventoryState = ReturnType<typeof inventorySlice.reducer>;
