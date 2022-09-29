const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    nid: { type: String, required: true },
    f_member: { type: String, required: true },
    phone_no: { type: String, required: true },
    date: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, require: true }

}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;