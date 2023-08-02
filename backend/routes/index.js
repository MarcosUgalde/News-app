const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const searchsRoutes = require("./searchs");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/users", usersRoutes());
  router.use("/searchs", searchsRoutes(db));

  return router;
};
