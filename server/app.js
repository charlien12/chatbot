const express = require("express");
const app = express();
const productRoute = require("./routes/ProductRoutes");
const errorMiddleware = require("./middleware/Error");
app.use(express.json());
app.use("/api/v1", productRoute);
app.use(errorMiddleware);
module.exports = app;
