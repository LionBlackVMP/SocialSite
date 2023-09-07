import React from "react";
import style from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import {
  addMessageTextCreator,
  addMessageToPublicationsCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageTextCreator());
  };
  let onMessageChange = () => {
    props.dispatch(
      addMessageToPublicationsCreator(newMessageElement.current.value)
    );
  };
  return (
    <div className={style.dialogs}>
      <div className={style.profiles}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.state.newMessageText}
            ref={newMessageElement}
          />
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
