import React from 'react'

const TodoItem = ({ task ,onToggle}) => {
    const handleClick = ()=> {
        if(!window.confirm("Are you sure ?")) return
        onToggle(task.id)
    }
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <div className="form-check">
                <input className="form-check-input" 
                        type="checkbox" 
                        defaultValue 
                        id="flexCheckDefault" />

                <label className="form-check-label" 
                        htmlFor="flexCheckDefault">
                    {task.title}
                </label>
            </div>

            <button
                className="btn btn-danger"
                onClick={()=>handleClick}>
                delete
            </button>
        </li>
    )
}

export default TodoItem
