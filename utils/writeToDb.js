const fs = require("fs");
const path = require("path");

// write the data into the db.json file
const writeToDb = (data) => {
  try {
    // defines the path that is containing the db.json
    const filePath = path.join(__dirname, "../db/db.json");

    fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeToDb;
