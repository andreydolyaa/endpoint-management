import { Device } from "../model/deviceModel.js";

export const getDevices = async (req, res, next) => {
  try {
    const devices = await Device.find({});
    if (!devices.length) throw new Error("No devices found");
    res.status(200).send({ devices });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
