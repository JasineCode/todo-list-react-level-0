import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'

const App = () => {
    return (
        <Provider store={store}>
            <TodoAdd />
            <hr />
            <TodoFilter />
            <TodoList />
        </Provider>
    )
}

export default App
