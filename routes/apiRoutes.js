const { Router } = require("express");

//deconstruct functions  for the api routes
const { getNotes, writeNotes, deleteNotes } = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", writeNotes);
router.delete("/notes/:id", deleteNotes);

module.exports = router;
