// App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import PrivateAdminRoute from "adminprivate";
import ReversePrivateRoute from "reverse";
import Protect from "views/protect";

import Login from "views/auth/Login";
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import About from "views/About";
import Services from "views/Services";
import Demande from "views/Demandes";
import Contact from "views/Contact";
import Mademande from "views/mademande";
import Landing1 from "views/con/Landing";
import Services1 from "views/con/Services";
import Contact1 from "views/con/Contact";
import About1 from "views/con/About";
import PrivateRoute from "private";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Routes avec layouts */}
      <PrivateAdminRoute path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/faq" component={Protect} />

      {/* Routes publiques sans layouts */}
      <ReversePrivateRoute path="/" exact component={Landing} />
      <ReversePrivateRoute path="/about" exact component={About} />
      <ReversePrivateRoute path="/services" exact component={Services} />
      <ReversePrivateRoute path="/contact" exact component={Contact} />
      <ReversePrivateRoute path="/demande" exact component={Demande} />
      <ReversePrivateRoute path="/login" exact component={Login} />

      {/* Routes privées */}
      <PrivateRoute path="/profile" exact component={Profile} />
      <PrivateRoute path="/home" exact component={Landing1} />
      <PrivateRoute path="/service" exact component={Services1} />
      <PrivateRoute path="/contacts" exact component={Contact1} />
      <PrivateRoute path="/aboutus" exact component={About1} />
      <PrivateRoute path="/mademande" exact component={Mademande} />

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
