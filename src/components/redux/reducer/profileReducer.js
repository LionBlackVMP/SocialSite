const ADD_POST = "ADD_POST";
const ADD_TEXT_TO_PUBLICATIONS = "ADD_TEXT_TO_PUBLICATIONS";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [
    { id: 1, message: "Hello world!", likesCount: 5 },
    { id: 1, message: "Hi man, how are u?", likesCount: 2 },
    { id: 1, message: "Completely fine", likesCount: 15 },
  ],
  newPostText: "hello",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: "",
      };
    case ADD_TEXT_TO_PUBLICATIONS:
      return { ...state, newPostText: action.text };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};
export const addTextToPublicationsCreator = (text) => {
  return {
    type: ADD_TEXT_TO_PUBLICATIONS,
    text: text,
  };
};

export default profileReducer;
