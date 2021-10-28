

const ItemTodo = ({task, onDelete}) => {

    const onDeleteTast =()=>{
       if(window.confirm("Are You sur delete")==true)
           onDelete(task.id)
    }
    return (
        <li>
            <input 
            type="checkbox" 
            value={task.isCompleted}/>
            <span>{task.title}</span>
            <button onClick={onDeleteTast}
            >DEL</button>
        </li>
    )
}

export default ItemTodo
