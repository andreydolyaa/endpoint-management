import * as actions from "./userTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const signinReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SIGN_IN_REQUEST:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: payload?.user,
        loading: false,
        error: null,
      };
    case actions.SIGN_IN_FAILED:
      return {
        ...state,
        user: null,
        loading: false,
        error: payload?.error,
      };
    case actions.REFRESH_TOKEN:
      return {
        ...state,
        user: payload?.user,
      };
    case actions.SIGN_OUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
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
