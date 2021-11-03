import { ANIMES_DATA } from "../../data/animes";
import { Anime } from "../../model/anime";
import { T_MOVIE_ADD } from "../types/movie";

const initialState = {
    movies: ANIMES_DATA
}

export const RootReducer =
    (prevState = initialState, { type, payload }) => {
        switch (type) {
            case T_MOVIE_ADD:
                return {
                    movies: [...prevState.movies,
                    new Anime(
                        prevState.movies.length + 1,
                        payload.title,
                        payload.description,
                        payload.thumbnail
                    )
                    ]
                }
            default: return prevState;
        }
    }


