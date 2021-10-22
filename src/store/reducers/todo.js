import { Action } from "../../models/action";
import { Task } from "../../models/task";
import { TYPE_TODO_ADD } from "../types/todo";

const initialState = [
    new Task(1, "create components 😃"),
    new Task(2, "create state & pros 😃"),
    new Task(3, "create the store 😃"),
    new Task(4, "create the actions 😃"),
    new Task(5, "create the types 😃"),
]

export const TodoReducer = (
    state = initialState, 
    action = new Action()
) => {
    switch (action.type) {

        case TYPE_TODO_ADD:
            return [...state, 
                new Task(
                state.length+1,
                action.payload.taskTitle
            )]

        default: return state
    }
}

