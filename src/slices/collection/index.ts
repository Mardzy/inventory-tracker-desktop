import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import mockData from "../mocks/productDB.json";
import { createUniqueId } from "../utils";

import { Collection, CollectionCard, Status } from "@types";

export const initialState: Collection & Status = {
  collection: [],
  error: null,
  owner: null,
  status: "idle",
};

export const fetchCollection = createAsyncThunk(
  "collection/fetchCollection",
  async (userId: string | null, { rejectWithValue }) => {
    try {
      // console.log("args: ", userId);
      const response: Collection = JSON.parse(JSON.stringify(mockData));

      return response as Collection;
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const updateCollectionItem = createAsyncThunk(
  "collection/updateCollectionItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    // const res = baseApi.updateCollectionItem()
  }
);

export const inventorySlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, { payload }: PayloadAction<CollectionCard>) => {
      payload.id = createUniqueId();

      state.collection.push(payload);
    },
    updateCollectionItem: (
      state,
      { payload }: PayloadAction<CollectionCard>
    ) => {
      try {
        const itemToUpdate = state.collection.find(
          ({ id }) => id === payload.id
        );
      } catch (e) {
        console.log(
          "Change Collection Item Status Error: ",
          (e as Error).message
        );
      }
    },
  },
  extraReducers: {
    [fetchCollection.pending.type]: (state) => {
      state.status = "pending";
    },
    [fetchCollection.fulfilled.type]: (
      state,
      { payload: { collection } }: PayloadAction<Collection>
    ) => {
      state.status = "fulfilled";
      state.collection = collection;
    },
    [fetchCollection.rejected.type]: (state, payload) => {
      state.status = "rejected";
      state.error = payload.errorMessage;
    },
  },
});

export default inventorySlice.reducer;
