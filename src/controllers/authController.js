import { getUserByEmail } from "../models/users/userModel.js";
import { comparePassword } from "../utils/bcrypt.js";
import { singAccessJWT, singRefresJWT } from "../utils/jwt.js";

export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await getUserByEmail(email);

    if (!admin) {
      return res.status(401).json({
        status: "error",
        message: "Invalid credentials",
      });
    }

    // Block non-admins
    if (admin.role !== "admin") {
      return res.status(403).json({
        status: "error",
        message: "Access denied. Admin only.",
      });
    }

    if (!comparePassword(password, admin.password)) {
      return res.status(401).json({
        status: "error",
        message: "Invalid credentials",
      });
    }

    const payload = {
      email: admin.email,
      role: admin.role,
      _id: admin._id,
    };

    const accessJWT = singAccessJWT(payload);
    const refreshJWT = singRefresJWT(payload);

    return res.json({
      status: "success",
      message: "Admin authenticated",
      tokens: {
        accessJWT,
        refreshJWT,
      },
    });
  } catch (error) {
    next(error);
  }
};
