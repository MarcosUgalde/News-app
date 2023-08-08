const errors = require("../../misc/errors");
const { addComment } = require("../../models/searchs");

module.exports = (db) => async (req, res, next) => {
  const { text, user_id } = req.body;
  const comment = await addComment(await db)(text, user_id);

  if (!comment.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: comment.data,
  });
};
