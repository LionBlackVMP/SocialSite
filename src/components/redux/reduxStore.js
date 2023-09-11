import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import usersReducer from "./reducer/usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;
