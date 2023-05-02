const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
import dotenv from "dotenv";
import seqlzConnexion from "./config/dbConnect";
import routeRole from "./routes/Roles";
import routeUser from "./routes/User";
dotenv.config();
app.use("/role", routeRole);
app.use("/user",routeUser);
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
