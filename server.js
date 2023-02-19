const express = require("express");
const cors = require("cors");

const ApplicationExpressObj = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

ApplicationExpressObj.use(cors(corsOptions));

// parse requests of content-type - application/json
ApplicationExpressObj.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
ApplicationExpressObj.use(express.urlencoded({ extended: true }));

// simple route
ApplicationExpressObj.get("/", (req, res) => {
  res.json({ message: "Welcome to Staytouch Application." });
});

// routes
require("./app/routes/auth.routes")(ApplicationExpressObj);

require("./app/routes/graphQLbackend.routes")(ApplicationExpressObj);

// set port, listen for requests
const PORT = process.env.PORT || 3030;
ApplicationExpressObj.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

