import { Device } from "../../model/deviceModel.js";
import { wsServer } from "../../index.js";

export const createNewDevice = async (device) => {
  const { deviceIdentifier, sessionId } = device;
  try {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const foundDevice = await Device.findOneAndUpdate(
      { deviceIdentifier },
      device,
      options
    );
    wsServer.sendMessage(sessionId, "Device created/updated successfully");
    return foundDevice;
  } catch (error) {
    wsServer.sendMessage(sessionId, `Failed to save device to DB: ${error}`);
    return error;
  }
};

export const updateDevice = async (data) => {
  const { deviceIdentifier } = data;
  try {
    const update = await Device.findOneAndUpdate(
      { deviceIdentifier },
      { ...data }
    );
    if (!update) throw new Error("Device not found");
  } catch (error) {
    wsServer.sendMessage(
      data.sessionId,
      `Failed to update device in DB: ${error}`
    );
    return error;
  }
};
