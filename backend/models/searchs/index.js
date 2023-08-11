const { selectFrontPage, insertComment, insertSearch } = require("./queries");

const getFrontPage = (db) => async (url) => {
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
};

const addSearch = (db) => async (text, user_id) => {
  try {
    const response = await db.query(insertSearch(text, user_id));
    console.log("Response: ", response);

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Create search error info: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const addComment = (db) => async (text, user_id) => {
  try {
    const response = await db.query(insertComment(text, user_id));

    return {
      ok: true,
      data: response.rows,
    };
  } catch {
    console.info("Comment insertion error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  getFrontPage,
  addSearch,
  addComment,
};
