import * as actions from "./userTypes";
import api from "../../api/axios";

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: actions.SIGN_IN_REQUEST });

    try {
      const response = await api.post("/auth/signin", credentials);
      const data = response.data;

      dispatch({
        type: actions.SIGN_IN_SUCCESS,
        payload: { user: data },
      });
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      dispatch({ type: actions.SIGN_IN_FAILED, payload: { error: message } });
    }
  };
};

// export const refreshToken = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.get("/refresh");
//       const data = response.data;
//       dispatch({
//         type: actions.REFRESH_TOKEN,
//         payload: { user: data },
//       });
//       return data;
//     } catch (error) {
//       dispatch({ type: actions.SIGN_IN_FAILED, payload: { error: message } });
//     }
//   };
// };
export const refreshToken = (user) => {
  return {
    type: actions.REFRESH_TOKEN,
    payload: user,
  };
};

export const clearError = () => {
  return {
    type: actions.CLEAR_ERROR,
    payload: {},
  };
};
