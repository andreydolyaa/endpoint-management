import { webSocketMessageTypes as type } from "./webSocketMessageTypes.js";
import { createNewDevice, updateDevice } from "../modules/devices/device.js";

export const handleIncomingWebSocketMessages = async (message) => {
  if (message.type === type.INITIAL_CONNECTION) {
    await createNewDevice(message);
  } else if (message.type === type.UPDATE_MESSAGE) {
    await updateDevice(message);
  }
};
