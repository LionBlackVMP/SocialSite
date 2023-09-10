const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_MESSAGE_TO_PUBLICATIONS = "ADD_MESSAGE_TO_PUBLICATIONS";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: 5,
            message: state.newMessageText,
          },
        ],
        newMessageText: "",
      };
    }
    case ADD_MESSAGE_TO_PUBLICATIONS: {
      return { ...state, newMessageText: action.text };
    }
    default:
      return state;
  }
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
export default dialogsReducer;
