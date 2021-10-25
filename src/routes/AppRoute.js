import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import MoviePage from '../Pages/MoviePage'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route  path="/movie-details/:id" component={MoviePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute
