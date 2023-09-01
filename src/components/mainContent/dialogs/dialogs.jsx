import React from "react";
import style from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = (props) => {
  let dialogsElements = props.data.dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));

  let messagesElements = props.data.messagesData.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageElement = React.createRef();

  return (
    <div className={style.dialogs}>
      <div className={style.profiles}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea ref={newMessageElement} />
          <button
            onClick={() => {
              alert(newMessageElement.current.value);
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
