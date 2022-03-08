import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
  text: String,
  todos: [String],
  creator: String,
  name: String,
  email: String,
});

const UserData = mongoose.model("UserData", userDataSchema);

export default UserData;