let rerenderEntireTree;

let data = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: data.profilePage.newPostText,
    likesCount: 0,
  };
  data.profilePage.postsData.push(newPost);
  data.profilePage.newPostText = "";
  rerenderEntireTree(data);
};
export let addTextToTextarea = (text) => {
  data.profilePage.newPostText = text;
  rerenderEntireTree(data);
};
export let subscribe = (observe) => {
  rerenderEntireTree = observe;
};
window.data = data;
export default data;
