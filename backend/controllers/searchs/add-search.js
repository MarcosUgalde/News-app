const errors = require("../../misc/errors");
const { addSearch } = require("../../models/searchs");

module.exports = (db) => async (req, res, next) => {
  const { text, user_id } = req.body;
  //de cara a unirlo al front seguramente el user_id haya que sacarlo de res.locals
  const search = addSearch(await db)(text, user_id);

  if (!search.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: (await search).data,
  });
};
