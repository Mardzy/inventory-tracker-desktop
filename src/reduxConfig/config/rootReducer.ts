import { combineReducers } from "redux";

import { todoSlice } from "../todo/todo.slice";
import inventoryReducer from "reduxConfig/inventory/slice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  inventory: inventoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
