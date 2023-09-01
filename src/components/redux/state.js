import { rerenderEntireTree } from "../../render";
let data = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello world!", likesCount: 5 },
      { id: 1, message: "Hi man, how are u?", likesCount: 2 },
      { id: 1, message: "Completely fine", likesCount: 15 },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  data.profilePage.postsData.push(newPost);
  rerenderEntireTree(data);
};
export default data;
