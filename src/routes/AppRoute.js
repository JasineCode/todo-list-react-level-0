import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ForgetPasswordPage from '../auth/ForgetPass'
import LoginPage from '../auth/Login'
import RegisterPage from '../auth/Register'
import ResetPasswordPage from '../auth/ResetPass'
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
                    
                    path="/forget-pass"
                    component={ForgetPasswordPage}
                />
                <Route
                    
                    path="/reset-pass"
                    component={ResetPasswordPage}
                />
                <Route
                    
                    path="/register"
                    component={RegisterPage}
                />
                <Route
                    path="/dash"
                    component={DashboardPage} />

                <Route
                    path="/movs"
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
