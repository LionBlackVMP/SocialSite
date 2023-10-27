import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import usersReducer from "./reducer/usersReducer";
import authReducer from "./reducer/authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;
