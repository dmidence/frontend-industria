import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

// Routes
import Landing from "../landing/landing";
import MasterAdmin from "../admin/MasterAdmin";
import MasterAdminCursos from "../admin/MasterAdminCursos";
import MasterAdminStudents from "../admin/MasterAdminStudents";
import MasterAdminAdmin from "../admin/MasterAdminAdmin";
import Login from "../login/Login";
import HomeStudents from "../student/HomeStudent";
import MyCourse from "../student/MyCourse";
import LandingUser from "../landingUser/LandingUser";
export const AppRouter = () => {
  let checking = false;
  let id = 0;

  if (checking) {
    return <h1>Load Screen</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/logaz/:id" component={Login} />
          <PublicRoute
            path="/landing"
            component={Landing}
            isAuthenticated={!!id}
          />
          <PublicRoute
            path="/landing-user"
            component={LandingUser}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/admin-courses"
            component={MasterAdminCursos}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/admin-students"
            component={MasterAdminStudents}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/admin-admin"
            component={MasterAdminAdmin}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/home-student-course/course/:id"
            component={MyCourse}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/home-student"
            component={HomeStudents}
            isAuthenticated={!!id}
          />
          <Route path="landing2" component={Landing} />
          <PrivateRoute
            path="/"
            component={MasterAdmin}
            isAuthenticated={!!id}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
