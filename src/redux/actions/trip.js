import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_TRIP, UPDATE_TRIP, DELETE_TRIP, GET_ALL_TRIP, } from "../type";

export const getAllTripAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/trips`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_TRIP,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_TRIP,
                    payload: error,
                });
            });
    };
};

export const addTripAction = (addTripData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/trip`, addTripData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_TRIP,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllTripAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TRIP,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateTripAction = (updateTripData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/trip/${updateTripData._id}`, updateTripData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_TRIP,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllTripAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_TRIP,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteTripAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/trip/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_TRIP,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllTripAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_TRIP,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
