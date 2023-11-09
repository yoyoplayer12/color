//require express
const express = require("express");
//create new router
const router = express.Router();

//import controller
const colorController = require("../../../controllers/api/v1/colors");


router.get("/", colorController.index);
router.post("/", colorController.create);
module.exports = router;