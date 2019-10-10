const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/router");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const config = require("./config/config");
const db = require("./config/db");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const swaggerDefinition = {
  info: {
    title: "Test Development",
    version: "1.0.0",
    description: "A sample API"
  },
  host: config.server.hostname + ":" + config.server.port,
  basePath: "/"
};

const options = {
  swaggerDefinition: swaggerDefinition,
  explorer: true,
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", routes);

app.get("/", (req, res) => res.send("Server is UP and Running"));

db.on("connected", () => {
  app.listen(config.server.port, config.server.hostname, () =>
    console.log(
      "App is running successfully on : " +
        config.server.hostname +
        " port : " +
        config.server.port
    )
  );
});
module.exports = app;
