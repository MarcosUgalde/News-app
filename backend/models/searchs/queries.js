const { sql } = require("slonik");

const selectFrontPage = (url) => sql.unsafe`
    SELECT newspapers_name, web_url
    FROM newspapers
    WHERE web_url LIKE ${url}
`;

const insertComment = (text) => sql.unsafe`
  INSERT INTO comments (
    comment_text
  ) VALUES (
    ${text}
  )
`;

module.exports = {
  selectFrontPage,
  insertComment,
};
