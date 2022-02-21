import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";

import { mockInventory } from "../mocks/inventory";

export interface CardProps {
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
  cards: CardProps[];
  genre: string;
  manufacturer: string;
  productName: string;
  year: string | number;
}

export interface InventoryProps {
  error: boolean;
  errorMessage: string | SerializedError;
  items: Product[];
  loading: boolean;
}

export const initialState: InventoryProps = {
  error: false,
  errorMessage: "",
  items: [],
  loading: false,
};

// asyncThunk generate three extraReducers
export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async (args, { rejectWithValue }) => {
    try {
      console.log("args: ", args);
      return mockInventory;
    } catch (err) {
      rejectWithValue(err as SerializedError);
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
  extraReducers: ({ addCase }) => {
    addCase(fetchInventory.fulfilled, (state, { payload }) => {
      state.items = payload as Product[];
    });
    addCase(fetchInventory.pending, (state) => {
      state.loading = true as boolean;
    });
    addCase(fetchInventory.rejected, (state, action) => {
      state.error = true as boolean;

      if (action.payload) {
        // @ts-ignore
        state.errorMessage = action.payload.errorMessage as Error;
      }
      // @ts-ignore
      state.errorMessage = action.error.message;
    });
  },
});

export const { addToInventory, removeFromInventory } = inventorySlice.actions;

export type InventoryState = ReturnType<typeof inventorySlice.reducer>;

export default inventorySlice.reducer;
