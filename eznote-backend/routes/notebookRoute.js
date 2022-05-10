const express = require('express');
const router = express.Router();
const notebookController = require('./../controllers/notebookController');
const authController = require('./../controllers/authController');

//router.use(authController.protectRoute)

router.get('/', notebookController.getNotebooks)
router.get('/:id', notebookController.getNotebook)
router.post('/', notebookController.createNotebook)
router.delete('/:id', notebookController.deleteNotebook)
router.patch('/:id', notebookController.updateNotebook)

module.exports = router;