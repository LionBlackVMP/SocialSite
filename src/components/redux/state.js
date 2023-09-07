const ADD_POST = "ADD-POST";
const ADD_TEXT_TO_PUBLICATIONS = "ADD-TEXT-TO-PUBLICATIONS";
const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_MESSAGE_TO_PUBLICATIONS = "ADD-MESSAGE-TO-PUBLICATIONS";
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
  _addTextToPublications(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this._state);
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";

    this._callSubscriber(this._state);
  },

  _addMessageToPublications(text) {
    this._state.dialogsPage.newMessageText = text;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";

    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    }
    if (action.type === ADD_TEXT_TO_PUBLICATIONS) {
      this._addTextToPublications(action.text);
    }
    if (action.type === ADD_MESSAGE) {
      this._addMessage();
    }
    if (action.type === ADD_MESSAGE_TO_PUBLICATIONS) {
      this._addMessageToPublications(action.text);
    }
  },
};

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const addTextToPublicationsCreator = (text) => {
  return {
    type: ADD_TEXT_TO_PUBLICATIONS,
    text: text,
  };
};

export const addMessageTextCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export const addMessageToPublicationsCreator = (text) => {
  return {
    type: ADD_MESSAGE_TO_PUBLICATIONS,
    text: text,
  };
};
window.store = store;
export default store;
