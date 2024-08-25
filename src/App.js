import "./App.css";
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./Components/News/news";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Friends from "./Components/Friends/Friends";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer, {
  withRouter,
} from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ initialized: state.app.initialized });
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);
