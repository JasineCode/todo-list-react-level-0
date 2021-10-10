import { Blog } from "../../models/blog";
import { ADD_ARTICLE } from "../Constants/actions-type";

const initialState = {
    articles: [
        new Blog(1, "title 1", `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia maxime sit laudantium nulla earum
                    molestiae, vitae voluptate, eum distinctio perspiciatis voluptates debitis exercitationem illo
                    tenetur assumenda dicta sequi excepturi deserunt!`),
        new Blog(2, "title 2", `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia maxime sit laudantium nulla earum
        molestiae, vitae voluptate, eum distinctio perspiciatis voluptates debitis exercitationem illo
        tenetur assumenda dicta sequi excepturi deserunt!`),
        new Blog(3, "title 3", `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia maxime sit laudantium nulla earum
        molestiae, vitae voluptate, eum distinctio perspiciatis voluptates debitis exercitationem illo
        tenetur assumenda dicta sequi excepturi deserunt!`)
    ]
}

const blogReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_ARTICLE:
            return [...state.articles, new Blog(payload.title, payload.description)]

        default:
            return state;
    }
}

export default blogReducer;