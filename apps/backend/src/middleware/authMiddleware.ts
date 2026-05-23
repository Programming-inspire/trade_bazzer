import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { AuthRequest, IUser } from "../types/auth.js";

const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as { id: string };

      const user = await User.findById(decoded.id)
        .select("-password")
        .lean();

      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      req.user = {
        ...user,
        _id: user._id.toString(),
      } as IUser;

      next();
    } else {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }
  } catch {
    return res.status(401).json({
      message: "Not authorized, token failed",
    });
  }
};

export { protect };