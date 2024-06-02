import { ADD_AIRPORT, UPDATE_AIRPORT, DELETE_AIRPORT, GET_ALL_AIRPORT,AIRPORT_LOADING_FALSE, AIRPORT_LOADING_TRUE, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllAirPort: [],
    addAirPort: [],
    updateAirPort: [],
    deleteAirPort: [],
    airPortLoading:false,
};

const airportReducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {

        case GET_ALL_AIRPORT:
            return {
                ...state,
                getAllAirPort: action.payload

            };
        case ADD_AIRPORT:
            return {
                ...state,
                addAirPort: action.payload
            };
        case UPDATE_AIRPORT:
            return {
                ...state,
                updateAirPort: action.payload
            };
        case DELETE_AIRPORT:
            return {
                ...state,
                deleteAirPort: action.payload
            };
            case AIRPORT_LOADING_FALSE:
                return {
                    ...state,
                    airPortLoading: false
    
                };
                case AIRPORT_LOADING_TRUE:
                    return {
                        ...state,
                        airPortLoading: true
        
                    };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default airportReducer;