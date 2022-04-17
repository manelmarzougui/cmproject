 import { createStore, applyMiddleware, compose } from "redux";
// import { userReducer } from "../reducers/reducerUser";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/index";
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);
