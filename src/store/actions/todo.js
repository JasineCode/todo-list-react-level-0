import { Task } from "../../models"
import { TODO_ADD, TODO_DELETE } from "../types"

export const addAction = (taskTitle) => ({
    type: TODO_ADD,
    payload: new Task(0, taskTitle)
})

export const deleteAction = (taskId) => ({
    type: TODO_DELETE,
    payload: { taskId }
})