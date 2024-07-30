const asyncHandler = require("express-async-handler");
const Vendor = require("../models/vendorModel");

// create a vendor
const createVendor = asyncHandler(async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json({ status: true, data: newVendor });
  } catch (error) {
    throw new Error(error);
  }
});

// get all vendors
const getallVendors = asyncHandler(async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("user").populate("products");
    res.status(201).json({ status: true, data: vendors });
  } catch (error) {
    throw new Error("Something went wrong", 400);
  }
});

// get vendor by slug
const getVendorBySlug = asyncHandler(async (req, res) => {
  try {
    const vendors = await Vendor.findOne({ slug: req.params.slug }).populate(
      "user",
      "-password"
    );
    res.status(201).json({ status: true, data: vendors });
  } catch (error) {
    throw new Error("Something went wrong", 400);
  }
});

// update vendor
const updateVendor = asyncHandler(async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!vendor) {
      throw new Error("Vendor not found", 404);
    }
    res.status(201).json({ status: true, data: vendor });
  } catch (error) {
    throw new Error("Something went wrong", 400);
  }
});

//delete vendor
const deleteVendor = asyncHandler(async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      throw new Error("Vendor not found", 404);
    }
    res.status(201).json({ status: true, data: vendor });
  } catch (error) {
    throw new Error("Something went wrong", 400);
  }
});

module.exports = {
  createVendor,
  getallVendors,
  getVendorBySlug,
  updateVendor,
  deleteVendor,
};
