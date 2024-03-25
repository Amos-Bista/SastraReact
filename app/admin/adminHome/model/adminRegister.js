const mongoose = require("mongoose");
const AdminRegisterSchema = require("../schema/adminRegister");

const AdminRegister = mongoose.model("AdminRegister", AdminRegisterSchema);

module.exports = AdminRegister;
