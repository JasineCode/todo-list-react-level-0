import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import TodoListStore from './components/TodoList'

const App = () => {
    return (
        <Provider store={store}>
            <TodoListStore/>
        </Provider>
    )
}

export default App
