const { deserialize } = require("simple-stateless-auth-library");
const errors = require("../misc/errors");

module.exports =
  (strict = true) =>
  (req, res, next) => {
    const payload = deserialize(req);

    console.log(payload);
    if (strict && !payload) return next(errors[401]);

    res.locals.user = payload || {};
    console.log(res.locals);

    next();
  };
