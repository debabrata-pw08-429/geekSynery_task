const mongoose = require("mongoose");
const employeeDB = require("../db/employeeDB");

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
});

module.exports = employeeDB.model("Employee", employeeSchema);
