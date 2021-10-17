import React from 'react'
import { connect } from 'react-redux'
import { deleteAction } from '../store/actions/todo'
import { todosSelector } from '../store/selectors/todo'
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
        (state) => ({ 
            todos: todosSelector(state) 
        }),
        (dispatch) => ({
            toggleTask: taskId => dispatch(deleteAction(taskId))
        })
    )

export default TodoListStore(TodoList)
