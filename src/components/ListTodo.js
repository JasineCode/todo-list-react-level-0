import React from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_DELETE } from '../store/types/todo'
import ItemTodo from './ItemTodo'

const ListTodo = ({ todos,deleteTaskById }) => {
    return (
        <ul>
            {todos.map(t => 
            <ItemTodo 
            key={t.id} 
            task={t} 
            onDeleteTask={deleteTaskById}    
            />)}
        </ul>
    )
}

const ListTodoStore = connect(
    (state)=>({todos:state}),
    (dispatch)=>({
        deleteTaskById:
                (taskId)=>dispatch({
                    type:TYPE_TODO_DELETE,
                    payload:{taskId}
                })

    })
)

export default ListTodoStore(ListTodo)
