import React from 'react'

const TodoItem = ({ task ,onToggle}) => {

    //handle click event delete btn
    const handleClick = ()=> {
        if(!window.confirm("Are you sure ?")) return
        onToggle(task.id)
    }

    return (
        <li className="list-group-item d-flex justify-content-between" >
            <div className="form-check">
                <input className="form-check-input" 
                        type="checkbox" 
                        id="flexCheckDefault" />

                <label className="form-check-label" 
                        htmlFor="flexCheckDefault">
                    {task.title}
                </label>
            </div>

            <button
                className="btn btn-danger text-uppercase"
                onClick={handleClick}>
                del
            </button>
        </li>
    )
}

export default TodoItem
