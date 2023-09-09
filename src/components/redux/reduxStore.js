import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});
let store = createStore(reducers);

export default store;
