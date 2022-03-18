import collectionReducer from "./collection";

export const reducer = {
  collection: collectionReducer,
};

// export type RootState = ReturnType<typeof reducer>
export * from "./collection";
