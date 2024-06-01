import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Footer from "components/Footers/Footer";
import Logout from "views/admin/Maps";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import PrivateAdminRoute from "adminprivate";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <PrivateAdminRoute path="/admin/" exact component={Dashboard} />
            <PrivateAdminRoute path="/admin/Dashboard" exact component={Dashboard} />
            <PrivateAdminRoute path="/admin/settings" exact component={Settings} />
            <PrivateAdminRoute path="/admin/tables" exact component={Tables} />
            <PrivateAdminRoute path="/admin/logout" exact component={Logout} />
            <Redirect from="/admin/*" to="/login" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
