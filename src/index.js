import { Action } from "./models/action";
import { Task } from "./models/task";

// la partie donnees
const initialState = {
  todos: [
    new Task(1, "Task 1"),
    new Task(2, "Task 2")
  ]
}

//types
export const TYPE_TODO_ADD = "todo/add"

//reducer functions
const TodoReducer = (
  state,
  action=new Action()
) => {
  switch (action.type) {

    case TYPE_TODO_ADD:
      return [...state,
      new
        Task(
          state.length + 1,
          action.payload.title,
          action.payload.isCompleted
        )
      ]
    default:
      return state
  }
}
//utilisation
const newStateTodo1 = 
TodoReducer(initialState.todos,
  new Action(TYPE_TODO_ADD,new Task(3,"task 3")))

console.log(newStateTodo1)


const newStateTodo2 = TodoReducer(newStateTodo1,
  new Task(4, "Task 4"),
  TYPE_TODO_ADD)
console.log(newStateTodo2)

const newStateTodo3 = TodoReducer(newStateTodo2,
  new Task(5, "Task 5"),
  TYPE_TODO_ADD)
console.log(newStateTodo3)
