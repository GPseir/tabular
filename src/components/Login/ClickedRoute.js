import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import auth from '../../auth'

export const ClickedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => {
                if (auth.isAuth() && auth.isClicked()) {
                    return <Component {...routeProps} />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/table"
                        }} />
                }
            }}
        />
    )
}