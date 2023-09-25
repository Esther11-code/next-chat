import {Schema, connection} from 'mongoose'


const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: "user.png"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastSeen: {
    type: Date,
  }
});

const UserModel = connection
  .useDb("next-chat")
  .model("User", userSchema, "users");

  export default UserModel;