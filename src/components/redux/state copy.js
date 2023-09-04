let rerenderEntireTree;
let store = {
  _data: {
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
    },
  },

  getData() {
    return this._data;
  },
  addTextToTextarea(text) {
    this._data.profilePage.newPostText = text;
    rerenderEntireTree(getData());
  },
  subscribe(observe) {
    rerenderEntireTree = observe;
  },
};

export let addPost = () => {
  let data = store.getData();
  let newPost = {
    id: 5,
    message: data.profilePage.newPostText,
    likesCount: 0,
  };
  data.profilePage.postsData.push(newPost);
  data.profilePage.newPostText = "";
  rerenderEntireTree(data);
};
window.store = store;
export default store;
