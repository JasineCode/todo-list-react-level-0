import React from 'react'
import { connect } from 'react-redux'
import {
    deleteTaskAction,
    toggleTaskAction
} from '../store/actions/todo'
import { todosSelector } from '../store/selectors/todo'

import TodoItem from './TodoItem'

function TodoList({ todos = [], deleteTask, toggleTask }) {
    return (
        <ul className="p-0 m-3 w-75 mx-auto">
            {
                todos.map(t => <TodoItem
                    onDeleteTask={deleteTask}
                    onToggleTask={toggleTask}
                    key={t.id}
                    task={t}
                />)
            }
        </ul>
    )
}


const TodoListStore = connect(

    (state) => todosSelector(state),

    (dispatch) => ({
        deleteTask: taskId =>
            dispatch(deleteTaskAction(taskId)),
        toggleTask: taskId =>
            dispatch(toggleTaskAction(taskId)),
    }),

)


export default TodoListStore(TodoList)
