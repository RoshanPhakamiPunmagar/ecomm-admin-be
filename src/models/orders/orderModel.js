import OrderSchema from "./orderSchema.js";

// Get all orders (admin)
export const getAllOrders = () => {
  return OrderSchema.find()
    .populate("products.productId", "name price images")
    .populate("userId", "email")
    .sort({ createdAt: -1 });
};

// Update order status
export const updateOrderStatus = (id, status) => {
  return OrderSchema.findByIdAndUpdate(id, { status }, { new: true });
};

export default OrderSchema;
