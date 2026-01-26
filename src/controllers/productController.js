import {
  createNewProduct,
  getProductById,
  updateProduct,
  deleteProductById,
} from "../models/products/productModel.js";

// Add new product
export const addProduct = async (req, res, next) => {
  try {
    const product = await createNewProduct(req.body);

    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};

// Update product
export const editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedProduct = await updateProduct({ _id: id }, req.body);

    if (!updatedProduct) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

// Delete product
export const removeProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await deleteProductById(id);

    if (!deleted) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
