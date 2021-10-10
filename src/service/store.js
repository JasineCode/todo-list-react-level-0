import { createStore } from "redux";
import blogReducer from "./Reducers/blogReducer";

const store = createStore(blogReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;