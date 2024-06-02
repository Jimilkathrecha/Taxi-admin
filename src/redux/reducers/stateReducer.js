import { ADD_STATE, UPDATE_STATE, DELETE_STATE, GET_ALL_STATE, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllState: [],
    addState: [],
    updateState: [],
    deleteState: [],
};

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STATE:
            return {
                ...state,
                getAllState: action.payload

            };
        case ADD_STATE:
            return {
                ...state,
                addState: action.payload
            };
        case UPDATE_STATE:
            return {
                ...state,
                updateState: action.payload
            };
        case DELETE_STATE:
            return {
                ...state,
                deleteState: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default stateReducer;