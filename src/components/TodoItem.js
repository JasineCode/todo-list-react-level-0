import React from 'react'
import { Task } from '../models/task'

const TodoItem = ({task=new Task()}) => {
    return (
        <li className="d-flex justify-content-between p-2 border m-1 align-items-center">
         <p>
         <input type="checkbox" className="m-2" />
            {task.title}
         </p>
            <button className="btn btn-danger">DEL</button>
        </li>
    )
}

export default TodoItem
