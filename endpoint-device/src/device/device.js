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
  static get cpus() {
    return os.cpus();
  }
  static get networkInterfaces() {
    return os.networkInterfaces();
  }
  static get cpuUsage() {
    return process.cpuUsage();
  }
  static get envs() {
    return process.env;
  }
  static get nodeProcessUpTime() {
    return process.uptime();
  }
  static get ipAddress() {
    const interfaces = Device.networkInterfaces;
    const ip = Object.values(interfaces)
      .flat()
      .find(
        (networkInterface) =>
          networkInterface.family === "IPv4" && !networkInterface.internal
      ).address;
    return ip;
  }
}

console.log(process.uptime());

export default Device;
