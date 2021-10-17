import { Action } from "../../models";
import { UPDATE_FILTER } from "../types";

export const filterReducer = (state=null,action=new Action()) =>{
    switch (action.type) {

        case UPDATE_FILTER:
            return action.payload.query
        default:
            return state;
    }
}