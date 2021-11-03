import { ANIMES_DATA } from "../../data/animes";

const initialState =  {
    movies:ANIMES_DATA
}

export const RootReducer = 
(prevState=initialState,{type,payload})=>{
    switch (type) {
        default: return prevState;
    }
}


