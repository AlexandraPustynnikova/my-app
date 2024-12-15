import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { updateNewPostText } from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer /*store={props.store}*/ />
    </div>
  );
};

export default Profile;
