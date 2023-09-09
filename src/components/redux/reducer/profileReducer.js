const ADD_POST = "ADD_POST";
const ADD_TEXT_TO_PUBLICATIONS = "ADD_TEXT_TO_PUBLICATIONS";

let initialState = {
  postsData: [
    { id: 1, message: "Hello world!", likesCount: 5 },
    { id: 1, message: "Hi man, how are u?", likesCount: 2 },
    { id: 1, message: "Completely fine", likesCount: 15 },
  ],
  newPostText: "hello",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case ADD_TEXT_TO_PUBLICATIONS:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
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

export default profileReducer;
