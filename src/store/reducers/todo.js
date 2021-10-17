
import { Action, Task } from "../../models";
import { TODO_ADD, TODO_DELETE } from "../types";

const initialState = [
    new Task(1, "task 1", true),
    new Task(2, "task 2", true)
]
const todoReducer = (
    state = initialState,
    action = new Action()
) => {

    switch (action.type) {

        case TODO_ADD:
            return [...state, new Task(...action.payload)]

        case TODO_DELETE:
            return [...state.
                filter(
                    t =>
                        t.id != action.payload.taskId
                )
            ]
        default:
            return state
    }
}

export default todoReducer