const express = require("express");
const router = express.Router();

const cor_controller = require("../controller/cor.js")

router.post("/", cor_controller.store)
router.get("/", cor_controller.index)
router.get("/:id", cor_controller.show)
router.put("/:id", cor_controller.update)
router.delete("/:id", cor_controller.destroy)

module.exports = router