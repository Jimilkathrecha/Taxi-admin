import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_AIRPORT, UPDATE_AIRPORT, DELETE_AIRPORT, GET_ALL_AIRPORT, AIRPORT_LOADING_FALSE, } from "../type";

export const getAllAirPortAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/airports`)
            .then((res) => {
                console.log("res::::::",res);
                if (res?.status === "success") {
                    dispatch({
                        type: GET_ALL_AIRPORT,
                        payload: res.data.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_AIRPORT,
                    payload: error,
                });
            });
    };
}

export const addAirPortAction = (addAirPortData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/airport`, addAirPortData)
            .then((res) => {
                console.log("res",res);
                if (res?.status === 201) {
                    dispatch({
                        type: ADD_AIRPORT,
                        payload: res.data,
                    });
                    dispatch({
                        type:AIRPORT_LOADING_FALSE
                    })
                    dispatch(getAllAirPortAction())
                    toast.success(res?.data?.message, { autoClose: 1000 })
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_AIRPORT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

// export const updateAirPortAction = (updateAirPortData) => {
//     return (dispatch) => {
//         return ApiPut(`/api/v1/airport/${updateAirPortData._id}`, updateAirPortData)
//             .then((res) => {
//                 if (res?.status === 200) {
//                     dispatch({
//                         type: UPDATE_AIRPORT,
//                         payload: res.data,
//                     });
//                     toast.success(res?.message, { autoClose: 1000 })
//                     dispatch(getallAttributeAction());
//                 }
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: UPDATE_AIRPORT,
//                     payload: error,
//                 });
//                 toast.error(error?.response?.data?.message, { autoClose: 1000 })
//             });
//     };
// };

export const deleteAirPortAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/airport/${deleteId}`)
            .then((res) => {
                console.log("resres",res);
                // if (res?.status === "") {
                    dispatch({
                        type: DELETE_AIRPORT,
                        payload: res.data,
                    });
                    dispatch(getAllAirPortAction())
                    toast.success(res?.message, { autoClose: 1000 })
                // }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_AIRPORT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
