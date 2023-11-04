import React from "react";
import style from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <Dialog id={d.id} key={d.id} name={d.name} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));
  let newMessageElement = React.createRef();
  let AddMessage = () => {
    props.addMessage();
  };
  let MessageChange = () => {
    props.onMessageChange(newMessageElement.current.value);
  };
  return (
    <div className={style.dialogs}>
      <div className={style.profiles}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={MessageChange}
            value={props.dialogsPage.newMessageText}
            ref={newMessageElement}
          />
          <button onClick={AddMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
