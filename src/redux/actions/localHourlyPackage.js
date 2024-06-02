import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_LOCAL_HOURLY, UPDATE_LOCAL_HOURLY, DELETE_LOCAL_HOURLY, GET_ALL_LOCAL_HOURLY, } from "../type";

export const getAlllocalHourlyAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/localHourlyPackages`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_LOCAL_HOURLY,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_LOCAL_HOURLY,
                    payload: error,
                });
            });
    };
};

export const addLocalHourlyAction = (addLocalHourlyData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/localHourlyPackages`, addLocalHourlyData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_LOCAL_HOURLY,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAlllocalHourlyAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_LOCAL_HOURLY,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateAction = (updateLocalHourlyData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/localHourlyPackage/${updateLocalHourlyData._id}`, updateLocalHourlyData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_LOCAL_HOURLY,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAlllocalHourlyAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_LOCAL_HOURLY,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteBlogAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/localHourlyPackage/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_LOCAL_HOURLY,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAlllocalHourlyAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_LOCAL_HOURLY,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
