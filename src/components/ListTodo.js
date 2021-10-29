import React from 'react'
import ItemTodo from './ItemTodo'
import { connect } from 'react-redux'
import { TYPE_TODO_DELETE, TYPE_TODO_TOGGLE } from '../store/type/todo'

const ListTodo = ({ todos, DeleteTask, ToggleTask }) => {



    return (
        <ul>
            {todos.map(t =>
                <ItemTodo
                    key={t.id}
                    task={t}
                    onDelete={DeleteTask}
                    onToggle={ToggleTask}
                />)}
        </ul>
    )
}

const todosSelector = (state) => {
    if (state.filterTodosValue === "")
        return state.todos
    else {
        return state.todos.filter(
            t => t.title.includes(state.filterTodosValue)
        )
    }

}

const list = connect(

    state => ({ todos: todosSelector(state) }),
    dispatch => ({
        DeleteTask: taskId => dispatch({
            type: TYPE_TODO_DELETE,
            payload: { taskId }
        }),
        ToggleTask: taskId => dispatch({
            type: TYPE_TODO_TOGGLE,
            payload: { taskId }
        })
    })
)


export default list(ListTodo)


