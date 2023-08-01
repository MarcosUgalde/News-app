const { insertUser } = require("./queries");

const createUser = (db = async (email, username, password) => {
  try {
    await db.query(insertUser(email, username, password));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("Create user error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
});

module.exports = {
  createUser,
};
