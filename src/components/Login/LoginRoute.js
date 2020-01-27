import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import auth from '../../auth'

export const LoginRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => {
                if (auth.isAuth()) {
                    return <Component {...routeProps} history />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/"
                        }} />
                }
            }}
        />
    )
}