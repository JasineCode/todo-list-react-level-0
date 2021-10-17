import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import TodoListStore from './components/TodoList'
import TodoAdd from './components/TodoAdd'

const App = () => {
    return (
        <Provider store={store}>
            <TodoAdd/>
            <hr />
            <TodoListStore/>
        </Provider>
    )
}

export default App
