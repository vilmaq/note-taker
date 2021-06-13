const staticFilePath = require("../utils/getStaticFile");

const renderer = (page) => (req, res) => {
  const filePath = staticFilePath(page);

  res.sendFile(filePath);
};

module.exports = { renderer };
