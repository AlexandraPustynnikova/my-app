import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsToRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login/"} />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsToRedirect)(
    RedirectComponent,
  );

  return ConnectedAuthRedirectComponent;
};
