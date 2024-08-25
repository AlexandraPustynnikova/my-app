import React from "react";
import classes from "./Dialogs.module.css";
import { useForm } from "react-hook-form";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import classname from "classname";
import styles from "./../common/FormControls/FormControls.module.css";
const Dialogs = (props) => {
  let state = props.dialogsReducer;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  if (!props.isAuth) {
    return <Navigate to={"/login/"} />;
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.messages}>{dialogElements}</div>
      <div className={classes.dialogsItems}>{messagesElements}</div>
      <AddMessageForm sendMessage={props.sendMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { Login: "", Password: "" },
  });

  function onValid(data) {
    props.sendMessage(data.newMessageText);

    console.log(data);
  }
  function onInvalid() {}
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <div className={styles.formControl}>
        <input
          className={classname(errors["newMessageText"] && styles.error)}
          {...register("newMessageText", {
            required: "This is required",
            minLength: { value: 10, message: "length is min 10" },
          })}
          placeholder={"Type message"}
        />
        <p>{errors["newMessageText"]?.message}</p>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
export default Dialogs;
