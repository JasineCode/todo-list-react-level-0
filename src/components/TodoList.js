import React from 'react'
import { connect } from 'react-redux'
import { TODO_DELETE } from '../store/types'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], toggleTask }) => {
    return (
        <ul className=" w-50 mx-auto mt-3">
            {
                todos.map(t =>
                    <TodoItem
                        key={t.id}
                        task={t}
                        onToggle={toggleTask}
                    />
                )
            }
        </ul>
    )
}

const TodoListStore =
    connect(
        (state) => ({ todos: state }),
        (dispatch) => ({
            toggleTask: taskId => dispatch({
                type: TODO_DELETE,
                payload: { taskId }
            })
        })
    )

export default TodoListStore(TodoList)
