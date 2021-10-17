
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
    const { type, payload } = action
    switch (type) {

        case TODO_ADD:
            return [...state,
                new Task(
                    state.length + 1,
                    payload.title
                )
            ]

        case TODO_DELETE:
            return [...state.
                filter(
                    t =>
                    t.id != payload.taskId
                )
            ]
        default:
            return state
    }
}

export default todoReducer