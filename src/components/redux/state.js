let rerenderEntireTree;
let store = {
  rerenderEntireTree() {},
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
  logs() {
    console.log(this);
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this.profilePage.newPostText,
      likesCount: 0,
    };
    this.profilePage.postsData.push(newPost);
    this.profilePage.newPostText = "";

    this.rerenderEntireTree(this);
  },
  getData() {
    return this._data;
  },
  addTextToTextarea(text) {
    this.profilePage.newPostText = text;
    this.rerenderEntireTree(this.getData());
  },
  subscribe(observe) {
    rerenderEntireTree = observe;
  },
};

window.store = store;
export default store;
