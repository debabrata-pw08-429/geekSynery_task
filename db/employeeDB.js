const mongoose = require("mongoose");

const employeeDB = mongoose.createConnection(
  process.env.EMPLOYEES_DB_URI
);

employeeDB.on("connected", () =>
  console.log("Connected to Employees DB")
);

employeeDB.on("error", (err) =>
  console.error("Employees DB error:", err)
);

module.exports = employeeDB;
