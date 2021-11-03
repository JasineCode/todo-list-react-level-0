import React, { useState } from 'react'
import { useEffect } from 'react'

import axios from "axios"

const App = () => {
    const [todos, setTodos] = useState([])
    //component did mount 
    useEffect(() => {
        //communiquer avec la partie sever
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then((res) => {
                setTodos(res.data)
            })

    }, [])

    const deleteTodo =(idTodo)=>{
        axios.delete("https://jsonplaceholder.typicode.com/todos/"+idTodo)
        .then((res)=>console.log(res.status))
    }

    const [todo, setTodo] = useState("")
    const addNewTodo = ()=>{
        if(todo==="") alert(" eroor")
        else {
            axios.post("https://jsonplaceholder.typicode.com/todos/",
            {
                userId:1,
                id:null,
                title:todo,
                completed:false
            })
            .then((res)=>console.log(res.data))
            setTodo("")
        }
    }

    const handleChangeInput = (e) => setTodo(e.target.value) 

    const [todoId, setTodoId] = useState()
    const editTodo = (t)=> {
        setTodo(t.title)
        setTodoId(t.id)
    }
    
    const updateTodo = ()=>{
     
        if(todo==="") alert(" eroor")
        else {
            axios.put("https://jsonplaceholder.typicode.com/todos/"+todoId,
            {
                userId:1,
                id:todoId,
                title:todo,
                completed:false
            })
            .then((res)=>console.log(res.data))
            setTodo("")
        }
    }
    return (
        <div>

                <input 
                onChange={handleChangeInput}
                type="text" placeholder="new task " 
                value={todo}/> 
                <button onClick={addNewTodo}>Save</button>
                <button onClick={updateTodo}>update</button>
            <hr />
            <ul>
                {todos.map(t => <li key={t.id}>{t.title} 
                <button onClick={() => deleteTodo(t.id)}>DEL</button>
                <button onClick={() => editTodo(t)}>EDIT</button>
                
                </li>
                )}
            </ul>
        </div>
    )
}

export default App
