import { toast } from "react-toastify";
import auth from "../../config/auth";
import {
  ApiDelete,
  ApiGet,
  ApiPost,
  ApiPostNoAuth,
  ApiPut,
} from "../../helper/axios";

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
} from "../type";

export const SignUpAction = (signupData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/user/register`, signupData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: SIGNUP_DATA,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_DATA,
          payload: error,
        });
      });
  };
};

export const loginAction = (LogInData) => {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });
    dispatch({
      type: ADD_LOGIN_LOADING,
      payload: true,
    });
    return ApiPostNoAuth(`/auth/admin/login`, LogInData)
      .then((res) => {
        console.log("Res",res);
        auth.setAuthToken(res.token);
        let data = res.data;
        delete data.password;
        dispatchLoginActions(dispatch, {
          loading: false,
          success: res.data,
        });
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        dispatchLoginActions(dispatch, {
          loading: false,
          error: error,
        });
      });
  };
};
const dispatchLoginActions = (dispatch, { error, loading, success }) => {
  if (error !== undefined) {
    dispatch({
      type: ADD_LOGIN_ERROR,
      payload: error,
    });
  }
  if (loading !== undefined) {
    dispatch({
      type: ADD_LOGIN_LOADING,
      payload: loading,
    });
    dispatch({
      type: IS_LOADING,
      payload: loading,
    });
  }
  if (success !== undefined) {
    dispatch({
      type: ADD_LOGIN_SUCCESS,
      payload: success,
    });
  }
};

export const logoutAction = () => {
  return async (dispatch) => {
    // Make the logout API call
    ApiPut("/api/v1/user/logout")
      .then((res) => {
        dispatch({
          type: LOGOUT,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGOUT,
          payload: error,
        });
      });
  };
};

export const getAllUserAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/user/get/all`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_ALL_USERS_DATA,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_USERS_DATA,
          payload: error,
        });
      });
  };
};

export const updateUserAction = (updateData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/user/update/${updateData?.id}`, updateData)
      .then((res) => {
        dispatch({
          type: UPDATE_PROFILE_USER,
          payload: res.data,
        });
        toast.success(res?.message, { autoClose: 1000 })
        dispatch(getAllUserAction());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PROFILE_USER,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const deleteUserAction = (deleteData) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/user/delete/${deleteData}`)
      .then((res) => {
        dispatch({
          type: DELETE_PROFILE_USER,
          payload: res.data,
        });
        toast.success(res?.message, { autoClose: 1000 })
        dispatch(getAllUserAction());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PROFILE_USER,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};
export const recoverUserAction = (recoverData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/user/recover/${recoverData}`)
      .then((res) => {
        dispatch({
          type: RECOVER_PROFILE_USER,
          payload: res.data,
        });
        toast.success(res?.message, { autoClose: 1000 })
        dispatch(getAllUserAction());
      })
      .catch((error) => {
        dispatch({
          type: RECOVER_PROFILE_USER,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
}; 