import mongoose from "mongoose";
import reviewSchema from "./reviewSchema.js";

const Review = mongoose.model("Review", reviewSchema);

// Approve review
export const approveReviewById = (id) => {
  return Review.findByIdAndUpdate(id, { approved: true }, { new: true });
};

// Delete review
export const deleteReviewById = (id) => {
  return Review.findByIdAndDelete(id);
};

export default Review;
