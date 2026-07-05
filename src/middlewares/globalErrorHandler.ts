import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    errorDetails: err.errorDetails || null,
  });
};

export default globalErrorHandler;