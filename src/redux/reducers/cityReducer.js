import { ADD_CITY, UPDATE_CITY, DELETE_CITY, GET_ALL_CITY, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllCity: [],
    addCity: [],
    updateCity: [],
    deleteCity: [],
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CITY:
            return {
                ...state,
                getAllCity: action.payload

            };
        case ADD_CITY:
            return {
                ...state,
                addCity: action.payload
            };
        case UPDATE_CITY:
            return {
                ...state,
                updateCity: action.payload
            };
        case DELETE_CITY:
            return {
                ...state,
                deleteCity: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default cityReducer;