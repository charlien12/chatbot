const app = require("./app");
require("dotenv").config({ path: __dirname + "/config/appConfig.env" });
const ConnectDb = require("./config/ConnectDb");
ConnectDb();
app.listen(process.env.Port, (req, res) => {
  console.log(`server is listing in port number : ${process.env.Port}`);
});
