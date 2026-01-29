import {
  createNewCategory,
  getCategoryByName,
  updateCategory,
} from "../models/categories/categoryModel.js";
import Category from "../models/categories/categorySchema.js";

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return next({ status: 400, message: "Category name is required" });
    }

    const exists = await getCategoryByName(name);

    if (exists) {
      return next({ status: 400, message: "Category already exists" });
    }

    const category = await createNewCategory({ name });

    res.json({
      status: "success",
      message: "Category created",
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await updateCategory({ _id: id }, { name }, { new: true });

    if (!category) {
      return next({ status: 404, message: "Category not found" });
    }

    res.json({
      status: "success",
      message: "Category updated",
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return next({ status: 404, message: "Category not found" });
    }

    res.json({
      status: "success",
      message: "Category deleted",
    });
  } catch (error) {
    next(error);
  }
};
