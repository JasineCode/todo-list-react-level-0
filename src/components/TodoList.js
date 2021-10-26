import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {
    deleteTaskAction,
    toggleTaskAction
} from '../store/actions/todo'
import { todosSelector } from '../store/selectors/todo'

import TodoItem from './TodoItem'

function TodoList({ todos = [], onDeleteTask, onToggleTask }) {
    return (
        <ul className="p-0 m-3 w-75 mx-auto">
            {
                todos.map(t => <TodoItem
                    onDeleteTask={onDeleteTask}
                    onToggleTask={onToggleTask}
                    key={t.id}
                    task={t}
                />)
            }
        </ul>
    )
}

const TodoListStore = () => {

    const {todos} = useSelector(todosSelector)
    const dispatch = useDispatch()
    
    const deleteTask =
        taskId => dispatch(deleteTaskAction(taskId))

    const toggleTask =
        taskId => dispatch(toggleTaskAction(taskId))

    return <TodoList
        todos={todos}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}    
    />
}


export default TodoListStore
