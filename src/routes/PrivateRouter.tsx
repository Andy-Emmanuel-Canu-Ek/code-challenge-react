import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

export const PrivateRouter = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props): any =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRouter.protoTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
