const mongoose = require("mongoose");
function dbConnect() {
  mongoose
    .connect(process.env.MONGO_URI_DEV)
    .then(() => {
      console.log("APP CONNECTED TO MONGODB");
    })
    .catch((error) => {
      console.error(error);
    });
}
module.exports = dbConnect;
