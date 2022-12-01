import { Schema, model, Types } from "mongoose";
import UserEntity from "../entities/UserEntity";

//Allow to manage the mongo db connection
const UserScheme = new Schema<UserEntity>(
  {
    nameUser: { type: String, required: true, trim: true },
    emailUser: { type: String, required: true, unique: true },
    passwordUser: { type: String, required: true },
  },
  { versionKey: false }
);

export default model("User", UserScheme, "User");
