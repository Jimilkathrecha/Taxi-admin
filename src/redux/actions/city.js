import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_CITY, UPDATE_CITY, DELETE_CITY, GET_ALL_CITY } from "../type";

export const getAllCityAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/cities`)
      .then((res) => {
        if (res?.status === "success") {
          dispatch({
            type: GET_ALL_CITY,
            payload: res.data.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CITY,
          payload: error,
        });

      });
  };
};

export const addCategoryAction = (addCityData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/city`, addCityData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_CITY,
            payload: res.data,
          });
          toast.success(res?.data?.message, { autoClose: 1000 })
          dispatch(getAllCityAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_CITY,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const updateCategoryAction = (updateCityData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/city/${updateCityData._id}`, updateCityData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_CITY,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllCityAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CITY,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })

      });
  };
};

export const deleteCategoryAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/city/${deleteId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: DELETE_CITY,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllCityAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CITY,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })

      });
  };
};
