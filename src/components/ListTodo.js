import React from 'react'
import ItemTodo from './ItemTodo'

const ListTodo = ({ list }) => {
    return (
        <ul className="list-group w-75 mx-auto">
            {/* List of Item Todo Component */}

            {list.map((taskTitle) => (
                <ItemTodo title={taskTitle} />
            ))}


        </ul>
    )
}

export default ListTodo
