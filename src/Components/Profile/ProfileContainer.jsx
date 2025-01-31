import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../Redux/profile-reducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    if (!userId) {
      window.location.href = "/login/";
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer);
