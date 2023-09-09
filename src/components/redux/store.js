import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";

let store = {
  _callSubscriber() {},
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello world!", likesCount: 5 },
        { id: 1, message: "Hi man, how are u?", likesCount: 2 },
        { id: 1, message: "Completely fine", likesCount: 15 },
      ],
      newPostText: "hello",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Andy" },
        { id: 2, name: "Kate" },
        { id: 3, name: "Silva" },
      ],
      messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hola" },
        { id: 3, message: "Hi" },
      ],
      newMessageText: "Hola get ebola",
    },
  },

  subscribe(observe) {
    this._callSubscriber = observe;
  },
  getData() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
