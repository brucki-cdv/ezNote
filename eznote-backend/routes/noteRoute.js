const express = require("express");
const router = express.Router();
const noteController = require("./../controllers/noteController");
const authController = require("./../controllers/authController");

//router.use(authController.protectRoute)

router.get("/", noteController.getNotes);
router.get("/:id", noteController.getNote);
router.post("/", noteController.createNote);
router.delete("/:id", noteController.deleteNote);
router.patch("/tag", noteController.deleteTag);
router.patch("/:id", noteController.updateNote);
router.patch("/tag/:id", noteController.updateNoteTag);
module.exports = router;
