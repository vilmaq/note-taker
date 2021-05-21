const express = require("express");
const getAllNotes = require("../controllers/getAllNotes");
const router = express.Router();

router.get("/notes", getAllNotes);

module.exports = router;
