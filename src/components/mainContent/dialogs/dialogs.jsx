import React from "react";
import style from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageElement = React.createRef();
  let onAddMessage = () => {
    props.addMessage();
  };
  let onMessageChange = () => {
    props.addMessageToPublications(newMessageElement.current.value);
  };
  return (
    <div className={style.dialogs}>
      <div className={style.profiles}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
            ref={newMessageElement}
          />
          <button onClick={onAddMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
