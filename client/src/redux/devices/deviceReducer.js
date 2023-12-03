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
        error: payload?.response?.data
          ? payload?.response?.data
          : payload?.message,
      };
    case "DEVICE_UPDATE":
      const updatedDevices = state.devices.map((device) => {
        if (device._id === payload._id) {
          return { ...device, ...payload };
        }
        return device;
      });

      if (!state.devices.some((device) => device._id === payload._id)) {
        updatedDevices.push(payload);
      }
      return { ...state, devices: updatedDevices };
    default:
      return state;
  }
};

export default deviceReducer;
