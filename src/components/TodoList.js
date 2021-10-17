import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteAction } from '../store/actions/todo'
import { todosSelector } from '../store/selectors/todo'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onDeleteTask }) => {

    // useEffect(()=>{
    //     console.log("function onDeleteTask created 😈 !")
    // },[onDeleteTask])

    return (
        <ul className=" w-25 mx-auto mt-3 p-0">
            {
                todos.map(t =>
                    <TodoItem
                        key={t.id}
                        task={t}
                        onDelete={onDeleteTask}
                    />
                )
            }
        </ul>
    )
}

// const TodoListStore =
//     connect(
//         (state) => ({ 
//             todos: todosSelector(state) 
//         }),
//         (dispatch) => ({
//             deleteTaskById: taskId => dispatch(deleteAction(taskId))
//         })
//     )

const TodoListStore = () => {

    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()
    const deleteTaskById = taskId => dispatch(deleteAction(taskId))

    // const deleteTaskById = 
    //         useCallback(taskId => dispatch(deleteAction(taskId)),[])

    return <TodoList todos={todos} onDeleteTask={deleteTaskById} />
}

export default TodoListStore
