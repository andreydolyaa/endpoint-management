import * as actions from "./deviceTypes";
import apiCallWithToken from "../../api/fetchPrivateData";

export const getDevices = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actions.DEVICES_SUCCESS });
    const accessToken = getState().user?.user?.accessToken;
    try {
      const response = await apiCallWithToken(
        "/devices",
        "get",
        null,
        accessToken
      );
      const devices = response?.data || [];
      dispatch({ type: actions.DEVICES_SUCCESS, payload: { devices } });
    } catch (error) {
      dispatch({ type: actions.DEVICES_FAILED, payload: error });
    }
  };
};
