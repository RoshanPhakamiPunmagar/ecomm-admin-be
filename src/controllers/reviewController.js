import {
  approveReviewById,
  deleteReviewById,
} from "../models/reviews/reviewModel.js";

// APPROVE REVIEW
export const approveReview = async (req, res, next) => {
  try {
    const { id } = req.params;

    const review = await approveReviewById(id);

    if (!review) {
      return next({ status: 404, message: "Review not found" });
    }

    res.json({
      status: "success",
      message: "Review approved",
      review,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE REVIEW
export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;

    const review = await deleteReviewById(id);

    if (!review) {
      return next({ status: 404, message: "Review not found" });
    }

    res.json({
      status: "success",
      message: "Review deleted",
    });
  } catch (error) {
    next(error);
  }
};
