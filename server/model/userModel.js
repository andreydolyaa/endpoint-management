import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    role: {
      type: String,
    },
    id: {
      type: String,
      default: function () {
        return this._id;
      },
      index: true,
    },
  },
  { versionKey: false }
);

export const User = mongoose.model("User", userSchema);
