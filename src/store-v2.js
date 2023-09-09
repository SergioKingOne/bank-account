import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composedWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composedWithDevTools(applyMiddleware(thunk))
);

export default store;
