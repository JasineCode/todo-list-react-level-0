import { Action } from "../../models/action";
import { Task } from "../../models/task";
import {
    
    TYPE_TODO_ADD,
    TYPE_TODO_DELETE,
    TYPE_TODO_FILTER,
    TYPE_TODO_TOGGLE

} from "../types/todo";

const initialState = {
    todos: [
        new Task(1, "create components 😃"),
        new Task(2, "create state & pros 😃")
    ],
    todosBackup: [
        new Task(1, "create components 😃"),
        new Task(2, "create state & pros 😃")
    ]
}

export const TodoReducer = (
    state = initialState,
    action = new Action()
) => {
    switch (action.type) {

        case TYPE_TODO_ADD:
            {
                let newTask = new Task(
                    state.todos.length + 1,
                    action.payload.taskTitle
                )
                let newList = [...state.todos, newTask]

                return {
                    todos: newList,
                    todosBackup: newList
                }
            }


        case TYPE_TODO_DELETE:
            {
                let newList = [
                    ...state.todos.filter(
                        t => t.id != action.payload.taskId
                    )
                ]
                return { todos: newList, todosBackup: newList }
            }
        case TYPE_TODO_TOGGLE:
            {
                let newList = [
                    ...state.todos.map(t => {
                        if (t.id === action.payload.taskId)
                            t.isCompleted = !t.isCompleted
                        return t
                    })
                ]
                return {todos:newList,todosBackup:newList}
            }
        case TYPE_TODO_FILTER:
            {
                let newListTodo = []

                if (action.payload.query === "") {
                    newListTodo = [...state.todosBackup]
                    
                } else {
                    newListTodo = [
                        ...state.todosBackup.filter(t =>
                            t.title.includes(
                                action.payload.query
                            ))
                    ]
                }

                return {
                    ...state,
                    todos: newListTodo
                }



            }

        default: return state
    }
}

