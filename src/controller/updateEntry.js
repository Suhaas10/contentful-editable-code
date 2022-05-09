const {clientManager} = require("../config/setup");

const updateEntry = (
  spaceId = "",
  environment = "",
  entryId = "",
  shouldPublish = false,
  payload = {}
) => {
  return clientManager
    .getSpace(spaceId)
    .then((space) => space.getEnvironment(environment))
    .then((environment) => environment.getEntry(entryId))
    .then((entry) => {
      console.log("entry", JSON.stringify(entry, null, 2));
      for (let key in payload) {
        if (entry && entry.fields && entry.fields[key]) {
          entry.fields[key]["en-US"] = payload[key];
        }
      }
      return entry.update();
    })
    .then((entry) => (shouldPublish ? entry.publish() : entry));
};

module.exports = updateEntry;
