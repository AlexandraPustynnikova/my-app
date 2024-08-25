  import React from "react";
import classes from './Profile.module.css'
  import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div className={classes.content}>
        <img src='https://haleakalaecotours.com/wp-content/uploads/2019/04/hawaii-dangerous-waves.jpg'/>

        <div>
            ava+description
        </div>
       <MyPosts/>
    </div>
}

  export default Profile;