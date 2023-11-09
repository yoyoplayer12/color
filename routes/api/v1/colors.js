//require express
const express = require("express");
//create new router
const router = express.Router();

//import controller
const colorController = require("../../../controllers/api/v1/colors");


router.get("/", colorController.index);
router.get("/:id", colorController.show);
router.post("/", colorController.create);
router.put("/:id", colorController.update);
router.delete("/:id", colorController.destroy);

module.exports = router;