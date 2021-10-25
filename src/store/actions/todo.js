import {
    TYPE_TODO_ADD,
    TYPE_TODO_DELETE,
    TYPE_TODO_FILTER,
    TYPE_TODO_TOGGLE
} from "../types/todo"

export const deleteTaskAction = (taskId) => ({
    type: TYPE_TODO_DELETE,
    payload: { taskId }
})
export const toggleTaskAction = (taskId) => ({
    type: TYPE_TODO_TOGGLE,
    payload: { taskId }
})


export const onAddTaskAction = (taskTitle) => ({
    type: TYPE_TODO_ADD,
    payload: { taskTitle }
})

export const filterTaskByTitleAction = (query) => (
    {
        type: TYPE_TODO_FILTER,
        payload: { query }
    }
)