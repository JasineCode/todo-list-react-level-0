import { ADD_ARTICLE } from "../Constants/actions-type"

export const addPost = (newPost) => { return { type: ADD_ARTICLE, payload: newPost } }
