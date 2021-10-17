import React from 'react'

const TodoItem = ({ task, onDelete }) => {

    //handle click event delete btn
    const handleClick = () => {
        if (!window.confirm("Are you sure ?")) return
        onDelete(task.id)
    }

    return (
        <li className="list-group-item d-flex justify-content-between mb-2" >
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
                className="btn btn-danger"
                onClick={handleClick}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </li>
    )
}

export default TodoItem
