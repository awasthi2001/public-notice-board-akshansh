import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = mongoose.model("users", UserSchema);
