import React, { useRef } from 'react'

const AddTodo = (props) => {
    const inputTask = useRef("")
    const onAddTask = ()=>{

        let input_value = inputTask.current.value;
        inputTask.current.value="";  
        props.addTaskToList(input_value)
    }
    return (
        <header>
            <h1 className="text-center">Add Todo</h1>
            <div className="d-flex justify-content-center">
                <input type="text" 
                        placeholder="Add Todo" 
                        className="form-control w-50" 
                        ref={inputTask}/>
                <button 
                    className="btn btn-success text-uppercase m-1"
                    onClick={()=> onAddTask()}> <i className="fa fa-plus-square" aria-hidden="true" />
                </button>
            </div>
        </header>
    )
}

export default AddTodo
