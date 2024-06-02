import { ADD_TRIP, UPDATE_TRIP, DELETE_TRIP, GET_ALL_TRIP, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllTrip: [],
    addTrip: [],
    updateTrip: [],
    deleteTrip: [],
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TRIP:
            return {
                ...state,
                getAllTrip: action.payload

            };
        case ADD_TRIP:
            return {
                ...state,
                addTrip: action.payload
            };
        case UPDATE_TRIP:
            return {
                ...state,
                updateTrip: action.payload
            };
        case DELETE_TRIP:
            return {
                ...state,
                deleteTrip: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default tripReducer;