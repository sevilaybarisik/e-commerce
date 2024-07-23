const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;


// MongoDB veritabanı için bir "Category" (Kategori) modelini tanımlamak için Mongoose kullanıyor.