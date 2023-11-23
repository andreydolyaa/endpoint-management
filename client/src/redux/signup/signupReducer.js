import * as actions from "./signupTypes";

const initialState = {
  status: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SIGN_UP_REQUEST:
      return { ...state, status: null, loading: true, error: null };
    case actions.SIGN_UP_SUCCESS:
      return { ...state, status: payload.status, loading: false, error: null };
    case actions.SIGN_UP_FAILED:
      return { ...state, status: null, loading: false, error: payload.error };
    
    case actions.SIGN_IN_REQUEST:
      return {...state, }
    default:
      return state;
  }
};

export default authReducer;
