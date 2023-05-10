


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
dotenv.configs
import { conf } from "./config/environnement";
import clientRoute from "./routes/Client";
import routeRole from "./routes/Roles";
import routeUser from "./routes/User";
const env = conf()
app.use("/role", routeRole);
app.use("/user",routeUser);
app.use("/client",clientRoute);
const PORT = env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`${env.APP_NAME} is running on port :${PORT}`);
});
