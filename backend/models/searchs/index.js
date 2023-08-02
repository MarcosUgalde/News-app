const { selectFrontPage } = require("./queries");

const getFrontPage = (db = async (url) => {
  try {
    const response = await db.query(selectFrontPage(url));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Get front page error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
});

module.exports = {
  getFrontPage,
};
