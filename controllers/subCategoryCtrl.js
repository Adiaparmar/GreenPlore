const SubCategory = require("../models/subCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

//createSubCategory
const createSubCategory = asyncHandler(async (req, res) => {
  try {
    const newSubCategory = await SubCategory.create(req.body);
    res.json(newSubCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//update SubCategory
const updateSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedSubCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//delete SubCategory
const deleteSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete(id);
    res.json(deletedSubCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//getSubCategory
const getSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaSubCategory = await SubCategory.findById(id);
    res.json(getaSubCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//getall SubCategory
const getallSubCategory = asyncHandler(async (req, res) => {
  try {
    const getallSubCategory = await SubCategory.find();
    res.json(getallSubCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategory,
  getallSubCategory,
};
