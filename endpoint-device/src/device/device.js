import os from "os";

class Device {
  constructor() {}
  static sendDeviceIdentifier() {
    return {
      deviceIdentifier: process.env.DEVICE_IDENTIFIER,
      osVersion: this.osVersion,
      userInfo: this.userInfo,
      upTime: this.upTime,
      totalMemory: this.totalMemory,
      freeMemory: this.freeMemory,
      osRelease: this.osRelease,
      machineType: this.machineType,
      hostName: this.hostName,
      homeDir: this.homeDir,
    };
  }
  get osVersion() {
    return os.version();
  }
  get userInfo() {
    return os.userInfo();
  }
  get upTime() {
    return os.uptime();
  }
  get totalMemory() {
    return os.totalmem();
  }
  get freeMemory() {
    return os.freemem();
  }
  get osRelease() {
    return os.release();
  }
  get machineType() {
    return os.machine();
  }
  get hostName() {
    return os.hostname();
  }
  get homeDir() {
    return os.homedir();
  }
}

export default Device;
