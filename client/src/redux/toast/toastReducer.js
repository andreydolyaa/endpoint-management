import * as actions from "./toastTypes";

const initialState = {
  message: null,
};

const showToast = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default showToast;
