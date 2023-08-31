import React from "react";
import style from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = (props) => {
  // console.log(props);

  let dialogsData = [
    { id: 1, name: "Andy" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Silva" },
  ];
  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hola" },
    { id: 3, message: "Hi" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));

  let messagesElements = messagesData.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.profiles}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
