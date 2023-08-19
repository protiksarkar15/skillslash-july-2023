const mongoose = require("mongoose");
const toJSON = require("./plugins/toJSON.plugin");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
  },
  {
    methods: {
      verifyPassword(password) {
        return password === this.password;
      },
    },
  }
);

userSchema.plugin(toJSON);

const User = mongoose.model("User", userSchema);

module.exports = User;