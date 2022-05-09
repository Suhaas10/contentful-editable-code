const { client } = require("../config/setup");

const getEntry = async (contentType = "") => {
  return await client.getEntries({ content_type: contentType });
  // return entries?.items?.[0]?.fields;
};

module.exports = getEntry;