import { Blog } from "../../models/blog";
import { ADD_ARTICLE } from "../Constants/actions-type";

const initialState ={
    posts:[
        new Blog("title 1","description 1")
    ]
}

const blogReducer = (state=initialState,action) => {
    const {type,payload} = action
    const { title,description} = payload
    switch (type) {
        case ADD_ARTICLE:
            return [...state.posts, new Blog(title,description)]

        default:
            return state;
    }
}

export default blogReducer;