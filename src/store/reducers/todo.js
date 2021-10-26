import { Action } from "../../models/action";
import { Task } from "../../models/task";
import {

    TYPE_TODO_ADD,
    TYPE_TODO_DELETE,
    TYPE_TODO_TOGGLE,
    TYPE_UPDATE_FILTER

} from "../types/todo";

const initialState = {
    todos: [
        new Task(1, "create components 😃"),
        new Task(2, "create state & pros 😃")
    ],
    filterQuery: ""

}

export const TodoReducer = (
    state = initialState,
    action = new Action()
) => {
    switch (action.type) {

        case TYPE_TODO_ADD:

            return {
                ...state,
                todos: [...state.todos,
                new Task(
                    state.todos.length + 1,
                    action.payload.taskTitle)
                ],

            }

        case TYPE_TODO_DELETE:

            return {
                ...state,
                todos: [
                    ...state.todos.filter(
                        t => t.id != action.payload.taskId
                    )
                ]
            }

        case TYPE_TODO_TOGGLE:

            return {
                ...state,
                todos: [
                    ...state.todos.map(t => {
                        if (t.id === action.payload.taskId)
                            t.isCompleted = !t.isCompleted
                        return t
                    })
                ]
            }
        case TYPE_UPDATE_FILTER:
            return {
                ...state,
                filterQuery: action.payload.filterValue
            }
        default: return state
    }
}

