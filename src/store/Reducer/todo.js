import { Task } from "../../models/task";
import { TYPE_TODO_ADD, TYPE_TODO_DELETE } from "../type/todo";

const initialState = [

    new Task(1, "task 1"),
    new Task(2, "task 2")
]

export const ReducerToDo = (prevState = initialState, action) => {

    switch (action.type) {
        case TYPE_TODO_ADD : 
            return [
                ...prevState, new Task(
                    prevState.length+1,
                    action.payload.taskTitle
                )
            ]
        case TYPE_TODO_DELETE:
            return [
                ...prevState
                    .filter((t) => t.id !== action.payload.taskId)]

        default: return prevState
    }

}