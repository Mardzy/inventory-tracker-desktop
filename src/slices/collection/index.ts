import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";

import mockData from "../mocks/collection.json";
import { createUniqueId } from "../utils";

import { Collection, CollectionCard } from "@types";

export const initialState: Collection = {
  error: null,
  products: [],
  loading: false,
};

export const fetchCollection = createAsyncThunk(
  "collection/fetchCollection",
  async (userId, { rejectWithValue }) => {
    try {
      // console.log("args: ", userId);
      const response: Collection = JSON.parse(JSON.stringify(mockData));

      return response;
    } catch (err) {
      rejectWithValue(err as SerializedError);
    }
  }
);

export const inventorySlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, { payload }: PayloadAction<CollectionCard>) => {
      payload.id = createUniqueId();
      // console.log("state: ", state);
      state.products.map((product) => product.items);
    },
    removeFromCollection: (
      state,
      { payload: { products } }: PayloadAction<Collection>
    ) => {},
    // updateValueIncoming: (
    //   state,
    //   { payload }: PayloadAction<CollectionCard>
    // ) => {
    //   const index = state.items.findIndex((item) => item.id === payload.id);
    // },
  },
  extraReducers: {
    [fetchCollection.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCollection.fulfilled.type]: (
      state,
      { payload: { products } }: PayloadAction<Collection>
    ) => {
      state.loading = false;
      state.products = products;
    },
    [fetchCollection.rejected.type]: (state, payload) => {
      state.loading = false;
      state.error = payload.errorMessage;
    },
  },
});

export const { addToCollection, removeFromCollection } = inventorySlice.actions;

export default inventorySlice.reducer;
