import React from "react";
import classes from "./Navbar.module.css";
import classname from "classname";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          Messages
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/users"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          Users
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/Friends"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          Friends
          <img src="https://freesvg.org/img/abstract-user-flat-4.png" />
          <img src="https://freesvg.org/img/abstract-user-flat-4.png" />
          <img src="https://freesvg.org/img/abstract-user-flat-4.png" />
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            classname(classes.item, navData.isActive && classes.active)
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
