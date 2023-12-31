const { getFrontPage } = require("../../models/searchs");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { url } = req.params;
  const website = await getFrontPage(await db)(`https://${url}/`);

  if (!website) return next(errors[500]);

  return res.status(200).json({
    success: true,
    data: website.data,
  });
};
