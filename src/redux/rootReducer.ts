import { combineReducers } from "@reduxjs/toolkit";

import { todoSlice } from "./todo/todo.slice";
import { inventorySlice } from "redux/inventory/slice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  inventory: inventorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
