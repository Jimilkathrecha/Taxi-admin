import { ADD_LOCAL_HOURLY, UPDATE_LOCAL_HOURLY, DELETE_LOCAL_HOURLY, GET_ALL_LOCAL_HOURLY, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllLocalHourly: [],
    addLocalHourly: [],
    updateLocalHourly: [],
    deleteLocalHourly: [],
};

const localHourlyPackageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LOCAL_HOURLY:
            return {
                ...state,
                getAllLocalHourly: action.payload

            };
        case ADD_LOCAL_HOURLY:
            return {
                ...state,
                addLocalHourlyaddBlog: action.payload
            };
        case UPDATE_LOCAL_HOURLY:
            return {
                ...state,
                updateLocalHourly: action.payload
            };
        case DELETE_LOCAL_HOURLY:
            return {
                ...state,
                deleteLocalHourly: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default localHourlyPackageReducer;