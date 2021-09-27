import { useRef, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  // let listTask = ;
  // const [listTask, setListTask] = useState(["dazda","eazdaz"])
  //we will add a backup for our listTask data 
  const [listTaskBackup, setListTaskBackup] = useState([])
  const [
      listTask, 
        setlistTask
  ] = useState(["val initial 1", "val initial 2 "])

  // const filterTaskInput = useRef("")

  // const addNewTask = (newTask) => {
  //   // alert(newTask)
  //   if (newTask != ""){

  //     setListTask([...listTask, newTask])
  //     //add the new value to our backup as well
  //     setListTaskBackup([...listTaskBackup, newTask])


  //   }

  //   else alert(" task title should not be empty 😎")
  // }

  // //delete task by id
  // const deteleTaskById = (idTask) => {

  //   if (window.confirm("Are you sure ?") === false) return;

  //   let newListTask = [...listTask];
  //   newListTask = newListTask.filter((_, index) => index != idTask)
  //   setListTask([...newListTask])
  //   //delete the value from our backup as well 
  //   setListTaskBackup([...newListTask])

  // }

  // //filter tasks by title
  // const filterTasksByTitle = ()=>{
  //   let query = filterTaskInput.current.value;
  //   //test if the query is empty get the backup state 
  //   if(query==="") setListTask([...listTaskBackup])
  //   else {
  //     let newListTask = [...listTask]
  //     newListTask = newListTask.filter((titleTask)=>titleTask.includes(query))
  //     setListTask([...newListTask])
  //   }

  // }
  return (
    <>
      <div>
        {/* addTodo Component */}
        <AddTodo />
        <hr color="gray" />
        <button onClick={() => {
          setlistTask([...listTask,"new value 😅"])
          console.table(listTask)
          }}>++</button>

        {/* filter task input */}
        <div className="filter border w-50 mx-auto">
          <input type="text"
            placeholder="filter task by title"
            className="form-control"
          />
          <i className="fa fa-search" aria-hidden="true" />
        </div>

        {/* List Todo Component */}
        <ListTodo
          list={listTask}

        />
      </div>
    </>
  )
}

export default App
