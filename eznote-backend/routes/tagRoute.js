const express = require("express");
const router = express.Router();
const tagController = require("./../controllers/tagController");
const authController = require("./../controllers/authController");

//router.use(authController.protectRoute)

router.get("/", tagController.getTags);
router.post("/", tagController.createTag);
router.delete("/:id", tagController.deleteTag);
router.patch("/:id", tagController.updateTag);

module.exports = router;
