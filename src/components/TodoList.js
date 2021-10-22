import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList({todos=[]}) {
    return (
        <ul className="p-0 m-3 w-75 mx-auto">
            {todos.map(t=> <TodoItem
                key={t.id}
                task={t}
            />)}
        </ul>
    )
}

const TodoListStore = connect((state)=>({
    todos:state
}))


export default TodoListStore(TodoList)
