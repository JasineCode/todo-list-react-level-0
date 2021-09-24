import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {

  const [listTask, setListTask] = useState([])

  const addNewTask = (newTask) => {
    // alert(newTask)
    if(newTask!="")
    setListTask([...listTask,newTask])
    else alert(" task title should not be empty 😎")
  }

  //delete task by id
  const deteleTaskById = (idTask)=>{

    if(window.confirm("Are you sure ?")===false) return ;

    let newListTask = [...listTask];
    newListTask = newListTask.filter((_,index)=>index!=idTask)
    setListTask([...newListTask])

  }
  return (
    <>
      <div>
        {/* addTodo Component */}
        <AddTodo addTaskToList = { addNewTask } />
        <hr color="gray" />
        <div className="filter border w-50 mx-auto">
          <input type="text" placeholder="filter task by title" className="form-control" />
          <i className="fa fa-search" aria-hidden="true" />
        </div>
        {/* List Todo Component */}
        <ListTodo 
          list={listTask}
          onDeleteTask={deteleTaskById}
         />
      </div>
    </>
  )
}

export default App
