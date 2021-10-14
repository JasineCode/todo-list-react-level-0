import { Action } from "./models/action"
import { Task } from "./models/task";
//our store 
const initialState = {

  todos: [
    new Task(1, "task 1"),
    new Task(2, "task 2"),
    new Task(3, "task 3", true),
  ]
}

//types of actions
const TYPE_TODO_ADD = "todo/add";
//reducer
const TodoReducer = (state = initialState.todos, action = new Action()) => {
console.log(state)
  switch (action.type) {
    case TYPE_TODO_ADD:
      return [...state, new Task(action.payload.id,action.payload.title, action.payload.isCompleted)]
    default:
      return state
  }
}

//use of the reducer
const newState = TodoReducer(undefined, new Action(TYPE_TODO_ADD, new Task(4, "task 4")))
const newState2 = TodoReducer(newState, new Action(TYPE_TODO_ADD, new Task(5, "task 5")))
console.log(newState)
console.log(newState2)