import React, { useEffect } from 'react'

import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

// Routes
import Landing from '../landing/landing';
import MasterAdmin from '../admin/MasterAdmin';
import MasterAdminCursos from '../admin/MasterAdminCursos';
import MasterAdminStudents from '../admin/MasterAdminStudents';
import MasterAdminAdmin from '../admin/MasterAdminAdmin';
import Login from '../login/Login';
export const AppRouter = () => {


  let checking = false;
  let id = 1;

  if (checking) {
    return <h1>Load Screen</h1>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={Login}
            isAuthenticated={!!id}
          />
          <PublicRoute
            path="/landing"
            component={Landing}
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
          <Route path="landing2"
            component={ Landing}
        />
          <PrivateRoute
            path="/"
            component={MasterAdmin}
            isAuthenticated={!!id}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}