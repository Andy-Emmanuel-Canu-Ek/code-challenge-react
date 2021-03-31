import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

export const PublicRouter = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props): any =>
        isAuth ? <Redirect to="/" /> : <Component {...props} /> 
      }
    />
  );
};

PublicRouter.protoTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
