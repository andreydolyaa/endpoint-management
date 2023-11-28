import { Device } from "../../model/deviceModel.js";
import { wsServer } from "../../index.js";

export const createNewDevice = async (device) => {
  const { deviceIdentifier } = device;
  try {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    await Device.findOneAndUpdate({ deviceIdentifier }, device, options);
    wsServer.sendMessage(
      device.sessionId,
      "Device created/updated successfully"
    );
  } catch (error) {
    wsServer.sendMessage(device.sessionId, "Failed to save device to DB");
  }
};
