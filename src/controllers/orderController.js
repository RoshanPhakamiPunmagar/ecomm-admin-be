import {
  getAllOrders,
  updateOrderStatus,
} from "../models/orders/orderModel.js";

// GET ALL ORDERS (ADMIN)
export const getAllOrdersAdmin = async (req, res, next) => {
  try {
    const orders = await getAllOrders();

    res.json({
      status: "success",
      result: orders.length,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE ORDER STATUS
export const updateOrderStatusByAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatus = [
      "pending",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
    ];

    if (!allowedStatus.includes(status)) {
      return next({ status: 400, message: "Invalid status value" });
    }

    const order = await updateOrderStatus(id, status);

    if (!order) {
      return next({ status: 404, message: "Order not found" });
    }

    res.json({
      status: "success",
      message: "Order status updated",
      order,
    });
  } catch (error) {
    next(error);
  }
};
