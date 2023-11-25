import * as actions from "./userTypes";

const initialState = {
  accessToken: null,
  loading: false,
  error: null,
};

const signinReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SIGN_IN_REQUEST:
      return {
        ...state,
        accessToken: null,
        loading: true,
        error: null,
      };
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        loading: false,
        error: null,
      };
    case actions.SIGN_IN_FAILED:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload.error,
      };
    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default signinReducer;
