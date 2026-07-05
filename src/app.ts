import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config/env";
import cookieParser from "cookie-parser";
import notFound from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app : Application = express();
app.use(cors({
      origin: config.APP_URL,
      credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req : Request, res : Response) => {
      res.json({
            success: true,
            message: "Welcome to the Rent Sports and Outdoor Gear API",
      })
});


// Not Found Route
app.use(notFound)
// Global Error Handler
app.use(globalErrorHandler)

export default app;