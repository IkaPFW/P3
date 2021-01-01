const express = require("express");
const router = express.Router();
const auth = require("../configuration/auth");

const { select, insert, update, destroy } = require("../SubCritGaransi");

router.get("/", select);
router.post("/", insert);
router.put("/:id", auth, update);
router.delete("/:id", auth, destroy);

module.exports = router;