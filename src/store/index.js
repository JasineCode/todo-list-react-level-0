import { combineReducers, createStore } from "redux";
import { filterReducer } from "./reducers/filter";
import todoReducer from "./reducers/todo";

const store = createStore(combineReducers({
    todos:todoReducer,
    filter:filterReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store