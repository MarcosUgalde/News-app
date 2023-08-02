const { sql } = require("slonik");

const selectFrontPage = (url) => sql.unsafe`
    SELECT newspapers_name, web_url
    FROM newspapers
    WHERE web_url LIKE ${url}
`;

module.exports = {
  selectFrontPage,
};
