import mongoose, { Schema, models } from "mongoose";

const profileSchema = new Schema(
  {
    Head: {
      type: String,
      required: true,
    },
    Paragraph: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

const Profile = models.User || mongoose.model("Profile", profileSchema);
export default Profile;
