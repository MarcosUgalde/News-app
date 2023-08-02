const router = require("express").Router();
const { authorizer } = require("../middlewares");

const searchsControllers = require("../controllers/searchs");

module.exports = (db) => {
  router.get("/:url", authorizer(), searchsControllers.getFrontPage(db));

  return router;
};
