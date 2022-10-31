import React from 'react';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    path
}:{path:string, isAuthenticated:any, component:any}) => {

    return (
        <Route path={path}
            component={ (props:any) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/landing" /> )
            )}
        
        />
    )
}
