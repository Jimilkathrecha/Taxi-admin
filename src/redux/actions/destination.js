import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_DESTINATION, UPDATE_DESTINATION, ADD_DESTINATION_LANDMARK,DELETE_DESTINATION, GET_ALL_DESTINATION } from '../type';

export const getAllDestinationAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/destination`)
      .then((res) => {
        if (res?.status === "success") {
          dispatch({
            type: GET_ALL_DESTINATION,
            payload: res.destination,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_DESTINATION,
          payload: error,
        });
      });
  };
};

export const addDestinationAction = (addDestinationData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/destination`, addDestinationData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_DESTINATION,
            payload: res.data,
          });
          toast.success(res?.data?.message, { autoClose: 1000 })
          dispatch(getAllDestinationAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_DESTINATION,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const addDestinationLandMarkAction = (addDestinationLandMarkData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/destination-landmark`, addDestinationLandMarkData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_DESTINATION_LANDMARK,
            payload: res.data,
          });
          toast.success(res?.data?.message, { autoClose: 1000 })
          dispatch(getAllDestinationAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_DESTINATION_LANDMARK,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const updateDestinationAction = (updateDestinationData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/destination/edit/${updateDestinationData._id}`,updateDestinationData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_DESTINATION,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllDestinationAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_DESTINATION,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const deleteDestinationAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/${deleteId}`)
      .then((res) => {
        // if (res?.status === 200) {
          dispatch({
            type: DELETE_DESTINATION,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllDestinationAction());
        // }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_DESTINATION,
          payload: error,
        });
      });
  };
};

