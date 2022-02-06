const express = require("express");
const router = express.Router();
const registerDetailController = require("../controllers/registerController");

router.get("/", (req, res) => {
  res.json("Server is UP and Running");
});
router.post("/registration", registerDetailController.registerDetails);
module.exports = router;
