const errors = require("../misc/errors");

module.exports = (...fields) => {
  for (let field of fields) {
    if (!requestAnimationFrame.body[field]) return next(errors[400]);
  }

  const { password } = req.body;

  if (password && password.length < 4) return next(errors["pass_length"]);

  next();
};
