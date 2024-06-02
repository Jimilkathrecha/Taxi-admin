import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_STATE, UPDATE_STATE, DELETE_STATE, GET_ALL_STATE, } from "../type";

export const getAllStateAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/states`)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: GET_ALL_STATE,
                        payload: res.data.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_STATE,
                    payload: error,
                });
            });
    };
};

export const addStateAction = (addStateData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/state`, addStateData)
            .then((res) => {
                // if (res?.status === "success") {
                    dispatch({
                        type: ADD_STATE,
                        payload: res.data,
                    });
                    dispatch(getAllStateAction());
                    toast.success(res?.data?.message, { autoClose: 1000 })
                // }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_STATE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateStateAction = (updateStateData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/state/${updateStateData._id}`, updateStateData)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: UPDATE_STATE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllStateAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_STATE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteStateAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/state/${deleteId}`)
            .then((res) => {
                // if (res?.status === "success") {
                    dispatch({
                        type: DELETE_STATE,
                        payload: res.data,
                    });
                    dispatch(getAllStateAction());
                    toast.success(res?.message, { autoClose: 1000 })
                // }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_STATE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
