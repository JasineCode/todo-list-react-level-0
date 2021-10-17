import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import TodoListStore from './components/TodoList'
import TodoAddStore from './components/TodoAdd'

const App = () => {
    return (
        <Provider store={store}>
            <TodoAddStore/>
            <hr />
            <TodoListStore/>
        </Provider>
    )
}

export default App
