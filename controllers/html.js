const getStaticFilePath = require("../utils/getStaticFile");

// create the filepath for index.html
const renderHomePage = (req, res) => {
  const filePath = getStaticFilePath("index");

  // serve the static file (index.html)
  res.sendFile(filePath);
};

// create the filepath for notes.html
const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");

  // serve the static file (notes.html)
  res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotesPage,
};
