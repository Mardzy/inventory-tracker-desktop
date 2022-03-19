import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import mockData from "./mocks/productDB.json";
import { createUniqueId } from "./utils";

import { Collection, CollectionCard } from "@types";

const initialState: Collection = {
  collection: [],
  error: null,
  owner: null,
  status: "idle",
};

export const getCollection = createAsyncThunk(
  "collection/getCollection",
  async (userId: string | null, { rejectWithValue }) => {
    try {
      // console.log("args: ", userId);
      const response: Collection = JSON.parse(JSON.stringify(mockData));
      // replace with fetchCollectionItem request

      return response as Collection;
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const collectionSlice = createSlice({
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
    [getCollection.pending.type]: (state) => {
      state.status = "pending";
    },
    [getCollection.fulfilled.type]: (
      state,
      { payload: { collection } }: PayloadAction<Collection>
    ) => {
      state.status = "fulfilled";
      state.collection = collection;
    },
    [getCollection.rejected.type]: (state, payload) => {
      state.status = "rejected";
      state.error = payload.errorMessage;
    },
  },
});

export default collectionSlice.reducer;
