const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Kossti:LUzmBuYvq16JS1k1@cluster0.qq8ihza.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

// LUzmBuYvq16JS1k1
// mongodb+srv://Kossti:LUzmBuYvq16JS1k1@cluster0.qq8ihza.mongodb.net/db-contacts?retryWrites=true&w=majority
