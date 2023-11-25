import * as actions from "./userTypes";
import api from "../../api/api";

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: actions.SIGN_IN_REQUEST });

    try {
      const response = await api.post("/auth/signin", credentials);
      const data = response.data;

      dispatch({
        type: actions.SIGN_IN_SUCCESS,
        payload: { accessToken: data?.accessToken },
      });
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      dispatch({ type: actions.SIGN_IN_FAILED, payload: { error: message } });
    }
  };
};

export const clearError = () => {
  return {
    type: actions.CLEAR_ERROR,
    payload: {},
  };
};
