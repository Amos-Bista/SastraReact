// adminModel.js

const mongoose = require('mongoose');
const AdminLoginSchema = require('../schema/adminLogin');

const AdminLogin = mongoose.model('AdminLogin', AdminLoginSchema);

module.exports = AdminLogin;
