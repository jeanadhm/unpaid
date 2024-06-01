import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username === "donald") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  if (isAdmin === null) {
    // Si l'état d'authentification est indéterminé, afficher un indicateur de chargement
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateAdminRoute;
