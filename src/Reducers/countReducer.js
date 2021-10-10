import { INCREMENT_COUNTER } from "../Constante/action-type";

const initialState = {
    counter: 0
};

rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:

            return {
                counter: state.counter + 1
            }
        default:
            return state;
    };
}
export default rootReducer