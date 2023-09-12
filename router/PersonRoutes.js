const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPerson,
  getOne,
  updatePerson,
  deletePerson,
} = require("../controller/PersonController");

router.post("/", addPerson);
router.get("/", getPerson);
router.get("/:id", getOne);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);
module.exports = router;
