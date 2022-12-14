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
import AdminHome from "../admin/AdminHome";
import MasterAdminSections from "../admin/MasterAdminSections";
import MasterAdminSectionsStudents from "../admin/MasterAdminSectionsStudents";
import MasterAdminUnits from "../admin/MasterAdminUnits";
import TestComponent from "../../components/Footer/TestComponent";
import MasterAdminWorks from "../admin/MasterAdminWorks";
import MasterAssigments from "../admin/MasterAssigments";
export const AppRouter = () => {
  let checking = false;
  let id: any;

  id = !!sessionStorage.getItem("appNameLogIn")
    ? sessionStorage.getItem("appNameLogIn")
    : 0;
  id = JSON.parse(id).token;

  if (checking) {
    return <h1>Load Screen</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/logaz/:token"
            component={Login}
            isAuthenticated={!!id}
          />
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
            path="/admin-sections/:course_id"
            component={MasterAdminSections}
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
            path="/home-student-course/course/:course_id"
            component={MyCourse}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/home-student"
            component={HomeStudents}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/admin-sections-students/:id"
            component={MasterAdminSectionsStudents}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/admin-works/:idsection"
            component={MasterAdminUnits}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/admin-uworks/:idUnit"
            component={MasterAdminWorks}
            isAuthenticated={!!id}
          />
          <PrivateRoute
            path="/assigment/:idassigment"
            component={MasterAssigments}
            isAuthenticated={!!id}
          />
          <Route path="landing2" component={Landing} />
          <Route path="/test" component={TestComponent} />
          <PrivateRoute path="/" component={AdminHome} isAuthenticated={!!id} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
