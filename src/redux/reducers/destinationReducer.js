import { ADD_DESTINATION, UPDATE_DESTINATION,ADD_DESTINATION_LANDMARK, DELETE_DESTINATION, DESTINATION_LOADING_TRUE,DESTINATION_LOADING_FALSE, GET_ALL_DESTINATION, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllDestination: [],
    addDestination: [],
    addDestinationLandMark:[],
    updateDestination: [],
    deleteDestination: [],
    destinationLoading:false
};

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DESTINATION:
            return {
                ...state,
                getAllDestination: action.payload

            };
        case ADD_DESTINATION:ADD_DESTINATION_LANDMARK
            return {
                ...state,
                addDestination: action.payload
            };
            case ADD_DESTINATION_LANDMARK:
            return {
                ...state,
                addDestinationLandMark: action.payload
            };
        case UPDATE_DESTINATION:
            return {
                ...state,
                updateDestination: action.payload
            };
        case DELETE_DESTINATION:
            return {
                ...state,
                deleteDestination: action.payload
            };
            case DESTINATION_LOADING_TRUE:
                return {
                    ...state,
                    destinationLoading:true
    
                };
                case DESTINATION_LOADING_FALSE:
                    return {
                        ...state,
                        destinationLoading: false
        
                    };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default destinationReducer;