import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_ADD } from '../store/types/todo'

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
        onAddTask: taskTitle => dispatch({
            type: TYPE_TODO_ADD,
            payload: { taskTitle }
        })
    }))


export default TodoAddStore(TodoAdd)
