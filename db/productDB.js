const mongoose = require("mongoose");

const productDB = mongoose.createConnection(
  process.env.PRODUCTS_DB_URI
);

productDB.on("connected", () =>
  console.log("Connected to Products DB")
);

productDB.on("error", (err) =>
  console.error("Products DB error:", err)
);

module.exports = productDB;
