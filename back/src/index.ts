


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const dotenv =  require('dotenv');

import routeRole from "./routes/Roles";
import routeUser from "./routes/User";
dotenv.config();
app.use("/role", routeRole);
app.use("/user",routeUser);
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} is running on port :${PORT}`);
});
