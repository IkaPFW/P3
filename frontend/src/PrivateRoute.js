import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({
    component: Component,
    auth: token,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render = {(props) => token !== null ? <Component {...props}/> : <Redirect to="/"/>}
        />
    );
}