import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { addAction } from '../store/actions/todo'

const TodoAdd = ({ onAdd }) => {

    const [title, setTitle] = useState("")
    //add
    const handleClick = () => {
        if (title == "") alert("error : title cannot be empty 😥")
        else {
            onAdd(title)
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
                className="btn btn-success"
                type="button"
                onClick={handleClick}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
        </div>

    )
}

// const TodoAddStore = connect(null, (dispatch) => ({
//     addTask: taskTitle => dispatch(addAction(taskTitle))
// }))

const TodoAddStore = ()=>{
    const dispatch = useDispatch()
    const addTask = taskTitle => dispatch(addAction(taskTitle))
    return <TodoAdd onAdd={addTask} />
}
export default TodoAddStore