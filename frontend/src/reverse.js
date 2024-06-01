// ReversePrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ReversePrivateRoute = ({ component: Component, ...rest }) => {
  const isAdmin = localStorage.getItem("username") === "donald";

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <Redirect to="/admin/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ReversePrivateRoute;
