const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    avatar: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;

//MongoDB veritabanı için Mongoose kullanarak bir "User" (Kullanıcı) modelini tanımlar. Bu model, kullanıcı bilgilerini ve bazı ek verileri saklamak için kullanılır. 