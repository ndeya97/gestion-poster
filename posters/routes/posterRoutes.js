const express = require('express');
const posterController = require('../controllers/posterController');

const router = express.Router();

router.get("/", posterController.poster_index);
router.get("/:id", posterController.poster_details);
router.put("/:id", posterController.poster__update);
router.post("/", posterController.poster_create);
// router.delete("/:id", posterController.poster_delete);

module.exports = router;