import productSchema from "./productSchema.js";

// Create a new product
export const createNewProduct = (prodObj) => {
  return productSchema(prodObj).save();
};

// Get product by ID
export const getProductById = (id) => {
  return productSchema.findById(id);
};

// Update product by filter
export const updateProduct = async (filter, obj) => {
  return await productSchema.findOneAndUpdate(filter, obj, { new: true });
};

// Delete product by filter
export const deleteProductById = async (id) => {
  return await productSchema.findByIdAndDelete(id);
};
