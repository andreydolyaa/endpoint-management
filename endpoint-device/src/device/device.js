import os from "os";

class Device {
  constructor() {}
  static get getDeviceIdentifier() {
    return {
      deviceIdentifier: process.env.DEVICE_IDENTIFIER,
      osVersion: this.osVersion(),
      userInfo: this.userInfo(),
      upTime: this.upTime(),
      totalMemory: this.totalMemory(),
      freeMemory: this.freeMemory(),
      osRelease: this.osRelease(),
      machineType: this.machineType(),
      hostName: this.hostName(),
      homeDir: this.homeDir(),
    };
  }
  static osVersion() {
    return os.version();
  }
  static userInfo() {
    return os.userInfo();
  }
  static upTime() {
    return os.uptime();
  }
  static totalMemory() {
    return os.totalmem();
  }
  static freeMemory() {
    return os.freemem();
  }
  static osRelease() {
    return os.release();
  }
  static machineType() {
    return os.machine();
  }
  static hostName() {
    return os.hostname();
  }
  static homeDir() {
    return os.homedir();
  }
}

export default Device;
