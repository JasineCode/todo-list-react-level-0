import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Task } from '../models'
import { TODO_ADD } from '../store/types'

const TodoAdd = ({ addTask }) => {

    const [title, setTitle] = useState("")
    //add
    const handleClick = () => {
        if (title == "") alert("error : title cannot be empty 😥")
        else {
            addTask(title)
            setTitle("")
        }

    }
    //input
    const handleChangeInput = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div className="input-group mb-3 w-50 mx-auto mt-3">
            <input
                type="text"
                className="form-control"
                placeholder="Add new task here "
                onChange={handleChangeInput}
                value={title}
            />
            <button
                className="btn btn-success text-uppercase"
                type="button"
                onClick={handleClick}>
                save
            </button>
        </div>

    )
}

const TodoAddStore = connect(null, (dispatch) => ({
    addTask: taskTitle => dispatch({
        type: TODO_ADD,
        payload: new Task(0, taskTitle)
    })
}))

export default TodoAddStore(TodoAdd)