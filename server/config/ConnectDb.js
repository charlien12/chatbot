const mongoose = require("mongoose");
const ConnectDb = async () => {
  mongoose
    .connect(process.env.DbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("Connection established");
    })
    .catch((err) => {
      `${err.message}`;
    });
};
mongoose.set("strictQuery", true);
module.exports = ConnectDb;
