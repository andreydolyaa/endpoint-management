import * as actions from "./deviceTypes";

const initialState = {
  devices: [],
  loading: false,
  error: null,
};

const deviceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.DEVICES_REQUEST:
      return {
        ...state,
        devices: [],
        loading: true,
        error: null,
      };
    case actions.DEVICES_SUCCESS:
      return {
        ...state,
        devices: payload?.devices,
        loading: false,
        error: null,
      };
    case actions.DEVICES_FAILED:
      return {
        ...state,
        devices: [],
        loading: false,
        error: payload?.error,
      };
    default:
      return state;
  }
};

export default deviceReducer;
