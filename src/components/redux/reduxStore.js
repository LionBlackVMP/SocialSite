import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import usersReducer from "./reducer/usersReducer";
import authReducer from "./reducer/authReducer";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
