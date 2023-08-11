const errors = require("../../misc/errors");
const { addSearch } = require("../../models/searchs");

module.exports = (db) => async (req, res, next) => {
  const { text, user_id } = req.body;
  //de cara a unirlo al front seguramente el user_id haya que sacarlo de res.locals
  const search = await addSearch(await db)(text, user_id);
  console.log("Search: ", search);

  if (!search.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: search.data,
  });
};
