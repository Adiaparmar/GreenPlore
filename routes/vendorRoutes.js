const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createVendor,
  getallVendors,
  getVendorBySlug,
  updateVendor,
  deleteVendor,
} = require("../controllers/vendorCtrl");
const router = express.Router();

router.post("/", authMiddleware, createVendor);
router.get("/all", getallVendors);
router.get("/:slug", getVendorBySlug);
router.put("/:id", updateVendor);
router.delete("/:id", deleteVendor);
module.exports = router;
