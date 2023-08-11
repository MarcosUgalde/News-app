const router = require("express").Router();
const { authorizer } = require("../middlewares");

const searchsControllers = require("../controllers/searchs");

module.exports = (db) => {
  router.get("/:url", authorizer(), searchsControllers.getFrontPage(db));
  router.post("/newsearch", authorizer(), searchsControllers.addSearch(db));

  return router;
};
