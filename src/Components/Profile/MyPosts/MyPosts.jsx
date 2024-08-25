import React from "react";
import { useForm } from "react-hook-form";
import classes from "./MyPosts.module.css";
import styles from "./../../common/FormControls/FormControls.module.css";
import Post from "./Post/Post";
import classname from "classname";

/*
import * as console from "console";
*/

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCounts={p.likeCounts} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm addPost={props.addPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

const AddPostForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { Login: "", Password: "" },
  });

  function onValid(data) {
    props.addPost(data.newPostText);

    console.log(data.newPostText);
  }
  function onInvalid() {}
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <div className={styles.formControl}>
        <textarea
          className={classname(errors["newPostText"] && styles.error)}
          {...register("newPostText", {
            required: "This is required",
            minLength: { value: 10, message: "length is min 10" },
          })}
          placeholder={"Type post"}
        />
        <p>{errors["newPostText"]?.message}</p>
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  );
};
export default MyPosts;
