import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Collection, CollectionCard } from "@types";
import mockData from "./mocks/productDB.json";

export const getCollectionItem = createAsyncThunk(
  "selectedItem/getCollectionItem",
  async (args: { userId: string; id: string }, { rejectWithValue }) => {
    try {
      const { collection }: Collection = JSON.parse(JSON.stringify(mockData));
      const collectionItem = collection.find(({ id }) => id === args.itemId);
      // replace with fetchCollectionItem request

      return collectionItem as CollectionCard;
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const updateCollectionItem = createAsyncThunk(
  "selectedItem/updateCollectionItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    // const res = baseApi.updateCollectionItem()
  }
);

export const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState: {},
  reducers: {
    selectItem: (state, { payload }: PayloadAction<CollectionCard>) => payload,
  },
});
