import {
  IS_LOADING,
  ADD_LOGIN_LOADING,
  ADD_LOGIN_ERROR,
  ADD_LOGIN_SUCCESS,
  GET_PROFILE_USER,
  LOGOUT,
  UPDATE_PROFILE_USER,
  SIGNUP_DATA,
  GET_ALL_USERS_DATA,
  DELETE_PROFILE_USER,
  GET_ALL_DEACTIVE_USERS_DATA,
  RECOVER_PROFILE_USER,
  RESET_GLOBAL_STATE,
} from "../type";

const initialState = {
  addLoginLoading: false,
  addLoginSuccess: null,
  addLoginError: null,
  isLoggedIn: false,
  signupUserData: [],
  getAllUsers: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_DATA:
      return {
        ...state,
        signupUserData: action.payload,
      };
    case ADD_LOGIN_LOADING:
      return {
        ...state,
        addLoginLoading: action.payload,
      };
    case ADD_LOGIN_SUCCESS:
      return {
        ...state,
        addLoginSuccess: action.payload,
      };
    case ADD_LOGIN_ERROR:
      return {
        ...state,
        addLoginError: action.payload,
      };
    case GET_ALL_USERS_DATA:
      return {
        ...state,
        getAllUsers: action.payload,
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
      };

    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
