import os from "os";

class Device {
  constructor() {}
  static get deviceIdentifier() {
    return process.env.DEVICE_IDENTIFIER;
  }
  static get osVersion() {
    return os.version();
  }
  static get userInfo() {
    return os.userInfo();
  }
  static get upTime() {
    return os.uptime();
  }
  static get totalMemory() {
    return os.totalmem();
  }
  static get freeMemory() {
    return os.freemem();
  }
  static get osRelease() {
    return os.release();
  }
  static machineType() {
    return os.machine();
  }
  static get hostName() {
    return os.hostname();
  }
  static get homeDir() {
    return os.homedir();
  }
}

export default Device;
