const { authJwt } = require("../middlewares");
const { graphQLController } = require("../controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/graphQLBackend", [authJwt.verifyToken], graphQLController.graphQL);
};
