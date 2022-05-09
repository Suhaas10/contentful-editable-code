const updateEntry = require("./controller/updateEntry");
const getEntry = require("./controller/getEntry");
const { SPACE_ID, ENTRY_ID, ENVIRONMENT } = require("./model/model.constants");

getEntry("landingPage")
  .then((entries) => {
    // Write you own serializer and de-serializer
    // start here
    const { id } = entries?.items?.[0]?.fields?.heroImage?.sys;
    const payload = {
      heroImage: {
        sys: {
          type: "Link",
          linkType: "Asset",
          id: id,
        },
      },
    };
    console.log(JSON.stringify(entries?.items?.[0]?.fields, null, 2));
    // end here
    return updateEntry(SPACE_ID, ENVIRONMENT, ENTRY_ID, true, payload);
  })
  .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
  .catch(console.error);
