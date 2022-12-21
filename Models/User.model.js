import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      validate: {
        validator: /^[a-zA-Z0-9]*$/,
        message:
          "Usernames must be 3 to 16 characters long and contain only alphanumeric characters and underscores (_).",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = mongoose.model("users", UserSchema);
