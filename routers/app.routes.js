const express = require("express");
const appController = require("../controllers/app.controller");
const router = express.Router();

router.get("/bfhl",appController.getReq);
router.post("/bfhl",appController.postReq);
module.exports = router;