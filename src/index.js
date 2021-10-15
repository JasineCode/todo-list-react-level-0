import { createStore } from "redux";
import { Action } from "./models/action"
import { Task } from "./models/task";

//our store 
const initialState = {

  todos: [
    new Task(1, "task 1"),
    new Task(2, "task 2")
  ]
}

//types of actions
const TYPE_TODO_ADD = "todo/add";
//reducer
const TodoReducer = (state = initialState.todos, action = new Action()) => {
  switch (action.type) {
    case TYPE_TODO_ADD:
      return [...state, new Task(action.payload.id, action.payload.title, action.payload.isCompleted)]
    default:
      return state
  }
}

//use of the reducer
const store = createStore(TodoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>console.log(store.getState()))



  store.dispatch(
  {
    type: TYPE_TODO_ADD,
    payload: new Task(3, "task 3")
  }
)

store.dispatch(
  {
    type: TYPE_TODO_ADD,
    payload: new Task(3, "task 3")
  }
)
store.dispatch(
  {
    type: TYPE_TODO_ADD,
    payload: new Task(3, "task 3")
  }
)

