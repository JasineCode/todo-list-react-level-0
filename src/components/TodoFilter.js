import React from 'react'

const TodoFilter = () => {
    return (
        <div className=" text-center">
            <input 
            type="search" 
            className="form-control"
            placeholder="filter task by title" 
            />
        </div>
    )
}

export default TodoFilter
