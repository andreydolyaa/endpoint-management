import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    deviceIdentifier: {
      type: String,
      unique: true,
      required: true,
    },
    osVersion: String,
    userInfo: Object,
    upTime: Number,
    totalMemory: Number,
    freeMemory: Number,
    osRelease: String,
    hostName: String,
    homeDir: String,
    sessionId: String,
    cpus: [Object],
    networkInterfaces: Object,
    cpuUsage: Object,
    nodeProcessUpTime: Number,
    ipAddress: String,
    connected: Boolean,
    systemLoad: [Number],
    cpuUsageCalculated: [Number],
    // id: {
    //   type: String,
    //   default: function () {
    //     return this._id;
    //   },
    //   index: true,
    // },
  },
  { versionKey: false }
);

export const Device = mongoose.model("Device", deviceSchema);
