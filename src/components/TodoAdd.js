import React, { useState } from 'react'
import { connect } from 'react-redux'
import { onAddTaskAction } from '../store/actions/todo'

const TodoAdd = ({ onAddTask }) => {


    const [task, setTask] = useState("")

    const handleClick = () => {
        if (task === "") {
            alert(' task shouldnt be empty 😢 !')
            return
        }
        onAddTask(task)
        setTask("")
    }

    return (
        <div className="text-center m-3">
            <input
                type="text"
                placeholder="Add task here"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <button onClick={handleClick}>
                add task
            </button>
        </div>
    )
}


const TodoAddStore = connect(null,
    (dispatch) => ({
        onAddTask: taskTitle => 
        dispatch(onAddTaskAction(taskTitle))
    }))


export default TodoAddStore(TodoAdd)
