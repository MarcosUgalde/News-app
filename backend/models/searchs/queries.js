const { sql } = require("slonik");

const selectFrontPage = (url) => sql.unsafe`
    SELECT newspapers_name, web_url
    FROM newspapers
    WHERE web_url LIKE ${url}
`;

const insertSearch = (text, user_id) => sql.unsafe`
  INSERT INTO searchs (
    words_searched, searched_id
  ) VALUES (
    ${text}, ${user_id}
  )
`;

const insertComment = (text, user_id) => sql.unsafe`
  INSERT INTO comments (
    comment_text, user_id
  ) VALUES (
    ${text}, ${user_id}
  )
`;

module.exports = {
  selectFrontPage,
  insertSearch,
  insertComment,
};
