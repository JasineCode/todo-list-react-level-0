import React from 'react'
import ItemTodo from './ItemTodo'
import { connect } from 'react-redux'
import { TYPE_TODO_DELETE } from '../store/type/todo'

const ListTodo = ({todos, DeleteTask}) => {

   
    
    return (
        <ul>
            {todos.map(t => 
            <ItemTodo 
            key={t.id} 
            task={t}
            onDelete={DeleteTask}
            />)}
        </ul>
    )
}

const list = connect (

state =>({todos : state}),
dispatch =>({DeleteTask : taskId => dispatch({
    type: TYPE_TODO_DELETE,
    payload: {taskId}

})
 })
)


 export default list(ListTodo) 


