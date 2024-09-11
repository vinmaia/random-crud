const express = require("express");
const router = express.Router();

const ehbic_controller = require("../controller/ehbic")

router.post("/", ehbic_controller.store)
router.get("/", ehbic_controller.index)
router.get("/:id", ehbic_controller.show)
router.put("/:id", ehbic_controller.update)
router.delete("/:id", ehbic_controller.destroy)

module.exports = router