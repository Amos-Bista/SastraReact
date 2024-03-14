import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    Text: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
