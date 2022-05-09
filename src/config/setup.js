const contentful = require("contentful-management");
const { createClient } = require("contentful");
const {
  ACCESS_TOKEN_CLIENT,
  ACCESS_TOKEN_MANAGEMENT,
} = require("./app.constants");
const { SPACE_ID } = require("../model/model.constants");

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN_CLIENT,
});

const clientManager = contentful.createClient({
  accessToken: ACCESS_TOKEN_MANAGEMENT,
});

module.exports = {clientManager, client};
