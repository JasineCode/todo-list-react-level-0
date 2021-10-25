import React from 'react'
import { Task } from '../models/task'

const TodoItem = ({ task = new Task(),
    onDeleteTask,
    onToggleTask }) => {

    const handleClick = () => {
        if (window.confirm("Are you sure 😢 ?") === false) return
        onDeleteTask(task.id)
    }
    const handleChange = () => {
        onToggleTask(task.id)
    }

    return (
        <li className="d-flex justify-content-between p-2 border m-1 align-items-center">
            <p>
                <input
                    type="checkbox"
                    className="m-2"
                    onChange={handleChange}
                />
                <span className={
                    task.isCompleted ? 
                    "text-decoration-line-through" 
                    : 
                    " text-capitalize"
                }>{task.title}</span>
            </p>
            <button
                className="btn btn-danger"
                onClick={handleClick}>DEL</button>
        </li>
    )
}

export default TodoItem
