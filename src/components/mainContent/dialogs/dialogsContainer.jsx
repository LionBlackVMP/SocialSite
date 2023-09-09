import React from "react";

import Dialog from "./dialog/dialog";

import {
  addMessageTextCreator,
  addMessageToPublicationsCreator,
} from "../../redux/reducer/dialogsReducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {
  let dialogsPage = props.store.getState().dialogsPage;
  let addMessage = () => {
    props.store.dispatch(addMessageTextCreator());
  };
  let onMessageChange = (text) => {
    props.store.dispatch(addMessageToPublicationsCreator(text));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      addMessageToPublications={onMessageChange}
      dialogsPage={dialogsPage}
    />
  );
};

export default DialogsContainer;
