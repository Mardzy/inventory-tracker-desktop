import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";

import { mockInventory } from "../mocks/inventory";

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
  errorMessage: string | SerializedError;
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
  (args, { rejectWithValue }) => {
    console.log("here");
    // thunkAPI.
    try {
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
    addCase(fetchInventory.fulfilled, ({ inventory }, { payload }) => {
      inventory = payload as Product[];
    });
    addCase(fetchInventory.pending, ({ loading }) => {
      loading = true as boolean;
    });
    addCase(
      fetchInventory.rejected,
      ({ error: err, errorMessage }, { error, payload }) => {
        err = true as boolean;

        if (payload) {
          // @ts-ignore
          errorMessage = action.payload.errorMessage as Error;
        }

        errorMessage = error;
      }
    );
  },
});

export const { addToInventory, removeFromInventory } = inventorySlice.actions;

export type InventoryState = ReturnType<typeof inventorySlice.reducer>;

export default inventorySlice.reducer;
