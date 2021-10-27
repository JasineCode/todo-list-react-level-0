import React from 'react'
import { Provider } from 'react-redux'
import ListTodo from './components/ListTodo'
import store from "./store"

const App = () => {
    return (
        <Provider store={store}>
            Hello I'm Really Here 🐰 !!
            <hr />
            <ListTodo/>
        </Provider>
    )
}

export default App
