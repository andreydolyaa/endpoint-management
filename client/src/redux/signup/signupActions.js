import * as actions from "./signupTypes";
import api from "../../api/api";

export const signUp = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: actions.SIGN_UP_REQUEST });
    try {
      const response = await api.post("/auth/signup", credentials);
      const { message = "" } = response.data;

      dispatch({ type: actions.SIGN_UP_SUCCESS, payload: { status: message } });
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      dispatch({ type: actions.SIGN_UP_FAILED, payload: { error: message } });
    }
  };
};


export const clearSignupError = () => {
  return {
    type: actions.CLEAR_SIGNUP_ERROR,
    payload: {}
  };
};