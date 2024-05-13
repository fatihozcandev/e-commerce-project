import { combineReducers } from "redux";
import clientReducer from "./clientReducer";

export const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});
