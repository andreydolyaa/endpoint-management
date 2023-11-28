import * as actions from "./toastTypes";

export const setToastMessage = (message) => {
  return {
    type: actions.SET_MESSAGE,
    payload: message,
  };
};
