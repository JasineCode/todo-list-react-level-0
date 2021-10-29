import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../auth/Login'
import DashboardPage from '../pages/home'
import MoviePage from '../pages/movie'
import SettingPage from '../pages/setting'
import UserPage from '../pages/user'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={LoginPage}
                />
                <Route
                    path="/dash"
                    component={DashboardPage} />

                <Route
                    path="/movies"
                    component={MoviePage} />

                <Route
                    path="/users"
                    component={UserPage} />

                <Route
                    path="/settings"
                    component={SettingPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute
