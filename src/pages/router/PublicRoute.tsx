import React from 'react';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    path,
    isAuthenticated,
    component: Component,
}:{path:string, isAuthenticated:any, component:any}) => {

    return (
        <Route path={path}
            component={ (props:any) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/" /> )
                    : ( <Component { ...props } /> )
            )}
        
        />
    )
}
