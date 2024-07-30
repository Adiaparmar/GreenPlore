const mongoose = require("mongoose");

var prodcategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PCategory",
    },
    subCategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PCategory",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PCategory", prodcategorySchema);
